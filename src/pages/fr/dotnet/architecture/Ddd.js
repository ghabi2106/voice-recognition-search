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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#layers"
                  >
                    Layers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dis-advantages"
                  >
                    Advantages and disadvantages
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
                La conception DDD (Domain-Driven Design) préconise une
                modélisation basée sur la réalité de l’entreprise applicable à
                vos cas d’usage. Dans le contexte de la génération
                d’applications, DDD traite les problèmes comme des domaines.
                Elle décrit les problèmes indépendants comme des contextes
                délimités (chaque contexte délimité correspond à un
                microservice) et met l’accent sur un langage commun pour
                discuter de ces problèmes. Il suggère également de nombreux
                concepts et modèles techniques, tels que les entités de domaine
                avec des modèles enrichis, des objets de valeur, des agrégats et
                des règles racine d’agrégation (ou entité racine) pour prendre
                en charge l’implémentation interne.
              </p>
              <p>
                En résumé, DDD est un excellent modèle pour les systèmes avec
                une logique métier complexe, les systèmes qui nécessitent une
                maintenance et une amélioration futures.
              </p>
            </div>
          </article>
          <article id="layers">
            <h6>Layers in DDD microservices</h6>
            <div>
              <img
                className="mw-900"
                src="/img/dotnet/domain-driven-design-microservice.png"
                alt="clean-architecture-monolothic"
              />
              <p>
                Dépendances dans un service de conception DDD : la couche
                Application dépend des couches Domaine et Infrastructure, la
                couche Infrastructure dépend de la couche Domaine, mais la
                couche Domaine ne dépend d’aucune couche. Cette conception de
                couche doit être indépendante pour chaque microservice.
              </p>
              <img
                className="mw-900"
                src="/img/dotnet/ddd-service-layer-dependencies.png"
                alt="clean-architecture-monolothic"
              />
            </div>
          </article>
          <article id="dis-advantages">
            <h6>Advantages and disadvantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Couplage lâche</em>:
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Flexibilité</em>: Les couplages lâches et les
                    définitions de haut niveau permettent à l'équipe d'améliorer
                    et de s'adapter aux nouvelles exigences fonctionnelles avec
                    plus de flexibilité sans impact considérable sur le système
                    global.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Testabilité</em>:
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Maintenance</em>:
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    <em>Expertise du domaine</em>: DDD requires extensive domain
                    expertise. It means that your team needs to have at least
                    one domain expert. They will help you define all of the
                    processes, procedures, and terminology of that domain.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    <em>Faibles interactions</em>: La connexion lâche entre les
                    différentes parties oblige l'équipe à communiquer et à
                    échanger régulièrement. Ainsi, avant d'appliquer l'approche
                    DDD, l'équipe doit d'abord discuter de ses principes en
                    détail.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    <em>Coûts de développement</em>: les experts du domaine et
                    l'équipe doivent implémenter une grande partie de
                    l'isolation et de l'encapsulation dans le modèle de domaine.
                    Cela se traduit souvent par un développement et une durée
                    plus longs qui peuvent avoir un coût relativement élevé. Par
                    conséquent, il n'est pas bien adapté aux projets à court
                    terme ou aux projets sans complexité de domaine élevée.
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
