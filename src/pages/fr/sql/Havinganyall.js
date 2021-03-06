import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Havinganyall() {
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
                    href="#having"
                  >
                    Having
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#any"
                  >
                    Any
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#all"
                  >
                    All
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#groupby"
                  >
                    GroupBy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#exists"
                  >
                    Exists
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
          <h3>Having Any All GroupBy Exists</h3>
          <article id="having">
            <h6>HAVING Clause</h6>
            <div>
              <p>
                La <code>HAVING</code> a ??t?? ajout??e ?? SQL car le mot-cl??
                <code>WHERE</code> ne peut pas ??tre utilis?? avec des fonctions
                d'agr??gation.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);`}</Highlight>
            </div>
          </article>
          <article id="any">
            <h6>ANY</h6>
            <div>
              <p>
                Les op??rateurs <code>ANY</code> et <code>ALL</code> permettent
                d'effectuer une comparaison entre une valeur de colonne unique
                et une plage d'autres valeurs.
              </p>
              <p>
                <code>ANY</code> signifie que la condition sera vraie si
                l'op??ration est vraie pour l'une des valeurs de la plage.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE column_name operator ANY
  (SELECT column_name
  FROM table_name
  WHERE condition);`}</Highlight>
            </div>
          </article>
          <article id="all">
            <h6>ALL Operator</h6>
            <div>
              <p>
                <code>ALL</code> signifie que la condition ne sera vraie que si
                l'op??ration est vraie pour toutes les valeurs de la plage.
              </p>
              <dl>
                <dt>ALL Syntaxe avec SELECT</dt>
                <dd>
                  <Highlight language="sql">{`SELECT ALL column_name(s)
FROM table_name
WHERE condition;`}</Highlight>
                </dd>
                <dt>ALL Syntax With WHERE or HAVING</dt>
                <dd>
                  <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE column_name operator ALL
  (SELECT column_name
  FROM table_name
  WHERE condition);`}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="groupby">
            <h6>GROUP BY Statement</h6>
            <div>
              <p>
                L'instruction <code>GROUP BY</code> regroupe les lignes qui ont
                les m??mes valeurs dans des lignes r??capitulatives, comme
                "trouver le nombre de clients dans chaque pays".
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
ORDER BY column_name(s);`}</Highlight>
            </div>
          </article>
          <article id="exists">
            <h6>EXISTS Operator</h6>
            <div>
              <p>
                L'op??rateur <code>EXISTS</code> est utilis?? pour tester
                l'existence de tout enregistrement dans une sous-requ??te.
              </p>
              <p>
                L'op??rateur <code>EXISTS</code> renvoie TRUE si la sous-requ??te
                renvoie un ou plusieurs enregistrements.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table_name
WHERE EXISTS
(SELECT column_name FROM table_name WHERE condition);`}</Highlight>
            </div>
          </article>
          <article id="order-by">
            <h6>ORDER BY</h6>
            <div>
              <p>
                Le mot-cl?? <code>ORDER BY</code> est utilis?? pour trier le jeu
                de r??sultats par ordre croissant ou d??croissant.
              </p>
              <p>
                Le mot-cl?? <code>ORDER BY</code> trie les enregistrements par
                ordre croissant par d??faut. Pour trier les enregistrements par
                ordre d??croissant, utilisez le mot-cl?? <code>DESC</code>.
              </p>
              <Highlight language="sql">{`SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
