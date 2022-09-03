import React, { useState, useEffect } from "react"
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { columns } from "../../careplandatabase.js";
import { initializeApp } from "@firebase/app";
import { get, getDatabase, ref, child } from "firebase/database";
import { firebaseConfig } from "../../config";

export const Datatable = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());

    get(child(dbRef, `careplans`))
    .then((snapshot) => setTableData(snapshot.val()));
  }, []);

  return (
    <div className="datatable">
      <DataGrid
        className="datatableint"
        rows={tableData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};