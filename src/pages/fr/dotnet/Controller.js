import React from "react";
import { Link } from "react-router-dom";

export default function Controller() {
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
                    href="#action-method"
                  >
                    Action method
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#action-result"
                  >
                    Action Result
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#action-selectors"
                  >
                    Action Selectors
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
                    to="/mvc"
                  >
                    MVC
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
                    to="/controller"
                  >Controller</Link>
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
          <h3>Sélecteurs d'actions</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <p>
              Le contrôleur gère la demande de l'utilisateur. En règle générale,
              l'utilisateur utilise la vue et génère une requête HTTP, qui sera
              gérée par le contrôleur. Le contrôleur traite la demande et
              renvoie la vue appropriée en réponse.
            </p>
          </article>
          <article id="action-method">
            <h6>Action method</h6>
            <div>
              <p>
                Toutes les méthodes publiques de la classe Controller sont
                appelées méthodes Action.
              </p>
              <img src="/img/dotnet/action-method.png" alt="action method"/>
              <ul>
                <li>
                  La méthode d'action doit être publique. Il ne peut pas être
                  privé ou protégé.
                </li>
                <li>La méthode d'action ne peut pas être surchargée.</li>
                <li>
                  La méthode d'action ne peut pas être une méthode statique.
                </li>
              </ul>
            </div>
          </article>
          <article id="action-result">
            <h6>Action Result</h6>
            <div>
              <p>
                ActionResult est une classe de base de tous les types de
                résultats qui renvoient de la ActionMethod.
              </p>
              <p>
                ActionResult représentent différents types de réponses, telles
                que HTML, fichier, chaîne, JSON, javascript, etc.
              </p>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th class="w-50">Result Class</th>
                    <th class="w-50">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ViewResult</td>
                    <td>Représente le HTML et le balisage.</td>
                  </tr>
                  <tr>
                    <td>EmptyResult</td>
                    <td>Représente Aucune réponse.</td>
                  </tr>
                  <tr>
                    <td>ContentResult</td>
                    <td>Represents string literal.</td>
                  </tr>
                  <tr>
                    <td>FileContentResult/ FilePathResult/ FileStreamResult</td>
                    <td>Représente le contenu d'un fichier.</td>
                  </tr>
                  <tr>
                    <td>JavaScriptResult</td>
                    <td>Représenter un script JavaScript.</td>
                  </tr>
                  <tr>
                    <td>JsonResult</td>
                    <td>Représente JSON qui peut être utilisé dans AJAX.</td>
                  </tr>
                  <tr>
                    <td>RedirectResult</td>
                    <td>Représente une redirection vers une nouvelle URL.</td>
                  </tr>
                  <tr>
                    <td>RedirectToRouteResult</td>
                    <td>
                      Représente une autre action du même ou d'un autre
                      contrôleur.
                    </td>
                  </tr>
                  <tr>
                    <td>PartialViewResult</td>
                    <td>Renvoie le code HTML à partir de la vue partielle.</td>
                  </tr>
                  <tr>
                    <td>HttpUnauthorizedResult</td>
                    <td>Renvoie l'état HTTP 403.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="action-selectors">
            <h6>Action Selectors</h6>
            <div>
              <p>
                Action Selector est un attribut qui peut être appliqué aux
                méthodes d'action.
              </p>
              <ul>
                <li>
                  ActionName : L'attribut ActionName nous permet de spécifier un
                  nom d'action différent du nom de la méthode
                </li>
                <li>
                  NonAction : l'attribut NonAction est utilisé lorsqu'on une
                  méthode publique dans un contrôleur mais qu'on ne veut pas le
                  traiter comme une méthode d'action.
                </li>
                <li>
                  ActionVerbs : Le sélecteur ActionVerbs doit gérer différents
                  types de requêtes Http.
                </li>
              </ul>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Http method</th>
                    <th>Usage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>GET</td>
                    <td> Pour récupérer les informations du serveur.</td>
                  </tr>
                  <tr>
                    <td>POST</td>
                    <td>Pour créer une nouvelle ressource.</td>
                  </tr>
                  <tr>
                    <td>PUT</td>
                    <td>Pour mettre à jour une ressource existante.</td>
                  </tr>
                  <tr>
                    <td>HEAD</td>
                    <td>
                      Identique à GET sauf que le serveur ne renvoie pas le
                      corps du message.
                    </td>
                  </tr>
                  <tr>
                    <td>OPTIONS</td>
                    <td>
                      Il représente une demande d'informations sur les options
                      de communication prises en charge par le serveur Web.
                    </td>
                  </tr>
                  <tr>
                    <td>DELETE</td>
                    <td>Pour supprimer une ressource existante.</td>
                  </tr>
                  <tr>
                    <td>PATCH</td>
                    <td>
                      Pour mettre à jour complètement ou partiellement la
                      ressource.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
