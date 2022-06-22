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
            <h6>Types imbriqués</h6>
            <div>
              <p>
                Un type défini dans une classe, un struct ou une interface est
                appelé type imbriqué.
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
                    Les types imbriqués d’une <strong>classe</strong> peuvent
                    être public, protected, internal, protected internal,
                    private, ou private protected.
                  </p>
                  <p>
                    Cependant, le fait de définir une classe imbriquée{" "}
                    <code>protected</code>, <code>protected internal</code> ou{" "}
                    <code>private protected</code> à l’intérieur d’une classe
                    sealed a pour effet de générer l’avertissement de
                    compilateur CS0628, « nouveau membre protected déclaré dans
                    une classe sealed ».
                  </p>
                  <p>
                    Sachez également que rendre un type imbriqué visible en
                    externe enfreint la règle de qualité du code CA1034 « Les
                    types imbriqués ne doivent pas être visibles ».
                  </p>
                </li>
                <li>
                  <p>
                    Les types imbriqués d’un <strong>struct</strong> peuvent
                    être public, internal ou private .
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="partial">
            <h6>Partial Classes and Methods</h6>
            <div>
              <p>
                Il est possible de fractionner la définition d’une classe, d’un
                struct, d’une interface ou d’une méthode entre plusieurs
                fichiers sources. Chaque fichier source contient une section de
                la définition de méthode ou de type, et toutes les parties sont
                combinées au moment où l’application est compilée.
              </p>
              <Highlight language="csharp">
                {`object o = 10;
int i = (int)o; //performs unboxing`}
              </Highlight>
            </div>
          </article>
          <article id="local-functions">
            <h6>Partial Classes and Methods</h6>
            <div>
              <p>
                À compter de C# 7.0, C# prend en charge les fonctions locales.
                Les fonctions locales sont des méthodes privées d’un type qui
                sont imbriqués dans un autre membre. Elles ne peuvent être
                appelées qu’à partir de leur membre conteneur. Les fonctions
                locales peuvent être déclarées et appelées dans et à partir des
                éléments suivants :
              </p>
              <ul>
                <li>
                  Méthodes, tout particulièrement les méthodes iterator et async
                </li>
                <li>Constructeurs</li>
                <li>Accesseurs de propriété</li>
                <li>Accesseurs d’événement</li>
                <li>Méthodes anonymes</li>
                <li>Expressions lambda</li>
                <li>Finaliseurs</li>
                <li>Autres fonctions locales</li>
              </ul>
              <p>
                En revanche, les fonctions locales ne peuvent pas être déclarées
                à l’intérieur d’un membre expression-bodied.
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
