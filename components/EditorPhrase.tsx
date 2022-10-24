import EditorRow from "./editor/EditorRow";
import Note from "./editor/Note";
import Instrument from "./editor/Instrument";
import Command from "./editor/Command";
import EditorColumnTitleGroup from "./editor/EditorColumnTitleGroup";
import EditorColumnTitle from "./editor/EditorColumnTitle";
import {LSDJNote} from "../types";
import {convertToHex} from "midi-to-lsdj/dist/utils";

type EditorPhraseProps = {
  notes: LSDJNote[]
}

function getRows(notes: LSDJNote[]): LSDJNote[] {
  if (notes.length === 16) {
    return notes
  }
  const emptyRowCount = 16 - notes.length
  const emptyRows = Array(emptyRowCount).fill(0).map(() => {
    return {
      notes: ['--'],
      command: '--',
      triplets: []
    }
  })
  return [...notes, ...emptyRows]
}

function EditorPhrase({ notes  = []}: EditorPhraseProps) {
  const rows = getRows(notes)
  const values = rows.map((note, rowIndex) => {
    // const notes = isDrums ? [<Note value={step.notes[0]} width={3} />, <Note value={step.notes[1]} />] : <Note value={step.notes[0]} /> ;
    const rowNumber = convertToHex(rowIndex).charAt(1)
    return (
      <EditorRow index={rowNumber} key={rowNumber} slim>
        <Note value={note.notes[0]}  width={3} />
        <Instrument instrument="00" width={4}/>
        <Command command={note.command.charAt(0)} value={note.command.substring(1,3)}/>
      </EditorRow>
    );
  });
  // const extraNoteColumn = isDrums ? <EditorColumnTitle title="NOTE" width={3} /> : null;
  const columns = (
    <EditorColumnTitleGroup key="1">
      <div />
      {/*{extraNoteColumn}*/}
      <EditorColumnTitle title="NOTE" width={3} />
      <EditorColumnTitle title="INSTR" width={4} />
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

export default EditorPhrase;
