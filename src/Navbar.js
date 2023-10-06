import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Slidebar";
import { social } from "./data";
import logo from "./logo.svg";
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showMenu = () => {
    if (window.innerWidth > 800) {
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };

  window.addEventListener("resize", showMenu);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className="link-container show-container">
          {showLinks && <Sidebar />}
        </div>
        <ul className="social-icons">
          {social.map((soc) => {
            return (
              <li key={soc.id}>
                <a href={soc.url}>{soc.icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
