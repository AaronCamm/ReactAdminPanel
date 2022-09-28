import { initializeApp } from "@firebase/app";
import { DataGrid } from "@mui/x-data-grid";
import { child, get, getDatabase, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { firebaseConfig } from "../../config";
import "./Datatable.scss";

export const Datatable = (props) => {
  const [tableData, setTableData] = useState([]);
  //Get data from database and store as tableData for use in DataTable
  useEffect(() => {
    initializeApp(firebaseConfig);
    const dbRef = ref(getDatabase());

    get(child(dbRef, props.db)).then((snapshot) =>
      setTableData(snapshot.val())
    );
  }, [props.db]);

  return (
    <div className="datatable">
      <DataGrid
        className="datatableint"
        rows={tableData}
        columns={props.columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
      />
    </div>
  );
};
