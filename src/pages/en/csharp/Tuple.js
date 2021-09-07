import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Tuple() {
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
                    href="#tuple"
                  >
                    Tuple
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#value-tuple"
                  >
                    ValueTuple
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics 
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/refoutin"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gettype"
                  >
                    typeof vs GetType
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Tuple</h3>
          <article id="tuple">
            <h6>Tuple</h6>
            <div>
              <p>
                The <code>Tuple&lt;T&gt;</code> class is a data structure that
                contains a sequence of elements of different data types. It can
                be used where you want to have a data structure to hold an
                object with properties, but you don't want to create a separate
                type for it.
              </p>
              <Highlight language="csharp">
                {`Tuple<T1, T2, T3, T4, T5, T6, T7, TRest>`}
              </Highlight>
              <Highlight language="csharp">
                {`Tuple<int, string, string> person = 
                        new Tuple <int, string, string>(1, "Steve", "Jobs");`}
              </Highlight>
              <ul>
                <li>
                  Tuples can be used: The <code>Tuple</code> is a reference type
                  and not a value type. It allocates on heap and could result in
                  CPU intensive operations.
                </li>
                <li>
                  When you want to pass multiple values to a method through a
                  single parameter.
                </li>
                <li>
                  The <code>Tuple</code> is a reference type and not a value
                  type. It allocates on heap and could result in CPU intensive
                  operations.
                </li>
                <li>
                  The <code>Tuple</code> is limited to include eight elements.
                  You need to use nested tuples if you need to store more
                  elements. However, this may result in ambiguity.
                </li>
              </ul>
            </div>
          </article>
          <article id="value-tuple">
            <h6>ValueTuple</h6>
            <div>
              <Highlight language="csharp">
                {`var person = (1, "Bill", "Gates");
    
    //equivalent Tuple
    //var person = Tuple.Create(1, "Bill", "Gates");`}
              </Highlight>
              <p>
                <code>ValueTuple</code> is a value type representation of the
                Tuple. It also allows "discards" in deconstruction for the
                members you are not going to use.
              </p>
              <Highlight language="csharp">
                {`// use discard _ for the unused member LName
(var id, var FName, _) = GetPerson(); `}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
