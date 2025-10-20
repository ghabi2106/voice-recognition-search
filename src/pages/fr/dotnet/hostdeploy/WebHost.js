import React from "react";
import { Link } from "react-router-dom";

export default function WebHost() {
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
                    href="#web-host"
                  >
                    Web Host
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#common-web-hosts"
                  >
                    Common Web Hosts
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reverse-proxy"
                  >
                    Reverse Proxy
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
          <h3>Web Host</h3>
          <article id="web-host">
            <h6>Web Host</h6>
            <div>
              <h6>🧩 What Is a Web Host in .NET?</h6>
              <p>
                A <strong>web host</strong> in .NET is the component responsible
                for:
              </p>
              <ul>
                <li>
                  <strong>Listening</strong> for incoming HTTP requests.
                </li>
                <li>
                  <strong>Routing</strong> those requests to your ASP.NET Core
                  application.
                </li>
                <li>
                  <strong>Managing</strong> the application’s lifetime and
                  environment (startup, configuration, etc.).
                </li>
              </ul>
              <p>
                Essentially, it’s the{" "}
                <strong>bridge between the web (HTTP)</strong> and your{" "}
                <strong>.NET app</strong>.
              </p>
            </div>
          </article>
          <article id="common-web-hosts">
            <h6>Common Web Hosts</h6>
            <div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Host</th>
                    <th>Description</th>
                    <th>Use Case</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Kestrel</strong>
                    </td>
                    <td>
                      Cross-platform, built-in web server for ASP.NET Core
                    </td>
                    <td>
                      Default and required — runs on Windows, Linux, macOS
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>IIS (Internet Information Services)</strong>
                    </td>
                    <td>Windows-only web server, can proxy to Kestrel</td>
                    <td>Enterprise or intranet deployments on Windows</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>IIS Express</strong>
                    </td>
                    <td>Lightweight version of IIS for local development</td>
                    <td>Used by Visual Studio for debugging</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>HTTP.sys</strong>
                    </td>
                    <td>Windows-only server, used instead of Kestrel</td>
                    <td>
                      For high-performance or low-level control on Windows
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>NGINX / Apache (Reverse Proxy)</strong>
                    </td>
                    <td>
                      External web servers acting as reverse proxies to Kestrel
                    </td>
                    <td>Common in Linux environments, cloud, and Docker</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="reverse-proxy">
            <h6>Reverse Proxy</h6>
            <div>
              <h6>✅ Why use NGINX or IIS in front of Kestrel</h6>
              <ul>
                <li>
                  <strong>SSL termination</strong>
                  (handle HTTPS certificates)
                </li>
                <li>
                  <strong>Static file caching</strong>
                </li>
                <li>
                  <strong>Load balancing or routing multiple apps</strong>
                </li>
                <li>
                  <strong>Advanced security or rate limiting</strong>
                </li>
              </ul>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Platform</th>
                    <th>Web Server</th>
                    <th>Reverse Proxy Role</th>
                    <th>.NET Hosting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Windows</td>
                    <td>IIS</td>
                    <td>Uses ASP.NET Core Module (ANCM)</td>
                    <td>Kestrel</td>
                  </tr>
                  <tr>
                    <td>Linux</td>
                    <td>NGINX / Apache</td>
                    <td>Handles HTTP/S and forwards to Kestrel</td>
                    <td>Kestrel</td>
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
