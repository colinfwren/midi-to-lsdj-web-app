import Gameboy from "../Gameboy";
import Editor from "../Editor";
import Chain from "../Chain";
import SongInfo from "../SongInfo";
import { convertToHex } from "../utils";
import "../../styles/section.module.css";

function ChainHOC({data}) {
  const chains = data.chains.map((chain, chainIndex) => {
    return (
      <Gameboy key={convertToHex(chainIndex)}>
        <Editor>
          <Chain chain={chain} chainIndex={chainIndex} />
        </Editor>
        <SongInfo tempo={data.tempo} section="C" />
      </Gameboy>
    );
  });
  return <div className="screenGroup">{chains}</div>;
}

const mapStateToProps = state => ({
  data: state.data,
});

export default connect(mapStateToProps, null)(ChainHOC);
