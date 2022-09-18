import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AppointWidget from "../../components/widgets/AppointWidget";
import TasksWidget from "../../components/widgets/TasksWidget";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <AppointWidget/>
          <TasksWidget/>
        </div>
      </div>
    </div>
  );
};

export default Home;
