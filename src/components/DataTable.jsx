// import styles from "./DataTable.module.css";
// import { useState } from "react";
import DataTableTable from "../features/DataTable/DataTableTable";
// import CreateButton from "./CreateButton";

function DataTable() {
  return (
    // <div className={styles.datatableContainer}>

    <div className="container mx-auto px-4 box-border flex flex-col text-center text-3xl text-black">
      <div type="horizontal" className="flex justify-between ">
        <h1>ALL Data</h1>
        <p>Filter / Sort</p>
      </div>
      <br />

      {/* <CreateButton /> */}
      <DataTableTable />
    </div>
  );
}

export default DataTable;
