import EditorPhrase from "./EditorPhrase";
import Title from "./Title";
import {convertToHex} from "./utils";


function Phrase({phrase, phraseKey, isDrums = false}) {
  const phraseNumber = convertToHex(phraseKey);
  return (
    <div>
      <Title>PHRASE {phraseNumber}</Title>
      <EditorPhrase phraseSteps={phrase} isDrums={isDrums}/>
    </div>
  );
}

export default Phrase;
