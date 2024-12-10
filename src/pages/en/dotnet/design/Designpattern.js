import React from "react";
import { Link } from "react-router-dom";

export default function Designpattern() {
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
                    href="#design-pattern"
                  >
                    Design Pattern
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#design-principle"
                  >
                    Design Principle
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
        <section id="design-pattern">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>Design Principle vs Design Pattern</h3>
          <article id="design-pattern">
            <h6>Design Pattern</h6>
            <div>
              <p>
                Design Pattern provides low-level solutions related to
                implementation, of commonly occurring object-oriented problems.
                <br />
                They help create flexible, scalable, and maintainable systems.
              </p>
              <ul>
                <li>
                  <strong>Creational patterns</strong>: Deal with object
                  creation
                  <ul>
                    <li>Singleton</li>
                    <li>Factory Method</li>
                    <li>Abstract Factory</li>
                  </ul>
                </li>
                <li>
                  <strong>Structural patterns</strong>: Organize objects or
                  classes.
                  <ul>
                    <li>Proxy</li>
                    <li>Bridge</li>
                    <li>Adapter</li>
                  </ul>
                </li>
                <li>
                  <strong>Behavioral patterns</strong>: Handle object
                  interaction and responsibility
                  <ul>
                    <li>Mediator</li>
                    <li>Command</li>
                    <li>Observer</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article id="design-principle">
            <h6>Design principle</h6>
            <div>
              <p>
                Design principles provide high level guidelines to design better
                software applications. <br />
                They do not provide implementation guidelines and are not bound
                to any programming language.
              </p>
              <ul>
                <li>
                  <strong>SOLID</strong>: A set of five principles for
                  object-oriented design (Single Responsibility, Open/Closed,
                  Liskov Substitution, Interface Segregation, Dependency
                  Inversion).
                </li>
                <li>
                  <strong>DRY (Don't Repeat Yourself)</strong>: Avoid code
                  duplication to improve maintainability.
                </li>
                <li>
                  <strong>KISS (Keep It Simple, Stupid)</strong>: Keep solutions
                  as simple as possible.
                </li>
                <li>
                  <strong>YAGNI (You Aren't Gonna Need It)</strong>: Don't add
                  functionality until necessary.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
