import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const columns = [
  {
    field: "ndisNum",
    headerName: "NDIS Number",
    width: 220,
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 210,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 210,
  },
  {
    field: "primaryWorker",
    headerName: "Primary Worker",
    width: 220,
  },
  {
    field: "primaryContactNo",
    headerName: "Primary Contact No",
    width: 220,
  },
  {
    field: "status",
    headerName: "Status",
    width: 115,
  },
  {
    field: "ndisType",
    headerName: "Type",
    width: 210,
  },
  {
    field: "view",
    headerName: "View",
    width: 115,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link to={"/participants/" + params.row.id}>     
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];

export const rows = [
  {
    id: 1,
    ndisNum: 1234,
    firstName: "John",
    lastName: "Simmons",
    primaryWorker: "Susan Boyle",
    primaryContactNo: "0499 999 999",
    status: "Active",
    ndisType: "Plan Managed",
    action: "ICN",
  },
  {
    id: 2,
    ndisNum: 12345,
    firstName: "Joanne",
    lastName: "Butters",
    primaryWorker: "Leslie Jones",
    primaryContactNo: "03 5200 0000",
    status: "Active",
    ndisType: "Self Managed",
    action: "ICN",
  },
  {
    id: 3,
    ndisNum: 123456,
    firstName: "Vince",
    lastName: "Lumens",
    primaryWorker: "Susan Boyle",
    primaryContactNo: "0499 999 999",
    status: "Active",
    ndisType: "Plan Managed",
    action: "ICN",
  },
];
