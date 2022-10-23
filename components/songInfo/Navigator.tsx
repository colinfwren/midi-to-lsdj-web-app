import NavigatorRow from "./NavigatorRow";
import styles from '../../styles/songInfo/Navigator.module.css';


function Navigator({section}) {
  const topRow = ['P', 'P', 'P', 'W', 'P'];
  const middleRow = ['S', 'C', 'P', 'I', 'T'];
  const bottomRow = ['G', 'G', 'G', 'S', 'G'];
  const activeIndex = middleRow.indexOf(section);
  return (
    <div className={styles.navigator}>
      <NavigatorRow options={topRow} activeIndex={activeIndex} />
      <NavigatorRow options={middleRow} activeIndex={activeIndex} activeRow />
      <NavigatorRow options={bottomRow} activeIndex={activeIndex} />
    </div>
  )
}

export default Navigator;
