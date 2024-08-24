// import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h1>CRUD using Axios</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <h3><li className="nav-item">
              <Link
                to="/"
                className="nav-link"
                activeClassName="active"
              >
                Home
              </Link>
            </li></h3>
            <h3><li className="nav-item">
              <Link
                to="/ListPages"
                className="nav-link"
                activeClassName="active"
              >
                Show Users Data
              </Link>
            </li></h3>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;