import React from "react";
import { Link } from "react-router-dom";

export default function Struct() {
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
                    href="#struct"
                  >
                    Struct
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#record"
                  >
                    Record
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>Différence entre Struct et Class en C#</h3>
          <article className="" id="struct">
            <h6>Struct</h6>
            <div>
              <p>
                Les structs sont des versions allégées des classes. Ils sont des
                types valeur partagent de nombreuses fonctionnalités avec les
                classes, mais avec les limitations comme:
              </p>
              <ul>
                <li>
                  Struct ne peut pas avoir de constructeur par défaut ou de
                  destructeur.
                </li>
                <li>
                  Les structures sont des types de valeur et sont copiées lors
                  de l'affectation.
                </li>
                <li>
                  Une structure ne peut pas hériter d'une autre structure ou
                  classe, et elle ne peut pas être la base d'une classe
                </li>
                <li>
                  Les Struct ne peuvent pas être abstruct, il sont implicitement
                  sealed
                </li>
                <li>
                  Les membres de fonction dans une structure ne peuvent pas être
                  abstraits ou virtuels, et le modificateur{" "}
                  <code>override</code> n'est autorisé que pour les méthodes
                  override héritées de System.ValueType.
                </li>
                <li>Une structure peut implémenter des interfaces.</li>
              </ul>
              <p>
                Il est logique d'utiliser des structures dans les scénarios
                suivants combinés :
              </p>
              <ul>
                <li>quand les données sont simples</li>
                <li>peut avoir toutes les valeurs attribuées lors de sa création</li>
                <li>lorsque la performance est critique pour le système</li>
                <li>les objets sont de courte durée</li>
              </ul>
            </div>
          </article>
          <article className="" id="records">
            <h6>Record</h6>
            <div>
              <p>
                Record définit un reference-type immutable et se comporte comme
                un value-type.
              </p>
              <p>
                Les records prennent en charge l'héritage. On èvite seulement le
                quatrième étage d'héritage, on put le rendre <code>sealed</code>
                .
              </p>
              <img src="/img/record1.png" alt="record" />
              <img src="/img/record2.png" alt="record" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
