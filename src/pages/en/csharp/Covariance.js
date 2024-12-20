import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Covariance() {
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
                    href="#covariance"
                  >
                    Covariance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#contravariance"
                  >
                    Contravariance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#invariance"
                  >
                    Invariance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-generic-interfaces"
                  >
                    In Generic Interfaces
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-delegates"
                  >
                    In Delegates
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
          <h3>Covariance and Contravariance</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Covariance and contravariance describe the compatibility of
                types in the context of inheritance and generic types.
              </p>
            </div>
          </article>
          <article id="covariance">
            <h6>Covariance</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Definition</strong>: Covariance allows a type to
                    vary in the same direction as its subtypes. <br />
                    This means that if <code>A</code> is a subtype of{" "}
                    <code>B</code>, then <code>C&lt;A&gt;</code> is a subtype of{" "}
                    <code>C&lt;B&gt;</code>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Use Case</strong>: Covariance is typically used for{" "}
                    <strong>output</strong> (read-only) data, such as in
                    functions or collections that return data but do not modify
                    it.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Example in C#:</strong>
                  </p>
                  <Highlight language="csharp">
                    {`IEnumerable<string> strings = new List<string>();
IEnumerable<object> objects = strings; // Covariance: string → object`}
                  </Highlight>
                  <p>
                    Here, <code>IEnumerable&lt;string&gt;</code> can be assigned
                    to <code>IEnumerable&lt;object&gt;</code> because{" "}
                    <code>string</code> is a subtype of <code>object</code>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>How It Works</strong>: Covariance is safe for
                    read-only operations because retrieving an item of a subtype
                    (<code>string</code>) is compatible with expecting the base
                    type (<code>object</code>).
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="contravariance">
            <h6>Contravariance</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Definition</strong>: Contravariance allows a type to
                    vary in the opposite direction of its subtypes. This means
                    that if <code>A</code> is a subtype of <code>B</code>, then{" "}
                    <code>C&lt;B&gt;</code> is a subtype of{" "}
                    <code>C&lt;A&gt;</code>.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Use Case</strong>: Contravariance is typically used
                    for <strong>input</strong> (write-only) data, such as in
                    function parameters or delegates that consume data.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Example in C#:</strong>
                  </p>

                  <Highlight language="csharp">
                    {`Action<object> actionObject = obj => Console.WriteLine(obj);
Action<string> actionString = actionObject; // Contravariance: object → string`}
                  </Highlight>
                  <p>
                    Here, <code>Action&lt;object&gt;</code> can be assigned to{" "}
                    <code>Action&lt;string&gt;</code> because{" "}
                    <code>string</code> can be passed where <code>object</code>{" "}
                    is expected.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>How It Works</strong>: Contravariance is safe for
                    write-only operations because accepting a base type (
                    <code>object</code>) is compatible with expecting a subtype
                    (<code>string</code>).
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="invariance">
            <h6>Invariance</h6>
            <div>
              <ul>
                <li>
                  <p>
                    <strong>Definition</strong>: Invariance means that there is
                    no relationship between <code>C&lt;A&gt;</code> and{" "}
                    <code>C&lt;B&gt;</code>, even if <code>A</code> is a subtype
                    of <code>B</code>. They are treated as completely unrelated
                    types.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Example in C#:</strong>
                  </p>
                  <Highlight language="csharp">
                    {`List<string> strings = new List<string>();
// List<object> objects = strings; // Error: List<T> is invariant`}
                  </Highlight>
                  <p>
                    Here, <code>List&lt;string&gt;</code> cannot be assigned to{" "}
                    <code>List&lt;object&gt;</code> or vice versa, even though{" "}
                    <code>string</code> is a subtype of <code>object</code>.
                    This is because modifying the list could lead to type safety
                    issues.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="in-generic-interfaces">
            <h6>in Generic Interfaces</h6>
            <div>
              <h6>Covariance and Contravariance in Generic Interfaces:</h6>
              <p>
                In C#, covariance and contravariance are explicitly indicated
                using <strong>out</strong> and <strong>in</strong> keywords in
                generic type definitions:
              </p>
              <ol>
                <li>
                  <p>
                    <strong>
                      Covariance (<code>out</code>)
                    </strong>
                    :
                  </p>
                  <ul>
                    <li>Allows a generic type parameter to be covariant.</li>
                    <li>
                      Example:
                      <Highlight language="csharp">
                        {`interface ICovariant<out T> { T Get(); }
ICovariant<string> strings = null;
ICovariant<object> objects = strings; // Allowed`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Contravariance (<code>in</code>)
                    </strong>
                    :
                  </p>
                  <ul>
                    <li>
                      Allows a generic type parameter to be contravariant.
                    </li>
                    <li>
                      Example:
                      <Highlight language="csharp">
                        {`interface IContravariant<in T> { void Set(T item); }
IContravariant<object> objects = null;
IContravariant<string> strings = objects; // Allowed`}
                      </Highlight>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="in-delegates">
            <h6>in Delegates</h6>
            <div>
              <h6>Covariance and Contravariance in Delegates:</h6>
              <p>
                In C#, covariance and contravariance are explicitly indicated
                using <strong>out</strong> and <strong>in</strong> keywords in
                generic type definitions:
              </p>
              <ol>
                <li>
                  <p>
                    <strong>Covariance</strong>:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Definition</strong>: Covariance enables you to
                        use a more derived type than originally specified.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Example</strong>:
                      </p>
                      <Highlight language="csharp">
                        {`// Delegate with return type Animal
delegate Animal AnimalDelegate();

// Class hierarchy
class Animal { }
class Dog : Animal { }

// Method returning a more derived type
Dog GetDog() => new Dog();

// Covariance: Assigning a method that returns Dog to a delegate expecting Animal
AnimalDelegate animalDelegate = GetDog;
Animal result = animalDelegate();`}
                      </Highlight>
                      <p>
                        <strong>Explanation</strong>:
                      </p>
                      <ul>
                        <li>
                          The <code>AnimalDelegate</code> expects a method that
                          returns <code>Animal</code>.
                        </li>
                        <li>
                          The <code>GetDog</code> method returns a more specific
                          type (<code>Dog</code>), which is allowed due to
                          covariance.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Contravariance</strong> :
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>Definition</strong>: Contravariance enables you
                        to use a more generic (less derived) type than
                        originally specified.
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Example</strong>:
                      </p>
                      <Highlight language="csharp">
                        {`// Delegate with parameter of type Dog
delegate void DogDelegate(Dog dog);

// Method accepting a more general parameter type
void ProcessAnimal(Animal animal) => Console.WriteLine(animal.GetType().Name);

// Contravariance: Assigning a method that accepts Animal to a delegate expecting Dog
DogDelegate dogDelegate = ProcessAnimal;
dogDelegate(new Dog());`}
                      </Highlight>
                      <p>
                        <strong>Explanation</strong>:
                      </p>
                      <ul>
                        <li>
                          The <code>DogDelegate</code> expects a method that
                          takes a <code>Dog</code> as a parameter.
                        </li>
                        <li>
                          The <code>ProcessAnimal</code> method accepts the more
                          general type <code>Animal</code>, which is allowed due
                          to contravariance.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
<Highlight language="csharp">
                        {``}
                      </Highlight>