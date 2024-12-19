import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Binding() {
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
                    href="#early-bound"
                  >
                    Early-bound
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#late-bound"
                  >
                    Late-bound
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#Late-early-bound"
                  >
                    Late-bound vs early-bound
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
          <h3>Late-bound and early-bound</h3>
          <article id="early-bound">
            <h6>Early-bound</h6>
            <div>
              <h6>
                1. <strong>Liaison Anticipée (Early Binding)</strong>
              </h6>
              <p>
                La <strong>liaison anticipée</strong>, aussi appelée{" "}
                <strong>liaison statique</strong>, se produit au moment de la
                compilation. Cela signifie que les appels aux méthodes ou aux
                membres d'un objet sont résolus à la compilation, avant
                l'exécution du programme.
              </p>
            </div>
          </article>
          <article id="late-bound">
            <h6>Late-bound</h6>
            <div>
              <h6>
                2. <strong>Liaison Tardive (Late Binding)</strong>
              </h6>
              <p>
                La <strong>liaison tardive</strong>, également appelée{" "}
                <strong>liaison dynamique</strong>, se produit au moment de
                l'exécution. Cela signifie que le programme détermine quel code
                exécuter lors de l'exécution, et non au moment de la
                compilation.
              </p>
            </div>
          </article>
          <article id="Late-early-bound">
            <h6>Late-bound vs early-bound</h6>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Critère</strong>
                    </th>
                    <th>
                      <strong>Liaison Anticipée (Early Binding)</strong>
                    </th>
                    <th>
                      <strong>Liaison Tardive (Late Binding)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Moment de résolution</strong>
                    </td>
                    <td>À la compilation</td>
                    <td>À l'exécution</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Performance</strong>
                    </td>
                    <td>Plus rapide, car résolu à la compilation</td>
                    <td>Moins rapide, car résolu à l'exécution</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Flexibilité</strong>
                    </td>
                    <td>
                      Moins flexible, car le type et la méthode sont connus à la
                      compilation
                    </td>
                    <td>
                      Plus flexible, permet des appels dynamiques et polymorphes
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Exemples d'utilisation</strong>
                    </td>
                    <td>Appels de méthodes sur des objets avec types connus</td>
                    <td>Réflexion, COM, interfaces dynamiques, etc.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Type de liaison</strong>
                    </td>
                    <td>Liaison statique</td>
                    <td>Liaison dynamique</td>
                  </tr>
                </tbody>
              </table>
              <h6>Example:</h6>
              <Highlight language="csharp">
                {`// Early Binding
string message = "Hello";
Console.WriteLine(message.ToUpper());

// Late Binding
dynamic lateMessage = "Hello";
Console.WriteLine(lateMessage.ToUpper());`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
