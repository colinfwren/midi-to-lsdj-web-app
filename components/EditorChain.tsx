import EditorRow from "./editor/EditorRow";
import EditorColumnTitleGroup from "./editor/EditorColumnTitleGroup";
import EditorColumnTitle from "./editor/EditorColumnTitle";
import Pattern from "./editor/Pattern";
import Transpose from "./editor/Transpose";
import { convertToHex } from 'midi-to-lsdj/dist/utils';
import { LSDJChain } from "../types";

type EditorChainProps = {
  chainPhrases: LSDJChain[]
}

function EditorChain({ chainPhrases = []}: EditorChainProps) {
  const rowNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const notes = rowNumbers.map((rowNumber, rowIndex) => {
    const chain = chainPhrases.length > (rowIndex) ? convertToHex(chainPhrases[rowIndex]) : '--';
    return (
      <EditorRow index={rowNumber} key={rowNumber}>
        <Pattern value={chain}/>
        <Transpose value="00"/>
      </EditorRow>
    );
  });
  const columns = (
    <EditorColumnTitleGroup key="2">
      <EditorColumnTitle title="PAT" width={3} />
      <EditorColumnTitle title="TSP" width={3} />
    </EditorColumnTitleGroup>
  )
  return [
    columns,
    notes
  ];
}

export default EditorChain;
