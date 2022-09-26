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
                le modèle de conception logicielle d’injection de dépendances,
                technique qui permet d’obtenir une inversion de contrôle entre
                les classes et leurs dépendances.
              </p>
              <img src="/img/dotnet/ioc-steps.png" alt="ioc steps" />
              <img
                src="/img/dotnet/principles-and-patterns.png"
                alt="principles and patterns"
              />
            </div>
          </article>
          <article id="ioc">
            <h6>Inversion de contrôle</h6>
            <p>
              Le principe IoC suggère d'inverser le contrôle. Cela signifie de
              déléguer le contrôle à une autre classe.
            </p>
          </article>
          <article id="dip">
            <h6>DIP</h6>
            <p>
              DIP est l'un des principes orientés objet SOLID. Les modules de
              haut niveau ne doivent pas dépendre des modules de bas niveau. Les
              deux devraient dépendre de l'abstraction.
            </p>
          </article>
          <article id="di">
            <h6>DI</h6>
            <div>
              <p>
                L'injection de dépendance (DI) est un modèle de conception
                utilisé pour implémenter l'IoC. Il permet la création d'objets
                dépendants en dehors d'une classe et fournit ces objets à une
                classe de différentes manières.
              </p>
              <p>Types d'injection de dépendance :</p>
              <ul>
                <li>Injection de constructeur</li>
                <li>Injection de propriété</li>
                <li>Injection de méthode</li>
              </ul>
            </div>
          </article>
          <article id="ioc-container">
            <h6>IoC Container</h6>
            <div>
              <p>
                IoC Container est un framework pour la mise en œuvre de
                l'injection automatique de dépendances. Il gère la création
                d'objets et sa durée de vie, et injecte également des
                dépendances à la classe.
              </p>
              <p>Il existe de nombreux conteneurs</p>
              <ul>
                <li>Unité</li>
                <li>Autofac</li>
                <li>Ninject</li>
              </ul>
            </div>
          </article>
          <article id="lifetime">
            <h6>Lifetime managers</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Gestionnaire à vie</th>
                  <th>La description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AddSingleton</td>
                  <td>
                    Si un service est enregistré avec Singleton life ,
                    l'instance de ce service n'est créée qu'une seule fois et la
                    même instance de ce service est ensuite utilisée dans
                    l'ensemble de l'application.
                  </td>
                </tr>
                <tr>
                  <td>AddScoped</td>
                  <td>
                    Si un service est enregistré avec Scoped life , une nouvelle
                    instance de ce service est créée pour chaque demande.
                  </td>
                </tr>
                <tr>
                  <td>AddTransient</td>
                  <td>
                    Si un service est enregistré avec Transient life , une
                    nouvelle instance de ce service est toujours créée chaque
                    fois que le service est demandé.
                  </td>
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
