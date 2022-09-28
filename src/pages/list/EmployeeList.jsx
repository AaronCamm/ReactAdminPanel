import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { employeeColumns } from "../../columns/columnData";
import { Datatable } from "../../components/datatable/Datatable";
import "./List.scss";

const List = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Employee Records</span>
        </div>
        <Link to="/employees/new">
          <div className="addicon">
            <AddIcon />
          </div>
        </Link>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="employees"
          columns={employeeColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default List;
