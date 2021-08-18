import React from "react";
import { Link } from "react-router-dom";

export default function Reactjs() {
  return (
    <>
      <aside className="bd-aside sticky-xl-top text-muted align-self-start mb-3 mb-xl-5 px-2">
        <h2 className="h6 pt-4 pb-3 mb-4 border-bottom">On this page</h2>
        <nav className="small" id="toc">
          <ul className="list-unstyled">
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Contents
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#jsx"
                  >
                    JSX
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#browsers"
                  >
                    Browsers can't read JSX
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#usability"
                  >
                    use of JSX
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center"
                data-bs-toggle="collapse"
                aria-expanded="true"
                data-bs-target="#contents-collapse"
                aria-controls="contents-collapse"
              >
                Related links
              </button>
              <ul
                className="list-unstyled ps-3 collapse show"
                id="contents-collapse"
              >
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>JSX</h3>
          <article id="jsx">
            <h6>What is JSX?</h6>
            <div>
              <p>
                JSX stands for JavaScript XML. It is a React extension which
                allows writing JavaScript code that looks similar to HTML. It
                makes HTML file easy to understand. The JSX file makes the React
                application robust and boosts its performance. JSX provides you
                to write XML-like syntax in the same file where you write
                JavaScript code, and then preprocessor (i.e., transpilers like
                Babel) transform these expressions into actual JavaScript code.
                Just like XML/HTML, JSX tags have a tag name, attributes, and
                children.
              </p>
              <strong>Example</strong>
              <img src="/img/react/jsx-script-1.PNG" alt="jsx script" />
              <p>
                After compilation, the JSX expression becomes a normal
                JavaScript function.
              </p>
              <img src="/img/react/jsx-script-2.PNG" alt="jsx script" />
            </div>
          </article>
          <article id="browsers">
            <h6>Why can't browsers read JSX?</h6>
            <p>
              Browsers cannot read JSX directly because they can only understand
              JavaScript objects, and JSX is not a regular JavaScript object.
              Thus, we need to transform the JSX file into a JavaScript object
              using transpilers like Babel and then pass it to the browser.
            </p>
          </article>
          <article id="usability">
            <h6>Why we use JSX?</h6>
            <ul>
              <li>
                It is faster than regular JavaScript because it performs
                optimization while translating the code to JavaScript.
              </li>
              <li>
                Instead of separating technologies by putting markup and logic
                in separate files, React uses components that contain both.
              </li>
              <li>
                It is type-safe, and most of the errors can be found at
                compilation time.
              </li>
              <li>It makes easier to create templates.</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
