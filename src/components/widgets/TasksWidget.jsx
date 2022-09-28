import AddIcon from "@mui/icons-material/Add";
import { taskColumns } from "../../columns/columnData";
import { Datatable } from "../datatable/Datatable";
import "./BackingWidget.scss";
import "./TasksWidget.scss";

const Widget = () => {
  return (
    <div className="tasks">
      <div className="taskhead">
        <div className="taskstext">
          <span>My Tasks</span>
        </div>
        <div className="addicon">
          <AddIcon />
        </div>
      </div>
      <hr />
      <div className="tasksbody">
        <div className="recordsbody">
          <Datatable db="tasks" columns={taskColumns} className="datatable" />
        </div>
      </div>
    </div>
  );
};

export default Widget;
