import React from "react";
import { Link } from "react-router-dom";

export default function Entityframework() {
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
                    href="#modeling"
                  >
                    Modeling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="# querying"
                  >
                    Querying
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tracking"
                  >
                    Change Tracking
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#saving"
                  >
                    Saving
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#concurrency"
                  >
                    Concurrency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#transactions"
                  >
                    Transactions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#caching"
                  >
                    Caching
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#concurrency"
                  >
                    Concurrency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#conventions"
                  >
                    Built-in Conventions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#configurations"
                  >
                    Configurations
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#migrations"
                  >
                    Migrations
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
          <h3>Entity Framework</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Entity Framework est un mappeur relationnel objet (O/RM) qui
                permet aux d??veloppeurs .NET de travailler avec une base de
                donn??es ?? l'aide d'objets
              </p>
              <p>Fonctionnalit??s d'Entity Framework :</p>
              <ul>
                <li>Modeling</li>
                <li>Querying</li>
                <li>Change Tracking</li>
                <li>Saving</li>
                <li>Transactions</li>
                <li>Caching</li>
                <li>Built-in Conventions</li>
                <li>Configurations</li>
                <li>Migrations</li>
              </ul>
            </div>
          </article>
          <article id="modeling">
            <h6>Mod??lisation</h6>
            <p>
              EF (Entity Framework) cr??e un EDM (Entity Data Model) bas?? sur des
              entit??s POCO (Plain Old CLR Object) avec des propri??t??s get/set de
              diff??rents types de donn??es.
            </p>
          </article>
          <article id="querying">
            <h6>Querying</h6>
            <p>
              EF nous permet d'utiliser des requ??tes LINQ pour r??cup??rer les
              donn??es de la base de donn??es.
            </p>
          </article>
          <article id="tracking">
            <h6>Suivi des modifications</h6>
            <p>
              EF garde une trace des modifications apport??es aux instances des
              entit??s (valeurs de propri??t??) qui doivent ??tre soumises ?? la base
              de donn??es.
            </p>
          </article>
          <article id="saving">
            <h6>Enregistrement</h6>
            <p>
              EF ex??cute les commandes INSERT, UPDATE et DELETE dans la base de
              donn??es en fonction des modifications apport??es aux entit??s lors
              de l'appele du m??thode SaveChanges()
            </p>
          </article>
          <article id="concurrency">
            <h6>Concurrence</h6>
            <p>
              EF utilise la simultan??it?? optimiste par d??faut pour prot??ger
              l'??crasement des modifications apport??es par un autre utilisateur
              depuis que les donn??es ont ??t?? extraites de la base de donn??es.
            </p>
          </article>
          <article id="transactions">
            <h6>Transactions</h6>
            <p>EF effectue une gestion automatique des transactions</p>
          </article>
          <article id="caching">
            <h6>Mise en cache</h6>
            <p>
              EF inclut le premier niveau de mise en cache pr??t ?? l'emploi.
              Ainsi, des requ??tes r??p??t??es renverront les donn??es du cache au
              lieu d'atteindre la base de donn??es.
            </p>
          </article>
          <article id="conventions">
            <h6>Conventions</h6>
            <p>
              EF suit les conventions du mod??le de programmation de
              configuration et inclut un ensemble de r??gles par d??faut qui
              configurent automatiquement le mod??le EF.
            </p>
          </article>
          <article id="configurations">
            <h6>Configurations</h6>
            <p>
              EF nous permet de configurer le mod??le EF en utilisant Data
              Annotations ou bien Fluent API pour remplacer les conventions par
              d??faut.
            </p>
          </article>
          <article id="migrations">
            <h6>Migrations</h6>
            <p>
              EF fournit un ensemble de commandes de migration qui peuvent ??tre
              ex??cut??es sur la console pour cr??er ou g??rer un sch??ma de base de
              donn??es
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
