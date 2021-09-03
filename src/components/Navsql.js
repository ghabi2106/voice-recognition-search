import React from "react";
import { Link } from "react-router-dom";

export default function Navsql() {
  return (
    <>
      {
        //#region SQL
      }
      <li className="nav-item">
        <Link className="nav-link" to="/case">
          Case
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/betweenin">
          Betweenin
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/constraint">
          Constraint
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/funcproc">
          Funcproc
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/havinganyall">
          Havinganyall
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/index">
          Index
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/join">
          Join
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/like">
          Like
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/sql">
          Sql
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/statements">
          Statements
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/subsets">
          Subsets
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/tableview">
          Tableview
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/transaction">
          Transaction
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/union">
          Union
        </Link>
      </li>
      {
        //#endregion
      }
    </>
  );
}
