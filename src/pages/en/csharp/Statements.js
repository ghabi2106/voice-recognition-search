import React from "react";
import { Link } from "react-router-dom";

export default function Statements() {
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
                    href="#partial"
                  >
                    partial type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lock"
                  >
                    lock
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
          <h3>Mots clés d'instruction</h3>
          <article className="" id="partial">
            <h6>partial type</h6>
            <p>
              Partial type definitions allow for the definition of a class,
              struct, interface, or record to be split into multiple files.
            </p>
          </article>
          <article id="lock">
            <h6>lock</h6>
            <p>
              The lock statement acquires the mutual-exclusion lock for a given
              object, executes a statement block, and then releases the lock.
              While a lock is held, the thread that holds the lock can again
              acquire and release the lock. Any other thread is blocked from
              acquiring the lock and waits until the lock is released.
            </p>
          </article>
          <article id="yield">
            <h6>yield</h6>
            <div>
              <p>
                You use a <code>yield return</code> statement to return each
                element one at a time.
              </p>
              <ul>
                <li>
                  A <code>yield return</code> statement can't be located in a
                  try-catch block. A <code>yield return</code> statement can be
                  located in the try block of a try-finally statement.
                </li>
                <li>
                  A <code>yield break</code> statement can be located in a try
                  block or a catch block but not a finally block.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
