import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Union() {
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
                    href="#union"
                  >
                    UNION
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#union-all"
                  >
                    UNION ALL
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
          <h3>SQL UNION Operator</h3>
          <article id="union">
            <h6>UNION Operator</h6>
            <div>
              <p>
                The <code>UNION</code> operator is used to combine the
                result-set of two or more
                <code>SELECT</code>
                statements.
              </p>
              <ul>
                <li>
                  Every <code>SELECT</code> statement within
                  <code>UNION</code> must have the same number of columns
                </li>
                <li>The columns must also have similar data types</li>
                <li>
                  The columns in every <code>SELECT</code> statement must also
                  be in the same order
                </li>
              </ul>
              <Highlight language="sql">{`SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;`}</Highlight>
            </div>
          </article>
          <article id="union-all">
            <h6>UNION ALL</h6>
            <div>
              <p>
                The <code>UNION</code> operator selects only distinct values by
                default. To allow duplicate values, use <code>UNION ALL</code>:
              </p>
              <Highlight language="sql">{`SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
