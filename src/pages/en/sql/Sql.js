import React from "react";
import { Link } from "react-router-dom";

export default function Sql() {
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
                    href="#sql"
                  >
                    SQL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#can-do"
                  >
                    Can do
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#rdbms"
                  >
                    RDBMS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tcp-ip"
                  >
                    TCP/IP
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
          <h3>SQL</h3>
          <article id="sql">
            <h6>What is SQL?</h6>
            <p>
              SQL stands for "Structured Query Language" is a standard language
              for accessing and manipulating databases.
            </p>
          </article>
          <article id="can-do">
            <h6>What Can SQL do?</h6>
            <ul>
              <li> SQL can execute queries against a database</li>
              <li>SQL can retrieve data from a database</li>
              <li>SQL can insert records in a database</li>
              <li>SQL can update records in a database</li>
              <li>SQL can delete records from a database</li>
              <li>SQL can create new databases</li>
              <li>SQL can create new tables in a database</li>
              <li>SQL can create stored procedures in a database</li>
              <li>SQL can create views in a database</li>
              <li>SQL can set permissions on tables, procedures, and views</li>
            </ul>
          </article>
          <article id="rdbms">
            <h6>RDBMS</h6>
            <p>
              RDBMS or Relational Database Management Systems are database
              management systems that maintain data in the form of tables. We
              can create relationships between the tables. An RDBMS can
              recombine the data items from different files, providing powerful
              tools for data usage.
            </p>
          </article>
          <article id="tcp-ip">
            <h6>Which TCP/IP port does SQL Server run on?</h6>
            <p>By default SQL Server runs on port 1433.</p>
          </article>
          <article id="sql-plsql">
            <h6>SQL vs PL/SQL</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>SQL</strong>
                  </td>
                  <td>
                    <strong>PL/SQL</strong>
                  </td>
                </tr>
                <tr>
                  <td>SQL is a database structured query language.</td>
                  <td>
                    It is a programming language for a database that uses SQL.
                  </td>
                </tr>
                <tr>
                  <td>
                    SQL is an individual query that is used to execute DML and
                    DDL commands.
                  </td>
                  <td>
                    PL/SQL is a block of codes used to write the entire
                    procedure or a function.
                  </td>
                </tr>
                <tr>
                  <td>SQL is a declarative and data-oriented language.</td>
                  <td>
                    PL/SQL is a procedural and application-oriented language.
                  </td>
                </tr>
                <tr>
                  <td>It is mainly used for the manipulation of data.</td>
                  <td>It is used for creating an application.</td>
                </tr>
                <tr>
                  <td>It provides interaction with the database server.</td>
                  <td>
                    It does not provide interaction with the database server.
                  </td>
                </tr>
                <tr>
                  <td>It cannot contain PL/SQL code in it.</td>
                  <td>
                    It can contain SQL in it because it is an extension of SQL.
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
