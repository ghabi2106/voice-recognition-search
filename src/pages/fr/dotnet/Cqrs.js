import React from "react";
import { Link } from "react-router-dom";

export default function Cqrs() {
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
                    href="#mediator"
                  >
                    MediatR
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#request"
                  >
                    Request
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#handler"
                  >
                    Handler
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
                    to="/multilayer"
                  >
                    Architecture Multilayer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/multilayer"
                  >
                    Architecture Multilayer
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
          <h3>CQRS</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Dans les architectures traditionnelles, le même modèle de
                données est utilisé pour interroger et mettre à jour une base de
                données. C'est simple et fonctionne bien pour les opérations
                CRUD de base. Dans des applications plus complexes, cependant,
                cette approche peut devenir lourde.Par exemple, côté lecture,
                l'application peut effectuer de nombreuses requêtes différentes,
                renvoyant des objets de transfert de données (DTO) avec des
                formes différentes. Le mappage d'objets peut devenir compliqué.
                Du côté de l'écriture, le modèle peut implémenter une validation
                et une logique métier complexes. En conséquence, vous pouvez
                vous retrouver avec un modèle trop complexe qui en fait trop.
              </p>
              <p>
                CQRS traite des lectures et des écritures distinctes dans des
                modèles distincts, en utilisant des commandes pour mettre à jour
                les données et des requêtes pour lire les données.
              </p>
              <b>avoid thin controllers</b>
              <p>
                Dans les contrôleurs traditionnels, vous implémentez
                généralement presque un flux de logique métier comme Validation,
                Mapping Objects, Savings Object ou Get Object, Return HTTP
                status code of request et data response. Cependant, votre
                contrôleur deviendra plus gros.
              </p>
            </div>
          </article>
          <article id="mediator">
            <h6>MediatR</h6>
            <p>
              MediatR permet de composer des messages, de créer et d'écouter des
              événements en utilisant des modèles synchrones ou asynchrones.
              Cela aide à réduire le couplage et à isoler les préoccupations de
              demander le travail à faire(Request) et de créer le gestionnaire
              qui répartit le travail(Handler).
            </p>
          </article>
          <article id="request">
            <h6>Request</h6>
            <div>
              <p>
                Les requêtes décrivent le comportement de vos commandes et
                requêtes.
              </p>
              <img src="/img/dotnet/cqrs-request-script.PNG" alt="Request" />
            </div>
          </article>
          <article id="handler">
            <h6>Handler</h6>
            <div>
              <p>
                Lorsqu'une rquète est créée, On abesoin besoin d'un gestionnaire
                pour résoudre cette demande demande.
              </p>
              <img src="/img/dotnet/cqrs-handler-script.PNG" alt="Handler" />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
