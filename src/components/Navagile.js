import React from "react";
import { Link } from "react-router-dom";

export default function Navagile() {
  return (
    <>
      {
        //#region Agile
      }
      <li className="nav-item">
        <Link className="nav-link" to="/agile">
          Agile
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/meeting">
          Meeting
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/retrospective">
          Retrospective
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/review">
          Review
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/roles">
          Roles
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/terms">
          Terms
        </Link>
      </li>
      {
        //#endregion
      }
    </>
  );
}
