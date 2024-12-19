import React from "react";
import { Link } from "react-router-dom";

export default function Ideals() {
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
                    href="#ideals"
                  >
                    IDEALS
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
                    to="/caching"
                  >
                    Caching
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >
                    Action Method, Result, Selectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controllervuedata"
                  >
                    ViewBag, ViewData and TempData
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                    HTTPS, HTTP and SSL
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                    HTTP Request Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >
                    JWT
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >
                    Services, Microservices, Web API, Web API vs WCF
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
          <h3>IDEALS</h3>
          <article id="ideals">
            <h6>IDEALS</h6>
            <div>
              <p>
                Le patron IDEALS propose un ensemble de principes pour concevoir
                des architectures distribuées flexibles, résilientes, et
                adaptées aux environnements modernes comme les microservices.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Lettre</strong>
                    </th>
                    <th>
                      <strong>Principe</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>I</strong>
                    </td>
                    <td>Interface Segregation</td>
                    <td>
                      Découper les interfaces pour qu'elles soient spécifiques
                      et adaptées à chaque consommateur.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>D</strong>
                    </td>
                    <td>Deployment Independently</td>
                    <td>
                      Les services doivent pouvoir être déployés ou mis à jour
                      indépendamment les uns des autres.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>E</strong>
                    </td>
                    <td>Event-Driven</td>
                    <td>
                      Utiliser une communication basée sur des événements pour
                      dé-coupler les services et améliorer la scalabilité.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>A</strong>
                    </td>
                    <td>Availability over Consistency</td>
                    <td>
                      Prioriser la disponibilité du système même si cela
                      implique une éventuelle incohérence temporaire.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>L</strong>
                    </td>
                    <td>Loose Coupling</td>
                    <td>
                      Assurer un couplage faible entre les services pour une
                      meilleure flexibilité et maintenabilité.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>S</strong>
                    </td>
                    <td>Single Responsibility</td>
                    <td>
                      Chaque service ou composant doit avoir une responsabilité
                      unique, alignée sur le principe SRP de SOLID.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
