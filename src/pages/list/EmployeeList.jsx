import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { Datatable } from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import { employeeColumns } from "../../columns/columnData";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="bodyContainer">
          <div className="backing">
            <div className="widget">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
