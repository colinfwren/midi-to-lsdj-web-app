import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Song from "../Song";
import SongInfo from "../SongInfo";
import { LSDJTrack } from '../../types'

type SongHOCProps = {
  data: LSDJTrack
}

export default function SongHOC({ data }) {
  const screenData = chunks.map(item => {
    return {
      'pu1': isPu1 ? item : [],
      'pu2': [],
      'wav': !isPu1 ? item : [],
      'noi': []
    };
  });
  const screens = screenData.map((songChunk, index) => (
    <Gameboy key={index}>
      <Editor>
        <Song data={songChunk} key={index} offset={index}/>
      </Editor>
      <SongInfo tempo={data.tempo} section="S" />
    </Gameboy>
  ));
  return <div className="screenGroup">{screens}</div>;
}
