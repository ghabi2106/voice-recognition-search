import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function MessageBroker() {
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
                    href="#rabbitmq-redis"
                  >
                    RabbitMQ
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#rabbitmq-redis"
                  >
                    RabbitMQ vs Redis
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#masstransit"
                  >
                    MassTransit
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#http-message-based"
                  >
                    Http vs Message-based
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
          <h3>Message Broker</h3>
          <article id="rabbitmq">
            <h6>RabbitMQ</h6>
            <div>
              <p>
                <strong>Message Queueing</strong>: Enables asynchronous
                communication between microservices.
              </p>
              <p>
                <strong>Message Broker</strong> is more suitable when you need{" "}
                <strong>asynchronous</strong>, <strong>event-driven</strong>{" "}
                communication, especially for <strong>decoupling</strong>{" "}
                services, handling <strong>high volumes</strong> of messages,
                and ensuring <strong>reliable message delivery</strong> across
                distributed systems.
              </p>
            </div>
          </article>
          <article id="rabbitmq-redis">
            <h6>RabbitMQ vs Redis</h6>
            <div>
              <ul>
                <li>
                  <strong>Redis</strong> is primarily a fast, in-memory
                  key-value store with support for pub/sub messaging and
                  caching.
                </li>
                <li>
                  <strong>RabbitMQ</strong> is a robust message broker designed
                  for messaging, task queuing, and distributed systems, with
                  more advanced features for ensuring reliable message delivery.
                </li>
              </ul>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Redis</th>
                    <th>RabbitMQ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Type</strong>
                    </td>
                    <td>In-memory data store (key-value store)</td>
                    <td>Message broker (queue system)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Primary Use Case</strong>
                    </td>
                    <td>Caching, session management, real-time data storage</td>
                    <td>Messaging, task queuing, pub/sub</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Data Model</strong>
                    </td>
                    <td>Key-value pairs</td>
                    <td>Queues, exchanges, bindings</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Persistence</strong>
                    </td>
                    <td>Supports persistence (RDB, AOF)</td>
                    <td>Messages can be persisted in queues</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Performance</strong>
                    </td>
                    <td>Extremely fast for in-memory operations</td>
                    <td>
                      Slower than Redis for direct data access but optimized for
                      message delivery
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scalability</strong>
                    </td>
                    <td>Supports clustering and replication</td>
                    <td>
                      Supports clustering and high availability via mirroring
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Message Delivery</strong>
                    </td>
                    <td>No built-in message delivery guarantees</td>
                    <td>
                      Supports message acknowledgment, retry, and DLQs (Dead
                      Letter Queues)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Concurrency</strong>
                    </td>
                    <td>
                      Single-threaded by default, can be extended via Redis
                      Cluster
                    </td>
                    <td>
                      Multi-threaded, can handle a large number of concurrent
                      consumers
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Protocol</strong>
                    </td>
                    <td>Redis protocol (RESP)</td>
                    <td>AMQP (Advanced Message Queuing Protocol)</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Use Cases</strong>
                    </td>
                    <td>Caching, Pub/Sub, Real-time analytics, Data storage</td>
                    <td>
                      Task queuing, Event-driven architecture, Microservices
                      communication
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Complexity</strong>
                    </td>
                    <td>Simple to set up and use</td>
                    <td>
                      More complex to set up with routing, exchanges, and queues
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Language Support</strong>
                    </td>
                    <td>
                      Wide support for client libraries in multiple languages
                    </td>
                    <td>Broad language support for clients and integrations</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Reliability</strong>
                    </td>
                    <td>
                      Built-in persistence options, no message acknowledgment by
                      default
                    </td>
                    <td>
                      High reliability with built-in message acknowledgment and
                      retries
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Throughput</strong>
                    </td>
                    <td>High throughput for cache and in-memory operations</td>
                    <td>High throughput for message-based systems</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="masstransit">
            <h6>MassTransit</h6>
            <div>
              <p>
                MassTransit simplifies working with message brokers like
                RabbitMQ It provides a framework for building distributed
                applications with features for messaging, fault tolerance, and
                observability.
              </p>
              <h6>Key Features:</h6>
              <ol>
                <li>
                  <strong>Abstraction</strong>: Provides a higher-level API over
                  raw message broker implementations.
                </li>
                <li>
                  <strong>Supports Multiple Transports</strong>: RabbitMQ, Azure
                  Service Bus, Kafka, and more.
                </li>
                <li>
                  <strong>Built-in Patterns</strong>:
                  <ul>
                    <li>Publish/Subscribe</li>
                    <li>Request/Response</li>
                    <li>Saga (stateful long-running workflows)</li>
                    <li>Routing Slip (dynamic workflow execution)</li>
                  </ul>
                </li>
                <li>
                  <strong>Middleware</strong>: Simplifies cross-cutting concerns
                  like retries, timeouts, and logging.
                </li>
                <li>
                  <strong>Dependency Injection</strong>: Integrates seamlessly
                  with DI frameworks like
                  Microsoft.Extensions.DependencyInjection.
                </li>
                <li>
                  <strong>Observability</strong>: Out-of-the-box support for
                  metrics and logging via OpenTelemetry.
                </li>
              </ol>
              <h6>Why Use MassTransit with RabbitMQ?</h6>
              <ul>
                <li>
                  Reduces boilerplate code compared to using the RabbitMQ.Client
                  library directly.
                </li>
                <li>
                  Provides a consistent API for working with different message
                  brokers.
                </li>
                <li>
                  Handles complex patterns like sagas and routing slips with
                  ease.
                </li>
              </ul>
              <Highlight language="csharp">{`// Configure MassTransit with RabbitMQ
builder.Services.AddMassTransit(x =>
{
    x.UsingRabbitMq((context, cfg) =>
    {
        cfg.Host("localhost", "/", h =>
        {
            h.Username("guest");
            h.Password("guest");
        });
    });
});

builder.Services.AddMassTransitHostedService();`}</Highlight>
            </div>
          </article>
          <article id="http-message-based">
            <h6>Http vs Message-based</h6>
            <div>
              <h6>
                Difference Between HTTP and Message-Based Communication in
                Microservices
              </h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>HTTP-Based Communication</strong>
                    </th>
                    <th>
                      <strong>Message-Based Communication</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Communication Type</strong>
                    </td>
                    <td>Synchronous (real-time request-response).</td>
                    <td>Asynchronous (event-driven).</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Pattern</strong>
                    </td>
                    <td>Request-Response.</td>
                    <td>Publish-Subscribe or Queue-Based.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Coupling</strong>
                    </td>
                    <td>Tightly coupled (services must be online).</td>
                    <td>Loosely coupled (services can be offline).</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fault Tolerance</strong>
                    </td>
                    <td>
                      Limited; requires retries and fallbacks for resilience.
                    </td>
                    <td>
                      High; brokers ensure message delivery even if services
                      fail.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scalability</strong>
                    </td>
                    <td>Limited scalability with high request rates.</td>
                    <td>Highly scalable via message brokers.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Latency</strong>
                    </td>
                    <td>Immediate response (real-time).</td>
                    <td>Delayed response (eventual consistency).</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Implementation</strong>
                    </td>
                    <td>Simpler to implement (REST, gRPC, JSON).</td>
                    <td>
                      More complex; requires broker setup (Kafka, RabbitMQ).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Use Cases</strong>
                    </td>
                    <td>- Real-time queries and updates.</td>
                    <td>- Background jobs, notifications, logging.</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>- CRUD operations in services.</td>
                    <td>- Decoupled event-driven workflows.</td>
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
