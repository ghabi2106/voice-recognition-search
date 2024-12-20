import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Memberwiseclone() {
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
                    href="#memberwise-clone"
                  >
                    MemberwiseClone
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
          <h3>Object.MemberwiseClone Method</h3>
          <article id="memberwise-clone">
            <h6>Shallow copy &amp; Deep Copy</h6>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Critère</strong>
                    </th>
                    <th>
                      <strong>Copie Superficielle (Shallow Copy)</strong>
                    </th>
                    <th>
                      <strong>Copie Profonde (Deep Copy)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Objet Copié</strong>
                    </td>
                    <td>
                      Crée une nouvelle instance, mais partage les références
                      internes.
                    </td>
                    <td>
                      Crée une nouvelle instance et copie également les objets
                      internes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Références Partagées</strong>
                    </td>
                    <td>Oui, les objets internes sont partagés.</td>
                    <td>Non, les objets internes sont également copiés.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Performance</strong>
                    </td>
                    <td>
                      Plus rapide, car elle ne duplique pas les objets internes.
                    </td>
                    <td>
                      Plus lente, car elle nécessite de copier récursivement
                      chaque objet interne.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Modification d'objet</strong>
                    </td>
                    <td>
                      Les changements dans l'objet copié affectent l'original.
                    </td>
                    <td>
                      Les changements dans l'objet copié n'affectent pas
                      l'original.
                    </td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">
                {`// Shallow Copy
Person shallowCopy = (Person)originalPerson.MemberwiseClone();

// Deep Copy
Person deepCopy = new Person {
    Name = originalPerson.Name,
    Address = new Address {
        Street = originalPerson.Address.Street,
        City = originalPerson.Address.City
    }
};`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
