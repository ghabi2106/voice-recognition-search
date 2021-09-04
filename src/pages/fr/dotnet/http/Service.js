import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
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
                    href="#service"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#microservice"
                  >
                    Microservice
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#api"
                  >
                    Web API
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#media-type"
                  >
                    Media Type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#wcf"
                  >
                    Web API vs WCF
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>Services</h3>
          <article id="service">
            <h6>Service</h6>
            <p>
              Les services web fournissent une plateforme commune permettant aux
              applications développées avec différents langages de programmation
              de communiquer entre elles via un protocole de communication comme
              HTTP, FTP, Ethernet ...
            </p>
          </article>
          <article id="microservices">
            <h6>Microservices</h6>
            <p>
              Dans une architecture basée sur les microservices, l’application
              repose sur un ensemble de services qui peuvent être développés,
              testés, déployés et versionnés de manière indépendante.
            </p>
          </article>
          <article id="api">
            <h6>Web API</h6>
            <div>
              <p>
                API abbréviation pour application programming interface est un
                ensemble de définitions de sous-programmes, de protocoles et
                d'outils pour créer des logiciels et des applications. Elle
                prend en charge différents formats de données de réponse. Prise
                en charge intégrée des formats JSON, XML, ...
              </p>
              <p>
                L'API Web ASP.NET est une framework permettant de créer des
                services HTTP accessibles à partir de n'importe quel client, y
                compris les navigateurs et les appareils mobiles. C'est une
                plate-forme idéale pour créer des applications RESTful sur le
                .NET Framework.
              </p>
            </div>
          </article>
          <article id="media-type">
            <h6>Media Type</h6>
            <div>
              <p>
                Le type de média (aka type MIME) spécifie le format des données
                en tant que type/sous-type, par exemple text/html, text/xml,
                application/json, image/jpeg etc
              </p>
              <p>
                Dans la requête HTTP, le type MIME est spécifié dans l'en-tête
                de la requête à l'aide des attributs <strong>Accept</strong> et{" "}
                <strong>Content-Type</strong>. L'attribut d'en-tête{" "}
                <strong>Accept</strong> spécifie le format des données de
                réponse que le client attend et l'attribut d'en-tête
                Content-Type spécifie le format des données dans le corps de la
                demande afin que le récepteur puisse les analyser dans le format
                approprié.
              </p>
              <img
                src="img/dotnet/service-media-type-accept.PNG"
                alt="service media-type accept"
              />
              <img
                src="img/dotnet/service-media-type-content-type.PNG"
                alt="service media-type content-type"
              />
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Media Type Formatter Class</th>
                    <th>MIME Type</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>JsonMediaTypeFormatter</td>
                    <td>application/json, text/json</td>
                    <td>Handles JSON format</td>
                  </tr>
                  <tr>
                    <td>XmlMediaTypeFormatter</td>
                    <td>application/xml, text/json</td>
                    <td>Handles XML format</td>
                  </tr>
                  <tr>
                    <td>FormUrlEncodedMediaTypeFormatter</td>
                    <td>application/x-www-form-urlencoded</td>
                    <td>Handles HTML form URL-encoded data</td>
                  </tr>
                  <tr>
                    <td>JQueryMvcFormUrlEncodedFormatter</td>
                    <td>application/x-www-form-urlencoded</td>
                    <td>Handles model-bound HTML form URL-encoded data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="wcf">
            <h6>Web API vs WCF</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>API Web</th>
                  <th>WCF</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Open source et livré avec le framework .NET.</td>
                  <td>Livré avec le framework .NET</td>
                </tr>
                <tr>
                  <td>Prend en charge uniquement le protocole HTTP.</td>
                  <td>
                    Prend en charge HTTP, TCP, UDP et le protocole de transport
                    personnalisé.
                  </td>
                </tr>
                <tr>
                  <td>Mappe les verbes http aux méthodes</td>
                  <td>
                    Utilise un modèle de programmation basé sur les attributs.
                  </td>
                </tr>
                <tr>
                  <td>
                    Utilise un concept de routage et de contrôleur similaire à
                    ASP.NET MVC.
                  </td>
                  <td>
                    Utilise les contrats de service, d'exploitation et de
                    données.
                  </td>
                </tr>
                <tr>
                  <td>
                    Ne prend pas en charge la messagerie fiable et les
                    transactions.
                  </td>
                  <td>
                    Prend en charge une messagerie et des transactions fiables.
                  </td>
                </tr>
                <tr>
                  <td>
                    L'API Web peut être configurée à l'aide de la classe
                    HttpConfiguration mais pas dans web.config.
                  </td>
                  <td>
                    Utilise web.config et des attributs pour configurer un
                    service.
                  </td>
                </tr>
                <tr>
                  <td>Idéal pour construire des services RESTful.</td>
                  <td>
                    Prend en charge les services RESTful mais avec des
                    limitations.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
