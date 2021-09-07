import React from "react";
import { Link } from "react-router-dom";

export default function Assembly() {
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
                    href="#assembly"
                  >
                    Assembly
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#types"
                  >
                    Assembly Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#parts"
                  >
                    Assembly parts
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
          <h3>Assembly</h3>
          <article id="assembly">
            <h6>What is an Assembly?</h6>
            <p>
              An Assembly is a collection of logical units. Logical units refer
              to the types and resources which are required to build an
              application and deploy them using the .Net framework. The CLR uses
              this information for type implementations. Basically, Assembly is
              a collection of Exe and DLLs. It is portable and executable.
            </p>
          </article>
          <article id="types">
            <h6>What are the different types of Assemblies?</h6>
            <ul>
              <li>
                <strong>Private Assembly</strong>, as the name itself suggests,
                it is accessible only to the application. It is installed in the
                installation directory of the application.
              </li>
              <li>
                <strong>Shared Assembly</strong> can be shared by multiple
                applications. It is installed in the GAC.
              </li>
            </ul>
          </article>
          <article id="parts">
            <h6>Explain the different parts of an Assembly.</h6>
            <ul>
              <li>
                <strong>Manifest</strong> – It contains the information about
                the version of an assembly. It is also called as assembly
                metadata.
              </li>
              <li>
                <strong>Type Metadata</strong> – Binary information of the
                program.
              </li>
              <li>
                <strong>MSIL</strong> – Microsoft Intermediate Language code.
              </li>
              <li>
                <strong>Resources</strong> – List of related files.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
