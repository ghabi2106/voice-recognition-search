import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Statements() {
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
                    href="#create-db"
                  >
                    CREATE DATABASE
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#drop-db"
                  >
                    DROP DATABASE
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#create-table"
                  >
                    CREATE TABLE
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#drop-table"
                  >
                    DROP TABLE
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#alter-table"
                  >
                    ALTER TABLE
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#select-into"
                  >
                    SELECT INTO
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#insert-into-sellect"
                  >
                    INSERT INTO SELECT
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
          <h3>TABLE &amp; DATABASE Statements</h3>
          <article id="create-db">
            <h6>CREATE DATABASE Statement</h6>
            <div>
              <p>
                The <code>CREATE DATABASE</code> statement is used to create a
                new SQL database.
              </p>
              <Highlight language="sql">{`CREATE DATABASE databasename;`}</Highlight>
            </div>
          </article>
          <article id="drop-db">
            <h6>DROP DATABASE Statement</h6>
            <div>
              <p>
                The <code>DROP DATABASE</code> statement is used to drop an
                existing SQL database.
              </p>
              <Highlight language="sql">{`DROP DATABASE databasename;`}</Highlight>
            </div>
          </article>
          <article id="create-table">
            <h6>CREATE TABLE Statement</h6>
            <div>
              <p>
                The <code>CREATE TABLE</code> statement is used to create a new
                table in a database.
              </p>
              <Highlight language="sql">{`CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);`}</Highlight>
            </div>
          </article>
          <article id="drop-table">
            <h6>DROP TABLE Statement</h6>
            <div>
              <p>
                The <code>DROP TABLE</code> statement is used to drop an
                existing table in a database.
              </p>
              <Highlight language="sql">{`DROP TABLE table_name;`}</Highlight>
            </div>
          </article>
          <article id="alter-table">
            <h6>ALTER TABLE Statement</h6>
            <div>
              <p>
                The <code>ALTER TABLE</code> statement is used to add, delete,
                or modify columns in an existing table.
              </p>
              <p>
                The <code>ALTER TABLE</code> statement is also used to add and
                drop various constraints on an existing table.
              </p>
              <Highlight language="sql">{`ALTER TABLE table_name
ADD column_name datatype;`}</Highlight>
            </div>
          </article>
          <article id="select-into">
            <h6>SELECT INTO Statement</h6>
            <div>
              <p>
                The <code>SELECT INTO</code> statement copies data from one
                table into a new table.
              </p>
            </div>
            <Highlight language="sql">{`SELECT *
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;`}</Highlight>
            <Highlight language="sql">{`SELECT column1, column2, column3, ...
INTO newtable [IN externaldb]
FROM oldtable
WHERE condition;`}</Highlight>
          </article>
          <article id="insert-into-sellect">
            <h6>INSERT INTO SELECT Statement</h6>
            <div>
              <p>
                The <code>INSERT INTO SELECT</code> statement copies data from
                one table and inserts it into another table.
              </p>
              <p>
                The <code>INSERT INTO SELECT</code> statement requires that the
                data types in source and target tables matches.
              </p>
              <Highlight language="sql">{`INSERT INTO table2
SELECT * FROM table1
WHERE condition;`}</Highlight>
              <Highlight language="sql">{`INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
