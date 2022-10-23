import EditorChain from "./EditorChain";
import Title from "./Title";
import {convertToHex} from "./utils";
import { LSDJChain } from "../types";

type ChainProps = {
  chain: LSDJChain[],
  chainIndex: number
}

function Chain({chain, chainIndex}: ChainProps) {
  const chainNumber = convertToHex(chainIndex);
  return (
    <div>
      <Title>CHAIN {chainNumber}</Title>
      <EditorChain chainPhrases={chain}/>
    </div>
  );
}

export default Chain;
