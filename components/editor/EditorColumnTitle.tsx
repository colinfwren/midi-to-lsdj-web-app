import styles from  '../../styles/editor/EditorColumnTitle.module.css'

type EditorColumnTitleProps = {
  title: string
  width?: number
}

function EditorColumnTitle({title, width = 4}: EditorColumnTitleProps) {
  return <div className={styles[`editor-column-title-${width}`]}>{title}</div>;
}

export default EditorColumnTitle;
