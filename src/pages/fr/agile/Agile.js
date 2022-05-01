import React from "react";
import { Link } from "react-router-dom";

export default function Agile() {
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
                    href="#agile"
                  >
                    Agile Manifest
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tdd"
                  >
                    TDD
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#values"
                  >
                    Agile Manifest Values
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#principles"
                  >
                    Agile Manifest Principles
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cycle"
                  >
                    Agile software development cycle
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#scrum"
                  >
                    Agile Scrum
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#scrum-master"
                  >
                    Scrum Master
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#sprints"
                  >
                    Sprints
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#sprint-planning"
                  >
                    Sprint Planning
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#backlog"
                  >
                    Backlog
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cleancode"
                  >
                    Clean code
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/command"
                  >
                    Command
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/designpattern"
                  >
                    Design Principle &amp; Pattern
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/di"
                  >
                    Dependency injection
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/factory"
                  >
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mediator"
                  >
                    Mediator
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/observer"
                  >
                    Observer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/singleton"
                  >
                    Singleton
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/solid"
                  >
                    S.O.L.I.D. Principles
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
          <h3>Agile</h3>
          <article id="agile">
            <h6>Qu'est-ce qu'Agile ?</h6>
            <div>
              <p>
                Agile est une approche itérative de la gestion de projet et du
                développement de logiciels qui aide les équipes à offrir de la
                valeur à leurs clients plus rapidement et avec moins de maux de
                tête. Au lieu de tout miser sur un lancement « big bang », une
                équipe agile fournit du travail par petits incréments, mais
                consommables. Les exigences, les plans et les résultats sont
                évalués en continu afin que les équipes disposent d'un mécanisme
                naturel pour réagir rapidement au changement.
              </p>
              <figure>
                <img
                  src="/img/agile/traditional-development-method.svg"
                  alt="traditional-development-method"
                />
                <figcaption>Traditional Development Method</figcaption>
              </figure>
              <figure>
                <img
                  src="/img/agile/agile-development-method.svg"
                  alt="agile-development-method"
                />
                <figcaption>Agile Development Method</figcaption>
              </figure>
            </div>
          </article>
          <article id="tdd">
            <h6>What is test-driven development?</h6>
            <div>
              <p>
                <strong>Test-driven development (TDD)</strong> est une technique
                de développement clé qui rend possible le développement agile.
                TDD se concentre sur le développement progressif en créant et en
                testant de petits morceaux de code pendant le développement. Si
                tous les petits morceaux de code réussissent leurs tests, le
                projet est prêt à être expédié.
              </p>
              <p>
                TDD complète parfaitement le développement agile car il garantit
                que chaque fonctionnalité fonctionne avant de passer à la
                suivante. Les développeurs peuvent ensuite combiner toutes les
                fonctionnalités de travail à la fin d'une itération agile pour
                former un composant de projet de travail.
              </p>
            </div>
          </article>
          <article id="values">
            <h6>Quatre valeurs d'Agile</h6>
            <ul>
              <li>
                les individus et les interactions sur les processus et les
                outils.
              </li>
              <li>logiciel de travail sur une documentation complète.</li>
              <li>
                collaboration avec les clients sur la négociation des contrats.
              </li>
              <li>Répondre au changement au sujet d'un plan.</li>
            </ul>
          </article>
          <article id="principles">
            <h6>The 12 principes</h6>
            <ol>
              <li>
                Satisfaire les clients grâce à continue d'un travail précieux.
              </li>
              <li>
                Diviser le gros travail en tâches plus petites qui peuvent être
                accomplies rapidement.
              </li>
              <li>
                Reconnaître que le meilleur travail émerge des équipes
                auto-organisées.
              </li>
              <li>
                Fournir aux personnes motivées l'environnement et le soutien
                dont elles ont besoin et leur faire confiance pour faire le
                travail.
              </li>
              <li>Créer des processus qui favorisent les efforts durables.</li>
              <li>Maintenir un rythme constant pour le travail terminé.</li>
              <li>
                Accueillir les besoins changeants, même tard dans un projet.
              </li>
              <li>
                Rassembler l'équipe de projet et les chefs d'entreprise au
                quotidien tout au long du projet.
              </li>
              <li>
                Faire réfléchir l'équipe à intervalles réguliers sur la façon de
                devenir plus efficace, puis régler et ajuster le comportement en
                conséquence.
              </li>
              <li>Mesurer les progrès par la quantité de travail accompli.</li>
              <li>Recherche permanente de l'excellence.</li>
              <li>Exploiter le changement pour un avantage concurrentiel.</li>
            </ol>
          </article>
          <article id="cycle">
            <h6>Agile software development cycle</h6>
            <div>
              <img
                src="/img/agile/software_quality-agile_software_dev_cycle_mobile.jpg"
                alt="software_quality-agile_software_dev_cycle_mobile"
              />
              <ul>
                <li>
                  <strong>Plan. </strong>Le sprint commence par une réunion de
                  planification de sprint, au cours de laquelle les membres de
                  l'équipe se réunissent pour définir les composants de la
                  prochaine série de travaux. Le chef de produit priorise le
                  travail à partir d'un arriéré de tâches à affecter à l'équipe.
                </li>
                <li>
                  <strong>Développer. </strong>Concevoir et développer le
                  produit conformément aux directives approuvées.
                </li>
                <li>
                  <strong>Test/AQ. </strong>Effectuez des tests approfondis et
                  documentez les résultats avant la livraison.
                </li>
                <li>
                  <strong>Livrer. </strong>Présentez le produit ou le logiciel
                  fonctionnel aux parties prenantes et aux clients.
                </li>
                <li>
                  <strong>Évaluer. </strong>Sollicitez les commentaires du
                  client et des parties prenantes et rassemblez des informations
                  à intégrer dans le prochain sprint.
                </li>
              </ul>
            </div>
          </article>
          <article id="scrum">
            <h6>Qu'est-ce que Scrum ?</h6>
            <p>
              Scrum est un framework qui aide les équipes à apprendre par
              l'expérience, à s'auto-organiser tout en travaillant sur un
              problème et à réfléchir sur leurs victoires et leurs défaites pour
              s'améliorer continuellement.
            </p>
          </article>
          <article id="scrum-master">
            <h6>Scrum master</h6>
            <p>
              Le Scrum master est le leader d'une équipe Scrum et est chargé de
              défendre un projet, de fournir des conseils à l'équipe et au
              propriétaire du produit, et de s'assurer que toutes les pratiques
              agiles sont suivies par les membres de l'équipe.
            </p>
          </article>
          <article id="sprints">
            <h6>Sprints</h6>
            <p>
              Un sprint est une courte période de temps pendant laquelle une
              équipe Scrum travaille pour accomplir une quantité de travail
              définie.
            </p>
          </article>
          <article id="sprint-planning">
            <h6>Planification de sprint</h6>
            <p>
              La planification de sprint est un événement dans Scrum qui définit
              ce qui peut être livré dans le sprint à venir et comment ce
              travail sera réalisé.
            </p>
          </article>
          <article id="backlog">
            <h6>Qu'est-ce qu'un backlog de produit ?</h6>
            <p>
              Un backlog de produit est une liste de travail prioritaire pour
              l'équipe de développement qui est dérivée de la feuille de route
              et de ses exigences.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
