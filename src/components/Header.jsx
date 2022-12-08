import React from "react";
import "../styles/header.css";
import logo from "../assets/cgu_Image.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="CGU_Logo" />
          </Link>
        </div>
        <div className="version_1">
          <h3 className="colorFont">CGU</h3>
        </div>
      </nav>
      <div className="line" style={{ backgroundColor: "white" }}></div>
    </>
  );
};

export default Header;
