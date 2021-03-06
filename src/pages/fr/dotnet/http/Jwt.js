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
          <h3>JWT</h3>
          <article id="stateful-stateless">
            <h6>Stateful VS Stateless</h6>
            <p>
              Ainsi, la principale diff??rence entre l'application SPA et
              l'application multipage en ce qui concerne l'authentification est
              que les donn??es de session sont stock??es ou non sur le serveur. Ou
              en d'autres termes, les applications multipages ont une approche
              dite d'authentification Stateful et SPA une approche Stateless.
            </p>
          </article>
          <article id="jwt">
            <h6>JWT</h6>
            <div>
              <p>
                JSON Web Token (JWT) est une norme ouverte utilis??e pour
                partager des informations de s??curit?? entre deux parties : un
                client et un serveur. Chaque JWT contient des objets JSON cod??s,
                y compris un ensemble de revendications. Les JWT sont sign??s ??
                l'aide d'un algorithme cryptographique pour garantir que les
                revendications ne peuvent pas ??tre modifi??es apr??s l'??mission du
                jeton.
              </p>
              <p>
                L'API REST Stateless n??cessite le stockage des donn??es de
                session c??t?? client. Un composant cl?? pour ce faire est un JWT
                qui contient les donn??es d'authentification pouvant ??tre
                transmises en toute confiance entre les deux parties
                client-serveur.
              </p>
            </div>
          </article>
          <article id="use">
            <h6>Quand devez-vous utiliser les jetons Web JSON ?</h6>
            <ul>
              <li>
                <strong>Authorization</strong>: C'est le sc??nario le plus
                courant pour l'utilisation de JWT. Une fois que l'utilisateur
                est autentifi??, chaque requ??te va inclure le JWT, permettant ??
                l'utilisateur d'acc??der aux routes, services et ressources
                autoris??s avec ce token.
              </li>
              <li>
                <strong>Information Exchange</strong>: JSON Web Tokens sont un
                bon moyen de transmettre en toute s??curit?? des informations
                entre les parties
              </li>
            </ul>
          </article>
          <article id="structure">
            <h6>Quelle est la structure du jeton Web JSON ?</h6>
            <div>
              <p>
                Sous sa forme compacte, JSON Web Tokens se composent de trois
                parties s??par??es par des points (<code>.</code>), qui sont :
              </p>
              <ul>
                <li>Header</li>
                <li>Payload</li>
                <li>Signature</li>
              </ul>
              <p>
                Par cons??quent, un JWT ressemble g??n??ralement ?? ce qui suit.
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
                L'ent??te se compose <em>g??n??ralement </em> de deux parties: le
                type de token, qui est JWT, et l'algorithme de signature
                utilis??, tel que HMAC SHA256 ou RSA.
              </p>
              <p>Par exemple:</p>
              <Highlight language="javascript">
                {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
              </Highlight>
              <p>
                Ensuite, ce JSON est cod?? en Base64Url pour former la premi??re
                partie du JWT.
              </p>
            </div>
          </article>
          <article id="playload">
            <h6>Payload</h6>
            <div>
              <p>
                La deuxi??me partie du token est la payload, qui contient les
                claims. Claims sont des d??clarations sur une entit??
                (g??n??ralement, l'utilisateur).
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
                The payload est ensuite cod??e en <strong>Base64Url</strong> pour
                former la deuxi??me partie du the JSON Web Token.
              </p>
            </div>
          </article>
          <article id="signature">
            <h6>Signature</h6>
            <div>
              <p>
                Pour cr??er la partie signature, vous devez prendre l'en-t??te
                cod??, la Playload cod??e, un secret, l'algorithme sp??cifi?? dans
                l'en-t??te et le signer.
              </p>
              <p>
                Par exemple si vous souhaitez utiliser l'algorithme HMAC SHA256,
                la signature sera cr????e de la mani??re suivante :
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
                Chaque fois que l'utilisateur souhaite acc??der ?? une route ou ??
                une ressource prot??g??e, l'agent utilisateur doit envoyer le JWT,
                g??n??ralement dans l'en- t??te d' <strong>autorisation</strong> ??
                l'aide du sch??ma <strong>Bearer</strong> . Le contenu de
                l'en-t??te doit ressembler ?? ce qui suit:
              </p>
              <Highlight language="javascript">
                {`Authorization: Bearer <token>`}
              </Highlight>
            </div>
          </article>
          <article id="local-storage-security">
            <h6>Local storage n'est pas s??curis?? contre l'attaque XSS</h6>
            <p>
              Un mod??le courant que j'ai vu dans SPA est que les d??veloppeurs
              ont tendance ?? stocker le token JWT dans le stockage local du
              navigateur, puis ?? inclure le token dans un en-t??te d'autorisation
              pour chaque demande. Ce qui est bien jusqu'?? ce que des questions
              de s??curit?? se posent. ??tant donn?? que le stockage local est
              lisible ?? partir de Javascript, une simple attaque de script
              intersite (cross-site-scripting) ou XSS pourrait lire le token JWT
              et ouvrir des portes pour usurper l'identit?? d'un utilisateur.
            </p>
          </article>
          <article id="cookie-security">
            <h6>Cookies sont plus s??curis?? contre XSS et CSRF attaques</h6>
            <div>
              <p>
                Les cookies sont ??galement lisibles par javascript. Pour
                emp??cher Javascript d'acc??der ?? un cookie. On le d??finit avec un
                indicateur HttpOnly HttpOnly flag. Javascript ne pourra pas lire
                ce cookie.
              </p>
              <p>
                Mais avec les cookies, les anciens probl??mes de s??curit??
                redeviennent pertinents. Lorsque vous envoyez une demande, tous
                les cookies du domaine des cookies sont ??galement envoy??s. Cela
                signifie que si une victime effectue une requ??te ?? l'API depuis
                le site malveillant de l'attaquant, des cookies, comme les
                cookies de session, sont ??galement envoy??s. Ce risque de
                s??curit?? est connu sous le nom de CSRF - cross-site request
                forgery.
              </p>
              <ul>
                <li>
                  <strong>En-t??te de requ??te personnalis??</strong>, comme ??
                  x-requested-with ??, qui est ensuite v??rifi?? c??t?? serveur. Cela
                  fonctionne, en raison de la restriction selon laquelle seul
                  JavaScript peut ??tre utilis?? pour ajouter un en-t??te
                  personnalis?? sur les requ??tes Ajax, et uniquement dans son
                  origine.
                </li>
                <li>
                  <strong>SameSite cookie flag,</strong> pratiquement, cela
                  signifie que le cookie ne sera envoy?? que si le site pour le
                  cookie correspond au site actuellement affich?? dans la barre
                  d'URL du navigateur.
                </li>
              </ul>
            </div>
          </article>
          <article id="xss">
            <h6>XSS</h6>
            <p>
              Les attaques Cross-Site Scripting (XSS) sont un type d'injection,
              dans lequel des scripts malveillants sont inject??s dans des sites
              Web par ailleurs inoffensifs et fiables. Les attaques XSS se
              produisent lorsqu'un attaquant utilise une application Web pour
              envoyer du code malveillant, g??n??ralement sous la forme d'un
              script c??t?? navigateur, ?? un autre utilisateur final.
            </p>
          </article>
          <article id="csrf">
            <h6>CSRF</h6>
            <p>
              Cross-Site Request Forgery (CSRF) est une attaque qui oblige un
              utilisateur final ?? ex??cuter des actions ind??sirables sur une
              application Web dans laquelle il est actuellement authentifi??. Si
              la victime est un compte administratif, CSRF peut compromettre
              l'int??gralit?? de l'application Web.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
