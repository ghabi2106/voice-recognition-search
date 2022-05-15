import React from "react";
import { Link } from "react-router-dom";

export default function Navreact() {
  return (
    <>
      {
        //#region react
      }
      <li className="nav-item">
        <Link className="nav-link" to="/reactjs">
          Reactjs
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/dom">
          DOM
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/ecmascript">
          ES6
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/jsx">
          JSX
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/lifecycle">
          Lifecycle
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hooks">
          Hooks
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/hoc">
          HOC
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/propsstate">
          Props-State
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/components">
          Components
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/fragment">
          Fragment
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/refs">
          Refs
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/lazy">
          Lazy
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/events">
          Events
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/forms">
          Forms
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/reactrender">
          Render
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/redux">
          Redux
        </Link>
      </li>
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          React
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/router">
              Router
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/reactvsangular">
              React-Angular
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/stateless">
              Stateless
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/styling">
              Styling
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/arrowfunc">
              Arrow-Func
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/controlled">
              Controlled
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/modularize">
              Modular
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
