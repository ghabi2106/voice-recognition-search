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
                  >ViewBag, ViewData and TempData</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                  HTTPS, HTTP and SSL</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                  HTTP Request Methods</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >JWT</Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >Services, Microservices, Web API, Web API vs WCF</Link>
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
              applications d??velopp??es avec diff??rents langages de programmation
              de communiquer entre elles via un protocole de communication comme
              HTTP, FTP, Ethernet ...
            </p>
          </article>
          <article id="microservices">
            <h6>Microservices</h6>
            <p>
              Dans une architecture bas??e sur les microservices, l???application
              repose sur un ensemble de services qui peuvent ??tre d??velopp??s,
              test??s, d??ploy??s et versionn??s de mani??re ind??pendante.
            </p>
          </article>
          <article id="api">
            <h6>Web API</h6>
            <div>
              <p>
                API abbr??viation pour application programming interface est un
                ensemble de d??finitions de sous-programmes, de protocoles et
                d'outils pour cr??er des logiciels et des applications. Elle
                prend en charge diff??rents formats de donn??es de r??ponse. Prise
                en charge int??gr??e des formats JSON, XML, ...
              </p>
              <p>
                L'API Web ASP.NET est une framework permettant de cr??er des
                services HTTP accessibles ?? partir de n'importe quel client, y
                compris les navigateurs et les appareils mobiles. C'est une
                plate-forme id??ale pour cr??er des applications RESTful sur le
                .NET Framework.
              </p>
            </div>
          </article>
          <article id="media-type">
            <h6>Media Type</h6>
            <div>
              <p>
                Le type de m??dia (aka type MIME) sp??cifie le format des donn??es
                en tant que type/sous-type, par exemple text/html, text/xml,
                application/json, image/jpeg etc
              </p>
              <p>
                Dans la requ??te HTTP, le type MIME est sp??cifi?? dans l'en-t??te
                de la requ??te ?? l'aide des attributs <strong>Accept</strong> et{" "}
                <strong>Content-Type</strong>. L'attribut d'en-t??te{" "}
                <strong>Accept</strong> sp??cifie le format des donn??es de
                r??ponse que le client attend et l'attribut d'en-t??te
                Content-Type sp??cifie le format des donn??es dans le corps de la
                demande afin que le r??cepteur puisse les analyser dans le format
                appropri??.
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
                  <td>Open source et livr?? avec le framework .NET.</td>
                  <td>Livr?? avec le framework .NET</td>
                </tr>
                <tr>
                  <td>Prend en charge uniquement le protocole HTTP.</td>
                  <td>
                    Prend en charge HTTP, TCP, UDP et le protocole de transport
                    personnalis??.
                  </td>
                </tr>
                <tr>
                  <td>Mappe les verbes http aux m??thodes</td>
                  <td>
                    Utilise un mod??le de programmation bas?? sur les attributs.
                  </td>
                </tr>
                <tr>
                  <td>
                    Utilise un concept de routage et de contr??leur similaire ??
                    ASP.NET MVC.
                  </td>
                  <td>
                    Utilise les contrats de service, d'exploitation et de
                    donn??es.
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
                    L'API Web peut ??tre configur??e ?? l'aide de la classe
                    HttpConfiguration mais pas dans web.config.
                  </td>
                  <td>
                    Utilise web.config et des attributs pour configurer un
                    service.
                  </td>
                </tr>
                <tr>
                  <td>Id??al pour construire des services RESTful.</td>
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
