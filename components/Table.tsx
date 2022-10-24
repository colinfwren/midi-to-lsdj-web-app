import EditorTable from "./EditorTable";
import Title from "./Title";
import {LSDJTable} from "../types";

type TableProps = {
  table: LSDJTable
}

function Table({ table }: TableProps) {
  return (
    <div>
      <Title>Table {table.key}</Title>
      <EditorTable steps={table.steps}/>
    </div>
  );
}

export default Table;
