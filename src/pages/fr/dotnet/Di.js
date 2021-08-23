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
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Dans une conception orientée objet, les classes doivent être
                conçues de manière faiblement couplée. Un couplage lâche
                signifie que les changements dans une classe ne doivent pas
                forcer d'autres classes à changer, de sorte que l'ensemble de
                l'application peut devenir maintenable et extensible.
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
        </section>
      </div>
    </>
  );
}
