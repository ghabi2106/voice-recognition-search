import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Tableview() {
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
                    href="#views"
                  >
                    Views
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#table-field"
                  >
                    Table Field
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#entities-relationships"
                  >
                    Entities Relationships
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#table-view"
                  >
                    views vs tables
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
          <h3>Table Views</h3>
          <article id="views">
            <h6>Views</h6>
            <div>
              <p>
                En SQL, une vue est une table virtuelle bas??e sur le jeu de
                r??sultats d'une instruction SQL.
              </p>
              <dl>
                <dt>CREATE VIEW Syntax</dt>
                <dd>
                  <Highlight language="sql">{`CREATE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</Highlight>
                </dd>
                <dt>SQL Updating a View</dt>
                <dd>
                  <Highlight language="sql">{`CREATE OR REPLACE VIEW view_name AS
SELECT column1, column2, ...
FROM table_name
WHERE condition;`}</Highlight>
                </dd>
                <dt>SQL Dropping a View</dt>
                <dd>
                  <Highlight language="sql">{`DROP VIEW view_name;`}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="table-field">
            <h6>Qu'entendez-vous par table et champ en SQL ?</h6>
            <div>
              <p>
                Une donn??e organis??e sous forme de lignes et de colonnes est
                dite un tableau. Ici, les lignes et les colonnes sont appel??es
                tuples et attributs.
              </p>
              <p>
                Et le nombre de colonnes dans une table est appel?? un champ.
                Dans l'enregistrement, les champs repr??sentent les
                caract??ristiques et les attributs.
              </p>
            </div>
          </article>
          <article id="entities-relationships">
            <h6>Que sont les entit??s et les relations ?</h6>
            <div>
              <p>
                <strong>Entities:</strong> une entit?? peut ??tre une personne, un
                lieu, une chose ou tout objet identifiable pour lequel des
                donn??es peuvent ??tre stock??es dans une base de donn??es.
              </p>
              <p>
                <strong>Par example:</strong> IDans la base de donn??es d'une
                entreprise, les employ??s, les projets, les salaires, etc.
                peuvent ??tre appel??s entit??s.
              </p>
              <p>
                <strong>Relationships:</strong> les relations entre les entit??s
                peuvent ??tre appel??es la connexion entre deux tables ou entit??s.
              </p>
              <p>
                <strong>Par example:</strong> Dans une base de donn??es
                coll??giale, l'entit?? ??tudiant et les entit??s d??partement sont
                associ??es entre elles.
              </p>
            </div>
          </article>
          <article id="table-view">
            <h6>views vs tables</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Views</strong>
                  </td>
                  <td>
                    <strong>Tables</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    C'est une table virtuelle qui est extraite d'une base de
                    donn??es.
                  </td>
                  <td>
                    Un tableau est structur?? avec un nombre d??fini de colonnes
                    et un nombre illimit?? de lignes.
                  </td>
                </tr>
                <tr>
                  <td>Les vues ne contiennent pas de donn??es elles-m??mes.</td>
                  <td>
                    Une table contient des donn??es et stocke les donn??es dans
                    des bases de donn??es.
                  </td>
                </tr>
                <tr>
                  <td>
                    Une vue est ??galement utilis??e pour interroger certaines
                    informations contenues dans quelques tables distinctes.
                  </td>
                  <td>
                    Une table contient des informations client fondamentales et
                    les cas d'un objet caract??ris??.
                  </td>
                </tr>
                <tr>
                  <td>
                    Dans une vue, nous obtiendrons des informations fr??quemment
                    demand??es.
                  </td>
                  <td>
                    Dans une table, la modification des informations dans la
                    base de donn??es modifie les informations qui apparaissent
                    dans la vue
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
