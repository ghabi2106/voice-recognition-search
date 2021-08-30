import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Havinganyall() {
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
                    href="#having"
                  >
                    Having
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#any"
                  >
                    Any
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#all"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#groupby"
                  >
                    GroupBy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#exists"
                  >
                    Exists
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
          <h3>Having Any All GroupBy Exists</h3>
          <article id="having">
            <h6>HAVING Clause</h6>
            <div>
              <p>
                The <code>HAVING</code> clause was added to SQL because the{" "}
                <code>WHERE</code> keyword cannot be used with aggregate
                functions.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);`}</Highlight>
            </div>
          </article>
          <article id="any">
            <h6>ANY</h6>
            <div>
              <p>
                The <code>ANY</code> and <code>ALL</code> operators allow you to
                perform a comparison between a single column value and a range
                of other values.
              </p>
              <p>
                <code>ANY</code> means that the condition will be true if the
                operation is true for any of the values in the range.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY
  (SELECT column_name
  FROM table_name
  WHERE condition);`}</Highlight>
            </div>
          </article>
          <article id="all">
            <h6>ALL Operator</h6>
            <div>
              <p>
                <code>ALL</code> means that the condition will be true only if
                the operation is true for all values in the range.
              </p>
              <dl>
                <dt>ALL Syntax With SELECT</dt>
                <dd>
                  <Highlight language="sql">{`SELECT ALL column_name(s)
FROM table_name
WHERE condition;`}</Highlight>
                </dd>
                <dt>ALL Syntax With WHERE or HAVING</dt>
                <dd>
                  <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE column_name operator ALL
  (SELECT column_name
  FROM table_name
  WHERE condition);`}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="groupby">
            <h6>GROUP BY Statement</h6>
            <div>
              <p>
                The <code>GROUP BY</code> statement groups rows that have the
                same values into summary rows, like "find the number of
                customers in each country".
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);`}</Highlight>
            </div>
          </article>
          <article id="exists">
            <h6>EXISTS Operator</h6>
            <div>
              <p>
                The <code>EXISTS</code> operator is used to test for the
                existence of any record in a subquery.
              </p>
              <p>
                The <code>EXISTS</code> operator returns TRUE if the subquery
                returns one or more records.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);`}</Highlight>
            </div>
          </article>
          <article id="order-by">
            <h6>ORDER BY</h6>
            <div>
              <p>
                The <code>ORDER BY</code> keyword is used to sort the result-set
                in ascending or descending order.
              </p>
              <p>
                The <code>ORDER BY</code> keyword sorts the records in ascending
                order by default. To sort the records in descending order, use
                the <code>DESC</code> keyword.
              </p>
              <Highlight language="sql">{`SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
