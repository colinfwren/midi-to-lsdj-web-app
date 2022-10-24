import '../../styles/editor/Transpose.module.css';

function Transpose({value}) {
  return (
    <div className="transpose">
      <div className="value">{value}</div>
    </div>
  );
}

export default Transpose;
