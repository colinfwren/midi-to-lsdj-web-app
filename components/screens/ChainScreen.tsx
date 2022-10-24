import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Chain from "../Chain";
import SongInfo from "../SongInfo";
import styles from "../../styles/section.module.css";
import { LSDJTrack } from "../../types";

type ChainScreenProps = {
  data: LSDJTrack
}

export default function ChainScreen({data}: ChainScreenProps) {
  const chains = data.chains.map((chain) => {
    return (
      <Gameboy key={chain.key}>
        <Editor>
          <Chain chain={chain} />
        </Editor>
        <SongInfo tempo='120' section="C" />
      </Gameboy>
    );
  });
  return <div className={styles.screenGroup}>{chains}</div>
}
