import "./appointwidget.scss";
import "./backingwidget.scss";

const Widget = () => {
  return (
    <div className="backing">
      <div className="widget">
        <div className="appointments">
          <div className="appointtext">
            <span>Appointments</span>
          </div>
          <hr />
          <div className="appointbody">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Widget;
