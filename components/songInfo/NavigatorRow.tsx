import styles from '../../styles/songInfo/NavigatorRow.module.css';

function NavigatorRow({options, activeIndex, activeRow = false}) {
  const columns = options.map((option, index) => {
    if (index === activeIndex) {
      return <div className={styles.navigatorRowActive} key={index}>{option}</div>
    }
    return <div className={styles.navigatorRowInactive} key={index}>{option}</div>
  });
  const classNames = activeRow ? "navigator-row active" : "navigator-row";
  return (
    <div className={classNames}>
      {columns}
    </div>
  )
}

export default NavigatorRow;
