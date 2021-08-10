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
          <h3>Différence entre .Net sandard et .Net Core</h3>
          <article className="" id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Dans une conception orientée objet, les classes doivent être
                conçues de manière faiblement couplée. Un couplage lâche
                signifie que les changements dans une classe ne doivent pas
                forcer d'autres classes à changer, de sorte que l'ensemble de
                l'application peut devenir maintenable et extensible.
              </p>
              <img src="/img/ioc-steps.png" alt="ioc steps" />
              <img
                src="/img/principles-and-patterns.png"
                alt="principles and patterns"
              />
            </div>
          </article>
          <article className="" id="ioc">
            <h6>Inversion de contrôle</h6>
            <p>
              Le principe IoC suggère d'inverser le contrôle. Cela signifie de
              déléguer le contrôle à une autre classe.
            </p>
          </article>
          <article className="" id="dip">
            <h6>DIP</h6>
            <p>
              DIP est l'un des principes orientés objet SOLID. Les modules de
              haut niveau ne doivent pas dépendre des modules de bas niveau. Les
              deux devraient dépendre de l'abstraction.
            </p>
          </article>
          <article className="" id="di">
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
          <article className="" id="ioc-container">
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
          <article className="" id="lifetime">
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
                  <td>TransientLifetimeManager</td>
                  <td>
                    Crée un nouvel objet du type demandé chaque fois que vous
                    appelez la méthode Resolve ou ResolveAll.
                  </td>
                </tr>
                <tr>
                  <td>ContainerControlledLifetimeManager</td>
                  <td>
                    Crée un objet singleton la première fois que vous appelez la
                    méthode Resolve ou ResolveAll, puis renvoie le même objet
                    lors des appels Resolve ou ResolveAll suivants.
                  </td>
                </tr>
                <tr>
                  <td>HierarchicalLifetimeManager</td>
                  <td>
                    Identique au ContainerControlledLifetimeManager, la seule
                    différence est que le conteneur enfant peut créer son propre
                    objet singleton. Les conteneurs parent et enfant ne
                    partagent pas le même objet singleton.
                  </td>
                </tr>
                <tr>
                  <td>PerResolveLifetimeManager</td>
                  <td>
                    Similaire au TransientLifetimeManager, mais il réutilise le
                    même objet de type enregistré dans le graphe d'objet
                    récursif.
                  </td>
                </tr>
                <tr>
                  <td>PerThreadLifetimeManager</td>
                  <td>
                    Crée un objet singleton par thread. Il renvoie différents
                    objets du conteneur sur différents threads.
                  </td>
                </tr>
                <tr>
                  <td>ExternallyControlledLifetimeManager</td>
                  <td>
                    Il ne conserve qu'une faible référence des objets qu'il crée
                    lorsque vous appelez la méthode Resolve ou ResolveAll. Il ne
                    maintient pas la durée de vie des objets forts qu'il crée et
                    vous permet, à vous ou au ramasse-miettes, de contrôler la
                    durée de vie des objets.Il vous permet de créer votre propre
                    gestionnaire de durée de vie personnalisé.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
