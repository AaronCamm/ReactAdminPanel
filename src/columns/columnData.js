import VisibilityIcon from "@mui/icons-material/Visibility";
import { Link } from "react-router-dom";

export const careplanColumns = [
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
    width: 250,
  },
  {
    field: "view",
    headerName: "View",
    width: 115,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link
            to={"/careplans/" + params.row.id}
            db={"careplans/" + params.row.id}
          >
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];

export const employeeColumns = [
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
          <Link
            to={"/employees/" + params.row.id}
            db={"employees/" + params.row.id}
          >
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];

export const incidentColumns = [
  {
    field: "incidentId",
    headerName: "Incident ID",
    width: 230,
  },
  {
    field: "participantName",
    headerName: "Participant Name",
    width: 230,
  },
  {
    field: "relation",
    headerName: "Relationship",
    width: 230,
  },
  {
    field: "author",
    headerName: "Completed By",
    width: 230,
  },
  {
    field: "dateCompleted",
    headerName: "Date Completed",
    width: 200,
  },
  {
    field: "incidentType",
    headerName: "Type of Incident",
    width: 370,
  },
  {
    field: "view",
    headerName: "View",
    width: 115,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link
            to={"/incidents/" + params.row.id}
            db={"incidents/" + params.row.id}
          >
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];

export const invoiceColumns = [
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
          <Link
            to={"/invoices/" + params.row.id}
            db={"invoices/" + params.row.id}
          >
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];

export const participantColumns = [
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

export const taskColumns = [
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 120,
  },
  {
    field: "description",
    headerName: "Description",
    width: 300,
  },
  {
    field: "clientName",
    headerName: "Client",
    width: 150,
  },
  {
    field: "assigned",
    headerName: "Assigned",
    width: 150,
  },
  {
    field: "view",
    headerName: "View",
    width: 70,
    sortable: false,
    disableColumnMenu: true,
    renderCell: (params) => {
      return (
        <div className="iconImg">
          <Link to={"/tasks/" + params.row.id} db={"tasks/" + params.row.id}>
            <VisibilityIcon />
          </Link>
        </div>
      );
    },
  },
];
