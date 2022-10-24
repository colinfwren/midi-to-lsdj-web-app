import EditorRow from "./editor/EditorRow";
import Note from "./editor/Note";
import Instrument from "./editor/Instrument";
import Command from "./editor/Command";
import EditorColumnTitleGroup from "./editor/EditorColumnTitleGroup";
import EditorColumnTitle from "./editor/EditorColumnTitle";
import {LSDJTableStep} from "../types";
import {convertToHex} from "midi-to-lsdj/dist/utils";
import Transpose from "./editor/Transpose";

type EditorTableProps = {
  steps: LSDJTableStep[]
}

function getRows(steps: LSDJTableStep[]): LSDJTableStep[] {
  if (steps.length === 16) {
    return steps
  }
  const emptyRowCount = 16 - steps.length
  const emptyRows = Array(emptyRowCount).fill(0).map(() => {
    return {
      vol: '00',
      transpose: '00',
      command1: '---',
      command2: '---'
    }
  })
  return [...steps, ...emptyRows]
}

function EditorTable({ steps  = []}: EditorTableProps) {
  const rows = getRows(steps)
  const values = rows.map((step, rowIndex) => {
    const rowNumber = convertToHex(rowIndex).charAt(1)
    return (
      <EditorRow index={rowNumber} key={rowNumber} slim>
        <Transpose value={step.vol} />
        <Transpose value={step.transpose} />
        <Command command={step.command1.charAt(0)} value={step.command1.substring(1,3)}/>
        <Command command={step.command2.charAt(0)} value={step.command2.substring(1,3)}/>
      </EditorRow>
    );
  });
  const columns = (
    <EditorColumnTitleGroup key="1">
      <div />
      <EditorColumnTitle title="VOL" width={2} />
      <EditorColumnTitle title="TSP" width={2} />
      <EditorColumnTitle title="CMD" width={4} />
      <EditorColumnTitle title="CMD" width={4} />
    </EditorColumnTitleGroup>
  )
  return (
    <>
      {columns}
      {values}
    </>
  )
}

export default EditorTable;
