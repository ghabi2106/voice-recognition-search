import React from "react";
import { Link } from "react-router-dom";

export default function Controller() {
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
                    href="#action-method"
                  >
                    Action method
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#action-result"
                  >
                    Action Result
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#action-selectors"
                  >
                    Action Selectors
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
                    to="/mvc"
                  >
                    MVC
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >
                    Action Method, Result, Selectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >Controller</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                  HTTPS, HTTP and SSL</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                  HTTP Request Methods</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >JWT</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >Services, Microservices, Web API, Web API vs WCF</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="dotnet-core">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Action selectors</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <p>
              The controller handles the user request. Typically, the user uses
              the view and raises an HTTP request, which will be handled by the
              controller. The controller processes the request and returns the
              appropriate view as a response.
            </p>
          </article>
          <article id="action-method">
            <h6>Action method</h6>
            <div>
              <p>
                All the public methods of the Controller class are called Action
                methods.
              </p>
              <img src="/img/dotnet/action-method.png" alt="action method" />
              <ul>
                <li>
                  Action method must be public. It cannot be private or
                  protected.
                </li>
                <li>Action method cannot be overloaded.</li>
                <li>Action method cannot be a static method.</li>
              </ul>
            </div>
          </article>
          <article id="action-result">
            <h6>Action Result</h6>
            <div>
              <p>
                ActionResult is a base class of all the result type which
                returns from Action method.
              </p>
              <p>
                ActionResult represent different types of responses, such as
                HTML, file, string, JSON, javascript, etc.
              </p>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="w-50">Result Class</th>
                    <th class="w-50">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ViewResult</td>
                    <td>Represents HTML and markup.</td>
                  </tr>
                  <tr>
                    <td>EmptyResult</td>
                    <td>Represents No response.</td>
                  </tr>
                  <tr>
                    <td>ContentResult</td>
                    <td>Represents string literal.</td>
                  </tr>
                  <tr>
                    <td>FileContentResult/ FilePathResult/ FileStreamResult</td>
                    <td>Represents the content of a file.</td>
                  </tr>
                  <tr>
                    <td>JavaScriptResult</td>
                    <td>Represent a JavaScript script.</td>
                  </tr>
                  <tr>
                    <td>JsonResult</td>
                    <td>Represent JSON that can be used in AJAX.</td>
                  </tr>
                  <tr>
                    <td>RedirectResult</td>
                    <td>Represents a redirection to a new URL.</td>
                  </tr>
                  <tr>
                    <td>RedirectToRouteResult</td>
                    <td>
                      Represent another action of same or other controller.
                    </td>
                  </tr>
                  <tr>
                    <td>PartialViewResult</td>
                    <td>Returns HTML from Partial view.</td>
                  </tr>
                  <tr>
                    <td>HttpUnauthorizedResult</td>
                    <td>Returns HTTP 403 status.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="action-selectors">
            <h6>Action Selectors</h6>
            <div>
              <p>
                Action selector is the attribute that can be applied to the
                action methods.
              </p>
              <ul>
                <li>
                  <code>ActionName</code> : The ActionName attribute allows us
                  to specify a different action name than the method name
                </li>
                <li>
                  <code>NonAction</code> : Use the NonAction attribute when you
                  want public method in a controller but do not want to treat it
                  as an action method.
                </li>
                <li>
                  <code>ActionVerbs</code> : The ActionVerbs selector is to
                  handle different type of Http requests.
                </li>
              </ul>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Http method</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GET</td>
                    <td> To retrieve the information from the server.</td>
                  </tr>
                  <tr>
                    <td>POST</td>
                    <td>To create a new resource.</td>
                  </tr>
                  <tr>
                    <td>PUT</td>
                    <td>To update an existing resource.</td>
                  </tr>
                  <tr>
                    <td>HEAD</td>
                    <td>
                      Identical to GET except that server do not return the
                      message body.
                    </td>
                  </tr>
                  <tr>
                    <td>OPTIONS</td>
                    <td>
                      It represents a request for information about the
                      communication options supported by the web server.
                    </td>
                  </tr>
                  <tr>
                    <td>DELETE</td>
                    <td>To delete an existing resource.</td>
                  </tr>
                  <tr>
                    <td>PATCH</td>
                    <td>To full or partial update the resource.</td>
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
