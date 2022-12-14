import logo from "../../img/bssicon.png";
import "./Sidebar.scss";

import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BadgeIcon from "@mui/icons-material/Badge";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import PeopleIcon from "@mui/icons-material/People";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
import TopicIcon from "@mui/icons-material/Topic";

import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="BendigoSupportServices" className="logo" />
      </div>
      <div className="centre">
        <ul>
          <Link to="/dashboard">
            <li>
              <HomeIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <Link to="/participants">
            <li>
              <PeopleIcon className="icon" />
              <span>Participants</span>
            </li>
          </Link>
          <Link to="/careplans">
            <li>
              <TopicIcon className="icon" />
              <span>Care Plans</span>
            </li>
          </Link>
          <Link to="/incidents">
            <li>
              <AssignmentLateIcon className="icon" />
              <span>Incidents</span>
            </li>
          </Link>
          <Link to="/employees">
            <li>
              <BadgeIcon className="icon" />
              <span>Employees</span>
            </li>
          </Link>
          <Link to="/documents">
            <li>
              <AutoStoriesIcon className="icon" />
              <span>Documents</span>
            </li>
          </Link>
          <Link to="/invoices">
            <li>
              <ReceiptIcon className="icon" />
              <span>Invoices</span>
            </li>
          </Link>
          <Link to="/settings">
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <Link to="/logout">
            <li>
              <LogoutIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
