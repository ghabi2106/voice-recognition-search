import React from "react";
import { Link } from "react-router-dom";

export default function ServiceDiscovery() {
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
                    href="#service-discovery"
                  >
                    Service Discovery
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
          <h3>Service Discovery</h3>
          <article id="service-discovery">
            <h6>Service Discovery</h6>
            <div>
              <p>
                As services scale up or down, new instances are registered or
                deregistered automatically. This eliminates the need to
                hard-code service IPs or URLs, ensuring that services always
                know how to find each other, even in rapidly changing
                environments.
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Main Reason</strong>: The primary benefit of service
                    discovery (and tools like Consul) is to{" "}
                    <strong>
                      automatically manage and update the network location
                    </strong>{" "}
                    of services in a distributed system without needing to
                    hard-code IP addresses or endpoints. As services scale (up
                    or down), service discovery systems ensure that other
                    services always have up-to-date information on how to
                    communicate with them.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Additional Benefits</strong>:
                  </p>
                  <ul>
                    <li>
                      <strong>Fault tolerance</strong> and{" "}
                      <strong>resilience</strong> through health checks.
                    </li>
                    <li>
                      <strong>Dynamic load balancing</strong>.
                    </li>
                    <li>
                      <strong>Multi-data center</strong> and{" "}
                      <strong>cross-region</strong> service discovery.
                    </li>
                    <li>
                      Integration with <strong>configuration management</strong>{" "}
                      for dynamic changes.
                    </li>
                  </ul>
                </li>
              </ul>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Definition</strong>
                    </td>
                    <td>
                      Service Discovery is the process of automatically
                      detecting and managing microservices within a system.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Purpose</strong>
                    </td>
                    <td>
                      It enables services to find and communicate with each
                      other dynamically, especially in a distributed environment
                      like microservices.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Types of Service Discovery</strong>
                    </td>
                    <td>
                      1. <strong>Client-Side Discovery</strong>: The client is
                      responsible for querying the service registry to find
                      instances of a service. <br /> 2.{" "}
                      <strong>Server-Side Discovery</strong>: The client sends a
                      request to a load balancer, which queries the service
                      registry and forwards the request to an available service
                      instance.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Service Discovery Tools</strong>
                    </td>
                    <td>
                      1. <strong>Eureka</strong>: A REST-based service for
                      locating services in a cloud environment. <br /> 2.{" "}
                      <strong>Consul</strong>: A tool for service discovery and
                      configuration management. <br /> 3.{" "}
                      <strong>Zookeeper</strong>: Provides centralized
                      management and coordination for distributed systems.{" "}
                      <br /> 4. <strong>Kubernetes</strong>: Built-in service
                      discovery using DNS or environment variables for
                      microservices within the cluster.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Key Components</strong>
                    </td>
                    <td>
                      1. <strong>Service Registry</strong>: A central repository
                      where all service instances are registered. <br /> 2.{" "}
                      <strong>Service Instance</strong>: The individual
                      instances of a microservice, registered in the registry.{" "}
                      <br /> 3. <strong>Client</strong>: A service that consumes
                      other services and uses the discovery mechanism to find
                      them.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Challenges</strong>
                    </td>
                    <td>
                      1. <strong>Scalability</strong>: As services increase, the
                      registry can become a bottleneck. <br /> 2.{" "}
                      <strong>Fault Tolerance</strong>: The service registry and
                      communication between services must handle failures.{" "}
                      <br /> 3. <strong>Security</strong>: Securing the registry
                      and the communication channels is critical.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Benefits</strong>
                    </td>
                    <td>
                      1. <strong>Dynamic Scaling</strong>: New instances of
                      services can be registered or deregistered dynamically.{" "}
                      <br /> 2. <strong>Reduced Manual Configuration</strong>:
                      Services don’t need hard-coded endpoints or static IPs.{" "}
                      <br /> 3. <strong>High Availability</strong>: Service
                      discovery supports fault tolerance and resiliency by
                      providing multiple service instances.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Use Cases</strong>
                    </td>
                    <td>
                      1. <strong>Microservices Architectures</strong>: Services
                      need to discover and communicate with each other
                      automatically. <br /> 2.{" "}
                      <strong>Cloud Environments</strong>: Scalable and dynamic
                      services that change frequently.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Popular Protocols</strong>
                    </td>
                    <td>
                      1. <strong>DNS-based Discovery</strong>: Services are
                      discovered via DNS queries. <br /> 2.{" "}
                      <strong>HTTP-based Discovery</strong>: Service discovery
                      through HTTP API calls.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Examples of Use</strong>
                    </td>
                    <td>
                      - <strong>Kubernetes DNS</strong>: Services in a
                      Kubernetes cluster discover each other using DNS names.{" "}
                      <br /> - <strong>Eureka in Spring Cloud</strong>: Spring
                      Boot applications register with Eureka server for service
                      discovery.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>When to Use Consul</strong>
              </h6>
              <p>
                Consider using <strong>Consul</strong> if your microservices
                architecture involves:
              </p>
              <ul>
                <li>
                  <strong>Dynamic scaling</strong>: If your services are
                  continuously scaling up and down, Consul helps ensure service
                  discovery remains accurate.
                </li>
                <li>
                  <strong>Multiple services</strong>: If you have a large number
                  of microservices that need to discover each other dynamically,
                  Consul provides an efficient solution.
                </li>
                <li>
                  <strong>Multi-datacenter</strong>: If your application is
                  deployed across multiple regions or datacenters, Consul
                  simplifies global service discovery and health monitoring.
                </li>
                <li>
                  <strong>Health checks</strong>: If you need to ensure that
                  only healthy instances of a service receive traffic, Consul’s
                  health check feature provides a reliable mechanism.
                </li>
                <li>
                  <strong>Service Mesh</strong>: If you are implementing a
                  service mesh architecture (e.g., using{" "}
                  <strong>Consul Connect</strong>), Consul can handle secure
                  service communication, load balancing, and traffic routing.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
