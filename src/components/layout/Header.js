import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = (props) => {
  //   Destructuring
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 ">
      <a href="/" className="navbar-brand">
        {branding}
      </a>
      <div>
        <ul className="navbar-nav m-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact/add" className="nav-link">
              <i className="fas fa-plus" />
              Add
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" />
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// Default Props
Header.defaultProps = {
  branding: "My App",
};

// Validations
Header.propTypes = {
  branding: PropTypes.string.isRequired,
};

export default Header;
