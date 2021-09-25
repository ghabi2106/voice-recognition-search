import React from "react";
import { Link } from "react-router-dom";

export default function Recursion() {
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
                    href="#recursion"
                  >
                    Récursif et itératif
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dis-advantages"
                  >
                    Advantages and disadvantages
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
          <h3>Récursif et itératif</h3>
          <article id="recursion">
            <h6>Récursif et itératif</h6>
            <div>
              <p>
                <strong>Une fonction récursive</strong> est une fonction qui
                fait l'appel à soi-même
              </p>
              <p>
                <strong>Un programme itératif</strong> se base sur des boucles
                pour traiter un certain nombre d'éléments.
              </p>
            </div>
          </article>
          <article id="dis-advantages">
            <h6>Advantages and disadvantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> La
                    récursivité ajoute de la clarté et réduit (parfois) le temps
                    nécessaire à l'écriture et au débogage du code.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    Fonctionne mieux dans la résolution de problèmes basés sur
                    des structures arborescentes.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Immutabilité</em>: Les solutions itératives reposent
                    souvent sur diverses variables temporaires, ce qui rend le
                    code difficile à lire. Cela peut être évité avec la
                    récursivité.
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    <em>Débordement de pile (Stack Overflow)</em>: Les méthodes
                    récursives génèrent souvent une exception
                    StackOverflowException lors du traitement de grands
                    ensembles. Les boucles récursives n'ont pas ce problème
                    cependant.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i> Un
                    appel de fonction prend plus de temps qu'une simple
                    itération de boucle.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
