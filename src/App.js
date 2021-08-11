import React, { useState } from "react";
import HomePage from "./components/Home";
import AngularPage from "./components/Angular";
import DotnetPage from "./components/Dotnet";
import CLRPage from "./components/Clr";
import EntityframeworkPage from "./components/Entityframework";
import ControllerPage from "./components/controller";
import MvcPage from "./components/Mvc";
import DesignpatternPage from "./components/Designpattern";
import DiPage from "./components/Di";
import CleanPage from "./components/Clean";

import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import stringSimilarity from "string-similarity";
//import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const pages = [
    "home",
    "angular",
    // difference  between .net and .net core
    ".net",
    "dotnet",
    "difference between dotnet standard and dotnet core",
    "difference between .net standard and .net core",
    ".net .net core",
    // CLR
    "clr",
    "common language runtime",
    // Entity Framework
    "fntity framework",
    // Controller
    "controller",
    // MVC
    "mvc",
  ];

  const commands = [
    {
      command: ["*"],
      callback: (redirectPage) => {
        var matches = stringSimilarity.findBestMatch(redirectPage, pages);
        setRedirectUrl(matches.bestMatch.target);
      },
    },
  ];

  const { transcript } = useSpeechRecognition({ commands });
  const [redirectUrl, setRedirectUrl] = useState("");
  const urls = {
    home: "/",
    // angular
    angular: "/angular",
    // difference  between .net and .net core
    ".net": "/dotnet",
    dotnet: "/dotnet",
    "difference between dotnet standard and dotnet core": "/dotnet",
    "difference between .net standard and .net core": "/dotnet",
    ".net .net core": "/dotnet",
    // CLR
    clr: "/clr",
    "common language runtime": "/clr",
    // Entity Framework
    "entity framework" : "/entityframework",
    // Entity Framework
    "Controller" : "/controller",
    // MVC
    "mvc" : "/mvc",
  };

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  let redirect = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      redirect = <Redirect to={urls[redirectUrl]} />;
    } else {
      redirect = <p>Could not find page: {redirectUrl}</p>;
    }
  }

  return (
    <div className="app">
      <BrowserRouter>
        <header className="bd-header bg-dark d-flex align-items-stretch border-bottom border-dark">
          <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/angular">
                      Angular
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/dotnet">
                      Dotnet
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/clr">
                      CLR
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/entityframework">
                      Entity Framework
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/mvc">
                      MVC
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/controller">
                      Controller
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/di">
                      DI
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/designpattern">
                      Design Pattern
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/clean">
                      Clean
                    </Link>
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                  <p className="mb-0 me-2" id="transcript">
                    Transcript: {transcript}
                  </p>
                  <button
                    className="btn btn-outline-success"
                    onClick={SpeechRecognition.startListening}
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/angular" exact component={AngularPage} />
        <Route path="/dotnet" component={DotnetPage} />
        <Route path="/clr" component={CLRPage} />
        <Route path="/entityframework" component={EntityframeworkPage} />
        <Route path="/controller" component={ControllerPage} />
        <Route path="/mvc" component={MvcPage} />
        <Route path="/designpattern" component={DesignpatternPage} />
        <Route path="/di" component={DiPage} />
        <Route path="/clean" component={CleanPage} />

        {redirect}
      </BrowserRouter>
    </div>
  );
}

export default App;
