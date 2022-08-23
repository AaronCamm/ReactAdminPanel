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

export const rows = [
  {
    id: 1,
    ndisNum: 1234,
    firstName: "John",
    lastName: "Simmons",
    planDuration: "6-Months",
    startDate: "04/01/2022",
    endDate: "04/07/2022",
    planAmount: "$42,202.00"
  },
  {
    id: 2,
    ndisNum: 12345,
    firstName: "Joanne",
    lastName: "Butters",
    planDuration: "6-Months",
    startDate: "23/05/2022",
    endDate: "23/11/2022",
    planAmount: "$12,808.00"
  },
  {
    id: 3,
    ndisNum: 123456,
    firstName: "Vince",
    lastName: "Lumens",
    planDuration: "3-Months",
    startDate: "12/05/2022",
    endDate: "12/08/2022",
    planAmount: "$8,013.00"
  }
];
