import React from "react";
import { Link } from "react-router-dom";

export default function Solid() {
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
                    href="#solid"
                  >
                    SOLID principle
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#s"
                  >
                    Single-responsibility
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#o"
                  >
                    Open-closed
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#l"
                  >
                    Liskov substitution
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#i"
                  >
                    Interface segregation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#d"
                  >
                    Dependency inversion
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
          <h3>S.O.L.I.D. Principles</h3>
          <article id="solid">
            <h6>SOLID principles</h6>
            <div>
              <p>
                SOLID is a{" "}
                <strong>dispositif mnémotechnique pour 5 principes de conception</strong> of
                object-oriented programs (OOP) that result in readable,
                adaptable, and scalable code. SOLID can be applied to any OOP
                program.
              </p>
              <p>The 5 principles of SOLID are:</p>
              <ul>
                <li>
                  <strong>S</strong>ingle-responsibility principle
                </li>
                <li>
                  <strong>O</strong>pen-closed principle
                </li>
                <li>
                  <strong>L</strong>iskov substitution principle
                </li>
                <li>
                  <strong>I</strong>nterface segregation principle
                </li>
                <li>
                  <strong>D</strong>ependency inversion principle
                </li>
              </ul>
            </div>
          </article>
          <article id="s">
            <h6>
              <strong>S</strong>: Single-responsibility principle
            </h6>
            <p>
              <strong>Single Responsibility (SRP)</strong> ensures that every
              module or class should be responsible for single functionality
              supported by software system. In other words, Every class should
              have one and only reason to change it. <br /> For example, In
              ASP.NET MVC <code>HomeController</code> class should be
              responsible related to Home Page functionality of software system.
            </p>
          </article>
          <article id="o">
            <h6>
              <strong>O</strong>: Open-closed principle
            </h6>
            <p>
              <strong>Open Close Principle (OCP)</strong> states or ensures that
              A class, component or entity should be open for extension but
              close for modification. In detail, We can extend any class via
              Interface, Inheritance or Composition whenever it's required
              instead of opening a class and modifying it's code.
              <br />
              For example, suppose you have implemented a functionality to
              calculate area of Rectangle and after some time you need to
              calculate the area of Square, then In this case you should not
              modify your original class code to add extra code for square.
              Instead you should create one base class initially and now you
              should extend this base class by your square class.
            </p>
          </article>
          <article id="l">
            <h6>
              <strong>L</strong>: Liskov substitution principle
            </h6>
            <p>
              <strong>Liskov Substitution Principle (LSP)</strong> states that
              Objects in a program can be replaced by the instances of their
              subtypes without modifying the correctness of a program. <br />
              In other words, if A is subtype of B then instances of B may be
              replaced by the instances of A without altering the program
              correctness.
            </p>
          </article>
          <article id="i">
            <h6>
              <strong>I</strong>: Interface segregation principle
            </h6>
            <p class="answer">
              <strong>Interface Segregation Principle (ISP)</strong> states that
              use many client specific interfaces instead of one general purpose
              interface.
              <br />
              In other words No client should be forced to implement other
              methods which it does not require. It means it's better to create
              a separate interface and allow your classes to implement multiple
              interfaces.
            </p>
          </article>
          <article id="d">
            <h6>
              <strong>D</strong>: Dependency inversion principle
            </h6>
            <div>
              <p>
                The <strong>dependency inversion principle</strong> (DIP) has
                two parts:
              </p>
              <ol>
                <li>
                  High-level modules should not depend on low-level modules.
                  Instead, both should depend on abstractions (interfaces)
                </li>
                <li>
                  Abstractions should not depend on details. Details (like
                  concrete implementations) should depend on abstractions.
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
