import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Nested() {
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
                    href="#nested-types"
                  >
                    Nested Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#partial"
                  >
                    Partial
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#local-functions"
                  >
                    Local Functions
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
                    to="/parameters"
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
                    to="/operators"
                  >
                    Operators
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
          <h3>Nested</h3>
          <article id="nested-types">
            <h6>Nested Types</h6>
            <div>
              <p>
                A type defined within a class, struct, or interface is called a
                nested type.
              </p>
              <Highlight language="csharp">
                {`public class Container
{
    class Nested
    {
        Nested() { }
    }
}`}
              </Highlight>
              <ul>
                <li>
                  <p>
                    Nested types of a <strong>class</strong> can be public,
                    protected, internal, protected internal, private, or private
                    protected.
                  </p>
                  <p>
                    However, defining a <code>protected</code>,{" "}
                    <code>protected internal</code> or{" "}
                    <code>private protected</code> nested class inside a sealed
                    class generates compiler warning CS0628, "new protected
                    member declared in sealed class."
                  </p>
                  <p>
                    Also be aware that making a nested type externally visible
                    violates the code quality rule CA1034 "Nested types should
                    not be visible".
                  </p>
                </li>
                <li>
                  <p>
                    Nested types of a <strong>struct</strong> can be public,
                    internal, or private.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="partial">
            <h6>Partial Classes and Methods</h6>
            <div>
              <p>
                It is possible to split the definition of a class, a struct, an
                interface or a method over two or more source files. Each source
                file contains a section of the type or method definition, and
                all parts are combined when the application is compiled.
              </p>
              <Highlight language="csharp">
                {`// Definition in file1.cs
partial void OnNameChanged();

// Implementation in file2.cs
partial void OnNameChanged()
{
  // method body
}`}
              </Highlight>
            </div>
          </article>
          <article id="local-functions">
            <h6>Local Functions</h6>
            <div>
              <p>
                Starting with C# 7.0, C# supports <em>local functions</em>.
                Local functions are private methods of a type that are nested in
                another member. They can only be called from their containing
                member. Local functions can be declared in and called from:
              </p>
              <ul>
                <li>Methods, especially iterator methods and async methods</li>
                <li>Constructors</li>
                <li>Property accessors</li>
                <li>Event accessors</li>
                <li>Anonymous methods</li>
                <li>Lambda expressions</li>
                <li>Finalizers</li>
                <li>Other local functions</li>
              </ul>
              <p>
                However, local functions can't be declared inside an
                expression-bodied member.
              </p>
              <Highlight language="csharp">
                {`int M()
{
    int y;
    LocalFunction();
    return y;

    void LocalFunction() => y = 0;
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
