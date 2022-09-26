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
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Dependency injection (DI) design pattern, which is a technique
                for achieving Inversion of Control (IoC) between classes and
                their dependencies.
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
            <table class="table table-bordered">
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
          <article id="demonstration">
            <h6>DI Demonstration</h6>
            <div>
              <p>We will create one type per lifetime option:</p>
              <Highlight language="csharp">
                {`using System;

namespace DependencyInjectionSample.Interfaces
{
    public interface IOperation
    {
        Guid OperationId { get; }
    }

    public interface IOperationTransient : IOperation
    {
    }

    public interface IOperationScoped : IOperation
    {
    }

    public interface IOperationSingleton : IOperation
    {
    }

    public interface IOperationSingletonInstance : IOperation
    {
    }
}`}
              </Highlight>
              <p>
                We implement these interfaces using a single class,{" "}
                <code>Operation</code>, that accepts a GUID in its constructor,
                or uses a new GUID if none is provided:
              </p>
              <Highlight language="csharp">
                {`using System;
using DependencyInjectionSample.Interfaces;
namespace DependencyInjectionSample.Classes
{
    public class Operation : IOperationTransient, IOperationScoped, IOperationSingleton, IOperationSingletonInstance
    {
        Guid _guid;
        public Operation() : this(Guid.NewGuid())
        {

        }

        public Operation(Guid guid)
        {
            _guid = guid;
        }

        public Guid OperationId => _guid;
    }
}`}
              </Highlight>
              <p>
                Next, in <code>ConfigureServices</code>, each type is added to
                the container according to its named lifetime:
              </p>
              <Highlight language="csharp">
                {`services.AddTransient<IOperationTransient, Operation>();
services.AddScoped<IOperationScoped, Operation>();
services.AddSingleton<IOperationSingleton, Operation>();
services.AddSingleton<IOperationSingletonInstance>(new Operation(Guid.Empty));
services.AddTransient<OperationService, OperationService>();`}
              </Highlight>
              <p>
                Note that the <code>IOperationSingletonInstance</code> service
                is using a specific instance with a known ID of{" "}
                <code>Guid.Empty</code>, so it will be clear when this type is
                in use. We have also registered an <code>OperationService</code>{" "}
                that depends on each of the other <code>Operation</code> types,
                so that it will be clear within a request whether this service
                is getting the same instance as the controller, or a new one,
                for each operation type. All this service does is expose its
                dependencies as properties, so they can be displayed in the
                view.
              </p>
              <Highlight language="csharp">
                {`using DependencyInjectionSample.Interfaces;

namespace DependencyInjectionSample.Services
{
    public class OperationService
    {
        public IOperationTransient TransientOperation { get; }
        public IOperationScoped ScopedOperation { get; }
        public IOperationSingleton SingletonOperation { get; }
        public IOperationSingletonInstance SingletonInstanceOperation { get; }

        public OperationService(IOperationTransient transientOperation,
            IOperationScoped scopedOperation,
            IOperationSingleton singletonOperation,
            IOperationSingletonInstance instanceOperation)
        {
            TransientOperation = transientOperation;
            ScopedOperation = scopedOperation;
            SingletonOperation = singletonOperation;
            SingletonInstanceOperation = instanceOperation;
        }
    }
}`}
              </Highlight>
              <p>
                To demonstrate the object lifetimes within and between separate
                individual requests to the application, the sample includes an{" "}
                <code>OperationsController</code> that requests each kind of{" "}
                <code>IOperation</code> type as well as an{" "}
                <code>OperationService</code>. The <code>Index</code> action
                then displays all of the controller’s and service’s{" "}
                <code>OperationId</code> values.
              </p>
              <Highlight language="csharp">
                {`using DependencyInjectionSample.Interfaces;
using DependencyInjectionSample.Services;
using Microsoft.AspNetCore.Mvc;

namespace DependencyInjectionSample.Controllers
{
    public class OperationsController : Controller
    {
        private readonly OperationService _operationService;
        private readonly IOperationTransient _transientOperation;
        private readonly IOperationScoped _scopedOperation;
        private readonly IOperationSingleton _singletonOperation;
        private readonly IOperationSingletonInstance _singletonInstanceOperation;

        public OperationsController(OperationService operationService,
            IOperationTransient transientOperation,
            IOperationScoped scopedOperation,
            IOperationSingleton singletonOperation,
            IOperationSingletonInstance singletonInstanceOperation)
        {
            _operationService = operationService;
            _transientOperation = transientOperation;
            _scopedOperation = scopedOperation;
            _singletonOperation = singletonOperation;
            _singletonInstanceOperation = singletonInstanceOperation;
        }

        public IActionResult Index()
        {
            // ViewBag contains controller-requested services
            ViewBag.Transient = _transientOperation;
            ViewBag.Scoped = _scopedOperation;
            ViewBag.Singleton = _singletonOperation;
            ViewBag.SingletonInstance = _singletonInstanceOperation;

            // Operation service has its own requested services
            ViewBag.Service = _operationService;
            return View();
        }
    }
}
`}
              </Highlight>
              <p>
                Now two separate requests are made to this controller action:
              </p>
              <img
                src="/img/dotnet/request1_di.png"
                alt="request1_di"
                style={{ maxWidth: "485px" }}
              />
              <img
                src="/img/dotnet/request2_di.png"
                alt="request2_di"
                style={{ maxWidth: "485px" }}
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
