import EditorRow from "./editor/EditorRow";
import EditorColumnTitleGroup from "./editor/EditorColumnTitleGroup";
import EditorColumnTitle from "./editor/EditorColumnTitle";
import Pattern from "./editor/Pattern";
import { convertToHex } from 'midi-to-lsdj/dist/utils';
import styles from '../styles/editor/EditorSong.module.css'
import { LSDJChannels} from "../types";

type EditorSongProps = {
  data: LSDJChannels[],
  offset: number
}

function getRows(data: LSDJChannels[]): LSDJChannels[] {
  if (data.length === 16) {
    return data
  }
  const emptyRowCount = 16 - data.length
  const emptyRows: LSDJChannels[] = Array(emptyRowCount).fill(0).map(() => ({ pu1: '--', pu2: [], wav: [], noi: []}))
  return [...data, ...emptyRows]
}

function EditorSong({ data, offset}: EditorSongProps) {
  const rows = getRows(data)
  const notes = rows.map((row, rowIndex) => {
    const rowNumber = convertToHex((offset * 16) + rowIndex)
    return (
      <EditorRow index={rowNumber} key={rowNumber}>
        <Pattern value={row.pu1} key="1" />
        <Pattern value='--' key="2" />
        <Pattern value='--' key="3" />
        <Pattern value='--' key="4" />
      </EditorRow>
    );
  });
  const columns = (
    <EditorColumnTitleGroup key="2" offset={3}>
      <div />
      <EditorColumnTitle title="PU1" width={3} />
      <EditorColumnTitle title="PU2" width={3} />
      <EditorColumnTitle title="WAV" width={3} />
      <EditorColumnTitle title="NOI" width={3} />
    </EditorColumnTitleGroup>
  );
  return (
    <>
      {columns}
      <div className={styles['editor-phrases']} key="1">{notes}</div>
    </>
  )
}

export default EditorSong;
