import { useContext, useState } from 'react'
import Gameboy from "./Gameboy";
import Title from "./Title";
import Editor from "./Editor";
import "../styles/UploadForm.module.css";
import EditorRow from "./editor/EditorRow";
import { convertToHex } from 'midi-to-lsdj/dist/utils';
import EditorRowNumber from "./editor/EditorRowNumber";
import AppContext from "../contexts/AppContext";


function calculateBlocks(file: any | null) {
  if (file !== null) {
    if (file.size > 1024) {
      return parseInt((file.size / 1024) as any);
    }
  }
  return 0;
}

const loadingScreen = (
  <div className="loading-screen">LOADING...</div>
);

const fetchingError = (resetError) => (
  <div className="loading-screen" onClick={resetError}>ERROR :(</div>
)


export function UploadForm() {
  const { setData, isLoading } = useContext(AppContext)
  const [selectedFile, setSelectedFile] = useState(null)
  const [fetchError, setFetchError] = useState(false)

  function resetError() {
    setFetchError(false)
  }

  function handleChange(event) {
    setSelectedFile(event.target.files[0])
  }

  async function handleSubmit(event) {
    event.preventDefault()
    setFetchError(false)
    const formData = new FormData()
    formData.append('file', selectedFile)
    const options = {
      method: 'POST',
      body: formData
    }
    try {
      const response = await fetch('/api/transcribe', options)
      const data = await response.json()
      if (data.status === 'fail') {
        setFetchError(true)
      } else {
        setData(data)
      }
    } catch (error) {
      setFetchError(true)
    }
  }

  const baseRows = Array(6).fill(['(EMPTY)', 0]);
  const blocks = calculateBlocks(selectedFile);
  const blocksLength = blocks.toString(10).length > 1 ? 1 : 0;
  const blockValue = blocks !== 0 ? convertToHex(blocks) : 0;
  const actualRows = selectedFile !== null ? [[selectedFile.name.toUpperCase().substr(0, (7 - blocksLength)), blockValue]].concat(baseRows) : [['(EMPTY)', 0]].concat(baseRows);
  const rows = actualRows.map((item, index) => (
    <EditorRow index={convertToHex(index)} key={index}>
      <div className="empty-save">{item[0]}</div>
      <div className="save-size">{item[1]}</div>
    </EditorRow>
  ));
  const submitButtonClasses = selectedFile !== null ? "file-select-wrapper" : "file-select-wrapper disabled";
  const loading = isLoading ? loadingScreen : null;
  const errored = fetchError ? fetchingError(resetError) : null;
  return (
    <Gameboy>
      <Editor>
        <Title>FILE (EMPTY).0!</Title>
        <div className="title-spacer" />
        <div className="upload-headers">
          <div className="upload-header selected">LOAD</div>
          <div className="upload-header">SAVE</div>
          <div className="upload-header">ERASE</div>
        </div>
        <div className="title-spacer" />
        {rows}
        <div className="title-spacer" />
        <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
          <div className="file-select-wrapper">
            <div className="file-select-btn">
              <EditorRowNumber index="[]" />
              <div className="empty-save">CHOOSE FILE</div>
            </div>
            <input name="midiFile" type="file" onChange={handleChange} />
          </div>
          <div className={submitButtonClasses}>
            <div className="file-select-btn">
              <EditorRowNumber index="[]" />
              <button type="submit" className="submit-button">SUBMIT FILE</button>
            </div>
          </div>
          <div className="title-spacer" />
          <div className="title-spacer" />
          <div>BLOCKS USED: 00/BF</div>
        </form>
        {loading}
        {errored}
      </Editor>
    </Gameboy>
  );
}
