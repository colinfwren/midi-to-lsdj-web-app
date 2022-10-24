import styles from '../../styles/editor/Command.module.css';

function Command({command, value}) {
  if (typeof(command) !== 'string' || command === '') {
    command = '-';
  }
  if (typeof(value) !== 'string' || value === '') {
    value = '--';
  }
  return (
    <div className={styles.commandGroup4}>
      <div className={styles.command}>{command}</div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default Command;
