import React, { useState, useEffect } from "react"
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { initializeApp } from "@firebase/app";
import { get, getDatabase, ref, child } from "firebase/database";
import { firebaseConfig } from "../../config";

export const Datatable = (props) => {
  const [tableData, setTableData] = useState([]);
  //Get data from database and store as tableData for use in DataTable
  useEffect(() => {
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());

    get(child(dbRef, props.db))
    .then((snapshot) => setTableData(snapshot.val()));
  }, [props.db]);

  return (
    <div className="datatable">
      <DataGrid
        className="datatableint"
        rows={tableData}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};