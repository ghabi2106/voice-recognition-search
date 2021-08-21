import React from "react";
import { Link } from "react-router-dom";

export default function Styling() {
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
                    href="#styling-use"
                  >
                    Use of styling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#styling"
                  >
                    Styling Ways
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#styling-module"
                  >
                    Module Styling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#styled-components"
                  >
                    Styled Components
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
          <h3>React Styling</h3>
          <article id="styling-use">
            <h6>How to use styles in React?</h6>
            <div>
              <p>
                We can use style attribute for styling in React applications,
                which adds dynamically-computed styles at render time. It
                accepts a JavaScript object in camelCased properties rather than
                a CSS string. The style attribute is consistent with accessing
                the properties on DOM nodes in JavaScript.
              </p>
              <img
                src="/img/react/styling-use-react.PNG"
                alt="styling use react"
              />
            </div>
          </article>
          <article id="styling">
            <h6>How many ways can we style the React Component?</h6>
            <ul>
              <li>Inline Styling</li>
              <li>CSS Stylesheet</li>
              <li>CSS Module</li>
              <li>Styled Components</li>
            </ul>
          </article>
          <article id="styling-module">
            <h6>Explain CSS Module styling in React.</h6>
            <p>
              CSS Module is a CSS file where all class names and animation names
              are scoped locally by default. It is available only for the
              component which imports it, and without your permission, it cannot
              be applied to any other Components. You can create CSS Module file
              with the .module.css extension.
            </p>
          </article>
          <article id="styled-components">
            <h6>What are Styled Components?</h6>
            <p>
              Styled-Components is a library for React. It is the successor of
              CSS Modules. It uses enhance CSS for styling React component
              systems in your application, which is written with a mixture of
              JavaScript and CSS. It is scoped to a single component and cannot
              leak to any other element in the page.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
