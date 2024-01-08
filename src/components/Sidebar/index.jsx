import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import StyleSidebar from "./style";
import { AuthContext } from "../../context/AuthContext";
import iconClose from "../../assets/images/icon-close.svg";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import avatar from "../../assets/images/user-avatar.png";
import logo from "../../assets/images/logo.svg";
import iconDashboard from "../../assets/images/icon-dashboard.svg";
import iconAbout from "../../assets/images/icon-about.svg";
import iconRooms from "../../assets/images/icon-rooms.svg";
import iconUsers from "../../assets/images/icon-users.svg";
import iconLogout from "../../assets/images/icon-logout.svg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { logOutUser } = useContext(AuthContext);

  const onLogout = () => {
    navigate("/admin");
    logOutUser();
  };

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
            <NavLink
              to="dashboard"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <img alt="Dashboard" src={iconDashboard} />
              <p>Dashboard</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutbuilding"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <img alt="About" src={iconAbout} />
              <p>About</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="rooms"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <img alt="Rooms" src={iconRooms} />
              <p>Rooms</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="users"
              className={({ isActive }) => (isActive ? "nav-active" : "")}
            >
              <img alt="Users" src={iconUsers} />
              <p>Users</p>
            </NavLink>
          </li>
          <li onClick={onLogout}>
            <img alt="Logout" src={iconLogout} />
            <p>Logout</p>
          </li>
        </ul>
      </aside>
    </StyleSidebar>
  );
};

export default Sidebar;
