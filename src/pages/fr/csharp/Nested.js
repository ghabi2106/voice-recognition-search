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
            <h6>Types imbriqu??s</h6>
            <div>
              <p>
                Un type d??fini dans une classe, un struct ou une interface est
                appel?? type imbriqu??.
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
                    Les types imbriqu??s d???une <strong>classe</strong> peuvent
                    ??tre public, protected, internal, protected internal,
                    private, ou private protected.
                  </p>
                  <p>
                    Cependant, le fait de d??finir une classe imbriqu??e{" "}
                    <code>protected</code>, <code>protected internal</code> ou{" "}
                    <code>private protected</code> ?? l???int??rieur d???une classe
                    sealed a pour effet de g??n??rer l???avertissement de
                    compilateur CS0628, ?? nouveau membre protected d??clar?? dans
                    une classe sealed ??.
                  </p>
                  <p>
                    Sachez ??galement que rendre un type imbriqu?? visible en
                    externe enfreint la r??gle de qualit?? du code CA1034 ?? Les
                    types imbriqu??s ne doivent pas ??tre visibles ??.
                  </p>
                </li>
                <li>
                  <p>
                    Les types imbriqu??s d???un <strong>struct</strong> peuvent
                    ??tre public, internal ou private .
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="partial">
            <h6>Partial Classes and Methods</h6>
            <div>
              <p>
                Il est possible de fractionner la d??finition d???une classe, d???un
                struct, d???une interface ou d???une m??thode entre plusieurs
                fichiers sources. Chaque fichier source contient une section de
                la d??finition de m??thode ou de type, et toutes les parties sont
                combin??es au moment o?? l???application est compil??e.
              </p>
              <Highlight language="csharp">
                {`public partial class Employee
{
    public void DoWork()
    {
    }
}

public partial class Employee
{
    public void GoToLunch()
    {
    }
}`}
              </Highlight>
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
            <h6>fonctions locales</h6>
            <div>
              <p>
                ?? compter de C# 7.0, C# prend en charge les fonctions locales.
                Les fonctions locales sont des m??thodes priv??es d???un type qui
                sont imbriqu??s dans un autre membre. Elles ne peuvent ??tre
                appel??es qu????? partir de leur membre conteneur. Les fonctions
                locales peuvent ??tre d??clar??es et appel??es dans et ?? partir des
                ??l??ments suivants :
              </p>
              <ul>
                <li>
                  M??thodes, tout particuli??rement les m??thodes iterator et async
                </li>
                <li>Constructeurs</li>
                <li>Accesseurs de propri??t??</li>
                <li>Accesseurs d?????v??nement</li>
                <li>M??thodes anonymes</li>
                <li>Expressions lambda</li>
                <li>Finaliseurs</li>
                <li>Autres fonctions locales</li>
              </ul>
              <p>
                En revanche, les fonctions locales ne peuvent pas ??tre d??clar??es
                ?? l???int??rieur d???un membre expression-bodied.
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
