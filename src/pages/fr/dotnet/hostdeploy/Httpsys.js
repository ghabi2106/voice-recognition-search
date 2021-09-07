import React from "react";
import { Link } from "react-router-dom";

export default function Httpsys() {
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
                    href="#httpsys"
                  >
                    HTTP.sys
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Use
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
          <h3>HTTP.sys web server</h3>
          <article id="httpsys">
            <h6>HTTP.sys</h6>
            <div>
              <p>
                HTTP.sys est un serveur web pour ASP.NET Core qui s’exécute
                uniquement sous Windows. HTTP.sys est une alternative au Kestrel
                serveur et offre des fonctionnalités qui Kestrel ne sont pas
                fournies par.
              </p>
              <p>
                HTTP.sys est incompatible avec le Module ASP.NET Core et n’est
                pas utilisable avec IIS ni IIS Express.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>When to use HTTP.sys</h6>
            <div>
              <p>HTTP.sys est utile pour les déploiements lorsque :</p>
              <ul>
                <li>
                  <p>
                    Il est nécessaire d’exposer directement le serveur à
                    Internet sans passer par IIS.
                  </p>
                  <p>
                    <img
                      src="img/dotnet/httpsys-to-internet.png"
                      alt="HTTP.sys communicates directly with the Internet"
                    />
                  </p>
                </li>
                <li>
                  <p>
                    Un déploiement interne requiert une fonctionnalité qui n’est
                    pas disponible dans Kestrel . Pour plus d’informations,
                    consultez Kestrel vs. HTTP.sys
                  </p>
                  <p>
                    <img
                      src="img/dotnet/httpsys-to-internal.png"
                      alt="HTTP.sys communicates directly with the internal network"
                    />
                  </p>
                </li>
              </ul>
              <p>
                HTTP.sys est une technologie aboutie qui assure une protection
                contre de nombreux types d’attaques et offre la robustesse, la
                sécurité et l’extensibilité d’un serveur web haut de gamme. Pour
                sa part, IIS s’exécute en tant qu’écouteur HTTP sur HTTP.sys.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
