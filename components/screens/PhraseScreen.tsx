import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Phrase from "../Phrase";
import SongInfo from "../SongInfo";
import styles from  "../../styles/section.module.css";
import {LSDJTrack} from "../../types";

type PhraseScreenProps = {
  data: LSDJTrack
}

export default function PhraseScreen({data}: PhraseScreenProps) {
  const phrases = data.phrases.map((phrase) => {
    return (
      <Gameboy key={phrase.key}>
        <Editor>
          <Phrase phrase={phrase} />
        </Editor>
        <SongInfo tempo='120' section="P" />
      </Gameboy>
    );
  });
  return <div className={styles.screenGroup}>{phrases}</div>;
}
