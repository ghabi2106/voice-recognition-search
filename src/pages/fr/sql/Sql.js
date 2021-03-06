import React from "react";
import { Link } from "react-router-dom";

export default function Sql() {
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
                    href="#sql"
                  >
                    SQL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#can-do"
                  >
                    Can do
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#rdbms"
                  >
                    RDBMS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tcp-ip"
                  >
                    TCP/IP
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
          <h3>SQL</h3>
          <article id="sql">
            <h6>Qu'est-ce que SQL ?</h6>
            <p>
              SQL signifie "Structured Query Language" est un langage standard
              pour acc??der et manipuler des bases de donn??es.
            </p>
          </article>
          <article id="can-do">
            <h6>Que peut faire SQL ?</h6>
            <ul>
              <li> SQL peut ex??cuter des requ??tes sur une base de donn??es</li>
              <li>SQL peut r??cup??rer des donn??es d'une base de donn??es</li>
              <li>
                SQL peut ins??rer des enregistrements dans une base de donn??es
              </li>
              <li>
                SQL peut mettre ?? jour des enregistrements dans une base de
                donn??es
              </li>
              <li>
                SQL peut supprimer des enregistrements d'une base de donn??es
              </li>
              <li>SQL peut cr??er de nouvelles bases de donn??es</li>
              <li>
                SQL peut cr??er de nouvelles tables dans une base de donn??es
              </li>
              <li>
                SQL peut cr??er des proc??dures stock??es dans une base de donn??es
              </li>
              <li>SQL peut cr??er des vues dans une base de donn??es</li>
              <li>
                SQL peut d??finir des autorisations sur les tables, les
                proc??dures et les vues
              </li>
            </ul>
          </article>
          <article id="rdbms">
            <h6>RDBMS</h6>
            <p>
              SGBDR ou syst??mes de gestion de bases de donn??es relationnelles
              sont des syst??mes de gestion de bases de donn??es qui conservent
              les donn??es sous forme de tableaux. Nous pouvons cr??er des
              relations entre les tables. Un SGBDR peut recombiner les ??l??ments
              de donn??es de diff??rents fichiers, fournissant des outils
              puissants pour l'utilisation des donn??es.
            </p>
          </article>
          <article id="tcp-ip">
            <h6>Sur quel port TCP/IP SQL Server s'ex??cute-t-il ?</h6>
            <p>Par d??faut, SQL Server s'ex??cute sur le port 1433.</p>
          </article>
          <article id="sql-plsql">
            <h6>SQL vs PL/SQL</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>SQL</strong>
                  </td>
                  <td>
                    <strong>PL/SQL</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    SQL est un langage de requ??te structur?? en base de donn??es.
                  </td>
                  <td>
                    C'est un langage de programmation pour une base de donn??es
                    qui utilise SQL.
                  </td>
                </tr>
                <tr>
                  <td>
                    SQL est une requ??te individuelle utilis??e pour ex??cuter des
                    commandes DML et DDL.
                  </td>
                  <td>
                    PL/SQL est un bloc de codes utilis?? pour ??crire toute la
                    proc??dure ou une fonction.
                  </td>
                </tr>
                <tr>
                  <td>SQL est un langage d??claratif et orient?? donn??es.</td>
                  <td>
                    PL/SQL est un langage proc??dural et orient?? application.
                  </td>
                </tr>
                <tr>
                  <td>
                    Il est principalement utilis?? pour la manipulation de
                    donn??es.
                  </td>
                  <td>Il est utilis?? pour cr??er une application.</td>
                </tr>
                <tr>
                  <td>
                    Il fournit une interaction avec le serveur de base de
                    donn??es.
                  </td>
                  <td>
                    Il ne fournit pas d'interaction avec le serveur de base de
                    donn??es.
                  </td>
                </tr>
                <tr>
                  <td>Il ne peut pas contenir de code PL/SQL.</td>
                  <td>
                    Il peut contenir du SQL car il s'agit d'une extension de
                    SQL.
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
