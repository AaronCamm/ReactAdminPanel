import "./taskswidget.scss";
import "./backingwidget.scss";
import AddIcon from "@mui/icons-material/Add";

const Widget = () => {
  return (
    <div className="backing">
      <div className="widget">
        <div className="tasks">
          <div className="taskstext">
            <span>My Tasks</span>
          </div>
          <div className="addicon">
            <AddIcon />
          </div>
          <hr />
          <div className="tasksbody">
            Body
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
