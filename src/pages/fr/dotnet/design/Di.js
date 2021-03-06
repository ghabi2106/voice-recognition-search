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
                Dans une conception orient??e objet, les classes doivent ??tre
                con??ues de mani??re faiblement coupl??e. Un couplage l??che
                signifie que les changements dans une classe ne doivent pas
                forcer d'autres classes ?? changer, de sorte que l'ensemble de
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
            <h6>Inversion de contr??le</h6>
            <p>
              Le principe IoC sugg??re d'inverser le contr??le. Cela signifie de
              d??l??guer le contr??le ?? une autre classe.
            </p>
          </article>
          <article id="dip">
            <h6>DIP</h6>
            <p>
              DIP est l'un des principes orient??s objet SOLID. Les modules de
              haut niveau ne doivent pas d??pendre des modules de bas niveau. Les
              deux devraient d??pendre de l'abstraction.
            </p>
          </article>
          <article id="di">
            <h6>DI</h6>
            <div>
              <p>
                L'injection de d??pendance (DI) est un mod??le de conception
                utilis?? pour impl??menter l'IoC. Il permet la cr??ation d'objets
                d??pendants en dehors d'une classe et fournit ces objets ?? une
                classe de diff??rentes mani??res.
              </p>
              <p>Types d'injection de d??pendance :</p>
              <ul>
                <li>Injection de constructeur</li>
                <li>Injection de propri??t??</li>
                <li>Injection de m??thode</li>
              </ul>
            </div>
          </article>
          <article id="ioc-container">
            <h6>IoC Container</h6>
            <div>
              <p>
                IoC Container est un framework pour la mise en ??uvre de
                l'injection automatique de d??pendances. Il g??re la cr??ation
                d'objets et sa dur??e de vie, et injecte ??galement des
                d??pendances ?? la classe.
              </p>
              <p>Il existe de nombreux conteneurs</p>
              <ul>
                <li>Unit??</li>
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
                  <th>Gestionnaire ?? vie</th>
                  <th>La description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>AddSingleton</td>
                  <td>
                    Si un service est enregistr?? avec Singleton life ,
                    l'instance de ce service n'est cr????e qu'une seule fois et la
                    m??me instance de ce service est ensuite utilis??e dans
                    l'ensemble de l'application.
                  </td>
                </tr>
                <tr>
                  <td>AddScoped</td>
                  <td>
                    Si un service est enregistr?? avec Scoped life , une nouvelle
                    instance de ce service est cr????e pour chaque demande.
                  </td>
                </tr>
                <tr>
                  <td>AddTransient</td>
                  <td>
                    Si un service est enregistr?? avec Transient life , une
                    nouvelle instance de ce service est toujours cr????e chaque
                    fois que le service est demand??.
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
