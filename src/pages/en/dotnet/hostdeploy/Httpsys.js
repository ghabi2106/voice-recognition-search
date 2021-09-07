import React from "react";
import { Link } from "react-router-dom";

export default function Httpsys() {
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
                    href="#httpsys"
                  >
                    HTTP.sys
                  </a>
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
          <h3>HTTP.sys web server</h3>
          <article id="httpsys">
            <h6>HTTP.sys</h6>
            <div>
              <p>
                HTTP.sys is a web server for ASP.NET Core that only runs on
                Windows. HTTP.sys is an alternative to Kestrel server and offers
                some features that Kestrel doesn't provide.
              </p>
              <p>
                HTTP.sys isn't compatible with the ASP.NET Core Module and can't
                be used with IIS or IIS Express.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>When to use HTTP.sys</h6>
            <div>
              <p>HTTP.sys is useful for deployments where:</p>
              <ul>
                <li>
                  <p>
                    There's a need to expose the server directly to the Internet
                    without using IIS.
                  </p>
                  <p>
                    <img
                      src="img/dotnet/httpsys-to-internet.png"
                      alt="HTTP.sys communicates directly with the Internet"
                    />
                  </p>
                </li>
                <li>
                  <p>
                    An internal deployment requires a feature not available in
                    Kestrel. For more information, see Kestrel vs. HTTP.sys
                  </p>
                  <p>
                    <img
                      src="img/dotnet/httpsys-to-internal.png"
                      alt="HTTP.sys communicates directly with the internal network"
                    />
                  </p>
                </li>
              </ul>
              <p>
                HTTP.sys is mature technology that protects against many types
                of attacks and provides the robustness, security, and
                scalability of a full-featured web server. IIS itself runs as an
                HTTP listener on top of HTTP.sys.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
