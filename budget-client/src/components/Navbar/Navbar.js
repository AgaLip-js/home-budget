import React from "react";
import logo from "../../assets/pictures/BUDŻETOMAT3.jpg";
import "aos/dist/aos.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ aos }) => {
  return (
    <div className="nav-wrapper" data-aos={aos}>
      <div className="img-logo">
        <Link to="/">
          <img src={logo} width="250px" alt={logo} />
        </Link>
      </div>
      <div className="sign-container">
        <NavLink to="/login" activeClassName="active" className="login-title">
          Zaloguj się
        </NavLink>
        <NavLink
          to="/register"
          activeClassName="active"
          className="register-title"
        >
          Zarejestruj się
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
