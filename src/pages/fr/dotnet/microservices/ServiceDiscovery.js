import React from "react";
import { Link } from "react-router-dom";

export default function ServiceDiscovery() {
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
                    href="#service-discovery"
                  >
                    Service Discovery
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
          <h3>Découverte de services</h3>
          <article id="service-discovery">
            <h6>Découverte de services</h6>
            <div class="markdown prose w-full break-words dark:prose-invert light">
              <p>
                La <strong>découverte de services</strong> permet aux
                microservices de trouver automatiquement les adresses des autres
                services dans un environnement distribué, assurant une
                communication fluide et dynamique.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Détails</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Objectif</strong>
                    </td>
                    <td>
                      Localiser dynamiquement les services disponibles dans un
                      système distribué.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Composant clé</strong>
                    </td>
                    <td>Registre de services (Service Registry).</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Types</strong>
                    </td>
                    <td>Client-side discovery, Server-side discovery.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Outils populaires</strong>
                    </td>
                    <td>Netflix Eureka, Consul, Zookeeper, Etcd, Istio.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Avantages</strong>
                    </td>
                    <td>Évolutivité, résilience, communication simplifiée.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Inconvénients</strong>
                    </td>
                    <td>
                      Complexité supplémentaire, latence possible, dépendance au
                      registre.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cas d'usage</strong>
                    </td>
                    <td>
                      Architectures microservices dynamiques, scalabilité
                      automatique, systèmes distribués complexes.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>Concepts Clés</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Service Registry</strong> (registre de services) :
                  </p>
                  <ul>
                    <li>
                      Un répertoire central qui contient une liste des services
                      disponibles et leurs emplacements (adresses IP, ports,
                      etc.).
                    </li>
                    <li>
                      Les services s'inscrivent eux-mêmes ou sont inscrits
                      automatiquement dans le registre.
                    </li>
                    <li>
                      Les clients interrogent ce registre pour localiser les
                      services dont ils ont besoin.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Dynamic Discovery</strong> :
                  </p>
                  <ul>
                    <li>
                      Les instances de service s'ajoutent ou se retirent
                      dynamiquement du registre en fonction de leur
                      disponibilité.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Health Checks</strong> :
                  </p>
                  <ul>
                    <li>
                      Le registre effectue des vérifications de santé pour
                      s'assurer que seules les instances actives sont utilisées.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>Types de Découverte de Services</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Server-Side Discovery</strong> :
                  </p>
                  <ul>
                    <li>
                      Un composant intermédiaire (comme un{" "}
                      <strong>load balancer</strong>) consulte le registre et
                      route les requêtes vers l'instance appropriée.
                    </li>
                    <li>Exemple : AWS Elastic Load Balancer (ELB).</li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Client-Side Discovery</strong> :
                  </p>
                  <ul>
                    <li>
                      Le client interroge directement le registre pour obtenir
                      l'adresse du service cible.
                    </li>
                    <li>
                      Exemple : Netflix Eureka avec des bibliothèques comme
                      Ribbon.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>Avantages</strong>
              </h6>
              <ol>
                <li>
                  <strong>Évolutivité</strong> :
                  <ul>
                    <li>
                      Les services peuvent être ajoutés ou supprimés
                      dynamiquement sans nécessiter de configuration manuelle.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Résilience</strong> :
                  <ul>
                    <li>
                      Le système peut détecter automatiquement les instances
                      défaillantes et les exclure des routes.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Simplicité de communication</strong> :
                  <ul>
                    <li>
                      Les clients n'ont pas besoin de connaître les adresses des
                      services à l'avance.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>Inconvénients</strong>
              </h6>
              <ol>
                <li>
                  <strong>Complexité supplémentaire</strong> :
                  <ul>
                    <li>
                      Ajout d'un composant supplémentaire (le registre) qui doit
                      être géré et sécurisé.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Latence</strong> :
                  <ul>
                    <li>
                      Une découverte de service mal optimisée peut introduire
                      des retards dans la communication.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Point unique de défaillance</strong> :
                  <ul>
                    <li>
                      Si le registre tombe en panne, cela peut perturber toute
                      la communication interservices (mitigé avec des clusters
                      ou la redondance).
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>Cas d'Usage</strong>
              </h6>
              <ol>
                <li>
                  <strong>Microservices dynamiques</strong> :
                  <ul>
                    <li>
                      Les environnements où les instances de services changent
                      fréquemment (exemple : Kubernetes).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Scalabilité automatique</strong> :
                  <ul>
                    <li>
                      Systèmes avec un nombre variable d'instances de services.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Applications distribuées complexes</strong> :
                  <ul>
                    <li>
                      Architectures où les dépendances entre services ne sont
                      pas fixes.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
