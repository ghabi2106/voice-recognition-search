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
                Agile est une approche it??rative de la gestion de projet et du
                d??veloppement de logiciels qui aide les ??quipes ?? offrir de la
                valeur ?? leurs clients plus rapidement et avec moins de maux de
                t??te. Au lieu de tout miser sur un lancement ?? big bang ??, une
                ??quipe agile fournit du travail par petits incr??ments, mais
                consommables. Les exigences, les plans et les r??sultats sont
                ??valu??s en continu afin que les ??quipes disposent d'un m??canisme
                naturel pour r??agir rapidement au changement.
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
                de d??veloppement cl?? qui rend possible le d??veloppement agile.
                TDD se concentre sur le d??veloppement progressif en cr??ant et en
                testant de petits morceaux de code pendant le d??veloppement. Si
                tous les petits morceaux de code r??ussissent leurs tests, le
                projet est pr??t ?? ??tre exp??di??.
              </p>
              <p>
                TDD compl??te parfaitement le d??veloppement agile car il garantit
                que chaque fonctionnalit?? fonctionne avant de passer ?? la
                suivante. Les d??veloppeurs peuvent ensuite combiner toutes les
                fonctionnalit??s de travail ?? la fin d'une it??ration agile pour
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
              <li>logiciel de travail sur une documentation compl??te.</li>
              <li>
                collaboration avec les clients sur la n??gociation des contrats.
              </li>
              <li>R??pondre au changement au sujet d'un plan.</li>
            </ul>
          </article>
          <article id="principles">
            <h6>The 12 principes</h6>
            <ol>
              <li>
                Satisfaire les clients gr??ce ?? continue d'un travail pr??cieux.
              </li>
              <li>
                Diviser le gros travail en t??ches plus petites qui peuvent ??tre
                accomplies rapidement.
              </li>
              <li>
                Reconna??tre que le meilleur travail ??merge des ??quipes
                auto-organis??es.
              </li>
              <li>
                Fournir aux personnes motiv??es l'environnement et le soutien
                dont elles ont besoin et leur faire confiance pour faire le
                travail.
              </li>
              <li>Cr??er des processus qui favorisent les efforts durables.</li>
              <li>Maintenir un rythme constant pour le travail termin??.</li>
              <li>
                Accueillir les besoins changeants, m??me tard dans un projet.
              </li>
              <li>
                Rassembler l'??quipe de projet et les chefs d'entreprise au
                quotidien tout au long du projet.
              </li>
              <li>
                Faire r??fl??chir l'??quipe ?? intervalles r??guliers sur la fa??on de
                devenir plus efficace, puis r??gler et ajuster le comportement en
                cons??quence.
              </li>
              <li>Mesurer les progr??s par la quantit?? de travail accompli.</li>
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
                  <strong>Plan. </strong>Le sprint commence par une r??union de
                  planification de sprint, au cours de laquelle les membres de
                  l'??quipe se r??unissent pour d??finir les composants de la
                  prochaine s??rie de travaux. Le chef de produit priorise le
                  travail ?? partir d'un arri??r?? de t??ches ?? affecter ?? l'??quipe.
                </li>
                <li>
                  <strong>D??velopper. </strong>Concevoir et d??velopper le
                  produit conform??ment aux directives approuv??es.
                </li>
                <li>
                  <strong>Test/AQ. </strong>Effectuez des tests approfondis et
                  documentez les r??sultats avant la livraison.
                </li>
                <li>
                  <strong>Livrer. </strong>Pr??sentez le produit ou le logiciel
                  fonctionnel aux parties prenantes et aux clients.
                </li>
                <li>
                  <strong>??valuer. </strong>Sollicitez les commentaires du
                  client et des parties prenantes et rassemblez des informations
                  ?? int??grer dans le prochain sprint.
                </li>
              </ul>
            </div>
          </article>
          <article id="scrum">
            <h6>Qu'est-ce que Scrum ?</h6>
            <p>
              Scrum est un framework qui aide les ??quipes ?? apprendre par
              l'exp??rience, ?? s'auto-organiser tout en travaillant sur un
              probl??me et ?? r??fl??chir sur leurs victoires et leurs d??faites pour
              s'am??liorer continuellement.
            </p>
          </article>
          <article id="scrum-master">
            <h6>Scrum master</h6>
            <p>
              Le Scrum master est le leader d'une ??quipe Scrum et est charg?? de
              d??fendre un projet, de fournir des conseils ?? l'??quipe et au
              propri??taire du produit, et de s'assurer que toutes les pratiques
              agiles sont suivies par les membres de l'??quipe.
            </p>
          </article>
          <article id="sprints">
            <h6>Sprints</h6>
            <p>
              Un sprint est une courte p??riode de temps pendant laquelle une
              ??quipe Scrum travaille pour accomplir une quantit?? de travail
              d??finie.
            </p>
          </article>
          <article id="sprint-planning">
            <h6>Planification de sprint</h6>
            <p>
              La planification de sprint est un ??v??nement dans Scrum qui d??finit
              ce qui peut ??tre livr?? dans le sprint ?? venir et comment ce
              travail sera r??alis??.
            </p>
          </article>
          <article id="backlog">
            <h6>Qu'est-ce qu'un backlog de produit ?</h6>
            <p>
              Un backlog de produit est une liste de travail prioritaire pour
              l'??quipe de d??veloppement qui est d??riv??e de la feuille de route
              et de ses exigences.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
