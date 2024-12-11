import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Binding() {
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
                    href="#binding"
                  >
                    Binding
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parameters"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/operators"
                  >
                    Operators
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Late-bound and early-bound</h3>
          <article id="binding">
            <h6>Binding</h6>
            <div>
              <p>
                <strong>Binding</strong> in programming refers to the process of
                associating function calls, methods, or variables with their
                definitions or data at different stages of code execution.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Feature</strong>
                    </th>
                    <th>
                      <strong>Early Binding (Static Binding)</strong>
                    </th>
                    <th>
                      <strong>Late Binding (Dynamic Binding)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Time of Binding</strong>
                    </td>
                    <td>Compile-time</td>
                    <td>Runtime</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Performance</strong>
                    </td>
                    <td>Faster, as binding happens during compilation.</td>
                    <td>
                      Slower, as binding decisions are made during execution.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Flexibility</strong>
                    </td>
                    <td>
                      Less flexible; requires types and methods to be known.
                    </td>
                    <td>More flexible; allows polymorphism and reflection.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Example</strong>
                    </td>
                    <td>Method overloading, direct function calls.</td>
                    <td>
                      Method overriding, <code>dynamic</code> keyword in C#.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Usage</strong>
                    </td>
                    <td>
                      Suitable for operations where behavior is known early.
                    </td>
                    <td>Suitable for dynamic behavior and plugins.</td>
                  </tr>
                </tbody>
              </table>
              <h6>Example:</h6>
              <Highlight language="csharp">
                {`// Early Binding
string message = "Hello";
Console.WriteLine(message.ToUpper());

// Late Binding
dynamic lateMessage = "Hello";
Console.WriteLine(lateMessage.ToUpper());`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
