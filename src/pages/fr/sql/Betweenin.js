import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Betweenin() {
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
                    href="#in"
                  >
                    in
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#between"
                  >
                    Between
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
          <h3>IN, BETWEEN Operator </h3>
          <article id="in">
            <h6>IN Operator</h6>
            <div>
              <p>
                L'opérateur <code>IN</code> permet de spécifier plusieurs
                valeurs dans une <code>WHERE</code> clause.
              </p>
              <dl>
                <dt>IN Syntax</dt>
                <dd>
                  <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);`}</Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE column_name IN (SELECT STATEMENT);`}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="between">
            <h6>BETWEEN Operator</h6>
            <div>
              <p>
                L'opérateur <code>BETWEEN</code> sélectionne des valeurs dans
                une plage donnée. Les valeurs peuvent être des nombres, du texte
                ou des dates.
              </p>
              <dl>
                <dt></dt>
                <dd>
                  <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;`}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
