import React from "react";
import { Link } from "react-router-dom";

export default function Server() {
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
                    href="#server"
                  >
                    Web server
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-process"
                  >
                    .Net core servers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#kestrel-httpsys"
                  >
                    Kestrel vs. HTTP.sys
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
          <h3>Web server implementations</h3>
          <article id="server">
            <h6>Web server</h6>
            <div>
              <p>
                Un serveur Web est un logiciel et un matériel qui utilise HTTP
                (Hypertext Transfer Protocol) et d'autres protocoles pour
                répondre aux demandes des clients effectuées sur le World Wide
                Web. La tâche principale d'un serveur Web consiste à afficher le
                contenu du site Web en stockant, en traitant et en fournissant
                des pages Web aux utilisateurs. Outre HTTP, les serveurs Web
                prennent également en charge SMTP (Simple Mail Transfer
                Protocol) et FTP (File Transfer Protocol), utilisés pour le
                courrier électronique, le transfert de fichiers et le stockage.
              </p>
              <ul>
                <li>Apache</li>
                <li>
                  <Link to="/iis">Internet Information Services (IIS)</Link>
                </li>
                <li>Nginx</li>
                <li>
                  <Link to="/kestrel">Kestrel</Link>
                </li>
              </ul>
            </div>
          </article>
          <article id="in-process">
            <h6> in-process HTTP</h6>
            <div>
              <p>ASP.NET Core est fourni avec les composants suivants :</p>
              <ul>
                <li>
                  <Link to="/kestrel">Kestrel server</Link>
                </li>
                <li>
                  <Link to="/iis">IIS HTTP Server</Link>
                </li>
                <li>
                  <Link to="/httpsys">HTTP.sys server</Link>
                </li>
              </ul>
            </div>
          </article>
          <article id="kestrel-httpsys">
            <h6>
              <Link to="/kestrel">Kestrel</Link> vs.{" "}
              <Link to="/httpsys">HTTP.sys</Link>
            </h6>
            <div>
              <p>
                <Link to="/kestrel">Kestrel</Link> offre les avantages suivants
                par rapport à<Link to="/httpsys">HTTP.sys</Link>&nbsp;:
              </p>
              <ul>
                <li>Meilleures performances et utilisation de la mémoire.</li>
                <li>Multiplateforme</li>
                <li>
                  L’agilité, elle est développée et corrigée indépendamment du
                  système d’exploitation.
                </li>
                <li>
                  Configuration du port et du protocole TLS par programmation
                </li>
                <li>
                  Extensibilité qui autorise les protocoles tels que PPv2 et les
                  transports alternatifs.
                </li>
              </ul>
              <p>
                <Link to="/httpsys">HTTP.sys</Link> fonctionne comme un
                composant partagé en mode noyau avec les fonctionnalités
                suivantes que <Link to="/kestrel">Kestrel</Link> n’a pas:
              </p>
              <ul>
                <li>Partage de port</li>
                <li>
                  Authentification Windows en mode noyau.{" "}
                  <Link to="/kestrel">Kestrel</Link> prend en charge uniquement
                  l’authentification en mode utilisateur.
                </li>
                <li>Proxy rapide via les transferts de file d’attente</li>
                <li>Transmission de fichier directe</li>
                <li>Mise en cache des réponses</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
