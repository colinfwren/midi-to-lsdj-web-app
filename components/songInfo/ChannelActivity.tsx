import '../../styles/songInfo/ChannelActivity.module.css'

type ChannelActivityProps = {
  title: string
  value?: string
}

function ChannelActivity({ title, value }: ChannelActivityProps) {
  return (
    <div className="channel-activity">
      <div className="label">{title}</div>
      <div className="value">{value}</div>
    </div>
  )
}

export default ChannelActivity;
