import React from "react";
import { Link } from "react-router-dom";
import "../styles/secondnav.css";
import AnimationCat from "./AnimationCat";
import { BsGithub } from "react-icons/bs";
import { SiReplit } from "react-icons/si";
import { FaHandPointRight } from "react-icons/fa";
import { FaHandPointLeft } from "react-icons/fa";

const SecondHome = () => {
  return (
    <>
      <div className="containerBox">
        <div className="mainBox  glow">
          <p>Check out the recent notifications</p>
        </div>
        <div className="notiFication">
          <Link to="/general">
            <FaHandPointRight />
            &nbsp;General&nbsp;
            <FaHandPointLeft />
          </Link>
          <Link to="/exam">
            <FaHandPointRight />
            &nbsp; Exam &nbsp;
            <FaHandPointLeft />
          </Link>
        </div>
        <AnimationCat />
        <p className="colorFont2">Thanks for using my service</p>
        <div className="links">
          <a
            href="https://github.com/TheCoderAdi"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://replit.com/@ASwayamSiddhaCo"
            target="_blank"
            rel="noreferrer"
          >
            <SiReplit />
          </a>
        </div>
      </div>
    </>
  );
};

export default SecondHome;
