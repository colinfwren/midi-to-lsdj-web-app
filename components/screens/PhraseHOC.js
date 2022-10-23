import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Phrase from "../Phrase";
import SongInfo from "../SongInfo";
import { convertToHex } from "../utils";
import "../../styles/section.module.css";

function PhraseHOC({data}) {
  const isDrums = data.song.wav.length > 0;
  const phrases = Object.keys(data.phrases).map((phraseKey) => {
    const phrase = data.phrases[phraseKey];
    return (
      <Gameboy key={convertToHex(phraseKey)}>
        <Editor>
          <Phrase phrase={phrase} phraseKey={phraseKey} isDrums={isDrums} />
        </Editor>
        <SongInfo tempo={data.tempo} section="P" />
      </Gameboy>
    );
  });
  return <div className="screenGroup">{phrases}</div>;
}

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps, null)(PhraseHOC);
