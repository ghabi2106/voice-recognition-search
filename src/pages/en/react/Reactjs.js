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
                    href="#react"
                  >
                    React
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#limitations"
                  >
                    Limitations
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#everything-component"
                  >
                    Everything is a component
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
          <h3>React Programming</h3>
          <article id="react">
            <h6>What is React?</h6>
            <p>
              React is a declarative, efficient, flexible open source front-end
              JavaScript library developed by Facebook in 2011. It follows the
              component-based approach for building reusable UI components,
              especially for single page application. It is used for developing
              interactive view layer of web and mobile apps.
            </p>
          </article>
          <article id="features">
            <h6>What are the features of React?</h6>
            <ul>
              <li>JSX</li>
              <li>Components</li>
              <li>One-way Data Binding</li>
              <li>Virtual DOM</li>
              <li>Simplicity</li>
              <li>Performance</li>
            </ul>
          </article>
          <article id="advantages">
            <h6>What are the advantages of React?</h6>
            <ul>
              <li>It increases the application’s performance</li>
              <li>
                It can be conveniently used on the client as well as server side
              </li>
              <li>Because of JSX, code’s readability increases</li>
              <li>Using React, writing UI test cases become extremely easyt</li>
            </ul>
          </article>
          <article id="limitations">
            <h6>What are the limitations of React?</h6>
            <ul>
              <li>React is just a library, not a full-blown framework</li>
              <li>Its library is very large and takes time to understand</li>
              <li>
                It can be little difficult for the novice programmers to
                understand
              </li>
              <li>
                JSX as a barrier: Coding gets complex as it uses inline
                templating and JSX
              </li>
            </ul>
          </article>
          <article id="everything-component">
            <h6>
              What do you understand from "In React, everything is a component."
            </h6>
            <p>
              In React, components are the building blocks of React
              applications. These components divide the entire React
              application's UI into small, independent, and reusable pieces of
              code. React renders each of these components independently without
              affecting the rest of the application UI. Hence, we can say that,
              in React, everything is a component.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
