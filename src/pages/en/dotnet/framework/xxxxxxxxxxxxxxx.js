import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function DbContet() {
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
                    href="#linq"
                  >
                    Linq
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#operators"
                  >
                    Standard Query Operators
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#let"
                  >
                    let
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#into"
                  >
                    into
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deferred-immediate"
                  >
                    Deferred Execution vs Immediate
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
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
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
          <h3>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</h3>
          <article id="xxxxxxxxxxxxxx">
            <h6>xxxxxxxxxxxxxxxxxxx</h6>
            <div>
              <h6>xxxxxxxxxxxxxxx</h6>
              <Highlight language="csharp">{``}</Highlight>
            </div>
          </article>
          <article id="xxxxxxxxxxxxxx">
            <h6>xxxxxxxxxxxxxxxxxxx</h6>
            <div>
              <h6>xxxxxxxxxxxxxxx</h6>
              <Highlight language="csharp">{``}</Highlight>
            </div>
          </article>
          <article id="xxxxxxxxxxxxxx">
            <h6>xxxxxxxxxxxxxxxxxxx</h6>
            <div>
              <h6>xxxxxxxxxxxxxxx</h6>
              <Highlight language="csharp">{``}</Highlight>
            </div>
          </article>
          <article id="xxxxxxxxxxxxxx">
            <h6>xxxxxxxxxxxxxxxxxxx</h6>
            <div>
              <h6>xxxxxxxxxxxxxxx</h6>
              <Highlight language="csharp">{``}</Highlight>
            </div>
          </article>
          <article id="xxxxxxxxxxxxxx">
            <h6>xxxxxxxxxxxxxxxxxxx</h6>
            <div>
              <h6>xxxxxxxxxxxxxxx</h6>
              <Highlight language="csharp">{``}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
