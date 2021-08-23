import React from "react";
import { Link } from "react-router-dom";

export default function Https() {
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
                    href="#https"
                  >
                    HTTPS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ssl"
                  >
                    Secure Socket Layer (SSL)
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#http-https"
                  >
                    http vs https
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantage of https
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
                    to="/designpattern"
                  >
                    Design Pattern
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
          <h3>HTTPS, HTTP et SSL</h3>
          <article id="https">
            <h6>HTTPS</h6>
            <div>
              <p>
                HTTPS signifie Hyper Text Transfer Protocol Secure. Il s'agit
                d'un protocole permettant de sécuriser la communication entre
                deux systèmes, par exemple le navigateur et le serveur Web.
              </p>
              <p>
                https utilise la technologie SSL/TSL pour sécuriser la
                communication entre les deux systèmes. TSL est la nouvelle
                version de SSL.
              </p>
            </div>
          </article>
          <article id="ssl">
            <h6>Secure Socket Layer (SSL)</h6>
            <div>
              <p>
                SSL est la technologie de sécurité standard pour établir un lien
                crypté entre les deux systèmes. Ceux-ci peuvent être du
                navigateur au serveur, du serveur au serveur ou du client au
                serveur. Fondamentalement, SSL garantit que le transfert de
                données entre les deux systèmes reste crypté et privé.
              </p>
              <p>
                Le https est essentiellement http sur SSL. SSL établit un lien
                crypté à l'aide d'un certificat SSL, également appelé certificat
                numérique.
              </p>
            </div>
          </article>
          <article id="http-https">
            <h6>http vs https</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>http</th>
                  <th>https</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Transfère les données au format hypertexte (texte structuré)
                  </td>
                  <td>Transfère les données au format crypté</td>
                </tr>
                <tr>
                  <td>Utilise le port 80 par défaut</td>
                  <td>Utilise le port 443 par défaut</td>
                </tr>
                <tr>
                  <td>Non sécurisé</td>
                  <td>Sécurisé grâce à la technologie SSL</td>
                </tr>
                <tr>
                  <td>
                    Commence avec <code>http://</code>
                  </td>
                  <td>
                    Commence avec <code>https://</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="advantages">
            <h6>Avantage de https</h6>
            <ul>
              <li>
                <strong>Communication sécurisée :</strong> https établit une
                connexion sécurisée en établissant un lien crypté entre le
                navigateur et le serveur ou deux systèmes.
              </li>
              <li>
                <strong>Intégrité des données :</strong> https fournit
                l'intégrité des données en cryptant les données et ainsi, même
                si les pirates parviennent à piéger les données, ils ne peuvent
                pas les lire ou les modifier.
              </li>
              <li>
                <strong>Confidentialité et sécurité :</strong> https protège la
                confidentialité et la sécurité des utilisateurs du site Web en
                empêchant les pirates d'écouter passivement la communication
                entre le navigateur et le serveur.
              </li>
              <li>
                <strong>Performances plus rapides :</strong> https augmente la
                vitesse de transfert des données par rapport à http en cryptant
                et en réduisant la taille des données.
              </li>
              <li>
                <strong>SEO : L'</strong> utilisation de https augmente le
                classement SEO. Dans Google Chrome, Google affiche l'étiquette{" "}
                <b>Non sécurisé</b> dans le navigateur si les données des
                utilisateurs sont collectées via http.
              </li>
              <li>
                <strong>Avenir :</strong> https représente l'avenir du Web en
                rendant Internet sûr pour les utilisateurs et les propriétaires
                de sites Web.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
