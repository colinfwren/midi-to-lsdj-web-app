import styles from '../../styles/editor/Note.module.css';

function Note({value, width = 4}) {
  if (typeof (value) !== 'string'){
    value = '---';
  }
  return <div className={styles[`note-${width}`]}>{value}</div>
}

export default Note;
