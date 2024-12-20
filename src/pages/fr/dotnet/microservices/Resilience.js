import React from "react";
import { Link } from "react-router-dom";

export default function Resilience() {
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
                    href="#resilience"
                  >
                    Résilience
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>Résilience</h3>
          <article id="resilience">
            <h6>Résilience</h6>
            <div>
              <p>
                La <strong>résilience</strong> désigne la capacité d'un système
                à continuer de fonctionner normalement malgré les pannes ou
                erreurs, et à se remettre rapidement de ces défaillances.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Stratégie</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Retry (Reprise automatique)</strong>
                    </td>
                    <td>
                      Réessayer automatiquement une opération échouée après un
                      délai défini, souvent utilisé pour les erreurs
                      temporaires.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Circuit Breaker</strong>
                    </td>
                    <td>
                      Interrompre les appels à un service défaillant pendant un
                      certain temps pour éviter de surcharger le système.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fallback</strong>
                    </td>
                    <td>
                      Fournir une réponse par défaut ou utiliser un service de
                      secours lorsqu'une opération échoue.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Timeout</strong>
                    </td>
                    <td>
                      Limiter le temps d'attente pour une opération, en annulant
                      l'appel si le délai maximal est dépassé.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Bulkhead Isolation</strong>
                    </td>
                    <td>
                      Isoler les ressources pour limiter l'impact des
                      défaillances dans une partie du système (par exemple, en
                      utilisant des threads ou des connexions distinctes).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Failover</strong>
                    </td>
                    <td>
                      Rediriger le trafic vers une ressource ou une instance de
                      secours en cas de défaillance d'un service principal.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Sharding</strong>
                    </td>
                    <td>
                      Répartir les données ou les tâches sur plusieurs serveurs
                      ou systèmes pour éviter qu'un échec sur un seul point
                      n'affecte l'ensemble.
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
