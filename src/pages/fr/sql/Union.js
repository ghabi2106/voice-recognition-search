import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Union() {
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
                    href="#union"
                  >
                    UNION
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#union-all"
                  >
                    UNION ALL
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
          <h3>SQL UNION Operator</h3>
          <article id="union">
            <h6>UNION Operator</h6>
            <div>
              <p>
                L'opérateur <code>UNION</code> est utilisé pour combiner
                l'ensemble de résultats de deux ou plusieurs instructions{" "}
                <code>SELECT</code>
                statements.
              </p>
              <ul>
                <li>
                  Chaque instruction <code>SELECT</code> à l'intérieur{" "}
                  <code>UNION</code> doit avoir le même nombre de colonnes.
                </li>
                <li>
                  Les colonnes doivent également avoir des types de données
                  similaires
                </li>
                <li>
                  Les colonnes de chaque instruction <code>SELECT</code> doivent
                  également être dans le même ordre
                </li>
              </ul>
              <Highlight language="sql">{`SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;`}</Highlight>
            </div>
          </article>
          <article id="union-all">
            <h6>UNION ALL</h6>
            <div>
              <p>
                L'opérateur <code>UNION</code> sélectionne uniquement des
                valeurs distinctes par défaut. Pour autoriser les valeurs en
                double, utilisez <code>UNION ALL</code>:
              </p>
              <Highlight language="sql">{`SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
