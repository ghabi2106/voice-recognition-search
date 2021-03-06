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
                DDL signifie Data Definition Language, qui traite des sch??mas et
                des descriptions de base de donn??es, de la fa??on dont les
                donn??es doivent r??sider dans la base de donn??es.
              </p>
              <ul>
                <li>
                  CREATE - pour cr??er une base de donn??es et ses objets tels que
                  (table, index, vues, proc??dure de stockage, fonction et
                  d??clencheurs)
                </li>
                <li>
                  ALTER - modifie la structure de la base de donn??es existante
                </li>
                <li>DROP - supprimer des objets de la base de donn??es</li>
                <li>
                  TRUNCATE - supprime tous les enregistrements d'une table, y
                  compris tous les espaces allou??s aux enregistrements sont
                  supprim??s
                </li>
                <li>
                  COMMENT - ajouter des commentaires au dictionnaire de donn??es
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
                manipulation de donn??es et comprend les instructions SQL les
                plus courantes telles que SELECT, INSERT, UPDATE, DELETE, etc.,
                et il est utilis?? pour stocker, modifier, r??cup??rer, supprimer
                et mettre ?? jour des donn??es dans une base de donn??es.
              </p>
              <ul>
                <li>SELECT - r??cup??rer les donn??es d'une base de donn??es</li>
                <li>INSERT - ins??rer des donn??es dans une table</li>
                <li>
                  UPDATE - met ?? jour les donn??es existantes dans une table
                </li>
                <li>
                  DELETE - Supprimer tous les enregistrements d'une table de
                  base de donn??es
                </li>
                <li>MERGE - Op??ration UPSERT (insertion ou mise ?? jour)</li>
                <li>CALL - appelle un sous-programme PL/SQL ou Java</li>
                <li>
                  EXPLAIN PLAN - interpr??tation du chemin d'acc??s aux donn??es
                </li>
                <li>LOCK TABLE - Contr??le de la concurrence</li>
              </ul>
            </div>
          </article>
          <article id="dcl">
            <h6>DCL</h6>
            <div>
              <p>
                DCL signifie Data Control Language qui inclut des commandes
                telles que GRANT et concerne principalement les droits,
                autorisations et autres contr??les du syst??me de base de donn??es.
              </p>
              <ul>
                <li>GRANT - autorise les utilisateurs ?? acc??der aux privil??ges de la base de donn??es</li>
                <li>
                  REVOKE - retirer les privil??ges d'acc??s des utilisateurs donn??s ?? l'aide de la commande GRANT
                </li>
              </ul>
            </div>
          </article>
          <article id="tcl">
            <h6>TCL</h6>
            <div>
              <p>
                TCL signifie Transaction Control Language qui traite une transaction au sein d'une base de donn??es.
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
                  SET TRANSACTION - sp??cifiez les caract??ristiques de la transaction
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
