import React, { useState } from "react";
import HomePage from "./components/Home";
import AngularPage from "./components/Angular";
import NewBlogPostPage from "./components/NewBlogPost";
import ContactPage from "./components/Contact";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import stringSimilarity from "string-similarity";
//import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const pages = ["home", "angular", "new blog post", "contact"];

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
    angular: "/angular",
    "new blog post": "/blog/new",
    contact: "/contact",
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
    <div className="App">
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/angular">
                    Angular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog/new">
                    Add Blog Post
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact
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

        <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/angular" exact component={AngularPage} />
          <Route path="/blog/new" component={NewBlogPostPage} />
          <Route path="/contact" component={ContactPage} />

          {redirect}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
