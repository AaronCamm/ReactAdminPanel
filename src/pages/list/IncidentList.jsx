import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import { Datatable } from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import { incidentColumns } from "../../columns/columnData";

const CarePlanList = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="bodyContainer">
          <div className="backing">
            <div className="widget">
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
                <Datatable db="incidents" columns={incidentColumns} className="datatable" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePlanList;
