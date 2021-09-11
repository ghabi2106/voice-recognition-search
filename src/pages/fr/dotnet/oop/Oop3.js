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
                Dans la programmation orientée objet , la{" "}
                <strong>délégation</strong> fait référence à l'évaluation d'un
                membre ( propriété ou méthode ) d'un objet (le récepteur) dans
                le contexte d'un autre objet d'origine (l'expéditeur).
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
                Le <strong>couplage</strong> est le degré d'interdépendance
                entre les modules logiciels ; une mesure de l'étroitesse des
                liens entre deux routines ou modules ; la force des relations
                entre les modules.
                <br />
                Le couplage est généralement opposé à la cohésion . Un faible
                couplage est souvent corrélé à une cohésion élevée, et vice
                versa.
              </p>
              <p>Il existe deux types de couplage :</p>
              <ol>
                <li>
                  <strong>Tight coupling :</strong> : En général, le couplage
                  serré signifie que les deux classes changent souvent ensemble.
                  En d'autres termes, si A en sait plus qu'il ne devrait sur la
                  manière dont B a été mis en œuvre, alors A et B sont
                  étroitement couplés.
                </li>
                <li>
                  En termes simples, le <strong>couplage lâche :</strong>{" "}
                  signifie qu'ils sont pour la plupart indépendants. Si la seule
                  connaissance que la classe A possède sur la classe B est celle
                  que la classe B a exposée à travers son interface, alors la
                  classe A et la classe B sont dites faiblement couplées.
                </li>
              </ol>
            </div>
          </article>
          <article id="cohesion">
            <h6>Cohesion</h6>
            <div>
              <p>
                La <strong>cohésion</strong> fait référence au degré d'
                appartenance des éléments à l'intérieur d'un module. Dans un
                sens, c'est une mesure de la force de la relation entre les
                méthodes et les données d'une classe et un objectif ou un
                concept unificateur servi par cette classe. Dans un autre sens,
                c'est une mesure de la force de la relation entre les méthodes
                de la classe et les données elles-mêmes.
                <br />
                La cohésion est un type de mesure ordinal et est généralement
                décrite comme «haute cohésion» ou «faible cohésion».
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
