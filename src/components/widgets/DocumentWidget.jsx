import { initializeApp } from "@firebase/app";
import DownloadIcon from "@mui/icons-material/Download";
import { DataGrid } from "@mui/x-data-grid";
import { getStorage, listAll, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../../config";
import "../datatable/Datatable.scss";

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
            documentName: itemRef.name,
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
            width: 1400,
          },
          {
            field: "view",
            headerName: "View/Download",
            width: 215,
            sortable: false,
            disableColumnMenu: true,
            renderCell: (params) => {
              return (
                <div className="iconImg">
                  <Link
                    to={"/documents/" + refData[params.row.id].documentName}
                  >
                    <DownloadIcon />
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
