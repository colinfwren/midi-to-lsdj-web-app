import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Song from "../Song";
import SongInfo from "../SongInfo";
import {LSDJChannels, LSDJFile} from '../../types'
import styles from '../../styles/section.module.css'

type SongScreenProps = {
  data: LSDJFile
}

export function getChunksOfSize(arr: LSDJChannels[], size: number): LSDJChannels[][] {
  const noOfChunks = Math.ceil(arr.length / size)
  return Array(noOfChunks).fill(0).map((_val, index) => {
    return arr.slice(index * size, index * size + size)
  })
}

export default function SongScreen({ data }: SongScreenProps) {
  const { track, project } = data
  const screenData = track.chains.map(item => {
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
      <SongInfo tempo={project.tempo} section="S" />
    </Gameboy>
  ));
  return <div className={styles.screenGroup}>{screens}</div>;
}
