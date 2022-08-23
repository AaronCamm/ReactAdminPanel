import React from "react"
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {rows, columns } from "../../participantdatabase.js";

export const Datatable = () => {
  return (
    <div className="datatable">
        <DataGrid className="datatableint"
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  )
}
