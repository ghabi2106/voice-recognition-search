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
      <li className="nav-item">
        <Link className="nav-link" to="/binding">
          Binding
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/di">
          DI
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/directives">
          Directives
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/forms">
          Forms
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hooks">
          Hooks
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/module">
          Module
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/observables">
          Observable
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/pipes">
          Pipes
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/routing">
          Routing
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/templates">
          Templates
        </Link>
      </li>
      {
        //#endregion
      }
    </>
  );
}
