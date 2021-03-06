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
                l'??ventail des d??cisions de conception pour les solutions bas??es
                sur des microservices, mais ils touchent les principales
                pr??occupations et facteurs de r??ussite pour la cr??ation de
                syst??mes modernes bas??s sur les services.
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
                Interface segregation nous indique que diff??rents types de
                clients (par exemple, applications mobiles, applications Web,
                programmes CLI) devraient ??tre en mesure d'interagir avec les
                services via le contrat qui correspond le mieux ?? leurs besoins.
              </p>
              <dl>
                <dt>Explication</dt>
                <dd>
                  L'objectif de la s??gr??gation d'interface pour les
                  microservices est que chaque type de frontend voit le contrat
                  de service qui correspond le mieux ?? ses besoins. Par exemple
                  : une application native mobile souhaite appeler des points de
                  terminaison qui r??pondent avec une courte repr??sentation JSON
                  des donn??es ; le m??me syst??me a une application Web qui
                  utilise la repr??sentation JSON compl??te ; il existe ??galement
                  une ancienne application de bureau qui appelle le m??me service
                  et n??cessite une repr??sentation compl??te mais en XML.
                  Diff??rents clients peuvent ??galement utiliser diff??rents
                  protocoles. Par exemple, les clients externes souhaitent
                  utiliser HTTP pour appeler un service gRPC.
                </dd>
                <dd>
                  Au lieu d'essayer d'imposer le m??me contrat de service (en
                  utilisant des mod??les canoniques) ?? tous les types de clients
                  de service, nous "s??parons l'interface" de sorte que chaque
                  type de client voit l'interface de service dont il a besoin.
                </dd>
                <dd>
                  Une alternative importante consiste ?? utiliser une passerelle
                  API. Il peut effectuer une transformation de format de
                  message, une transformation de structure de message, un
                  pontage de protocole, un routage de message et bien plus
                  encore. Une alternative populaire est le mod??le Backend for
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
                La d??ployabilit?? (est sur vous) reconna??t qu'?? l'??re des
                microservices, qui est ??galement l'??re DevOps, il y a des
                d??cisions de conception critiques et des choix technologiques
                que les d??veloppeurs doivent faire concernant l'empaquetage, le
                d??ploiement et l'ex??cution des microservices.
              </p>
              <dl>
                <dt>Explication :</dt>
                <dd>
                  Il ya une liste de strat??gies et de technologies que les
                  d??veloppeurs doivent prendre en compte dans toute solution
                  bas??e sur des microservices pour am??liorer la d??ployabilit?? :
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>
                        Conteneurisation et orchestration de conteneurs
                      </strong>{" "}
                      : un microservice conteneuris?? est beaucoup plus facile ??
                      r??pliquer et ?? d??ployer sur les plates-formes et les
                      fournisseurs de cloud, et une plate-forme d'orchestration
                      fournit des ressources et des m??canismes partag??s pour le
                      routage, la mise ?? l'??chelle, la r??plication,
                      l'??quilibrage de charge, etc. Docker et Kubernetes sont
                      les normes de facto d'aujourd'hui pour la conteneurisation
                      et l'orchestration des conteneurs.
                    </li>
                    <li>
                      <strong>Service mesh</strong> : ce type d'outil peut ??tre
                      utilis?? pour la surveillance du trafic, l'application des
                      politiques, l'authentification, le RBAC, le routage, le
                      disjoncteur, la transformation des messages, entre autres
                      pour aider ?? la communication dans une plate-forme
                      d'orchestration de conteneurs. Les maillages de services
                      populaires incluent Istio, Linkerd et Consul Connect.
                    </li>
                    <li>
                      <strong>Passerelle API</strong> : en interceptant les
                      appels aux microservices, un produit de passerelle API
                      fournit un ensemble riche de fonctionnalit??s, notamment la
                      transformation des messages et le pontage de protocole, la
                      surveillance du trafic, les contr??les de s??curit??, le
                      routage, le cache, la limitation des demandes et le quota
                      d'API, et la coupure de circuit. Les principaux acteurs de
                      cet espace incluent Ambassador, Kong, Apiman, WSO2 API
                      Manager, Apigee et Amazon API Gateway.
                    </li>
                    <li>
                      <strong>Architecture sans serveur</strong> : vous pouvez
                      ??viter une grande partie de la complexit?? et des co??ts
                      op??rationnels de l'orchestration de conteneurs en
                      d??ployant vos services sur une plate-forme sans serveur,
                      qui suit le paradigme FaaS. AWS Lambda, Azure Functions et
                      Google Cloud Functions sont des exemples de plateformes
                      sans serveur.
                    </li>
                    <li>
                      <strong>Outils de surveillance</strong> : avec des
                      microservices r??partis sur votre infrastructure sur site
                      et cloud, il est essentiel de pouvoir pr??voir, d??tecter et
                      notifier les probl??mes li??s ?? la sant?? du syst??me. Il
                      existe plusieurs outils de surveillance disponibles, tels
                      que New Relic, CloudWatch, Datadog, Prometheus et Grafana.
                    </li>
                    <li>
                      <strong>Outils de consolidation de logs</strong> : les
                      microservices peuvent facilement augmenter le nombre
                      d'unit??s de d??ploiement d'un ordre de grandeur. Nous avons
                      besoin d'outils pour consolider la sortie de journal de
                      ces composants, avec la possibilit?? de rechercher,
                      d'analyser et de g??n??rer des alertes. Les outils
                      populaires dans cet espace sont Fluentd, Graylog, Splunk
                      et ELK (Elasticsearch, Logstash, Kibana).
                    </li>
                    <li>
                      <strong>Outils de tra??age</strong> : ces outils peuvent
                      ??tre utilis??s pour instrumenter vos microservices, puis
                      produire, collecter et visualiser des donn??es de tra??age ??
                      l'ex??cution qui montrent les appels entre les services.
                      Ils vous aident ?? rep??rer les probl??mes de performances
                      (et parfois m??me ?? comprendre l'architecture). Des
                      exemples d'outils de tra??age sont Zipkin, Jaeger et AWS
                      X-Ray.
                    </li>
                    <li>
                      <strong>DevOps</strong> : les microservices fonctionnent
                      mieux lorsque les ??quipes de d??veloppement et
                      d'exploitation communiquent et collaborent plus
                      ??troitement, de la configuration de l'infrastructure ?? la
                      gestion des incidents.
                    </li>
                    <li>
                      <strong>D??ploiement bleu-vert et version canari</strong> :
                      ces strat??gies de d??ploiement permettent un temps d'arr??t
                      nul ou proche de z??ro lors de la sortie d'une nouvelle
                      version d'un microservice, avec un retour en arri??re
                      rapide en cas de probl??me.
                    </li>
                    <li>
                      <strong>Infrastructure as Code (IaC)</strong> : cette
                      pratique permet une interaction humaine minimale dans le
                      cycle de construction-d??ploiement, qui devient plus
                      rapide, moins sujet aux erreurs et plus v??rifiable.
                    </li>
                    <li>
                      <strong>Livraison continue</strong> : c'est une pratique
                      requise pour raccourcir l'intervalle de commit-to-deploy
                      tout en pr??servant la qualit?? des solutions. Les outils
                      CI/CD traditionnels incluent Jenkins, GitLab CI/CD,
                      Bamboo, GoCD, CircleCI et Spinnaker. Plus r??cemment, des
                      outils GitOps tels que Weaveworks et Flux ont ??t?? ajout??s
                      au paysage, combinant CD et IaC.
                    </li>
                    <li>
                      <strong>Configuration externalis??e</strong> : ce m??canisme
                      permet de stocker les propri??t??s de configuration en
                      dehors de l'unit?? de d??ploiement du microservice et de les
                      g??rer facilement.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </article>
          <article id="event-driven">
            <h6>Event-driven</h6>
            <p>
              Event-driven sugg??re que, dans la mesure du possible, nous
              devrions mod??liser nos services pour qu'ils soient activ??s par un
              message ou un ??v??nement asynchrone au lieu d'un appel synchrone.
              La disponibilit?? plut??t que la coh??rence nous rappelle que le plus
              souvent, les utilisateurs finaux appr??cient la disponibilit?? du
              syst??me plut??t que la coh??rence des donn??es et qu'ils sont
              d'accord avec la coh??rence ??ventuelle.
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
                      <strong>coh??rence</strong> signifie que tous les clients
                      voient les m??mes donn??es en m??me temps, quel que soit le
                      chemin de leur demande. Ceci est essentiel pour les
                      applications qui effectuent des mises ?? jour fr??quentes.
                    </li>
                    <li>
                      <strong>Availability</strong> - La{" "}
                      <strong>disponibilit??</strong> signifie que tous les
                      composants d'application fonctionnels renverront une
                      r??ponse valide, m??me s'ils sont en panne. Ceci est
                      particuli??rement important si la population d'utilisateurs
                      d'une application a une faible tol??rance aux pannes (comme
                      un portail de vente au d??tail).
                    </li>
                    <li>
                      <strong>Partition</strong> - La{" "}
                      <strong>tol??rance de partition</strong> signifie que
                      l'application fonctionnera m??me lors d'une panne de r??seau
                      qui entra??ne la perte ou le retard des messages entre les
                      services. Cela entre en jeu pour les applications qui
                      s'int??grent ?? un grand nombre de composants distribu??s et
                      ind??pendants.
                    </li>
                  </ul>
                </dd>
                <dt>Availability with eventual consistency</dt>
                <dd>
                  Pour les microservices, la principale strat??gie qui permet le
                  choix de la disponibilit?? est la r??plication des donn??es.
                  Diff??rents mod??les de conception peuvent ??tre employ??s,
                  parfois combin??s :
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>Service Data Replication pattern</strong>: ce
                      mod??le de base est utilis?? lorsqu'un microservice a besoin
                      d'acc??der ?? des donn??es appartenant ?? d'autres
                      applications (et les appels d'API ne sont pas adapt??s pour
                      obtenir les donn??es). Nous cr??ons une r??plique de ces
                      donn??es et les rendons facilement accessibles au
                      microservice. La solution n??cessite ??galement un m??canisme
                      de synchronisation des donn??es (par exemple, un
                      outil/programme ETL, une messagerie de
                      publication-abonnement, des vues mat??rialis??es), qui
                      rendra p??riodiquement ou bas?? sur des d??clencheurs la
                      r??plique et les donn??es principales.
                    </li>
                    <li>
                      <strong>
                        Command Query Responsibility Segregation (CQRS) pattern
                      </strong>
                      : ici, nous s??parons la conception et la mise en ??uvre des
                      op??rations qui modifient les donn??es (commandes) de celles
                      qui ne lisent que les donn??es (requ??tes). CQRS s'appuie
                      g??n??ralement sur la r??plication des donn??es de service
                      pour les requ??tes afin d'am??liorer les performances et
                      l'autonomie.
                    </li>
                    <li>
                      <strong>Event Sourcing pattern</strong>: au lieu de
                      stocker l'??tat actuel d'un objet dans la base de donn??es,
                      nous stockons la s??quence d'??v??nements immuables et
                      d'ajout uniquement qui ont affect?? cet objet. L'??tat
                      actuel est obtenu en rejouant les ??v??nements, et nous le
                      faisons pour fournir une "vue de requ??te" des donn??es.
                      Ainsi, Event Sourcing s'appuie g??n??ralement sur une
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
                Le couplage l??che reste une pr??occupation de conception
                importante dans le cas des microservices, en ce qui concerne le
                couplage aff??rent (entrant) et eff??rent (sortant). La
                responsabilit?? unique est l'id??e qui permet de mod??liser des
                microservices qui ne sont ni trop grands ni trop minces car ils
                contiennent la bonne quantit?? de fonctionnalit??s coh??rentes.
              </p>
              <dl>
                <dt>Explication</dt>
                <dt>Strat??gies de couplage l??che pour les services</dt>
                <dd>
                  Several strategies can be used and combined to promote
                  (afferent and efferent) loose coupling. Examples of such
                  strategies include:
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>Point-to-point and publish-subscribe</strong>: ces
                      mod??les de messagerie de base et leurs variantes
                      favorisent un couplage l??che car les exp??diteurs et les
                      destinataires ne se connaissent pas ; le contrat d'un
                      microservice r??actif (par exemple, un consommateur Kafka)
                      devient le nom de la file d'attente de messages et la
                      structure du message.
                    </li>
                    <li>
                      <strong>API gateway and BFF</strong>: ces solutions
                      prescrivent un composant interm??diaire qui traite les
                      ??ventuelles divergences entre le contrat de service et le
                      format et le protocole du message que le client souhaite
                      voir, contribuant ainsi ?? les d??coupler.
                    </li>
                    <li>
                      <strong>Contract-first design</strong>: en concevant le
                      contrat ind??pendamment de tout code existant, nous ??vitons
                      de cr??er des API ??troitement li??es ?? la technologie et ??
                      la mise en ??uvre.
                    </li>
                    <li>
                      <strong>Hypermedia</strong>: pour les services REST,
                      l'hyperm??dia aide les frontends ?? ??tre plus ind??pendants
                      des points de terminaison de service.
                    </li>
                    <li>
                      <strong>Fa??ade and Adapter/Wrapper patterns</strong>: les
                      variations de ces mod??les GoF dans les architectures de
                      microservices peuvent prescrire des composants internes ou
                      m??me des services qui peuvent emp??cher un couplage
                      ind??sirable de se propager ?? travers une impl??mentation de
                      microservices.
                    </li>
                    <li>
                      <strong>Database per Microservice pattern</strong>: avec
                      ce mod??le, les microservices gagnent non seulement en
                      autonomie mais ??vitent ??galement le couplage direct avec
                      des bases de donn??es partag??es.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </article>
          <article id="single-responsibility">
            <h6>Single Responsibility</h6>
            <div>
              <p>Un microservice ne devrait avoir plus d'une responsabilit??.</p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
