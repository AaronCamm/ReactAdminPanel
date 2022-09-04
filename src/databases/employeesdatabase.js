import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const columns = [
  {
    field: "employeeNumber",
    headerName: "Employee Number",
    width: 220,
  },
  {
    field: "employeeFirst",
    headerName: "First name",
    width: 210,
  },
  {
    field: "employeeLast",
    headerName: "Last name",
    width: 210,
  },
  {
    field: "position",
    headerName: "Position",
    width: 220,
  },
  {
    field: "emergencyContact",
    headerName: "Emergency Contact",
    width: 300,
  },
  {
    field: "emergencyContactNumber",
    headerName: "Emergency Contact Number",
    width: 300,
  },
  {
    field: "view",
    headerName: "View",
    width: 115,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link to={"/employees/" + params.row.id}>
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];