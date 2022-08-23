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

export const rows = [
  {
    id: 1,
    incidentId: 1234,
    participantName: "John Simmons",
    relation: "Support Worker",
    author: "Michelle Harper",
    dateCompleted: "04/07/2022",
    incidentType: "Physical Assault - Near Miss"
  },
  {
    id: 2,
    incidentId: 12345,
    participantName: "Joanne Butters",
    relation: "Support Worker",
    author: "Toby McGuire",
    dateCompleted: "21/01/2022",
    incidentType: "Physical Assault - Actual"
  },
  {
    id: 3,
    incidentId: 123456,
    participantName: "John Simmons",
    relation: "Support Worker",
    author: "Michelle Harper",
    dateCompleted: "04/07/2022",
    incidentType: "Verbal Assault - Actual"
  }
];
