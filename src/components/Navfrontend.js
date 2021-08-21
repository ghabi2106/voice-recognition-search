import React from "react";
import { Link } from "react-router-dom";

export default function Navfrontend() {
  return (
    <>
      {
        //#region frontend
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
          Front
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/css">
              CSS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/html">
              HTML
            </Link>
          </li>
        </ul>
      </li>

      {
        //#endregion
      }
    </>
  );
}
