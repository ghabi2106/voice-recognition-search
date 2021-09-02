import React from "react";
import { Link } from "react-router-dom";

export default function Transaction() {
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
                    href="#transaction"
                  >
                    Transaction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#acid"
                  >
                    ACID properties of transactions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#commit-rollback"
                  >
                    Commit and rollback
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
          <h3>Transaction</h3>
          <article id="transaction">
            <h6>Transaction</h6>
            <p>
              Une transaction, c'est un ensemble de requêtes qui sont exécutées
              en un seul bloc. Ainsi, si une des requêtes du bloc échoue, on
              peut décider d'annuler tout le bloc de requêtes.
            </p>
          </article>
          <article id="acid">
            <h6>ACID properties of transactions</h6>
            <dl>
              <dt>Atomicity</dt>
              <dd>
                Toutes les modifications apportées aux données sont effectuées
                comme s'il s'agissait d'une seule opération. C'est-à-dire que
                toutes les modifications sont effectuées, ou aucune d'entre
                elles ne l'est.
              </dd>
              <dd>
                Par exemple, dans une application qui transfère des fonds d'un
                compte à un autre, la propriété d'atomicité garantit que, si un
                débit est effectué avec succès à partir d'un compte, le crédit
                correspondant est effectué sur l'autre compte.
              </dd>
              <dt>Consistency</dt>
              <dd>
                Les données sont dans un état cohérent au début et à la fin
                d'une transaction.
              </dd>
              <dd>
                Par exemple, dans une application qui transfère des fonds d'un
                compte à un autre, la propriété de cohérence garantit que la
                valeur totale des fonds dans les deux comptes est la même au
                début et à la fin de chaque transaction.
              </dd>
              <dt>Isolation</dt>
              <dd>
                L'état intermédiaire d'une transaction est invisible pour les
                autres transactions. Par conséquent, les transactions qui
                s'exécutent simultanément semblent être sérialisées.
              </dd>
              <dd>
                Par exemple, dans une application qui transfère des fonds d'un
                compte à un autre, la propriété d'isolement garantit qu'une
                autre transaction voit les fonds transférés dans un compte ou
                l'autre, mais pas dans les deux, ni dans aucun.
              </dd>
              <dt>Durability</dt>
              <dd>
                Une fois la transaction terminée avec succès, les modifications
                apportées aux données persistent et ne sont pas annulées, même
                en cas de défaillance du système.
              </dd>
              <dd>
                Par exemple, dans une application qui transfère des fonds d'un
                compte à un autre, la propriété de durabilité garantit que les
                modifications apportées à chaque compte ne seront pas annulées.
              </dd>
            </dl>
          </article>
          <article id="commit-rollback">
            <h6>Commit and rollback</h6>
            <div>
              <p>
                Lorsqu'une transaction se termine normalement, un système de
                traitement de transaction valide les modifications apportées aux
                données ; c'est-à-dire qu'il les rend permanents et visibles
                pour les autres transactions.
              </p>
              <p>
                Lorsqu'une transaction ne se termine pas normalement, le système
                annule (ou annule ) les modifications ; c'est-à-dire qu'il
                restaure les données à leur dernier état cohérent.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
