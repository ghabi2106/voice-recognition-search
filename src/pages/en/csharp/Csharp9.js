import React from "react";
import { Link } from "react-router-dom";

export default function Csharp9() {
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
                    href="#csharp"
                  >
                    C#
                  </a>
                </li>
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
                    to="/hostedservice"
                  >
                    IHostedService, BackgroundService
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp9"
                  >
                    New features in C# 9
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
          <article id="csharp">
            <h6>What is C#?</h6>
            <p>
              C# is an object-oriented, type-safe, and managed language that is
              compiled by .Net framework to generate Microsoft Intermediate
              Language.
            </p>
          </article>
          <article id="top-level-statements">
            <h6>Top-level statements</h6>
            <div>
              <p>
                Instead of writing a considerable amount of boilerplate code.
              </p>
              <img
                src="/img/dotnet/top-level-statements1.png"
                alt="Top-level statements"
              />
              <p>
                With top-level statements, we can eliminate the boilerplate code
                and start coding the logic right away.
              </p>
              <img
                src="/img/dotnet/top-level-statements2.png"
                alt="Top-level statements"
              />
            </div>
          </article>
          <article id="init-only-setters">
            <h6>Init only setters</h6>
            <div>
              <p>
                Pour rendre un objet immutable, on peut accomplir ça en
                utilisant constructeur.
              </p>
              <img
                src="/img/dotnet/set-only-setters1.png"
                alt="Init only setters"
              />
              <p>
                To make immutable this, by using a constructor we can accomplish
                that.
              </p>
              <img
                src="/img/dotnet/set-only-setters2.png"
                alt="Init only setters"
              />
            </div>
          </article>
          <article id="record">
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
              <img src="/img/dotnet/record1.png" alt="record" />
              <img src="/img/dotnet/record2.png" alt="record" />
            </div>
          </article>
          <article id="switch">
            <h6>Improved pattern matching</h6>
            <div>
              <b>Logical patterns and Relational Pattern Matching In Switch</b>
              <p>
                We can use logical operators like ‘and’, ‘or’ and ‘not’, they
                can even be combined with relational patterns.
              </p>
              <img
                src="/img/dotnet/switch.png"
                alt="Improved pattern matching"
              />
            </div>
          </article>
          <article id="new">
            <h6>Target-typed ‘new’ expressions</h6>
            <div>
              <p>
                We can omit the type in the ‘new expression’ when the created
                object is already known.
              </p>
              <img
                src="/img/dotnet/new1.png"
                alt="Target-typed ‘new’ expressions"
              />
              <img
                src="/img/dotnet/new2.png"
                alt="Target-typed ‘new’ expressions"
              />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
