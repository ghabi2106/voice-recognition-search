import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Middleware() {
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
                    Middleware
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    Example
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#custom-middleware"
                  >
                    Custom middleware
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
          <h3>Common Runtime Language</h3>
          <article id="introduction">
            <h6>Middleware</h6>
            <div>
              <p>
                Middleware is software that's assembled into an app pipeline to
                handle requests and responses.
              </p>
              <p>
                A middleware is nothing but a component (class) which is
                executed on every request in ASP.NET Core application. In the
                classic ASP.NET, HttpHandlers and HttpModules were part of
                request pipeline. Middleware is similar to HttpHandlers and
                HttpModules where both needs to be configured and executed in
                each request.
              </p>
              <Highlight language="csharp">
                {`public void Configure(IApplicationBuilder app, IHostingEnvironment env)
{
    app.UseMyMiddleware();

    app.Run(async (context) =>
    {
        await context.Response.WriteAsync("Hello World!");
    });
}`}
              </Highlight>
            </div>
          </article>
          <article id="example">
            <h6>Example</h6>
            <div>
              <p>
                There are many middleware plug-ins available which can be used
                in our application.
              </p>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Middleware</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Authentication</td>
                    <td>Adds authentication support.</td>
                  </tr>
                  <tr>
                    <td>CORS</td>
                    <td>Configures Cross-Origin Resource Sharing.</td>
                  </tr>
                  <tr>
                    <td>Routing</td>
                    <td>Adds routing capabilities for MVC or web form</td>
                  </tr>
                  <tr>
                    <td>Session</td>
                    <td>Adds support for user session.</td>
                  </tr>
                  <tr>
                    <td>StaticFiles</td>
                    <td>
                      Adds support for serving static files and directory
                      browsing.
                    </td>
                  </tr>
                  <tr>
                    <td>Diagnostics</td>
                    <td>
                      Adds support for reporting and handling exceptions and
                      errors.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="custom-middleware">
            <h6>Custom Middleware</h6>
            <Highlight language="csharp">
              {`public class MyMiddleware
{
    private readonly RequestDelegate _next;
    private readonly ILogger _logger;

    public MyMiddleware(RequestDelegate next, ILoggerFactory logFactory)
    {
        _next = next;

        _logger = logFactory.CreateLogger("MyMiddleware");
    }

    public async Task Invoke(HttpContext httpContext)
    {
        _logger.LogInformation("MyMiddleware executing..");

        await _next(httpContext); // calling next middleware

    }
}

// Extension method used to add the middleware to the HTTP request pipeline.
public static class MyMiddlewareExtensions
{
    public static IApplicationBuilder UseMyMiddleware(this IApplicationBuilder builder)
    {
        return builder.UseMiddleware<MyMiddleware>();
    }
} `}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
