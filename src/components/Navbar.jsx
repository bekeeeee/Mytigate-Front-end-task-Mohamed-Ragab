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

  console.log("pathname", currentLocation);

  return (
    <div className="container">
      <div className="header">
        <div className="header-col2">
          <Link>
            <Icon
              className="icon"
              path={mdiBell}
              size={1}
              color="#082c49"
            ></Icon>
          </Link>
          <Link>
            <Icon
              className="icon"
              path={mdiAccount}
              size={1}
              color="#082c49"
            ></Icon>
            <span style={{ color: "#082c49" }}>M.Ragab9521@gmial.com</span>
          </Link>
        </div>
      </div>
      <div className="sidebar">
        <img src="./Logo-MYTIGATE@2x.png" alt="" />
        <Link to="/Home">
          <Icon className="icon" path={mdiHome} size={1} color="white"></Icon>
          <span className={currentLocation === "Home" ? "active" : "notactive"}>
            Home
          </span>
        </Link>
        <Link to="/Dashboard">
          <Icon
            className="icon"
            path={mdiTabletDashboard}
            size={1}
            color="white"
          />
          <span
            className={currentLocation === "Dashboard" ? "active" : "notactive"}
          >
            Dashboard
          </span>
        </Link>
      </div>
      <div className="footer">
        <div
          className="footer-col1"
          style={{ color: "black", marginTop: "45px" }}
        >
          <li>Version:1.0.0</li>
          <li>
            <a href="https://mytigate.de/">support@mytigate.com</a>
          </li>
          <li>Technical Documentation</li>
        </div>
        <div
          className="footer-col2"
          style={{
            color: "black",
            float: "right",
            marginTop: "25px",
            marginLeft: "35",
          }}
        >
          <Icon
            className="icon"
            path={mdiCopyright}
            size={0.8}
            color="#082c49"
          ></Icon>
          <span>Copyright 2019-2021</span>
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
