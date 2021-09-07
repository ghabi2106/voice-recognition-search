import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Iis() {
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
                    href="#iis"
                  >
                    IIS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#aspnet-core-module"
                  >
                    ASP.NET Core Module
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-of-process"
                  >
                    In-process hosting with IIS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#out-of-process"
                  >
                    Out-of-process hosting with IIS
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
          <h3>Internet Information Services (IIS)</h3>
          <article id="iis">
            <h6>IIS</h6>
            <div>
              <p>
                Internet Information Services (IIS) est un serveur web flexible,
                sécurisé et facile à gérer pour héberger des applications web, y
                compris des ASP.NET Core.
              </p>
              <p>
                Lors de la génération d’un hôte dans{" "}
                <code>CreateHostBuilder</code> (<code>Program.cs</code>),
                appelez CreateDefaultBuilder pour activer l’intégration d’IIS :
              </p>
              <Highlight language="csharp">
                {`public static IHostBuilder CreateHostBuilder(string[] args) =>
    Host.CreateDefaultBuilder(args)
        ...`}
              </Highlight>
            </div>
          </article>
          <article id="aspnet-core-module">
            <h6>ASP.NET Core Module</h6>
            <div>
              <p>
                le module ASP.NET Core est un module iis natif qui se connecte
                au pipeline iis, ce qui permet aux applications ASP.NET Core de
                fonctionner avec IIS. exécutez ASP.NET Core des applications
                avec IIS en procédant de l’une des deux :
              </p>
              <ul>
                <li>
                  l’hébergement d’une application ASP.NET Core à l’intérieur du
                  processus de travail IIS (<code>w3wp.exe</code>), appelé
                  modèle d’hébergement in-process.
                </li>
                <li>
                  transfert des requêtes web à un serveur principal ASP.NET Core
                  application exécutant le Kestrel serveur, appelé modèle
                  d’hébergement hors processus.
                </li>
              </ul>
            </div>
          </article>
          <article id="in-of-process">
            <h6>In-process hosting with IIS</h6>
            <div>
              <p>
                l’hébergement In-process exécute une application ASP.NET Core
                dans le même processus que son processus de travail IIS.
                L’hébergement in-process offre de meilleures performances que
                l’hébergement out-of-process parce que les requêtes n’ont pas de
                proxy sur l’adaptateur de bouclage, interface réseau qui
                retourne du trafic réseau sortant à la même machine.
              </p>
              <img src="img/dotnet/ancm-inprocess.png" alt="ancm-inprocess" />
              <p>
                Pour configurer explicitement une application pour l’hébergement
                in-process, affectez à la{" "}
                <code>&lt;AspNetCoreHostingModel&gt;</code> propriété la valeur{" "}
                <code>InProcess</code> dans le fichier projet ({" "}
                <code>.csproj</code> ) :
              </p>
              <Highlight language="xml">
                {`<PropertyGroup>
  <AspNetCoreHostingModel>InProcess</AspNetCoreHostingModel>
</PropertyGroup>`}
              </Highlight>
              <p>Le déroulement général d’une requête est le suivant :</p>
              <ol>
                <li>
                  Une requête arrive du web au pilote HTTP.sys en mode noyau.
                </li>
                <li>
                  Le pilote achemine la requête native vers IIS sur le port
                  configuré du site web, généralement 80&nbsp;(HTTP) ou
                  443&nbsp;(HTTPS).
                </li>
                <li>
                  le Module ASP.NET Core reçoit la demande native et la transmet
                  au serveur HTTP IIS ( <code>IISHttpServer</code> ). Le serveur
                  HTTP IIS est une implémentation du serveur in-process pour IIS
                  qui convertit la requête native en requête managée.
                </li>
              </ol>
              <p>Une fois que le serveur HTTP IIS a traité la requête :</p>
              <ol>
                <li>
                  la demande est envoyée au pipeline de l’intergiciel
                  (middleware) ASP.NET Core.
                </li>
                <li>
                  Le pipeline de middlewares traite la requête et la passe en
                  tant qu’instance de <code>HttpContext</code> à la logique de
                  l’application.
                </li>
                <li>
                  La réponse de l’application est retransmise à IIS via le
                  serveur HTTP IIS.
                </li>
                <li>
                  IIS envoie la réponse au client qui a initié la demande.
                </li>
              </ol>
            </div>
          </article>
          <article id="out-of-process">
            <h6>Out-of-process hosting with IIS</h6>
            <div>
              <p>
                étant donné que ASP.NET Core applications s’exécutent dans un
                processus distinct du processus de travail IIS, le Module
                ASP.NET Core gère la gestion des processus. Le module démarre le
                processus pour l’application ASP.NET Core quand la première
                requête arrive, et il redémarre l’application si elle s’arrête
                ou se bloque.
              </p>
              <img
                src="img/dotnet/ancm-outofprocess.png"
                alt="ancm-outofprocess"
              />
              <ol>
                <li>
                  Les requêtes arrivent du web au pilote HTTP.sys en mode noyau.
                </li>
                <li>
                  Le pilote achemine les requêtes vers IIS sur le port configuré
                  du site Web. Le port configuré est généralement 80 (HTTP) ou
                  443 (HTTPs).
                </li>
                <li>
                  Le module transfère les demandes à Kestrel sur un port
                  aléatoire pour l’application. Le port aléatoire n’est pas 80
                  ou 443.
                </li>
              </ol>
              <p>
                Pour configurer une application pour l’hébergement hors
                processus, affectez à la propriété la valeur{" "}
                <code>&lt;AspNetCoreHostingModel&gt;</code>{" "}
                <code>OutOfProcess</code> dans le fichier projet ({" "}
                <code>.csproj</code> ) :
              </p>
              <Highlight language="xml">
                {`<PropertyGroup>
  <AspNetCoreHostingModel>OutOfProcess</AspNetCoreHostingModel>
</PropertyGroup>`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
