import "./taskswidget.scss";
import "./backingwidget.scss";
import AddIcon from "@mui/icons-material/Add";
import { Datatable } from "../datatable/Datatable";
import { taskColumns } from "../../columns/columnData";

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
          <Datatable
            db="tasks"
            columns={taskColumns}
            className="datatable"
          />
        </div>
      </div>
    </div>
  );
};

export default Widget;
