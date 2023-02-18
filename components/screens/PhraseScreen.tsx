import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Phrase from "../Phrase";
import SongInfo from "../SongInfo";
import styles from  "../../styles/section.module.css";
import {LSDJFile} from "../../types";

type PhraseScreenProps = {
  data: LSDJFile
}

export default function PhraseScreen({data}: PhraseScreenProps) {
  const { track, project } = data
  const phrases = track.phrases.map((phrase) => {
    return (
      <Gameboy key={phrase.key}>
        <Editor>
          <Phrase phrase={phrase} />
        </Editor>
        <SongInfo tempo={project.tempo} section="P" />
      </Gameboy>
    );
  });
  return <div className={styles.screenGroup}>{phrases}</div>;
}
