import "./appointwidget.scss";
import "./backingwidget.scss";
import AddIcon from "@mui/icons-material/Add";

const Widget = () => {
  return (
    <div className="backing">
      <div className="widget">
        <div className="appointments">
          <div className="appointtext">
            <span>Appointments</span>
          </div>
          <div className="addicon">
            <AddIcon />
          </div>
          <hr />
          <div className="appointbody">
            Body
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
