import React from "react";
import { Link } from "react-router-dom";

export default function Datatype() {
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
                    href="#anonyme"
                  >
                    Anonymous Type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dynamic"
                  >
                    Dynamic Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#nullable"
                  >
                    Nullable Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#discard"
                  >
                    Discard Types
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
          <h3>Data Types</h3>
          <article id="anonymous">
            <h6>Anonymous Type</h6>
            <div>
              <p>
                An anonymous type is a type (class) without any name that can
                contain public read-only properties only.
              </p>
              <img src="/img/type-anonymous.PNG" alt="type anonymous" />
            </div>
          </article>
          <article id="dynamic">
            <h6>Dynamic Types</h6>
            <div>
              <p>
                A <code>dynamic</code> type escapes type checking at
                compile-time; instead, it resolves type at run time.
              </p>
              <ul>
                <li>
                  Dynamic types change types at run-time based on the assigned
                  value.
                </li>
                <li>
                  The dynamic type variables is converted to other types
                  implicitly.
                </li>
              </ul>
              <img src="/img/type-dynamic.PNG" alt="type dynamic" />
            </div>
          </article>
          <article id="nullable">
            <h6>Types Nullables</h6>
            <div>
              <p>
                As you know, a value type cannot be assigned a null value. For
                example, int i = null will give you a compile time error.
              </p>
              <img src="/img/type-nullable.PNG" alt="type nullable" />
            </div>
          </article>
          <article id="discard">
            <h6>Discards</h6>
            <div>
              <p>
                Discards are placeholder variables that are intentionally unused
                in application code. Discards are equivalent to unassigned
                variables; they don't have a value.You may want to ignore the
                result of an expression, one or more members of a tuple
                expression, or the target of a pattern matching expression.
              </p>
              <u>
                <li>Tuple and object deconstruction</li>
                <li>Pattern matching with switch</li>
              </u>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
