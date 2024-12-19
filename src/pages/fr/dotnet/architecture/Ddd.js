import React from "react";
import { Link } from "react-router-dom";

export default function Ddd() {
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
                    className="d-inline-flex align-items-center rounded active"
                    href="#introduction"
                  >
                    Introduction
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
                    to="/clean"
                  >
                    Clean Architecture
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cqrs"
                  >
                    CQRS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/ddd"
                  >
                    DDD
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
          <h3>DDD</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                <strong>Domain-Driven Design (DDD)</strong> est une approche de
                conception logicielle qui place le domaine métier au cœur du
                développement. Il vise à aligner la structure du logiciel sur
                les concepts métier, facilitant la compréhension, la
                collaboration et l'adaptation aux besoins métier.
              </p>
              <h6>
                <strong>Principes clés de DDD :</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Focus sur le domaine métier</strong> :
                    <ul>
                      <li>
                        Le logiciel doit refléter les règles, concepts et
                        logiques métier.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>
                      Collaboration entre experts métier et développeurs
                    </strong>{" "}
                    :
                    <ul>
                      <li>
                        Les experts métier (domain experts) travaillent
                        étroitement avec les équipes techniques pour garantir un
                        alignement précis.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Modèle métier explicite</strong> :
                    <ul>
                      <li>
                        Le code doit être organisé pour représenter clairement
                        les concepts métier.
                      </li>
                    </ul>
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Utilisation d'un langage ubiquitaire</strong> :
                    <ul>
                      <li>
                        Un vocabulaire partagé entre les développeurs et les
                        experts métier, utilisé dans le code et la
                        documentation.
                      </li>
                    </ul>
                  </p>
                </li>
              </ol>
              <h6>
                <strong>1. Identification des concepts métier :</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Domaines métier :</strong>
                  </p>
                  <ul>
                    <li>Commandes (Order Management)</li>
                    <li>Paiement (Payment Processing)</li>
                    <li>Livraison (Shipping)</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Concepts clés :</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Commande</strong> (Order) : Une entité avec des
                      produits, un client, une adresse.
                    </li>
                    <li>
                      <strong>Produit</strong> (Product) : Un objet valeur avec
                      nom, prix et quantité.
                    </li>
                    <li>
                      <strong>Paiement</strong> : Processus métier gérant les
                      transactions financières.
                    </li>
                    <li>
                      <strong>Livraison</strong> : Gestion de l'expédition des
                      commandes.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>2. Définir les Bounded Contexts :</strong>
              </h6>
              <p>
                Chaque domaine est isolé dans son propre contexte pour éviter
                les dépendances non maîtrisées.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Bounded Context</strong>
                    </th>
                    <th>
                      <strong>Responsabilité</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Commande</strong>
                    </td>
                    <td>Création, gestion et suivi des commandes.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Paiement</strong>
                    </td>
                    <td>
                      Traitement des paiements et vérification des transactions.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Livraison</strong>
                    </td>
                    <td>Gestion des adresses et suivi de l'expédition.</td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>
                  3. Définir les composants clés pour le contexte Commande :
                </strong>
              </h6>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Composant</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Entity</strong>
                    </td>
                    <td>
                      <code>Order</code> (possède une identité unique).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Value Object</strong>
                    </td>
                    <td>
                      <code>Product</code> (défini uniquement par ses attributs
                      comme le nom et le prix).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Aggregate</strong>
                    </td>
                    <td>
                      <code>Order</code> (agrège les produits et gère leur
                      cohérence).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Repository</strong>
                    </td>
                    <td>
                      <code>OrderRepository</code> (interagit avec la base de
                      données pour les commandes).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Domain Event</strong>
                    </td>
                    <td>
                      <code>OrderPlaced</code> (signale qu'une commande a été
                      passée).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Service</strong>
                    </td>
                    <td>
                      <code>OrderService</code> (contient les logiques métier
                      complexes comme les promotions).
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>
                  5. Domain Events pour les intégrations inter-contexte :
                </strong>
              </h6>
              4
              <ul>
                <li>
                  <strong>Event</strong> : <code>OrderPlaced</code> déclenche :
                  <ul>
                    <li>
                      Contexte Paiement : Démarrer le traitement du paiement.
                    </li>
                    <li>
                      Contexte Livraison : Préparer la commande pour
                      l'expédition.
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
