import React from "react";
import { Link } from "react-router-dom";

export default function Ideals() {
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
                    href="#ideals"
                  >
                    IDEALS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#interface-segregation"
                  >
                    Interface Segregation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deployability"
                  >
                    Deployability
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#event-driven"
                  >
                    Event-driven
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#availability-over-consistency"
                  >
                    Availability over Consistency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#loose-coupling"
                  >
                    Loose-coupling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#single-responsibility"
                  >
                    Single Responsibility
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
          <h3>IDEALS</h3>
          <article id="ideals">
            <h6>IDEALS</h6>
            <div>
              <p>
                Les principes <strong>IDEALS</strong> ne couvrent pas tout
                l'éventail des décisions de conception pour les solutions basées
                sur des microservices, mais ils touchent les principales
                préoccupations et facteurs de réussite pour la création de
                systèmes modernes basés sur les services.
              </p>
              <ul>
                <li>
                  <strong>I</strong>nterface segregation
                </li>
                <li>
                  <strong>D</strong>eployability (is on you)
                </li>
                <li>
                  <strong>E</strong>vent-driven
                </li>
                <li>
                  <strong>A</strong>vailability over consistency
                </li>
                <li>
                  <strong>L</strong>oose coupling
                </li>
                <li>
                  <strong>S</strong>ingle responsibility
                </li>
              </ul>
            </div>
          </article>
          <article id="interface-segregation">
            <h6>Interface Segregation</h6>
            <div>
              <p>
                Interface segregation nous indique que différents types de
                clients (par exemple, applications mobiles, applications Web,
                programmes CLI) devraient être en mesure d'interagir avec les
                services via le contrat qui correspond le mieux à leurs besoins.
              </p>
              <dl>
                <dt>Explication</dt>
                <dd>
                  L'objectif de la ségrégation d'interface pour les
                  microservices est que chaque type de frontend voit le contrat
                  de service qui correspond le mieux à ses besoins. Par exemple
                  : une application native mobile souhaite appeler des points de
                  terminaison qui répondent avec une courte représentation JSON
                  des données ; le même système a une application Web qui
                  utilise la représentation JSON complète ; il existe également
                  une ancienne application de bureau qui appelle le même service
                  et nécessite une représentation complète mais en XML.
                  Différents clients peuvent également utiliser différents
                  protocoles. Par exemple, les clients externes souhaitent
                  utiliser HTTP pour appeler un service gRPC.
                </dd>
                <dd>
                  Au lieu d'essayer d'imposer le même contrat de service (en
                  utilisant des modèles canoniques) à tous les types de clients
                  de service, nous "séparons l'interface" de sorte que chaque
                  type de client voit l'interface de service dont il a besoin.
                </dd>
                <dd>
                  Une alternative importante consiste à utiliser une passerelle
                  API. Il peut effectuer une transformation de format de
                  message, une transformation de structure de message, un
                  pontage de protocole, un routage de message et bien plus
                  encore. Une alternative populaire est le modèle Backend for
                  Frontends (BFF). Dans ce cas, nous avons une passerelle API
                  pour chaque type de client.
                </dd>
              </dl>
            </div>
          </article>
          <article id="deployability">
            <h6>Deployability</h6>
            <div>
              <p>
                La déployabilité (est sur vous) reconnaît qu'à l'ère des
                microservices, qui est également l'ère DevOps, il y a des
                décisions de conception critiques et des choix technologiques
                que les développeurs doivent faire concernant l'empaquetage, le
                déploiement et l'exécution des microservices.
              </p>
              <dl>
                <dt>Explication :</dt>
                <dd>
                  Il ya une liste de stratégies et de technologies que les
                  développeurs doivent prendre en compte dans toute solution
                  basée sur des microservices pour améliorer la déployabilité :
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>
                        Conteneurisation et orchestration de conteneurs
                      </strong>{" "}
                      : un microservice conteneurisé est beaucoup plus facile à
                      répliquer et à déployer sur les plates-formes et les
                      fournisseurs de cloud, et une plate-forme d'orchestration
                      fournit des ressources et des mécanismes partagés pour le
                      routage, la mise à l'échelle, la réplication,
                      l'équilibrage de charge, etc. Docker et Kubernetes sont
                      les normes de facto d'aujourd'hui pour la conteneurisation
                      et l'orchestration des conteneurs.
                    </li>
                    <li>
                      <strong>Service mesh</strong> : ce type d'outil peut être
                      utilisé pour la surveillance du trafic, l'application des
                      politiques, l'authentification, le RBAC, le routage, le
                      disjoncteur, la transformation des messages, entre autres
                      pour aider à la communication dans une plate-forme
                      d'orchestration de conteneurs. Les maillages de services
                      populaires incluent Istio, Linkerd et Consul Connect.
                    </li>
                    <li>
                      <strong>Passerelle API</strong> : en interceptant les
                      appels aux microservices, un produit de passerelle API
                      fournit un ensemble riche de fonctionnalités, notamment la
                      transformation des messages et le pontage de protocole, la
                      surveillance du trafic, les contrôles de sécurité, le
                      routage, le cache, la limitation des demandes et le quota
                      d'API, et la coupure de circuit. Les principaux acteurs de
                      cet espace incluent Ambassador, Kong, Apiman, WSO2 API
                      Manager, Apigee et Amazon API Gateway.
                    </li>
                    <li>
                      <strong>Architecture sans serveur</strong> : vous pouvez
                      éviter une grande partie de la complexité et des coûts
                      opérationnels de l'orchestration de conteneurs en
                      déployant vos services sur une plate-forme sans serveur,
                      qui suit le paradigme FaaS. AWS Lambda, Azure Functions et
                      Google Cloud Functions sont des exemples de plateformes
                      sans serveur.
                    </li>
                    <li>
                      <strong>Outils de surveillance</strong> : avec des
                      microservices répartis sur votre infrastructure sur site
                      et cloud, il est essentiel de pouvoir prévoir, détecter et
                      notifier les problèmes liés à la santé du système. Il
                      existe plusieurs outils de surveillance disponibles, tels
                      que New Relic, CloudWatch, Datadog, Prometheus et Grafana.
                    </li>
                    <li>
                      <strong>Outils de consolidation de logs</strong> : les
                      microservices peuvent facilement augmenter le nombre
                      d'unités de déploiement d'un ordre de grandeur. Nous avons
                      besoin d'outils pour consolider la sortie de journal de
                      ces composants, avec la possibilité de rechercher,
                      d'analyser et de générer des alertes. Les outils
                      populaires dans cet espace sont Fluentd, Graylog, Splunk
                      et ELK (Elasticsearch, Logstash, Kibana).
                    </li>
                    <li>
                      <strong>Outils de traçage</strong> : ces outils peuvent
                      être utilisés pour instrumenter vos microservices, puis
                      produire, collecter et visualiser des données de traçage à
                      l'exécution qui montrent les appels entre les services.
                      Ils vous aident à repérer les problèmes de performances
                      (et parfois même à comprendre l'architecture). Des
                      exemples d'outils de traçage sont Zipkin, Jaeger et AWS
                      X-Ray.
                    </li>
                    <li>
                      <strong>DevOps</strong> : les microservices fonctionnent
                      mieux lorsque les équipes de développement et
                      d'exploitation communiquent et collaborent plus
                      étroitement, de la configuration de l'infrastructure à la
                      gestion des incidents.
                    </li>
                    <li>
                      <strong>Déploiement bleu-vert et version canari</strong> :
                      ces stratégies de déploiement permettent un temps d'arrêt
                      nul ou proche de zéro lors de la sortie d'une nouvelle
                      version d'un microservice, avec un retour en arrière
                      rapide en cas de problème.
                    </li>
                    <li>
                      <strong>Infrastructure as Code (IaC)</strong> : cette
                      pratique permet une interaction humaine minimale dans le
                      cycle de construction-déploiement, qui devient plus
                      rapide, moins sujet aux erreurs et plus vérifiable.
                    </li>
                    <li>
                      <strong>Livraison continue</strong> : c'est une pratique
                      requise pour raccourcir l'intervalle de commit-to-deploy
                      tout en préservant la qualité des solutions. Les outils
                      CI/CD traditionnels incluent Jenkins, GitLab CI/CD,
                      Bamboo, GoCD, CircleCI et Spinnaker. Plus récemment, des
                      outils GitOps tels que Weaveworks et Flux ont été ajoutés
                      au paysage, combinant CD et IaC.
                    </li>
                    <li>
                      <strong>Configuration externalisée</strong> : ce mécanisme
                      permet de stocker les propriétés de configuration en
                      dehors de l'unité de déploiement du microservice et de les
                      gérer facilement.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </article>
          <article id="event-driven">
            <h6>Event-driven</h6>
            <p>
              Event-driven suggère que, dans la mesure du possible, nous
              devrions modéliser nos services pour qu'ils soient activés par un
              message ou un événement asynchrone au lieu d'un appel synchrone.
              La disponibilité plutôt que la cohérence nous rappelle que le plus
              souvent, les utilisateurs finaux apprécient la disponibilité du
              système plutôt que la cohérence des données et qu'ils sont
              d'accord avec la cohérence éventuelle.
            </p>
          </article>
          <article id="availability-over-consistency">
            <h6>Availability over Consistency</h6>
            <div>
              <p>
                The CAP theorem essentially gives you two options: availability
                XOR consistency.
              </p>
              <dl>
                <dt>Explication</dt>
                <dt>CAP signifie:</dt>
                <dd>
                  <ul>
                    <li>
                      <strong>Consistency</strong> - La{" "}
                      <strong>cohérence</strong> signifie que tous les clients
                      voient les mêmes données en même temps, quel que soit le
                      chemin de leur demande. Ceci est essentiel pour les
                      applications qui effectuent des mises à jour fréquentes.
                    </li>
                    <li>
                      <strong>Availability</strong> - La{" "}
                      <strong>disponibilité</strong> signifie que tous les
                      composants d'application fonctionnels renverront une
                      réponse valide, même s'ils sont en panne. Ceci est
                      particulièrement important si la population d'utilisateurs
                      d'une application a une faible tolérance aux pannes (comme
                      un portail de vente au détail).
                    </li>
                    <li>
                      <strong>Partition</strong> - La{" "}
                      <strong>tolérance de partition</strong> signifie que
                      l'application fonctionnera même lors d'une panne de réseau
                      qui entraîne la perte ou le retard des messages entre les
                      services. Cela entre en jeu pour les applications qui
                      s'intègrent à un grand nombre de composants distribués et
                      indépendants.
                    </li>
                  </ul>
                </dd>
                <dt>Availability with eventual consistency</dt>
                <dd>
                  Pour les microservices, la principale stratégie qui permet le
                  choix de la disponibilité est la réplication des données.
                  Différents modèles de conception peuvent être employés,
                  parfois combinés :
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>Service Data Replication pattern</strong>: ce
                      modèle de base est utilisé lorsqu'un microservice a besoin
                      d'accéder à des données appartenant à d'autres
                      applications (et les appels d'API ne sont pas adaptés pour
                      obtenir les données). Nous créons une réplique de ces
                      données et les rendons facilement accessibles au
                      microservice. La solution nécessite également un mécanisme
                      de synchronisation des données (par exemple, un
                      outil/programme ETL, une messagerie de
                      publication-abonnement, des vues matérialisées), qui
                      rendra périodiquement ou basé sur des déclencheurs la
                      réplique et les données principales.
                    </li>
                    <li>
                      <strong>
                        Command Query Responsibility Segregation (CQRS) pattern
                      </strong>
                      : ici, nous séparons la conception et la mise en œuvre des
                      opérations qui modifient les données (commandes) de celles
                      qui ne lisent que les données (requêtes). CQRS s'appuie
                      généralement sur la réplication des données de service
                      pour les requêtes afin d'améliorer les performances et
                      l'autonomie.
                    </li>
                    <li>
                      <strong>Event Sourcing pattern</strong>: au lieu de
                      stocker l'état actuel d'un objet dans la base de données,
                      nous stockons la séquence d'événements immuables et
                      d'ajout uniquement qui ont affecté cet objet. L'état
                      actuel est obtenu en rejouant les événements, et nous le
                      faisons pour fournir une "vue de requête" des données.
                      Ainsi, Event Sourcing s'appuie généralement sur une
                      conception CQRS.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </article>
          <article id="loose-coupling">
            <h6>Loose-coupling</h6>
            <div>
              <p>
                Le couplage lâche reste une préoccupation de conception
                importante dans le cas des microservices, en ce qui concerne le
                couplage afférent (entrant) et efférent (sortant). La
                responsabilité unique est l'idée qui permet de modéliser des
                microservices qui ne sont ni trop grands ni trop minces car ils
                contiennent la bonne quantité de fonctionnalités cohérentes.
              </p>
              <dl>
                <dt>Explication</dt>
                <dt>Stratégies de couplage lâche pour les services</dt>
                <dd>
                  Several strategies can be used and combined to promote
                  (afferent and efferent) loose coupling. Examples of such
                  strategies include:
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>Point-to-point and publish-subscribe</strong>: ces
                      modèles de messagerie de base et leurs variantes
                      favorisent un couplage lâche car les expéditeurs et les
                      destinataires ne se connaissent pas ; le contrat d'un
                      microservice réactif (par exemple, un consommateur Kafka)
                      devient le nom de la file d'attente de messages et la
                      structure du message.
                    </li>
                    <li>
                      <strong>API gateway and BFF</strong>: ces solutions
                      prescrivent un composant intermédiaire qui traite les
                      éventuelles divergences entre le contrat de service et le
                      format et le protocole du message que le client souhaite
                      voir, contribuant ainsi à les découpler.
                    </li>
                    <li>
                      <strong>Contract-first design</strong>: en concevant le
                      contrat indépendamment de tout code existant, nous évitons
                      de créer des API étroitement liées à la technologie et à
                      la mise en œuvre.
                    </li>
                    <li>
                      <strong>Hypermedia</strong>: pour les services REST,
                      l'hypermédia aide les frontends à être plus indépendants
                      des points de terminaison de service.
                    </li>
                    <li>
                      <strong>Façade and Adapter/Wrapper patterns</strong>: les
                      variations de ces modèles GoF dans les architectures de
                      microservices peuvent prescrire des composants internes ou
                      même des services qui peuvent empêcher un couplage
                      indésirable de se propager à travers une implémentation de
                      microservices.
                    </li>
                    <li>
                      <strong>Database per Microservice pattern</strong>: avec
                      ce modèle, les microservices gagnent non seulement en
                      autonomie mais évitent également le couplage direct avec
                      des bases de données partagées.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </article>
          <article id="single-responsibility">
            <h6>Single Responsibility</h6>
            <div>
              <p>Un microservice ne devrait avoir plus d'une responsabilité.</p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
