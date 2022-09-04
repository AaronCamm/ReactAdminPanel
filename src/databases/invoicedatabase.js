import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const columns = [
  {
    field: "invoiceId",
    headerName: "Invoice ID",
    width: 250,
  },
  {
    field: "dateCreated",
    headerName: "Date Created",
    width: 220,
  },
  {
    field: "dateDue",
    headerName: "Due Date",
    width: 220,
  },
  {
    field: "participantName",
    headerName: "Participant Name",
    width: 220,
  },
  {
    field: "ndisNumber",
    headerName: "NDIS Number",
    width: 220,
  },
  {
    field: "total",
    headerName: "Total",
    width: 180,
  },
  {
    field: "gst",
    headerName: "GST",
    width: 180,
  },
  {
    field: "view",
    headerName: "View",
    width: 115,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link to={"/invoices/" + params.row.id} >            
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];