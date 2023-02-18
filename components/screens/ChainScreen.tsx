import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Chain from "../Chain";
import SongInfo from "../SongInfo";
import styles from "../../styles/section.module.css";
import { LSDJFile } from "../../types";

type ChainScreenProps = {
  data: LSDJFile
}

export default function ChainScreen({data}: ChainScreenProps) {
  const { track, project } = data
  const chains = track.chains.map((chain) => {
    return (
      <Gameboy key={chain.key}>
        <Editor>
          <Chain chain={chain} />
        </Editor>
        <SongInfo tempo={project.tempo} section="C" />
      </Gameboy>
    );
  });
  return <div className={styles.screenGroup}>{chains}</div>
}
