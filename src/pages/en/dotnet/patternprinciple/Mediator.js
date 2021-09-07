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
                Use the Mediator pattern when it’s hard to change some of the
                classes because they are tightly coupled to a bunch of other
                classes.
              </li>
              <li>
                Use the pattern when you can’t reuse a component in a different
                program because it’s too dependent on other components.
              </li>
              <li>
                Use the Mediator when you find yourself creating tons of
                component subclasses just to reuse some basic behavior in
                various contexts.
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
            <Highlight language="csharp">
              {`using System;

namespace Mediator.Structural
{
    /// <summary>
    /// Mediator Design Pattern
    /// </summary>

    public class Program
    {
        public static void Main(string[] args)
        {
            ConcreteMediator m = new ConcreteMediator();

            ConcreteColleague1 c1 = new ConcreteColleague1(m);
            ConcreteColleague2 c2 = new ConcreteColleague2(m);

            m.Colleague1 = c1;
            m.Colleague2 = c2;

            c1.Send("How are you?");
            c2.Send("Fine, thanks");

            // Wait for user

            Console.ReadKey();
        }
    }

    /// <summary>
    /// The 'Mediator' abstract class
    /// </summary>

    public abstract class Mediator
    {
        public abstract void Send(string message,
            Colleague colleague);
    }

    /// <summary>
    /// The 'ConcreteMediator' class
    /// </summary>

    public class ConcreteMediator : Mediator
    {
        ConcreteColleague1 colleague1;
        ConcreteColleague2 colleague2;

        public ConcreteColleague1 Colleague1
        {
            set { colleague1 = value; }
        }

        public ConcreteColleague2 Colleague2
        {
            set { colleague2 = value; }
        }

        public override void Send(string message, Colleague colleague)
        {
            if (colleague == colleague1)
            {
                colleague2.Notify(message);
            }
            else
            {
                colleague1.Notify(message);
            }
        }
    }

    /// <summary>
    /// The 'Colleague' abstract class
    /// </summary>

    public abstract class Colleague
    {
        protected Mediator mediator;

        // Constructor

        public Colleague(Mediator mediator)
        {
            this.mediator = mediator;
        }
    }

    /// <summary>
    /// A 'ConcreteColleague' class
    /// </summary>

    public class ConcreteColleague1 : Colleague
    {
        // Constructor

        public ConcreteColleague1(Mediator mediator)
            : base(mediator)
        {
        }

        public void Send(string message)
        {
            mediator.Send(message, this);
        }

        public void Notify(string message)
        {
            Console.WriteLine("Colleague1 gets message: "
                + message);
        }
    }

    /// <summary>
    /// A 'ConcreteColleague' class
    /// </summary>

    public class ConcreteColleague2 : Colleague
    {
        // Constructor

        public ConcreteColleague2(Mediator mediator)
            : base(mediator)
        {
        }

        public void Send(string message)
        {
            mediator.Send(message, this);
        }

        public void Notify(string message)
        {
            Console.WriteLine("Colleague2 gets message: "
                + message);
        }
    }
}
`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
