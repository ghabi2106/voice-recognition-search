import React from "react";
import { Link } from "react-router-dom";

export default function Forms() {
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
                    href="#forms"
                  >
                    React Forms
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#proptypes"
                  >
                    propTypes
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
          <h3>React Forms</h3>
          <article id="forms">
            <h6>How are forms created in React?</h6>
            <div>
              <p>
                React forms are similar to HTML forms. But in React, the state
                is contained in the state property of the component and is only
                updated via setState(). Thus the elements can’t directly update
                their state and their submission is handled by a JavaScript
                function. This function has full access to the data that is
                entered by the user into a form.
              </p>
              <img src="/img/react/forms-react.PNG" alt="forms react" />
            </div>
          </article>
          <article id="proptypes">
            <h6>How to apply validation on props in React?</h6>
            <div>
              <p>
                Props validation is a tool which helps the developers to avoid
                future bugs and problems. It makes your code more readable.
                React components used special property PropTypes that help you
                to catch bugs by validating data types of values passed through
                props, although it is not necessary to define components with
                propTypes.
              </p>
              <img src="/img/react/proptypes-react.PNG" alt="propTypes" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
