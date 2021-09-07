import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#extension"
                  >
                    Extension Method
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
          <h3>Data Types</h3>
          <article id="anonymous">
            <h6>Anonymous Type</h6>
            <div>
              <p>
                An anonymous type is a type (class) without any name that can
                contain public read-only properties only.
              </p>
              <Highlight language="csharp">
                {`var student = new { Id = 1, FirstName = "James", LastName = "Bond" };`}
              </Highlight>
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
              <Highlight language="csharp">
                {`dynamic MyDynamicVar = 1;`}
              </Highlight>
            </div>
          </article>
          <article id="nullable">
            <h6>Types Nullables</h6>
            <div>
              <p>
                As you know, a value type cannot be assigned a null value. For
                example, int i = null will give you a compile time error.
              </p>
              <Highlight language="csharp">
                {`Nullable<int> i = null;`}
              </Highlight>
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
          <article id="extension">
            <h6>Extension Method</h6>
            <div>
              <p>
                Extension methods allow you to inject additional methods without
                modifying, deriving or recompiling the original class, struct or
                interface.
              </p>
              <p>
                The extension methods have a special symbol in intellisense of
                the visual studio, so that you can easily differentiate between
                class methods and extension methods.
              </p>
              <img
                src="/img/dotnet/extension-method.png"
                alt="extension method"
              />
              <p>
                An extension method is actually a special kind of static method
                defined in a static class.
              </p>
              <Highlight language="csharp">
                {`public static class IntExtensions
{
	public static bool IsGreaterThan(this int i, int value)
	{
		return i > value;
	}
}

public class Program
{
	public static void Main()
	{
		int i = 10;

        bool result = i.IsGreaterThan(100); 

		Console.WriteLine("Result: {0}",result);
	}
}`}
              </Highlight>
              <p>
                LINQ is built upon extension methods that operate on IEnumerable
                and IQeryable type.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
