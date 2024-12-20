import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Polly() {
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
                    href="#circuit-breaker"
                  >
                    Circuit Breaker
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#polly"
                  >
                    Polly
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
          <h3>Circuit Breaker</h3>
          <article id="circuit-breaker">
            <h6>Circuit Breaker</h6>
            <div>
              <p>
                Le <strong>Circuit Breaker</strong> est un pattern de conception
                qui protège un système distribué en interrompant temporairement
                les appels à un service défaillant pour éviter la propagation
                des erreurs.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Critères</strong>
                    </th>
                    <th>
                      <strong>Circuit Breaker</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Rôle principal</strong>
                    </td>
                    <td>
                      Protège un système distribué en interrompant
                      temporairement les appels à un service défaillant.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>États</strong>
                    </td>
                    <td>
                      - <strong>Fermé</strong> : Service fonctionne normalement.{" "}
                      <br /> - <strong>Ouvert</strong> : Service défaillant, les
                      requêtes sont bloquées. <br /> -{" "}
                      <strong>Demi-ouvert</strong> : Test des services pour
                      vérifier leur disponibilité.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fonctionnement</strong>
                    </td>
                    <td>
                      Surveille les appels, détecte les échecs, et bloque les
                      appels en cas d'échecs répétés pour éviter la surcharge du
                      service.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Avantages</strong>
                    </td>
                    <td>
                      - Résilience améliorée <br /> - Protection contre les
                      surcharges <br /> - Réduction de la latence <br /> -
                      Récupération progressive du service
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Inconvénients</strong>
                    </td>
                    <td>
                      - Complexité de gestion <br /> - Délai de récupération{" "}
                      <br /> - Risque de faux positifs (interruption inutile)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cas d'utilisation</strong>
                    </td>
                    <td>
                      - Architectures microservices <br /> - API Gateway <br />{" "}
                      - Services externes ou tierces parties
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Outils populaires</strong>
                    </td>
                    <td>
                      - Hystrix <br /> - Resilience4j <br /> - Polly <br /> -
                      Spring Cloud Circuit Breaker
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="polly">
            <h6>Polly</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Caractéristique</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Circuit Breaker</strong>
                    </td>
                    <td>
                      Implémente le pattern Circuit Breaker pour éviter de
                      solliciter un service défaillant pendant un certain temps.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Retry (Reprise automatique)</strong>
                    </td>
                    <td>
                      Permet de réessayer automatiquement une opération échouée
                      pendant un délai ou un nombre d'essais déterminé.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Timeout</strong>
                    </td>
                    <td>
                      Définit un temps maximal pour l'exécution d'une opération.
                      Si l'opération dépasse ce temps, elle est annulée.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Bulkhead Isolation</strong>
                    </td>
                    <td>
                      Isoler les ressources (par exemple, les threads ou les
                      connexions) pour limiter l'impact des échecs dans une
                      partie du système.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fallback</strong>
                    </td>
                    <td>
                      Définit une action de secours lorsque l'opération échoue,
                      comme retourner une valeur par défaut ou faire appel à un
                      service de secours.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Policy Wrapping</strong>
                    </td>
                    <td>
                      Permet de combiner plusieurs stratégies (ex. Retry et
                      Circuit Breaker) pour une gestion fine des erreurs.
                    </td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">
                {`var policy = Policy
    .Handle<HttpRequestException>()
    .Retry(3)  // Essayer 3 fois
    .Wrap(Policy
        .Handle<HttpRequestException>()
        .CircuitBreaker(2, TimeSpan.FromMinutes(1)));  // Déclencher le circuit breaker après 2 échecs consécutifs

try
{
    policy.Execute(() =>
    {
        // Appel à un service externe
        var response = httpClient.GetAsync("https://example.com").Result;
    });
}
catch (Exception ex)
{
    Console.WriteLine("Erreur dans l'appel au service: " + ex.Message);
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

