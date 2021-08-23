import React from "react";
import { Link } from "react-router-dom";

export default function Di() {
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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ioc"
                  >
                    Inversion of control
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#dip"
                  >
                    DIP
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#di"
                  >
                    DI
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ioc-container"
                  >
                    IoC Container
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lifetime"
                  >
                    Lifetime manager
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
                    to="/solid"
                  >
                    Solid
                  </Link>
                </li>
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
          <h3>Dependency injection</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                In an object-oriented world you create flexible applications by
                combining objects. You'll want to keep those objects loosely
                coupled, though, so that a change in one class doesn't force you
                to rewrite every class. Here's how to keep them loosely coupled.
              </p>
              <img src="/img/dotnet/ioc-steps.png" alt="ioc steps" />
              <img
                src="/img/dotnet/principles-and-patterns.png"
                alt="principles and patterns"
              />
            </div>
          </article>
          <article id="ioc">
            <h6>Inversion of Control</h6>
            <p>
              The IoC principle suggests to invert the control. This means to
              delegate the control to another class.
            </p>
          </article>
          <article id="dip">
            <h6>DIP</h6>
            <p>
              DIP is one of the SOLID object-oriented principle. High-level
              modules should not depend on low-level modules. Both should depend
              on the abstraction.
            </p>
          </article>
          <article id="di">
            <h6>DI</h6>
            <div>
              <p>
                Dependency Injection (DI) is a design pattern used to implement
                IoC. It allows the creation of dependent objects outside of a
                class and provides those objects to a class through different
                ways
              </p>
              <p>Types of Dependency Injection :</p>
              <ul>
                <li>Constructor Injection</li>
                <li>Property Injection</li>
                <li>Method Injection</li>
              </ul>
            </div>
          </article>
          <article id="ioc-container">
            <h6>IoC Container</h6>
            <div>
              <p>
                IoC Container is a framework for implementing automatic
                dependency injection. It manages object creation and it's
                life-time, and also injects dependencies to the class.
              </p>
              <p>There are many containers available for .NET</p>
              <ul>
                <li>Unity</li>
                <li>Autofac</li>
                <li>Ninject</li>
              </ul>
            </div>
          </article>
          <article id="lifetime">
            <h6>Lifetime managers</h6>
            <table>
              <tbody>
                <tr>
                  <th>Parameter</th>
                  <th>Add Transient</th>
                  <th>Add Scoped</th>
                  <th>Add Singleton</th>
                </tr>
                <tr>
                  <td>
                    <strong>Meaning</strong>
                  </td>
                  <td>
                    Transient lifetime services are created each time when they
                    are requested.
                  </td>
                  <td>
                    Scoped lifetime services are created once per request.
                  </td>
                  <td>
                    Singleton lifetime services are created only the first time
                    when they are requested (or when ConfigureServices is run if
                    you specify an instance there).
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Description</strong>
                  </td>
                  <td>
                    It means the Transient lifetime service creates a new
                    instance for every controller/service as well as for every
                    request and every user.
                  </td>
                  <td>
                    It means the Scoped objects are the same within a request,
                    but different across different requests.
                  </td>
                  <td>
                    It means the Singleton lifetime service creates the instance
                    for the first request then the same is available throughout
                    the application and for each subsequent request.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Used In</strong>
                  </td>
                  <td>
                    This lifetime works best for lightweight and stateless
                    services.
                  </td>
                  <td>
                    This lifetime works best for applications which have
                    different behavior per user.
                  </td>
                  <td>
                    This lifetime used, when Singleton implementation is
                    required.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Syntax</strong>
                  </td>
                  <td>services.AddTransient()</td>
                  <td>services.AddScoped()</td>
                  <td>services.AddSingleton()</td>
                </tr>
                <tr>
                  <td>
                    <strong>Disposed</strong>
                  </td>
                  <td>End of request</td>
                  <td>End of request</td>
                  <td>App shutdown</td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
