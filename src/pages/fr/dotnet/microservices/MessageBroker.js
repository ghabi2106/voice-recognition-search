import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function MessageBroker() {
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
                    href="#rabbitmq"
                  >
                    RabbitMQ
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#masstransit"
                  >
                    MassTransit
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#http-message-based"
                  >
                    Http vs Message-based
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>Message Broker</h3>
          <article id="rabbitmq">
            <h6>RabbitMQ</h6>
            <div>
              <p>
                <strong>RabbitMQ</strong> is an open-source message broker that
                enables asynchronous communication between services by passing
                and routing messages using the AMQP protocol.
              </p>
            </div>
          </article>
          <article id="masstransit">
            <h6>MassTransit</h6>
            <div>
              <h6>
                <strong>
                  Résumé : Pourquoi utiliser MassTransit avec RabbitMQ ?
                </strong>
              </h6>
              <ol>
                <li>
                  <strong>Simplicité</strong> : API haut niveau qui masque la
                  complexité de RabbitMQ.
                </li>
                <li>
                  <strong>Gestion des erreurs</strong> : Réessais automatiques
                  et support des <strong>Dead-Letter Queues</strong>.
                </li>
                <li>
                  <strong>Patterns avancés</strong> : Facilité d'implémentation
                  de <strong>pub/sub</strong>, <strong>request/response</strong>{" "}
                  et <strong>sagas</strong>.
                </li>
                <li>
                  <strong>Scalabilité</strong> : Gestion native du parallélisme
                  et du clustering.
                </li>
                <li>
                  <strong>Observabilité</strong> : Monitoring intégré pour
                  assurer le suivi des messages.
                </li>
              </ol>
              <h6>
                <strong>1. Abstraction et simplicité</strong>
              </h6>
              <ul>
                <li>
                  <strong>MassTransit</strong> simplifie l’utilisation de{" "}
                  <strong>RabbitMQ</strong> en fournissant une{" "}
                  <strong>API haut niveau</strong> pour les actions courantes
                  comme <strong>Send</strong>, <strong>Publish</strong> et{" "}
                  <strong>Consume</strong>.
                </li>
                <li>
                  Vous n'avez pas besoin de gérer manuellement les{" "}
                  <strong>exchanges</strong>, <strong>queues</strong> et{" "}
                  <strong>bindings</strong>, ce qui réduit la complexité du
                  code.
                </li>
              </ul>
              <h6>
                <strong>2. Patterns de messagerie avancés</strong>
              </h6>
              <p>
                MassTransit facilite l'implémentation de patterns complexes avec
                RabbitMQ :
              </p>
              <ul>
                <li>
                  <strong>Publish/Subscribe</strong> : Diffusion d'événements à
                  plusieurs consommateurs.
                </li>
                <li>
                  <strong>Request/Response</strong> : Gestion des requêtes avec
                  des réponses asynchrones.
                </li>
                <li>
                  <strong>Command/Event</strong> : Découplage entre services
                  grâce à des commandes ou événements.
                </li>
              </ul>
              <p>
                Ces patterns sont difficiles à implémenter directement avec
                l’API de RabbitMQ.
              </p>
              <h6>
                <strong>3. Gestion des erreurs et des retries</strong>
              </h6>
              <ul>
                <li>
                  MassTransit offre une gestion intégrée des{" "}
                  <strong>réessais</strong> automatiques en cas d’échec d’un
                  message (<strong>retry policies</strong>).
                </li>
                <li>
                  Il gère également les{" "}
                  <strong>Dead-Letter Queues (DLQ)</strong> pour les messages
                  qui ne peuvent pas être traités après plusieurs tentatives.
                </li>
              </ul>
              <h6>
                <strong>4. Configuration simplifiée</strong>
              </h6>
              <p>
                MassTransit automatise la configuration des{" "}
                <strong>exchanges</strong> et <strong>queues</strong> dans
                RabbitMQ, réduisant les erreurs humaines.
              </p>
              <p>Exemple simple en C# :</p>
              <Highlight language="csharp">
                {`busConfigurator.UsingRabbitMq((context, cfg) =>
{
    cfg.Host("rabbitmq-server", h =>
    {
        h.Username("user");
        h.Password("password");
    });
});`}
              </Highlight>
              <h6>
                <strong>5. Scalabilité</strong>
              </h6>
              <ul>
                <li>
                  <strong>MassTransit</strong> facilite la{" "}
                  <strong>scalabilité horizontale</strong> des consommateurs
                  RabbitMQ, permettant le traitement parallèle des messages.
                </li>
                <li>
                  La charge est distribuée automatiquement sur plusieurs
                  instances de consommateurs.
                </li>
              </ul>
              <h6>
                <strong>6. Orchestration de workflows avec Sagas</strong>
              </h6>
              <ul>
                <li>
                  MassTransit propose un support natif pour les{" "}
                  <strong>Sagas</strong>, qui permettent d’orchestrer des
                  workflows complexes à travers plusieurs microservices.
                </li>
                <li>
                  Les Sagas peuvent être persistées dans des bases comme{" "}
                  <strong>Entity Framework</strong> ou <strong>MongoDB</strong>.
                </li>
              </ul>
              <h6>
                <strong>7. Monitoring et observabilité</strong>
              </h6>
              <ul>
                <li>
                  Intégration facile avec des outils de monitoring comme{" "}
                  <strong>Prometheus</strong>, <strong>Grafana</strong>, ou{" "}
                  <strong>Application Insights</strong>.
                </li>
                <li>
                  Facilite la traçabilité des messages grâce au{" "}
                  <strong>logging</strong> et à la surveillance des files
                  d’attente.
                </li>
              </ul>
              <h6>
                <strong>8. Flexibilité et compatibilité</strong>
              </h6>
              <ul>
                <li>
                  MassTransit est compatible avec plusieurs autres systèmes de
                  messagerie (Azure Service Bus, Amazon SQS, etc.), ce qui
                  facilite la migration ou l’ajout de nouvelles technologies
                  sans refactorisation majeure.
                </li>
                <li>
                  Il s’intègre parfaitement dans les applications{" "}
                  <strong>.NET Core</strong> et <strong>.NET 6+</strong>.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
