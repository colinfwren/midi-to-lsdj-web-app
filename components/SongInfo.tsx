import styles from '../styles/SongInfo.module.css'
import Status from "./songInfo/Status";
import Navigator from "./songInfo/Navigator";

function SongInfo({ tempo, section}) {
  return (
    <div className={styles.songInfo}>
      <Status tempo={tempo} />
      <Navigator section={section} />
    </div>
  )
}

export default SongInfo;
