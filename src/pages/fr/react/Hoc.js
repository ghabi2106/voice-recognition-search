import React from "react";
import { Link } from "react-router-dom";

export default function Hoc() {
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
                    href="#definition"
                  >
                    HOC
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    use of HOC
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pure"
                  >
                    Pure Component
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
          <h3>HOC and Pure</h3>
          <article id="definition">
            <h6>What are Higher Order Components(HOC)?</h6>
            <p>
              In React, Higher Order Component is an advanced technique for
              reusing component logic. It is a function that takes a component
              and returns a new component. In other words, it is a function
              which accepts another function as an argument. According to the
              official website, it is not the feature(part) in React API, but a
              pattern that emerges from React's compositional nature.
            </p>
          </article>
          <article id="use">
            <h6>What can you do with HOC?</h6>
            <ul>
              <li>Code Reusability</li>
              <li>Props manipulation</li>
              <li>State manipulation</li>
              <li>Render highjacking</li>
            </ul>
          </article>
          <article id="pure">
            <h6>What are Pure Components?</h6>
            <p>
              Pure components are the simplest and fastest components which can
              be written. They can replace any component which only has a
              render(). These components enhance the simplicity of the code and
              performance of the application.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
