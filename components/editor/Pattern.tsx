import styles from '../../styles/editor/Pattern.module.css';

function Pattern({value}) {
  return <div className={styles.pattern}>{value}</div>
}

export default Pattern;
