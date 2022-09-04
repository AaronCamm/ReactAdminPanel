import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const columns = [
  {
    field: "ndisNumber",
    headerName: "NDIS Number",
    width: 220,
  },
  {
    field: "participantFirst",
    headerName: "First name",
    width: 210,
  },
  {
    field: "participantLast",
    headerName: "Last name",
    width: 210,
  },
  {
    field: "primaryWorker",
    headerName: "Primary Worker",
    width: 220,
  },
  {
    field: "primaryContact",
    headerName: "Primary Contact",
    width: 220,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
  },
  {
    field: "planType",
    headerName: "Type",
    width: 230,
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