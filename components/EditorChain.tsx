import EditorRow from "./editor/EditorRow";
import EditorColumnTitleGroup from "./editor/EditorColumnTitleGroup";
import EditorColumnTitle from "./editor/EditorColumnTitle";
import Pattern from "./editor/Pattern";
import Transpose from "./editor/Transpose";
import { convertToHex } from 'midi-to-lsdj/dist/utils';

type EditorChainProps = {
  chainPhrases: string[]
}

function getRows(data: string[]): string[] {
  if (data.length === 16) {
    return data
  }
  const emptyRowCount = 16 - data.length
  const emptyRows = Array(emptyRowCount).fill(0).map(() => '--')
  return [...data, ...emptyRows]
}

function EditorChain({ chainPhrases = []}: EditorChainProps) {
  const rows = getRows(chainPhrases)
  const phrases = rows.map((phrase, rowIndex) => {
    const rowNumber = convertToHex(rowIndex).charAt(1)
    return (
      <EditorRow index={rowNumber} key={rowNumber} slim>
        <Pattern value={phrase}/>
        <Transpose value="00"/>
      </EditorRow>
    );
  })
  const columns = (
    <EditorColumnTitleGroup key="2">
      <div />
      <EditorColumnTitle title="PAT" width={3} />
      <EditorColumnTitle title="TSP" width={3} />
    </EditorColumnTitleGroup>
  )
  return (
    <>
      {columns}
      {phrases}
    </>
  )
}

export default EditorChain;
