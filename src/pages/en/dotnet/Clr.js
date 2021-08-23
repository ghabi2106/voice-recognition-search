import React from "react";
import { Link } from "react-router-dom";

export default function Clr() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#metadata"
                  >
                    Metadata
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
          <h3>Common Runtime Language</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Compiling translates your source code into MSIL and generates
                the required metadata.
              </p>
              <p>
                The Common Language Runtime (CLR) includes a JIT compiler for
                converting MSIL to native code.
              </p>
              <p>
                Managed code benefits from features such as cross-language
                integration, cross-language exception handling, enhanced
                security, versioning and deployment support, a simplified model
                for component interaction, and debugging.
              </p>
            </div>
          </article>
          <article id="metadata">
            <h6>Metadata</h6>
            <div>
              <p>
                Metadata describes every type and member defined in your code in
                a language-neutral manner :
              </p>
              <ul>
                <li>
                  <p>Description of the assembly.</p>
                  <ul>
                    <li>
                      <p>Identity (name, version, culture, public key).</p>
                    </li>
                    <li>
                      <p>The types that are exported.</p>
                    </li>
                    <li>
                      <p>Other assemblies that this assembly depends on.</p>
                    </li>
                    <li>
                      <p>Security permissions needed to run.</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Description of types.</p>
                  <ul>
                    <li>
                      <p>
                        Name, visibility, base class, and interfaces
                        implemented.
                      </p>
                    </li>
                    <li>
                      <p>
                        Members (methods, fields, properties, events, nested
                        types).
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Attributes.</p>
                  <ul>
                    <li>
                      Additional descriptive elements that modify types and
                      members.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
