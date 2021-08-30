import React from "react";
import { Link } from "react-router-dom";

export default function Router() {
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
                    React Router
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#need"
                  >
                    Need of Router
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#switch"
                  >
                    switch keyword
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages "
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#conventional"
                  >
                    React Router different vs conventional routing
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
          <h3>React Router</h3>
          <article id="definition">
            <h6>What is React Router?</h6>
            <p>
              React Router is a standard routing library system built on top of
              the React. It is used to create Routing in the React application
              using React Router Package. It helps you to define multiple routes
              in the app. It provides the synchronous URL on the browser with
              data that will be displayed on the web page. It maintains the
              standard structure and behavior of the application and mainly used
              for developing single page web applications.
            </p>
          </article>
          <article id="need">
            <h6>Why do we need a Router in React?</h6>
            <div>
              <p>
                A Router is used to define multiple routes and when a user types
                a specific URL, if this URL matches the path of any ‘route’
                defined inside the router, then the user is redirected to that
                particular route. So basically, we need to add a Router library
                to our app that allows creating multiple routes with each
                leading to us a unique view.
              </p>
              <img src="/img/react/router-react.PNG" alt="router react" />
            </div>
          </article>
          <article id="switch">
            <h6>Why switch keyword used in React Router v4?</h6>
            <p>
              The 'switch' keyword is used to display only a single Route to
              rendered amongst the several defined Routes. The &lt;Switch&gt;
              component is used to render components only when the path will be
              matched. Otherwise, it returns to the not found component.
            </p>
          </article>
          <article id="advantages">
            <h6>List down the advantages of React Router.</h6>
            <ul>
              <li>
                In this, it is not necessary to set the browser history
                manually.
              </li>
              <li>
                Link uses to navigate the internal links in the application. It
                is similar to the anchor tag.
              </li>
              <li>It uses Switch feature for rendering.</li>
            </ul>
          </article>
          <article id="conventional">
            <h6>How is React Router different from conventional routing?</h6>
            <table class="table table-bordered">
              <caption>
                <h4>Conventional Routing vs React Routing</h4>
              </caption>
              <tbody>
                <tr>
                  <td>
                    <strong>Topic</strong>
                  </td>
                  <td>
                    <strong>Conventional Routing</strong>
                  </td>
                  <td>
                    <strong>React Routing</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>PAGES INVOLVED</strong>
                  </td>
                  <td>Each view corresponds to a new file</td>
                  <td>Only single HTML page is involved</td>
                </tr>
                <tr>
                  <td>
                    <strong>URL CHANGES</strong>
                  </td>
                  <td>
                    A HTTP request is sent to a server and corresponding HTML
                    page is received
                  </td>
                  <td>Only the History attribute is changed</td>
                </tr>
                <tr>
                  <td>
                    <strong>FEEL</strong>
                  </td>
                  <td>
                    User actually navigates across different pages for each view
                  </td>
                  <td>
                    User is duped thinking he is navigating across different
                    pages
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
