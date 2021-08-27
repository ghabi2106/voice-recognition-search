import React from "react";
import { Link } from "react-router-dom";

export default function Enumindexer() {
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
                    href="#enum"
                  >
                    Enum
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#indexer"
                  >
                    Indexer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#generic"
                  >
                    Generic
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
          <h3>Enumeration and Indexer</h3>
          <article id="enum">
            <h6>Enumeration</h6>
            <div>
              <p>
                <code>Enum</code> is a special "class" that represents a group
                of constants (unchangeable/read-only variables).
              </p>
              <img src="/img/dotnet/type-enum.PNG" alt="type enum" />
            </div>
          </article>
          <article id="indexer">
            <h6>Indexer</h6>
            <div>
              <p>
                An Indexer is a special type of property that allows a class or
                structure to be accessed the same way as an array for its
                internal collection. It is the same as property except that it
                is defined with <code>this</code> keyword with square bracket
                and parameters.
              </p>
              <ul>
                <li>Indexer does not allow ref and out paramters.</li>
                <li>Indexer canbe overloaded</li>
                <li>Indexer can also be generic.</li>
              </ul>
              <img src="/img/dotnet/indexer.PNG" alt="indexer" />
            </div>
          </article>
          <article id="generic">
            <h6>Génériques</h6>
            <div>
              <p>
                Generics increase the reusability of the code. You don't need to
                write code to handle different data types. Generic has a
                performance advantage because it removes the possibilities of
                boxing and unboxing.
              </p>
              <img src="/img/dotnet/generics.png" alt="generics" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
