import React, { useContext } from "react";
import { Link, Redirect, Switch } from "react-router-dom";
import { CourseContext } from "../App";
import Navreact from "./Navreact";
import Navangular from "./Navangular";
import Navdotnet from "./Navdotnet";
import Navsql from "./Navsql";
import Navfrontend from "./Navfrontend";

export default function Nav() {
  const course = useContext(CourseContext);
  const courseComponent = () => {
    switch (course) {
      case "dotnet":
        return <Navdotnet />;
      case "react":
        return (
          <>
            <Navfrontend />
            <Navreact />
          </>
        );
      case "angular":
        return (
          <>
            <Navfrontend />
            <Navangular />
          </>
        );
      case "sql":
        return (
          <>
            <Navfrontend />
            <Navsql />
          </>
        );
      default:
        return <h1>No project match</h1>;
    }
  };

  return (
    <>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          Presentation
        </Link> */}
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/qualities"
              >
                Qualities
              </Link>
            </li> */}

            {
              //#region presentation
            }
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Presentation
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li className="nav-item">
                  <Link className="dropdown-item" to="/">
                    Presentation
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="dropdown-item" to="/qualities">
                    Qualities
                  </Link>
                </li>
              </ul>
            </li>
            {
              //#endregion
            }

            {courseComponent()}
          </ul>
        </div>
      </div>
    </>
  );
}
