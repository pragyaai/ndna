import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <h1>Lorem Ipsum</h1>
      <ul>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? "active" : "")}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/software" 
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Lorem Ipsum
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
