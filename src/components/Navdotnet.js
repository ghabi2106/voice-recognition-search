import React from "react";
import { Link } from "react-router-dom";

export default function Navdotnet() {
  return (
    <>
      {
        //#region dotnet
      }
      <li className="nav-item">
            <Link className="nav-link" to="/clean">
              Clean
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/clr">
              CLR
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/controller">
              Controller
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/controllervuedata">
              Controller-Vue-Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/cqrs">
              CQRS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/designpattern">
              Design-Pattern
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/di">
              DI
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dotnet">
              Dotnet
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/entityframework">
              EF
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/https">
              Https
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/httpmethods">
              Http-Methods
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/middleware">
              Middleware
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/mvc">
              MVC
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/nugetpackages">
              Nuget-Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/service">
              Service
            </Link>
          </li>
      {
        //#endregion
      }

      {
        //#region csharp
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
          Csharp
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/singleton">
              Singleton
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/boxing">
              Boxing
            </Link>
          </li>         
          <li className="nav-item">
            <Link className="dropdown-item" to="/collections">
              Collections
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/covariance">
              Covariance
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/datatype">
              Datatype
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/delegate">
              Delegate
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/enumindexer">
              Enumindexer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/modifiers">
              Modifiers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/csharp-features">
              C#-Features
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/oop">
              OOP
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/refoutin">
              Ref-Out-In
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/statements">
              Statements
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/string2int">
              String2Int
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/stringbuilder">
              String-Builder
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/tuple">
              Tuple
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/typesystem">
              Type-System
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