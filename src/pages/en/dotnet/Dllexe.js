import React from "react";
import { Link } from "react-router-dom";

export default function Dllexe() {
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
                    href="#dllexe"
                  >
                    DLL vs EXE
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
          <h3>DLL vs EXE</h3>
          <article id="">
            <h6>What is difference an EXE and a DLL?</h6>
            <ul>
              <li>
                EXE is an extension used for executable files while DLL is the
                extension for a dynamic link library.
              </li>
              <li>
                An EXE file can be run independently while a DLL is used by
                other applications.
              </li>
              <li>An EXE file defines an entry point while a DLL does not.</li>
              <li>
                A DLL file can be reused by other applications while an EXE
                cannot.
              </li>
              <li>
                A DLL would share the same process and memory space of the
                calling application while an EXE creates its separate process
                and memory space.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
