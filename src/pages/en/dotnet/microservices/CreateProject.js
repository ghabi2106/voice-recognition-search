import React from "react";
import { Link } from "react-router-dom";

export default function CreateProject() {
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
                  href="#design-project"
                >
                  Design Project
                </a>
              </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#design-microservices"
                  >
                    Design Microservices
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
          <h3>Design Project</h3>
          <article id="design-project">
            <h6>Design Project</h6>
            <div>
              <p>
                By carefully evaluating these considerations, you can choose an
                architecture that aligns with your project’s current and future
                needs while optimizing for cost, performance, and
                maintainability.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Consideration</strong>
                    </th>
                    <th>
                      <strong>Details</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Project Requirements</strong>
                    </td>
                    <td>
                      Define functional (what the system does) and
                      non-functional needs (scalability, performance, etc.).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scope &amp; Complexity</strong>
                    </td>
                    <td>
                      - Small: Monolithic. <br /> - Large: Modular (e.g.,
                      Microservices, DDD).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Budget &amp; Timeline</strong>
                    </td>
                    <td>
                      - Assess development and operational costs.
                      <br /> - Match architecture complexity with resources
                      available.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Team Expertise</strong>
                    </td>
                    <td>
                      Align with team skills (e.g., .NET Core, Angular, Docker
                      for microservices).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scalability Needs</strong>
                    </td>
                    <td>
                      - Horizontal scaling (add nodes). <br /> - Vertical
                      scaling (add resources).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Data Management</strong>
                    </td>
                    <td>
                      - Structured data: Relational DB (e.g., SQL Server).{" "}
                      <br /> - Flexible: NoSQL (e.g., MongoDB).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Integration Needs</strong>
                    </td>
                    <td>
                      Plan for APIs and middleware to connect with third-party
                      or legacy systems.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Technology Stack</strong>
                    </td>
                    <td>
                      Backend: .NET Core, Node.js, etc. <br /> Frontend:
                      Angular, React. <br /> Deployment: Docker, Kubernetes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Deployment Environment</strong>
                    </td>
                    <td>On-premises, cloud (AWS, Azure), or hybrid.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Security Requirements</strong>
                    </td>
                    <td>
                      Data encryption, authentication (OAuth, JWT), and
                      compliance (GDPR, HIPAA).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Maintainability</strong>
                    </td>
                    <td>
                      Modular, loosely-coupled design with good documentation
                      and clean code.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Performance Expectations</strong>
                    </td>
                    <td>
                      Optimize speed with caching, async processes, and load
                      balancing.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Common Architectural Patterns</strong>
                    </th>
                    <th>
                      <strong>Use Case</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Monolithic</td>
                    <td>Simple, cost-effective for small apps.</td>
                  </tr>
                  <tr>
                    <td>Layered Architecture</td>
                    <td>Suitable for CRUD applications.</td>
                  </tr>
                  <tr>
                    <td>Microservices</td>
                    <td>Large, scalable, distributed systems.</td>
                  </tr>
                  <tr>
                    <td>Event-Driven</td>
                    <td>Real-time applications.</td>
                  </tr>
                  <tr>
                    <td>Serverless</td>
                    <td>Lightweight, event-triggered services.</td>
                  </tr>
                  <tr>
                    <td>Domain-Driven Design (DDD)</td>
                    <td>Complex business domains.</td>
                  </tr>
                </tbody>
              </table>
              <h6>
                1. <strong>Understand the Project Requirements</strong>
              </h6>
              <ul>
                <li>
                  <strong>Functional Requirements</strong>: Define what the
                  system must do.
                </li>
                <li>
                  <strong>Non-Functional Requirements</strong>: Consider
                  scalability, performance, reliability, security,
                  maintainability, and compliance needs.
                </li>
              </ul>
              <h6>
                2. <strong>Define the Scope and Complexity</strong>
              </h6>
              <ul>
                <li>
                  Small applications may benefit from a simple monolithic
                  architecture.
                </li>
                <li>
                  Larger, complex systems may require modular approaches like{" "}
                  <strong>microservices</strong> or{" "}
                  <strong>domain-driven design (DDD)</strong>.
                </li>
              </ul>
              <h6>
                3. <strong>Budget and Timeline</strong>
              </h6>
              <ul>
                <li>Consider development and operational costs.</li>
                <li>
                  Assess if the budget allows for scalable architectures like
                  microservices or if a simpler model suffices.
                </li>
              </ul>
              <h6>
                4. <strong>Team Expertise</strong>
              </h6>
              <ul>
                <li>Align the architecture with the team's skills.</li>
                <li>
                  For example:
                  <ul>
                    <li>
                      If the team is proficient in .NET and Angular, consider
                      frameworks like{" "}
                      <strong>.NET Core with Clean Architecture</strong>.
                    </li>
                    <li>
                      For microservices, ensure familiarity with Docker,
                      Kubernetes, and API gateways.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                5. <strong>Scalability Needs</strong>
              </h6>
              <ul>
                <li>
                  <strong>Current vs. Future Load</strong>: Will the application
                  need to scale horizontally (add more nodes) or vertically (add
                  resources to existing nodes)?
                </li>
                <li>
                  For high scalability, consider{" "}
                  <strong>cloud-native architectures</strong> (e.g., AWS,
                  Azure).
                </li>
              </ul>
              <h6>
                6. <strong>Data Management</strong>
              </h6>
              <ul>
                <li>
                  <strong>Database Requirements</strong>:
                  <ul>
                    <li>
                      Relational databases (e.g., SQL Server) for structured
                      data.
                    </li>
                    <li>
                      NoSQL (e.g., MongoDB) for flexibility and scalability.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Data Consistency</strong>:
                  <ul>
                    <li>
                      If strong consistency is required, a monolithic approach
                      may suffice.
                    </li>
                    <li>
                      For eventual consistency, explore distributed databases.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                7. <strong>Integration with Other Systems</strong>
              </h6>
              <ul>
                <li>
                  Will the application integrate with third-party APIs or legacy
                  systems?
                </li>
                <li>
                  Consider APIs and middleware for seamless communication.
                </li>
              </ul>
              <h6>
                8. <strong>Technology Stack</strong>
              </h6>
              <ul>
                <li>
                  Choose technologies that align with your project's needs:
                  <ul>
                    <li>
                      Backend: <strong>.NET Core, Node.js, Java</strong>
                    </li>
                    <li>
                      Frontend: <strong>Angular, React, Vue.js</strong>
                    </li>
                    <li>
                      Deployment: <strong>Docker, Kubernetes</strong>
                    </li>
                  </ul>
                </li>
                <li>
                  Ensure they are supported by your organization and community.
                </li>
              </ul>
              <h6>
                9. <strong>Deployment Environment</strong>
              </h6>
              <ul>
                <li>On-premises, cloud-based, or hybrid?</li>
                <li>
                  For cloud: Choose between PaaS, IaaS, or serverless
                  architecture.
                </li>
              </ul>
              <h6>
                10. <strong>Security Requirements</strong>
              </h6>
              <ul>
                <li>Encrypt sensitive data.</li>
                <li>
                  Implement authentication and authorization mechanisms (e.g.,
                  OAuth, JWT).
                </li>
                <li>
                  Address compliance with GDPR, HIPAA, or other regulations.
                </li>
              </ul>
              <h6>
                11. <strong>Maintainability and Upgradability</strong>
              </h6>
              <ul>
                <li>
                  Use modular and loosely-coupled designs for easy updates.
                </li>
                <li>
                  Prioritize clear documentation and clean code practices.
                </li>
              </ul>
              <h6>
                12. <strong>Performance Expectations</strong>
              </h6>
              <ul>
                <li>Optimize for speed and responsiveness.</li>
                <li>
                  Include caching mechanisms, asynchronous processing, and load
                  balancing where needed.
                </li>
              </ul>
            </div>
          </article>
          <article id="design-microservices">
            <h6>Design Microservices</h6>
            <table>
              <thead>
                <tr>
                  <th>
                    <strong>Category</strong>
                  </th>
                  <th>
                    <strong>Considerations</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Architecture Design</strong>
                  </td>
                  <td>
                    - Use Domain-Driven Design (DDD) to define bounded contexts.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Align each microservice with specific business
                    capabilities.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Design RESTful APIs, gRPC, or GraphQL with clear
                    versioning and contracts.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Ensure each service has its own database; consider CQRS
                    and event sourcing.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Technology Stack</strong>
                  </td>
                  <td>
                    - Choose the best-suited technologies for each service
                    (e.g., ASP.NET Core for .NET).
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Select databases (SQL/NoSQL) based on service needs.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Communication</strong>
                  </td>
                  <td>- Synchronous: Use HTTP/HTTPS or gRPC.</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Asynchronous: Use message brokers (RabbitMQ, Kafka, Azure
                    Service Bus).
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Handle eventual consistency with distributed transactions
                    or Saga pattern.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Service Discovery</strong>
                  </td>
                  <td>
                    - Use a service registry (e.g., Consul, Eureka) for dynamic
                    discovery.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Implement load balancing with tools like NGINX, Envoy, or
                    cloud solutions.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Security</strong>
                  </td>
                  <td>
                    - Secure APIs with gateways for authentication,
                    authorization, and rate limiting.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>- Use OAuth2/JWT for token-based authentication.</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Encrypt sensitive data and secure inter-service
                    communication with TLS.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Resilience</strong>
                  </td>
                  <td>
                    - Implement circuit breakers (e.g., Polly in .NET) to manage
                    failures.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Use retries and fallback strategies for temporary issues.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Monitor service health with tools like HealthChecks in
                    .NET.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Deployment</strong>
                  </td>
                  <td>- Use Docker for containerization of services.</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Deploy with Kubernetes, Docker Swarm, or cloud-native
                    tools.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Set up CI/CD pipelines for automated builds, testing, and
                    deployment.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Monitoring</strong>
                  </td>
                  <td>
                    - Centralize logging using tools like ELK Stack, Prometheus,
                    or Application Insights.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Implement distributed tracing (e.g., Jaeger, Zipkin) for
                    request tracking.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Monitor performance metrics such as latency and
                    throughput.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Scalability</strong>
                  </td>
                  <td>- Design services to scale independently.</td>
                </tr>
                <tr>
                  <td></td>
                  <td>- Use caching (e.g., Redis) to reduce load.</td>
                </tr>
                <tr>
                  <td></td>
                  <td>- Optimize for horizontal scaling.</td>
                </tr>
                <tr>
                  <td>
                    <strong>Organizational</strong>
                  </td>
                  <td>- Foster a DevOps culture for improved collaboration.</td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - Train teams in microservices design and cloud-native
                    tools.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>- Adopt agile methodologies for lifecycle management.</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
