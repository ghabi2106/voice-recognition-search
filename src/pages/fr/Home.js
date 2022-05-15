import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
                    href="#capgemini"
                  >
                    Capgemini
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#diginov"
                  >
                    Diginov
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#itgwana"
                  >
                    ITGWANA
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#taysir"
                  >
                    Taysir Solutions
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
          <h3>Presentation</h3>
          <article id="capgemini">
            <h6>Capgemini</h6>
            <div>
              <p>
                Je suis Ghabi Assaad, je suis un ingénieur de développement .Net
                senior. Je suis actuellement en poste chez Capgemini au sein de
                département automobile à partir de début d'october de 2021. J’ai
                travaillé en deux projets « TV » et « AskMe » pour client
                allemand Volkswagen.
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#tv"
                  >
                    <b>AskMe &amp; TV</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="tv">
                    <h6 class="card-title">Description</h6>
                    <p>
                      Le but de ces deux applications est de collecter les
                      données nécessaires des différents phase de production des
                      projets en système embarqués à partir des différents
                      group, en enregistrant les essais et les résultats au fur
                      et à mesure de suivre le progrès des projets et de
                      faciliter l'analyse.
                    </p>
                    <h6 class="card-title">Fonctionnalités</h6>
                    <ul>
                      <li>Gérer les comptes</li>
                      <li>Générer des rapports automatisés</li>
                      <li>Historique des activités</li>
                      <li>Plannification</li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p>
                      La méthodologie suivie dans les deux projets Agile Scrum.
                      On travaille par sprint, chaque sprint dure 2 semaines, et
                      chaque semaine on a une réunion avec le client.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="diginov">
            <h6>Diginov</h6>
            <div>
              <p>
                Auparavant j’ai travaillé pendant ≈ 1.5 ans au sein de la
                société Diginov. J’ai travaillé en deux projets « UAE SME » et «
                FGIC » pour des clients émiratis (Ministère d’économie).
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#uaesme"
                  >
                    <b>UAE SME</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="uaesme">
                    <h6 class="card-title">Description</h6>
                    <p>
                      Le portail UAE SME offre aux PME un accès pratique à des
                      informations détaillées sur tous les programmes
                      gouvernementaux de développement des PME , y compris les
                      différents régimes de financement et services de soutien
                      aux entreprises, offerts aux PME
                    </p>
                    <p>
                      Le portail offre également des informations aux PME sur où
                      et comment obtenir un financement, des services de
                      conseil, des programmes de formation, le développement de
                      produits et de technologies et des informations de
                      marketing.
                    </p>
                    <p>
                      Grâce au répertoire des PME, les PME peuvent faire
                      connaître leurs entreprises et leurs produits à de gros
                      clients potentiels en fournissant des informations sur
                      leurs entreprises, une description des produits et
                      services proposés et des coordonnées.
                    </p>
                  </div>
                </div>
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#fgic"
                  >
                    <b>FGIC</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="fgic">
                    <h6 class="card-title">Description</h6>
                    <p>
                      Le portail FGIC est un SIG (systèmes d'information
                      géospatiale) désormais responsable d'organiser et de
                      présenter des données alphanumériques qui sont
                      spatialement référencées (données géospatiales).
                    </p>
                    <p>
                      Le « FGIC » est utilisée pour ajouter la synchronisation
                      et la localisation aux types de données traditionnels et
                      pour créer des visualisations de données. Ces
                      visualisations peuvent inclure des cartes, des graphiques,
                      des statistiques et des cartogrammes qui montrent les
                      changements historiques et les évolutions actuelles.
                    </p>
                    <h6 class="card-title">Outils</h6>
                    <p>
                      .Net Core 3.1, Orchard CMS, Clean Architecture, Razor
                      Pages, SCSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="itgwana">
            <h6>ITGWANA</h6>
            <div>
              <p>
                Auparavant j’ai notamment travaillé pendant ≈ 1 ans au sein de
                la société ITGWANA | RFIT TECH qui aide au développement de
                l’industrie 4.0. J’ai travaillé sur le projet Carry Track pour
                un client français Nexans.
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#carrytrack"
                  >
                    <b>Carry Track</b>
                  </div>
                  <div
                    class="card-body text-dark collapse show"
                    id="carrytrack"
                  >
                    <h6 class="card-title">Description</h6>
                    <p>
                      <strong>« Carry Track »</strong> c’est une solution de
                      gestion et de traçabilité es contenants en utilisant la
                      technologie RFID permet de suivre et de gérer tout les
                      matériel de manutention et de stockage qui circule en
                      circuit fermé dans un supply chain pour optimiser sa
                      disponibilité et l’ensemble de la logistique.
                    </p>
                    <ul>
                      <li>
                        Portiques RFID pour contrôle automatique des entrées /
                        sorties d’une zone
                      </li>
                      <li>
                        Gestion des affectations : à un site, à une zone
                        (fabrication, conditionnement, stockage, expédition…), à
                        un client, à un fournisseur…
                      </li>
                      <li>Gestion des seuils de réapprovisionnement</li>
                      <li>Gestion de la maintenance</li>
                      <li>
                        Optimisation de la gestion d’un parc de contenants :
                        visibilité sur la localisation et l’état des stocks,
                        diminution du stock de réserve, facturation des
                        contenants consignés…
                      </li>
                      <li>Historique des mouvements</li>
                      <li>Tableaux de bord et rapports</li>
                      <li>Analyse des temps de rétention moyens par client</li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Core 2.1, CSLA.NET, Architecture Multi layer, MVC,
                      Telerik.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="taysir">
            <h6>Taysir Solutions</h6>
            <div>
              <p>
                Auparavant j’ai notamment travaillé pour Taysir Solutions ≈ 2ans
                dans les secteurs médecines, facturation et agence des voyages.
                J’ai travaillé en plusieurs projets « ADD Invoice », « DMI » et
                « Ticketing ».
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#addinvoice"
                  >
                    <b>AddInvoice</b>
                  </div>
                  <div
                    class="card-body text-dark collapse show"
                    id="addinvoice"
                  >
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      est le logiciel de facturation permet la création de devis
                      et factures, la planification des factures récurrentes, la
                      gestion des factures impayées et même la signature
                      électronique et le paiement en ligne.
                    </p>
                    <h6 class="card-title">Fonctionnalités</h6>
                    <ul>
                      <li>Personnalisez les modèles de facture</li>
                      <li>Émettre des reçus de paiement et des rappels</li>
                      <li>Compatibilité TPS</li>
                      <li>Traiter les paiements en ligne</li>
                      <li>Gérer les comptes</li>
                      <li>Facturer les clients dans leur langue</li>
                      <li>Générer des rapports automatisés</li>
                      <li>Historique des activités</li>
                      <li>La gestion des clients</li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Framework 4, Architecture Multi layer, MVC.
                    </p>
                  </div>
                </div>
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#dmi"
                  >
                    <b>DMI</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="dmi">
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      Réalisation d’une solution permettant aux médecins
                      d’accéder au dossier médical de ses patients.
                    </p>
                    <p>
                      Le déploiement du Dossier Médical Informatisé (DMI) dans
                      les Structures Sanitaires pour l'amélioration des prises
                      en charge des patients (meilleur suivi grâce à un
                      historique du patient, partage continu et en temps réel
                      des données médicales entre les différents intervenants du
                      parcours de patients, etc..)
                    </p>
                    <h6 class="card-title">Fonctionnalités</h6>
                    <ul>
                      <li>Modèles personnalisables (Templates)</li>
                      <li>
                        Communication temps réel
                        <ul>
                          <li>
                            Chaque médecin dispose d'un compte rendu à jour et
                            précis de l'historique du patient.
                          </li>
                          <li>Discuter directement avec un autre médecin</li>
                        </ul>
                      </li>
                      <li>
                        Fonctionnalités de planification
                        <ul>
                          <li>Pouvoir facilement suivre les rendez-vous</li>
                          <li>
                            {" "}
                            La possibilité d'informer les patients immédiatement
                          </li>
                          <li>
                            Centralisant un grand nombre de vos processus
                            administratifs et en organisant votre calendrier et
                            votre système de notification
                          </li>
                        </ul>
                      </li>
                      <li>
                        Ordonnances électroniques
                        <ul>
                          <li>Communiquer directement avec les pharmacies</li>
                        </ul>
                      </li>
                      <li>
                        Portails patients
                        <ul>
                          <li>
                            Une liste de leurs allergies, vaccinations et
                            médicaments.
                          </li>
                          <li>
                            Matériel éducatif (comme les instructions
                            d'entretien).
                          </li>
                          <li>Informations de leur dernière visite.</li>
                          <li>Résultats de laboratoire.</li>
                          <li>Prise de rendez-vous.</li>
                          <li>Demande de renouvellement d'ordonnance.</li>
                          <li>Coordonnées.</li>
                        </ul>
                      </li>
                      <li>
                        Intégration du laboratoire
                        <ul>
                          <li>
                            Gagner du temps en évitant de saisir manuellement
                            chaque résultat de laboratoire/d'image
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Core 2.0, Clean Architecture, MVC.
                    </p>
                  </div>
                </div>
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#ticketing"
                  >
                    <b>Ticketing</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="ticketing">
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      <strong>« Ticketing »</strong> est un plateforme pour les
                      agences de voyages et les tour-opérateurs. Les
                      fonctionnalités comprennent la facturation, les comptes
                      clients, les comptes fournisseurs, le grand livre, les
                      rapports avancés en temps réel, etc. Modules optionnels
                      disponibles pour la gestion des visites : création de
                      visites, gestion des stocks, réservation en ligne
                    </p>
                    <p>
                      Intégré aux principaux GDS (Global Distribution System)
                      (Sabre, Amadeus, Travelport).
                    </p>
                    <h6 class="card-title">Qui utilise TravelWorks ?</h6>
                    <p>
                      Dédiée aux agences de voyages intéressées par
                      l'utilisation d'un logiciel de gestion et comptable en vue
                      de :
                    </p>
                    <ul>
                      <li>réduire les coûts opérationnels</li>
                      <li>générer du chiffre d'affaires supplémentaire</li>
                      <li>améliorer la satisfaction des clients</li>
                    </ul>
                    <h6 class="card-title">FONCTIONNALITÉS</h6>
                    <ul>
                      <li>Système central de réservation</li>
                      <li>Gestion des clients</li>
                      <li>
                        Intégration{" "}
                        <abbr title="Les GDS sont des plateformes technologiques de réservation qui ont longtemps été incontournables dans les domaines du transport aérien et de l'hôtellerie puisqu'il s'agissait des plateformes technologiques sur lesquelles étaient branchées les agences de voyages physiques par lesquelles transitaient alors l'essentiel des transactions et réservations.">
                          GDS
                        </abbr>{" "}
                        (Global Distribution System) et{" "}
                        <abbr title="L'initiale OTA est utilisée dans le domaine du marketing touristique pour désigner les - Online Tourism Agency - c'est à dire les agences de voyages en lignes qui commercialisent essentiellement des prestations touristiques / voyages fournies par des tiers.">
                          OTA
                        </abbr>{" "}
                        (Online Travel Agents)
                      </li>
                      <li>Création d'itinéraires</li>
                      <li>Traitement des paiements</li>
                      <li>Devis</li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Core 2.1, Clean Architecture, Restful Api, React.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
