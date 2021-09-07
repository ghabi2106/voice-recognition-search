import React from "react";
import {Link} from "react-router-dom";

export default function Dotnet() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#crossplatforme"
                  >
                    cross platforme
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#microservices"
                  >
                    microservices
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#containers"
                  >
                    containers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#performance"
                  >
                    performance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#versions"
                  >
                    versions
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
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
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
          <h3>Différence entre .Net sandard et .Net Core</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>.Net Core est plus perfermant dans les cas suivants :</p>
              <ul>
                <li>besoins multiplateformes</li>
                <li>Architecture microservices.</li>
                <li>utilisation des conteneurs d’ancrage.</li>
                <li>besoin de systèmes scalables et hautes performances.</li>
                <li>besoin de versions .NET côte à côte par application.</li>
              </ul>
            </div>
          </article>
          <article id="crossplatforme">
            <h6>Besoins multiplateformes</h6>
            <p>
              Si votre application (Web/service) doit s’exécuter sur plusieurs
              plateformes (Windows, Linux et macOS), utilisez .NET Core.
            </p>
          </article>
          <article id="microservices">
            <h6>Architecture de microservices</h6>
            <p>
              Toutes ces plateformes; Azure Service Fabric, Azure App Service et
              Docker prennent en charge .NET Core et les rendent idéales pour
              l’hébergement des microservices
            </p>
          </article>
          <article id="containers">
            <h6>Containers</h6>
            <p>
              Lorsque vous créez et déployez un conteneur, la taille de son
              image est plus petite avec .NET Core qu’avec .NET Framework. Grâce
              à sa nature multiplateforme, vous pouvez déployer des applications
              serveur sur des conteneurs Docker Linux, par exemple.
            </p>
          </article>
          <article id="performance">
            <h6>Systèmes hautes performances et évolutifs</h6>
            <p>
              Niveau de performance et scalabilité sont particulièrement
              pertinents pour les architectures en microservices. Avec ASP.NET
              Core, les systèmes sont exécutés avec un nombre bien inférieur de
              serveurs/machines virtuelles. Cette réduction engendre une baisse
              des coûts d’infrastructure et d’hébergement.
            </p>
          </article>
          <article id="versions">
            <h6>Versions .NET côte à côte par niveau d’application</h6>
            <div>
              <p>
                Pour installer des applications avec des dépendances sur
                différentes versions de .NET, il est recommandé .NET Core. Cette
                implémentation de .NET prend en charge l’installation côte à
                côte de différentes versions du Runtime .NET sur le même
                ordinateur.
              </p>
              <p>
                L’installation côte à côte n’est pas possible avec .NET
                Framework. Il s’agit d’un composant Windows, et une seule
                version peut exister sur un ordinateur à la fois. Chaque version
                de .NET Framework remplace la version précédente. Si vous
                installez une nouvelle application qui cible une version
                ultérieure de .NET Framework, vous pouvez interrompre les
                applications existantes qui s’exécutent sur l’ordinateur, car la
                version précédente a été remplacée.
              </p>
            </div>
          </article>
          <article id="dotnet">
            <h6>
              Technologies de .NET Framework non disponibles pour .NET Core
            </h6>
            <ul>
              <li>
                <p>ASP.NET Web Forms applications.</p>
              </li>
              <li>
                <p>
                  L’implémentation de serveur WCF est actuellement disponible
                  uniquement dans .NET Framework.
                </p>
              </li>
              <li>
                <p>Windows Workflow Foundation (WF).</p>
              </li>
              <li>
                <p>
                  Prise en charge linguistique : Visual Basic et F # sont
                  actuellement pris en charge dans .NET Core, mais pas pour tous
                  les types de projets.
                </p>
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
