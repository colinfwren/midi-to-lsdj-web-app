import ActiveInstrument from "./ActiveInstrument";
import ChannelActivity from "./ChannelActivity";
import Spacer from "./Spacer";
import styles from '../../styles/songInfo/Status.module.css'

function Status({tempo}) {
  const cleanTempo = parseInt(tempo, 10)
  return (
    <div className={styles.status}>
      <ActiveInstrument />
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <ChannelActivity title="T" value={cleanTempo} />
      <Spacer/>
      <ChannelActivity title="1" />
      <ChannelActivity title="2" />
      <ChannelActivity title="W" />
      <ChannelActivity title="N" />
    </div>
  );
}

export default Status;
