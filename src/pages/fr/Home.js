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
          <article id="diginov">
            <h6>Diginov</h6>
            <div>
              <p>
                Je suis Ghabi Assaad, je suis un ingénieur de développement .Net
                senior. Je suis actuellement en poste chez Diginov à partir de
                début de 2020. J’ai travaillé en deux projets « UAE SME » et «
                FGIC » pour des clients émiratis (Ministère d’économie).
              </p>
              <p>
                <strong>Le premier c’est « UAE SME » :</strong> Le programme
                national pour les PME fournit un soutien financier pour
                développer les entreprises et surmonter les obstacles, obtenir
                de meilleurs rendements des projets et renforcer la présence des
                entreprises sur les marchés locaux et étrangers.
              </p>
              <p>
                <strong>Le deuxième c’est « FGIC » :</strong> Le centre fédéral
                d'information géospatiale (FGIC) désormais responsable du
                développement et de la supervision d'une infrastructure
                nationale de données spatiales a pour objectif d'établir les
                éléments institutionnels, techniques et les processus de
                gouvernance nécessaires pour soutenir un partage et une
                utilisation plus efficaces des données à travers le gouvernement
                et la société.
              </p>
              <p>
                <strong>La méthodologie</strong> suivie dans les deux projets
                Agile Scrum. On travaille par sprint, chaque sprint dure 2
                semaines, et chaque semaine on a une réunion avec le client.
              </p>
              <p>
                <strong>Les technologies</strong> de développement .Net Core
                3.1, Orchard CMS, Clean Architecture, Razor Pages, SCSS.
              </p>
            </div>
          </article>
          <article id="itgwana">
            <h6>ITGWANA</h6>
            <div>
              <p>
                Auparavant j’ai travaillé pendant ≈ 1 ans au sein de la société
                ITGWANA | RFIT TECH qui aide au développement de l’industrie
                4.0. J’ai travaillé sur le projet Carry Track pour un client
                français Nexans.
              </p>
              <p>
                <strong>« Carry Track »</strong> c’est une solution de gestion
                et de traçabilité es contenants en utilisant la technologie RFID
                a pour objectif d’achever telle fonctionnalités comme : Gestion
                de parc de contenants : traçabilité du référentiel de
                contenants, fiches techniques et photos, statut (plein/vide),
                Cartographie / localisation, Gestion de la répartition des
                contenants sur différentes zones/différents sites, Gestion des
                erreurs de chargement/déchargement, Tableaux de bord et
                rapports, Alertes (dévoyé, maintenance, température, choc…),
                Historique des mouvements.
              </p>
              <p>
                <strong>La méthodologie</strong> suivie dans les deux projets
                Agile Scrum. SCSS.
              </p>
              <p>
                <strong>Les technologies</strong> de développement .Net Core
                2.1, CSLA.NET, Architecture Multi layer, MVC, Telerik,
              </p>
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
              <p>
                <strong>« ADD Invoice »</strong> Réalisation d’une solution de
                facturation avec la possibilité d’étudier les factures avec un
                suivi pour les paiements.
              </p>
              <p>
                <strong>Les technologies</strong> de développement .Net
                Framework 4, Architecture Multi layer, MVC.
              </p>
              <p>
                <strong>« DMI »</strong> Réalisation d’une solution permettant
                aux médecins d’accéder au dossier médical de ses patients.
              </p>
              <p>
                <strong>Les technologies</strong> de développement .Net Core
                2.0, Clean Architecture, MVC.
              </p>
              <p>
                <strong>« Ticketing »</strong> Réalisation d’une solution
                permettant de gérer les agences de voyages. ce qui m’amène à ma
                poste actuelle.
              </p>
              <p>
                <strong>Les technologies</strong> de développement .Net Core
                2.1, Clean Architecture, Restful Api, Reactjs.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
