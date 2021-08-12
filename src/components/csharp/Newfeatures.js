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
              <p>à la place d'écrire</p>
              <img
                src="/img/top-level-statements1.png"
                alt="Top-level statements"
              />
              <p>
                nous pouvons éliminer le code passe-partout et commencer à coder
                la logique immédiatement.
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
                On peut accomplir ça en utilisant c# 9 syntaxe en utilisant
                init.
              </p>
              <img src="/img/set-only-setters2.png" alt="Init only setters" />
            </div>
          </article>
          <article className="" id="records">
            <h6>Record</h6>
            <div>
              <p>
                Record définit un reference-type immutable et se comporte comme
                un value-type.
              </p>
              <p>
                Les records prennent en charge l'héritage. On èvite seulement le
                quatrième étage d'héritage, on put le rendre <code>sealed</code>
                .
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
                On peut utiliser des opérateurs logiques comme 'and' , 'or' et 'not' ,
                ils peuvent même être combinés avec des modèles relationnels.
              </p>
              <img src="/img/switch.png" alt="Improved pattern matching" />
            </div>
          </article>
          <article className="" id="new">
            <h6>Target-typed ‘new’ expressions</h6>
            <div>
              <p>
              On peut omettre le type 'new' lorsque l'objet créé est déjà connu.
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
