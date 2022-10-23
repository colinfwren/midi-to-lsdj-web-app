import ActiveInstrument from "./ActiveInstrument";
import ChannelActivity from "./ChannelActivity";
import Spacer from "./Spacer";
import '../../styles/songInfo/Status.css'

function Status({tempo}) {
  return (
    <div className="status">
      <ActiveInstrument />
      <Spacer/>
      <Spacer/>
      <Spacer/>
      <ChannelActivity title="T" value={tempo} />
      <Spacer/>
      <ChannelActivity title="1" />
      <ChannelActivity title="2" />
      <ChannelActivity title="W" />
      <ChannelActivity title="N" />
    </div>
  );
}

export default Status;
