import "./list.scss";
import AddIcon from "@mui/icons-material/Add";
import { Datatable } from "../../components/datatable/Datatable";
import { Link } from "react-router-dom";
import { participantColumns } from "../../columns/columnData";

const List = () => {
  return (
    <div className="records">
      <div className="topbar">
        <div className="recordstext">
          <span>Participant Records</span>
        </div>
        <Link to="/participants/new">
          <div className="addicon">
            <AddIcon />
          </div>
        </Link>
      </div>
      <hr />
      <div className="recordsbody">
        <Datatable
          db="participants"
          columns={participantColumns}
          className="datatable"
        />
      </div>
    </div>
  );
};

export default List;
