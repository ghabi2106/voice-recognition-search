import React from "react";
import { Link } from "react-router-dom";

export default function Reactvsangular() {
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
                    href="#angular"
                  >
                    React vs Angular
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
          <h3>React vs Angula</h3>
          <article id="">
            <h6>How is React different from Angular?</h6>
            <table class="table table-bordered">
              <caption>
                <h4>React vs Angular</h4>
              </caption>
              <tbody>
                <tr>
                  <th>
                    <strong>TOPIC</strong>
                  </th>
                  <th>
                    <strong>REACT</strong>
                  </th>
                  <th>
                    <strong>ANGULAR</strong>
                  </th>
                </tr>
                <tr>
                  <td>1. ARCHITECTURE</td>
                  <td>Only the View of MVC</td>
                  <td>Complete MVC</td>
                </tr>
                <tr>
                  <td>2. RENDERING</td>
                  <td>Server-side rendering</td>
                  <td>Client-side rendering</td>
                </tr>
                <tr>
                  <td>3. DOM</td>
                  <td>Uses virtual DOM</td>
                  <td>Uses real DOM</td>
                </tr>
                <tr>
                  <td>4. DATA BINDING</td>
                  <td>One-way data binding</td>
                  <td>Two-way data binding</td>
                </tr>
                <tr>
                  <td>5. DEBUGGING</td>
                  <td>Compile time debugging</td>
                  <td>Runtime debugging</td>
                </tr>
                <tr>
                  <td>6. AUTHOR</td>
                  <td>Facebook</td>
                  <td>Google</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
