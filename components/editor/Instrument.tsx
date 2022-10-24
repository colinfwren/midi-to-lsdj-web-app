import styles from '../../styles/editor/Command.module.css';

function Instrument({instrument, width = 4}) {
  return (
    <div className={styles[`commandGroup${width}`]}>
      <div className={styles.command}>I</div>
      <div className={styles.value}>{instrument}</div>
    </div>
  )
}

export default Instrument;
