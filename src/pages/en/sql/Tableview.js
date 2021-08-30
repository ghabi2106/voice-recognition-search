import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Tableview() {
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
                    href="#views"
                  >
                    Views
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#table-field"
                  >
                    Table Field
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#entities-relationships"
                  >
                    Entities Relationships
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#table-view"
                  >
                    views vs tables
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
          <h3>Table Views</h3>
          <article id="views">
            <h6>Views</h6>
            <div>
              <p>
                In SQL, a view is a virtual table based on the result-set of an
                SQL statement.
              </p>
              <dl>
                <dt>CREATE VIEW Syntax</dt>
                <dd>
                  <Highlight language="sql">{`CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</Highlight>
                </dd>
                <dt>SQL Updating a View</dt>
                <dd>
                  <Highlight language="sql">{`CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</Highlight>
                </dd>
                <dt>SQL Dropping a View</dt>
                <dd>
                  <Highlight language="sql">{`DROP VIEW view_name;`}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="table-field">
            <h6>What do you mean by table and field in SQL?</h6>
            <div>
              <p>
                An organized data in the form of rows and columns is said to be
                a table. Here rows and columns are referred to as tuples and
                attributes.
              </p>
              <p>
                And the number of columns in a table is referred to as a field.
                In the record, fields represent the characteristics and
                attributes.
              </p>
            </div>
          </article>
          <article id="entities-relationships">
            <h6>What are Entities and Relationships?</h6>
            <div>
              <p>
                <strong>Entities:</strong> Entity can be a person, place, thing,
                or any identifiable object for which data can be stored in a
                database.
              </p>
              <p>
                <strong>For example:</strong> In a company’s database,
                employees, projects, salaries, etc can be referred to as
                entities.
              </p>
              <p>
                <strong>Relationships:</strong> Relationships between entities
                can be referred to as the connection between two tables or
                entities.
              </p>
              <p>
                <strong>For example:</strong> In a college database, the student
                entity and department entities are associated with each other.
              </p>
            </div>
          </article>
          <article id="table-view">
            <h6>views vs tables</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Views</strong>
                  </td>
                  <td>
                    <strong>Tables</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    It is a virtual table that is extracted from a database.
                  </td>
                  <td>
                    A table is structured with a set number of columns and a
                    boundless number of rows.
                  </td>
                </tr>
                <tr>
                  <td>Views do not hold data themselves.</td>
                  <td>
                    A table contains data and stores the data in databases.
                  </td>
                </tr>
                <tr>
                  <td>
                    A view is also utilized to query certain information
                    contained in a few distinct tables.
                  </td>
                  <td>
                    A table holds fundamental client information and the cases
                    of a characterized object.
                  </td>
                </tr>
                <tr>
                  <td>
                    &nbsp;In a view, we will get frequently queried information.
                  </td>
                  <td>
                    In a table, changing the information in the database changes
                    the information that appears in the view
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
