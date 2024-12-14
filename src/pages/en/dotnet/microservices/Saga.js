import React from "react";
import { Link } from "react-router-dom";

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
                    href="#saga"
                  >
                    Saga
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
          <h3>Saga</h3>
          <article id="saga">
            <h6>Saga</h6>
            <div>
              <p>
                The Saga pattern is a design pattern used in microservices to
                manage distributed transactions. Distributed transactions span
                multiple services, making them inherently complex due to the
                lack of a central transaction manager. The Saga pattern
                addresses this complexity by dividing the transaction into a
                series of smaller, independent operations that are coordinated
                to achieve eventual consistency.
              </p>
              <p>
                By leveraging the Saga pattern, microservices can handle
                distributed transactions more effectively while maintaining
                system resilience and scalability.
              </p>
              <ul>
                <li>
                  <strong>Choreography</strong> is event-driven with
                  decentralized control, where services interact based on events
                  and handle their own compensation.
                </li>
                <li>
                  <strong>Orchestration</strong> uses a central service to
                  manage the flow of the transaction and handle compensations
                  when something goes wrong.
                </li>
              </ul>             
              <h6>Key Considerations in the Saga Pattern</h6>
              <ol>
                <li>
                  <strong>Idempotency:</strong> Ensure actions and compensations
                  can be safely retried without side effects.
                </li>
                <li>
                  <strong>Consistency:</strong> Use eventual consistency models
                  and mechanisms like retries and timeouts.
                </li>
                <li>
                  <strong>Observability:</strong> Implement logging and tracing
                  to track Saga execution and failures.
                </li>
                <li>
                  <strong>Error Handling:</strong> Define clear rollback or
                  compensatory actions for each service.
                </li>
              </ol>
              <h6>Practical Applications of the Saga Pattern</h6>
              <ul>
                <li>
                  <strong>E-commerce:</strong> Handling orders, payments, and
                  inventory updates across multiple services.
                </li>
                <li>
                  <strong>Travel Booking:</strong> Coordinating flight
                  reservations, hotel bookings, and car rentals.
                </li>
                <li>
                  <strong>Banking:</strong> Processing multi-step transactions,
                  such as transferring funds between accounts in different
                  systems.
                </li>
              </ul>
              <p>Sagas can be implemented using two approaches:</p>
              <h6>
                1. <strong>Choreography</strong>
              </h6>
              <ul>
                <li>
                  Each microservice involved in the Saga performs its action and
                  then publishes an event to indicate completion.
                </li>
                <li>
                  Other services listen to these events and decide how to
                  proceed (triggering their respective steps).
                </li>
                <li>
                  No centralized coordinator exists; communication is
                  event-driven.
                </li>
              </ul>
              <p>
                <strong>Advantages:</strong>
              </p>
              <ul>
                <li>Loose coupling between services.</li>
                <li>Scales well with the number of participants.</li>
              </ul>
              <p>
                <strong>Challenges:</strong>
              </p>
              <ul>
                <li>
                  Harder to debug and trace due to the distributed nature of
                  events.
                </li>
                <li>Event chaining can become complex over time.</li>
              </ul>
              <p>
                <strong>Example:</strong>
              </p>
              <ul>
                <li>
                  An <strong>Order Service</strong> creates an order and
                  publishes an event <code>OrderCreated</code>.
                </li>
                <li>
                  A <strong>Payment Service</strong> listens to{" "}
                  <code>OrderCreated</code>, processes the payment, and
                  publishes <code>PaymentProcessed</code>.
                </li>
                <li>
                  A <strong>Shipping Service</strong> listens to{" "}
                  <code>PaymentProcessed</code>, schedules shipping, and
                  publishes <code>OrderShipped</code>.
                </li>
              </ul>
              <h6>
                2. <strong>Orchestration</strong>
              </h6>
              <ul>
                <li>
                  A centralized coordinator (orchestrator) manages the Saga,
                  controlling the flow of the transaction and explicitly
                  invoking services.
                </li>
                <li>
                  Each service performs its operation and reports success or
                  failure back to the orchestrator.
                </li>
              </ul>
              <p>
                <strong>Advantages:</strong>
              </p>
              <ul>
                <li>Easier to manage and debug due to centralized control.</li>
                <li>Simplifies complex workflows.</li>
              </ul>
              <p>
                <strong>Challenges:</strong>
              </p>
              <ul>
                <li>Introduces a single point of failure (orchestrator).</li>
                <li>Slightly tighter coupling compared to choreography.</li>
              </ul>
              <p>
                <strong>Example:</strong>
              </p>
              <ul>
                <li>
                  An <strong>Order Orchestrator</strong> calls the{" "}
                  <strong>Order Service</strong> to create an order.
                </li>
                <li>
                  If successful, it invokes the <strong>Payment Service</strong>{" "}
                  to process payment.
                </li>
                <li>
                  Finally, it calls the <strong>Shipping Service</strong> to
                  schedule shipping.
                </li>
                <li>
                  If a step fails, the orchestrator triggers compensation logic
                  for already-completed steps.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
