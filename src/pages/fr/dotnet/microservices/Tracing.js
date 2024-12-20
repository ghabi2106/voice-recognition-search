import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function CAP() {
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
                    href="#tracing"
                  >
                    Tracing
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#healthchecks"
                  >
                    HealthChecks
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
          <h3>Traçabilité distribuée</h3>
          <article id="tracing">
            <h6>Tracing</h6>
            <div>
              <p>
                La <strong>traçabilité distribuée</strong> est la capacité de
                suivre et de visualiser les requêtes ou transactions qui
                traversent plusieurs services au sein d'un système distribué.
                Cela permet d’identifier les problèmes de performance, de
                détecter les erreurs et d’améliorer la compréhension du flux
                d'exécution.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Objectif</strong>
                    </td>
                    <td>
                      Suivre les requêtes traversant plusieurs services pour
                      améliorer la visibilité et le diagnostic.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Principes clés</strong>
                    </td>
                    <td>
                      Propagation de Trace ID et Span ID, instrumentation des
                      services, collecte centralisée.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Outils populaires</strong>
                    </td>
                    <td>
                      Zipkin, Jaeger, Elastic APM, AWS X-Ray, OpenTelemetry.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Avantages</strong>
                    </td>
                    <td>
                      Diagnostic rapide, optimisation des performances, audit
                      des flux, meilleure observabilité.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Défis</strong>
                    </td>
                    <td>
                      Configuration complexe, surcharge, gestion des données.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>Pourquoi est-ce important ?</strong>
              </h6>
              <ol>
                <li>
                  <strong>Débogage</strong> :
                  <ul>
                    <li>
                      Identifier les points de défaillance dans les appels
                      interservices.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Optimisation des performances</strong> :
                  <ul>
                    <li>
                      Mesurer les temps de réponse à chaque étape pour optimiser
                      les goulots d'étranglement.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Audit et conformité</strong> :
                  <ul>
                    <li>
                      Suivre les données sensibles ou critiques à travers
                      plusieurs services.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Observabilité</strong> :
                  <ul>
                    <li>
                      Améliorer la visibilité sur les interactions complexes
                      entre services.
                    </li>
                  </ul>
                </li>
              </ol>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Outil</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Zipkin</strong>
                    </td>
                    <td>
                      Plateforme de traçabilité distribuée qui collecte et
                      visualise les traces des microservices.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Jaeger</strong>
                    </td>
                    <td>
                      Solution open-source pour le suivi des performances et la
                      traçabilité distribuée.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Elastic APM</strong>
                    </td>
                    <td>
                      Intégré à la stack ELK, offre des fonctionnalités avancées
                      de traçabilité et de monitoring.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>AWS X-Ray</strong>
                    </td>
                    <td>
                      Service cloud pour analyser et déboguer les applications
                      distribuées sur AWS.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>OpenTelemetry</strong>
                    </td>
                    <td>
                      Norme open-source pour la génération et la collecte de
                      traces, métriques et logs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="healthchecks">
            <h6>HealthChecks</h6>
            <div>
              <p>
                Les HealthChecks permettent de vérifier l'état de santé des
                services ou des composants d'un système distribué pour garantir
                leur disponibilité et leur bon fonctionnement.
              </p>
              <h6>
                <strong>Fonctionnement</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Endpoints dédiés</strong> :
                  </p>
                  <ul>
                    <li>
                      Les services exposent généralement des endpoints
                      spécifiques pour les HealthChecks, comme{" "}
                      <code>/health</code> ou <code>/readiness</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Automatisation</strong> :
                  </p>
                  <ul>
                    <li>
                      Ces endpoints sont interrogés régulièrement par des
                      orchestrateurs (Kubernetes, Docker Swarm) ou des outils de
                      monitoring.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Résultats des HealthChecks</strong> :
                  </p>
                  <ul>
                    <li>
                      <strong>UP</strong> : Le service est opérationnel.
                    </li>
                    <li>
                      <strong>DOWN</strong> : Le service est en panne ou non
                      disponible.
                    </li>
                    <li>
                      <strong>DEGRADED</strong> : Le service est opérationnel
                      mais avec des performances réduites.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>Configuration :</h6>
              <Highlight language="csharp">
                {`public void ConfigureServices(IServiceCollection services)
{
    services.AddHealthChecks()
        .AddCheck("DatabaseCheck", new SqlServerHealthCheck(connectionString))
        .AddCheck("MemoryCheck", new MemoryHealthCheck());
}`}
              </Highlight>
              <h6>Endpoint :</h6>
              <Highlight language="csharp">
                {`public void Configure(IApplicationBuilder app)
{
    app.UseHealthChecks("/health");
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
