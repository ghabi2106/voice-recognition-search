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
                    href="#di"
                  >
                  Dependency Injection
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
          <article id="di">
            <h6>Introduction</h6>
            <table>
              <thead>
                <tr>
                  <th>
                    <strong>Aspect</strong>
                  </th>
                  <th>
                    <strong>Description</strong>
                  </th>
                  <th>
                    <strong>Exemple</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Définition</strong>
                  </td>
                  <td>
                    Principe de conception où les dépendances d'un objet sont
                    fournies plutôt que créées par l'objet lui-même.
                  </td>
                  <td>
                    Au lieu que la classe <code>ClientService</code> crée une
                    instance de <code>DataService</code>, elle reçoit une
                    instance via le constructeur.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Types</strong>
                  </td>
                  <td>
                    1. Injection par constructeur
                    <br />
                    2. Injection par propriété
                    <br />
                    3. Injection par méthode
                  </td>
                  <td>
                    1.{" "}
                    <code>public ClientService(IDataService dataService)</code>
                    <br />
                    2.{" "}
                    <code>
                      public IDataService DataService {"{"} get; set; {"}"}
                    </code>
                    <br />
                    3.{" "}
                    <code>
                      public void SetDataService(IDataService dataService)
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Avantages</strong>
                  </td>
                  <td>
                    - Découplage du code
                    <br />- Testabilité améliorée
                    <br />- Maintenance simplifiée
                  </td>
                  <td>
                    Vous pouvez changer la dépendance <code>DataService</code>{" "}
                    sans modifier <code>ClientService</code>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Exemple dans .NET Core</strong>
                  </td>
                  <td>
                    - Configurez dans <code>Startup.cs</code> :{" "}
                    <code>
                      services.AddTransient&lt;IDataService, DataService&gt;();
                    </code>
                    <br />- Utilisation dans un contrôleur via le constructeur.
                  </td>
                  <td>
                    <code>
                      csharp public class MyController {"{"} private readonly
                      IDataService _dataService; public
                      MyController(IDataService dataService) {"{"} _dataService
                      = dataService; {"}"}
                      {"}"}
                    </code>
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Rôle dans l'architecture</strong>
                  </td>
                  <td>
                    Favorise une architecture plus modulaire et facilite
                    l'injection d'objets nécessaires dans les composants sans
                    les coupler directement à leur création.
                  </td>
                  <td>
                    Permet de gérer les dépendances de manière centralisée,
                    comme les services ou les repositories.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="ioc">
            <h6>Inversion de contrôle</h6>
            <table>
              <thead>
                <tr>
                  <th>
                    <strong>Aspect</strong>
                  </th>
                  <th>
                    <strong>Injection de Dépendances (DI)</strong>
                  </th>
                  <th>
                    <strong>Inversion de Contrôle (IoC)</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Définition</strong>
                  </td>
                  <td>
                    Technique permettant d'injecter les dépendances d'un objet
                    plutôt que de les créer à l'intérieur de l'objet.
                  </td>
                  <td>
                    Principe général où le contrôle du flux d'exécution est
                    inversé par rapport à l'approche classique.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>But principal</strong>
                  </td>
                  <td>
                    Fournir des dépendances externes à une classe pour éviter le
                    couplage direct.
                  </td>
                  <td>
                    Permettre à un conteneur ou framework de gérer le cycle de
                    vie et l'exécution des objets dans une application.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Relation</strong>
                  </td>
                  <td>
                    L'injection de dépendances est une forme spécifique
                    d'inversion de contrôle.
                  </td>
                  <td>
                    L'inversion de contrôle est le concept global, et
                    l'injection de dépendances est une implémentation de ce
                    principe.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Exemple</strong>
                  </td>
                  <td>
                    Passer une dépendance à travers un constructeur ou une
                    méthode.
                  </td>
                  <td>
                    Utilisation d'un framework IoC comme Unity ou Autofac pour
                    gérer l'injection de dépendances dans une application.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Objectif</strong>
                  </td>
                  <td>
                    Réduire le couplage entre les classes en permettant à un
                    conteneur de fournir les dépendances au lieu des classes
                    elles-mêmes.
                  </td>
                  <td>
                    Découpler le code de la gestion des dépendances et du
                    contrôle de l'exécution, souvent utilisé pour centraliser
                    l'initialisation des objets.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="lifetime">
            <h6>Lifetime managers</h6>
            <table>
              <thead>
                <tr>
                  <th>
                    <strong>Cycle de Vie</strong>
                  </th>
                  <th>
                    <strong>Description</strong>
                  </th>
                  <th>
                    <strong>Quand l'utiliser</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Transient</strong>
                  </td>
                  <td>Nouvelle instance à chaque demande</td>
                  <td>
                    Objets légers, sans état ou indépendants entre les appels.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Scoped</strong>
                  </td>
                  <td>Une instance par portée (ex : requête HTTP)</td>
                  <td>
                    Objets liés à une session ou une requête, mais pas à long
                    terme.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Singleton</strong>
                  </td>
                  <td>
                    Une seule instance partagée pendant toute l'application
                  </td>
                  <td>
                    Objets globaux, état partagé, ou services coûteux à créer.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Custom</strong>
                  </td>
                  <td>Cycle de vie personnalisé</td>
                  <td>
                    Pour des cas spécifiques qui ne rentrent pas dans les autres
                    catégories.
                  </td>
                </tr>
              </tbody>
            </table>
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
