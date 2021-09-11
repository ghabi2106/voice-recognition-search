import React from "react";
import { Link } from "react-router-dom";

export default function Oop() {
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
                    href="#inheritance"
                  >
                    Inheritance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#abstraction"
                  >
                    Abstraction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#polymorphism"
                  >
                    Polymorphism
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#encapsulation"
                  >
                    encapsulation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#overloading"
                  >
                    overloading
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#diamond"
                  >
                    Diamond problem
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
          <h3>Object-Oriented Programming</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Procedural programming is about writing procedures or methods
                that perform operations on the data, while object-oriented
                programming is about creating objects that contain both data and
                methods.
              </p>
              <ul>
                <li>OOP is faster and easier to execute</li>
                <li>OOP provides a clear structure for the programs</li>
                <li>
                  OOP helps to keep the C# code DRY "Don't Repeat Yourself", and
                  makes the code easier to maintain, modify and debug
                </li>
                <li>
                  OOP makes it possible to create full reusable applications
                  with less code and shorter development time
                </li>
              </ul>
            </div>
          </article>
          <article id="inheritance">
            <h6>Inheritance</h6>
            <p>Inheritance is useful for code reusability.</p>
          </article>
          <article id="abstraction">
            <h6>Abstraction</h6>
            <p>
              Data abstraction is the process of hiding certain details and
              showing only essential information to the user. Abstraction can be
              achieved with either abstract classes or interfaces.
            </p>
          </article>
          <article id="polymorphism">
            <h6>Polymorphism</h6>
            <p>
              Polymorphism means "many forms", and it occurs when we have many
              classes that are related to each other by inheritance. It is
              useful for code reusability.
            </p>
          </article>
          <article id="encapsulation">
            <h6>Properties and Encapsulation</h6>
            <div>
              <p>
                The meaning of <strong>Encapsulation</strong>, is to make sure
                that "sensitive" data is hidden from users. To achieve this, you
                must:
              </p>
              <ul>
                <li>
                  declare fields/variables as <code>private</code>.
                </li>
                <li>
                  provide <code>public</code> <code>get</code> and{" "}
                  <code>set</code> methods, through <strong>properties</strong>,
                  to access and update the value of a <code>private</code> field
                </li>
              </ul>
            </div>
          </article>
          <article id="overloading">
            <h6>What is method overloading?</h6>
            <p>
              Method overloading is creating multiple methods with the same name
              with unique signatures in the same class. When we compile, the
              compiler uses overload resolution to determine the specific method
              to be invoke.
            </p>
          </article>
          <article id="diamond">
            <h6>Diamond problem</h6>
            <div>
              <img src="img/dotnet/csharp-diamond.png" alt="csharp-diamond" />
              <p>
                The <strong>"diamond problem"</strong> (sometimes referred to as
                the "Deadly Diamond of Death") is an ambiguity that arises when
                two classes B and C inherit from A, and class D inherits from
                both B and C. If there is a method in A that B and C have
                overridden, and D does not override it, then which version of
                the method does D inherit: that of B, or that of C?
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
