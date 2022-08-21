import "./sidebar.scss";
import logo from "../../img/bssicon.png";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TopicIcon from "@mui/icons-material/Topic";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import BadgeIcon from "@mui/icons-material/Badge";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SettingsIcon from "@mui/icons-material/Settings";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="BendigoSupportServices" className="logo" />
      </div>
      <div className="centre">
        <ul>
          <li>
            <a href="/">
              <HomeIcon className="icon" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/participants">
              <PeopleIcon className="icon" />
              <span>Participants</span>
            </a>
          </li>
          <li>
            <a href="/careplans">
              <TopicIcon className="icon" />
              <span>Care Plans</span>
            </a>
          </li>
          <li>
            <a href="/incidents">
              <AssignmentLateIcon className="icon" />
              <span>Incidents</span>
            </a>
          </li>
          <li>
            <a href="/employees">
              <BadgeIcon className="icon" />
              <span>Employees</span>
            </a>
          </li>
          <li>
            <a href="/resources">
              <AutoStoriesIcon className="icon" />
              <span>Resources</span>
            </a>
          </li>
          <li>
            <a href="/settings">
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
