import React from "react";
import { Link } from "react-router-dom";

export default function Statements() {
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
                    href="#partial"
                  >
                    partial type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lock"
                  >
                    lock
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
          <h3>Mots clés d'instruction</h3>
          <article id="partial">
            <h6>partial type</h6>
            <p>
              Les définitions de type partiel permettent de fractionner en
              plusieurs fichiers la définition d’une classe, d’une structure,
              d’une interface ou d’un enregistrement.
            </p>
          </article>
          <article id="lock">
            <h6>lock</h6>
            <p>
              Le mot-clé Lock garantit qu'un thread exécute un morceau de code à
              la fois. Le mot-clé lock garantit qu'un thread n'entre pas dans
              une section critique de code alors qu'un autre thread se trouve
              dans cette section
            </p>
          </article>
          <article id="yield">
            <h6>yield</h6>
            <div>
              <p>
                Utilisez une instruction <code>yield return</code> pour
                retourner chaque élément un par un dans un{" "}
                <code>IEnumerable</code> ou <code>Inumerator</code> en utilisant
                par exemple <code></code>
                freach
              </p>
              <ul>
                <li>
                  Il ne peut pas y avoir d'instruction <code>yield return</code>{" "}
                  dans un bloc try-catch. Une instruction{" "}
                  <code>yield return</code> peut se trouver dans le bloc try
                  d'une instruction try-finally.
                </li>
                <li>
                  Une instruction <code>yield break</code> peut se trouver dans
                  un bloc try ou un bloc catch mais pas dans un bloc finally.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
