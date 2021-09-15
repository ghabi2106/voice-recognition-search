import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Contextual() {
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
                    Contextual keywords
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#partial"
                  >
                    partial type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#when"
                  >
                    when
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#where"
                  >
                    where
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
          <h3>Contextual keywords</h3>
          <article id="introduction">
            <h6>Contextual keywords</h6>
            <table class="table">
              <caption>Contextual keywords</caption>
              <thead>
                <tr>
                  <th>Mot clé</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>partial</code>
                  </td>
                  <td>
                    Définit des classes, des structures et des interfaces
                    partielles dans la même unité de compilation.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>var</code>
                  </td>
                  <td>
                    Permet que le type d’une variable déclarée à la portée de la
                    méthode soit déterminé par le compilateur.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>when</code>
                  </td>
                  <td>
                    Spécifie une condition de filtre pour un bloc{" "}
                    <code>catch</code> ou l’étiquette <code>case</code> d’une
                    instruction <code>switch</code>.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>where</code>
                  </td>
                  <td>Ajoute des contraintes à une déclaration générique.</td>
                </tr>
                <tr>
                  <td>
                    <code>yield</code>
                  </td>
                  <td>
                    Utilisé dans un bloc itérateur pour retourner une valeur à
                    l’objet énumérateur ou signaler la fin de l’itération.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="partial">
            <h6>partial type</h6>
            <p>
              Les définitions de type partiel permettent de fractionner en
              plusieurs fichiers la définition d’une classe, d’une structure,
              d’une interface ou d’un enregistrement.
            </p>
          </article>
          <article id="yield">
            <h6>yield</h6>
            <div>
              <p>
                Utilisez une instruction <code>yield return</code> pour
                retourner chaque élément un par un.
              </p>
              <ul>
                <li>
                  <p>
                    Il ne peut pas y avoir d'instruction{" "}
                    <code>yield return</code> dans un bloc try-catch. Une
                    instruction <code>yield return</code> peut se trouver dans
                    le bloc try d'une instruction try-finally.
                  </p>
                </li>
                <li>
                  <p>
                    Une instruction <code>yield break</code> peut se trouver
                    dans un bloc try ou un bloc catch mais pas dans un bloc
                    finally.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="when">
            <h6>when</h6>
            <div>
              <p>
                Vous utilisez le mot clé contextuel <code>when</code> pour
                spécifier une condition de filtre dans les contextes suivants :
              </p>
              <ul>
                <li>
                  dans l’instruction <code>catch</code> d’un bloc try/catch ou
                  try/catch/finally.
                </li>
                <li>
                  Comme protection de cas dans l'instruction <code>switch</code>
                  .
                </li>
                <li>
                  Comme protection de cas dans l'expression <code>switch</code>.
                </li>
              </ul>
              <h6>when dans une instruction catch</h6>
              <Highlight language="csharp">
                {`catch (ExceptionType [e]) when (expr)`}
              </Highlight>
            </div>
          </article>
          <article id="where">
            <h6>where</h6>
            <div>
              <p>
                La clause <code>where</code> dans une définition générique
                spécifie des contraintes sur les types qui sont utilisés comme
                arguments pour les paramètres de type d’un type générique, d’une
                méthode, d’un délégué ou d’une fonction locale.
              </p>
              <Highlight language="csharp">
                {`public class AGenericClass<T> where T : IComparable<T> { }

public class UsingEnum<T> where T : System.Enum { }

public class UsingDelegate<T> where T : System.Delegate { }

public class Multicaster<T> where T : System.MulticastDelegate { }

class MyClass<T, U>
    where T : class
    where U : struct
{ }`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
