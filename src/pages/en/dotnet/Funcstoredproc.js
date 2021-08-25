import React from "react";
import { Link } from "react-router-dom";

export default function Funcstoredproc() {
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
                    href="#stored-proc"
                  >
                    Stored Procedure
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#functions"
                  >
                    Functions
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
          <h3>Function vs Stored procedure</h3>
          <article id="stored-proc">
            <h6>Stored Procedure:</h6>
            <ul>
              <li>
                A Stored Procedure is always used to perform a specific task.
              </li>
              <li>It can return zero, one or more value.</li>
              <li>It can have both input and output parameters.</li>
              <li>Exception handling can be done using a try-catch block.</li>
              <li>A function can be called from a Procedure.</li>
            </ul>
          </article>
          <article id="func">
            <h6>Function</h6>
            <ul>
              <li>Functions must return a single value.</li>
              <li>It can only have the input parameter.</li>
              <li>
                Exception handling cannot be done using a try-catch block.
              </li>
              <li>A Stored procedure cannot be called from a function.</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
