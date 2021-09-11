import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Oop3() {
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
                    href="#delegation"
                  >
                    Delegation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#coupling"
                  >
                    Coupling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cohesion"
                  >
                    Cohesion
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
          <h3>OOP 3</h3>
          <article id="delegation">
            <h6>Delegation</h6>
            <div>
              <p>
                In object-oriented programming, <strong>delegation</strong>{" "}
                refers to evaluating a member (property or method) of one object
                (the receiver) in the context of another original object (the
                sender).
              </p>
              <Highlight language="csharp">
                {`class A {
  void foo() {
    // "this" also known under the names "current", "me" and "self" in other languages
    this.bar();
  }

  void bar() {
    print("a.bar");
  }
};

class B {
  private delegate A a; // delegation link

  public B(A a) {
    this.a = a;
  }

  void foo() {
    a.foo(); // call foo() on the a-instance
  }

  void bar() {
    print("b.bar");
  }
};

a = new A();
b = new B(a); // establish delegation between two objects`}
              </Highlight>
            </div>
          </article>
          <article id="coupling">
            <h6>Coupling</h6>
            <div>
              <p>
                <strong>Coupling</strong> is the degree of interdependence
                between software modules; a measure of how closely connected two
                routines or modules are; the strength of the relationships
                between modules.
                <br />
                Coupling is usually contrasted with cohesion. Low coupling often
                correlates with high cohesion, and vice versa.
              </p>
              <p>There are two types of coupling:</p>
              <ol>
                <li>
                  <strong>Tight coupling :</strong> In general, Tight coupling
                  means the two classes often change together. In other words,
                  if A knows more than it should about the way in which B was
                  implemented, then A and B are tightly coupled.
                </li>
                <li>
                  <strong>Loose coupling :</strong> In simple words, loose
                  coupling means they are mostly independent. If the only
                  knowledge that class A has about class B, is what class B has
                  exposed through its interface, then class A and class B are
                  said to be loosely coupled.
                </li>
              </ol>
            </div>
          </article>
          <article id="cohesion">
            <h6>Cohesion</h6>
            <div>
              <p>
                <strong>cohesion</strong> refers to the degree to which the
                elements inside a module belong together. In one sense, it is a
                measure of the strength of relationship between the methods and
                data of a class and some unifying purpose or concept served by
                that class. In another sense, it is a measure of the strength of
                relationship between the class's methods and data themselves.
                <br />
                Cohesion is an ordinal type of measurement and is usually
                described as “high cohesion” or “low cohesion”.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
