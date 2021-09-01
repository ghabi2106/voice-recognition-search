import React from "react";
import { Link } from "react-router-dom";

export default function Server() {
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
                    href="#server"
                  >
                    Web server
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-process"
                  >
                    .Net core servers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#kestrel-httpsys"
                  >
                    Kestrel vs. HTTP.sys
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker"
                  >
                    Docker
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
          <h3>Web server implementations</h3>
          <article id="server">
            <h6>Web server</h6>
            <div>
              <p>
                A web server is software and hardware that uses HTTP (Hypertext
                Transfer Protocol) and other protocols to respond to client
                requests made over the World Wide Web. The main job of a web
                server is to display website content through storing, processing
                and delivering webpages to users. Besides HTTP, web servers also
                support SMTP (Simple Mail Transfer Protocol) and FTP (File
                Transfer Protocol), used for email, file transfer and storage.
              </p>
              <ul>
                <li>Apache</li>
                <li>Internet Information Services (IIS)</li>
                <li>Nginx</li>
                <li>Kestrel</li>
              </ul>
            </div>
          </article>
          <article id="in-process">
            <h6> in-process HTTP</h6>
            <div>
              <p>ASP.NET Core ships with the following:</p>
              <ul>
                <li>Kestrel server</li>
                <li>IIS HTTP Server</li>
                <li>HTTP.sys server</li>
              </ul>
            </div>
          </article>
          <article id="kestrel-httpsys">
            <h6>Kestrel vs. HTTP.sys</h6>
            <div>
              <p>Kestrel has the following advantages over HTTP.sys:</p>
              <ul>
                <li>Better performance and memory utilization.</li>
                <li>Cross platform</li>
                <li>
                  Agility, it's developed and patched independent of the OS.
                </li>
                <li>Programmatic port and TLS configuration</li>
                <li>
                  Extensibility that allows for protocols like PPv2 and
                  alternate transports.
                </li>
              </ul>
              <p>
                Http.Sys operates as a shared kernel mode component with the
                following features that kestrel does not have:
              </p>
              <ul>
                <li>Port sharing</li>
                <li>
                  Kernel mode windows authentication. Kestrel supports only
                  user-mode authentication.
                </li>
                <li>Fast proxying via queue transfers</li>
                <li>Direct file transmission</li>
                <li>Response caching</li>
              </ul>
            </div>
          </article>
          <article id="docker">
            <h6>Docker</h6>
            <p>
              Docker is an open-source project for automating the deployment of
              applications as portable, self-sufficient containers that can run
              on the cloud or on-premises.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
