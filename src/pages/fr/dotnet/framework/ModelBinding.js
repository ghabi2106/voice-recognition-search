import React from "react";
import { Link } from "react-router-dom";

export default function ModelBinding() {
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
                    href="#definition"
                  >
                    🧠 1. What is Model Binding?
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
          <h3>Model Binding</h3>
          <article id="definition">
            <h6>🧠 1. What is Model Binding?</h6>
            <div>
              <h6>🧠 1. What is Model Binding?</h6>
              <table className="w-fit min-w-(--thread-content-width)">
                <thead>
                  <tr>
                    <th>Concept</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Definition</strong>
                    </td>
                    <td>Automatically maps HTTP request data to C# objects</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Used In</strong>
                    </td>
                    <td>Controllers, APIs, Razor Pages</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Sources</strong>
                    </td>
                    <td>Route, Query, Form, Body, Headers</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Attributes</strong>
                    </td>
                    <td>
                      <code>[FromBody]</code>, <code>[FromQuery]</code>,{" "}
                      <code>[FromRoute]</code>, <code>[FromForm]</code>,{" "}
                      <code>[FromHeader]</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Validation</strong>
                    </td>
                    <td>
                      Integrated with <code>ModelState</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Benefit</strong>
                    </td>
                    <td>Cleaner, readable, and maintainable code</td>
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
