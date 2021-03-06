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
              La transaction peut ??tre d??finie comme une s??rie d'op??rations. Si
              la transaction est r??ussie, toutes les modifications de donn??es
              effectu??es dans la base de donn??es seront valid??es et
              enregistr??es.
            </p>
          </article>
          <article id="acid">
            <h6>Propri??t??s ACID des transactions</h6>
            <dl>
              <dt>Atomicit??</dt>
              <dd>
                Toutes les modifications apport??es aux donn??es sont effectu??es
                comme s'il s'agissait d'une seule op??ration. C'est-??-dire que
                toutes les modifications sont effectu??es, ou aucune d'entre
                elles ne l'est.
              </dd>
              <dd>
                Par exemple, dans une application qui transf??re des fonds d'un
                compte ?? un autre, la propri??t?? d'atomicit?? garantit que, si un
                d??bit est effectu?? avec succ??s ?? partir d'un compte, le cr??dit
                correspondant est effectu?? sur l'autre compte.
              </dd>
              <dt>Coh??rence</dt>
              <dd>
                Les donn??es sont dans un ??tat coh??rent au d??but et ?? la fin
                d'une transaction.
              </dd>
              <dd>
                Par exemple, dans une application qui transf??re des fonds d'un
                compte ?? un autre, la propri??t?? de coh??rence garantit que la
                valeur totale des fonds dans les deux comptes est la m??me au
                d??but et ?? la fin de chaque transaction.
              </dd>
              <dt>Isolation</dt>
              <dd>
                L'??tat interm??diaire d'une transaction est invisible pour les
                autres transactions. Par cons??quent, les transactions qui
                s'ex??cutent simultan??ment semblent ??tre s??rialis??es.
              </dd>
              <dd>
                Par exemple, dans une application qui transf??re des fonds d'un
                compte ?? un autre, la propri??t?? d'isolement garantit qu'une
                autre transaction voit les fonds transf??r??s dans un compte ou
                l'autre, mais pas dans les deux, ni dans aucun.
              </dd>
              <dt>Durabilit??</dt>
              <dd>
                Une fois la transaction termin??e avec succ??s, les modifications
                apport??es aux donn??es persistent et ne sont pas annul??es, m??me
                en cas de d??faillance du syst??me.
              </dd>
              <dd>
                Par exemple, dans une application qui transf??re des fonds d'un
                compte ?? un autre, la propri??t?? de durabilit?? garantit que les
                modifications apport??es ?? chaque compte ne seront pas annul??es.
              </dd>
            </dl>
          </article>
          <article id="commit-rollback">
            <h6>Commit et rollback</h6>
            <div>
              <p>
                Lorsqu'une transaction se termine normalement, un syst??me de
                traitement de transaction commit les modifications apport??es aux
                donn??es ; c'est-??-dire qu'il les rend permanents et visibles
                pour les autres transactions.
              </p>
              <p>
                Lorsqu'une transaction ne se termine pas normalement, le syst??me
                rolls back (ou annule ) les modifications ; c'est-??-dire qu'il
                restaure les donn??es ?? leur dernier ??tat coh??rent.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
