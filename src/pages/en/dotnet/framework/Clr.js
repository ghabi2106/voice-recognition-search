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
                    Common Language Runtime
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#msil"
                  >
                    MSIL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#jit"
                  >
                    JIT
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#gac"
                  >
                    Global Assembly Cache
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cts"
                  >
                    Common Type System
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cls"
                  >
                    Common Language Specification
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cas"
                  >
                    Code Access Security
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
          <h3>Common Runtime Language</h3>
          <article id="introduction">
            <h6>Common Runtime Language (CLR)</h6>
            <div>
              <p>
                .NET CLR is a run-time environment that manages and executes the
                code written in any .NET programming language.
              </p>
              <p>
                Compiling translates your source code into MSIL and generates
                the required metadata.
              </p>
              <p>
                CLR does various operations like memory management, security
                checks, assemblies to be loaded and thread management. It
                provides a secure execution environment for applications.
              </p>
            </div>
          </article>
          <article id="msil">
            <h6>MSIL</h6>
            <div>
              <p>
                Managed code benefits from features such as cross-language
                integration, cross-language exception handling, enhanced
                security, versioning and deployment support, a simplified model
                for component interaction, and debugging.
              </p>
            </div>
          </article>
          <article id="jit">
            <h6>Just In Time (JIT)</h6>
            <div>
              <p>
                JIT is a compiler which stands for Just In Time. It is used to
                convert the intermediate code into the native language. During
                the execution, the intermediate code is converted into the
                native language.
              </p>
            </div>
          </article>
          <article id="gac">
            <h6>Global Assembly Cache (GAC)</h6>
            <p>
              GAC stands for Global Assembly Cache. Whenever CLR gets installed
              on the machine, GAC comes as a part of it. GAC specifically stores
              those assemblies which will be shared by many applications. A
              Developer tool called Gacutil.exe is used to add any file to GAC.
            </p>
          </article>
          <article id="cts">
            <h6>Common Type System (CTS)</h6>
            <p>
              CTS stands for Common Type System. It follows certain rules
              according to which a data type should be declared and used in the
              program code. CTS also describes the data types that are going to
              be used in the application. We can even make our own classes and
              functions following the rules in the CTS, it helps in calling the
              data type declared in one program language by other programming
              languages.
            </p>
          </article>
          <article id="cas">
            <h6>Code Access Security (CAS)</h6>
            <div>
              <p>
                .Net provides a security model that prevents unauthorized access
                to resources. CAS is a part of that security model. CAS is
                present in the CLR. It enables the users to set permissions at a
                granular level for the code.
              </p>
              <p>
                CLR then executes the code depending on the available
                permissions. CAS can be applied only to the managed code.
                Unmanaged code runs without CAS.
              </p>
            </div>
          </article>
          <article id="cls">
            <h6>Common Language Specification (CLS)</h6>
            <p>
              Common language specification helps the developers to use the
              components that are inter-language compatible with certain rules
              that come with CLS. It then helps in reusing the code in other
              .NET compatible languages.
            </p>
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
