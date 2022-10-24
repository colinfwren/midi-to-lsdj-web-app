import styles from  '../../styles/editor/EditorRowNumber.module.css';

function EditorRowNumber({index}) {
  const classNames = index.length === 2 ? `${styles['editor-row-number']} ${styles.wide}` : styles['editor-row-number'];
  return (
    <div className={classNames}>
      <div className={styles['editor-row-number-value']}>{index}</div>
    </div>
  )
}

export default EditorRowNumber;
