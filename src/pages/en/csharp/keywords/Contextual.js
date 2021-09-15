import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Contextual() {
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
                    Contextual keywords
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#partial"
                  >
                    partial type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#when"
                  >
                    when
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#where"
                  >
                    where
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
                    to="/modifiers"
                  >
                    Modifiers
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/oop"
                  >
                    OOP
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/statements"
                  >
                    Partial type, lock, yield
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/typesystem"
                  >
                    Struct, Record, Class, Object, Constructor, Serialization
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
          <h3>Contextual keywords</h3>
          <article id="introduction">
            <h6>Contextual keywords</h6>
            <table class="table">
              <caption>Contextual keywords</caption>
              <thead>
                <tr>
                  <th>Keyword</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>partial</code>
                  </td>
                  <td>
                    Defines <code>partial</code> classes, structs, and
                    interfaces throughout the same compilation unit.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>var</code>
                  </td>
                  <td>
                    Enables the type of a variable declared at method scope to
                    be determined by the compiler.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>when</code>
                  </td>
                  <td>
                    Specifies a filter condition for a <code>catch</code> block
                    or the <code>case</code> label of a <code>switch</code>{" "}
                    statement.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>where</code>
                  </td>
                  <td>
                    Adds constraints to a generic declaration. (See also{" "}
                    <code>where</code>).
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>yield</code>
                  </td>
                  <td>
                    Used in an iterator block to return a value to the
                    enumerator object or to signal the end of iteration.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="partial">
            <h6>partial type</h6>
            <p>
              Partial type definitions allow for the definition of a class,
              struct, interface, or record to be split into multiple files.
            </p>
          </article>
          <article id="yield">
            <h6>yield</h6>
            <div>
              <p>
                You use a <code>yield return</code> statement to return each
                element one at a time.
              </p>
              <ul>
                <li>
                  A <code>yield return</code> statement can't be located in a
                  try-catch block. A <code>yield return</code> statement can be
                  located in the try block of a try-finally statement.
                </li>
                <li>
                  A <code>yield break</code> statement can be located in a try
                  block or a catch block but not a finally block.
                </li>
              </ul>
            </div>
          </article>
          <article id="when">
            <h6>when</h6>
            <div>
              <p>
                You use the <code>when</code> contextual keyword to specify a
                filter condition in the following contexts:
              </p>
              <ul>
                <li>
                  In the <code>catch</code> statement of a try/catch or
                  try/catch/finally block.
                </li>
                <li>
                  As a case guard in the <code>switch</code> statement.
                </li>
                <li>
                  As a case guard in the <code>switch</code> expression.
                </li>
              </ul>
              <h6>when in a catch statement</h6>
              <Highlight language="csharp">
                {`catch (ExceptionType [e]) when (expr)`}
              </Highlight>
            </div>
          </article>
          <article id="where">
            <h6>where</h6>
            <div>
              <p>
                The <code>where</code> clause in a generic definition specifies
                constraints on the types that are used as arguments for type
                parameters in a generic type, method, delegate, or local
                function.
              </p>
              <Highlight language="csharp">
                {`public class AGenericClass<T> where T : IComparable<T> { }

public class UsingEnum<T> where T : System.Enum { }

public class UsingDelegate<T> where T : System.Delegate { }

public class Multicaster<T> where T : System.MulticastDelegate { }

class MyClass<T, U>
    where T : class
    where U : struct
{ }`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
