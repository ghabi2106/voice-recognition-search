import React from "react";
import { Link } from "react-router-dom";

export default function Funcstoredproc() {
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
                    href="#stored-proc"
                  >
                    Stored Procedure
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#functions"
                  >
                    Functions
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
          <h3>Function vs Stored procedure</h3>
          <article id="stored-proc">
            <h6>Stored Procedure:</h6>
            <ul>
              <li>
                Une procédure stockée est toujours utilisée pour effectuer une
                tâche spécifique.
              </li>
              <li>Il peut renvoyer zéro, une ou plusieurs valeurs.</li>
              <li>
                Il peut avoir à la fois des paramètres d'entrée et de sortie.
              </li>
              <li>
                La gestion des exceptions peut être effectuée à l'aide d'un bloc
                try-catch.
              </li>
              <li>Une fonction peut être appelée à partir d'une procédure.</li>
            </ul>
          </article>
          <article id="func">
            <h6>Function</h6>
            <ul>
              <li>Les fonctions doivent renvoyer une seule valeur.</li>
              <li>Il ne peut avoir que le paramètre d'entrée.</li>
              <li>
                La gestion des exceptions ne peut pas être effectuée à l'aide
                d'un bloc try-catch.
              </li>
              <li>
                Une procédure stockée ne peut pas être appelée à partir d'une
                fonction.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
