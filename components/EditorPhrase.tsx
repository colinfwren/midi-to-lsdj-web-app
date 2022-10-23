import EditorRow from "./editor/EditorRow";
import Note from "./editor/Note";
import Instrument from "./editor/Instrument";
import Command from "./editor/Command";
import EditorColumnTitleGroup from "./editor/EditorColumnTitleGroup";
import EditorColumnTitle from "./editor/EditorColumnTitle";

function EditorPhrase({phraseSteps = [], isDrums = false}) {
  const rowNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
  const notes = rowNumbers.map((rowNumber, rowIndex) => {
    const step = phraseSteps.length > (rowIndex) ? phraseSteps[rowIndex] : { notes: [], command: '-00' };
    const notes = isDrums ? [<Note value={step.notes[0]} width={3} />, <Note value={step.notes[1]} />] : <Note value={step.notes[0]} /> ;
    return (
      <EditorRow index={rowNumber} key={rowNumber}>
        {notes}
        <Instrument instrument="00" width={isDrums ? 3 : 4}/>
        <Command command={step.command.substr(0, 1)} value={step.command.substr(1, 2)}/>
      </EditorRow>
    );
  });
  const extraNoteColumn = isDrums ? <EditorColumnTitle title="NOTE" width={3} /> : null;
  const columns = (
    <EditorColumnTitleGroup key="1">
      {extraNoteColumn}
      <EditorColumnTitle title="NOTE" />
      <EditorColumnTitle title="INSTR" width={isDrums ? 3 : 4} />
      <EditorColumnTitle title="CMD" width={isDrums ? 3 : 4} />
    </EditorColumnTitleGroup>
  )
  return [
    columns,
    notes
  ];
}

export default EditorPhrase;
