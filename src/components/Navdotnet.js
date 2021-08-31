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
        <Link className="nav-link" to="/cqrs">
          CQRS
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
        <Link className="nav-link" to="/service">
          Service
        </Link>
      </li>

      {
        //#region design pattern
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
          Design
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/agile">
              Agile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/cleancode">
              Clean-Code
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/solid">
              Solid
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/designpattern">
              Design-Pattern
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/singleton">
              Singleton
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/factory">
              Factory
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/mediator">
              Mediator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/observer">
              Observer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/command">
              Command
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

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
            <Link className="dropdown-item" to="/controllervuedata">
              Controller-Vue-Data
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/nugetpackages">
              Nuget-Packages
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/assembly">
              Assembly
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/caching">
              Caching
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/dllexe">
              DLL-EXE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/dotnetcomponents">
              .Net-Components
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/gc">
              GC
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
            <Link className="dropdown-item" to="/linq">
              Linq
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
            <Link className="dropdown-item" to="/threads">
              Threads
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
          <li className="nav-item">
            <Link className="dropdown-item" to="/gettype">
              GetType-typeof
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
