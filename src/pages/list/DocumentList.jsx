import "./list.scss";
import { DocumentWidget } from "../../components/widgets/DocumentWidget";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const List = () => {
  return (
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
  );
};

export default List;
