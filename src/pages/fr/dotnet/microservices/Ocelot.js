import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Ocelot() {
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
                    href="#api-gateway"
                  >
                    API Gateway
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ocelot-example"
                  >
                    Example Ocelot
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
          <h3>API Gateway</h3>
          <article id="api-gateway">
            <h6>API Gateway</h6>
            <div>
              <p>
                Une <strong>API Gateway</strong> est un point d'entrée
                centralisé qui gère le routage, la sécurité, la transformation
                et la surveillance des requêtes entre les clients et les
                microservices.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Critères</strong>
                    </th>
                    <th>
                      <strong>API Gateway</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Rôle principal</strong>
                    </td>
                    <td>
                      Point d'entrée unique pour gérer les requêtes externes
                      vers les microservices.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Fonctionnalités</strong>
                    </td>
                    <td>
                      - Routage des requêtes <br /> - Authentification et
                      autorisation <br /> - Contrôle du trafic (rate-limiting){" "}
                      <br /> - Transformation des requêtes et réponses <br /> -
                      Gestion des erreurs <br /> - Logging et monitoring <br />{" "}
                      - Mise en cache
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Avantages</strong>
                    </td>
                    <td>
                      - Simplification du client <br /> - Gestion centralisée
                      des fonctionnalités transverses <br /> - Optimisation du
                      réseau <br /> - Scalabilité <br /> - Sécurisation
                      centralisée
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Inconvénients</strong>
                    </td>
                    <td>
                      - Point de défaillance unique <br /> - Latence
                      supplémentaire <br /> - Complexité de gestion <br /> -
                      Goulot d'étranglement
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Outils populaires</strong>
                    </td>
                    <td>
                      - Kong <br /> - Nginx <br /> - AWS API Gateway <br /> -
                      Zuul <br /> - Spring Cloud Gateway
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>Rôle principal d'une API Gateway :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Point d'entrée centralisé</strong> : L'API Gateway
                  reçoit toutes les requêtes des clients (web, mobile, etc.) et
                  les redirige vers les microservices appropriés.
                </li>
                <li>
                  <strong>Routage des requêtes</strong> : Elle détermine le
                  service microservice approprié en fonction de l'URL, des
                  paramètres, des en-têtes ou d'autres critères.
                </li>
                <li>
                  <strong>Abstraction des microservices</strong> : Les clients
                  interagissent avec l'API Gateway sans avoir besoin de
                  connaître l'existence ou l'implémentation des microservices
                  sous-jacents.
                </li>
                <li>
                  <strong>Sécurisation des communications</strong> : L'API
                  Gateway peut gérer les mécanismes de sécurité, comme
                  l'authentification et l'autorisation, avant de transmettre les
                  requêtes aux microservices.
                </li>
              </ol>
              <h6>
                <strong>Fonctionnalités de l'API Gateway :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Routage des requêtes</strong> : L'API Gateway reçoit
                  les demandes externes et les achemine vers les microservices
                  adéquats selon leur logique métier.
                </li>
                <li>
                  <strong>Authentification et autorisation</strong> : Elle
                  vérifie les jetons d'authentification (comme OAuth, JWT) pour
                  s'assurer que les utilisateurs ont les droits d'accès
                  nécessaires avant d'acheminer la requête vers le microservice.
                </li>
                <li>
                  <strong>Contrôle du trafic</strong> : L'API Gateway peut
                  limiter le nombre de requêtes (rate-limiting), surveiller le
                  trafic entrant, et équilibrer la charge entre plusieurs
                  instances des microservices.
                </li>
                <li>
                  <strong>Transformation des requêtes et des réponses</strong> :
                  Elle peut modifier les données des requêtes ou des réponses,
                  comme la transformation de formats de données (par exemple, de
                  JSON à XML), pour les adapter aux besoins des clients ou des
                  services.
                </li>
                <li>
                  <strong>Gestion des erreurs</strong> : En cas d'erreur dans un
                  microservice, l'API Gateway peut fournir des réponses d'erreur
                  génériques et gérer les erreurs de manière centralisée.
                </li>
                <li>
                  <strong>Logging et monitoring</strong> : Elle collecte des
                  informations sur le trafic et les erreurs des microservices
                  pour fournir des logs centralisés et permettre le{" "}
                  <strong>monitoring</strong> de l'ensemble du système.
                </li>
                <li>
                  <strong>Cache</strong> : Elle peut aussi implémenter un
                  mécanisme de mise en cache des réponses fréquentes pour
                  réduire la charge sur les microservices.
                </li>
              </ol>
              <h6>
                <strong>Avantages d'une API Gateway :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Simplification du client</strong> : Les clients n'ont
                  besoin de connaître qu'un seul point d'entrée, et non pas
                  chaque microservice individuel.
                </li>
                <li>
                  <strong>Gestion centralisée</strong> : Elle permet de
                  centraliser des fonctionnalités transverses telles que la{" "}
                  <strong>sécurisation</strong>, le <strong>logging</strong>, et
                  le <strong>routage</strong>, réduisant ainsi la complexité
                  dans chaque microservice.
                </li>
                <li>
                  <strong>Optimisation du réseau</strong> : Grâce au{" "}
                  <strong>routage intelligent</strong>, l'API Gateway optimise
                  les appels et peut réduire le nombre de requêtes directes
                  entre les services, en regroupant les appels ou en effectuant
                  des <strong>agrégations</strong>.
                </li>
                <li>
                  <strong>Scalabilité</strong> : En isolant les clients des
                  microservices, l'API Gateway peut être mise à l'échelle
                  indépendamment des microservices pour gérer un grand nombre de
                  demandes.
                </li>
                <li>
                  <strong>Sécurisation centralisée</strong> : Elle permet de
                  centraliser les mécanismes de sécurité (authentification,
                  autorisation, gestion des jetons) pour les requêtes de
                  l'ensemble des microservices.
                </li>
              </ol>
              <h6>
                <strong>Inconvénients potentiels de l'API Gateway :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Point de défaillance unique</strong> : Si l'API
                  Gateway tombe en panne, cela peut entraîner l'indisponibilité
                  de toute l'application.
                </li>
                <li>
                  <strong>Latence supplémentaire</strong> : Le passage des
                  requêtes par l'API Gateway peut introduire une{" "}
                  <strong>latence</strong> supplémentaire.
                </li>
                <li>
                  <strong>Complexité de gestion</strong> : La configuration et
                  la gestion de l'API Gateway peuvent devenir complexes à mesure
                  que le nombre de microservices augmente.
                </li>
                <li>
                  <strong>Goulot d'étranglement</strong> : Si elle n'est pas
                  correctement dimensionnée, l'API Gateway peut devenir un{" "}
                  <strong>goulot d'étranglement</strong>, impactant la
                  performance de l'ensemble du système.
                </li>
              </ol>
            </div>
          </article>
          <article id="ocelot-example">
            <h6>Example Ocelot</h6>
            <div>
              <ol>
                <li>
                  <strong>Install Ocelot NuGet Package</strong>
                  <Highlight language="bash">
                    {`Install-Package Ocelot`}
                  </Highlight>
                </li>
                <li>
                  <strong>
                    Configure the <code>Program.cs</code> (or{" "}
                    <code>Startup.cs</code> in older versions)
                  </strong>
                  <Highlight language="csharp">
                    {`// Add Ocelot to the DI container
builder.Services.AddOcelot();

// Use Ocelot middleware
await app.UseOcelot();`}
                  </Highlight>
                </li>
                <li>
                  <strong>
                    Add an <code>ocelot.json</code> Configuration File
                  </strong>
                  <Highlight language="json">
                    {`{
  "Routes": [
    {
      "DownstreamPathTemplate": "/api/orders",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 5001
        }
      ],
      "UpstreamPathTemplate": "/orders",
      "UpstreamHttpMethod": [ "GET" ]
    },
    {
      "DownstreamPathTemplate": "/api/products",
      "DownstreamScheme": "http",
      "DownstreamHostAndPorts": [
        {
          "Host": "localhost",
          "Port": 5002
        }
      ],
      "UpstreamPathTemplate": "/products",
      "UpstreamHttpMethod": [ "GET" ]
    }
  ],
  "GlobalConfiguration": {
    "BaseUrl": "http://localhost:5000"
  }
}`}
                  </Highlight>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
