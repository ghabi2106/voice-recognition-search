import React from "react";
import { Link } from "react-router-dom";

export default function Dom() {
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
                    href="#virtual-dom"
                  >
                    Virtual DOM
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#explain"
                  >
                    Explain Virtual DOM.
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
          <h3>Virtual DOM.</h3>
          <article id="virtual-dom">
            <h6>What do you understand by Virtual DOM?</h6>
            <p>
              A virtual DOM is a lightweight JavaScript object which originally
              is just the copy of the real DOM. It is a node tree that lists the
              elements, their attributes and content as Objects and their
              properties. React’s render function creates a node tree out of the
              React components. It then updates this tree in response to the
              mutations in the data model which is caused by various actions
              done by the user or by the system.
            </p>
          </article>
          <article id="explain">
            <h6>Explain the working of Virtual DOM.</h6>
            <ul>
              <li>
                <p>
                  Whenever any data changes in the React App, the entire UI is
                  re-rendered in Virtual DOM representation.
                </p>
                <img src="/img/react/1dom-528x193.png" alt="Virtual DOM" />
              </li>
              <li>
                <p>
                  Then the difference between the previous DOM representation
                  and the new one is calculated.
                </p>
                <img src="/img/react/2dom-528x221.png" alt="Virtual DOM" />
              </li>
              <li>
                <p>
                  Once the calculations are done, the real DOM will be updated
                  with only the things that have actually changed.
                </p>
                <img src="/img/react/3dom-209x180.png" alt="Virtual DOM" />
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
