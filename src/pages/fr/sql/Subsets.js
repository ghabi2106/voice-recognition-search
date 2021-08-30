import React from "react";
import { Link } from "react-router-dom";

export default function Subsets() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ddl"
                  >
                    DDL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dml"
                  >
                    DML
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dcl"
                  >
                    DCL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tcl"
                  >
                    TCL
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
          <h3>DDL &amp; DML &amp; DCL &amp; VTCL</h3>
          <article id="introduction">
            <h6>What are the subsets of SQL?</h6>
            <div>
              <ol>
                <li>DDL(Data Definition Language)</li>
                <li>DML(Data Manipulation Language)</li>
                <li>DCL(Data Control Language)</li>
                <li>TCL(Transaction Control Language)</li>
              </ol>
              <img src="img/sql/SQL-Commands-1-700x470.png" alt="SQL-Commands" />
            </div>
          </article>
          <article id="ddl">
            <h6>DDL</h6>
            <div>
              <p>
                DDL is short name of Data Definition Language, which deals with
                database schemas and descriptions, of how the data should reside
                in the database.
              </p>
              <ul>
                <li>
                  CREATE - to create a database and its objects like (table,
                  index, views, store procedure, function, and triggers)
                </li>
                <li>ALTER - alters the structure of the existing database</li>
                <li>DROP - delete objects from the database</li>
                <li>
                  TRUNCATE - remove all records from a table, including all
                  spaces allocated for the records are removed
                </li>
                <li>COMMENT - add comments to the data dictionary</li>
                <li>RENAME - rename an object</li>
              </ul>
            </div>
          </article>
          <article id="dml">
            <h6>DML</h6>
            <div>
              <p>
                DML is short name of Data Manipulation Language which deals with
                data manipulation and includes most common SQL statements such
                SELECT, INSERT, UPDATE, DELETE, etc., and it is used to store,
                modify, retrieve, delete and update data in a database.
              </p>
              <ul>
                <li>SELECT - retrieve data from a database</li>
                <li>INSERT - insert data into a table</li>
                <li>UPDATE - updates existing data within a table</li>
                <li>DELETE - Delete all records from a database table</li>
                <li>MERGE - UPSERT operation (insert or update)</li>
                <li>CALL - call a PL/SQL or Java subprogram</li>
                <li>EXPLAIN PLAN - interpretation of the data access path</li>
                <li>LOCK TABLE - concurrency Control</li>
              </ul>
            </div>
          </article>
          <article id="dcl">
            <h6>DCL</h6>
            <div>
              <p>
                DCL is short name of Data Control Language which includes
                commands such as GRANT and mostly concerned with rights,
                permissions and other controls of the database system.
              </p>
              <ul>
                <li>GRANT - allow users access privileges to the database</li>
                <li>
                  REVOKE - withdraw users access privileges given by using the
                  GRANT command
                </li>
              </ul>
            </div>
          </article>
          <article id="tcl">
            <h6>TCL</h6>
            <div>
              <p>
                TCL is short name of Transaction Control Language which deals
                with a transaction within a database.
              </p>
              <ul>
                <li>COMMIT - commits a Transaction</li>
                <li>
                  ROLLBACK - rollback a transaction in case of any error occurs
                </li>
                <li>
                  SAVEPOINT - to rollback the transaction making points within
                  groups
                </li>
                <li>
                  SET TRANSACTION - specify characteristics of the transaction
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
