import EditorRowNumber from "./EditorRowNumber";
import styles from '../../styles/editor/EditorRow.module.css'

function EditorRow({index, children}) {
  return (
    <div className={styles['editor-row']}>
      <EditorRowNumber index={index} />
      {children}
    </div>
  )
}

export default EditorRow;
