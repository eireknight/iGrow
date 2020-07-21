import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          Profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/checklist"
          className={window.location.pathname === "/checklist" ? "nav-link active" : "nav-link"}
        >
          Checklist
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/quotes"
          className={window.location.pathname === "/quotes" ? "nav-link active" : "nav-link"}
        >
          Quotes
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/test"
          className={window.location.pathname === "/test" ? "nav-link active" : "nav-link"}
        >
          Test
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/snapshot"
          className={window.location.pathname === "/snapshot" ? "nav-link active" : "nav-link"}
        >
          Snapshot
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/links"
          className={window.location.pathname === "/links" ? "nav-link active" : "nav-link"}
        >
          Links
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
