import EditorPhrase from "./EditorPhrase";
import Title from "./Title";
import {LSDJPhrase} from "../types";

type PhraseProps = {
  phrase: LSDJPhrase
}

function Phrase({ phrase }: PhraseProps) {
  return (
    <div>
      <Title>PHRASE {phrase.key}</Title>
      <EditorPhrase notes={phrase.notes}/>
    </div>
  );
}

export default Phrase;
