import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function kestrel() {
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
                    href="#kestrel"
                  >
                    Kestrel
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reverse-proxy"
                  >
                    use Kestrel with a reverse proxy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#forwarded-headers"
                  >
                    Forwarded headers
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
          <h3>Kestrel</h3>
          <article id="kestrel">
            <h6>Kestrel</h6>
            <div>
              <p>
                Kestrel is a cross-platform web server for ASP.NET Core. Kestrel
                is the web server that's included and enabled by default in
                ASP.NET Core project templates.
              </p>
              <img src="img/dotnet/kestrel-default-config.PNG" alt="kestrel-default-config" />
            </div>
          </article>
          <article id="reverse-proxy">
            <h6>use Kestrel with a reverse proxy</h6>
            <div>
              <p>
                Kestrel can be used by itself or with a reverse proxy server,
                such as Internet Information Services (IIS), Nginx, or Apache. A
                reverse proxy server receives HTTP requests from the network and
                forwards them to Kestrel.
              </p>
              <p>Kestrel used as an edge (Internet-facing) web server</p>
              <img
                src="img/dotnet/kestrel-to-internet2.png"
                alt="kestrel-to-internet2"
              />
              <p>Kestrel used in a reverse proxy configuration:</p>
              <img
                src="img/dotnet/kestrel-to-internet.png"
                alt="kestrel-to-internet"
              />
              <p>
                Either configuration, with or without a reverse proxy server, is
                a supported hosting configuration.
              </p>
              <p>
                When Kestrel is used as an edge server without a reverse proxy
                server, sharing of the same IP address and port among multiple
                processes is unsupported. When Kestrel is configured to listen
                on a port, Kestrel handles all traffic for that port regardless
                of requests' <code>Host</code> headers. A reverse proxy that can
                share ports can forward requests to Kestrel on a unique IP and
                port.
              </p>
              <p>
                Even if a reverse proxy server isn't required, using a reverse
                proxy server might be a good choice.
              </p>
              <p>A reverse proxy:</p>
              <ul>
                <li>
                  Can limit the exposed public surface area of the apps that it
                  hosts.
                </li>
                <li>
                  Provide an additional layer of configuration and defense.
                </li>
                <li>Might integrate better with existing infrastructure.</li>
                <li>
                  Simplify load balancing and secure communication (HTTPS)
                  configuration. Only the reverse proxy server requires an X.509
                  certificate, and that server can communicate with the app's
                  servers on the internal network using plain HTTP.
                </li>
              </ul>
            </div>
          </article>
          <article id="forwarded-headers">
            <h6>Forwarded headers</h6>
            <div>
              <ul>
                <li>
                  When HTTPS requests are proxied over HTTP, the original scheme
                  (HTTPS) is lost and must be forwarded in a header.
                </li>
                <li>
                  Because an app receives a request from the proxy and not its
                  true source on the Internet or corporate network, the
                  originating client IP address must also be forwarded in a
                  header.
                </li>
              </ul>
              <p>
                The Forwarded Headers Middleware (ForwardedHeadersMiddleware),
                reads these headers and fills in the associated fields on
                HttpContext.
              </p>
              <p>The middleware updates:</p>
              <ul>
                <li>
                  HttpContext.Connection.RemoteIpAddress: Set using the
                  <code>X-Forwarded-For</code> header value. Additional settings
                  influence how the middleware sets <code>RemoteIpAddress</code>
                  .
                </li>
                <li>
                  HttpContext.Request.Scheme: Set using the{" "}
                  <code>X-Forwarded-Proto</code> header value.
                </li>
                <li>
                  HttpContext.Request.Host: Set using the{" "}
                  <code>X-Forwarded-Host</code> header value.
                </li>
              </ul>
              <Highlight language="csharp">
                {`public void ConfigureServices(IServiceCollection services)
{
    services.Configure<ForwardedHeadersOptions>(options =>
    {
        options.ForwardedHeaders =
            ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    });
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseForwardedHeaders();
    }
    else
    {
        app.UseForwardedHeaders();
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
