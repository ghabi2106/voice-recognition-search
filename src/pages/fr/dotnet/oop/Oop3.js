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
          <h3>OOP 3</h3>
          <article id="delegation">
            <h6>Delegation</h6>
            <div>
              <p>
                Dans la programmation orient??e objet , la{" "}
                <strong>d??l??gation</strong> fait r??f??rence ?? l'??valuation d'un
                membre ( propri??t?? ou m??thode ) d'un objet (le r??cepteur) dans
                le contexte d'un autre objet d'origine (l'exp??diteur).
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
                Le <strong>couplage</strong> est le degr?? d'interd??pendance
                entre les modules logiciels ; une mesure de l'??troitesse des
                liens entre deux routines ou modules ; la force des relations
                entre les modules.
                <br />
                Le couplage est g??n??ralement oppos?? ?? la coh??sion . Un faible
                couplage est souvent corr??l?? ?? une coh??sion ??lev??e, et vice
                versa.
              </p>
              <p>Il existe deux types de couplage :</p>
              <ol>
                <li>
                  <strong>Tight coupling :</strong> : En g??n??ral, le couplage
                  serr?? signifie que les deux classes changent souvent ensemble.
                  En d'autres termes, si A en sait plus qu'il ne devrait sur la
                  mani??re dont B a ??t?? mis en ??uvre, alors A et B sont
                  ??troitement coupl??s.
                </li>
                <li>
                  En termes simples, le <strong>couplage l??che :</strong>{" "}
                  signifie qu'ils sont pour la plupart ind??pendants. Si la seule
                  connaissance que la classe A poss??de sur la classe B est celle
                  que la classe B a expos??e ?? travers son interface, alors la
                  classe A et la classe B sont dites faiblement coupl??es.
                </li>
              </ol>
            </div>
          </article>
          <article id="cohesion">
            <h6>Cohesion</h6>
            <div>
              <p>
                La <strong>coh??sion</strong> fait r??f??rence au degr?? d'
                appartenance des ??l??ments ?? l'int??rieur d'un module. Dans un
                sens, c'est une mesure de la force de la relation entre les
                m??thodes et les donn??es d'une classe et un objectif ou un
                concept unificateur servi par cette classe. Dans un autre sens,
                c'est une mesure de la force de la relation entre les m??thodes
                de la classe et les donn??es elles-m??mes.
                <br />
                La coh??sion est un type de mesure ordinal et est g??n??ralement
                d??crite comme ??haute coh??sion?? ou ??faible coh??sion??.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
