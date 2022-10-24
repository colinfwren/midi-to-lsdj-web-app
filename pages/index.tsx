import { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { UploadForm } from "../components/UploadForm";
import SongScreen from "../components/screens/SongScreen";
import ChainScreen from '../components/screens/ChainScreen'
import PhraseScreen from "../components/screens/PhraseScreen";
import TableScreen from "../components/screens/TableScreen";

export default function Home() {
  const { data } = useContext(AppContext)
  if (data === null) {
    return (
      <div className="App">
        <h1>MIDI to LSDJ transcriber</h1>
        <UploadForm />
        <div>
          <h2>Instructions</h2>
          <ul>
            <li>{`Upload a MIDI file (loads of caveats below!) via the "Choose File" button`}</li>
            <li>{`Press "Submit File" button to transcribe it into a set of Phrases, Chains and a Song to program into LSDJ`}</li>
            <li>{`Put those Phrases, Chains and Song into LSDJ and press play!`}</li>
          </ul>
          <p>{`This project is very much a work in progress, so there's probably loads of bugs / quirks.`}</p>
          <p>{`Currently the following limitations are in place:`}</p>
          <ul>
            <li>{`Only the first channel in the MIDI file will be processed and that channel will be assigned to PU1 if it's found to be monophonic`}
            </li>
            {/*<li>If the name of the file has the word "drum" in then it'll be assumed it's a drum track and it'll be*/}
            {/*  polyphonic wave based drums*/}
            {/*</li>*/}
            <li>{`The note resolution is currently capped to semi-quavers (16th notes)`}</li>
            <li>{`Only non-common time signatures are handled currently`}</li>
            <li>{`The song isn't stored, so you'll need to re-upload`}</li>
          </ul>
        </div>
      </div>
    )
  }
  return (
    <div className="App">
      <section>
        <h1>Tables</h1>
        <TableScreen data={data} />
      </section>
      <section>
        <h1>Phrases</h1>
        <PhraseScreen data={data} />
      </section>
      <section>
        <h1>Chains</h1>
        <ChainScreen data={data} />
      </section>
      <section>
        <h1>Song</h1>
        <SongScreen data={data} />
      </section>
    </div>
  )
}
