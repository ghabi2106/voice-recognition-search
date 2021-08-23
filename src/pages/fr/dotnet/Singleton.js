import React from "react";
import { Link } from "react-router-dom";

export default function Singleton() {
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
                    href="#sigleton"
                  >
                    Singleton
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#mediator"
                  >
                    Mediator
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#observer"
                  >
                    Observer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#command"
                  >
                    Command
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
          <h3>Singleton Mediator Observer Command</h3>
          <article id="singleton">
            <h6>Singleton</h6>
            <p>
              Singleton est un patron de conception de création qui garantit que
              l’instance d’une classe n’existe qu’en un seul exemplaire, tout en
              fournissant un point d’accès global à cette instance.
            </p>
          </article>
          <article id="mediator">
            <h6>Mediator</h6>
            <p>
              Médiateur est un patron de conception comportemental qui diminue
              les dépendances chaotiques entre les objets. Il restreint les
              communications directes entre les objets et les force à collaborer
              uniquement via un objet médiateur.
            </p>
          </article>
          <article id="observer">
            <h6>Observer</h6>
            <p>
              L’Observateur est un patron de conception comportemental qui
              permet de mettre en place un mécanisme de souscription pour
              envoyer des notifications à plusieurs objets, au sujet
              d’événements concernant les objets qu’ils observent.
            </p>
          </article>
          <article id="command">
            <h6>Command</h6>
            <p>
              Commande est un patron de conception comportemental qui prend une
              action à effectuer et la transforme en un objet autonome qui
              contient tous les détails de cette action. Cette transformation
              permet de paramétrer des méthodes avec différentes actions,
              planifier leur exécution, les mettre dans une file d’attente ou
              d’annuler des opérations effectuées.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
