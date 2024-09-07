import React, { useState } from "react";
import "../my-proj1.css";
import "./TextForm";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [mystyle1, setmystyle1] = useState({
    backgroundColor: "rgb(39, 35, 35)",
  });
  const [mystyle2, setmystyle2] = useState({
    color: "rgb(234, 222, 222)",
  });


  const mainfn = () => {
    props.toogleMode();
    toggledark();
  };

  const toggledark = () => {
    if (props.mode === "dark") {
      setmystyle1({
        backgroundColor: "rgb(120,120,104)", 
      });
      setmystyle2({
        color: "white",
      });
    } else {
      setmystyle1({
        backgroundColor: "rgb(39, 35, 30)", 
      });
      setmystyle2({
        color: "rgb(234, 222, 222)",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top" style={mystyle1}>
      <div className="container-fluid">
        <Link style={mystyle2} className="navbar-brand" to="/">
          <b>EasyText</b>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                style={mystyle2}
                className="nav-link active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link style={mystyle2} className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>

          <label className="switch mx-3">
            <input type="checkbox" id="chkbox" onClick={mainfn} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </nav>
  );
}
