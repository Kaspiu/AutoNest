import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logoSection">
        <img src="/src/assets/logo-t.png" alt="Logo" width={80} height={80} />
      </div>
      <div className="quickMenuSection">
        <NavLink to="/" className="quickMenuButton">
          Home
        </NavLink>
        <a href="#features" className="quickMenuButton">
          Features
        </a>
        <a href="#about" className="quickMenuButton">
          About
        </a>
      </div>
      <div className="sideButtonsSection">
        <NavLink to="/garage" className="sideButton">
          <FontAwesomeIcon icon={faWarehouse} />
        </NavLink>
        <a
          href="https://github.com/kaspiu"
          target="_blank"
          className="sideButton"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
