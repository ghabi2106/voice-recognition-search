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
        <Link className="nav-link" to="/component">
          Component
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/directives">
          Directives
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/elementref">
          ElementRef
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
        <Link className="nav-link" to="/interceptors">
          Interceptors
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

      {
        //#region methodology
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
          Others
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/providers">
              Service Providers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/providers-type">
              Providers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/view-child">
              ViewChild ViewChildren
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/encapsulation">
              Encapsulation
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/detection">
              Detection Strategies
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/micro">
              Micro Frontend
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/ssr">
              SSR
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/compilation">
              Compilation
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
