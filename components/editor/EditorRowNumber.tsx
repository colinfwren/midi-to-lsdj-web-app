import '../../styles/editor/EditorRowNumber.module.css';

function EditorRowNumber({index}) {
  const classNames = index.length === 2 ? 'editor-row-number wide' : 'editor-row-number';
  return (
    <div className={classNames}>
      <div className="editor-row-number-value">{index}</div>
    </div>
  )
}

export default EditorRowNumber;
