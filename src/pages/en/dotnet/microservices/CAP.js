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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#strategies"
                  >
                    Strategies
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
          <h3>CAP Theorem</h3>
          <article id="data-consistency">
            <h6>Data Consistency</h6>
            <div>
              <h6>Data Consistency vs Eventual Consistency</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Data Consistency (Strong)</strong>
                    </th>
                    <th>
                      <strong>Eventual Consistency</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Guarantee</strong>
                    </td>
                    <td>Immediate consistency after a write.</td>
                    <td>Consistency is achieved over time.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Availability</strong>
                    </td>
                    <td>May compromise availability for consistency.</td>
                    <td>High availability, but temporary inconsistency.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Performance</strong>
                    </td>
                    <td>Higher latency due to synchronization.</td>
                    <td>Low latency due to asynchronous updates.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Use Cases</strong>
                    </td>
                    <td>Banking, e-commerce transactions.</td>
                    <td>Social media, content delivery, caching.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>CAP Theorem Focus</strong>
                    </td>
                    <td>Prioritizes consistency over availability.</td>
                    <td>Prioritizes availability over consistency.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="cap">
            <h6>CAP Theorem</h6>
            <div>
              <ul>
                <li>
                  You can choose at most{" "}
                  <strong>two out of the three properties</strong> at the same
                  time:
                  <ul>
                    <li>
                      <strong>CP (Consistency + Partition Tolerance)</strong>:
                      Sacrifices Availability.
                    </li>
                    <li>
                      <strong>AP (Availability + Partition Tolerance)</strong>:
                      Sacrifices Consistency.
                    </li>
                    <li>
                      <strong>CA (Consistency + Availability)</strong>:
                      Sacrifices Partition Tolerance (not feasible in
                      distributed systems with potential network issues).
                    </li>
                  </ul>
                </li>
              </ul>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Description</th>
                    <th>Example Systems</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Consistency</strong>
                    </td>
                    <td>All nodes see the same data at the same time.</td>
                    <td>Relational Databases (e.g., PostgreSQL).</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Availability</strong>
                    </td>
                    <td>System responds to requests, even during failures.</td>
                    <td>DynamoDB, Cassandra.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Partition Tolerance</strong>
                    </td>
                    <td>
                      System continues functioning despite network partitions.
                    </td>
                    <td>Any distributed system.</td>
                  </tr>
                </tbody>
              </table>
              <h6>CAP Theorem in Practice</h6>
              <ol>
                <li>
                  <strong>CP (Consistency + Partition Tolerance)</strong>
                  <ul>
                    <li>
                      Prioritizes consistency over availability during network
                      failures.
                    </li>
                    <li>
                      <strong>Example</strong>: Relational databases like
                      PostgreSQL with distributed transactions.
                    </li>
                    <li>
                      <strong>Use Case</strong>: Banking systems where
                      consistency is critical.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>AP (Availability + Partition Tolerance)</strong>
                  <ul>
                    <li>
                      Prioritizes availability over consistency during network
                      failures.
                    </li>
                    <li>
                      <strong>Example</strong>: NoSQL databases like Cassandra,
                      DynamoDB, and Riak.
                    </li>
                    <li>
                      <strong>Use Case</strong>: Social media, content delivery
                      systems where high availability is crucial.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>CA (Consistency + Availability)</strong>
                  <ul>
                    <li>
                      Achievable only in single-node systems or systems that
                      cannot tolerate partitions.
                    </li>
                    <li>
                      <strong>Example</strong>: Traditional databases on a
                      single server.
                    </li>
                    <li>
                      <strong>Use Case</strong>: Systems where network
                      partitions are not a concern.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="strategies">
            <h6>Strategies</h6>
            <div>
              <h6>
                <strong>Strategies for Data Consistency</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Eventual Consistency</strong>:
                  </p>
                  <ul>
                    <li>
                      Adopt eventual consistency where immediate consistency is
                      not required.
                    </li>
                    <li>
                      Changes propagate asynchronously across services, ensuring
                      consistency over time.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Sagas Pattern</strong>:
                  </p>
                  <ul>
                    <li>
                      Use <strong>saga patterns</strong> for distributed
                      transactions.
                    </li>
                    <li>
                      Sagas break transactions into smaller, compensatable steps
                      managed either as:
                      <ul>
                        <li>
                          <strong>Choreography</strong>: Services communicate
                          directly by publishing and listening to events.
                        </li>
                        <li>
                          <strong>Orchestration</strong>: A centralized
                          orchestrator manages the workflow.
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p>
                    <strong>Example</strong>:<br />
                    In an order service, place an order (Step 1), reserve
                    inventory (Step 2), and process payment (Step 3). If payment
                    fails, a compensating transaction (e.g., releasing the
                    inventory) is triggered.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Event-Driven Architecture</strong>:
                  </p>
                  <ul>
                    <li>
                      Services publish domain events to a message broker (e.g.,
                      Kafka).
                    </li>
                    <li>
                      Other services subscribe to these events and update their
                      data accordingly.
                    </li>
                  </ul>
                  <p>
                    <strong>Example</strong>:<br />
                    An "Order Placed" event triggers updates to the Inventory
                    and Payment services.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Distributed Locks</strong>:
                  </p>
                  <ul>
                    <li>
                      Use distributed locking mechanisms (e.g., Redis or
                      Zookeeper) for operations requiring exclusive access to
                      resources.
                    </li>
                    <li>
                      This approach can reduce race conditions but may impact
                      performance.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Idempotency</strong>:
                  </p>
                  <ul>
                    <li>
                      Ensure all operations are idempotent (i.e., repeatable
                      without changing the result) to handle retries or
                      duplicate events.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Data Partitioning</strong>:
                  </p>
                  <ul>
                    <li>
                      Partition data logically so that services only manage the
                      data they own, reducing cross-service dependencies.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>APIs for Consistent Reads</strong>:
                  </p>
                  <ul>
                    <li>
                      Use consistent reads via APIs to fetch data across
                      services when immediate consistency is required (e.g., for
                      user-facing operations).
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Database Change Streams</strong>:
                  </p>
                  <ul>
                    <li>
                      Use change data capture (CDC) tools like{" "}
                      <strong>Debezium</strong> to track changes in a database
                      and propagate updates to other services.
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
