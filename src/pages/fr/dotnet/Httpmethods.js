import React from "react";
import { Link } from "react-router-dom";

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
                    href="#get-post"
                  >
                    Get vs Post
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#put"
                  >
                    Put
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#head"
                  >
                    Head
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#delete"
                  >
                    Delete
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#patch"
                  >
                    Patch
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#options"
                  >
                    Options
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
          <h3>Méthodes de requête HTTP</h3>
          <article className="" id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Le protocole HTTP (Hypertext Transfer Protocol) est conçu pour
                permettre les communications entre les clients et les serveurs.
              </p>
              <ul>
                <li>
                  <b>GET</b>
                </li>
                <li>
                  <b>POST</b>
                </li>
                <li>
                  <strong>PUT</strong>
                </li>
                <li>
                  <strong>HEAD</strong>
                </li>
                <li>
                  <strong>DELETE</strong>
                </li>
                <li>
                  <strong>PATCH</strong>
                </li>
                <li>
                  <strong>OPTIONS</strong>
                </li>
              </ul>
            </div>
          </article>
          <article className="" id="get-post">
            <h6>Get vs Post</h6>
            <div>
              <b>
                GET est utilisé pour demander des données à une ressource
                spécifiée.
              </b>
              <b>
                POST est utilisé pour envoyer des données à un serveur pour
                créer/mettre à jour une ressource.
              </b>
              <table>
                <tbody>
                  <tr>
                    <th>&nbsp;</th>
                    <th>GET</th>
                    <th>POST</th>
                  </tr>
                  <tr>
                    <td>Bookmarked</td>
                    <td>✔</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Cached</td>
                    <td>✔</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Encoding type</td>
                    <td>application/x-www-form-urlencoded</td>
                    <td>
                      application/x-www-form-urlencoded or multipart/form-data.
                      Use multipart encoding for binary data
                    </td>
                  </tr>
                  <tr>
                    <td>History</td>
                    <td>✔</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Restrictions on data length</td>
                    <td>✔ (maximum URL length is 2048 characters)</td>
                    <td>✘</td>
                  </tr>
                  <tr>
                    <td>Restrictions on data type</td>
                    <td>Only ASCII characters allowed</td>
                    <td>No restrictions. Binary data is also allowed</td>
                  </tr>
                  <tr>
                    <td>Security</td>
                    <td>
                      GET ne doivent jamais être utilisées lors du traitement de
                      données sensibles
                    </td>
                    <td>POST est plus sécurisé.</td>
                  </tr>
                  <tr>
                    <td>Visibility</td>
                    <td>Les données sont visibles dans l'URL</td>
                    <td>✘</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article className="" id="put">
            <h6>La méthode PUT</h6>
            <div>
              <b>
                PUT est utilisé pour envoyer des données à un serveur pour
                créer/mettre à jour une ressource.
              </b>
              <p>
                La différence entre POST et PUT est que les requêtes PUT sont
                idempotentes. C'est-à-dire qu'appeler plusieurs fois la même
                requête PUT produira toujours le même résultat. En revanche,
                l'appel répété d'une requête POST a pour effet secondaire de
                créer plusieurs fois la même ressource.
              </p>
            </div>
          </article>
          <article className="" id="head">
            <h6>La méthode HEAD</h6>
            <div>
              <b>
                HEAD est presque identique à GET, mais sans le corps de la
                réponse.
              </b>
              <p>
                En d'autres termes, si GET /users renvoie une liste
                d'utilisateurs, alors HEAD /users fera la même requête mais ne
                renverra pas la liste des utilisateurs.
              </p>
              <p>
                Les requêtes HEAD sont utiles pour vérifier ce qu'une requête
                GET retournera avant de faire une requête GET - comme avant de
                télécharger un fichier volumineux ou un corps de réponse.
              </p>
            </div>
          </article>
          <article className="" id="delete">
            <h6>La méthode DELETE</h6>
            <p>La méthode DELETE supprime la ressource spécifiée.</p>
          </article>
          <article className="" id="patch">
            <h6>La méthode Patch</h6>
            <div>
              <p>
                Lorsqu'un client doit remplacer entièrement une ressource
                existante, il peut utiliser PUT. Lorsqu'ils effectuent une mise
                à jour partielle, ils peuvent utiliser HTTP PATCH.
              </p>
              <p>
                Un autre aspect important à considérer ici est l'idempotence;
                PUT est idempotent; PATCH peut être, mais n'est pas obligatoire.
              </p>
              <p>
                La méthode PUT fournit une version modifiée de la ressource
                demandée qui remplace la version originale de la ressource,
                tandis que la méthode PATCH fournit un ensemble d'instructions
                pour modifier la ressource.
              </p>
              <img src="/img/dotnet/patch-put.PNG" alt="Patch Put image" />
            </div>
          </article>
          <article className="" id="options">
            <h6>La méthode OPTIONS</h6>
            <div>
              <p>
                La méthode OPTIONS décrit les options de communication pour la
                ressource cible.
              </p>
              <ul>
                <li>
                  Identification des méthodes de requête autorisées:
                  <ul>
                    <li>
                      <mark>Allow: OPTIONS, GET, HEAD, POST</mark>
                    </li>
                  </ul>
                </li>
                <li>
                  Demandes contrôlées en amont dans CORS:
                  <ul>
                    <li>
                      <mark>
                        Access-Control-Allow-Origin: https://foo.example
                      </mark>
                    </li>
                    <li>
                      <mark>
                        Access-Control-Allow-Methods: POST, GET, OPTIONS
                      </mark>
                    </li>
                    <li>
                      <mark>
                        Access-Control-Allow-Headers: X-PINGOTHER, Content-Type
                      </mark>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
