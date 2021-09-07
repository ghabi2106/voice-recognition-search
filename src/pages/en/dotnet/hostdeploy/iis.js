import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Iis() {
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
                    href="#iis"
                  >
                    IIS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#aspnet-core-module"
                  >
                    ASP.NET Core Module
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-of-process"
                  >
                    In-process hosting with IIS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#out-of-process"
                  >
                    Out-of-process hosting with IIS
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>Internet Information Services (IIS)</h3>
          <article id="iis">
            <h6>IIS</h6>
            <div>
              <p>
                Internet Information Services (IIS) is a flexible, secure and
                manageable Web Server for hosting web apps, including ASP.NET
                Core.
              </p>
              <p>
                When building a host in <code>CreateHostBuilder</code> (
                <code>Program.cs</code>), call reateDefaultBuilder to enable IIS
                integration:
              </p>
              <Highlight language="csharp">
                {`public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        ...`}
              </Highlight>
            </div>
          </article>
          <article id="aspnet-core-module">
            <h6>ASP.NET Core Module</h6>
            <div>
              <p>
                The ASP.NET Core Module is a native IIS module that plugs into
                the IIS pipeline, allowing ASP.NET Core applications to work
                with IIS. Run ASP.NET Core apps with IIS by either:
              </p>
              <ul>
                <li>
                  Hosting an ASP.NET Core app inside of the IIS worker process (
                  <code>w3wp.exe</code>), called the in-process hosting model.
                </li>
                <li>
                  Forwarding web requests to a backend ASP.NET Core app running
                  the Kestrel server, called the out-of-process hosting model.
                </li>
              </ul>
            </div>
          </article>
          <article id="in-of-process">
            <h6>In-process hosting with IIS</h6>
            <div>
              <p>
                In-process hosting runs an ASP.NET Core app in the same process
                as its IIS worker process. In-process hosting provides improved
                performance over out-of-process hosting because requests aren't
                proxied over the loopback adapter, a network interface that
                returns outgoing network traffic back to the same machine.
              </p>
              <img src="img/dotnet/ancm-inprocess.png" alt="ancm-inprocess" />
              <p>
                To explicitly configure an app for in-process hosting, set the
                value of the <code>&lt;AspNetCoreHostingModel&gt;</code>{" "}
                property to <code>InProcess</code> in the project file (
                <code>.csproj</code>):
              </p>
              <Highlight language="xml">
                {`<PropertyGroup>
  <AspNetCoreHostingModel>InProcess</AspNetCoreHostingModel>
</PropertyGroup>`}
              </Highlight>
              <p>The general flow of a request is as follows:</p>
              <ol>
                <li>
                  A request arrives from the web to the kernel-mode HTTP.sys
                  driver.
                </li>
                <li>
                  The driver routes the native request to IIS on the website's
                  configured port, usually 80 (HTTP) or 443 (HTTPS).
                </li>
                <li>
                  The ASP.NET Core Module receives the native request and passes
                  it to IIS HTTP Server (<code>IISHttpServer</code>). IIS HTTP
                  Server is an in-process server implementation for IIS that
                  converts the request from native to managed.
                </li>
              </ol>
              <p>After the IIS HTTP Server processes the request:</p>
              <ol>
                <li>
                  The request is sent to the ASP.NET Core middleware pipeline.
                </li>
                <li>
                  The middleware pipeline handles the request and passes it on
                  as an <code>HttpContext</code> instance to the app's logic.
                </li>
                <li>
                  The app's response is passed back to IIS through IIS HTTP
                  Server.
                </li>
                <li>
                  IIS sends the response to the client that initiated the
                  request.
                </li>
              </ol>
            </div>
          </article>
          <article id="out-of-process">
            <h6>Out-of-process hosting with IIS</h6>
            <div>
              <p>
                Because ASP.NET Core apps run in a process separate from the IIS
                worker process, the ASP.NET Core Module handles process
                management. The module starts the process for the ASP.NET Core
                app when the first request arrives and restarts the app if it
                shuts down or crashes.
              </p>
              <img
                src="img/dotnet/ancm-outofprocess.png"
                alt="ancm-outofprocess"
              />
              <ol>
                <li>
                  Requests arrive from the web to the kernel-mode HTTP.sys
                  driver.
                </li>
                <li>
                  The driver routes the requests to IIS on the website's
                  configured port. The configured port is usually 80 (HTTP) or
                  443 (HTTPS).
                </li>
                <li>
                  The module forwards the requests to Kestrel on a random port
                  for the app. The random port isn't 80 or 443.
                </li>
              </ol>
              <p>
                To configure an app for out-of-process hosting, set the value of
                the <code>&lt;AspNetCoreHostingModel&gt;</code> property to{" "}
                <code>OutOfProcess</code> in the project file (
                <code>.csproj</code>):
              </p>
              <Highlight language="xml">
                {`<PropertyGroup>
  <AspNetCoreHostingModel>OutOfProcess</AspNetCoreHostingModel>
</PropertyGroup>`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
