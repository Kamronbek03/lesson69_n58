import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <nav>
          <div className="nav-links">
            <a style={{ color: "#f00" }} href="#">
              Home
            </a>
            <a href="#">Business</a>
            <a href="#">Entertainment</a>
            <a href="#">General</a>
            <a href="#">Health</a>
            <a href="#">Science</a>
            <a href="#">Sports</a>
            <a href="#">Technology</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
