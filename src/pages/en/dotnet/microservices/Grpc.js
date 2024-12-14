import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Grpc() {
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
                    href="#grpc"
                  >
                    Grpc
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#rgrpc-rest"
                  >
                    Grpc vs Rest
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#grpc-example"
                  >
                    Example
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#grpc-message-broker"
                  >
                    Grpc vs Message Broker
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
          <h3>Grpc</h3>
          <article id="grpc">
            <h6>Grpc</h6>
            <div>
              <p>
                gRPC uses Protocol Buffers, a compact binary format, for
                serialization. This results in faster transmission and smaller
                payloads compared to text-based formats like JSON or XML
              </p>
              <p>
                <strong>gRPC</strong> is ideal when you need low-latency,
                high-performance, and synchronous communication between services
                in a <strong>tightly coupled</strong> microservices
                architecture.
              </p>
            </div>
          </article>
          <article id="grpc-rest">
            <h6>Grpc vs Rest</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>gRPC</th>
                  <th>REST</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Protocol</strong>
                  </td>
                  <td>HTTP/2</td>
                  <td>HTTP/1.1</td>
                </tr>
                <tr>
                  <td>
                    <strong>Data Format</strong>
                  </td>
                  <td>Binary (Protocol Buffers)</td>
                  <td>Text-based (JSON/XML)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Performance</strong>
                  </td>
                  <td>High (Compact binary data)</td>
                  <td>Moderate (Verbose text)</td>
                </tr>
                <tr>
                  <td>
                    <strong>Streaming</strong>
                  </td>
                  <td>Full-duplex supported</td>
                  <td>Limited</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ease of Use</strong>
                  </td>
                  <td>Requires .proto setup</td>
                  <td>Simpler to start</td>
                </tr>
                <tr>
                  <td>
                    <strong>Human-readability</strong>
                  </td>
                  <td>Not human-readable</td>
                  <td>Human-readable</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="grpc-example">
            <h6>Example</h6>
            <ol>
              <li>
                <p>
                  <strong>Define Service Contracts:</strong>
                  <ul>
                    <li>
                      Create <code>.proto</code> files to define the service
                      methods and messages.
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <p>
                  <strong>Generate Code:</strong>
                  <ul>
                    <li>
                      Use the <code>Grpc.Tools</code> package to generate client
                      and server stubs.
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <p>
                  <strong>Set Up the gRPC Service:</strong>
                  <ul>
                    <li>
                      Implement the service in a <code>.NET</code> project.
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <p>
                  <strong>Configure the Server:</strong>
                  <ul>
                    <li>
                      Add gRPC to the ASP.NET Core middleware.
                      <Highlight language="csharp">
                        {`var builder = WebApplication.CreateBuilder(args);
builder.Services.AddGrpc();
var app = builder.Build();
app.MapGrpcService<MyService>();
app.Run();`}
                      </Highlight>
                    </li>
                  </ul>
                </p>
              </li>
              <li>
                <p>
                  <strong>Build the Client:</strong>
                  <ul>
                    <li>Use the generated client stubs to make gRPC calls.</li>
                    <Highlight language="csharp">
                      {`var channel = GrpcChannel.ForAddress("https://localhost:5001");
var client = new MyService.MyServiceClient(channel);
var response = await client.MyMethodAsync(new MyRequest { ... });`}
                    </Highlight>
                  </ul>
                </p>
              </li>
            </ol>
          </article>
          <article id="grpc-message-broker">
            <h6>Grpc vs Message Broker</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>gRPC</th>
                    <th>Message Broker</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Communication</strong>
                    </td>
                    <td>Direct, request-response</td>
                    <td>Asynchronous, event-driven</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Latency</strong>
                    </td>
                    <td>Low (synchronous)</td>
                    <td>Higher (eventual consistency)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fault Tolerance</strong>
                    </td>
                    <td>Relies on retries and error handling</td>
                    <td>Guaranteed delivery, persistence</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scalability</strong>
                    </td>
                    <td>Scales for real-time, direct calls</td>
                    <td>High scalability with queuing and pub-sub</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Reliability</strong>
                    </td>
                    <td>Requires additional mechanisms</td>
                    <td>Built-in message persistence</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Ideal Use Case</strong>
                    </td>
                    <td>Real-time, direct communication</td>
                    <td>Decoupled, event-driven architecture</td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>When to Choose Each:</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>gRPC</strong> is ideal when you need low-latency,
                    high-performance, and synchronous communication between
                    services in a <strong>tightly coupled</strong> microservices
                    architecture.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Message Broker</strong> is more suitable when you
                    need <strong>asynchronous</strong>,{" "}
                    <strong>event-driven</strong> communication, especially for{" "}
                    <strong>decoupling</strong> services, handling{" "}
                    <strong>high volumes</strong> of messages, and ensuring{" "}
                    <strong>reliable message delivery</strong> across
                    distributed systems.
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
