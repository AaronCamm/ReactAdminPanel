import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Datatable } from "../../components/datatable/CarePlanDatatable";
import { Link } from "react-router-dom";

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
                  <span>Care Plans</span>
                </div>
                <Link to="/careplans/new">
                  <div className="addicon">
                    <AddIcon />
                  </div>
                </Link>
              </div>
              <hr />
              <div className="search">
                <input type="text" placeholder="Search..." />
                <SearchIcon className="searchicon" />
              </div>
              <div className="recordsbody">
                <Datatable/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarePlanList;