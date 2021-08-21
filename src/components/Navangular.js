import React from "react";
import { Link } from "react-router-dom";

export default function Navangular() {
  return (
    <>
      {
        //#region angular
      }
      <li className="nav-item">
        <Link className="nav-link" to="/angular">
          Angular
        </Link>
      </li>
      {
        //#endregion
      }
    </>
  );
}
