import React from "react";
import { Link } from "react-router-dom";

export default function Covariance() {
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
                    href="#anonyme"
                  >
                    Anonymous Type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dynamic"
                  >
                    Dynamic Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#nullable"
                  >
                    Nullable Types
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
          <h3>Data Types</h3>
          <article id="anonymous">
            <h6>Type anonyme</h6>
            <div>
              <p>
                Un type anonyme est un type (classe) sans nom qui ne peut
                contenir que des propriétés publiques en lecture seule.
              </p>
              <img src="/img/type-anonymous.PNG" alt="type anonymous" />
            </div>
          </article>
          <article id="dynamic">
            <h6>Types dynamiques</h6>
            <div>
              <p>
                Un dynamictype échappe à la vérification de type au moment de la
                compilation ; au lieu de cela, il résout le type au moment de
                l'exécution.
              </p>
              <ul>
                <li>
                  Les types dynamiques changent de type au moment de l'exécution
                  en fonction de la valeur attribuée.
                </li>
                <li>
                  Les variables de type dynamique sont converties implicitement
                  en d'autres types.
                </li>
              </ul>
              <img src="/img/type-dynamic.PNG" alt="type dynamic" />
            </div>
          </article>
          <article id="nullable">
            <h6>Types Nullables</h6>
            <div>
              <p>
                Comme on le sait, un type valeur ne peut pas se voir
                attribuer une valeur nulle. Par exemple, int i = null vous
                donnera une erreur de compilation.
              </p>
              <img
                src="/img/type-nullable.PNG"
                alt="type nullable"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
