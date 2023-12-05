import React, { useContext } from "react";
import logo from "./logo.svg";
import { FaTimes } from "react-icons/fa";
import { social, links } from "./data";
import { AppContext } from "./context";

const Sidebar = () => {
  const { closeSideBar, isSideBarOpen } = useContext(AppContext);

  const renderLinks = (linkList) => {
    return linkList.map(({ id, url, text, icon }) => (
      <li key={id}>
        <a href={url}>
          {icon} {text}
        </a>
      </li>
    ));
  };

  return (
    <aside className={`sidebar ${isSideBarOpen ? "show-sidebar" : ""}`}>
      <div className="sidebar-header">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <button
          className="close-btn"
          onClick={closeSideBar}
        >
          <FaTimes />
        </button>
      </div>
      <ul className="links">{renderLinks(links)}</ul>
      <ul className="social-icons">{renderLinks(social)}</ul>
    </aside>
  );
};

export default Sidebar;
