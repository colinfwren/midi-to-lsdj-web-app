import styles from '../../styles/songInfo/NavigatorRow.module.css';

function NavigatorRow({options, activeIndex, activeRow = false}) {
  const columns = options.map((option, index) => {
    if (index === activeIndex) {
      return <div className={styles['navigator-row-active']} key={index}>{option}</div>
    }
    return <div className={styles['navigator-row-inactive']} key={index}>{option}</div>
  });
  const classNames = activeRow ? `${styles['navigator-row']} ${styles.active}` : styles['navigator-row'];
  return (
    <div className={classNames}>
      {columns}
    </div>
  )
}

export default NavigatorRow;
