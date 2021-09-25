import React from "react";
import { Link } from "react-router-dom";

export default function Dotnetcomponents() {
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
                    href="#dotnet"
                  >
                    Defnition .Net framework
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#components"
                  >
                    Components of .Net framework
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
          <h3>.Net framework</h3>
          <article id="dotnet">
            <h6>.Net framework</h6>
            <p>
              .Net framework is a platform for building various applications on
              windows. It has a list of inbuilt functionalities in the form of
              class, library, and APIs which are used to build, deploy and run
              web services and different applications. It supports different
              languages such as C#, VB .Net etc.
            </p>
          </article>
          <article id="components">
            <h6>Components of .Net framework</h6>
            <ul>
              <li>
                <strong>.NET Class Library: </strong>- .NET framework contains
                multiple classes that are readily available for developers. The
                classes in the FCL (framework class library) are grouped under
                multiple namespaces.
              </li>
              <li>
                <Link to="/clr">
                  <strong>Common Language Runtime:</strong>
                </Link>{" "}
                - CLR provides interoperability between different language, like
                C# , VB, Visual C++, by providing a common environment for the
                execution of code written in of these languages.
              </li>
              <li>
                <strong>Dynamic Language runtime: </strong> - DLR provides to
                execute dynamic languages on .NET Framework by adding some
                special services to the CLR.
              </li>
              <li>
                <strong>Application domains: </strong> - It is used to isolate
                the process of different applications and can be defined by .NET
                framework.
              </li>
              <li>
                <strong>.NET Framework Security: </strong> - .NET framework
                provides multiple tools that can be used by developers to
                protect the resources and code from unauthorized users.
              </li>
              <li>
                <strong>Cross Language interoperability: </strong> - Object or
                complied code of one language can be used in other .NET
                compatible language.
              </li>
              <li>
                <strong>Side by side execution: </strong> - In the same
                application we can use multiple versions of CLR simultaneously.
              </li>
              <li>
                <strong>Common Type System</strong>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
