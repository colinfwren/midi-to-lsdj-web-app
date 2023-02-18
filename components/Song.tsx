import EditorSong from "./EditorSong";
import Title from "./Title";
import { LSDJChannels } from "../types";

type SongProps = {
  data: LSDJChannels[],
  offset: number
}

function Song({data, offset = 0}: SongProps) {
  return (
    <div>
      <Title>SONG</Title>
      <EditorSong data={data} offset={offset}/>
    </div>
  );
}

export default Song;
