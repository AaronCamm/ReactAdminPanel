import React, { useState, useEffect } from "react";
import { initializeApp } from "@firebase/app";
import { getStorage, ref, listAll } from "firebase/storage";
import { firebaseConfig } from "../../config";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";
import "../datatable/datatable.scss";

export const DocumentWidget = () => {
  const [refData, setRef] = useState([]);

  useEffect(() => {
    initializeApp(firebaseConfig);
    const storage = getStorage();
    const storageRef = ref(storage, "files");
    let myArray = [];
    let counter = 0;

    listAll(storageRef)
      .then((res) => {
        res.items.forEach((itemRef) => {
          myArray[counter] = {
            id: counter,
            documentName: itemRef.name
          };
          counter++;
        });
        setRef(myArray);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="datatable">
      <DataGrid
        className="datatableint"
        rows={refData}
        columns={[
          {
            field: "documentName",
            headerName: "Document Name",
            width: 1500,
          },
          {
            field: "view",
            headerName: "View",
            width: 115,
            renderCell: (params) => {
              return (
                <div className="iconImg">
                  <Link to={"/careplans/" + params.row.id}>
                    <VisibilityIcon />
                  </Link>
                </div>
              );
            },
          },
        ]}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
};
