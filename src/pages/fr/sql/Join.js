import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Join() {
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
                    href="#join"
                  >
                    Join
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#inner-join"
                  >
                    INNER JOIN
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#left-join"
                  >
                    LEFT JOIN
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#right-join"
                  >
                    RIGHT JOIN
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#full-outer-join"
                  >
                    FULL OUTER JOIN
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#self-join"
                  >
                    Self Join
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
          <h3>SQL JOIN</h3>
          <article id="join">
            <h6>SQL JOIN</h6>
            <div>
              <p>
                Le <code>JOIN</code> clause est utilisée pour combiner des
                lignes de deux tables ou plus, en fonction d'une colonne liée
                entre elles.
              </p>
              <p>Les différents types de JOIN en SQL :</p>
              <ul>
                <li>
                  <code>(INNER) JOIN</code>: renvoie les enregistrements qui ont
                  des valeurs correspondantes dans les deux tables.
                </li>
                <li>
                  <code>LEFT (OUTER) JOIN</code>: renvoie tous les
                  enregistrements de la table de gauche et les enregistrements
                  correspondants de la table de droite.
                </li>
                <li>
                  <code>RIGHT (OUTER) JOIN</code>: renvoie tous les
                  enregistrements de la table de droite et les enregistrements
                  correspondants de la table de gauche.
                </li>
                <li>
                  <code>FULL (OUTER) JOIN</code>: renvoie tous les
                  enregistrements lorsqu'il y a une correspondance dans la table
                  de gauche ou de droite.
                </li>
              </ul>
              <p>
                <img
                  alt="SQL INNER JOIN"
                  height="145"
                  src="img/sql/img_innerjoin.gif"
                  width="200"
                />
                <img
                  alt="SQL LEFT JOIN"
                  height="145"
                  src="img/sql/img_leftjoin.gif"
                  width="200"
                />
                <img
                  alt="SQL RIGHT JOIN"
                  height="145"
                  src="img/sql/img_rightjoin.gif"
                  width="200"
                />
                <img
                  alt="SQL FULL OUTER JOIN"
                  height="145"
                  src="img/sql/img_fulljoin.gif"
                  width="200"
                />
              </p>
            </div>
          </article>
          <article id="inner-join">
            <h6>INNER JOIN</h6>
            <div>
              <p>
                Le mot-clé <code>INNER JOIN</code> sélectionne les
                enregistrements qui ont des valeurs correspondantes dans les
                deux tables.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;`}</Highlight>
              <img
                alt="SQL INNER JOIN"
                height="145"
                src="img/sql/img_innerjoin.gif"
                width="200"
              />
            </div>
          </article>
          <article id="left-join">
            <h6>LEFT JOIN</h6>
            <div>
              <p>
                Le mot-clé <code>LEFT JOIN</code> renvoie tous les
                enregistrements de la table de gauche (table1) et les
                enregistrements correspondants de la table de droite (table2).
                Le résultat est 0 enregistrement du côté droit, s'il n'y a pas
                de correspondance.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;`}</Highlight>
              <img
                alt="SQL LEFT JOIN"
                height="145"
                src="img/sql/img_leftjoin.gif"
                width="200"
              ></img>
            </div>
          </article>
          <article id="right-join">
            <h6>RIGHT JOIN</h6>
            <div>
              <p>
                Le mot-clé <code>RIGHT JOIN</code> renvoie tous les
                enregistrements de la table de droite (table2) et les
                enregistrements correspondants de la table de gauche (table1).
                Le résultat est 0 enregistrement du côté gauche, s'il n'y a pas
                de correspondance.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;`}</Highlight>
              <img
                alt="SQL RIGHT JOIN"
                height="145"
                src="img/sql/img_rightjoin.gif"
                width="200"
              ></img>
            </div>
          </article>
          <article id="full-outer-join">
            <h6>FULL OUTER JOIN</h6>
            <div>
              <p>
                Le mot-clé <code>FULL OUTER JOIN</code> renvoie tous les
                enregistrements lorsqu'il existe une correspondance dans les
                enregistrements de la
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1
FULL OUTER JOIN table2
ON table1.column_name = table2.column_name
WHERE condition;`}</Highlight>
            </div>
          </article>
          <article id="self-join">
            <h6>Self Join</h6>
            <div>
              <p>
                Une auto-jointure est une jointure normale, mais la table est
                jointe à elle-même.
              </p>
              <Highlight language="sql">{`SELECT column_name(s)
FROM table1 T1, table1 T2
WHERE condition;`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
