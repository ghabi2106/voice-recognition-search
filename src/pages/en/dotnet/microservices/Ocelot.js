import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Ocelot() {
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
                    href="#api-gateway"
                  >
                    API Gateway
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ocelot-example"
                  >
                    Example Ocelot
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
          <h3>API Gateway</h3>
          <article id="api-gateway">
            <h6>API Gateway</h6>
            <div>
              <p>
                An <strong>API Gateway</strong> is a server that acts as an
                entry point for clients to interact with a microservices
                architecture. It serves as a reverse proxy that routes client
                requests to the appropriate backend services, handles various
                cross-cutting concerns, and provides additional functionalities
                like security, monitoring, load balancing, and request
                aggregation.
              </p>
              <h6>Key Responsibilities of an API Gateway:</h6>
              <ol>
                <li>
                  <strong>Request Routing</strong>: Directs incoming requests to
                  the appropriate microservice based on the URL path, method, or
                  other factors.
                </li>
                <li>
                  <strong>Load Balancing</strong>: Distributes incoming requests
                  to different instances of a service to prevent overload and
                  ensure high availability.
                </li>
                <li>
                  <strong>Security</strong>: Enforces authentication and
                  authorization mechanisms (e.g., OAuth, JWT tokens).
                </li>
                <li>
                  <strong>Rate Limiting</strong>: Controls the frequency of
                  requests to prevent abuse and ensure fairness.
                </li>
                <li>
                  <strong>Request Aggregation</strong>: Combines multiple
                  responses from different services into a single response,
                  reducing the number of client calls.
                </li>
                <li>
                  <strong>Caching</strong>: Stores frequently requested data to
                  reduce the load on backend services and improve response
                  times.
                </li>
                <li>
                  <strong>Logging and Monitoring</strong>: Provides centralized
                  logging and metrics collection to monitor the health and
                  performance of microservices.
                </li>
                <li>
                  <strong>Error Handling</strong>: Manages failures and returns
                  meaningful error messages to clients.
                </li>
              </ol>
              <h6>Benefits of Using an API Gateway:</h6>
              <ul>
                <li>
                  <strong>Centralized management</strong> of microservices and
                  client requests.
                </li>
                <li>
                  <strong>Improved scalability</strong> by offloading common
                  tasks like security and rate limiting to the gateway.
                </li>
                <li>
                  <strong>Simplified client interactions</strong> by
                  consolidating multiple service calls into a single request.
                </li>
                <li>
                  <strong>Enhanced security</strong> by protecting backend
                  services from direct exposure to the internet.
                </li>
              </ul>
              <h6>Common API Gateway Solutions:</h6>
              <ul>
                <li>
                  <strong>Ocelot</strong> (for .NET)
                </li>
                <li>
                  <strong>Kong</strong>
                </li>
                <li>
                  <strong>NGINX</strong>
                </li>
                <li>
                  <strong>AWS API Gateway</strong>
                </li>
                <li>
                  <strong>Zuul</strong> (by Netflix)
                </li>
                <li>
                  <strong>Ambassador</strong>
                </li>
              </ul>
              <p>
                Let me know if you'd like more details on any specific API
                Gateway!
              </p>
            </div>
          </article>
          <article id="ocelot-example">
            <h6>Example Ocelot</h6>
            <div>
              <ol>
                <li>
                  <strong>Install Ocelot NuGet Package</strong>
                  <Highlight language="bash">
                    {`Install-Package Ocelot`}
                  </Highlight>
                </li>
                <li>
                  <strong>
                    Configure the <code>Program.cs</code> (or{" "}
                    <code>Startup.cs</code> in older versions)
                  </strong>
                  <Highlight language="csharp">
                    {`// Add Ocelot to the DI container
builder.Services.AddOcelot();

// Use Ocelot middleware
await app.UseOcelot();`}
                  </Highlight>
                </li>
                <li>
                  <strong>
                    Add an <code>ocelot.json</code> Configuration File
                  </strong>
                  <Highlight language="json">
                    {`{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/orders",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 5001
        }
      ],
      "UpstreamPathTemplate": "/orders",
      "UpstreamHttpMethod": [ "GET" ]
    },
    {
      "DownstreamPathTemplate": "/api/products",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 5002
        }
      ],
      "UpstreamPathTemplate": "/products",
      "UpstreamHttpMethod": [ "GET" ]
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "http://localhost:5000"
  }
}`}
                  </Highlight>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
