import React from "react";
import { Link } from "react-router-dom";

export default function Subsets() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ddl"
                  >
                    DDL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dml"
                  >
                    DML
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dcl"
                  >
                    DCL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tcl"
                  >
                    TCL
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
          <h3>DDL &amp; DML &amp; DCL &amp; VTCL</h3>
          <article id="introduction">
            <h6>Quels sont les sous-ensembles de SQL ?</h6>
            <div>
              <ol>
                <li>DDL(Data Definition Language)</li>
                <li>DML(Data Manipulation Language)</li>
                <li>DCL(Data Control Language)</li>
                <li>TCL(Transaction Control Language)</li>
              </ol>
              <img
                src="img/sql/SQL-Commands-1-700x470.png"
                alt="SQL-Commands"
              />
            </div>
          </article>
          <article id="ddl">
            <h6>DDL</h6>
            <div>
              <p>
                DDL signifie Data Definition Language, qui traite des schémas et
                des descriptions de base de données, de la façon dont les
                données doivent résider dans la base de données.
              </p>
              <ul>
                <li>
                  CREATE - pour créer une base de données et ses objets tels que
                  (table, index, vues, procédure de stockage, fonction et
                  déclencheurs)
                </li>
                <li>
                  ALTER - modifie la structure de la base de données existante
                </li>
                <li>DROP - supprimer des objets de la base de données</li>
                <li>
                  TRUNCATE - supprime tous les enregistrements d'une table, y
                  compris tous les espaces alloués aux enregistrements sont
                  supprimés
                </li>
                <li>
                  COMMENT - ajouter des commentaires au dictionnaire de données
                </li>
                <li>RENAME - renommer un objet</li>
              </ul>
            </div>
          </article>
          <article id="dml">
            <h6>DML</h6>
            <div>
              <p>
                DML signifie Data Manipulation Language qui traite de la
                manipulation de données et comprend les instructions SQL les
                plus courantes telles que SELECT, INSERT, UPDATE, DELETE, etc.,
                et il est utilisé pour stocker, modifier, récupérer, supprimer
                et mettre à jour des données dans une base de données.
              </p>
              <ul>
                <li>SELECT - récupérer les données d'une base de données</li>
                <li>INSERT - insérer des données dans une table</li>
                <li>
                  UPDATE - met à jour les données existantes dans une table
                </li>
                <li>
                  DELETE - Supprimer tous les enregistrements d'une table de
                  base de données
                </li>
                <li>MERGE - Opération UPSERT (insertion ou mise à jour)</li>
                <li>CALL - appelle un sous-programme PL/SQL ou Java</li>
                <li>
                  EXPLAIN PLAN - interprétation du chemin d'accès aux données
                </li>
                <li>LOCK TABLE - Contrôle de la concurrence</li>
              </ul>
            </div>
          </article>
          <article id="dcl">
            <h6>DCL</h6>
            <div>
              <p>
                DCL signifie Data Control Language qui inclut des commandes
                telles que GRANT et concerne principalement les droits,
                autorisations et autres contrôles du système de base de données.
              </p>
              <ul>
                <li>GRANT - autorise les utilisateurs à accéder aux privilèges de la base de données</li>
                <li>
                  REVOKE - retirer les privilèges d'accès des utilisateurs donnés à l'aide de la commande GRANT
                </li>
              </ul>
            </div>
          </article>
          <article id="tcl">
            <h6>TCL</h6>
            <div>
              <p>
                TCL signifie Transaction Control Language qui traite une transaction au sein d'une base de données.
              </p>
              <ul>
                <li>COMMIT - valide une transaction</li>
                <li>
                  ROLLBACK - annuler une transaction en cas d'erreur
                </li>
                <li>
                  SAVEPOINT - pour annuler la transaction en faisant des points au sein des groupes
                  groups
                </li>
                <li>
                  SET TRANSACTION - spécifiez les caractéristiques de la transaction
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
