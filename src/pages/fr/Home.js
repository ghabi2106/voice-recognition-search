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
                    <p class="card-text">
                      L'application est une solution de gestion automobile
                      conçue pour aider les ateliers automobiles de Volkswagen à
                      gérer les estimations, la planification, les opérations,
                      les inspections, etc.
                    </p>
                    <p>
                      Les principales fonctionnalités de TV comprennent la
                      vérification de l'assistant des tâches, des rappels
                      automatisés, l'intégration du calendrier, le suivi des
                      tâches en temps réel, le statut actuel de progrès, les
                      indicateurs d'activité et les dossiers électroniques. Le
                      module d'inspection permet aux utilisateurs d'inspecter
                      numériquement tous les véhicules et de télécharger les
                      résultats des documents directement sur les ordres de
                      travail. TV permet également aux utilisateurs de conserver
                      des recommandations de réparation et des listes de travail
                      différées pour référence ultérieure.
                    </p>
                    <p>
                      TV offre un gestionnaire de rapports et un tableau de bord
                      personnalisables permettant aux différents départements de
                      suivre les performances des recettes grâce à une
                      analytique en temps réel et des mesures clés.
                    </p>
                    <h6 class="card-title">Fonctionnalités</h6>
                    <ul>
                      <li>Gérer les comptes</li>
                      <li>Générer des rapports automatisés</li>
                      <li>Historique des activités</li>
                      <li>Plannification</li>
                    </ul>
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-détaillée-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-détaillée-tv"
                        >
                          Conception détaillée
                        </a>
                        <div class="collapse" id="conception-détaillée-tv">
                          La conception détaillée est la phase de développement
                          du projet. C’est ici que l’on construit le projet dans
                          son intégralité et dans le respect des cahiers des
                          charges.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#tests-recettes-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="tests-recettes-tv"
                        >
                          Tests / Recettes
                        </a>
                        <div class="collapse" id="tests-recettes-tv">
                          <p>
                            La phase de test intervient ensuite pour{" "}
                            <strong>
                              identifier les bugs potentiels et vérifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent réalisée avec des{" "}
                            <strong>“beta-testeurs”</strong> qui testent et font
                            remonter les bugs éventuels qu’ils rencontrent en
                            échange d’une utilisation privilégiée avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#déploiement-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="déploiement-tv"
                        >
                          Déploiement
                        </a>
                        <div class="collapse" id="déploiement-tv"></div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#suivi-pilotage-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="suivi-pilotage-tv"
                        >
                          Suivi / Pilotage
                        </a>
                        <div class="collapse" id="suivi-pilotage-tv">
                          <p>
                            La phase de suivi consiste à{" "}
                            <strong>
                              mesurer périodiquement l’efficacité du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fixés, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour réellement
                            “<strong>piloter</strong>” le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#amélioration-continue-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="amélioration-continue-tv"
                        >
                          Amélioration continue
                        </a>
                        <div class="collapse" id="amélioration-continue-tv">
                          <p>
                            L’amélioration continue consiste à mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retombées mesurées</strong> dans la phase de
                            suivi.
                          </p>
                        </div>
                      </li>
                    </ol>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Core 3.1, .Net Standard 4.6, Angular 10, dapper, EF
                    </p>
                    <h6 class="card-title">Methodologies</h6>
                    <p class="card-text">
                      La méthodologie suivie dans les deux projets Agile Scrum.
                      On travaille par sprint, chaque sprint dure 2 semaines.
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
                      Le portail « UAE SME » offre aux PME un accès pratique à
                      des informations détaillées sur tous les programmes
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
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#definition-objectifs-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="definition-objectifs-uaesme"
                        >
                          Définition d'objectifs
                        </a>
                        <div class="collapse" id="definition-objectifs-uaesme">
                          Il vous faudra répondre à la question “Pourquoi ?”.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#recherche-solutions-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="recherche-solutions-uaesme"
                        >
                          Recherche de solutions
                        </a>
                        <div class="collapse" id="recherche-solutions-uaesme">
                          Une fois vos objectifs définis, vous devez rechercher
                          des solutions permettant d’y répondre. Vous devez donc
                          lister l’ensemble des solutions possibles et les
                          classer en fonction de vos critères de choix (les plus
                          souvent efficacité/coût/délai).
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-fonctionnel-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-fonctionnel-uaesme"
                        >
                          Cahier des charges fonctionnel
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-fonctionnel-uaesme"
                        >
                          Vous devez lister, définir et détailler l’ensemble des
                          fonctions auxquelles votre solution devra répondre
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-technique-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-technique-uaesme"
                        >
                          Cahier des charges technique
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-technique-uaesme"
                        >
                          Le cahier des charges techniques est l’étape qui va
                          définir les solutions technologiques à utiliser pour
                          répondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies à utiliser(Bootstrap, Angular, ...)
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-preliminaire-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-preliminaire-uaesme"
                        >
                          Conception préliminaire
                        </a>
                        <div
                          class="collapse"
                          id="conception-preliminaire-uaesme"
                        >
                          la conception préliminaire est la première étape de la
                          conception pure, c’est ici que vous allez réaliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette étape les
                          principales composantes à prendre en compte sont
                          l’ergonomie et l’expérience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-détaillée-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-détaillée-uaesme"
                        >
                          Conception détaillée
                        </a>
                        <div class="collapse" id="conception-détaillée-uaesme">
                          La conception détaillée est la phase de développement
                          du projet. C’est ici que l’on construit le projet dans
                          son intégralité et dans le respect des cahiers des
                          charges.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#tests-recettes-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="tests-recettes-uaesme"
                        >
                          Tests / Recettes
                        </a>
                        <div class="collapse" id="tests-recettes-uaesme">
                          <p>
                            La phase de test intervient ensuite pour{" "}
                            <strong>
                              identifier les bugs potentiels et vérifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent réalisée avec des{" "}
                            <strong>“beta-testeurs”</strong> qui testent et font
                            remonter les bugs éventuels qu’ils rencontrent en
                            échange d’une utilisation privilégiée avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#déploiement-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="déploiement-uaesme"
                        >
                          Déploiement
                        </a>
                        <div class="collapse" id="déploiement-uaesme"></div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#suivi-pilotage-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="suivi-pilotage-uaesme"
                        >
                          Suivi / Pilotage
                        </a>
                        <div class="collapse" id="suivi-pilotage-uaesme">
                          <p>
                            La phase de suivi consiste à{" "}
                            <strong>
                              mesurer périodiquement l’efficacité du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fixés, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour réellement
                            “<strong>piloter</strong>” le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#amélioration-continue-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="amélioration-continue-uaesme"
                        >
                          Amélioration continue
                        </a>
                        <div class="collapse" id="amélioration-continue-uaesme">
                          <p>
                            L’amélioration continue consiste à mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retombées mesurées</strong> dans la phase de
                            suivi.
                          </p>
                        </div>
                      </li>
                    </ol>
                    <h6 class="card-title">Outils</h6>
                    <p>
                      .Net Core 3.1, Orchard CMS, Clean Architecture, Razor
                      Pages, SCSS.
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
                    <p class="card-text">
                      « FGIC » est un SIG (système d'information géographique),
                      crée, analyse et affiche des données géographiques sur des
                      cartes numériques. « FGIC » offre des fonctionnalités
                      telles que la manipulation d'images, l'analyse spatiale et
                      la création de cartes. Avec un SIG, vous pourrez
                      collecter, stocker, analyser et diffuser des informations
                      aux quatre coins du globe.
                    </p>
                    <p class="card-text">
                      Le portail « FGIC » désormais responsable d'organiser et
                      de présenter des données alphanumériques qui sont
                      spatialement référencées (données géospatiales).
                    </p>
                    <p class="card-text">
                      Le « FGIC » est utilisée pour ajouter la synchronisation
                      et la localisation aux types de données traditionnels et
                      pour créer des visualisations de données. Ces
                      visualisations peuvent inclure des cartes, des graphiques,
                      des statistiques et des cartogrammes qui montrent les
                      changements historiques et les évolutions actuelles.
                    </p>
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#definition-objectifs-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="definition-objectifs-fgic"
                        >
                          Définition d'objectifs
                        </a>
                        <div class="collapse" id="definition-objectifs-fgic">
                          Il vous faudra répondre à la question “Pourquoi ?”.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#recherche-solutions-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="recherche-solutions-fgic"
                        >
                          Recherche de solutions
                        </a>
                        <div class="collapse" id="recherche-solutions-fgic">
                          Une fois vos objectifs définis, vous devez rechercher
                          des solutions permettant d’y répondre. Vous devez donc
                          lister l’ensemble des solutions possibles et les
                          classer en fonction de vos critères de choix (les plus
                          souvent efficacité/coût/délai).
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-fonctionnel-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-fonctionnel-fgic"
                        >
                          Cahier des charges fonctionnel
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-fonctionnel-fgic"
                        >
                          Vous devez lister, définir et détailler l’ensemble des
                          fonctions auxquelles votre solution devra répondre
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-technique-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-technique-fgic"
                        >
                          Cahier des charges technique
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-technique-fgic"
                        >
                          Le cahier des charges techniques est l’étape qui va
                          définir les solutions technologiques à utiliser pour
                          répondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies à utiliser(Bootstrap, Angular, ...)
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-preliminaire-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-preliminaire-fgic"
                        >
                          Conception préliminaire
                        </a>
                        <div class="collapse" id="conception-preliminaire-fgic">
                          la conception préliminaire est la première étape de la
                          conception pure, c’est ici que vous allez réaliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette étape les
                          principales composantes à prendre en compte sont
                          l’ergonomie et l’expérience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-détaillée"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-détaillée-fgic"
                        >
                          Conception détaillée
                        </a>
                        <div class="collapse" id="conception-détaillée-fgic">
                          La conception détaillée est la phase de développement
                          du projet. C’est ici que l’on construit le projet dans
                          son intégralité et dans le respect des cahiers des
                          charges.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#tests-recettes-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="tests-recettes-fgic"
                        >
                          Tests / Recettes
                        </a>
                        <div class="collapse" id="tests-recettes-fgic">
                          <p>
                            La phase de test intervient ensuite pour{" "}
                            <strong>
                              identifier les bugs potentiels et vérifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent réalisée avec des{" "}
                            <strong>“beta-testeurs”</strong> qui testent et font
                            remonter les bugs éventuels qu’ils rencontrent en
                            échange d’une utilisation privilégiée avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#déploiement-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="déploiement-fgic"
                        >
                          Déploiement
                        </a>
                        <div class="collapse" id="déploiement-fgic"></div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#suivi-pilotage-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="suivi-pilotage-fgic"
                        >
                          Suivi / Pilotage
                        </a>
                        <div class="collapse" id="suivi-pilotage-fgic">
                          <p>
                            La phase de suivi consiste à{" "}
                            <strong>
                              mesurer périodiquement l’efficacité du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fixés, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour réellement
                            “<strong>piloter</strong>” le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#amélioration-continue-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="amélioration-continue-fgic"
                        >
                          Amélioration continue
                        </a>
                        <div class="collapse" id="amélioration-continue-fgic">
                          <p>
                            L’amélioration continue consiste à mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retombées mesurées</strong> dans la phase de
                            suivi.
                          </p>
                        </div>
                      </li>
                    </ol>
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
                    <h6 class="card-title">Description :</h6>
                    <p>
                      <strong>« Carry Track »</strong> est un WMS (Warehouse
                      Management System - logiciel de gestion d'entrepôt) permet
                      le déplacement, le suivi et le stockage des matériaux dans
                      tout l'entrepôt. Il augmente l'efficacité et réduit les
                      coûts grâce au partage facile des données clés dans toute
                      l'entreprise. Il inclut généralement des fonctionnalités
                      pour le contrôle et le suivi des stocks ainsi que pour la
                      gestion des achats et la surveillance des canaux. intègre
                      également des outils de gestion client et fournisseur, de
                      comptabilité et de reporting des activités. Parmi les
                      avantages d'un WMS vous retrouverez l'optimisation et une
                      meilleure visibilité des stocks ainsi que des coûts
                      opérationnels moindres.
                    </p>
                    <p>
                      <strong>« Carry Track »</strong> est un outil qui permet
                      aux organisations de contrôler les mouvements et le
                      stockage de marchandises dans des entrepôts. Il contribue
                      à la gestion d'opérations telles que le suivi des stocks,
                      la conception des entrepôts, le prélèvement et l'emballage
                      des marchandises, l'expédition, la gestion des quais et
                      des docks, ainsi que la dotation en personnel.
                    </p>
                    <h6 class="card-title">Fonctionnalités :</h6>
                    <ul>
                      <li>
                        <strong>Codes-barres/RFID :</strong>
                        identifiez des articles à l'aide de codes-barres et de
                        balises RFID et effectuez-en le suivi.
                      </li>
                      <li>
                        <strong>Gestion des stock :</strong>
                        gérez le trafic des stocks pour garantir un volume
                        optimal du stock et un approvisionnement sortant
                        approprié.
                      </li>
                      <li>
                        <strong>Gestion des expédition :</strong>
                        organisez et suivez les processus d'expédition des
                        commandes.
                      </li>
                      <li>
                        <strong>Mise en kit :</strong>
                        rassemblez au sein d'un kit des articles prélevés
                        individuellement pour le traitement d'un ordre de
                        travail ou d'une expédition.
                      </li>
                      <li>
                        <strong>Gestion des commande :</strong>
                        organisez, suivez et surveillez les commandes des
                        clients au fur et à mesure de leur progression dans la
                        chaîne d'approvisionnement.
                      </li>
                      <li>
                        <strong>Gestion de la qualité :</strong>
                        vérifiez et gérez la qualité des produits par rapport à
                        des normes définies.
                      </li>
                    </ul>
                    <h6 class="card-title">Avantages :</h6>
                    <p>
                      <strong>« Carry Track »</strong> facilite la gestion des
                      opérations en entrée et en sortie en rationalisant les
                      opérations manuelles et en augmentant l'efficacité
                      générale. Un logiciel de gestion d'entrepôt présente de
                      nombreux avantages, notamment :
                    </p>
                    <ul>
                      <li>
                        <strong>Optimisation du stock :</strong>
                        un WMS permet aux utilisateurs de suivre les mouvements
                        des marchandises dans leur chaîne d'approvisionnement.
                        Les utilisateurs peuvent ainsi mieux surveiller et
                        contrôler leurs niveaux de stock. Un WMS prend en charge
                        de nombreux modèles de gestion des stocks, tels que
                        LIFO, FIFO et au moment adéquat.
                      </li>
                      <li>
                        <strong>Meilleure visibilité sur les stock :</strong>
                        les appareils RFID (identification par radiofréquence)
                        et les lecteurs de codes-barres font office d'extensions
                        matérielles d'un WMS dans les entrepôts. La lecture des
                        codes-barres et le marquage RFID des marchandises à
                        différents points de contrôle dans la chaîne
                        d'approvisionnement offrent aux utilisateurs une
                        excellente visibilité sur les mouvements de leurs
                        expéditions.
                      </li>
                      <li>
                        <strong>Coûts opérationnels réduit :</strong>
                        en exploitant des données telles que les expéditions
                        entrantes et sortantes attendues et l'espace disponible,
                        les solutions WMS facilitent l'optimisation de
                        l'utilisation de l'espace dans les entrepôts. Certaines
                        solutions proposent des simulateurs qui permettent aux
                        utilisateurs de créer des plans de sol virtuels
                        (indiquant notamment l'emplacement des palettes,
                        étagères et docks de chargement) pour déterminer la
                        meilleure utilisation possible de l'espace disponible.
                      </li>
                    </ul>
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-détaillée-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-détaillée-carrytrack"
                        >
                          Conception détaillée
                        </a>
                        <div
                          class="collapse"
                          id="conception-détaillée-carrytrack"
                        >
                          La conception détaillée est la phase de développement
                          du projet. C’est ici que l’on construit le projet dans
                          son intégralité et dans le respect des cahiers des
                          charges.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#tests-recette-carrytracks"
                          role="button"
                          aria-expanded="false"
                          aria-controls="tests-recettes-carrytrack"
                        >
                          Tests / Recettes
                        </a>
                        <div class="collapse" id="tests-recettes-carrytrack">
                          <p>
                            La phase de test intervient ensuite pour{" "}
                            <strong>
                              identifier les bugs potentiels et vérifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent réalisée avec des{" "}
                            <strong>“beta-testeurs”</strong> qui testent et font
                            remonter les bugs éventuels qu’ils rencontrent en
                            échange d’une utilisation privilégiée avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#déploiement-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="déploiement-carrytrack"
                        >
                          Déploiement
                        </a>
                        <div class="collapse" id="déploiement-carrytrack"></div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#suivi-pilotage-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="suivi-pilotage-carrytrack"
                        >
                          Suivi / Pilotage
                        </a>
                        <div class="collapse" id="suivi-pilotage-carrytrack">
                          <p>
                            La phase de suivi consiste à{" "}
                            <strong>
                              mesurer périodiquement l’efficacité du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fixés, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour réellement
                            “<strong>piloter</strong>” le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#amélioration-continue-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="amélioration-continue-carrytrack"
                        >
                          Amélioration continue
                        </a>
                        <div
                          class="collapse"
                          id="amélioration-continue-carrytrack"
                        >
                          <p>
                            L’amélioration continue consiste à mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retombées mesurées</strong> dans la phase de
                            suivi.
                          </p>
                        </div>
                      </li>
                    </ol>
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
                      <strong>« AddInvoice »</strong> est Un logiciel de
                      facturation vous est utile pour faciliter la gestion des
                      factures de vente (en ligne). Ce type d'outil vous permet
                      de créer facilement une facture et de la traiter
                      efficacement grâce à ses processus automatisés
                      (production, envoi de factures et réception des
                      paiements). La solution de facturation est conçue pour
                      fonctionner avec des applications de comptabilité et
                      fournit une variété d'outils de reporting des activités.
                    </p>
                    <p class="card-text">
                      <strong>« AddInvoice »</strong> permet la création de
                      devis et factures, la planification des factures
                      récurrentes, la gestion des factures impayées et même la
                      signature électronique et le paiement en ligne.
                    </p>
                    <h6 class="card-title">Fonctionnalités</h6>
                    <ul>
                      <li>
                        <strong>Historique des factures :</strong>
                        gérez les archives de chaque facture, client par client,
                        pour un reporting, une gestion des risques, des
                        relations avec les clients et une exploration des
                        données de vente simples et précis.
                      </li>
                      <li>
                        <strong>Suivi du temps et des dépenses :</strong>
                        conservez un registre du temps facturable et des
                        dépenses accumulés. Ajoutez automatiquement ces données
                        aux factures pour une facturation plus rapide avec moins
                        de risques d'erreur.
                      </li>
                      <li>
                        <strong>Base de données de contacts :</strong>
                        élaborez une base de données d'informations de contact
                        pour les clients au sein du système de facturation pour
                        éviter les frais redondants d'un outil de CRM dédié.
                      </li>
                      <li>
                        <strong>Factures personnalisables :</strong>
                        concevez des dispositions de factures, contenus et
                        images de marque pour raconter la meilleure histoire
                        possible. Obtenez la confiance du client en proposant un
                        contenu conforme aux matériels de marque existants.
                      </li>
                      <li>
                        <strong>Factures en ligne :</strong>
                        fournissez et affichez des factures en ligne pour plus
                        de simplicité et d'accessibilité à l'échelon
                        international, dans n'importe quelle devise. Recevez
                        immédiatement vos paiements par le biais d'une interface
                        de facturation en ligne.
                      </li>
                    </ul>
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
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#definition-objectifs-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="definition-objectifs-addinvoice"
                        >
                          Définition d'objectifs
                        </a>
                        <div
                          class="collapse"
                          id="definition-objectifs-addinvoice"
                        >
                          Il vous faudra répondre à la question “Pourquoi ?”.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#recherche-solutions-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="recherche-solutions-addinvoice"
                        >
                          Recherche de solutions
                        </a>
                        <div
                          class="collapse"
                          id="recherche-solutions-addinvoice"
                        >
                          Une fois vos objectifs définis, vous devez rechercher
                          des solutions permettant d’y répondre. Vous devez donc
                          lister l’ensemble des solutions possibles et les
                          classer en fonction de vos critères de choix (les plus
                          souvent efficacité/coût/délai).
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-fonctionnel-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-fonctionnel-addinvoice"
                        >
                          Cahier des charges fonctionnel
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-fonctionnel-addinvoice"
                        >
                          Vous devez lister, définir et détailler l’ensemble des
                          fonctions auxquelles votre solution devra répondre
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-technique-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-technique-addinvoice"
                        >
                          Cahier des charges technique
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-technique-addinvoice"
                        >
                          Le cahier des charges techniques est l’étape qui va
                          définir les solutions technologiques à utiliser pour
                          répondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies à utiliser(Bootstrap, Angular, ...)
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-preliminaire-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-preliminaire-addinvoice"
                        >
                          Conception préliminaire
                        </a>
                        <div
                          class="collapse"
                          id="conception-preliminaire-addinvoice"
                        >
                          la conception préliminaire est la première étape de la
                          conception pure, c’est ici que vous allez réaliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette étape les
                          principales composantes à prendre en compte sont
                          l’ergonomie et l’expérience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-détaillée-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-détaillée-addinvoice"
                        >
                          Conception détaillée
                        </a>
                        <div
                          class="collapse"
                          id="conception-détaillée-addinvoice"
                        >
                          La conception détaillée est la phase de développement
                          du projet. C’est ici que l’on construit le projet dans
                          son intégralité et dans le respect des cahiers des
                          charges.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#tests-recettes-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="tests-recettes-addinvoice"
                        >
                          Tests / Recettes
                        </a>
                        <div class="collapse" id="tests-recettes-addinvoice">
                          <p>
                            La phase de test intervient ensuite pour{" "}
                            <strong>
                              identifier les bugs potentiels et vérifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent réalisée avec des{" "}
                            <strong>“beta-testeurs”</strong> qui testent et font
                            remonter les bugs éventuels qu’ils rencontrent en
                            échange d’une utilisation privilégiée avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#déploiement-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="déploiement-addinvoice"
                        >
                          Déploiement
                        </a>
                        <div class="collapse" id="déploiement-addinvoice"></div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#suivi-pilotage-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="suivi-pilotage-addinvoice"
                        >
                          Suivi / Pilotage
                        </a>
                        <div class="collapse" id="suivi-pilotage-addinvoice">
                          <p>
                            La phase de suivi consiste à{" "}
                            <strong>
                              mesurer périodiquement l’efficacité du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fixés, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour réellement
                            “<strong>piloter</strong>” le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#amélioration-continue-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="amélioration-continue-addinvoice"
                        >
                          Amélioration continue
                        </a>
                        <div
                          class="collapse"
                          id="amélioration-continue-addinvoice"
                        >
                          <p>
                            L’amélioration continue consiste à mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retombées mesurées</strong> dans la phase de
                            suivi.
                          </p>
                        </div>
                      </li>
                    </ol>
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
                      <strong>« DMI »</strong>Un logiciel de dossier patient
                      informatisé automatise la documentation, le stockage et la
                      récupération des dossiers médicaux des patients. Il
                      rationalise la saisie des données, automatise le
                      diagnostic et la sélection du code CPT, limite les
                      enregistrements papier requis, réduit les coûts de
                      transcription, fournit l'historique actualisé des dossiers
                      de patients et diminue les délais pour les consultations
                      des patients et l'obtention des résultats de laboratoire.
                      Grâce aux outils de dossier patient informatisé, les
                      médecins, les cabinets et les organismes de soins de santé
                      gagnent du temps, réduisent les erreurs médicales,
                      exécutent moins de tâches administratives et fournissent
                      des diagnostics plus précis à leurs patients.
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
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#definition-objectifs-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="definition-objectifs-dmi"
                        >
                          Définition d'objectifs
                        </a>
                        <div class="collapse" id="definition-objectifs-dmi">
                          Il vous faudra répondre à la question “Pourquoi ?”.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#recherche-solutions-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="recherche-solutions-dmi"
                        >
                          Recherche de solutions
                        </a>
                        <div class="collapse" id="recherche-solutions-dmi">
                          Une fois vos objectifs définis, vous devez rechercher
                          des solutions permettant d’y répondre. Vous devez donc
                          lister l’ensemble des solutions possibles et les
                          classer en fonction de vos critères de choix (les plus
                          souvent efficacité/coût/délai).
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-fonctionnel-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-fonctionnel-dmi"
                        >
                          Cahier des charges fonctionnel
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-fonctionnel-dmi"
                        >
                          Vous devez lister, définir et détailler l’ensemble des
                          fonctions auxquelles votre solution devra répondre
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-technique-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-technique-dmi"
                        >
                          Cahier des charges technique
                        </a>
                        <div class="collapse" id="cahier-charges-technique-dmi">
                          Le cahier des charges techniques est l’étape qui va
                          définir les solutions technologiques à utiliser pour
                          répondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies à utiliser(Bootstrap, Angular, ...)
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-preliminaire-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-preliminaire-dmi"
                        >
                          Conception préliminaire
                        </a>
                        <div class="collapse" id="conception-preliminaire-dmi">
                          la conception préliminaire est la première étape de la
                          conception pure, c’est ici que vous allez réaliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette étape les
                          principales composantes à prendre en compte sont
                          l’ergonomie et l’expérience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-détaillée-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-détaillée-dmi"
                        >
                          Conception détaillée
                        </a>
                        <div class="collapse" id="conception-détaillée-dmi">
                          La conception détaillée est la phase de développement
                          du projet. C’est ici que l’on construit le projet dans
                          son intégralité et dans le respect des cahiers des
                          charges.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#tests-recettes-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="tests-recettes-dmi"
                        >
                          Tests / Recettes
                        </a>
                        <div class="collapse" id="tests-recettes-dmi">
                          <p>
                            La phase de test intervient ensuite pour{" "}
                            <strong>
                              identifier les bugs potentiels et vérifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent réalisée avec des{" "}
                            <strong>“beta-testeurs”</strong> qui testent et font
                            remonter les bugs éventuels qu’ils rencontrent en
                            échange d’une utilisation privilégiée avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#déploiement-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="déploiement-dmi"
                        >
                          Déploiement
                        </a>
                        <div class="collapse" id="déploiement-dmi"></div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#suivi-pilotage-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="suivi-pilotage-dmi"
                        >
                          Suivi / Pilotage
                        </a>
                        <div class="collapse" id="suivi-pilotage-dmi">
                          <p>
                            La phase de suivi consiste à{" "}
                            <strong>
                              mesurer périodiquement l’efficacité du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fixés, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour réellement
                            “<strong>piloter</strong>” le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#amélioration-continue-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="amélioration-continue-dmi"
                        >
                          Amélioration continue
                        </a>
                        <div class="collapse" id="amélioration-continue-dmi">
                          <p>
                            L’amélioration continue consiste à mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retombées mesurées</strong> dans la phase de
                            suivi.
                          </p>
                        </div>
                      </li>
                    </ol>
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
                      <strong>« Ticketing »</strong> est un logiciel pour tour
                      opérateurs gère les forfaits, les clients, l'émission de
                      billets et les itinéraires pour les tour opérateurs, les
                      organisateurs de forfaits vacances, les spécialistes du
                      marketing de destinations et les entreprises de transport
                      en commun. Il permet de générer des devis, de définir des
                      itinéraires et de gérer les réservations des clients de
                      voyages organisés. Il aide également les tour opérateurs à
                      automatiser leurs processus métier, tels que la
                      comptabilité, la facturation, le marketing et le reporting
                      des activités. Voir aussi : logiciel de réservation et
                      logiciel pour agences de voyages.
                    </p>
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
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#definition-objectifs-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="definition-objectifs-ticketing"
                        >
                          Définition d'objectifs
                        </a>
                        <div
                          class="collapse"
                          id="definition-objectifs-ticketing"
                        >
                          Il vous faudra répondre à la question “Pourquoi ?”.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#recherche-solutions-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="recherche-solutions-ticketing"
                        >
                          Recherche de solutions
                        </a>
                        <div
                          class="collapse"
                          id="recherche-solutions-ticketing"
                        >
                          Une fois vos objectifs définis, vous devez rechercher
                          des solutions permettant d’y répondre. Vous devez donc
                          lister l’ensemble des solutions possibles et les
                          classer en fonction de vos critères de choix (les plus
                          souvent efficacité/coût/délai).
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-fonctionnel-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-fonctionnel-ticketing"
                        >
                          Cahier des charges fonctionnel
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-fonctionnel-ticketing"
                        >
                          Vous devez lister, définir et détailler l’ensemble des
                          fonctions auxquelles votre solution devra répondre
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#cahier-charges-technique-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="cahier-charges-technique-ticketing"
                        >
                          Cahier des charges technique
                        </a>
                        <div
                          class="collapse"
                          id="cahier-charges-technique-ticketing"
                        >
                          Le cahier des charges techniques est l’étape qui va
                          définir les solutions technologiques à utiliser pour
                          répondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies à utiliser(Bootstrap, Angular, ...)
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-preliminaire-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-preliminaire-ticketing"
                        >
                          Conception préliminaire
                        </a>
                        <div
                          class="collapse"
                          id="conception-preliminaire-ticketing"
                        >
                          la conception préliminaire est la première étape de la
                          conception pure, c’est ici que vous allez réaliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette étape les
                          principales composantes à prendre en compte sont
                          l’ergonomie et l’expérience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-détaillée-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-détaillée-ticketing"
                        >
                          Conception détaillée
                        </a>
                        <div
                          class="collapse"
                          id="conception-détaillée-ticketing"
                        >
                          La conception détaillée est la phase de développement
                          du projet. C’est ici que l’on construit le projet dans
                          son intégralité et dans le respect des cahiers des
                          charges.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#tests-recettes-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="tests-recettes-ticketing"
                        >
                          Tests / Recettes
                        </a>
                        <div class="collapse" id="tests-recettes-ticketing">
                          <p>
                            La phase de test intervient ensuite pour{" "}
                            <strong>
                              identifier les bugs potentiels et vérifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent réalisée avec des{" "}
                            <strong>“beta-testeurs”</strong> qui testent et font
                            remonter les bugs éventuels qu’ils rencontrent en
                            échange d’une utilisation privilégiée avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#déploiement-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="déploiement-ticketing"
                        >
                          Déploiement
                        </a>
                        <div class="collapse" id="déploiement-ticketing"></div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#suivi-pilotage-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="suivi-pilotage-ticketing"
                        >
                          Suivi / Pilotage
                        </a>
                        <div class="collapse" id="suivi-pilotage-ticketing">
                          <p>
                            La phase de suivi consiste à{" "}
                            <strong>
                              mesurer périodiquement l’efficacité du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fixés, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour réellement
                            “<strong>piloter</strong>” le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#amélioration-continue-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="amélioration-continue-ticketing"
                        >
                          Amélioration continue
                        </a>
                        <div
                          class="collapse"
                          id="amélioration-continue-ticketing"
                        >
                          <p>
                            L’amélioration continue consiste à mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retombées mesurées</strong> dans la phase de
                            suivi.
                          </p>
                        </div>
                      </li>
                    </ol>
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
