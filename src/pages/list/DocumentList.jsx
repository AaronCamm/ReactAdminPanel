import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { DocumentWidget } from "../../components/widgets/DocumentWidget";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

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
                  <div className="documentText">
                    <span>Documents</span>
                  </div>
                  <Link to="/employee/new">
                    <div className="addicon">
                      <AddIcon />
                    </div>
                  </Link>
                </div>
                <hr />
                <div className="recordsbody">
                  <DocumentWidget className="datatable" />
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
