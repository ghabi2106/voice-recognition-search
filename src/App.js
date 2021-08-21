import React, { useState } from "react";
import { BrowserRouter, Route, Link, Redirect, Switch } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import stringSimilarity from "string-similarity";

import Nav from "./components/Nav";
import Routing from "./components/Routing";

//#region something import all fr pages
import HomePage from "./pages/fr/Home";
import QualitiesPage from "./pages/fr/Qualities";

//#region frontend
import CssPage from "./pages/fr/frontend/Css";
import HtmlPage from "./pages/fr/frontend/Html";
//#endregion

//#endregion

//import logo from './logo.svg';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export const LangContext = React.createContext();
export const CourseContext = React.createContext();

function App() {
  const initialLang = "FR";
  const [lang, setLang] = useState(initialLang);
  const [selectedCourse, setSelectedCourse] = useState("dotnet");

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
    "entity framework": "/entityframework",
    // Entity Framework
    Controller: "/controller",
    // MVC
    mvc: "/mvc",
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
              <select
                className="form-select select-lang me-2"
                value={selectedCourse}
                onChange={(event) => setSelectedCourse(event.target.value)}
              >
                <option value="dotnet">.Net</option>
                <option value="angular">Angular</option>
                <option value="react">React</option>
              </select>
              <button
                className="btn btn-outline-success"
                onClick={() =>
                  setLang((prevLang) => (prevLang === "EN" ? "FR" : "EN"))
                }
              >
                {lang}
              </button>
            </div>
            <CourseContext.Provider value={selectedCourse}>
              <Nav />
            </CourseContext.Provider>
          </nav>
        </header>

        {/* <Switch> */}

        <LangContext.Provider value={lang}>
          <CourseContext.Provider value={selectedCourse}>
            <Routing />
          </CourseContext.Provider>
        </LangContext.Provider>

        {redirect}
        {/* </Switch> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
