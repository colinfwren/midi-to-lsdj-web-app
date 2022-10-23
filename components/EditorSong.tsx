import EditorRow from "./editor/EditorRow";
import EditorColumnTitleGroup from "./editor/EditorColumnTitleGroup";
import EditorColumnTitle from "./editor/EditorColumnTitle";
import Pattern from "./editor/Pattern";
import { convertToHex } from "./utils";
import "../styles/editor/EditorSong.css";

function EditorSong({channels = { 'pu1': [], 'pu2': [], 'wav': [], 'noi': []}, offset}) {
  const rowNumbers = Array(16).fill(0).map((item, index) => convertToHex((offset * 16) + index));
  const notes = rowNumbers.map((rowNumber, rowIndex) => {
    const pu1 = channels.pu1.length > (rowIndex) ? convertToHex(channels.pu1[rowIndex]) : '--';
    const pu2 = channels.pu2.length > (rowIndex) ? convertToHex(channels.pu2[rowIndex]) : '--';
    const wav = channels.wav.length > (rowIndex) ? convertToHex(channels.wav[rowIndex]) : '--';
    const noi = channels.noi.length > (rowIndex) ? convertToHex(channels.noi[rowIndex]) : '--';
    return (
      <EditorRow index={rowNumber} key={rowNumber}>
        <Pattern value={pu1} key="1" />
        <Pattern value={pu2} key="2" />
        <Pattern value={wav} key="3" />
        <Pattern value={noi} key="4" />
      </EditorRow>
    );
  });
  const columns = (
    <EditorColumnTitleGroup key="2" offset={3}>
      <EditorColumnTitle title="PU1" width={3} />
      <EditorColumnTitle title="PU2" width={3} />
      <EditorColumnTitle title="WAV" width={3} />
      <EditorColumnTitle title="NOI" width={3} />
    </EditorColumnTitleGroup>
  );
  return [
    columns,
    <div className="editor-phrases" key="1">{notes}</div>
  ];
}

export default EditorSong;
