import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Webstorage() {
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
                    href="#storage"
                  >
                    Web Storage
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#storage-type"
                  >
                    Storage Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#local-storage"
                  >
                    localStorage
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#session-storage"
                  >
                    session-storage
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cookies"
                  >
                    Cookies
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
                  to="/css"
                >
                  CSS
                </Link>
              </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/html"
                  >
                    HTML
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/javascript"
                  >
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/webstorage"
                  >
                    Web Storage API
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/sass"
                  >
                    Sass
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/spa"
                  >
                    MPA SPA XMLHttpRequest Ajax
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
          <h3>HTML Web Storage API</h3>
          <article id="storage">
            <h6>Qu'est-ce que le stockage Web ?</h6>
            <div>
              <p>
                Avec le stockage Web, les applications Web peuvent stocker des
                donn??es localement dans le navigateur de l'utilisateur.
              </p>
              <p>
                Avant HTML5, les donn??es d'application devaient ??tre stock??es
                dans des cookies, inclus dans chaque requ??te du serveur. Le
                stockage Web est plus s??curis?? et de grandes quantit??s de
                donn??es peuvent ??tre stock??es localement, sans affecter les
                performances du site Web.
              </p>
              <p>
                Contrairement aux cookies, la limite de stockage est bien plus
                importante (au moins 5 Mo) et les informations ne sont jamais
                transf??r??es vers le serveur.
              </p>
            </div>
          </article>
          <article id="storage-type">
            <h6>HTML Web Storage Types</h6>
            <div>
              <p>
                Le stockage Web HTML fournit deux objets pour stocker des
                donn??es sur le client :
              </p>
              <ul>
                <li>
                  <code>window.localStorage</code> - stocke des donn??es sans
                  date d'expiration
                </li>
                <li>
                  <code>window.sessionStorage</code> - stocke les donn??es pour
                  une session (les donn??es sont perdues lorsque l'onglet du
                  navigateur est ferm??)
                </li>
              </ul>
            </div>
          </article>
          <article id="local-storage">
            <h6>The localStorage Object</h6>
            <div>
              <p>
                L'objet localStorage stocke les donn??es sans date d'expiration.
                Les donn??es ne seront pas supprim??es ?? la fermeture du
                navigateur et seront disponibles le jour, la semaine ou l'ann??e
                suivant.
              </p>
              <Highlight language="javascript">
                {`// Save data to localStorage
localStorage.setItem('key', 'value');

// Get saved data from localStorage
let data = localStorage.getItem('key');

// Remove saved data from localStorage
localStorage.removeItem('key');

// Remove all saved data from localStorage
localStorage.clear();`}
              </Highlight>
            </div>
          </article>
          <article id="session-storage">
            <h6>The sessionStorage Object</h6>
            <div>
              <p>
                L'objet <code>sessionStorage</code> est ??gal ?? l'objet
                localStorage, <strong>sauf</strong>
                qu'il stocke les donn??es pour une seule session. Les donn??es
                sont supprim??es lorsque l'utilisateur ferme l'onglet sp??cifique
                du navigateur.
              </p>
              <Highlight language="javascript">
                {`// Save data to sessionStorage
sessionStorage.setItem('key', 'value');

// Get saved data from sessionStorage
let data = sessionStorage.getItem('key');

// Remove saved data from sessionStorage
sessionStorage.removeItem('key');

// Remove all saved data from sessionStorage
sessionStorage.clear();`}
              </Highlight>
            </div>
          </article>
          <article id="cookies">
            <h6>Que sont les cookies ?</h6>
            <div>
              <p>
                Les cookies sont des donn??es, stock??es dans de petits fichiers
                texte, sur votre ordinateur.
              </p>
              <ul>
                <li>
                  <strong>Cookie de session : </strong> il r??side sur la machine
                  cliente pour une seule session jusqu'?? ce que l'utilisateur se
                  d??connecte.
                </li>
                <li>
                  <strong>Cookie persistant : </strong> r??side sur la machine de
                  l'utilisateur pendant une p??riode sp??cifi??e pour son
                  expiration. Cela peut ??tre une heure, un mois ou jamais.
                </li>
              </ul>
              <p>
                Lorsqu'un serveur Web a envoy?? une page Web ?? un navigateur, la
                connexion est coup??e et le serveur oublie tout de l'utilisateur.
              </p>
              <p>
                Les cookies ont ??t?? invent??s pour r??soudre le probl??me ?? comment
                m??moriser les informations sur l'utilisateur ?? :
              </p>
              <ul>
                <li>
                  Lorsqu'un utilisateur visite une page Web, son nom peut ??tre
                  stock?? dans un cookie.
                </li>
                <li>
                  La prochaine fois que l'utilisateur visite la page, le cookie
                  "se souvient" de son nom.
                </li>
              </ul>
              <p>Les cookies sont enregistr??s dans des paires nom-valeur</p>
              <p>
                Lorsqu'un navigateur demande une page Web ?? un serveur, des
                cookies appartenant ?? la page sont ajout??s ?? la demande. De
                cette fa??on, le serveur obtient les donn??es n??cessaires pour "se
                souvenir" des informations sur les utilisateurs.
              </p>
              <Highlight language="javascript">
                {`document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";`}
              </Highlight>
              <p>Deleting a cookie is very simple.</p>
              <Highlight language="javascript">
                {`document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
