import React from "react";
import { Link } from "react-router-dom";

export default function Qualities() {
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
                    href="#skills"
                  >
                    Quels sont vos compétences :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#motivation"
                  >
                    Quels sont vos motives :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#faults"
                  >
                    Quels sont vos défauts :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#qualities"
                  >
                    Quels sont vos qualités :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#you-not-another"
                  >
                    Pourquoi vous et pas un autre :
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
          <article id="skills">
            <h6>Quels sont vos compétences :</h6>
            <div>
              <p>Voilà aujourd’hui j’amène 3 compétences clés :</p>
              <ul>
                <li>
                  Compétence technique développement des applications web
                  backend et front avec les Framework .Net et .Net Core et
                  Reactjs. Ainsi que la conception des bases des données.
                </li>
                <li>
                  2°éme compétence l’adaptabilité et l’intégration facile dans
                  la vie professionnelle.
                </li>
                <li>
                  3°ème compétence en lead technique : à Taysir solutions j’ai
                  l’occasion d’être un lead technique d’une équipe de 5
                  développeurs pendant 8 mois pour le projet Taysir Ticketing
                  qui gère les agences de voyages.
                </li>
              </ul>
            </div>
          </article>
          <article id="motivation">
            <h6>Quels sont vos motives :</h6>
            <div>
              <ul>
                <li>
                  Ce qui m’attire vraiment dans ce poste c’est la possibilité de
                  traiter la totalité d’un besoin : recueil, analyse,
                  développement, tests et mise en production. Je souhaite
                  travailler sur des données concrètes et devoir m’interroger en
                  permanence sur la finalité de mes analyses.
                </li>
                <li>
                  J’ai toujours voulu intégrer une entreprise connue comme la
                  vôtre pour progresser dans ce métier passionnant. En voyant
                  l’offre, j’ai tout de suite constaté que les exigences du
                  poste correspondaient à mes compétences techniques. J’aime
                  aussi apprendre de nouvelles choses, exactement comme ce que
                  vous attendez de vos ingénieurs. En plus, vous avez mis le
                  point sur la masse de travail importante. Pour ma part, les
                  challenges complexes à résoudre m’intéressent encore plus.
                </li>
              </ul>
            </div>
          </article>
          <article id="faults">
            <h6>Quels sont vos défauts :</h6>
            <div>
              <ul>
                <li>
                  Mon default je n’aime pas demander de l'aide, j'aime bien y
                  arriver tout seul comme un grand
                </li>
                <li>
                  Mon défaut c'est que je suis quelqu'un de passionné et j’ai
                  parfois tendance à m’emballer un peu vite est un peu trop dans
                  l'émotion
                </li>
                <li>
                  Si je prends la parole dans le publique devant des groupes 15
                  20 personnes c'est une chose qui me stress je ne me sens pas à
                  l'aise dans ce type de situation. Pour dépasser ça j’ai
                  participé à un espace entreprenariat pendant 2 semaines pour
                  confronter ce type de trac.
                </li>
              </ul>
            </div>
          </article>
          <article id="qualities">
            <h6>Quels sont vos qualités :</h6>
            <div>
              <ul>
                <li>
                  L’autonomie : c’est que je suis quelqu’un qui se débrouille
                  seul et je n’ai pas des autres pour avancer. Je suis capable
                  de prendre des propres décisions et j’y en assume entièrement
                  toutes responsabilités.
                </li>
                <li>
                  L’adaptabilité : voici moi je suis une personne qui m’adapte
                  très facilement, lorsque je prends un nouveau poste il ne me
                  faut peu de temps pour être opérationnelle, pour me sentir à
                  l’aise de mon environnement, de mes collègues, de ma
                  hiérarchie.
                </li>
                <li>
                  La discrétisation : Je ne vais pas être la première personne à
                  la machine à café pour mettre en rencontre radio-potin et
                  raconter tout ce qui se passe.
                </li>
                <li>
                  La sociabilité : Je suis toujours souriant, bon relationnel,
                  toujours positifs. Je mets de bonne humeur et j’aime
                  travailler dans la bonne humeur et j’ai sais qu’il y a des
                  temps finalement pour rigoler et des temps pour travailler.
                </li>
              </ul>
            </div>
          </article>
          <article id="you-not-another">
            <h6>Pourquoi vous et pas un autre :</h6>
            <div>
              <p>
                Pourquoi et pas un autre paraceque j’ai noté que la clé de ce
                poste
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
