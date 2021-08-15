import React, { useState } from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import stringSimilarity from "string-similarity";

//#region something import all fr components
import HomePage from "./components/fr/Home";

//#region dotnet
import CleanPage from "./components/fr/dotnet/Clean";
import CLRPage from "./components/fr/dotnet/Clr";
import ControllerPage from "./components/fr/dotnet/Controller";
import ControllervuedataPage from "./components/fr/dotnet/Controllervuedata";
import CqrsPage from "./components/fr/dotnet/Cqrs";
import DesignpatternPage from "./components/fr/dotnet/Designpattern";
import DiPage from "./components/fr/dotnet/Di";
import DotnetPage from "./components/fr/dotnet/Dotnet";
import EntityframeworkPage from "./components/fr/dotnet/Entityframework";
import HttpmethodsPage from "./components/fr/dotnet/Httpmethods";
import MvcPage from "./components/fr/dotnet/Mvc";
import NugetpackagesPage from "./components/fr/dotnet/Nugetpackages";
import ServicePage from "./components/fr/dotnet/Service";
import SingletonPage from "./components/fr/dotnet/Singleton";
//#endregion

//#region c# components
import BoxingPage from "./components/fr/csharp/Boxing";
import CollectionsPage from "./components/fr/csharp/Collections";
import CovariancePage from "./components/fr/csharp/Covariance";
import DatatypePage from "./components/fr/csharp/Datatype";
import DelegatePage from "./components/fr/csharp/Delegate";
import EnumindexerPage from "./components/fr/csharp/Enumindexer";
import ModifiersPage from "./components/fr/csharp/Modifiers";
import NewfeaturesPage from "./components/fr/csharp/Newfeatures";
import OopPage from "./components/fr/csharp/Oop";
import StatementsPage from "./components/fr/csharp/Statements";
import String2intPage from "./components/fr/csharp/String2int";
import StringbuilderPage from "./components/fr/csharp/Stringbuilder";
import TuplePage from "./components/fr/csharp/Tuple";
import TypesystemPage from "./components/fr/csharp/Typesystem";
//#endregion

//#region react

//#endregion

//#region angular
import AngularPage from "./components/fr/angular/Angular";
//#endregion

//#region frontend
import CssPage from "./components/fr/frontend/Css";
import HtmlPage from "./components/fr/frontend/Html";
//#endregion

//#endregion

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
                    <Link className="nav-link" to="/httpmethods">
                      Http-Methods
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
                  <li className="nav-item">
                    <Link className="nav-link" to="/singleton">
                      Singleton
                    </Link>
                  </li>
                  {
                    //#endregion
                  }

                  {
                    //#region csharp
                  }
                  <li className="nav-item">
                    <Link className="nav-link" to="/boxing">
                      Boxing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/collections">
                      Collections
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/covariance">
                      Covariance
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/datatype">
                      Datatype
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/delegate">
                      Delegate
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/enumindexer">
                      Enumindexer
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/modifiers">
                      Modifiers
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/csharp-features">
                      C#-Features
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/oop">
                      OOP
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/statements">
                      Statements
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/string2int">
                      String2Int
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/stringbuilder">
                      String-Builder
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tuple">
                      Tuple
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/typesystem">
                      Type-System
                    </Link>
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

        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />

        {
          //#region dotnet
        }
        <Route path="/clean" component={CleanPage} />
        <Route path="/clr" component={CLRPage} />
        <Route path="/controller" component={ControllerPage} />
        <Route path="/controllervuedata" component={ControllervuedataPage} />
        <Route path="/cqrs" component={CqrsPage} />
        <Route path="/designpattern" component={DesignpatternPage} />
        <Route path="/di" component={DiPage} />
        <Route path="/dotnet" component={DotnetPage} />
        <Route path="/entityframework" component={EntityframeworkPage} />
        <Route path="/httpmethods" component={HttpmethodsPage} />
        <Route path="/mvc" component={MvcPage} />
        <Route path="/nugetpackages" component={NugetpackagesPage} />
        <Route path="/service" component={ServicePage} />
        <Route path="/singleton" component={SingletonPage} />
        {
          //#endregion
        }

        {
          //#region csharp
        }
        <Route path="/boxing" component={BoxingPage} />
        <Route path="/collections" component={CollectionsPage} />
        <Route path="/covariance" component={CovariancePage} />
        <Route path="/datatype" component={DatatypePage} />
        <Route path="/delegate" component={DelegatePage} />
        <Route path="/enumindexer" component={EnumindexerPage} />
        <Route path="/modifiers" component={ModifiersPage} />
        <Route path="/csharp-features" component={NewfeaturesPage} />
        <Route path="/oop" component={OopPage} />
        <Route path="/statements" component={StatementsPage} />
        <Route path="/string2int" component={String2intPage} />
        <Route path="/stringbuilder" component={StringbuilderPage} />
        <Route path="/tuple" component={TuplePage} />
        <Route path="/typesystem" component={TypesystemPage} />
        {
          //#endregion
        }

        {
          //#region angular
        }
        <Route path="/angular" exact component={AngularPage} />
        {
          //#endregion
        }

        {
          //#region react
        }

        {
          //#endregion
        }

        {
          //#region frontend
        }
        <Route path="/css" exact component={CssPage} />
        <Route path="/html" exact component={HtmlPage} />
        {
          //#endregion
        }

        {redirect}
      </BrowserRouter>
    </div>
  );
}

export default App;
