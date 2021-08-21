import React from "react";
import { Link } from "react-router-dom";

export default function Stateless() {
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
                    href="#stateless"
                  >
                    Stateful vs Stateless
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
          <h3>Stateful vs Stateless</h3>
          <article id="stateless">
            <h6>Differentiate between stateful and stateless components.</h6>
            <table>
              <caption>
                <h4>Stateful vs Stateless</h4>
              </caption>
              <tbody>
                <tr>
                  <th>
                    <strong>Stateful Component</strong>
                  </th>
                  <th>
                    <strong>Stateless Component</strong>
                  </th>
                </tr>
                <tr>
                  <td>
                    1. Stores info about component’s state change in memory
                  </td>
                  <td>1. Calculates the internal state of the components</td>
                </tr>
                <tr>
                  <td>2. Have authority to change state</td>
                  <td>2. Do not have the authority to change state</td>
                </tr>
                <tr>
                  <td>
                    3. Contains the knowledge of past, current and possible
                    future changes in state
                  </td>
                  <td>
                    3. Contains no knowledge of past, current and possible
                    future state changes
                  </td>
                </tr>
                <tr>
                  <td>
                    4. Stateless components notify them about the requirement of
                    the state change, then they send down the props to them.
                  </td>
                  <td>
                    4. They receive the props from the Stateful components and
                    treat them as callback functions.
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
