import React from "react";
import { Link } from "react-router-dom";

export default function Dotnet() {
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
                    href="#crossplatforme"
                  >
                    cross platforme
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#microservices"
                  >
                    microservices
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#containers"
                  >
                    containers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#performance"
                  >
                    performance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#versions"
                  >
                    versions
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
          <h3>Difference Between .NET and .NET Core</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>Use .NET Core for your server application when:</p>
              <ul>
                <li>You have cross-platform needs.</li>
                <li>You're targeting microservices.</li>
                <li>You're using Docker containers.</li>
                <li>You need high-performance and scalable systems.</li>
                <li>You need side-by-side .NET versions per application.</li>
              </ul>
            </div>
          </article>
          <article id="crossplatforme">
            <h6>Cross-platform needs</h6>
            <p>
              If your application (web/service) needs to run on multiple
              platforms (Windows, Linux, and macOS), use .NET Core.
            </p>
          </article>
          <article id="microservices">
            <h6>Microservices architecture</h6>
            <p>
              All these platforms; Azure Service Fabric, Azure App Service and
              Docker support .NET Core and make them ideal for hosting your
              microservices.
            </p>
          </article>
          <article id="containers">
            <h6>Containers</h6>
            <p>
              When creating and deploying a container, the size of its image is
              much smaller with .NET Core than with .NET Framework.
            </p>
          </article>
          <article id="performance">
            <h6>High-performance and scalable systems</h6>
            <p>
              Performance and scalability are especially relevant for
              microservices architectures, where hundreds of microservices may
              be running. With ASP.NET Core, systems run with a much lower
              number of servers/Virtual Machines (VM). The reduced servers/VMs
              save costs in infrastructure and hosting.
            </p>
          </article>
          <article id="versions">
            <h6>Side by side .NET versions per application level</h6>
            <div>
              <p>
                To install applications with dependencies on different versions
                of .NET, we recommend .NET Core. This implementation of .NET
                supports side-by-side installation of different versions of the
                .NET runtime on the same machine.
              </p>
              <p>
                Side-by-side installation isn't possible with .NET Framework.
                It's a Windows component, and only one version can exist on a
                machine at a time. Each version of .NET Framework replaces the
                previous version. If you install a new app that targets a later
                version of .NET Framework, you might break existing apps that
                run on the machine, because the previous version was replaced.
              </p>
            </div>
          </article>
          <article id="dotnet">
            <h6>.NET Framework technologies not available for .NET Core</h6>
            <ul>
              <li>
                <p>ASP.NET Web Forms applications.</p>
              </li>
              <li>
                <p>
                  WCF server implementation is currently only available in .NET
                  Framework.
                </p>
              </li>
              <li>
                <p>Windows Workflow Foundation (WF).</p>
              </li>
              <li>
                <p>
                  Language support: Visual Basic and F# are currently supported
                  in .NET Core, but not for all project types. For a list of
                  supported project templates.
                </p>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
