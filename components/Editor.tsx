import styles from '../styles/Editor.module.css'

function Editor({children}) {
  return <div className={styles.editor}>{children}</div>
}

export default Editor;
