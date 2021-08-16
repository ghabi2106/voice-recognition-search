import React from "react";
import { Link } from "react-router-dom";

export default function Newfeatures() {
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
                    href="#top-level-statements"
                  >
                    Top-level statements
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#init-only-setters"
                  >
                    init-only-setters
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#record"
                  >
                    Record
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#new"
                  >
                    Target-typed ‘new’ expressions
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
          <h3>New features in C# 9 </h3>
          <article className="" id="top-level-statements">
            <h6>Top-level statements</h6>
            <div>
              <p>
                Instead of writing a considerable amount of boilerplate code.
              </p>
              <img
                src="/img/top-level-statements1.png"
                alt="Top-level statements"
              />
              <p>
                With top-level statements, we can eliminate the boilerplate code
                and start coding the logic right away.
              </p>
              <img
                src="/img/top-level-statements2.png"
                alt="Top-level statements"
              />
            </div>
          </article>
          <article className="" id="init-only-setters">
            <h6>Init only setters</h6>
            <div>
              <p>
                Pour rendre un objet immutable, on peut accomplir ça en
                utilisant constructeur.
              </p>
              <img src="/img/set-only-setters1.png" alt="Init only setters" />
              <p>
                To make immutable this, by using a constructor we can accomplish
                that.
              </p>
              <img src="/img/set-only-setters2.png" alt="Init only setters" />
            </div>
          </article>
          <article className="" id="records">
            <h6>Record</h6>
            <div>
              <p>
                Records define an immutable reference type and behave like a
                value type.
              </p>
              <p>
                Records support inheritance. You may also seal the records to
                avoid further derivation.
              </p>
              <img src="/img/record1.png" alt="record" />
              <img src="/img/record2.png" alt="record" />
            </div>
          </article>
          <article className="" id="switch">
            <h6>Improved pattern matching</h6>
            <div>
              <b>Logical patterns and Relational Pattern Matching In Switch</b>
              <p>
                We can use logical operators like ‘and’, ‘or’ and ‘not’, they
                can even be combined with relational patterns.
              </p>
              <img src="/img/switch.png" alt="Improved pattern matching" />
            </div>
          </article>
          <article className="" id="new">
            <h6>Target-typed ‘new’ expressions</h6>
            <div>
              <p>
                We can omit the type in the ‘new expression’ when the created
                object is already known.
              </p>
              <img src="/img/new1.png" alt="Target-typed ‘new’ expressions" />
              <img src="/img/new2.png" alt="Target-typed ‘new’ expressions" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
