import "./sidebar.scss";
import logo from "../../img/bssicon.png";

import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import TopicIcon from "@mui/icons-material/Topic";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import BadgeIcon from "@mui/icons-material/Badge";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SettingsIcon from "@mui/icons-material/Settings";
import ReceiptIcon from '@mui/icons-material/Receipt';

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={logo} alt="BendigoSupportServices" className="logo" />
      </div>
      <div className="centre">
        <ul>
          <a href="/">
            <li>
              <HomeIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </a>
          <a href="/participants">
            <li>
              <PeopleIcon className="icon" />
              <span>Participants</span>
            </li>
          </a>
          <a href="/careplans">
            <li>
              <TopicIcon className="icon" />
              <span>Care Plans</span>
            </li>
          </a>
          <a href="/incidents">
            <li>
              <AssignmentLateIcon className="icon" />
              <span>Incidents</span>
            </li>
          </a>
          <a href="/employees">
            <li>
              <BadgeIcon className="icon" />
              <span>Employees</span>
            </li>
          </a>
          <a href="/documents">
            <li>
              <AutoStoriesIcon className="icon" />
              <span>Documents</span>
            </li>
          </a>
          <a href="/invoices">
            <li>
              <ReceiptIcon className="icon" />
              <span>Invoices</span>
            </li>
          </a>
          <a href="/settings">
            <li>
              <SettingsIcon className="icon" />
              <span>Settings</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
