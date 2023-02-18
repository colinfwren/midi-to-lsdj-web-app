import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Table from '../Table';
import SongInfo from "../SongInfo";
import styles from  "../../styles/section.module.css";
import {LSDJFile} from "../../types";

type PhraseScreenProps = {
  data: LSDJFile
}

export default function TableScreen({data}: PhraseScreenProps) {
  const { track, project } = data
  const tables = track.tables.map((table, index) => {
    return (
      <Gameboy key={table.key}>
        <Editor>
          <Table table={table} />
        </Editor>
        <SongInfo tempo={project.tempo} section="T" />
      </Gameboy>
    );
  });
  return <div className={styles.screenGroup}>{tables}</div>;
}
