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
              pour accéder et manipuler des bases de données.
            </p>
          </article>
          <article id="can-do">
            <h6>Que peut faire SQL ?</h6>
            <ul>
              <li> SQL peut exécuter des requêtes sur une base de données</li>
              <li>SQL peut récupérer des données d'une base de données</li>
              <li>
                SQL peut insérer des enregistrements dans une base de données
              </li>
              <li>
                SQL peut mettre à jour des enregistrements dans une base de
                données
              </li>
              <li>
                SQL peut supprimer des enregistrements d'une base de données
              </li>
              <li>SQL peut créer de nouvelles bases de données</li>
              <li>
                SQL peut créer de nouvelles tables dans une base de données
              </li>
              <li>
                SQL peut créer des procédures stockées dans une base de données
              </li>
              <li>SQL peut créer des vues dans une base de données</li>
              <li>
                SQL peut définir des autorisations sur les tables, les
                procédures et les vues
              </li>
            </ul>
          </article>
          <article id="rdbms">
            <h6>RDBMS</h6>
            <p>
              SGBDR ou systèmes de gestion de bases de données relationnelles
              sont des systèmes de gestion de bases de données qui conservent
              les données sous forme de tableaux. Nous pouvons créer des
              relations entre les tables. Un SGBDR peut recombiner les éléments
              de données de différents fichiers, fournissant des outils
              puissants pour l'utilisation des données.
            </p>
          </article>
          <article id="tcp-ip">
            <h6>Sur quel port TCP/IP SQL Server s'exécute-t-il ?</h6>
            <p>Par défaut, SQL Server s'exécute sur le port 1433.</p>
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
                    SQL est un langage de requête structuré en base de données.
                  </td>
                  <td>
                    C'est un langage de programmation pour une base de données
                    qui utilise SQL.
                  </td>
                </tr>
                <tr>
                  <td>
                    SQL est une requête individuelle utilisée pour exécuter des
                    commandes DML et DDL.
                  </td>
                  <td>
                    PL/SQL est un bloc de codes utilisé pour écrire toute la
                    procédure ou une fonction.
                  </td>
                </tr>
                <tr>
                  <td>SQL est un langage déclaratif et orienté données.</td>
                  <td>
                    PL/SQL est un langage procédural et orienté application.
                  </td>
                </tr>
                <tr>
                  <td>
                    Il est principalement utilisé pour la manipulation de
                    données.
                  </td>
                  <td>Il est utilisé pour créer une application.</td>
                </tr>
                <tr>
                  <td>
                    Il fournit une interaction avec le serveur de base de
                    données.
                  </td>
                  <td>
                    Il ne fournit pas d'interaction avec le serveur de base de
                    données.
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
