import "./home.scss";
import AppointWidget from "../../components/widgets/AppointWidget";
import TasksWidget from "../../components/widgets/TasksWidget";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <div className="widgets">
          <AppointWidget />
          <div className="breaker">
            <hr />
          </div>
          <TasksWidget />
        </div>
      </div>
    </div>
  );
};

export default Home;
