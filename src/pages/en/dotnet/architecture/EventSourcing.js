import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function EventSourcing() {
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
                    href="#introduction"
                  >
                    Introduction
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
                    to="/mvc"
                  >
                    MVC
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/clean"
                  >
                    Clean Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cqrs"
                  >
                    CQRS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/ddd"
                  >
                    DDD
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
          <h3>Event Sourcing</h3>
          <article id="introduction">
            <h6>Event sourcing</h6>
            <div>
              <p>
                <strong>Event sourcing</strong> is a design pattern where state
                changes in a system are stored as a sequence of immutable
                events, ensuring the history is preserved for re-building the
                state or processing at later times.
              </p>
              <p>
                <strong>Use case:</strong> Suitable for systems requiring
                complex auditing, traceability, and eventual consistency, like
                financial systems, e-commerce, and distributed systems. It
                supports event-driven architectures and CQRS (Command Query
                Responsibility Segregation).
              </p>
              <h6>Example of Event Sourcing for a bank account system:</h6>
              <p>
                In this example, each deposit action creates an event that is
                stored. The current balance is updated by applying the event to
                the aggregate root, which can later be replayed for state
                reconstruction.
              </p>
              <Highlight language="csharp">
                {`// Event class representing a bank account deposit
public class AccountDepositedEvent
{
    public decimal Amount { get; set; }
    public DateTime DateOccurred { get; set; }

    public AccountDepositedEvent(decimal amount)
    {
        Amount = amount;
        DateOccurred = DateTime.UtcNow;
    }
}

// Aggregate root that stores and applies events
public class BankAccount
{
    private List<object> _events = new List<object>();
    public decimal Balance { get; private set; }

    public void Deposit(decimal amount)
    {
        var depositEvent = new AccountDepositedEvent(amount);
        ApplyEvent(depositEvent);
        _events.Add(depositEvent);
    }

    private void ApplyEvent(AccountDepositedEvent depositEvent)
    {
        Balance += depositEvent.Amount;
    }

    public IEnumerable<object> GetUncommittedEvents() => _events;
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
