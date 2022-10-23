import EditorSong from "./EditorSong";
import Title from "./Title";


function Song({data, offset = 0}) {
  return (
    <div>
      <Title>SONG</Title>
      <EditorSong channels={data} offset={offset}/>
    </div>
  );
}

export default Song;
