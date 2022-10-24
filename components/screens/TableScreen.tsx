import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Table from '../Table';
import SongInfo from "../SongInfo";
import styles from  "../../styles/section.module.css";
import {LSDJTrack} from "../../types";

type PhraseScreenProps = {
  data: LSDJTrack
}

export default function TableScreen({data}: PhraseScreenProps) {
  const tables = data.tables.map((table, index) => {
    return (
      <Gameboy key={table.key}>
        <Editor>
          <Table table={table} />
        </Editor>
        <SongInfo tempo='120' section="T" />
      </Gameboy>
    );
  });
  return <div className={styles.screenGroup}>{tables}</div>;
}
