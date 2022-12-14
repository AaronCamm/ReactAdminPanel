import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import LogoNoIcon from "../../img/Logo-NoIcon.png";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="localhost:3000">
        <div className="headerlogo">
          <img src={LogoNoIcon} alt="Bendigo Support Services" />
        </div>
      </a>
      <div className="wrapper">
        <div className="space"></div>
        <div className="items">
          <div className="item">
            <NotificationsIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <Link to="/employees/0">
            <img
              src="https://st2.depositphotos.com/3695509/5337/i/450/depositphotos_53376063-stock-photo-portrait-of-a-tattooed-male.jpg"
              alt="Profile Avatar"
              className="avatar"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
