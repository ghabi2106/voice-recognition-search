import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Jwt() {
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
                    href="#stateful-stateless"
                  >
                    Stateful VS Stateless
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#jwt"
                  >
                    jwt
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Use of jwt
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#structure"
                  >
                    Structure
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#header"
                  >
                    Header
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#playload"
                  >
                    Playload
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#signature"
                  >
                    Signature
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#do-work"
                  >
                    do-work jwt
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#local-storage-security"
                  >
                    Local storage security
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cookie-security"
                  >
                    Cookie Security
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#xss"
                  >
                    XSS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#csrf"
                  >
                    CSRF
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>JWT</h3>
          <article id="stateful-stateless">
            <h6>Stateful VS Stateless</h6>
            <p>
              Ainsi, la principale différence entre l'application SPA et
              l'application multipage en ce qui concerne l'authentification est
              que les données de session sont stockées ou non sur le serveur. Ou
              en d'autres termes, les applications multipages ont une approche
              dite d'authentification Stateful et SPA une approche Stateless.
            </p>
          </article>
          <article id="jwt">
            <h6>JWT</h6>
            <div>
              <p>
                JSON Web Token (JWT) est une norme ouverte utilisée pour
                partager des informations de sécurité entre deux parties : un
                client et un serveur. Chaque JWT contient des objets JSON codés,
                y compris un ensemble de revendications. Les JWT sont signés à
                l'aide d'un algorithme cryptographique pour garantir que les
                revendications ne peuvent pas être modifiées après l'émission du
                jeton.
              </p>
              <p>
                L'API REST Stateless nécessite le stockage des données de
                session côté client. Un composant clé pour ce faire est un JWT
                qui contient les données d'authentification pouvant être
                transmises en toute confiance entre les deux parties
                client-serveur.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>Quand devez-vous utiliser les jetons Web JSON ?</h6>
            <ul>
              <li>
                <strong>Authorization</strong>: C'est le scénario le plus
                courant pour l'utilisation de JWT. Une fois que l'utilisateur
                est autentifié, chaque requête va inclure le JWT, permettant à
                l'utilisateur d'accéder aux routes, services et ressources
                autorisés avec ce token.
              </li>
              <li>
                <strong>Information Exchange</strong>: JSON Web Tokens sont un
                bon moyen de transmettre en toute sécurité des informations
                entre les parties
              </li>
            </ul>
          </article>
          <article id="structure">
            <h6>Quelle est la structure du jeton Web JSON ?</h6>
            <div>
              <p>
                Sous sa forme compacte, JSON Web Tokens se composent de trois
                parties séparées par des points (<code>.</code>), qui sont :
              </p>
              <ul>
                <li>Header</li>
                <li>Payload</li>
                <li>Signature</li>
              </ul>
              <p>
                Par conséquent, un JWT ressemble généralement à ce qui suit.
              </p>
              <p>
                <code>xxxxx.yyyyy.zzzzz</code>
              </p>
            </div>
          </article>
          <article id="header">
            <h6>Header</h6>
            <div>
              <p>
                L'entête se compose <em>généralement </em> de deux parties: le
                type de token, qui est JWT, et l'algorithme de signature
                utilisé, tel que HMAC SHA256 ou RSA.
              </p>
              <p>Par exemple:</p>
              <Highlight language="javascript">
                {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
              </Highlight>
              <p>
                Ensuite, ce JSON est codé en Base64Url pour former la première
                partie du JWT.
              </p>
            </div>
          </article>
          <article id="playload">
            <h6>Payload</h6>
            <div>
              <p>
                La deuxième partie du token est la payload, qui contient les
                claims. Claims sont des déclarations sur une entité
                (généralement, l'utilisateur).
              </p>
              <p>Par example:</p>
              <Highlight language="javascript">
                {`{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}`}
              </Highlight>
              <p>
                The payload est ensuite codée en <strong>Base64Url</strong> pour
                former la deuxième partie du the JSON Web Token.
              </p>
            </div>
          </article>
          <article id="signature">
            <h6>Signature</h6>
            <div>
              <p>
                Pour créer la partie signature, vous devez prendre l'en-tête
                codé, la Playload codée, un secret, l'algorithme spécifié dans
                l'en-tête et le signer.
              </p>
              <p>
                Par exemple si vous souhaitez utiliser l'algorithme HMAC SHA256,
                la signature sera créée de la manière suivante :
              </p>
              <Highlight language="javascript">
                {`HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  secret)`}
              </Highlight>
            </div>
          </article>
          <article id="do-work">
            <h6>Comment fonctionnent les jetons Web JSON ?</h6>
            <div>
              <p>
                Chaque fois que l'utilisateur souhaite accéder à une route ou à
                une ressource protégée, l'agent utilisateur doit envoyer le JWT,
                généralement dans l'en- tête d' <strong>autorisation</strong> à
                l'aide du schéma <strong>Bearer</strong> . Le contenu de
                l'en-tête doit ressembler à ce qui suit:
              </p>
              <Highlight language="javascript">
                {`Authorization: Bearer <token>`}
              </Highlight>
            </div>
          </article>
          <article id="local-storage-security">
            <h6>Local storage n'est pas sécurisé contre l'attaque XSS</h6>
            <p>
              Un modèle courant que j'ai vu dans SPA est que les développeurs
              ont tendance à stocker le token JWT dans le stockage local du
              navigateur, puis à inclure le token dans un en-tête d'autorisation
              pour chaque demande. Ce qui est bien jusqu'à ce que des questions
              de sécurité se posent. Étant donné que le stockage local est
              lisible à partir de Javascript, une simple attaque de script
              intersite (cross-site-scripting) ou XSS pourrait lire le token JWT
              et ouvrir des portes pour usurper l'identité d'un utilisateur.
            </p>
          </article>
          <article id="cookie-security">
            <h6>Cookies sont plus sécurisé contre XSS et CSRF attaques</h6>
            <div>
              <p>
                Les cookies sont également lisibles par javascript. Pour
                empêcher Javascript d'accéder à un cookie. On le définit avec un
                indicateur HttpOnly HttpOnly flag. Javascript ne pourra pas lire
                ce cookie.
              </p>
              <p>
                Mais avec les cookies, les anciens problèmes de sécurité
                redeviennent pertinents. Lorsque vous envoyez une demande, tous
                les cookies du domaine des cookies sont également envoyés. Cela
                signifie que si une victime effectue une requête à l'API depuis
                le site malveillant de l'attaquant, des cookies, comme les
                cookies de session, sont également envoyés. Ce risque de
                sécurité est connu sous le nom de CSRF - cross-site request
                forgery.
              </p>
              <ul>
                <li>
                  <strong>En-tête de requête personnalisé</strong>, comme «
                  x-requested-with », qui est ensuite vérifié côté serveur. Cela
                  fonctionne, en raison de la restriction selon laquelle seul
                  JavaScript peut être utilisé pour ajouter un en-tête
                  personnalisé sur les requêtes Ajax, et uniquement dans son
                  origine.
                </li>
                <li>
                  <strong>SameSite cookie flag,</strong> pratiquement, cela
                  signifie que le cookie ne sera envoyé que si le site pour le
                  cookie correspond au site actuellement affiché dans la barre
                  d'URL du navigateur.
                </li>
              </ul>
            </div>
          </article>
          <article id="xss">
            <h6>XSS</h6>
            <p>
              Les attaques Cross-Site Scripting (XSS) sont un type d'injection,
              dans lequel des scripts malveillants sont injectés dans des sites
              Web par ailleurs inoffensifs et fiables. Les attaques XSS se
              produisent lorsqu'un attaquant utilise une application Web pour
              envoyer du code malveillant, généralement sous la forme d'un
              script côté navigateur, à un autre utilisateur final.
            </p>
          </article>
          <article id="csrf">
            <h6>CSRF</h6>
            <p>
              Cross-Site Request Forgery (CSRF) est une attaque qui oblige un
              utilisateur final à exécuter des actions indésirables sur une
              application Web dans laquelle il est actuellement authentifié. Si
              la victime est un compte administratif, CSRF peut compromettre
              l'intégralité de l'application Web.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
