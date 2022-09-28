import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { incidentColumns } from "../../columns/columnData";
import { Datatable } from "../../components/datatable/Datatable";
import "./List.scss";

const CarePlanList = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Incidents</span>
        </div>
        <Link to="/incidents/new">
          <div className="addicon">
            <AddIcon />
          </div>
        </Link>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="incidents"
          columns={incidentColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default CarePlanList;
