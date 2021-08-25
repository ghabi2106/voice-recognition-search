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
          <h3>SQL</h3>
          <article id="transaction">
            <h6>Transaction</h6>
            <p>
              Transaction can be defined as a series of operations. If the
              transaction is successful, all the data modifications performed in
              the database will be committed and saved.
            </p>
          </article>
          <article id="acid">
            <h6>ACID properties of transactions</h6>
            <dl>
              <dt>Atomicity</dt>
              <dd>
                All changes to data are performed as if they are a single
                operation. That is, all the changes are performed, or none of
                them are.
              </dd>
              <dd>
                For example, in an application that transfers funds from one
                account to another, the atomicity property ensures that, if a
                debit is made successfully from one account, the corresponding
                credit is made to the other account.
              </dd>
              <dt>Consistency</dt>
              <dd>
                Data is in a consistent state when a transaction starts and when
                it ends.
              </dd>
              <dd>
                For example, in an application that transfers funds from one
                account to another, the consistency property ensures that the
                total value of funds in both the accounts is the same at the
                start and end of each transaction.
              </dd>
              <dt>Isolation</dt>
              <dd>
                The intermediate state of a transaction is invisible to other
                transactions. As a result, transactions that run concurrently
                appear to be serialized.
              </dd>
              <dd>
                For example, in an application that transfers funds from one
                account to another, the isolation property ensures that another
                transaction sees the transferred funds in one account or the
                other, but not in both, nor in neither.
              </dd>
              <dt>Durability</dt>
              <dd>
                After a transaction successfully completes, changes to data
                persist and are not undone, even in the event of a system
                failure.
              </dd>
              <dd>
                For example, in an application that transfers funds from one
                account to another, the durability property ensures that the
                changes made to each account will not be reversed.
              </dd>
            </dl>
          </article>
          <article id="commit-rollback">
            <h6>Commit and rollback</h6>
            <div>
              <p>
                When a transaction completes normally, a transaction processing
                system commits the changes made to the data; that is, it makes
                them permanent and visible to other transactions.
              </p>
              <p>
                When a transaction does not complete normally, the system rolls
                back (or backs out) the changes; that is, it restores the data
                to its last consistent state.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
