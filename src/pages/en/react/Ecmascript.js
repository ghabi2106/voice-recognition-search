import React from "react";
import { Link } from "react-router-dom";

export default function Ecmascript() {
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
                    href="#es6"
                  >
                    Javascript ES6
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#difference"
                  >
                    ES5 vs ES6
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
          <h3>Javascript ES6</h3>
          <article id="">
            <h6>Javascript ES6</h6>
            <div>
              <p>
                ECMAScript 2015 was the second major revision to JavaScript.
              </p>
              <p>ECMAScript 2015 is also known as ES6 and ECMAScript 6.</p>
              <p>New Features in ES6</p>
              <ul>
                <li>The let keyword</li>
                <li>The const keyword</li>
                <li>Arrow Functions</li>
                <li>For/of</li>
                <li>Map Objects</li>
                <li>Classes</li>
                <li>Promises</li>
                <li>Array.find()</li>
              </ul>
            </div>
          </article>
          <article id="difference">
            <h6>How different is React’s ES6 syntax when compared to ES5?</h6>
            <div>
              <p>Syntax has changed from ES5 to ES6 in following aspects:</p>
              <img src="/img/react/ecma-1-2-3.PNG" alt="ES5 vs ES6" />
              <img src="/img/react/ecma-4.PNG" alt="ES5 vs ES6" />
              <img src="/img/react/ecma-5.PNG" alt="ES5 vs ES6" />
            </div>
          </article>
       </section>
      </div>
    </>
  );
}
