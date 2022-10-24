import styles from '../../styles/songInfo/ChannelActivity.module.css'

type ChannelActivityProps = {
  title: string
  value?: string
}

function ChannelActivity({ title, value }: ChannelActivityProps) {
  return (
    <div className={styles['channel-activity']}>
      <div>{title}</div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default ChannelActivity;
