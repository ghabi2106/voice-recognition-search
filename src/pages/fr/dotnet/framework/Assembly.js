import React from "react";
import { Link } from "react-router-dom";

export default function Assembly() {
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
                    href="#assembly"
                  >
                    Assembly
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#types"
                  >
                    Assembly Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#parts"
                  >
                    Assembly parts
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
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
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
          <h3>Assembly</h3>
          <article id="assembly">
            <h6>Qu'est-ce qu'un assembly ?</h6>
            <p>
              Un assembly est un ensemble d'unités logiques. Les unités logiques
              font référence aux types et aux ressources nécessaires pour créer
              une application et les déployer à l'aide du framework .Net. Le CLR
              utilise ces informations pour les implémentations de type.
              Fondamentalement, Assembly est une collection d'exe et de DLL. Il
              est portable et exécutable.
            </p>
          </article>
          <article id="types">
            <h6>Quels sont les différents types d'assembly?</h6>
            <ul>
              <li>
                <strong>Private Assembly</strong>, comme son nom l'indique,
                n'est accessible qu'à l'application. Il est installé dans le
                répertoire d'installation de l'application.
              </li>
              <li>
                <strong>Shared Assembly</strong> peut être partagé par plusieurs
                applications. Il est installé dans le GAC.
              </li>
            </ul>
          </article>
          <article id="parts">
            <h6>Expliquez les différentes parties d'un assembly.</h6>
            <ul>
              <li>
                <strong>Manifest</strong> – Il contient les informations sur la
                version d'un assembly. Il est également appelé métadonnées
                d'assemblage.
              </li>
              <li>
                <strong>Type Metadata</strong> – Informations binaires du programme.
              </li>
              <li>
                <strong>MSIL</strong> – Code de langue intermédiaire Microsoft.
              </li>
              <li>
                <strong>Resources</strong> – Liste des fichiers associés.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
