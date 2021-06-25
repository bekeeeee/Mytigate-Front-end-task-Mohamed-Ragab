import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Icon from "@mdi/react";
import {
  mdiHome,
  mdiTabletDashboard,
  mdiAccount,
  mdiBell,
  mdiCopyright,
} from "@mdi/js";

const NavBar = ({ children }) => {
  let location = useLocation();

  const { pathname } = location;
  const currentLocation = pathname.split("/")[1];
  const renderIcon = (path, size, color, span, to) => {
    //render Icon
    return (
      <Link to={to ? `./${to}` : "./"}>
        <Icon className="icon" path={path} size={size} color={color}></Icon>
        <span className={currentLocation === `${to}` ? "active" : "notactive"}>
          {span}
        </span>
      </Link>
    );
  };

  return (
    <div className="container">
      <div className="header">
        <div className="header-col2">
          {renderIcon(mdiBell, 1, "#082c49")}
          {renderIcon(mdiAccount, 1, "#082c49", "M.Ragab9521@gmial.com")}
        </div>
      </div>

      <div className="sidebar">
        <img src="./Logo-MYTIGATE@2x.png" alt="" />
        {renderIcon(mdiHome, 1, "white", "Home", "home")}
        {renderIcon(mdiTabletDashboard, 1, "white", "Dashboard", "dashboard")}
      </div>

      <div className="footer">
        <div className="footer-col1">
          <li>Version:1.0.0</li>
          <li>
            <a href="https://mytigate.de/">support@mytigate.com</a>
          </li>

          <li>Technical Documentation</li>
        </div>

        <div className="footer-col2">
          {renderIcon(mdiCopyright, 0.8, "#082c49", "Copyright 2019-2021")}
          <li>
            <a href="https://mytigate.de/">MYTIGATE GmbH</a>
          </li>
          <li>Technical Documentation</li>
        </div>
      </div>

      <div className="content">
        <div className="content-page-name">{currentLocation}</div>
        {children}
      </div>
    </div>
  );
};

export default NavBar;
