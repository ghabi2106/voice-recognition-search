import React from "react";
import { Link } from "react-router-dom";

export default function CAP() {
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
                    href="#data-consistency"
                  >
                    Data Consistency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cap"
                  >
                    CAP Theorem
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
          <h3>Distributed Tracing</h3>
          <article id="tracing">
            <h6>Tracing</h6>
            <div>
              <p>
                <strong>Distributed tracing</strong> is a method used to monitor
                and observe requests as they travel through various services in
                a distributed system, such as microservices architecture. It
                helps to gain visibility into complex systems, diagnose
                performance issues, and understand the end-to-end flow of a
                request.
              </p>
              <h6>
                <strong>Why Distributed Tracing is Important</strong>
              </h6>
              <ul>
                <li>
                  <strong>Observability</strong>: Provides visibility into how a
                  request flows through multiple services.
                </li>
                <li>
                  <strong>Performance Optimization</strong>: Identifies
                  bottlenecks and latency issues.
                </li>
                <li>
                  <strong>Error Diagnosis</strong>: Traces the source of errors
                  and failures in complex call chains.
                </li>
                <li>
                  <strong>Dependency Mapping</strong>: Shows the relationships
                  between services and their interactions.
                </li>
              </ul>
              <h6>Example Tracing Tool</h6>
              <ul>
                <li>OpenTelemetry</li>
                <li>Zipkin</li>
                <li>Jaeger</li>
              </ul>
            </div>
          </article>
          <article id="watchdog">
            <h6>HealthChecks vs WatchDog</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>Aspect</strong>
                  </th>
                  <th>
                    <strong>Health Checks</strong>
                  </th>
                  <th>
                    <strong>Watchdog</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Definition</strong>
                  </td>
                  <td>
                    A mechanism to monitor the health and readiness of a system,
                    service, or dependency.
                  </td>
                  <td>
                    A process that monitors the health and activity of a system,
                    triggering corrective actions like restarting or alerting.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Purpose</strong>
                  </td>
                  <td>
                    To check if the application, service, or dependencies are
                    functioning properly or ready to handle traffic.
                  </td>
                  <td>
                    To ensure the system or services are alive, responding, and
                    running as expected, and to trigger recovery if they aren’t.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Common Use Case</strong>
                  </td>
                  <td>- Monitoring application health in microservices.</td>
                  <td>
                    - Monitoring system processes, services, or containers for
                    failures or performance degradation.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Focus</strong>
                  </td>
                  <td>
                    Checks if a service is up and ready (readiness) or alive
                    (liveness).
                  </td>
                  <td>
                    Focused on detecting failures or anomalies in system
                    processes and initiating recovery.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Types</strong>
                  </td>
                  <td>
                    - <strong>Liveness Check</strong>: Ensures the service is
                    running.
                  </td>
                  <td>
                    - <strong>Software Watchdog</strong>: Monitors application
                    state.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - <strong>Readiness Check</strong>: Ensures the service is
                    ready to serve traffic.
                  </td>
                  <td>
                    - <strong>Hardware Watchdog</strong>: Monitors system health
                    and restarts the machine if needed.
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    - <strong>Startup Check</strong>: Ensures the application
                    has started correctly.
                  </td>
                  <td>
                    - Can be a hardware timer or software process with actions
                    like restarting a failed process or system.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Implementation</strong>
                  </td>
                  <td>
                    Typically implemented in the application itself (e.g., via
                    HTTP endpoints for <code>/health</code>).
                  </td>
                  <td>
                    Typically implemented as a background process or external
                    service that monitors system state and triggers actions.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Example</strong>
                  </td>
                  <td>
                    - An HTTP <code>/health/liveness</code> endpoint that
                    responds to checks from load balancers or orchestrators like
                    Kubernetes.
                  </td>
                  <td>
                    - A process monitor (e.g., <strong>Systemd</strong>,{" "}
                    <strong>Kubernetes</strong> probes, or a custom script) that
                    checks the health and status of a service or system.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Action Triggered</strong>
                  </td>
                  <td>
                    Typically provides a status response (healthy, unhealthy,
                    degraded) without taking corrective actions.
                  </td>
                  <td>
                    Can trigger corrective actions, such as restarting a process
                    or service when it detects failure.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Integration with Orchestration Tools</strong>
                  </td>
                  <td>
                    Can be used with tools like Kubernetes to manage the
                    lifecycle of containers based on readiness/liveness probe
                    results.
                  </td>
                  <td>
                    Can work with tools like Kubernetes to restart containers
                    (based on liveness probe failure), or use systemd to restart
                    failed processes.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Performance Impact</strong>
                  </td>
                  <td>
                    Designed to be lightweight to avoid performance issues,
                    typically checking only essential health factors.
                  </td>
                  <td>
                    May involve monitoring resource usage, which could impact
                    system performance if not implemented efficiently.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Response Time</strong>
                  </td>
                  <td>
                    Health checks are periodic and can be configured with
                    frequency settings (e.g., every 30 seconds).
                  </td>
                  <td>
                    Watchdog checks are usually continuous and react immediately
                    upon detecting failure or issue.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
