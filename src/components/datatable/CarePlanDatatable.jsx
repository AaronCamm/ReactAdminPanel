import React from "react"
import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import {rows, columns } from "../../careplandatabase.js";

export const Datatable = () => {
  return (
    <div className="datatable">
        <DataGrid className="datatableint"
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
      />
    </div>
  )
}
