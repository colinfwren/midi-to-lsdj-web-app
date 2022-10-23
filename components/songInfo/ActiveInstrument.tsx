import '../../styles/songInfo/ActiveInstrument.module.css'

type ActiveInstrumentProps = {
  children?: JSX.Element
}

function ActiveInstrument({ children }: ActiveInstrumentProps) {
  return (
    <div className="active-instrument">
      <div className="value">{children}</div>
    </div>
  )
}

export default ActiveInstrument;
