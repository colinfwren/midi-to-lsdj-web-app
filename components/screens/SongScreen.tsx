import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Song from "../Song";
import SongInfo from "../SongInfo";
import { LSDJTrack } from '../../types'
import { getChunksOfSize } from "midi-to-lsdj/dist/utils";

type SongScreenProps = {
  data: LSDJTrack
}

export default function SongScreen({ data }: SongScreenProps) {
  const screenData = data.chains.map(item => {
    return {
      'pu1': item.key,
      'pu2': [],
      'wav': [],
      'noi': []
    };
  });
  const chunks = getChunksOfSize(screenData, 16)
  const screens = chunks.map((songChunk, index) => (
    <Gameboy key={index}>
      <Editor>
        <Song data={songChunk} key={index} offset={index}/>
      </Editor>
      <SongInfo tempo={120} section="S" />
    </Gameboy>
  ));
  return <div className="screenGroup">{screens}</div>;
}
