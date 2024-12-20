import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Resilience() {
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
                    href="#handling-failures"
                  >
                  Handling Failures
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#retries-timeouts"
                  >
                    Retries Timeouts
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
          <h3>Resilience</h3>
          <article id="handling-failures">
            <h6>Handling Failures</h6>
            <div>
              <h6>
                <strong>Handling Failures in a Dependent Microservice</strong>
              </h6>
              <p>
                When a microservice fails, especially one that other services
                depend on, it can disrupt the entire application. To mitigate
                such failures and ensure system resilience, the following
                strategies can be employed:
              </p>
              <h6>
                <strong>1. Circuit Breaker Pattern</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Description</strong>: Prevents cascading failures by
                    cutting off requests to a failing service after a certain
                    threshold of failures is detected. It allows the system to
                    recover by:
                  </p>
                  <ul>
                    <li>
                      Moving to a <strong>half-open</strong> state to
                      periodically test if the service is functional.
                    </li>
                    <li>
                      Resuming normal operations when the service recovers.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Implementation in .NET</strong>:
                  </p>
                  <ul>
                    <li>
                      Use <strong>Polly</strong>, a popular .NET library, to
                      implement circuit breakers:
                      <Highlight language="csharp">
                        {`var circuitBreakerPolicy = Policy
    .Handle<HttpRequestException>()
    .CircuitBreakerAsync(
        exceptionsAllowedBeforeBreaking: 3,
        durationOfBreak: TimeSpan.FromSeconds(30)
    );`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>2. Fallback Mechanisms</strong>
              </h6>
              <ul>
                <li>
                  <strong>Description</strong>: Provide a default response or
                  redirect to an alternative service when the dependent service
                  fails.
                </li>
                <li>
                  <strong>Example</strong>:
                  <ul>
                    <li>
                      If a recommendation service fails, return a static list of
                      recommendations or an empty response instead of
                      propagating the error.
                      <Highlight language="csharp">
                        {`var fallbackPolicy = Policy
    .Handle<Exception>()
    .FallbackAsync(
        fallbackAction: (ct) => Task.FromResult("Fallback response")
    );`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>3. Caching</strong>
              </h6>
              <ul>
                <li>
                  <strong>Description</strong>: Use cached responses to reduce
                  dependency on a failing service for non-critical or repeatable
                  data.
                </li>
                <li>
                  <strong>Example</strong>:
                  <ul>
                    <li>
                      Cache frequently accessed data using{" "}
                      <strong>Redis</strong> or in-memory caching solutions.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>4. Asynchronous Messaging</strong>
              </h6>
              <ul>
                <li>
                  <strong>Description</strong>: Decouple services by using
                  message brokers (e.g., RabbitMQ, Kafka) for non-blocking,
                  asynchronous communication.
                </li>
                <li>
                  <strong>Example</strong>:
                  <ul>
                    <li>
                      Instead of making synchronous API calls, send a message to
                      a queue and process it when the service becomes available.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>5. Service Redundancy</strong>
              </h6>
              <ul>
                <li>
                  <strong>Description</strong>: Deploy redundant instances of
                  the dependent service in multiple availability zones to
                  improve fault tolerance. Use <strong>load balancing</strong>{" "}
                  to direct traffic to healthy instances.
                </li>
              </ul>
              <h6>
                <strong>6. Graceful Degradation</strong>
              </h6>
              <ul>
                <li>
                  <strong>Description</strong>: Allow the system to continue
                  operating with reduced functionality when a dependent service
                  fails.
                </li>
                <li>
                  <strong>Example</strong>:
                  <ul>
                    <li>
                      If the payment service fails, allow users to place orders
                      and process payments later.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article id="retries-timeouts">
            <h6>Retries and Timeouts</h6>
            <div>
              <h6>
                <strong>Retries and Timeouts</strong>
              </h6>
              <p>
                Retries and timeouts are essential strategies to handle
                transient failures in microservices. However, these must be
                implemented carefully to avoid overloading the system or
                introducing additional latency.
              </p>
              <h6>
                <strong>Summary of Strategies</strong>
              </h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Strategy</strong>
                    </th>
                    <th>
                      <strong>Purpose</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Circuit Breaker</strong>
                    </td>
                    <td>
                      Prevent cascading failures by halting requests to a
                      failing service.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fallback Mechanism</strong>
                    </td>
                    <td>
                      Provide a default response or alternative service when
                      failures occur.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Caching</strong>
                    </td>
                    <td>
                      Reduce dependency on the failing service by using
                      pre-fetched data.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Asynchronous Messaging</strong>
                    </td>
                    <td>Decouple services to handle failures non-blocking.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Redundancy</strong>
                    </td>
                    <td>
                      Improve availability by deploying multiple instances of
                      critical services.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Graceful Degradation</strong>
                    </td>
                    <td>
                      Continue operations with reduced functionality when a
                      failure occurs.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Retries</strong>
                    </td>
                    <td>Retry transient failures with exponential backoff.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Timeouts</strong>
                    </td>
                    <td>
                      Prevent indefinite waiting for unresponsive services.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>1. Retry Strategy</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Objective</strong>: Automatically retry failed
                    operations a limited number of times before considering them
                    failed.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Best Practices</strong>:
                  </p>
                  <ul>
                    <li>
                      Use <strong>exponential backoff</strong> to increase the
                      delay between retries and prevent overwhelming the
                      service.
                    </li>
                    <li>
                      Cap the maximum number of retries to avoid infinite loops.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Implementation in .NET</strong> (using Polly):
                    <Highlight language="csharp">
                      {`var retryPolicy = Policy
    .Handle<HttpRequestException>()
    .WaitAndRetryAsync(
        retryCount: 3,
        sleepDurationProvider: retryAttempt => TimeSpan.FromSeconds(Math.Pow(2, retryAttempt))
    );`}
                    </Highlight>
                  </p>
                </li>
              </ul>
              <h6>
                <strong>2. Timeout Strategy</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Objective</strong>: Prevent the system from waiting
                    indefinitely for a response from a failing service.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Best Practices</strong>:
                  </p>
                  <ul>
                    <li>
                      Define reasonable timeout durations based on the expected
                      response time of the service.
                    </li>
                    <li>
                      Combine timeouts with retries to balance responsiveness
                      and fault tolerance.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Implementation in .NET</strong>:
                    <Highlight language="csharp">
                      {`var timeoutPolicy = Policy
    .TimeoutAsync(TimeSpan.FromSeconds(5));`}
                    </Highlight>
                  </p>
                </li>
              </ul>
              <h6>
                <strong>
                  3. Combining Retries, Circuit Breakers, and Timeouts
                </strong>
              </h6>
              <ul>
                <li>
                  Combine these patterns for a robust failure-handling
                  mechanism.
                </li>
                <li>
                  Example using Polly:
                  <Highlight language="csharp">
                    {`var resiliencePolicy = Policy.WrapAsync(
    Policy.TimeoutAsync(TimeSpan.FromSeconds(5)),
    Policy.Handle<HttpRequestException>().WaitAndRetryAsync(3, retryAttempt => TimeSpan.FromSeconds(Math.Pow(2, retryAttempt))),
    Policy.Handle<HttpRequestException>().CircuitBreakerAsync(3, TimeSpan.FromSeconds(30))
);

await resiliencePolicy.ExecuteAsync(() => HttpClient.GetAsync("https://example.com"));
`}
                  </Highlight>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
