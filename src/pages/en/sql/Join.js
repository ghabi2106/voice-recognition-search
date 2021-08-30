import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Join() {
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
                    href="#join"
                  >Join</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#inner-join"
                  >INNER JOIN</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#left-join"
                  >LEFT JOIN</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#right-join"
                  >RIGHT JOIN</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#full-outer-join"
                  >FULL OUTER JOIN</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#self-join"
                  >Self Join</a>
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
          <h3>SQL JOIN</h3>
          <article id="join">
            <h6>SQL JOIN</h6>
            <div>
              <p>
                A <code>JOIN</code> clause is used to combine rows from two or
                more tables, based on a related column between them.
              </p>
              <p>Here are the different types of the JOINs in SQL:</p>
              <ul>
                <li>
                  <code>(INNER) JOIN</code>: Returns records that have matching
                  values in both tables
                </li>
                <li>
                  <code>LEFT (OUTER) JOIN</code>: Returns all records from the
                  left table, and the matched records from the right table
                </li>
                <li>
                  <code>RIGHT (OUTER) JOIN</code>: Returns all records from the
                  right table, and the matched records from the left table
                </li>
                <li>
                  <code>FULL (OUTER) JOIN</code>: Returns all records when there
                  is a match in either left or right table
                </li>
              </ul>
              <p>
                <img
                  alt="SQL INNER JOIN"
                  height="145"
                  src="img/sql/img_innerjoin.gif"
                  width="200"
                />
                <img
                  alt="SQL LEFT JOIN"
                  height="145"
                  src="img/sql/img_leftjoin.gif"
                  width="200"
                />
                <img
                  alt="SQL RIGHT JOIN"
                  height="145"
                  src="img/sql/img_rightjoin.gif"
                  width="200"
                />
                <img
                  alt="SQL FULL OUTER JOIN"
                  height="145"
                  src="img/sql/img_fulljoin.gif"
                  width="200"
                />
              </p>
            </div>
          </article>
          <article id="inner-join">
            <h6>INNER JOIN</h6>
            <div>
              <p>
                The <code>INNER JOIN</code> keyword selects records that have
                matching values in both tables.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;`}</Highlight>
              <img
                alt="SQL INNER JOIN"
                height="145"
                src="img/sql/img_innerjoin.gif"
                width="200"
              />
            </div>
          </article>
          <article id="left-join">
            <h6>LEFT JOIN</h6>
            <div>
              <p>
                The <code>LEFT JOIN</code> keyword returns all records from the
                left table (table1), and the matching records from the right
                table (table2). The result is 0 records from the right side, if
                there is no match.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;`}</Highlight>
              <img
                alt="SQL LEFT JOIN"
                height="145"
                src="img/sql/img_leftjoin.gif"
                width="200"
              ></img>
            </div>
          </article>
          <article id="right-join">
            <h6>RIGHT JOIN</h6>
            <div>
            <p>The <code>RIGHT JOIN</code> keyword returns all records from the right table (table2), and the 
matching records from the left table (table1). The result is 0 records from the left side, 
if there is no match.</p>
<Highlight language="sql">{`SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;`}</Highlight>
<img alt="SQL RIGHT JOIN" height="145" src="img/sql/img_rightjoin.gif" width="200"></img>
            </div>
          </article>
          <article id="full-outer-join">
            <h6>FULL OUTER JOIN</h6>
            <div>
            <p>The <code>FULL OUTER JOIN</code> keyword returns all records when there is a match in 
left (table1) or right (table2) table records.</p>
<Highlight language="sql">{`SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;`}</Highlight>
            </div>
          </article>
          <article id="self-join">
            <h6>Self Join</h6>
            <div>
            <p>A self join is a regular join, but the table is joined with itself.</p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
