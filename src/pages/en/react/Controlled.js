import React from "react";
import { Link } from "react-router-dom";

export default function Controlled() {
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
                    href="#controlled"
                  >
                    controlled vs uncontrolled
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
          <h3>Difference between controlled and uncontrolled components?</h3>
          <article id="controlled">
            <h6>
              what is the difference between controlled and uncontrolled
              components?
            </h6>
            <table>
              <caption>
                <h4>Controlled vs Uncontrolled Components</h4>
              </caption>
              <tbody>
                <tr>
                  <th>
                    <strong>Controlled Components</strong>
                  </th>
                  <th>
                    <strong>Uncontrolled Components</strong>
                  </th>
                </tr>
                <tr>
                  <td>1. They do not maintain their own state</td>
                  <td>1. They maintain their own state</td>
                </tr>
                <tr>
                  <td>2. Data is controlled by the parent component</td>
                  <td>2. Data is controlled by the DOM</td>
                </tr>
                <tr>
                  <td>
                    3. They take in the current values through props and then
                    notify the changes via callbacks
                  </td>
                  <td>3. Refs are used to get their current values</td>
                </tr>
                <tr>
                  <td>4. It allows validation control.</td>
                  <td>4. It does not allow validation control.</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
