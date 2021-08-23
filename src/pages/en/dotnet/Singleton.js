import React from "react";
import { Link } from "react-router-dom";

export default function Singleton() {
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
                    href="#sigleton"
                  >
                    Singleton
                  </a>
                </li>
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
                    href="#observer"
                  >
                    Observer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#command"
                  >
                    Command
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
                    to="/designpattern"
                  >
                    Design Pattern
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
          <h3>Singleton Mediator Observer Command</h3>
          <article id="singleton">
            <h6>Singleton</h6>
            <p>
              Singleton is a creational design pattern that lets you ensure that
              a class has only one instance, while providing a global access
              point to this instance.
            </p>
          </article>
          <article id="mediator">
            <h6>Mediator</h6>
            <p>
              Mediator is a behavioral design pattern that lets you reduce
              chaotic dependencies between objects. The pattern restricts direct
              communications between the objects and forces them to collaborate
              only via a mediator object.
            </p>
          </article>
          <article id="observer">
            <h6>Observer</h6>
            <p>
              Observer is a behavioral design pattern that lets you define a
              subscription mechanism to notify multiple objects about any events
              that happen to the object they’re observing.
            </p>
          </article>
          <article id="command">
            <h6>Command</h6>
            <p>
              Command is a behavioral design pattern that turns a request into a
              stand-alone object that contains all information about the
              request. This transformation lets you pass requests as a method
              arguments, delay or queue a request’s execution, and support
              undoable operations.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
