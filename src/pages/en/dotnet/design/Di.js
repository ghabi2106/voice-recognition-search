import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

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
                    href="#ioc"
                  >
                    Inversion of control
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#di"
                  >
                    Dependency Injection
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lifetime"
                  >
                    DI Lifecycle
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#demonstration"
                  >
                    Demonstration
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
          <h3>Dependency injection</h3>
          <article id="ioc">
            <h6>Inversion of Control</h6>
            <ul>
              <li>
                <p>
                  <strong>Definition</strong>:
                </p>
                <ul>
                  <li>
                    IoC is a design principle in which the control of object
                    creation, configuration, and management is shifted from the
                    object itself to a framework or container.
                  </li>
                  <li>
                    It "inverts" the traditional flow of control where an object
                    is responsible for managing its dependencies.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>Key Idea</strong>:
                </p>
                <ul>
                  <li>
                    Rather than an object creating its dependencies or managing
                    its lifecycle, these responsibilities are handed over to an
                    external framework.
                  </li>
                </ul>
              </li>
              <li>
                <p>
                  <strong>How It Works</strong>:
                </p>
                <ul>
                  <li>
                    IoC containers manage object instantiation and dependency
                    resolution.
                  </li>
                  <li>
                    Developers specify how objects and their dependencies are
                    related (usually through configuration or annotations), and
                    the IoC container handles the rest.
                  </li>
                </ul>
              </li>
            </ul>
          </article>
          <article id="di">
            <h6>Dependency Injection</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Definition</strong>:
                  </p>
                  <ul>
                    <li>
                      DI is a specific implementation of the IoC principle. It
                      focuses on providing objects (dependencies) to a class,
                      rather than the class creating them itself.
                    </li>
                    <li>It is a design pattern used to achieve IoC.</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Types of Dependency Injection :</strong>:
                  </p>
                  <ul>
                    <li>Constructor Injection</li>
                    <li>Property Injection</li>
                    <li>Method Injection</li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
          <article id="lifetime">
            <h6>DI Lifecycles</h6>
            <div>
              <p>
                The <strong>lifecycle of dependency injection (DI)</strong>{" "}
                refers to how the lifespan of an object (dependency) is managed
                by an IoC container. The lifecycle determines when an object is
                created, how long it is retained, and when it is destroyed.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Lifecycle</strong>
                    </th>
                    <th>
                      <strong>Behavior</strong>
                    </th>
                    <th>
                      <strong>Advantages</strong>
                    </th>
                    <th>
                      <strong>Disadvantages</strong>
                    </th>
                    <th>
                      <strong>Use Cases</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Transient</strong>
                    </td>
                    <td>Creates a new instance every time it is requested.</td>
                    <td>
                      - Complete isolation.
                      <br />- Avoids shared state issues.
                    </td>
                    <td>
                      - Higher memory and CPU usage due to frequent
                      instantiation.
                    </td>
                    <td>
                      - Lightweight and stateless objects.
                      <br />- Services that don’t need to maintain state between
                      calls.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scoped</strong>
                    </td>
                    <td>
                      Creates one instance per scope (e.g., HTTP request).
                      Shared within that scope.
                    </td>
                    <td>
                      - Balances resource usage and isolation.
                      <br />- Ensures consistency for a unit of work.
                    </td>
                    <td>
                      - Requires careful scope management in non-web
                      applications.
                    </td>
                    <td>
                      - Services tied to a single operation or HTTP request
                      (e.g., database context in web apps).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Singleton</strong>
                    </td>
                    <td>
                      Creates one instance and shares it throughout the
                      application lifetime.
                    </td>
                    <td>
                      - Minimizes resource usage for expensive objects.
                      <br />- Useful for shared state.
                    </td>
                    <td>
                      - Risk of memory leaks if not managed carefully.
                      <br />- Shared state issues in multithreaded environments.
                    </td>
                    <td>
                      - Configuration managers.
                      <br />- Logging services.
                      <br />- Caches and shared, immutable services.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Custom Lifecycle</strong>
                    </td>
                    <td>
                      Defines custom rules for creation and disposal based on
                      specific application requirements.
                    </td>
                    <td>
                      - Highly flexible.
                      <br />- Tailored to specific needs.
                    </td>
                    <td>
                      - Requires manual implementation and additional
                      complexity.
                    </td>
                    <td>
                      - Batch jobs.
                      <br />- Custom transaction lifecycles.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="demonstration">
            <h6>DI Demonstration</h6>
            <Highlight language="csharp">
              {`// Defining Services:
public interface IMyService { void DoWork(); }
public class MyService : IMyService { public void DoWork() => Console.WriteLine("Work done."); }

// Registering Services
var services = new ServiceCollection();
services.AddTransient<IMyService, MyService>(); // Transient
services.AddScoped<IMyService, MyService>();   // Scoped
services.AddSingleton<IMyService, MyService>(); // Singleton

var provider = services.BuildServiceProvider();

// Resolving Services
var transient1 = provider.GetService<IMyService>();
var transient2 = provider.GetService<IMyService>();
Console.WriteLine(object.ReferenceEquals(transient1, transient2)); // False: Different instances

using (var scope = provider.CreateScope())
{
    var scoped1 = scope.ServiceProvider.GetService<IMyService>();
    var scoped2 = scope.ServiceProvider.GetService<IMyService>();
    Console.WriteLine(object.ReferenceEquals(scoped1, scoped2)); // True: Same instance in scope
}

var singleton1 = provider.GetService<IMyService>();
var singleton2 = provider.GetService<IMyService>();
Console.WriteLine(object.ReferenceEquals(singleton1, singleton2)); // True: Same instance
`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
