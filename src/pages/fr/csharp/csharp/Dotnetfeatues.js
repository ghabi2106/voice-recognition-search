import React from "react";
import { Link } from "react-router-dom";

export default function Dotnetfeatues() {
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
                  href="#dotnet7"
                >
                  Dotnet7
                </a>
              </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dotnet6"
                  >
                    Dotnet6
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dotnet5"
                  >
                    Dotnet5
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
                    to="/hostedservice"
                  >
                    IHostedService, BackgroundService
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp9"
                  >
                    New features in C# 10
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
          <h3>What is new in Dotnet</h3>
          <article id="dotnet7">
            <h6>New Features in .Net 7</h6>
            <div>
              <ul>
<li>Native AOT</li>
<li>Regex</li>
<li>hot reload</li>
<li>Default GC regions</li>
<li>ASP.NET Core startup time improvements</li>
<li>Observability</li>
<li>System.Text.Json</li>
<li>System.Reflection performance improvements when invoking members</li>
<li>Generic Math</li>
<li>CodeGen</li>
</ul>
            </div>
          </article>
          <article id="dotnet6">
            <h6>New Features in .Net 6</h6>
            <div>
              <p>Better performance: .NET 6 is the fastest full stack web framework, which lowers compute costs if you're running in the cloud.</p>
<p>provide hot reload, new git tooling, intelligent code editing, robust diagnostics and testing tools, and better team collaboration.</p>
<ul>
  <li>Hot reload</li>
  <li>Reflection APIs</li>
  <li>HTTP/3</li>
  <li>System.Text.Json APIs</li>
  <li>Arm64 support</li>
  <li>FileStream</li>
</ul>
            </div>
          </article>
          <article id="dotnet5">
            <h6>New Features in .Net 5</h6>
            <div>
              <ul>
                <li>The runtime libraries are 80% annotated for nullable reference types</li>
                <li>Tooling support for dump debugging</li>
                <li>C# updates</li>
                <li>
                  <p>Performance improvements:</p>
                  <ul>
                  <li>Garbage Collection (GC)</li>
                <li>System.Text.Json</li>
                <li>System.Text.RegularExpressions</li>
                <li>Async ValueTask pooling</li>
                <li>Container size optimizations</li>
                </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
