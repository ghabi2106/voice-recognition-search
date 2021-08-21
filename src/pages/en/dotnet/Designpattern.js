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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <article className="" id="design-pattern">
            <h6>Design Pattern</h6>
            <div>
              <p>
                Design Pattern provides low-level solutions related to
                implementation, of commonly occurring object-oriented problems.
                In other words, design pattern suggests a specific
                implementation for the specific object-oriented programming
                problem. For example, if you want to create a class that can
                only have one object at a time, then you can use the Singleton
                design pattern which suggests the best way to create a class
                that can only have one object.
              </p>
              <ul>
                <li>
                  Creational patterns provide various object creation
                  mechanisms, which increase flexibility and reuse of existing
                  code.
                  <ul>
                    <li>Singleton</li>
                    <li>Factory Method</li>
                    <li>Abstract Factory</li>
                  </ul>
                </li>
                <li>
                  Structural patterns explain how to assemble objects and
                  classes into larger structures while keeping these structures
                  flexible and efficient.
                  <ul>
                    <li>Proxy</li>
                    <li>Bridge</li>
                    <li>Adapter</li>
                  </ul>
                </li>
                <li>
                  Behavioral design patterns are concerned with algorithms and
                  the assignment of responsibilities between objects.
                  <ul>
                    <li>Mediator</li>
                    <li>Command</li>
                    <li>Observer</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article className="" id="design-principle">
            <h6>Design principle</h6>
            <p>
              Design principles provide high level guidelines to design better
              software applications. They do not provide implementation
              guidelines and are not bound to any programming language. The
              SOLID (SRP, OCP, LSP, ISP, DIP) principles are one of the most
              popular sets of design principles.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
