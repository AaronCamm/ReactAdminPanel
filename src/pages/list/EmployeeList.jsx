import "./list.scss";
import AddIcon from "@mui/icons-material/Add";
import { Datatable } from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import { employeeColumns } from "../../columns/columnData";

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
