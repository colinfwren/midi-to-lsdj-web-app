import '../../styles/songInfo/NavigatorRow.css';

function NavigatorRow({options, activeIndex, activeRow = false}) {
  const columns = options.map((option, index) => {
    if (index === activeIndex) {
      return <div className="navigator-row-active" key={index}>{option}</div>
    }
    return <div className="navigator-row-inactive" key={index}>{option}</div>
  });
  const classNames = activeRow ? "navigator-row active" : "navigator-row";
  return (
    <div className={classNames}>
      {columns}
    </div>
  )
}

export default NavigatorRow;
