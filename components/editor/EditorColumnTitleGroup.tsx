import styles from '../../styles/editor/EditorColumnTitleGroup.module.css'

function EditorColumnTitleGroup({children, offset = 2}) {
  return <div className={styles[`editor-column-title-group-${offset}`]}>{children}</div>;
}

export default EditorColumnTitleGroup;
