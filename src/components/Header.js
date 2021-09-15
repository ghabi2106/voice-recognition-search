import React, { useContext } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import stringSimilarity from "string-similarity";
import { RedirectContext } from "../App";

export default function Header(pages) {
  const redirectContext = useContext(RedirectContext);

  const commands = [
    {
      command: ["*"],
      callback: (redirectPage) => {
        var matches = stringSimilarity.findBestMatch(redirectPage, pages);
        redirectContext.setRedirectUrl(matches.bestMatch.target);
      },
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <header className="bd-header bg-dark d-flex align-items-stretch border-bottom border-dark">
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 flex-column">
        <div className="top-nav container-fluid">
          <p className="mb-0 me-2" id="transcript">
            Transcript: {transcript}
          </p>
          <button
            className="btn btn-outline-primary me-2"
            onClick={SpeechRecognition.startListening}
          >
            <i className="fa fa-microphone"></i>
          </button>
          <select className="form-select select-lang me-2">
            <option defaultValue="csharp">.Net</option>
            <option value="angular">Angular</option>
            <option value="react">React</option>
          </select>
          <button className="btn btn-outline-success">FR</button>
        </div>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Presentation
          </Link>
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
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/qualities"
                >
                  Qualities
                </Link>
              </li>

              {
                //#region dotnet
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
                  .Net
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/clean">
                      Clean
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/clr">
                      CLR
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/controller">
                      Controller
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/controllervuedata">
                      Controller-Vue-Data
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/cqrs">
                      CQRS
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/designpattern">
                      Design-Pattern
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/di">
                      DI
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/dotnet">
                      Dotnet
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/entityframework">
                      EF
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/httpmethods">
                      Http-Methods
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/mvc">
                      MVC
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/nugetpackages">
                      Nuget-Packages
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/service">
                      Service
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/singleton">
                      Singleton
                    </Link>
                  </li>
                </ul>
              </li>
              {
                //#endregion
              }

              {
                //#region csharp
              }
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Csharp
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                    <Link className="dropdown-item" to="/csharp9">
                      C#-Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/oop">
                      OOP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/parameters">
                      Parameters
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

              {
                //#region react
              }
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  React
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                    <Link className="dropdown-item" to="/dom">
                      DOM
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/ecmascript">
                      ES6
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/events">
                      Events
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/forms">
                      Forms
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/fragment">
                      Fragment
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/hoc">
                      HOC
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/jsx">
                      JSX
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/lifecycle">
                      Lifecycle
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/modularize">
                      Modular
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/propsstate">
                      Props-State
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/reactjs">
                      Reactjs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/reactrender">
                      Render
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/reactvsangular">
                      React-Angular
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/redux">
                      Redux
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/refs">
                      Refs
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="dropdown-item" to="/router">
                      Router
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
                </ul>
              </li>
              {
                //#endregion
              }

              {
                //#region frontend
              }
              <li className="nav-item">
                <Link className="nav-link" to="/css">
                  CSS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/html">
                  HTML
                </Link>
              </li>
              {
                //#endregion
              }
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
