import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Mediator() {
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
                    href="#mediator"
                  >
                    Mediator
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Common use
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dis-advantages"
                  >
                    Advantages and disadvantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#code"
                  >
                    Structural code in C#
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cleancode"
                  >
                    Clean code
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/command"
                  >
                    Command
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/designpattern"
                  >
                    Design Principle &amp; Pattern
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/di"
                  >
                    Dependency injection
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/factory"
                  >
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mediator"
                  >
                    Mediator
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/observer"
                  >
                    Observer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/singleton"
                  >
                    Singleton
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/solid"
                  >
                    S.O.L.I.D. Principles
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
          <h3>Mediator</h3>
          <article id="mediator">
            <h6>Mediator</h6>
            <p>
              <strong>Mediator</strong> is a behavioral design pattern that lets
              you reduce chaotic dependencies between objects. The pattern
              restricts direct communications between the objects and forces
              them to collaborate only via a mediator object.
            </p>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <ul>
              <li>
                <strong>Decoupling Components</strong>: Use it when multiple
                components or objects interact extensively, creating tightly
                coupled code. Mediator centralizes this communication.
              </li>
              <li>
                <strong>Complex Workflows</strong>: It simplifies complex
                workflows where objects need to coordinate actions by delegating
                the orchestration logic to a single mediator.
              </li>
              <li>
                <strong>Scalability</strong>: When you anticipate adding or
                modifying components in a system without altering existing ones,
                a mediator reduces the risk of breaking changes.
              </li>
            </ul>
          </article>
          <article id="dis-advantages">
            <h6>Advantages and disadvantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Single Responsibility Principle</em>. You can extract
                    the communications between various components into a single
                    place, making it easier to comprehend and maintain.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Open/Closed Principle</em>. You can introduce new
                    mediators without having to change the actual components.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> You can
                    reduce coupling between various components of a program.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> You can
                    reuse individual components more easily.
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i> Over
                    time a mediator can evolve into a{" "}
                    <a href="/antipatterns/god-object">God Object</a>.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article id="code">
            <h6>Structural code in C#</h6>
            <div>
              <ul>
                <li>
                  <strong>Mediator</strong>: The Air Traffic Control centralizes
                  communication, ensuring all airplanes are coordinated.
                </li>
                <li>
                  <strong>Colleagues</strong>: Airplanes (Passenger and Cargo)
                  communicate only through the mediator.
                </li>
                <li>
                  <strong>Benefits</strong>: The pattern simplifies
                  communication, reducing dependencies and making the system
                  scalable.
                </li>
              </ul>
              <Highlight language="csharp">
                {`// Mediator Interface
public interface IAirTrafficControl
{
    void RegisterAircraft(Aircraft aircraft);
    void NotifyAircraft(string message, Aircraft sender);
}

// Concrete Mediator
public class AirTrafficControl : IAirTrafficControl
{
    private readonly List<Aircraft> _aircrafts = new();

    public void RegisterAircraft(Aircraft aircraft) => _aircrafts.Add(aircraft);

    public void NotifyAircraft(string message, Aircraft sender)
    {
        foreach (var aircraft in _aircrafts)
        {
            if (aircraft != sender)
            {
                aircraft.ReceiveMessage(message);
            }
        }
    }
}

// Colleague Base Class
public abstract class Aircraft
{
    protected IAirTrafficControl Mediator;

    protected Aircraft(IAirTrafficControl mediator) => Mediator = mediator;

    public abstract void ReceiveMessage(string message);
    public abstract void SendMessage(string message);
}

// Concrete Colleagues
public class PassengerAircraft : Aircraft
{
    public PassengerAircraft(IAirTrafficControl mediator) : base(mediator) { }

    public override void ReceiveMessage(string message) =>
        Console.WriteLine($"Passenger Aircraft received: {message}");

    public override void SendMessage(string message) =>
        Mediator.NotifyAircraft($"Passenger Aircraft: {message}", this);
}

public class CargoAircraft : Aircraft
{
    public CargoAircraft(IAirTrafficControl mediator) : base(mediator) { }

    public override void ReceiveMessage(string message) =>
        Console.WriteLine($"Cargo Aircraft received: {message}");

    public override void SendMessage(string message) =>
        Mediator.NotifyAircraft($"Cargo Aircraft: {message}", this);
}

// Client
public class Program
{
    public static void Main()
    {
        var airTrafficControl = new AirTrafficControl();

        var passengerAircraft = new PassengerAircraft(airTrafficControl);
        var cargoAircraft = new CargoAircraft(airTrafficControl);

        airTrafficControl.RegisterAircraft(passengerAircraft);
        airTrafficControl.RegisterAircraft(cargoAircraft);

        passengerAircraft.SendMessage("Requesting landing clearance.");
        cargoAircraft.SendMessage("Acknowledged landing request.");
    }
}
`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
