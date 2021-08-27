import React from "react";
import { Link } from "react-router-dom";

export default function Enumindexer() {
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
                    href="#enum"
                  >
                    Enum
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#indexer"
                  >
                    Indexer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#generic"
                  >
                    Generic
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
          <h3>Énumération and Indexer</h3>
          <article id="enum">
            <h6>Énumération</h6>
            <div>
              <p>
                <code>enum</code> est une "classe" spéciale qui représente un
                groupe de constantes(variables non modifiables/en lecture
                seule).
              </p>
              <img src="/img/dotnet/type-enum.PNG" alt="type enum" />
            </div>
          </article>
          <article id="indexer">
            <h6>Indexeur</h6>
            <div>
              <p>
                Un indexeur est un type spécial de propriété qui permet
                d'accéder à une classe ou à une structure de la même manière
                qu'un tableau pour sa collection interne. C'est la même chose
                que la propriété sauf qu'elle est définie avec un{" "}
                <code>this</code>mot-clé avec des crochets et des paramètres.
              </p>
              <ul>
                <li>L'indexeur n'autorise pas les paramètres de référence et de sortie.</li>
                <li>L'indexeur peut être surchargé.</li>
                <li>L'indexeur peut également être générique.</li>
              </ul>
              <img src="/img/dotnet/indexer.PNG" alt="indexer" />
            </div>
          </article>
          <article id="generic">
            <h6>Génériques</h6>
            <div>
              <p>
                Les génériques augmentent la réutilisabilité du code. On n'a pas
                besoin d'écrire du code pour gérer différents types de données.
              </p>
              <img src="/img/dotnet/generics.png" alt="generics" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
