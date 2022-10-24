import EditorChain from "./EditorChain";
import Title from "./Title";
import { LSDJChain } from "../types";

type ChainProps = {
  chain: LSDJChain
}

function Chain({chain}: ChainProps) {
  return (
    <div>
      <Title>CHAIN {chain.key}</Title>
      <EditorChain chainPhrases={chain.phrases}/>
    </div>
  );
}

export default Chain;
