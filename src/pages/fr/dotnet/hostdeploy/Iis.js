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
                s??curis?? et facile ?? g??rer pour h??berger des applications web, y
                compris des ASP.NET Core.
              </p>
              <p>
                Lors de la g??n??ration d???un h??te dans{" "}
                <code>CreateHostBuilder</code> (<code>Program.cs</code>),
                appelez CreateDefaultBuilder pour activer l???int??gration d???IIS :
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
                fonctionner avec IIS. ex??cutez ASP.NET Core des applications
                avec IIS en proc??dant de l???une des deux :
              </p>
              <ul>
                <li>
                  l???h??bergement d???une application ASP.NET Core ?? l???int??rieur du
                  processus de travail IIS (<code>w3wp.exe</code>), appel??
                  mod??le d???h??bergement in-process.
                </li>
                <li>
                  transfert des requ??tes web ?? un serveur principal ASP.NET Core
                  application ex??cutant le Kestrel serveur, appel?? mod??le
                  d???h??bergement hors processus.
                </li>
              </ul>
            </div>
          </article>
          <article id="in-of-process">
            <h6>In-process hosting with IIS</h6>
            <div>
              <p>
                l???h??bergement In-process ex??cute une application ASP.NET Core
                dans le m??me processus que son processus de travail IIS.
                L???h??bergement in-process offre de meilleures performances que
                l???h??bergement out-of-process parce que les requ??tes n???ont pas de
                proxy sur l???adaptateur de bouclage, interface r??seau qui
                retourne du trafic r??seau sortant ?? la m??me machine.
              </p>
              <img src="img/dotnet/ancm-inprocess.png" alt="ancm-inprocess" />
              <p>
                Pour configurer explicitement une application pour l???h??bergement
                in-process, affectez ?? la{" "}
                <code>&lt;AspNetCoreHostingModel&gt;</code> propri??t?? la valeur{" "}
                <code>InProcess</code> dans le fichier projet ({" "}
                <code>.csproj</code> ) :
              </p>
              <Highlight language="xml">
                {`<PropertyGroup>
  <AspNetCoreHostingModel>InProcess</AspNetCoreHostingModel>
</PropertyGroup>`}
              </Highlight>
              <p>Le d??roulement g??n??ral d???une requ??te est le suivant :</p>
              <ol>
                <li>
                  Une requ??te arrive du web au pilote HTTP.sys en mode noyau.
                </li>
                <li>
                  Le pilote achemine la requ??te native vers IIS sur le port
                  configur?? du site web, g??n??ralement 80&nbsp;(HTTP) ou
                  443&nbsp;(HTTPS).
                </li>
                <li>
                  le Module ASP.NET Core re??oit la demande native et la transmet
                  au serveur HTTP IIS ( <code>IISHttpServer</code> ). Le serveur
                  HTTP IIS est une impl??mentation du serveur in-process pour IIS
                  qui convertit la requ??te native en requ??te manag??e.
                </li>
              </ol>
              <p>Une fois que le serveur HTTP IIS a trait?? la requ??te :</p>
              <ol>
                <li>
                  la demande est envoy??e au pipeline de l???intergiciel
                  (middleware) ASP.NET Core.
                </li>
                <li>
                  Le pipeline de middlewares traite la requ??te et la passe en
                  tant qu???instance de <code>HttpContext</code> ?? la logique de
                  l???application.
                </li>
                <li>
                  La r??ponse de l???application est retransmise ?? IIS via le
                  serveur HTTP IIS.
                </li>
                <li>
                  IIS envoie la r??ponse au client qui a initi?? la demande.
                </li>
              </ol>
            </div>
          </article>
          <article id="out-of-process">
            <h6>Out-of-process hosting with IIS</h6>
            <div>
              <p>
                ??tant donn?? que ASP.NET Core applications s???ex??cutent dans un
                processus distinct du processus de travail IIS, le Module
                ASP.NET Core g??re la gestion des processus. Le module d??marre le
                processus pour l???application ASP.NET Core quand la premi??re
                requ??te arrive, et il red??marre l???application si elle s???arr??te
                ou se bloque.
              </p>
              <img
                src="img/dotnet/ancm-outofprocess.png"
                alt="ancm-outofprocess"
              />
              <ol>
                <li>
                  Les requ??tes arrivent du web au pilote HTTP.sys en mode noyau.
                </li>
                <li>
                  Le pilote achemine les requ??tes vers IIS sur le port configur??
                  du site Web. Le port configur?? est g??n??ralement 80 (HTTP) ou
                  443 (HTTPs).
                </li>
                <li>
                  Le module transf??re les demandes ?? Kestrel sur un port
                  al??atoire pour l???application. Le port al??atoire n???est pas 80
                  ou 443.
                </li>
              </ol>
              <p>
                Pour configurer une application pour l???h??bergement hors
                processus, affectez ?? la propri??t?? la valeur{" "}
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
