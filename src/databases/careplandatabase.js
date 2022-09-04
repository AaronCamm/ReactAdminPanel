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
    field: "planDuration",
    headerName: "Plan Duration",
    width: 220,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 180,
  },
  {
    field: "endDate",
    headerName: "End Date",
    width: 180,
  },
  {
    field: "planAmount",
    headerName: "Plan Amount",
    width: 230,
  },
  {
    field: "view",
    headerName: "View",
    width: 115,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link to={"/careplans/" + params.row.id} >            
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];