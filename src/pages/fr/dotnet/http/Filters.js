import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Filters() {
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
                    href="#filters"
                  >
                    Filters
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#syntax"
                  >
                    Syntax
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
                    to="/caching"
                  >
                    Caching
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
                    to="/controllervuedata"
                  >
                    ViewBag, ViewData and TempData
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                    HTTPS, HTTP and SSL
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                    HTTP Request Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >
                    JWT
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >
                    Services, Microservices, Web API, Web API vs WCF
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
          <h3>Filters</h3>
          <article id="filters">
            <h6>Filters</h6>
            <div>
              <h6>
                🧩 <strong>Filters → Request/Response Interceptors</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Purpose:</strong> Run logic{" "}
                    <strong>before or after</strong> a controller action
                    executes.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Scope:</strong> Entire HTTP request/response cycle.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Common Use Cases:</strong>
                  </p>
                  <ul>
                    <li>
                      <p>Logging execution time</p>
                    </li>
                    <li>
                      <p>Validating input</p>
                    </li>
                    <li>
                      <p>Modifying the response</p>
                    </li>
                    <li>
                      <p>Performing authorization or caching</p>
                    </li>
                  </ul>
                </li>
              </ul>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Filter Type</th>
                    <th>Interface</th>
                    <th>Purpose</th>
                    <th>Runs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Authorization Filters</strong>
                    </td>
                    <td>
                      <code>IAuthorizationFilter</code>,{" "}
                      <code>IAsyncAuthorizationFilter</code>
                    </td>
                    <td>Handle security and access control</td>
                    <td>Before anything else</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Resource Filters</strong>
                    </td>
                    <td>
                      <code>IResourceFilter</code>,{" "}
                      <code>IAsyncResourceFilter</code>
                    </td>
                    <td>Control caching, resource initialization</td>
                    <td>Before and after model binding</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Action Filters</strong>
                    </td>
                    <td>
                      <code>IActionFilter</code>,{" "}
                      <code>IAsyncActionFilter</code>
                    </td>
                    <td>
                      Run code before and after a controller action executes
                    </td>
                    <td>Around action methods</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Exception Filters</strong>
                    </td>
                    <td>
                      <code>IExceptionFilter</code>,{" "}
                      <code>IAsyncExceptionFilter</code>
                    </td>
                    <td>Handle unhandled exceptions globally</td>
                    <td>When an exception occurs</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Result Filters</strong>
                    </td>
                    <td>
                      <code>IResultFilter</code>,{" "}
                      <code>IAsyncResultFilter</code>
                    </td>
                    <td>
                      Modify or process the result before sending it to the
                      client
                    </td>
                    <td>Around the result execution</td>
                  </tr>
                </tbody>
              </table>
              <img src="/img/dotnet/filters.png" alt="Filters" height="500px" />
            </div>
          </article>
          <article id="syntax">
            <h6>Syntax</h6>
            <div>
              <Highlight language="csharp">{`using Microsoft.AspNetCore.Mvc.Filters;

public class MyActionFilter : IActionFilter // or IAsyncActionFilter, ActionFilterAttribute,
{
    // Runs before the controller action executes
    public void OnActionExecuting(ActionExecutingContext context)
    {
        // Pre-processing logic (e.g., logging, validation)
    }

    // Runs after the controller action executes
    public void OnActionExecuted(ActionExecutedContext context)
    {
        // Post-processing logic (e.g., logging, modifying result)
    }
}
`}</Highlight>
              <Highlight language="csharp">{`[MyActionFilter]
public IActionResult GetData()
{
    return Ok("Data retrieved");
}
`}</Highlight>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Filter Type</th>
                    <th>Interface</th>
                    <th>Example Methods</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Authorization</strong>
                    </td>
                    <td>
                      <code>IAuthorizationFilter</code>
                    </td>
                    <td>
                      <code>
                        OnAuthorization(AuthorizationFilterContext context)
                      </code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Resource</strong>
                    </td>
                    <td>
                      <code>IResourceFilter</code>
                    </td>
                    <td>
                      <code>OnResourceExecuting</code>,{" "}
                      <code>OnResourceExecuted</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Action</strong>
                    </td>
                    <td>
                      <code>IActionFilter</code>
                    </td>
                    <td>
                      <code>OnActionExecuting</code>,{" "}
                      <code>OnActionExecuted</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Exception</strong>
                    </td>
                    <td>
                      <code>IExceptionFilter</code>
                    </td>
                    <td>
                      <code>OnException(ExceptionContext context)</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Result</strong>
                    </td>
                    <td>
                      <code>IResultFilter</code>
                    </td>
                    <td>
                      <code>OnResultExecuting</code>,{" "}
                      <code>OnResultExecuted</code>
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
