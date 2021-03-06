import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Kestrel() {
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
                    href="#kestrel"
                  >
                    Kestrel
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reverse-proxy"
                  >
                    use Kestrel with a reverse proxy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#forwarded-headers"
                  >
                    Forwarded headers
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
          <h3>Kestrel</h3>
          <article id="kestrel">
            <h6>Kestrel</h6>
            <div>
              <p>
                Kestrelest un serveur Web multiplateforme pour ASP.net Core.
                Kestrelest le serveur web qui est inclus et activ?? par d??faut
                dans les mod??les de projet ASP.NET Core.
              </p>
              <img
                src="img/dotnet/kestrel-default-config.PNG"
                alt="kestrel-default-config"
              />
            </div>
          </article>
          <article id="reverse-proxy">
            <h6>use Kestrel with a reverse proxy</h6>
            <div>
              <p>
                Kestrelpeut ??tre utilis?? seul ou avec un serveur proxy inverse,
                tel que Internet Information Services (IIS), Nginxou Apache. Un
                serveur proxy inverse re??oit les requ??tes HTTP ?? partir du
                r??seau et les transf??re vers Kestrel .
              </p>
              <p>
                Kestrel utilis?? en tant que serveur Web Edge (accessible sur
                Internet) :
              </p>
              <img
                src="img/dotnet/kestrel-to-internet2.png"
                alt="kestrel-to-internet2"
              />
              <p>Kestrel utilis?? dans une configuration de proxy inverse :</p>
              <img
                src="img/dotnet/kestrel-to-internet.png"
                alt="kestrel-to-internet"
              />
              <p>
                L???une ou l???autre des configurations, avec ou sans serveur proxy
                inverse, est une configuration d???h??bergement prise en charge.
              </p>
              <p>
                Lorsque Kestrel est utilis?? comme serveur Edge sans serveur
                proxy inverse, le partage de la m??me adresse IP et du m??me port
                entre plusieurs processus n???est pas pris en charge. Lorsque
                Kestrel est configur?? pour ??couter sur un port, Kestrel g??re
                tout le trafic pour ce port, quels que soient les Host en-t??tes
                des demandes. Un proxy inverse pouvant partager des ports peut
                transf??rer des demandes ?? Kestrel sur une adresse IP et un port
                uniques.
              </p>
              <p>
                M??me si un serveur proxy inverse n???est pas n??cessaire, en
                utiliser un peut ??tre un bon choix.
              </p>
              <p>Un proxy inverse :</p>
              <ul>
                <li>
                  Peut limiter la surface publique expos??e des applications
                  qu???il h??berge.
                </li>
                <li>
                  Fournit une couche suppl??mentaire de configuration et de
                  d??fense.
                </li>
                <li>Peut mieux s???int??grer ?? l???infrastructure existante.</li>
                <li>
                  Simplifie la configuration de l?????quilibrage de charge et d???une
                  communication s??curis??e (HTTPS). Seul le serveur proxy inverse
                  requiert un certificat X. 509 et ce serveur peut communiquer
                  avec les serveurs de l???application sur le r??seau interne ??
                  l???aide du protocole HTTP simple.
                </li>
              </ul>
            </div>
          </article>
          <article id="forwarded-headers">
            <h6>Forwarded headers</h6>
            <div>
              <ul>
                <li>
                  Quand les requ??tes HTTPS sont transmises par proxy via HTTP,
                  le sch??ma d???origine (HTTPS) est perdu et doit ??tre transf??r??
                  dans un en-t??te.
                </li>
                <li>
                  ??tant donn?? qu???une requ??te adress??e ?? une application transite
                  par le proxy au lieu de provenir directement de sa source sur
                  Internet ou le r??seau d???entreprise, l???adresse IP cliente
                  d???origine doit ??galement ??tre transf??r??e dans un en-t??te.
                </li>
              </ul>
              <p>
                L???intergiciel d???en-t??tes transf??r?? ( ForwardedHeadersMiddleware
                ) lit ces en-t??tes et remplit les champs associ??s sur
                HttpContext .
              </p>
              <p>The middleware updates:</p>
              <ul>
                <li>
                  HttpContext. Connection. RemoteIpAddress: d??fini ?? l???aide de
                  la <code>X-Forwarded-For</code> valeur d???en-t??te. Des
                  param??tres suppl??mentaires d??terminent la fa??on dont le
                  middleware d??finit <code>RemoteIpAddress</code>.
                </li>
                <li>
                  HttpContext. Request. Scheme: d??fini ?? l???aide de la{" "}
                  <code>X-Forwarded-Proto</code> valeur d???en-t??te.
                </li>
                <li>
                  HttpContext. Request. Host: d??fini ?? l???aide de la{" "}
                  <code>X-Forwarded-Host</code> valeur d???en-t??te.
                </li>
              </ul>
              <Highlight language="csharp">
                {`public void ConfigureServices(IServiceCollection services)
{
    services.Configure<ForwardedHeadersOptions>(options =>
    {
        options.ForwardedHeaders =
            ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto;
    });
}

public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseForwardedHeaders();
    }
    else
    {
        app.UseForwardedHeaders();
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
