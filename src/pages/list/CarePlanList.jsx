import "./list.scss";
import AddIcon from "@mui/icons-material/Add";
import { Datatable } from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import { careplanColumns } from "../../columns/columnData";

const CarePlanList = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Care Plans</span>
        </div>
        <Link to="/careplans/new">
          <div className="addicon">
            <AddIcon />
          </div>
        </Link>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="careplans"
          columns={careplanColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default CarePlanList;
