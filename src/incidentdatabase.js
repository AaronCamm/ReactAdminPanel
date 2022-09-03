import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const columns = [
  {
    field: "incidentId",
    headerName: "Incident ID",
    width: 220,
  },
  {
    field: "participantName",
    headerName: "Participant Name",
    width: 220,
  },
  {
    field: "relation",
    headerName: "Relationship",
    width: 220,
  },
  {
    field: "author",
    headerName: "Completed By",
    width: 220,
  },
  {
    field: "dateCompleted",
    headerName: "Date Completed",
    width: 180,
  },
  {
    field: "incidentType",
    headerName: "Type of Incident",
    width: 350,
  },
  {
    field: "view",
    headerName: "View",
    width: 115,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link to={"/incidents/" + params.row.id} >            
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];