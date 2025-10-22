import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function ConnectionPooling() {
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
                    href="#linq"
                  >
                    Linq
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#operators"
                  >
                    Standard Query Operators
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#let"
                  >
                    let
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#into"
                  >
                    into
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deferred-immediate"
                  >
                    Deferred Execution vs Immediate
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
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
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
          <h3>Connection Pooling</h3>
          <article id="definition">
            <h6>🧠 1. Definition</h6>
            <div>
              <h6>🧠 1. Definition</h6>
              <p>
                <strong>Connection Pooling</strong> is a{" "}
                <strong>performance optimization technique</strong> used in .NET
                (and most database-driven applications) to{" "}
                <strong>reuse existing database connections</strong> instead of
                creating a new one each time the application needs to access the
                database.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Concept</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Purpose</strong>
                    </td>
                    <td>Reuse DB connections to improve performance</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Managed By</strong>
                    </td>
                    <td>ADO.NET automatically</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Key Parameters</strong>
                    </td>
                    <td>Pooling, Min/Max Pool Size</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Best Practice</strong>
                    </td>
                    <td>
                      Always use <code>using</code> or <code>Close()</code>{" "}
                      properly
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Pitfall</strong>
                    </td>
                    <td>Connection leaks = pool exhaustion</td>
                  </tr>
                </tbody>
              </table>
              <p>Without connection pooling:</p>
              <ul>
                <li>
                  <p>
                    Every time your app needs data, it opens a new database
                    connection.
                  </p>
                </li>
                <li>
                  <p>
                    Opening/closing connections is expensive (time + resources).
                  </p>
                </li>
              </ul>
              <p>With connection pooling:</p>
              <ul>
                <li>
                  <p>
                    The first time a connection is opened, .NET creates a{" "}
                    <strong>pool (cache)</strong> of database connections.
                  </p>
                </li>
                <li>
                  <p>
                    When you close a connection, it goes{" "}
                    <strong>back to the pool</strong> instead of being
                    destroyed.
                  </p>
                </li>
                <li>
                  <p>
                    When a new request comes, .NET <strong>reuses</strong> one
                    from the pool if available.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="syntax">
            <h6>⚙️ 2. How It Works in .NET</h6>
            <div>
              <h6>⚙️ 2. How It Works in .NET</h6>
              <ul>
                <li>
                  <p>
                    Managed automatically by <strong>ADO.NET</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    Controlled by settings in the{" "}
                    <strong>connection string</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    A pool is created{" "}
                    <strong>per unique connection string</strong>.
                  </p>
                </li>
              </ul>
              <p>
                <strong>Example:</strong>
              </p>
              <Highlight language="csharp">{`string connectionString = "Server=.;Database=MyDB;User Id=myuser;Password=mypassword;Pooling=true;Min Pool Size=5;Max Pool Size=50;";`}</Highlight>
              <p>When your code runs:</p>
              <Highlight language="csharp">{`using (SqlConnection conn = new SqlConnection(connectionString))
{
    conn.Open();
    // use connection
}`}</Highlight>
              <ul>
                <li>
                  <p>The first call creates the pool.</p>
                </li>
                <li>
                  <p>The connection is taken from the pool.</p>
                </li>
                <li>
                  <p>
                    When <code>conn.Close()</code> or <code>Dispose()</code> is
                    called → the connection returns to the pool.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="parameters">
            <h6>⚙️ 3. Important Connection String Parameters</h6>
            <div>
              <h6>⚙️ 3. Important Connection String Parameters</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Parameter</th>
                    <th>Description</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Pooling</strong>
                    </td>
                    <td>Enables/disables connection pooling</td>
                    <td>
                      <code>Pooling=true</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Min Pool Size</strong>
                    </td>
                    <td>Minimum number of connections created at startup</td>
                    <td>
                      <code>Min Pool Size=5</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Max Pool Size</strong>
                    </td>
                    <td>Maximum number of connections allowed in the pool</td>
                    <td>
                      <code>Max Pool Size=100</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Connection Lifetime</strong>
                    </td>
                    <td>
                      Maximum time (seconds) a connection lives before being
                      destroyed
                    </td>
                    <td>
                      <code>Connection Lifetime=300</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Connection Timeout</strong>
                    </td>
                    <td>
                      How long to wait before error if no connection is
                      available
                    </td>
                    <td>
                      <code>Connection Timeout=15</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
