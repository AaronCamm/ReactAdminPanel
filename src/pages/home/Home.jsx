import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import AppointWidget from "../../components/widget/AppointWidget";
import TasksWidget from "../../components/widget/TasksWidget";

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
