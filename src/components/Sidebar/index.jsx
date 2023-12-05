import { useState } from "react";
import StyleSidebar from "./style";
import iconClose from "../../assets/images/icon-close.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import avatar from "../../assets/images/user-avatar.png";
import logo from "../../assets/images/logo.svg";
import iconDashboard from "../../assets/images/icon-dashboard.svg";
import iconAbout from "../../assets/images/icon-about.svg";
import iconRooms from "../../assets/images/icon-rooms.svg";
import iconSensors from "../../assets/images/icon-sensors.svg";
import iconUsers from "../../assets/images/icon-users.svg";
import iconLogout from "../../assets/images/icon-logout.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyleSidebar>
      <div onClick={() => setIsOpen(true)} className="btn-hamburger">
        <img alt="hamburger-menu" src={iconHamburger} />
      </div>
      <aside className={isOpen ? "open-slider" : ""}>
        <div onClick={() => setIsOpen(false)} className="btn-close">
          <img alt="close" src={iconClose} />
        </div>
        <div className="logo">
          <img alt="logo" src={logo} />
        </div>
        <div className="user-info">
          <img alt="avatar" src={avatar} />
          <article>
            <p>Welcome back,</p>
            <span>Laman</span>
          </article>
        </div>
        <ul>
          <li>
            <img alt="Dashboard" src={iconDashboard} />
            <p>Dashboard</p>
          </li>
          <li className="nav-active">
            <img alt="About" src={iconAbout} />
            <p>About</p>
          </li>
          <li>
            <img alt="Rooms" src={iconRooms} />
            <p>Rooms</p>
          </li>
          <li>
            <img alt="Sensors" src={iconSensors} />
            <p>Sensors</p>
          </li>
          <li>
            <img alt="Users" src={iconUsers} />
            <p>Users</p>
          </li>
          <li>
            <img alt="Logout" src={iconLogout} />
            <p>Logout</p>
          </li>
        </ul>
      </aside>
    </StyleSidebar>
  );
};

export default Sidebar;
