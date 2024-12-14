import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Polly() {
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
                    href="#circuit-breaker"
                  >
                    Circuit Breaker
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#polly"
                  >
                    Polly
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
          <h3>Circuit Breaker</h3>
          <article id="circuit-breaker">
            <h6>Circuit Breaker</h6>
            <div>
              <p>
                The <strong>Circuit Breaker</strong> pattern is a design pattern
                to improve the system's resilience and fault tolerance. <br />
                It helps prevent cascading failures when a service or downstream
                dependency is unavailable, experiencing high latency, or failing
                intermittently.
              </p>
              <ol>
                <li>
                  <p>
                    <strong>Improves Resilience</strong>:<br />
                    Prevents overloading a failing service and allows it time to
                    recover.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Faster Failure Handling</strong>:<br />
                    Quickly returns errors instead of waiting for timeouts,
                    improving system responsiveness.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Protects Upstream Services</strong>:<br />
                    Stops cascading failures in distributed systems.
                  </p>
                </li>
              </ol>
            </div>
          </article>
          <article id="polly">
            <h6>Polly</h6>
            <div>
              <h6>
                <strong>Configuration and Tuning</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Failure Threshold</strong>:<br />
                    Define the number of allowed failures before opening the
                    circuit.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Timeout</strong>:<br />
                    Configure appropriate timeouts for requests to avoid
                    indefinite waits.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Retry Logic</strong>:<br />
                    Combine Circuit Breaker with retry policies for better
                    resilience.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Monitoring and Alerts</strong>:<br />
                    Integrate monitoring tools to track the state of the Circuit
                    Breaker and alert on excessive failures.
                  </p>
                </li>
              </ol>
              <h6>
                <strong>How It Works</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Closed</strong>:
                  </p>
                  <ul>
                    <li>Normal operation.</li>
                    <li>All requests are allowed through.</li>
                    <li>Failures are counted.</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Open</strong>:
                  </p>
                  <ul>
                    <li>
                      The Circuit Breaker is tripped after a threshold of
                      failures is reached.
                    </li>
                    <li>
                      All requests are blocked for a certain period to allow the
                      downstream service to recover.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Half-Open</strong>:
                  </p>
                  <ul>
                    <li>
                      A trial state after the <code>Open</code> state.
                    </li>
                    <li>
                      Some requests are allowed through to check if the
                      downstream service has recovered.
                    </li>
                    <li>
                      Depending on success or failure, the breaker transitions
                      to <code>Closed</code> or back to <code>Open</code>.
                    </li>
                  </ul>
                </li>
              </ol>
              <Highlight language="csharp">
                {`using Polly;
using Polly.CircuitBreaker;
using System;
using System.Net.Http;
using System.Threading.Tasks;

class Program
{
    static async Task Main(string[] args)
    {
        // Define the Circuit Breaker policy
        var circuitBreakerPolicy = Policy
            .Handle<HttpRequestException>()
            .CircuitBreakerAsync(
                exceptionsAllowedBeforeBreaking: 3,
                durationOfBreak: TimeSpan.FromSeconds(30),
                onBreak: (exception, timespan) =>
                {
                    Console.WriteLine($"Circuit opened for {timespan.TotalSeconds} seconds due to: {exception.Message}");
                },
                onReset: () => Console.WriteLine("Circuit closed. Requests are allowed again."),
                onHalfOpen: () => Console.WriteLine("Circuit is half-open. Testing service health.")
            );

        // Example HTTP client
        var httpClient = new HttpClient();

        for (int i = 0; i < 10; i++)
        {
            try
            {
                // Execute request with the Circuit Breaker policy
                await circuitBreakerPolicy.ExecuteAsync(async () =>
                {
                    Console.WriteLine($"Attempt {i + 1}: Sending request...");
                    var response = await httpClient.GetAsync("https://example.com/api");
                    response.EnsureSuccessStatusCode();
                    Console.WriteLine("Request succeeded.");
                });
            }
            catch (BrokenCircuitException)
            {
                Console.WriteLine("Request failed due to open circuit.");
            }
            catch (HttpRequestException ex)
            {
                Console.WriteLine($"Request failed: {ex.Message}");
            }

            await Task.Delay(1000); // Simulate delay between requests
        }
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
