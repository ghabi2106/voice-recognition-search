import React from "react";
import { Link } from "react-router-dom";

export default function Presentation() {
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
          <article id="taysir">
            <h6>Taysir Solutions</h6>
            <div>
              <p>
                Je suis Ghabi Assaad, titulaire d'un diplome d'ingénieurs que
                j'ai obtenu en 2017 issue de l'ENIT, je suis un ingénieur de
                développement Full stack .Net et angular avec 6 ans
                d'expérience.
              </p>
              <p>
                ce qui concerne mes expériences professionnelles; j'avias
                l'oportunité d'intégré la société Taysir en ans 2017 qui est
                spécialisé en développement des produits informatiques sur
                différents secteurs comme la santé, les services et les finances
                j'avais l'oportunité de travailler sur 3 projets;
              </p>
              <p>
                le premier AddInvoice dédié pour les finances, le deuxième DMI
                dédié pour la santé et le dernier c'est Ticketing dédié pour les
                services.
              </p>
              <p>
                Là au niveau de ces 3 applications c'était pricipalement de
                l'ajout de nouvelle fonctionnalités, amélioration des
                applications et recherche des solutions ...
              </p>
              <p>
                Mais le projet le plus pertinent selon mon avis est Ticketing
                qui était from scratch Le voulu le plus important à mon niveau
                c'est que j'avais l'aspet manageriale. j'avais le dévelopement
                comme étant une expérience pertinante et mis à part ça j'avais
                l'opportunité de manager l'équipe (6 personnes) et je monte en
                compétence les résources que j'avais, les formations,
                supervision et collaboration en méthode Agile (sprint 1
                semaine).
              </p>
            </div>
          </article>
          <article id="diginov">
            <h6>Diginov</h6>
            <div>
              <p>
                Après javais intégré Diginov pendant 2 ans. J’avais développé
                from scratch deux plateformes « UAE SME » et « FGIC » pour le
                ministère d’économiede l'Emirates.
              </p>
              <p>
                Le portail « UAE SME » offre aux PME un accès pratique à des
                informations détaillées sur tous les programmes gouvernementaux
                de développement des PME , y compris les différents régimes de
                financement et services de soutien aux entreprises.
              </p>
              <p>
                Le plateforme « FGIC » est un SIG désormais responsable
                d'organiser et de présenter des données alphanumériques qui sont
                spatialement référencées.
              </p>
              <p>
                Durant cette mission c'était générallement de conception,
                analyse de cahier de charges et développement des applications
                ASP.Net back et front from scratch avec la méthodologie agile
                scrum avec sprint d'une semaine.
              </p>
            </div>
          </article>
          <article id="capgemini">
            <h6>Capgemini</h6>
            <div>
              <p>
                Après javais intégré Capgemini pendant 2 ans. J’avais contribué
                au développment de deux projets « AskMe » et « TV » pour
                Volkswagen au sein d'une équipe de 20 personnes.
              </p>
              <p>
                Ces deux projets sont des solution de gestion automobile conçue
                pour aider les ateliers automobiles de Volkswagen à gérer les
                estimations, la planification, les opérations, les inspections,
                etc.
              </p>
              <p>
                là au niveau de cette mission c'était générallement de
                développement de nouveaux modules de l'applications front et
                back, déboggage, des tests unitaires et d'autres fonctionnalités
                comme support des membres de l'équipe et faciliter
                l'intégrations des nouveaux membres par la présentation des
                projets et préparation des environnements de travails
              </p>
              <p>
                On travaille par la méthodologie agile scrum qui est
                parfaitement appliqué aux projets avec sprint de 2 semaines
              </p>
              <p>
                Ce qui concerne les céromonies, on a tout les céromonies: daily
                stand-up meeting, sprint revue, sprint retrospective et sprint
                planning et nous communiquons avec l'anglais
              </p>
              <p>
                voilà c'était tout de ma part, j'espère que j'étais précis au
                niveau de ma présentation. Si vous avez des questions je vous
                écoute.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
