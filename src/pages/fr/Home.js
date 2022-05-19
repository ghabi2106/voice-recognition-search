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
