import React from "react";
import { Link } from "react-router-dom";

export default function Microservice() {
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
                    href="#transitioning"
                  >
                    Transitioning
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#microservices-monolithic"
                  >
                    Microservices-Monolithic
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#monolithic"
                  >
                    Monolithic
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#microservices"
                  >
                    Microservices
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
                    to="/caching"
                  >
                    Caching
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >
                    Action Method, Result, Selectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controllervuedata"
                  >
                    ViewBag, ViewData and TempData
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                    HTTPS, HTTP and SSL
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                    HTTP Request Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >
                    JWT
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >
                    Services, Microservices, Web API, Web API vs WCF
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
          <h3>Monolith - Microservices</h3>
          <article id="transitioning">
            <h6>Transitioning</h6>
            <div>
              <h6>
                <strong>
                  Approach to Breaking a Monolith into Microservices
                </strong>
              </h6>
              <p>
                Transitioning from a monolithic architecture to microservices
                involves careful planning and implementation to ensure the
                system's reliability, scalability, and maintainability.
              </p>
              <h6>Step-by-Step Approach</h6>
              <ol>
                <li>
                  <p>
                    <strong>Understand the Monolith</strong>:
                  </p>
                  <ul>
                    <li>Analyze the monolithic application thoroughly.</li>
                    <li>
                      Identify the <strong>business domains</strong>,
                      dependencies, and tightly coupled components.
                    </li>
                    <li>
                      Create a map of the application’s structure, workflows,
                      and data flows.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Define the Microservices Boundaries</strong>:
                  </p>
                  <ul>
                    <li>
                      Use <strong>domain-driven design (DDD)</strong> to
                      identify <strong>bounded contexts</strong> and business
                      domains.
                    </li>
                    <li>
                      Each bounded context should ideally translate to a single
                      microservice.
                    </li>
                    <li>
                      Prioritize high-impact or frequently changing domains for
                      initial migration.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Refactor and Modularize</strong>:
                  </p>
                  <ul>
                    <li>
                      Refactor the monolith to modularize tightly coupled code
                      into well-defined modules.
                    </li>
                    <li>
                      This step simplifies future extraction into standalone
                      services.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Start with Non-Critical Components</strong>:
                  </p>
                  <ul>
                    <li>
                      Migrate less critical and self-contained functionalities
                      (e.g., reporting or authentication) first.
                    </li>
                    <li>
                      This allows testing the microservices architecture with
                      minimal impact on the core system.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Define Service Interfaces</strong>:
                  </p>
                  <ul>
                    <li>
                      Clearly define APIs or communication protocols for each
                      service.
                    </li>
                    <li>
                      Use REST, gRPC, or message brokers for inter-service
                      communication.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Implement Data Separation</strong>:
                  </p>
                  <ul>
                    <li>
                      Break the monolithic database into smaller,
                      service-specific databases.
                    </li>
                    <li>
                      Services should have exclusive ownership of their data to
                      ensure autonomy.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Handle Inter-Service Communication</strong>:
                  </p>
                  <ul>
                    <li>
                      Use asynchronous communication (e.g., message queues like
                      RabbitMQ, Kafka) where real-time responses are not
                      required.
                    </li>
                    <li>
                      For synchronous communication, ensure timeouts and retries
                      for reliability.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Maintain Backward Compatibility</strong>:
                  </p>
                  <ul>
                    <li>
                      Ensure APIs and services remain backward compatible during
                      the transition.
                    </li>
                    <li>
                      Use API versioning to manage evolving service contracts.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Introduce Infrastructure Support</strong>:
                  </p>
                  <ul>
                    <li>
                      Set up foundational tools for service discovery (e.g.,
                      Consul, Eureka), load balancing, and monitoring (e.g.,
                      Prometheus, ELK).
                    </li>
                    <li>
                      Implement CI/CD pipelines for automated testing and
                      deployment of microservices.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Migrate Gradually</strong>:
                  </p>
                  <ul>
                    <li>Transition incrementally to reduce risks.</li>
                    <li>
                      Use the <strong>Strangler Fig Pattern</strong>: implement
                      new features in microservices while gradually replacing
                      monolith components with equivalent microservices.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Test Extensively</strong>:
                  </p>
                  <ul>
                    <li>
                      Ensure thorough unit, integration, and end-to-end testing
                      to validate the functionality and communication between
                      microservices.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Monitor and Optimize</strong>:
                  </p>
                  <ul>
                    <li>
                      Use tools for distributed tracing (e.g., Jaeger, Zipkin)
                      to identify performance bottlenecks.
                    </li>
                    <li>
                      Optimize resource usage and service interactions based on
                      runtime metrics.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="microservices-monolithic">
            <h6>Microservices vs Monolithic</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>Aspect</strong>
                  </th>
                  <th>
                    <strong>Microservices</strong>
                  </th>
                  <th>
                    <strong>Monolithic Architecture</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Design</strong>
                  </td>
                  <td>Composed of independent, modular services</td>
                  <td>Single, tightly coupled application</td>
                </tr>
                <tr>
                  <td>
                    <strong>Scalability</strong>
                  </td>
                  <td>Scales horizontally by scaling specific services</td>
                  <td>
                    Scales vertically by adding resources to the entire app
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Development</strong>
                  </td>
                  <td>
                    Services developed, deployed, and maintained independently
                  </td>
                  <td>Changes affect the entire application</td>
                </tr>
                <tr>
                  <td>
                    <strong>Technology Stack</strong>
                  </td>
                  <td>Allows using different technologies per service</td>
                  <td>Limited to a unified technology stack</td>
                </tr>
                <tr>
                  <td>
                    <strong>Fault Tolerance</strong>
                  </td>
                  <td>Failure in one service may not affect others</td>
                  <td>Failure can bring down the whole system</td>
                </tr>
                <tr>
                  <td>
                    <strong>Deployment</strong>
                  </td>
                  <td>Continuous delivery/deployment of individual services</td>
                  <td>Deployment involves the entire application</td>
                </tr>
                <tr>
                  <td>
                    <strong>Team Structure</strong>
                  </td>
                  <td>Small, independent teams for each service</td>
                  <td>Larger, centralized teams</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="monolithic">
            <h6>Monolithic</h6>
            <p>
              A monolithic architecture is a traditional application design
              where the entire application is built as a single, tightly
              integrated unit. All components (UI, business logic, and data
              access) are part of one codebase, deployed as a single executable
              or package.
            </p>
          </article>
          <article id="microservices">
            <h6>Microservices</h6>
            <div>
              <p>
                Microservices is an architectural style where an application is
                built as a collection of small, independent, and loosely coupled
                services. Each service focuses on a single business capability,
                operates independently, and communicates with other services via
                lightweight mechanisms like RESTful APIs, gRPC, or messaging
                protocols.
              </p>
              <h6>
                <strong>Advantages of Microservices</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Independent Deployment</strong>:
                  </p>
                  <ul>
                    <li>
                      Each microservice can be deployed independently, enabling
                      faster release cycles and minimizing risks during
                      deployments.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Scalability</strong>:
                  </p>
                  <ul>
                    <li>
                      Services can be scaled independently based on their
                      specific resource requirements, optimizing cost and
                      performance.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Technology Diversity</strong>:
                  </p>
                  <ul>
                    <li>
                      Teams can choose the best technology stack for each
                      service, promoting flexibility and innovation.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Fault Isolation</strong>:
                  </p>
                  <ul>
                    <li>
                      Failure in one service is isolated and does not bring down
                      the entire system.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Improved Productivity</strong>:
                  </p>
                  <ul>
                    <li>
                      Smaller, focused teams can work independently on different
                      services, increasing development velocity.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Reuse</strong>:
                  </p>
                  <ul>
                    <li>
                      Microservices can be reused across different applications,
                      reducing duplication of efforts.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Continuous Delivery</strong>:
                  </p>
                  <ul>
                    <li>
                      The independent nature of services allows easier adoption
                      of CI/CD practices for faster delivery.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>Challenges of Microservices</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Complexity</strong>:
                  </p>
                  <ul>
                    <li>
                      Managing multiple services requires complex infrastructure
                      and tooling for service discovery, orchestration, and
                      communication.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Network Latency</strong>:
                  </p>
                  <ul>
                    <li>
                      Services communicate over the network, leading to
                      potential performance bottlenecks due to network latency.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Data Management</strong>:
                  </p>
                  <ul>
                    <li>
                      Ensuring data consistency across distributed services is
                      challenging (requires eventual consistency).
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Monitoring and Debugging</strong>:
                  </p>
                  <ul>
                    <li>
                      Tracing and debugging issues across multiple services is
                      more complex than in monolithic systems.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Deployment Overhead</strong>:
                  </p>
                  <ul>
                    <li>
                      Managing the deployment of multiple services, especially
                      in large systems, can be cumbersome without proper
                      automation.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Testing Complexity</strong>:
                  </p>
                  <ul>
                    <li>
                      Testing a distributed system with many dependencies is
                      harder compared to testing a single monolithic
                      application.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Cost</strong>:
                  </p>
                  <ul>
                    <li>
                      Requires investment in DevOps practices, orchestration
                      tools, and cloud infrastructure to manage services.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
