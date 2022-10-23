import styles from '../styles/Gameboy.module.css';


function Gameboy({children}) {
  return <div className={styles.gameboy}>{children}</div>;
}

export default Gameboy;
