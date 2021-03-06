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
          <h3>HTTPS, HTTP et SSL</h3>
          <article id="https">
            <h6>HTTPS</h6>
            <div>
              <p>
                HTTPS signifie Hyper Text Transfer Protocol Secure. Il s'agit
                d'un protocole permettant de s??curiser la communication entre
                deux syst??mes, par exemple le navigateur et le serveur Web.
              </p>
              <p>
                https utilise la technologie SSL/TSL pour s??curiser la
                communication entre les deux syst??mes. TSL est la nouvelle
                version de SSL.
              </p>
            </div>
          </article>
          <article id="ssl">
            <h6>Secure Socket Layer (SSL)</h6>
            <div>
              <p>
                SSL est la technologie de s??curit?? standard pour ??tablir un lien
                crypt?? entre les deux syst??mes. Ceux-ci peuvent ??tre du
                navigateur au serveur, du serveur au serveur ou du client au
                serveur. Fondamentalement, SSL garantit que le transfert de
                donn??es entre les deux syst??mes reste crypt?? et priv??.
              </p>
              <p>
                Le https est essentiellement http sur SSL. SSL ??tablit un lien
                crypt?? ?? l'aide d'un certificat SSL, ??galement appel?? certificat
                num??rique.
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
                    Transf??re les donn??es au format hypertexte (texte structur??)
                  </td>
                  <td>Transf??re les donn??es au format crypt??</td>
                </tr>
                <tr>
                  <td>Utilise le port 80 par d??faut</td>
                  <td>Utilise le port 443 par d??faut</td>
                </tr>
                <tr>
                  <td>Non s??curis??</td>
                  <td>S??curis?? gr??ce ?? la technologie SSL</td>
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
                <strong>Communication s??curis??e :</strong> https ??tablit une
                connexion s??curis??e en ??tablissant un lien crypt?? entre le
                navigateur et le serveur ou deux syst??mes.
              </li>
              <li>
                <strong>Int??grit?? des donn??es :</strong> https fournit
                l'int??grit?? des donn??es en cryptant les donn??es et ainsi, m??me
                si les pirates parviennent ?? pi??ger les donn??es, ils ne peuvent
                pas les lire ou les modifier.
              </li>
              <li>
                <strong>Confidentialit?? et s??curit?? :</strong> https prot??ge la
                confidentialit?? et la s??curit?? des utilisateurs du site Web en
                emp??chant les pirates d'??couter passivement la communication
                entre le navigateur et le serveur.
              </li>
              <li>
                <strong>Performances plus rapides :</strong> https augmente la
                vitesse de transfert des donn??es par rapport ?? http en cryptant
                et en r??duisant la taille des donn??es.
              </li>
              <li>
                <strong>SEO : L'</strong> utilisation de https augmente le
                classement SEO. Dans Google Chrome, Google affiche l'??tiquette{" "}
                <b>Non s??curis??</b> dans le navigateur si les donn??es des
                utilisateurs sont collect??es via http.
              </li>
              <li>
                <strong>Avenir :</strong> https repr??sente l'avenir du Web en
                rendant Internet s??r pour les utilisateurs et les propri??taires
                de sites Web.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
