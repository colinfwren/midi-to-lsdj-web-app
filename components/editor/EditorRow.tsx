import EditorRowNumber from "./EditorRowNumber";
import styles from '../../styles/editor/EditorRow.module.css'

type EditorRowProps = {
  index: string,
  children: JSX.Element[],
  slim?: boolean
}

function EditorRow({index, children, slim = false}: EditorRowProps) {
  const classes = slim ? `${styles['editor-row']} ${styles.slim}` : styles['editor-row']
  return (
    <div className={classes}>
      <EditorRowNumber index={index} />
      {children}
    </div>
  )
}

export default EditorRow;
