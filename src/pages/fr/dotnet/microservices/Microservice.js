import React from "react";
import { Link } from "react-router-dom";

export default function Microservice() {
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
                    href="#transitioning"
                  >
                    Transitioning
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#microservices-monolithic"
                  >
                    Microservices-Monolithic
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#monolithic"
                  >
                    Monolithic
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#microservices"
                  >
                    Microservices
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
                  >
                    ViewBag, ViewData and TempData
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                    HTTPS, HTTP and SSL
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                    HTTP Request Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >
                    JWT
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >
                    Services, Microservices, Web API, Web API vs WCF
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
          <h3>Monolith - Microservices</h3>
          <article id="transitioning">
            <h6>Transitioning</h6>
            <div>
              <p>
                Passer d'une <strong>architecture monolithique</strong> à une
                architecture <strong>microservices</strong> est un processus
                complexe qui nécessite une <strong>stratégie structurée</strong>{" "}
                pour éviter les risques et garantir une transition fluide.
              </p>
              <ol>
                <li>Identifier les objectifs et cartographier le monolithe.</li>
                <li>
                  Découper le monolithe progressivement (
                  <strong>Strangler Pattern</strong>).
                </li>
                <li>
                  Définir les interfaces de communication (REST, gRPC, Broker).
                </li>
                <li>
                  Gérer la <strong>cohérence des données</strong> avec Saga ou
                  CQRS.
                </li>
                <li>
                  Automatiser le déploiement avec <strong>CI/CD</strong> et
                  conteneurisation.
                </li>
                <li>
                  Surveiller l'observabilité avec <strong>logging</strong> et{" "}
                  <strong>monitoring</strong>.
                </li>
                <li>
                  Renforcer la <strong>sécurité</strong> (API Gateway, OAuth2).
                </li>
                <li>
                  Valider avec des <strong>tests</strong> continus et former les
                  équipes.
                </li>
              </ol>
              <h6>
                <strong>1. Comprendre les motivations et les objectifs</strong>
              </h6>
              <p>
                Avant de commencer, identifiez les <strong>raisons</strong> pour
                lesquelles vous souhaitez passer aux microservices :
              </p>
              <ul>
                <li>
                  <strong>Scalabilité</strong> : Besoin de gérer des charges
                  élevées.
                </li>
                <li>
                  <strong>Agilité</strong> : Faciliter le développement et le
                  déploiement indépendants.
                </li>
                <li>
                  <strong>Résilience</strong> : Isolation des pannes pour éviter
                  qu'une erreur ne bloque tout le système.
                </li>
                <li>
                  <strong>Maintenance</strong> : Réduction de la complexité du
                  code en le divisant en plusieurs services.
                </li>
              </ul>
              <blockquote>
                <p>
                  <strong>Exemple :</strong> Un monolithe devient trop grand,
                  les cycles de déploiement sont lents, ou l'équipe a besoin de
                  travailler sur différentes fonctionnalités en parallèle.
                </p>
              </blockquote>
              <h6>
                <strong>2. Analyser le monolithe actuel</strong>
              </h6>
              <ul>
                <li>
                  <strong>Cartographier l'architecture</strong> : Identifiez les
                  composants, modules et leurs <strong>dépendances</strong>.
                </li>
                <li>
                  <strong>Identifier les points d'étranglement</strong> :
                  Trouvez les <strong>zones critiques</strong> où des problèmes
                  de performance ou de maintenance sont récurrents.
                </li>
                <li>
                  <strong>Décomposer par domaine métier</strong> (DDD -
                  Domain-Driven Design) :
                  <ul>
                    <li>
                      Découpez l'application en <strong>sous-domaines</strong>{" "}
                      logiques.
                    </li>
                    <li>
                      Identifiez les <strong>services candidats</strong> pour
                      devenir des microservices indépendants.
                    </li>
                  </ul>
                </li>
              </ul>
              <blockquote>
                <p>
                  <strong>Exemple :</strong> Une application e-commerce peut
                  être divisée en services comme :{" "}
                  <strong>Gestion des commandes</strong>,{" "}
                  <strong>Paiement</strong>, <strong>Catalogue produits</strong>
                  , <strong>Notification</strong>.
                </p>
              </blockquote>
              <h6>
                <strong>3. Découper progressivement le monolithe</strong>
              </h6>
              <p>
                Adoptez une approche <strong>stratégique et itérative</strong>{" "}
                pour la transition :
              </p>
              <ol>
                <li>
                  <strong>Strangler Pattern</strong> : Déplacez progressivement
                  des fonctionnalités vers de nouveaux microservices tout en
                  gardant le monolithe fonctionnel.
                  <ul>
                    <li>
                      Les nouvelles fonctionnalités sont développées sous forme
                      de microservices.
                    </li>
                    <li>
                      Les anciennes fonctionnalités du monolithe sont remplacées
                      progressivement.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Start Small</strong> : Commencez par des{" "}
                  <strong>services simples</strong> à faible risque, comme des
                  services de lecture ou des <strong>API externes</strong>.
                </li>
              </ol>
              <blockquote>
                <p>
                  <strong>Exemple :</strong> Le module "notifications" peut être
                  extrait en tant que premier microservice, car il est souvent{" "}
                  <strong>faiblement couplé</strong> avec le reste du monolithe.
                </p>
              </blockquote>
              <h6>
                <strong>4. Définir les interfaces de communication</strong>
              </h6>
              <p>
                Les microservices communiquent souvent via des{" "}
                <strong>APIs</strong> ou des messages asynchrones :
              </p>
              <ul>
                <li>
                  <strong>RESTful APIs</strong> : Simples et efficaces pour des
                  communications <strong>synchrones</strong>.
                </li>
                <li>
                  <strong>gRPC</strong> : Plus rapide et efficace grâce au
                  protocole <strong>HTTP/2</strong> et <strong>Protobuf</strong>
                  .
                </li>
                <li>
                  <strong>Message Broker</strong> : Utilisez{" "}
                  <strong>RabbitMQ</strong>, <strong>Kafka</strong> ou{" "}
                  <strong>MassTransit</strong> pour des communications
                  asynchrones, par exemple pour les événements interservices.
                </li>
              </ul>
              <h6>
                <strong>5. Assurer la cohérence des données</strong>
              </h6>
              <p>
                La gestion des <strong>données distribuées</strong> est l’un des
                défis majeurs des microservices :
              </p>
              <ul>
                <li>
                  <strong>Base de données par microservice</strong> : Chaque
                  service doit posséder sa propre base de données pour éviter
                  les dépendances.
                </li>
                <li>
                  <strong>Consistance éventuelle</strong> : Acceptez qu'il y ait
                  un léger délai avant que les données soient synchronisées
                  entre les services.
                </li>
                <li>
                  <strong>Patterns</strong> comme <strong>Saga</strong> ou{" "}
                  <strong>CQRS</strong> :
                  <ul>
                    <li>
                      <strong>Saga</strong> : Orchestration de transactions
                      réparties entre plusieurs microservices.
                    </li>
                    <li>
                      <strong>CQRS</strong> : Séparation des responsabilités{" "}
                      <strong>lecture</strong> (Query) et{" "}
                      <strong>écriture</strong> (Command).
                    </li>
                  </ul>
                </li>
              </ul>
              <blockquote>
                <p>
                  <strong>Exemple :</strong> Lorsqu'une commande est passée, un
                  microservice de paiement peut traiter la transaction, puis un
                  événement est envoyé à un autre service pour l'expédition.
                </p>
              </blockquote>
              <h6>
                <strong>6. Automatiser le déploiement (CI/CD)</strong>
              </h6>
              <ul>
                <li>
                  Mettre en place une <strong>pipeline CI/CD</strong> pour
                  automatiser le <strong>build</strong>, les{" "}
                  <strong>tests</strong>, et le <strong>déploiement</strong> de
                  chaque microservice.
                </li>
                <li>
                  Utilisez des outils comme :
                  <ul>
                    <li>
                      <strong>Docker</strong> : Conteneurisation des services
                      pour faciliter les déploiements.
                    </li>
                    <li>
                      <strong>Kubernetes</strong> : Orchestration des conteneurs
                      pour gérer le déploiement, la scalabilité et la
                      résilience.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>7. Gérer l'observabilité</strong>
              </h6>
              <p>
                Dans une architecture microservices, il est crucial de pouvoir
                surveiller et comprendre le fonctionnement de l’ensemble du
                système :
              </p>
              <ul>
                <li>
                  <strong>Monitoring</strong> : Utilisez des outils comme{" "}
                  <strong>Prometheus</strong>, <strong>Grafana</strong> ou{" "}
                  <strong>ELK</strong> pour surveiller les services.
                </li>
                <li>
                  <strong>Logging centralisé</strong> : Rassemblez les logs de
                  tous les services dans une plateforme comme{" "}
                  <strong>ElasticSearch</strong> ou <strong>Graylog</strong>.
                </li>
                <li>
                  <strong>Traçage distribué</strong> : Outils comme{" "}
                  <strong>Jaeger</strong> ou <strong>Zipkin</strong> pour suivre
                  le chemin des requêtes à travers plusieurs services.
                </li>
              </ul>
              <h6>
                <strong>8. Gérer les défis de sécurité</strong>
              </h6>
              <ul>
                <li>
                  <strong>Authentification et Autorisation</strong> : Utilisez{" "}
                  <strong>Identity Server</strong>, <strong>OAuth2</strong>, et{" "}
                  <strong>OpenID Connect</strong> pour sécuriser les APIs.
                </li>
                <li>
                  <strong>Gateway API</strong> : Implémentez une passerelle
                  comme <strong>Ocelot</strong> ou <strong>API Gateway</strong>{" "}
                  pour gérer les appels d'API entrants et la sécurité.
                </li>
              </ul>
              <h6>
                <strong>9. Tester et valider chaque étape</strong>
              </h6>
              <ul>
                <li>
                  <strong>Tests unitaires</strong> : Testez chaque service
                  individuellement.
                </li>
                <li>
                  <strong>Tests d’intégration</strong> : Vérifiez la
                  communication entre les services.
                </li>
                <li>
                  <strong>Tests de charge</strong> : Évaluez la scalabilité du
                  système pour éviter les goulets d’étranglement.
                </li>
              </ul>
              <h6>
                <strong>10. Former l’équipe et gérer le changement</strong>
              </h6>
              <ul>
                <li>
                  Passez d’une mentalité <strong>monolithique</strong> à une
                  approche <strong>orientée microservices</strong>.
                </li>
                <li>
                  Assurez-vous que les équipes sont formées sur des outils comme{" "}
                  <strong>Docker</strong>, <strong>Kubernetes</strong>,{" "}
                  <strong>MassTransit</strong>, ou <strong>RabbitMQ</strong>.
                </li>
              </ul>
            </div>
          </article>
          <article id="microservices-monolithic">
            <h6>Microservices vs Monolithic</h6>
            <div>
              <ul>
                <li>
                  <strong>Monolithique</strong> : Convient aux{" "}
                  <strong>petites applications</strong> où la simplicité et la
                  rapidité de développement sont prioritaires. Toutefois, cela
                  devient difficile à maintenir et scaler lorsque l'application
                  devient complexe.
                </li>
                <li>
                  <strong>Microservices</strong> : Idéal pour des applications{" "}
                  <strong>grandes et évolutives</strong>, avec plusieurs équipes
                  travaillant indépendamment sur des services autonomes. Cela
                  apporte{" "}
                  <strong>scalabilité, flexibilité et résilience</strong> mais
                  au prix d’une complexité initiale plus élevée.
                </li>
              </ul>
              <table className="table tabe-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Critères</strong>
                    </th>
                    <th>
                      <strong>Architecture Monolithique</strong>
                    </th>
                    <th>
                      <strong>Architecture Microservices</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Définition</strong>
                    </td>
                    <td>
                      Application unique où tous les composants sont intégrés en
                      un seul bloc.
                    </td>
                    <td>
                      Application composée de plusieurs services indépendants et
                      autonomes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Déploiement</strong>
                    </td>
                    <td>Déploiement d’un seul bloc (tout ou rien).</td>
                    <td>Chaque service peut être déployé indépendamment.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Scalabilité</strong>
                    </td>
                    <td>
                      Scalabilité horizontale limitée (duplique l'ensemble de
                      l'application).
                    </td>
                    <td>
                      Scalabilité fine : chaque service peut être scalé
                      indépendamment.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Complexité</strong>
                    </td>
                    <td>
                      Simplicité initiale mais complexité croissante avec la
                      taille du projet.
                    </td>
                    <td>
                      Complexité initiale plus élevée due à la gestion des
                      services.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Maintenance</strong>
                    </td>
                    <td>
                      Difficulté à modifier une partie sans impacter l'ensemble.
                    </td>
                    <td>
                      Maintenance plus facile car les services sont découplés.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Technologies</strong>
                    </td>
                    <td>
                      Une seule technologie ou stack pour l'ensemble du projet.
                    </td>
                    <td>
                      Chaque microservice peut utiliser une technologie
                      différente.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Communication</strong>
                    </td>
                    <td>
                      Communication interne rapide, via appels de fonctions.
                    </td>
                    <td>
                      Communication via réseau (REST, gRPC, ou message brokers).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cohérence des données</strong>
                    </td>
                    <td>
                      Transactions globales gérées facilement (bases
                      centralisées).
                    </td>
                    <td>
                      Transactions complexes réparties entre services (ex:{" "}
                      <strong>Saga</strong>).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Résilience</strong>
                    </td>
                    <td>Une erreur peut affecter tout le système.</td>
                    <td>
                      Les pannes sont isolées à un service spécifique (tolérance
                      aux pannes).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Déploiement continu</strong>
                    </td>
                    <td>Plus difficile à implémenter (un gros bloc).</td>
                    <td>
                      Plus facile avec CI/CD, chaque service peut évoluer
                      séparément.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Temps de développement</strong>
                    </td>
                    <td>Rapide au début, mais ralentit avec la croissance.</td>
                    <td>
                      Plus long au début, mais rapide pour des évolutions
                      futures.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Exemple d’application</strong>
                    </td>
                    <td>Petite application ou MVP (Minimum Viable Product).</td>
                    <td>
                      Application distribuée pour des systèmes complexes et
                      évolutifs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="monolithic">
            <h6>Monolithique</h6>
            <div>
              <p>
                Une <strong>architecture monolithique</strong> est une
                application unifiée où toutes les fonctionnalités (UI, logique
                métier et accès aux données) sont regroupées et déployées comme
                un seul bloc.
              </p>
              <h6>
                <strong>
                  Caractéristiques d'une architecture monolithique :
                </strong>
              </h6>
              <ol>
                <li>
                  <strong>Application unique</strong> : Tout le code (interface
                  utilisateur, logique métier, accès aux données) est regroupé
                  dans un seul projet et déployé en bloc.
                </li>
                <li>
                  <strong>Base de données centralisée</strong> : Généralement,
                  une seule base de données est utilisée pour l'ensemble de
                  l'application.
                </li>
                <li>
                  <strong>Couplage fort</strong> : Les composants sont fortement
                  dépendants les uns des autres, rendant les modifications
                  complexes.
                </li>
                <li>
                  <strong>Communication interne</strong> : Les appels entre les
                  composants sont faits directement via des{" "}
                  <strong>fonctions</strong> ou des <strong>classes</strong>{" "}
                  dans le même processus.
                </li>
                <li>
                  <strong>Déploiement unique</strong> : Toute l'application est
                  compilée et déployée en une seule fois.
                </li>
                <li>
                  <strong>Scalabilité limitée</strong> : Pour gérer plus de
                  trafic, l'application entière doit être répliquée.
                </li>
              </ol>
              <h6>
                <strong>Avantages d'une architecture monolithique :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Simplicité de développement</strong> : Plus facile à
                  concevoir, développer, et tester pour de petites équipes.
                </li>
                <li>
                  <strong>Déploiement simplifié</strong> : Un seul artefact à
                  déployer.
                </li>
                <li>
                  <strong>Performance</strong> : Pas de communication réseau
                  entre composants (tout se passe localement).
                </li>
                <li>
                  <strong>Debugging facilité</strong> : Tracer les erreurs est
                  plus simple, car tout est dans un seul processus.
                </li>
                <li>
                  <strong>Adaptée aux petites applications</strong> : Idéale
                  pour les projets <strong>simples</strong> ou{" "}
                  <strong>MVP</strong> (Minimum Viable Product).
                </li>
              </ol>
              <h6>
                <strong>Inconvénients d'une architecture monolithique :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Difficulté de scalabilité</strong> : On ne peut pas
                  scalé un seul module indépendamment ; il faut déployer toute
                  l'application.
                </li>
                <li>
                  <strong>Maintenance complexe</strong> : Avec la croissance du
                  projet, le code devient volumineux et difficile à comprendre.
                </li>
                <li>
                  <strong>Couplage fort</strong> : Les changements dans un
                  module risquent d'impacter les autres composants.
                </li>
                <li>
                  <strong>Déploiement risqué</strong> : Une modification
                  nécessite de redéployer l'ensemble, augmentant les risques de
                  régressions.
                </li>
                <li>
                  <strong>Limitation technologique</strong> : Impossible
                  d'utiliser différentes technologies pour des composants
                  spécifiques.
                </li>
                <li>
                  <strong>Résilience faible</strong> : Une{" "}
                  <strong>erreur</strong> dans un module peut entraîner une
                  panne globale.
                </li>
              </ol>
              <h6>
                <strong>Cas d'usage d'une architecture monolithique :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Petites applications ou prototypes</strong> : Où les
                  fonctionnalités et les équipes sont limitées.
                </li>
                <li>
                  <strong>Applications avec peu de charge</strong> : Si le
                  besoin de scalabilité est faible.
                </li>
                <li>
                  <strong>Développement rapide</strong> : Les applications avec
                  des cycles de développement courts et un objectif MVP.
                </li>
              </ol>
              <h6>
                <strong>Quand passer aux microservices ?</strong>
              </h6>
              <ul>
                <li>
                  Lorsque l'application devient <strong>complexe</strong> et
                  difficile à maintenir.
                </li>
                <li>
                  Lorsque des équipes travaillent sur des fonctionnalités{" "}
                  <strong>différentes</strong>.
                </li>
                <li>
                  Lorsque la <strong>scalabilité</strong> et la{" "}
                  <strong>résilience</strong> deviennent cruciales.
                </li>
              </ul>
              <p>
                <strong>Résumé</strong> : Une architecture{" "}
                <strong>monolithique</strong> est simple, efficace pour les
                petites applications, mais peut devenir un frein pour des
                systèmes <strong>complexes</strong> et{" "}
                <strong>scalables</strong>. 🚀
              </p>
            </div>
          </article>
          <article id="microservices">
            <h6>Microservices</h6>
            <div>
              <p>
                <p>
                  Une <strong>architecture microservices</strong> divise une
                  application en{" "}
                  <strong>
                    services indépendants, autonomes et déployables séparément
                  </strong>
                  , chacun ayant une responsabilité spécifique et communiquant
                  via des APIs ou des messages.
                </p>
              </p>
              <h6>
                <strong>
                  Caractéristiques d'une architecture microservices :
                </strong>
              </h6>
              <ol>
                <li>
                  <strong>Services indépendants</strong> : L’application est
                  divisée en <strong>petits services autonomes</strong> avec des
                  responsabilités spécifiques.
                </li>
                <li>
                  <strong>Déploiement indépendant</strong> : Chaque microservice
                  peut être développé, testé et déployé séparément.
                </li>
                <li>
                  <strong>Communication via APIs</strong> : Les microservices
                  interagissent principalement via des{" "}
                  <strong>APIs REST, gRPC</strong> ou des{" "}
                  <strong>messages asynchrones</strong> (ex. RabbitMQ, Kafka).
                </li>
                <li>
                  <strong>Base de données par service</strong> : Chaque service
                  possède généralement sa propre base de données pour garantir
                  un <strong>découplage</strong>.
                </li>
                <li>
                  <strong>Scalabilité fine</strong> : Chaque service peut être{" "}
                  <strong>scalé indépendamment</strong> en fonction de la
                  charge.
                </li>
                <li>
                  <strong>Hétérogénéité technologique</strong> : Les services
                  peuvent utiliser des technologies différentes selon leurs
                  besoins.
                </li>
                <li>
                  <strong>Résilience</strong> : Une panne d’un service n’impacte
                  pas nécessairement les autres services.
                </li>
              </ol>
              <h6>
                <strong>Avantages d'une architecture microservices :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Flexibilité technologique</strong> : Chaque service
                  peut être développé avec la technologie la plus adaptée.
                </li>
                <li>
                  <strong>Scalabilité</strong> : Permet de{" "}
                  <strong>scaler uniquement les services critiques</strong>,
                  optimisant les ressources.
                </li>
                <li>
                  <strong>Déploiement rapide</strong> : Facilite les
                  déploiements fréquents et continus grâce aux pipelines CI/CD.
                </li>
                <li>
                  <strong>Résilience accrue</strong> : Une panne d’un service
                  est <strong>isolée</strong>, préservant les autres services.
                </li>
                <li>
                  <strong>Maintenance simplifiée</strong> : Les petits services
                  sont plus faciles à comprendre et à maintenir.
                </li>
                <li>
                  <strong>Développement en équipe</strong> : Plusieurs équipes
                  peuvent travailler <strong>en parallèle</strong> sur
                  différents services.
                </li>
                <li>
                  <strong>Adapté aux grands systèmes</strong> : Permet de gérer
                  des applications <strong>complexes</strong> et{" "}
                  <strong>distribuées</strong>.
                </li>
              </ol>
              <h6>
                <strong>
                  Inconvénients d'une architecture microservices :
                </strong>
              </h6>
              <ol>
                <li>
                  <strong>Complexité accrue</strong> : Gestion du réseau, des{" "}
                  <strong>APIs</strong>, de la <strong>sécurité</strong> et des
                  bases de données multiples.
                </li>
                <li>
                  <strong>Coût opérationnel</strong> : Nécessite des outils pour
                  l'<strong>orchestration</strong> (Docker, Kubernetes) et le{" "}
                  <strong>monitoring</strong>.
                </li>
                <li>
                  <strong>Gestion des données distribuées</strong> : Difficulté
                  pour assurer la <strong>cohérence des données</strong> (ex :
                  Sagas).
                </li>
                <li>
                  <strong>Latence réseau</strong> : Les communications entre
                  services ajoutent des délais par rapport aux appels internes
                  d’un monolithe.
                </li>
                <li>
                  <strong>Debugging complexe</strong> : Suivre une requête dans
                  un système distribué nécessite du <strong>traçage</strong> (ex
                  : Zipkin, Jaeger).
                </li>
                <li>
                  <strong>Sécurité</strong> : Chaque service doit être sécurisé
                  individuellement, augmentant les risques d’erreurs.
                </li>
                <li>
                  <strong>Surcoût infrastructure</strong> : Nécessite plus de
                  ressources pour héberger plusieurs services.
                </li>
              </ol>
              <h6>
                <strong>Cas d'usage d'une architecture microservices :</strong>
              </h6>
              <ol>
                <li>
                  <strong>Applications complexes et évolutives</strong> :
                  Plateformes comme <strong>Amazon</strong> ou{" "}
                  <strong>Netflix</strong>, avec de nombreuses fonctionnalités à
                  développer et scaler.
                </li>
                <li>
                  <strong>
                    Applications nécessitant une haute disponibilité
                  </strong>{" "}
                  : Les microservices isolent les pannes pour éviter des
                  interruptions globales.
                </li>
                <li>
                  <strong>Développement rapide et agile</strong> :
                  Environnements où les équipes doivent livrer des
                  fonctionnalités <strong>en parallèle</strong>.
                </li>
                <li>
                  <strong>Systèmes distribués</strong> : Gestion des charges
                  importantes grâce à la{" "}
                  <strong>scalabilité horizontale</strong>.
                </li>
                <li>
                  <strong>
                    Applications nécessitant des technologies variées
                  </strong>{" "}
                  : Permet d’utiliser des stacks technologiques spécifiques par
                  service.
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
