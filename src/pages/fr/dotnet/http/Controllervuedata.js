import React from "react";
import { Link } from "react-router-dom";

export default function Controllervuedata() {
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
                    href="#viewbag"
                  >
                    ViewBag
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#viewdata"
                  >
                    ViewData
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tempdata"
                  >
                    TempData
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
          <h3>Controller Vue data transfert</h3>
          <article id="viewbag">
            <h6>ViewBag</h6>
            <div>
              <p>
                Le ViewBag est utilisé pour transférer des données temporaires
                (qui ne sont pas incluses dans le modèle) du contrôleur vers la
                vue.
              </p>
              <img src="/img/dotnet/viewbag.png" alt="viewbag" />
            </div>
          </article>
          <article id="viewdata">
            <h6>ViewData</h6>
            <div>
              <p>
                ViewData est similaire à ViewBag, qui transfère les données du
                Controller vers View. ViewData est de type Dictionnaire , alors
                que ViewBag est de type dynamique.
              </p>
              <img src="/img/dotnet/viewdata.png" alt="viewdata" />
            </div>
          </article>
          <article id="tempdata">
            <h6>TempData</h6>
            <p>
              TempData est utilisé pour transférer des données d'une vue à un
              contrôleur, d'un contrôleur à une vue ou d'une méthode d'action à
              une autre méthode d'action du même contrôleur ou d'un contrôleur
              différent. TempData stocke les données temporairement et les
              supprime automatiquement après avoir récupéré une valeur.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
