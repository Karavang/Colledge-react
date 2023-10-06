import React from "react";
import { links } from "./data";

function Sidebar() {
  return (
    <ul className="links">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.url}>{link.text}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Sidebar;
