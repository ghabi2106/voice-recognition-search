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
                Je suis Ghabi Assaad, je suis un ing??nieur de d??veloppement .Net
                senior. Je suis actuellement en poste chez Capgemini au sein de
                d??partement automobile ?? partir de d??but d'october de 2021. J???ai
                travaill?? en deux projets ?? TV ?? et ?? AskMe ?? pour client
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
                      con??ue pour aider les ateliers automobiles de Volkswagen ??
                      g??rer les estimations, la planification, les op??rations,
                      les inspections, etc.
                    </p>
                    <p>
                      Les principales fonctionnalit??s de TV comprennent la
                      v??rification de l'assistant des t??ches, des rappels
                      automatis??s, l'int??gration du calendrier, le suivi des
                      t??ches en temps r??el, le statut actuel de progr??s, les
                      indicateurs d'activit?? et les dossiers ??lectroniques. Le
                      module d'inspection permet aux utilisateurs d'inspecter
                      num??riquement tous les v??hicules et de t??l??charger les
                      r??sultats des documents directement sur les ordres de
                      travail. TV permet ??galement aux utilisateurs de conserver
                      des recommandations de r??paration et des listes de travail
                      diff??r??es pour r??f??rence ult??rieure.
                    </p>
                    <p>
                      TV offre un gestionnaire de rapports et un tableau de bord
                      personnalisables permettant aux diff??rents d??partements de
                      suivre les performances des recettes gr??ce ?? une
                      analytique en temps r??el et des mesures cl??s.
                    </p>
                    <h6 class="card-title">Fonctionnalit??s</h6>
                    <ul>
                      <li>G??rer les comptes</li>
                      <li>G??n??rer des rapports automatis??s</li>
                      <li>Historique des activit??s</li>
                      <li>Plannification</li>
                    </ul>
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-d??taill??e-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-d??taill??e-tv"
                        >
                          Conception d??taill??e
                        </a>
                        <div class="collapse" id="conception-d??taill??e-tv">
                          La conception d??taill??e est la phase de d??veloppement
                          du projet. C???est ici que l???on construit le projet dans
                          son int??gralit?? et dans le respect des cahiers des
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
                              identifier les bugs potentiels et v??rifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent r??alis??e avec des{" "}
                            <strong>???beta-testeurs???</strong> qui testent et font
                            remonter les bugs ??ventuels qu???ils rencontrent en
                            ??change d???une utilisation privil??gi??e avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#d??ploiement-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="d??ploiement-tv"
                        >
                          D??ploiement
                        </a>
                        <div class="collapse" id="d??ploiement-tv"></div>
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
                            La phase de suivi consiste ??{" "}
                            <strong>
                              mesurer p??riodiquement l???efficacit?? du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fix??s, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour r??ellement
                            ???<strong>piloter</strong>??? le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#am??lioration-continue-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="am??lioration-continue-tv"
                        >
                          Am??lioration continue
                        </a>
                        <div class="collapse" id="am??lioration-continue-tv">
                          <p>
                            L???am??lioration continue consiste ?? mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retomb??es mesur??es</strong> dans la phase de
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
                      La m??thodologie suivie dans les deux projets Agile Scrum.
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
                Auparavant j???ai travaill?? pendant ??? 1.5 ans au sein de la
                soci??t?? Diginov. J???ai travaill?? en deux projets ?? UAE SME ?? et ??
                FGIC ?? pour des clients ??miratis (Minist??re d?????conomie).
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
                      Le portail ?? UAE SME ?? offre aux PME un acc??s pratique ??
                      des informations d??taill??es sur tous les programmes
                      gouvernementaux de d??veloppement des PME , y compris les
                      diff??rents r??gimes de financement et services de soutien
                      aux entreprises, offerts aux PME
                    </p>
                    <p>
                      Le portail offre ??galement des informations aux PME sur o??
                      et comment obtenir un financement, des services de
                      conseil, des programmes de formation, le d??veloppement de
                      produits et de technologies et des informations de
                      marketing.
                    </p>
                    <p>
                      Gr??ce au r??pertoire des PME, les PME peuvent faire
                      conna??tre leurs entreprises et leurs produits ?? de gros
                      clients potentiels en fournissant des informations sur
                      leurs entreprises, une description des produits et
                      services propos??s et des coordonn??es.
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
                          D??finition d'objectifs
                        </a>
                        <div class="collapse" id="definition-objectifs-uaesme">
                          Il vous faudra r??pondre ?? la question ???Pourquoi ????.
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
                          Une fois vos objectifs d??finis, vous devez rechercher
                          des solutions permettant d???y r??pondre. Vous devez donc
                          lister l???ensemble des solutions possibles et les
                          classer en fonction de vos crit??res de choix (les plus
                          souvent efficacit??/co??t/d??lai).
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
                          Vous devez lister, d??finir et d??tailler l???ensemble des
                          fonctions auxquelles votre solution devra r??pondre
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
                          Le cahier des charges techniques est l?????tape qui va
                          d??finir les solutions technologiques ?? utiliser pour
                          r??pondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies ?? utiliser(Bootstrap, Angular, ...)
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
                          Conception pr??liminaire
                        </a>
                        <div
                          class="collapse"
                          id="conception-preliminaire-uaesme"
                        >
                          la conception pr??liminaire est la premi??re ??tape de la
                          conception pure, c???est ici que vous allez r??aliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette ??tape les
                          principales composantes ?? prendre en compte sont
                          l???ergonomie et l???exp??rience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-d??taill??e-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-d??taill??e-uaesme"
                        >
                          Conception d??taill??e
                        </a>
                        <div class="collapse" id="conception-d??taill??e-uaesme">
                          La conception d??taill??e est la phase de d??veloppement
                          du projet. C???est ici que l???on construit le projet dans
                          son int??gralit?? et dans le respect des cahiers des
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
                              identifier les bugs potentiels et v??rifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent r??alis??e avec des{" "}
                            <strong>???beta-testeurs???</strong> qui testent et font
                            remonter les bugs ??ventuels qu???ils rencontrent en
                            ??change d???une utilisation privil??gi??e avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#d??ploiement-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="d??ploiement-uaesme"
                        >
                          D??ploiement
                        </a>
                        <div class="collapse" id="d??ploiement-uaesme"></div>
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
                            La phase de suivi consiste ??{" "}
                            <strong>
                              mesurer p??riodiquement l???efficacit?? du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fix??s, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour r??ellement
                            ???<strong>piloter</strong>??? le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#am??lioration-continue-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="am??lioration-continue-uaesme"
                        >
                          Am??lioration continue
                        </a>
                        <div class="collapse" id="am??lioration-continue-uaesme">
                          <p>
                            L???am??lioration continue consiste ?? mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retomb??es mesur??es</strong> dans la phase de
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
                      ?? FGIC ?? est un SIG (syst??me d'information g??ographique),
                      cr??e, analyse et affiche des donn??es g??ographiques sur des
                      cartes num??riques. ?? FGIC ?? offre des fonctionnalit??s
                      telles que la manipulation d'images, l'analyse spatiale et
                      la cr??ation de cartes. Avec un SIG, vous pourrez
                      collecter, stocker, analyser et diffuser des informations
                      aux quatre coins du globe.
                    </p>
                    <p class="card-text">
                      Le portail ?? FGIC ?? d??sormais responsable d'organiser et
                      de pr??senter des donn??es alphanum??riques qui sont
                      spatialement r??f??renc??es (donn??es g??ospatiales).
                    </p>
                    <p class="card-text">
                      Le ?? FGIC ?? est utilis??e pour ajouter la synchronisation
                      et la localisation aux types de donn??es traditionnels et
                      pour cr??er des visualisations de donn??es. Ces
                      visualisations peuvent inclure des cartes, des graphiques,
                      des statistiques et des cartogrammes qui montrent les
                      changements historiques et les ??volutions actuelles.
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
                          D??finition d'objectifs
                        </a>
                        <div class="collapse" id="definition-objectifs-fgic">
                          Il vous faudra r??pondre ?? la question ???Pourquoi ????.
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
                          Une fois vos objectifs d??finis, vous devez rechercher
                          des solutions permettant d???y r??pondre. Vous devez donc
                          lister l???ensemble des solutions possibles et les
                          classer en fonction de vos crit??res de choix (les plus
                          souvent efficacit??/co??t/d??lai).
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
                          Vous devez lister, d??finir et d??tailler l???ensemble des
                          fonctions auxquelles votre solution devra r??pondre
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
                          Le cahier des charges techniques est l?????tape qui va
                          d??finir les solutions technologiques ?? utiliser pour
                          r??pondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies ?? utiliser(Bootstrap, Angular, ...)
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
                          Conception pr??liminaire
                        </a>
                        <div class="collapse" id="conception-preliminaire-fgic">
                          la conception pr??liminaire est la premi??re ??tape de la
                          conception pure, c???est ici que vous allez r??aliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette ??tape les
                          principales composantes ?? prendre en compte sont
                          l???ergonomie et l???exp??rience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-d??taill??e"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-d??taill??e-fgic"
                        >
                          Conception d??taill??e
                        </a>
                        <div class="collapse" id="conception-d??taill??e-fgic">
                          La conception d??taill??e est la phase de d??veloppement
                          du projet. C???est ici que l???on construit le projet dans
                          son int??gralit?? et dans le respect des cahiers des
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
                              identifier les bugs potentiels et v??rifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent r??alis??e avec des{" "}
                            <strong>???beta-testeurs???</strong> qui testent et font
                            remonter les bugs ??ventuels qu???ils rencontrent en
                            ??change d???une utilisation privil??gi??e avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#d??ploiement-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="d??ploiement-fgic"
                        >
                          D??ploiement
                        </a>
                        <div class="collapse" id="d??ploiement-fgic"></div>
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
                            La phase de suivi consiste ??{" "}
                            <strong>
                              mesurer p??riodiquement l???efficacit?? du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fix??s, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour r??ellement
                            ???<strong>piloter</strong>??? le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#am??lioration-continue-fgic"
                          role="button"
                          aria-expanded="false"
                          aria-controls="am??lioration-continue-fgic"
                        >
                          Am??lioration continue
                        </a>
                        <div class="collapse" id="am??lioration-continue-fgic">
                          <p>
                            L???am??lioration continue consiste ?? mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retomb??es mesur??es</strong> dans la phase de
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
                Auparavant j???ai notamment travaill?? pendant ??? 1 ans au sein de
                la soci??t?? ITGWANA | RFIT TECH qui aide au d??veloppement de
                l???industrie 4.0. J???ai travaill?? sur le projet Carry Track pour
                un client fran??ais Nexans.
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
                      <strong>?? Carry Track ??</strong> est un WMS (Warehouse
                      Management System - logiciel de gestion d'entrep??t) permet
                      le d??placement, le suivi et le stockage des mat??riaux dans
                      tout l'entrep??t. Il augmente l'efficacit?? et r??duit les
                      co??ts gr??ce au partage facile des donn??es cl??s dans toute
                      l'entreprise. Il inclut g??n??ralement des fonctionnalit??s
                      pour le contr??le et le suivi des stocks ainsi que pour la
                      gestion des achats et la surveillance des canaux. int??gre
                      ??galement des outils de gestion client et fournisseur, de
                      comptabilit?? et de reporting des activit??s. Parmi les
                      avantages d'un WMS vous retrouverez l'optimisation et une
                      meilleure visibilit?? des stocks ainsi que des co??ts
                      op??rationnels moindres.
                    </p>
                    <p>
                      <strong>?? Carry Track ??</strong> est un outil qui permet
                      aux organisations de contr??ler les mouvements et le
                      stockage de marchandises dans des entrep??ts. Il contribue
                      ?? la gestion d'op??rations telles que le suivi des stocks,
                      la conception des entrep??ts, le pr??l??vement et l'emballage
                      des marchandises, l'exp??dition, la gestion des quais et
                      des docks, ainsi que la dotation en personnel.
                    </p>
                    <h6 class="card-title">Fonctionnalit??s :</h6>
                    <ul>
                      <li>
                        <strong>Codes-barres/RFID :</strong>
                        identifiez des articles ?? l'aide de codes-barres et de
                        balises RFID et effectuez-en le suivi.
                      </li>
                      <li>
                        <strong>Gestion des stock :</strong>
                        g??rez le trafic des stocks pour garantir un volume
                        optimal du stock et un approvisionnement sortant
                        appropri??.
                      </li>
                      <li>
                        <strong>Gestion des exp??dition :</strong>
                        organisez et suivez les processus d'exp??dition des
                        commandes.
                      </li>
                      <li>
                        <strong>Mise en kit :</strong>
                        rassemblez au sein d'un kit des articles pr??lev??s
                        individuellement pour le traitement d'un ordre de
                        travail ou d'une exp??dition.
                      </li>
                      <li>
                        <strong>Gestion des commande :</strong>
                        organisez, suivez et surveillez les commandes des
                        clients au fur et ?? mesure de leur progression dans la
                        cha??ne d'approvisionnement.
                      </li>
                      <li>
                        <strong>Gestion de la qualit?? :</strong>
                        v??rifiez et g??rez la qualit?? des produits par rapport ??
                        des normes d??finies.
                      </li>
                    </ul>
                    <h6 class="card-title">Avantages :</h6>
                    <p>
                      <strong>?? Carry Track ??</strong> facilite la gestion des
                      op??rations en entr??e et en sortie en rationalisant les
                      op??rations manuelles et en augmentant l'efficacit??
                      g??n??rale. Un logiciel de gestion d'entrep??t pr??sente de
                      nombreux avantages, notamment :
                    </p>
                    <ul>
                      <li>
                        <strong>Optimisation du stock :</strong>
                        un WMS permet aux utilisateurs de suivre les mouvements
                        des marchandises dans leur cha??ne d'approvisionnement.
                        Les utilisateurs peuvent ainsi mieux surveiller et
                        contr??ler leurs niveaux de stock. Un WMS prend en charge
                        de nombreux mod??les de gestion des stocks, tels que
                        LIFO, FIFO et au moment ad??quat.
                      </li>
                      <li>
                        <strong>Meilleure visibilit?? sur les stock :</strong>
                        les appareils RFID (identification par radiofr??quence)
                        et les lecteurs de codes-barres font office d'extensions
                        mat??rielles d'un WMS dans les entrep??ts. La lecture des
                        codes-barres et le marquage RFID des marchandises ??
                        diff??rents points de contr??le dans la cha??ne
                        d'approvisionnement offrent aux utilisateurs une
                        excellente visibilit?? sur les mouvements de leurs
                        exp??ditions.
                      </li>
                      <li>
                        <strong>Co??ts op??rationnels r??duit :</strong>
                        en exploitant des donn??es telles que les exp??ditions
                        entrantes et sortantes attendues et l'espace disponible,
                        les solutions WMS facilitent l'optimisation de
                        l'utilisation de l'espace dans les entrep??ts. Certaines
                        solutions proposent des simulateurs qui permettent aux
                        utilisateurs de cr??er des plans de sol virtuels
                        (indiquant notamment l'emplacement des palettes,
                        ??tag??res et docks de chargement) pour d??terminer la
                        meilleure utilisation possible de l'espace disponible.
                      </li>
                    </ul>
                    <h6 class="card-title">Niveau d'intervention :</h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-d??taill??e-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-d??taill??e-carrytrack"
                        >
                          Conception d??taill??e
                        </a>
                        <div
                          class="collapse"
                          id="conception-d??taill??e-carrytrack"
                        >
                          La conception d??taill??e est la phase de d??veloppement
                          du projet. C???est ici que l???on construit le projet dans
                          son int??gralit?? et dans le respect des cahiers des
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
                              identifier les bugs potentiels et v??rifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent r??alis??e avec des{" "}
                            <strong>???beta-testeurs???</strong> qui testent et font
                            remonter les bugs ??ventuels qu???ils rencontrent en
                            ??change d???une utilisation privil??gi??e avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#d??ploiement-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="d??ploiement-carrytrack"
                        >
                          D??ploiement
                        </a>
                        <div class="collapse" id="d??ploiement-carrytrack"></div>
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
                            La phase de suivi consiste ??{" "}
                            <strong>
                              mesurer p??riodiquement l???efficacit?? du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fix??s, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour r??ellement
                            ???<strong>piloter</strong>??? le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#am??lioration-continue-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="am??lioration-continue-carrytrack"
                        >
                          Am??lioration continue
                        </a>
                        <div
                          class="collapse"
                          id="am??lioration-continue-carrytrack"
                        >
                          <p>
                            L???am??lioration continue consiste ?? mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retomb??es mesur??es</strong> dans la phase de
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
                Auparavant j???ai notamment travaill?? pour Taysir Solutions ??? 2ans
                dans les secteurs m??decines, facturation et agence des voyages.
                J???ai travaill?? en plusieurs projets ?? ADD Invoice ??, ?? DMI ?? et
                ?? Ticketing ??.
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
                      <strong>?? AddInvoice ??</strong> est Un logiciel de
                      facturation vous est utile pour faciliter la gestion des
                      factures de vente (en ligne). Ce type d'outil vous permet
                      de cr??er facilement une facture et de la traiter
                      efficacement gr??ce ?? ses processus automatis??s
                      (production, envoi de factures et r??ception des
                      paiements). La solution de facturation est con??ue pour
                      fonctionner avec des applications de comptabilit?? et
                      fournit une vari??t?? d'outils de reporting des activit??s.
                    </p>
                    <p class="card-text">
                      <strong>?? AddInvoice ??</strong> permet la cr??ation de
                      devis et factures, la planification des factures
                      r??currentes, la gestion des factures impay??es et m??me la
                      signature ??lectronique et le paiement en ligne.
                    </p>
                    <h6 class="card-title">Fonctionnalit??s</h6>
                    <ul>
                      <li>
                        <strong>Historique des factures :</strong>
                        g??rez les archives de chaque facture, client par client,
                        pour un reporting, une gestion des risques, des
                        relations avec les clients et une exploration des
                        donn??es de vente simples et pr??cis.
                      </li>
                      <li>
                        <strong>Suivi du temps et des d??penses :</strong>
                        conservez un registre du temps facturable et des
                        d??penses accumul??s. Ajoutez automatiquement ces donn??es
                        aux factures pour une facturation plus rapide avec moins
                        de risques d'erreur.
                      </li>
                      <li>
                        <strong>Base de donn??es de contacts :</strong>
                        ??laborez une base de donn??es d'informations de contact
                        pour les clients au sein du syst??me de facturation pour
                        ??viter les frais redondants d'un outil de CRM d??di??.
                      </li>
                      <li>
                        <strong>Factures personnalisables :</strong>
                        concevez des dispositions de factures, contenus et
                        images de marque pour raconter la meilleure histoire
                        possible. Obtenez la confiance du client en proposant un
                        contenu conforme aux mat??riels de marque existants.
                      </li>
                      <li>
                        <strong>Factures en ligne :</strong>
                        fournissez et affichez des factures en ligne pour plus
                        de simplicit?? et d'accessibilit?? ?? l'??chelon
                        international, dans n'importe quelle devise. Recevez
                        imm??diatement vos paiements par le biais d'une interface
                        de facturation en ligne.
                      </li>
                    </ul>
                    <ul>
                      <li>Personnalisez les mod??les de facture</li>
                      <li>??mettre des re??us de paiement et des rappels</li>
                      <li>Compatibilit?? TPS</li>
                      <li>Traiter les paiements en ligne</li>
                      <li>G??rer les comptes</li>
                      <li>Facturer les clients dans leur langue</li>
                      <li>G??n??rer des rapports automatis??s</li>
                      <li>Historique des activit??s</li>
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
                          D??finition d'objectifs
                        </a>
                        <div
                          class="collapse"
                          id="definition-objectifs-addinvoice"
                        >
                          Il vous faudra r??pondre ?? la question ???Pourquoi ????.
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
                          Une fois vos objectifs d??finis, vous devez rechercher
                          des solutions permettant d???y r??pondre. Vous devez donc
                          lister l???ensemble des solutions possibles et les
                          classer en fonction de vos crit??res de choix (les plus
                          souvent efficacit??/co??t/d??lai).
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
                          Vous devez lister, d??finir et d??tailler l???ensemble des
                          fonctions auxquelles votre solution devra r??pondre
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
                          Le cahier des charges techniques est l?????tape qui va
                          d??finir les solutions technologiques ?? utiliser pour
                          r??pondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies ?? utiliser(Bootstrap, Angular, ...)
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
                          Conception pr??liminaire
                        </a>
                        <div
                          class="collapse"
                          id="conception-preliminaire-addinvoice"
                        >
                          la conception pr??liminaire est la premi??re ??tape de la
                          conception pure, c???est ici que vous allez r??aliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette ??tape les
                          principales composantes ?? prendre en compte sont
                          l???ergonomie et l???exp??rience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-d??taill??e-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-d??taill??e-addinvoice"
                        >
                          Conception d??taill??e
                        </a>
                        <div
                          class="collapse"
                          id="conception-d??taill??e-addinvoice"
                        >
                          La conception d??taill??e est la phase de d??veloppement
                          du projet. C???est ici que l???on construit le projet dans
                          son int??gralit?? et dans le respect des cahiers des
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
                              identifier les bugs potentiels et v??rifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent r??alis??e avec des{" "}
                            <strong>???beta-testeurs???</strong> qui testent et font
                            remonter les bugs ??ventuels qu???ils rencontrent en
                            ??change d???une utilisation privil??gi??e avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#d??ploiement-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="d??ploiement-addinvoice"
                        >
                          D??ploiement
                        </a>
                        <div class="collapse" id="d??ploiement-addinvoice"></div>
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
                            La phase de suivi consiste ??{" "}
                            <strong>
                              mesurer p??riodiquement l???efficacit?? du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fix??s, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour r??ellement
                            ???<strong>piloter</strong>??? le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#am??lioration-continue-addinvoice"
                          role="button"
                          aria-expanded="false"
                          aria-controls="am??lioration-continue-addinvoice"
                        >
                          Am??lioration continue
                        </a>
                        <div
                          class="collapse"
                          id="am??lioration-continue-addinvoice"
                        >
                          <p>
                            L???am??lioration continue consiste ?? mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retomb??es mesur??es</strong> dans la phase de
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
                      R??alisation d???une solution permettant aux m??decins
                      d???acc??der au dossier m??dical de ses patients.
                    </p>
                    <p>
                      <strong>?? DMI ??</strong>Un logiciel de dossier patient
                      informatis?? automatise la documentation, le stockage et la
                      r??cup??ration des dossiers m??dicaux des patients. Il
                      rationalise la saisie des donn??es, automatise le
                      diagnostic et la s??lection du code CPT, limite les
                      enregistrements papier requis, r??duit les co??ts de
                      transcription, fournit l'historique actualis?? des dossiers
                      de patients et diminue les d??lais pour les consultations
                      des patients et l'obtention des r??sultats de laboratoire.
                      Gr??ce aux outils de dossier patient informatis??, les
                      m??decins, les cabinets et les organismes de soins de sant??
                      gagnent du temps, r??duisent les erreurs m??dicales,
                      ex??cutent moins de t??ches administratives et fournissent
                      des diagnostics plus pr??cis ?? leurs patients.
                    </p>
                    <p>
                      Le d??ploiement du Dossier M??dical Informatis?? (DMI) dans
                      les Structures Sanitaires pour l'am??lioration des prises
                      en charge des patients (meilleur suivi gr??ce ?? un
                      historique du patient, partage continu et en temps r??el
                      des donn??es m??dicales entre les diff??rents intervenants du
                      parcours de patients, etc..)
                    </p>
                    <h6 class="card-title">Fonctionnalit??s</h6>
                    <ul>
                      <li>Mod??les personnalisables (Templates)</li>
                      <li>
                        Communication temps r??el
                        <ul>
                          <li>
                            Chaque m??decin dispose d'un compte rendu ?? jour et
                            pr??cis de l'historique du patient.
                          </li>
                          <li>Discuter directement avec un autre m??decin</li>
                        </ul>
                      </li>
                      <li>
                        Fonctionnalit??s de planification
                        <ul>
                          <li>Pouvoir facilement suivre les rendez-vous</li>
                          <li>
                            {" "}
                            La possibilit?? d'informer les patients imm??diatement
                          </li>
                          <li>
                            Centralisant un grand nombre de vos processus
                            administratifs et en organisant votre calendrier et
                            votre syst??me de notification
                          </li>
                        </ul>
                      </li>
                      <li>
                        Ordonnances ??lectroniques
                        <ul>
                          <li>Communiquer directement avec les pharmacies</li>
                        </ul>
                      </li>
                      <li>
                        Portails patients
                        <ul>
                          <li>
                            Une liste de leurs allergies, vaccinations et
                            m??dicaments.
                          </li>
                          <li>
                            Mat??riel ??ducatif (comme les instructions
                            d'entretien).
                          </li>
                          <li>Informations de leur derni??re visite.</li>
                          <li>R??sultats de laboratoire.</li>
                          <li>Prise de rendez-vous.</li>
                          <li>Demande de renouvellement d'ordonnance.</li>
                          <li>Coordonn??es.</li>
                        </ul>
                      </li>
                      <li>
                        Int??gration du laboratoire
                        <ul>
                          <li>
                            Gagner du temps en ??vitant de saisir manuellement
                            chaque r??sultat de laboratoire/d'image
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
                          D??finition d'objectifs
                        </a>
                        <div class="collapse" id="definition-objectifs-dmi">
                          Il vous faudra r??pondre ?? la question ???Pourquoi ????.
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
                          Une fois vos objectifs d??finis, vous devez rechercher
                          des solutions permettant d???y r??pondre. Vous devez donc
                          lister l???ensemble des solutions possibles et les
                          classer en fonction de vos crit??res de choix (les plus
                          souvent efficacit??/co??t/d??lai).
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
                          Vous devez lister, d??finir et d??tailler l???ensemble des
                          fonctions auxquelles votre solution devra r??pondre
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
                          Le cahier des charges techniques est l?????tape qui va
                          d??finir les solutions technologiques ?? utiliser pour
                          r??pondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies ?? utiliser(Bootstrap, Angular, ...)
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
                          Conception pr??liminaire
                        </a>
                        <div class="collapse" id="conception-preliminaire-dmi">
                          la conception pr??liminaire est la premi??re ??tape de la
                          conception pure, c???est ici que vous allez r??aliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette ??tape les
                          principales composantes ?? prendre en compte sont
                          l???ergonomie et l???exp??rience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-d??taill??e-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-d??taill??e-dmi"
                        >
                          Conception d??taill??e
                        </a>
                        <div class="collapse" id="conception-d??taill??e-dmi">
                          La conception d??taill??e est la phase de d??veloppement
                          du projet. C???est ici que l???on construit le projet dans
                          son int??gralit?? et dans le respect des cahiers des
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
                              identifier les bugs potentiels et v??rifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent r??alis??e avec des{" "}
                            <strong>???beta-testeurs???</strong> qui testent et font
                            remonter les bugs ??ventuels qu???ils rencontrent en
                            ??change d???une utilisation privil??gi??e avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#d??ploiement-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="d??ploiement-dmi"
                        >
                          D??ploiement
                        </a>
                        <div class="collapse" id="d??ploiement-dmi"></div>
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
                            La phase de suivi consiste ??{" "}
                            <strong>
                              mesurer p??riodiquement l???efficacit?? du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fix??s, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour r??ellement
                            ???<strong>piloter</strong>??? le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#am??lioration-continue-dmi"
                          role="button"
                          aria-expanded="false"
                          aria-controls="am??lioration-continue-dmi"
                        >
                          Am??lioration continue
                        </a>
                        <div class="collapse" id="am??lioration-continue-dmi">
                          <p>
                            L???am??lioration continue consiste ?? mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retomb??es mesur??es</strong> dans la phase de
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
                      <strong>?? Ticketing ??</strong> est un logiciel pour tour
                      op??rateurs g??re les forfaits, les clients, l'??mission de
                      billets et les itin??raires pour les tour op??rateurs, les
                      organisateurs de forfaits vacances, les sp??cialistes du
                      marketing de destinations et les entreprises de transport
                      en commun. Il permet de g??n??rer des devis, de d??finir des
                      itin??raires et de g??rer les r??servations des clients de
                      voyages organis??s. Il aide ??galement les tour op??rateurs ??
                      automatiser leurs processus m??tier, tels que la
                      comptabilit??, la facturation, le marketing et le reporting
                      des activit??s. Voir aussi : logiciel de r??servation et
                      logiciel pour agences de voyages.
                    </p>
                    <p class="card-text">
                      <strong>?? Ticketing ??</strong> est un plateforme pour les
                      agences de voyages et les tour-op??rateurs. Les
                      fonctionnalit??s comprennent la facturation, les comptes
                      clients, les comptes fournisseurs, le grand livre, les
                      rapports avanc??s en temps r??el, etc. Modules optionnels
                      disponibles pour la gestion des visites : cr??ation de
                      visites, gestion des stocks, r??servation en ligne
                    </p>
                    <p>
                      Int??gr?? aux principaux GDS (Global Distribution System)
                      (Sabre, Amadeus, Travelport).
                    </p>
                    <h6 class="card-title">Qui utilise TravelWorks ?</h6>
                    <p>
                      D??di??e aux agences de voyages int??ress??es par
                      l'utilisation d'un logiciel de gestion et comptable en vue
                      de :
                    </p>
                    <ul>
                      <li>r??duire les co??ts op??rationnels</li>
                      <li>g??n??rer du chiffre d'affaires suppl??mentaire</li>
                      <li>am??liorer la satisfaction des clients</li>
                    </ul>
                    <h6 class="card-title">FONCTIONNALIT??S</h6>
                    <ul>
                      <li>Syst??me central de r??servation</li>
                      <li>Gestion des clients</li>
                      <li>
                        Int??gration{" "}
                        <abbr title="Les GDS sont des plateformes technologiques de r??servation qui ont longtemps ??t?? incontournables dans les domaines du transport a??rien et de l'h??tellerie puisqu'il s'agissait des plateformes technologiques sur lesquelles ??taient branch??es les agences de voyages physiques par lesquelles transitaient alors l'essentiel des transactions et r??servations.">
                          GDS
                        </abbr>{" "}
                        (Global Distribution System) et{" "}
                        <abbr title="L'initiale OTA est utilis??e dans le domaine du marketing touristique pour d??signer les - Online Tourism Agency - c'est ?? dire les agences de voyages en lignes qui commercialisent essentiellement des prestations touristiques / voyages fournies par des tiers.">
                          OTA
                        </abbr>{" "}
                        (Online Travel Agents)
                      </li>
                      <li>Cr??ation d'itin??raires</li>
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
                          D??finition d'objectifs
                        </a>
                        <div
                          class="collapse"
                          id="definition-objectifs-ticketing"
                        >
                          Il vous faudra r??pondre ?? la question ???Pourquoi ????.
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
                          Une fois vos objectifs d??finis, vous devez rechercher
                          des solutions permettant d???y r??pondre. Vous devez donc
                          lister l???ensemble des solutions possibles et les
                          classer en fonction de vos crit??res de choix (les plus
                          souvent efficacit??/co??t/d??lai).
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
                          Vous devez lister, d??finir et d??tailler l???ensemble des
                          fonctions auxquelles votre solution devra r??pondre
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
                          Le cahier des charges techniques est l?????tape qui va
                          d??finir les solutions technologiques ?? utiliser pour
                          r??pondre au cahier des charges fonctionnelles. Le
                          cahier des charges techniques statuera sur les
                          librairies ?? utiliser(Bootstrap, Angular, ...)
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
                          Conception pr??liminaire
                        </a>
                        <div
                          class="collapse"
                          id="conception-preliminaire-ticketing"
                        >
                          la conception pr??liminaire est la premi??re ??tape de la
                          conception pure, c???est ici que vous allez r??aliser
                          dans les grandes lignes la maquette visuelle (web
                          design) de votre projet. Dans cette ??tape les
                          principales composantes ?? prendre en compte sont
                          l???ergonomie et l???exp??rience utilisateur que vous
                          souhaitez offrir.
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#conception-d??taill??e-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="conception-d??taill??e-ticketing"
                        >
                          Conception d??taill??e
                        </a>
                        <div
                          class="collapse"
                          id="conception-d??taill??e-ticketing"
                        >
                          La conception d??taill??e est la phase de d??veloppement
                          du projet. C???est ici que l???on construit le projet dans
                          son int??gralit?? et dans le respect des cahiers des
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
                              identifier les bugs potentiels et v??rifier le bon
                              respect des cahiers charges
                            </strong>
                            . Dans le milieu du web, la phase de test est
                            souvent r??alis??e avec des{" "}
                            <strong>???beta-testeurs???</strong> qui testent et font
                            remonter les bugs ??ventuels qu???ils rencontrent en
                            ??change d???une utilisation privil??gi??e avant le
                            lancement du projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#d??ploiement-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="d??ploiement-ticketing"
                        >
                          D??ploiement
                        </a>
                        <div class="collapse" id="d??ploiement-ticketing"></div>
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
                            La phase de suivi consiste ??{" "}
                            <strong>
                              mesurer p??riodiquement l???efficacit?? du projet
                            </strong>{" "}
                            par rapport aux objectifs initialement fix??s, et
                            mettre en place des{" "}
                            <strong>actions correctives</strong> pour r??ellement
                            ???<strong>piloter</strong>??? le projet.
                          </p>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#am??lioration-continue-ticketing"
                          role="button"
                          aria-expanded="false"
                          aria-controls="am??lioration-continue-ticketing"
                        >
                          Am??lioration continue
                        </a>
                        <div
                          class="collapse"
                          id="am??lioration-continue-ticketing"
                        >
                          <p>
                            L???am??lioration continue consiste ?? mettre en place
                            des actions correctives en regard des{" "}
                            <strong>retomb??es mesur??es</strong> dans la phase de
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
