import '../../styles/editor/Note.css';

function Note({value, width = 4}) {
  if (typeof (value) !== 'string'){
    value = '---';
  }
  return <div className={`note-${width}`}>{value}</div>
}

export default Note;
