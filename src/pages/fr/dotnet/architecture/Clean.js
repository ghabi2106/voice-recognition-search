import React from "react";
import { Link } from "react-router-dom";

export default function Clean() {
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
                    href="#monolithic"
                  >
                    Monolithic
                  </a>
                </li>
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
                    href="#application-core"
                  >
                    Application Core
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#infrastructure"
                  >
                    Infrastructure
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ui"
                  >
                    UI Layer
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
                    to="/mvc"
                  >
                    MVC
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/clean"
                  >
                    Clean Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cqrs"
                  >
                    CQRS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/ddd"
                  >
                    DDD
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
          <h3>Clean Architecture</h3>
          <article id="monolithic">
            <h6>Monolithic</h6>
            <p>
              une application dont l'ensemble du code et des fonctionnalités est
              implémenté dans un seul programme.
            </p>
          </article>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Une architecture propre place la logique métier(BL) et le modèle
                d'application(Entities) au centre de l'application. Au lieu de
                faire dépendre la logique métier(BL) de l'accès aux données(DA)
                ou d'autres problèmes d'infrastructure, cette dépendance est
                inversée : les détails de l'infrastructure et de
                l'implémentation dépendent du noyau d'application(Application
                Core Layer). Cette fonctionnalité est obtenue en définissant des
                abstractions, ou interfaces, dans le noyau d'application, qui
                sont ensuite implémentées par des types définis dans la couche
                d'infrastructure(Infrastructure Layer).
              </p>
              <div className="d-flex">
                <img
                  className="img-dimension"
                  src="/img/dotnet/clean-architecture-layers.png"
                  alt="Clean architecture layers"
                />
                <img
                  src="/img/dotnet/clean-architecture-repos.PNG"
                  alt="Clean architecture repos"
                />
              </div>
            </div>
          </article>
          <article id="application-core">
            <h6>Application Core</h6>
            <ul>
              <li>Entities (business model classes that are persisted)</li>
              <li>Interfaces</li>
              <li>Services</li>
            </ul>
          </article>
          <article id="infrastructure">
            <h6>Infrastructure</h6>
            <ul>
              <li>
                <Link to="/entityframework">EF Core</Link> types (
                <code>DbContext</code>, <code>Migration</code>)
              </li>
              <li>Data access implementation types (Repositories)</li>
              <li>
                Infrastructure-specific services (for example,{" "}
                <code>FileLogger</code> or <code>SmtpNotifier</code>)
              </li>
            </ul>
          </article>
          <article id="ui">
            <h6>UI Layer</h6>
            <ul>
              <li>
                <Link to="/controllers">Controllers</Link>
              </li>
              <li>Filters</li>
              <li>
                <Link to="/mvc">Views</Link>
              </li>
              <li>ViewModels</li>
              <li>Startup</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
