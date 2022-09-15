import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Tdd() {
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
                    href="#tdd"
                  >
                    TDD
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#bdd"
                  >
                    BDD
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
          <h3>TDD &amp; BDD</h3>
          <article id="tdd">
            <h6>TDD</h6>
            <div>
              <p>
                <b>Le développement piloté par les tests (TDD)</b> est une
                approche de développement logiciel itérative consiste à
                concevoir les différentes fonctionnalités d'une application de
                manière itérative en écrivant les tests avant le code source,
                puis en remaniant le code jusqu'à ce que les tests passent.
              </p>
              <p>
                La démarche à suivre pour mettre en place cette l’approche TDD
                est décomposée en trois phases appelé <b>RGR</b>
              </p>
              <ul>
                <li>
                  <b>
                    <font color="red"> R (Red) </font>
                  </b>
                  : écrire un code de test et les faire échouer
                </li>
                <li>
                  <b>
                    <font color="green">G (Green)</font>
                  </b>{" "}
                  : écrire le code métier qui valide le test
                </li>
                <li>
                  <b>R (Refractor) </b>: remaniement du code afin d'en améliorer
                  la qualité
                </li>
              </ul>
              <p>
                Le cycle de développement préconisé par TDD comporte{" "}
                <b>cinq étapes</b> :
              </p>
              <ol>
                <li> Ecriture d'un premier test </li>
                <li>
                  Exécuter le test et vérifier qu'il échoue (car le code qu'il
                  teste n'a pas encore été implémenté)
                </li>
                <li>
                  Ecriture de l'implémentation pour faire passer le test (il
                  existe différentes manières de corriger ce code)
                </li>
                <li>
                  Exécution des tests afin de contrôler que les tests passent et
                  dans ce présent l'implémentation respectera les règles
                  fonctionnelles des tests unitaires
                </li>
                <li>
                  Remaniement (Refractor) du code afin d'en améliorer la qualité
                  mais en conservant les mêmes fonctionnalités{" "}
                </li>
              </ol>
              <img
                src="/img/agile/Test cases TestDrivenD2.png"
                alt="Test cases TestDrivenD2.png"
              />
              <img src="/img/agile/tdd.png" alt="tdd" />
              <img
                style={{ height: "180px" }}
                src="/img/agile/RGR.png"
                alt="RGR"
              />
            </div>
          </article>
          <article id="bdd">
            <h6>BDD</h6>
            <div>
              <p>
                Le <strong>BDD</strong> est donc une méthode de développement
                dérivée du <strong>Test-Driven Development</strong>, ou TDD, qui
                a émergé pour répondre{" "}
                <strong>aux difficultés rencontrées par cette dernière</strong>{" "}
                :
              </p>
              <ul>
                <li>
                  <strong>L’interprétation de l’expression du besoin</strong>{" "}
                  suite à l’utilisation d’un langage technique, non commun à
                  l’ensemble des intervenants du projet (métier, PO, QA et
                  développeur)
                </li>
                <li>
                  <strong>L’imprécision sur le périmètre de test</strong> entre
                  ce qui doit être ou ne pas être testé car celui-ci se base sur
                  la vérification de codes unitaires successifs et non d’un
                  comportement attendu d’un utilisateur
                </li>
              </ul>
              <p>
                La pratique de la BDD pourrait se résumer par 4 phases
                distinctes :
              </p>
              <img src="/img/agile/EtapesBDD-768x365.png" alt="EtapesBDD" />
              <p>
                Le langage Gherkin est un langage simple et naturel, contenant
                des phrases utilisées dans le quotidien, des phrases
                compréhensibles par tous
              </p>
              <img
                src="/img/agile/Traduction-768x487.png"
                alt="Traduction BDD"
              />
              <Highlight language="gherkin">
                {`Feature: Some terse yet descriptive text of what is desired
  Textual description of the business value of this feature
  Business rules that govern the scope of the feature
  Any additional information that will make the feature easier to understand
 
Scenario: Some determinable business situation
  Given some precondition
      And some other precondition
  When some action by the actor
      And some other action
      And yet another action
  Then some testable outcome is achieved
      And something else we can check happens too
 
Scenario: A different situation
   ...
`}
              </Highlight>
            </div>
          </article>
          <article id="ddd">
            <h6>DDD</h6>
            <div>
              <p>
                DDD, le Domain Driven Design « conception dirigée par le domaine
                » ou « conception pilotée par le métier ». C’est une approche en
                conception logicielle guidée par le métier.
              </p>
              <p>
                Le DDD est une manière de penser et de communiquer les problèmes
                et leurs solutions, entre les équipes techniques et
                fonctionnelles.
              </p>
              <p>
                La conception est conduite par un modèle. Ce modèle est en
                partie constitué d’un langage de communication commun aux
                experts fonctionnels et aux équipes de développement
                (l’Ubiquitous Language), en plaçant les besoins des utilisateurs
                finaux au cœur des préoccupations. Le projet se concentre autour
                de plusieurs objectifs :
              </p>
              <ul>
                <li>La satisfaction client</li>
                <li>La coopération entre les équipes</li>
                <li>La responsabilisation des équipes</li>
              </ul>
              <p>Les avantages d’avoir un Domain Model sont :</p>
              <ul>
                <li>
                  Créer un modèle commun et intelligible entre les équipes
                  fonctionnelles et les équipes techniques
                </li>
                <li>
                  Le modèle est modulaire, flexible et maintenable car il doit
                  refléter la conception fonctionnelle
                </li>
                <li>
                  Améliorer la testabilité et la réutilisation des objets
                  métiers.
                </li>
              </ul>
              <p>
                <b>Une architecture en couches</b>
              </p>
              <p>
                Avant de parler du domaine, il faut savoir qu’une application
                n’est pas composée que de code métier. Eric Evans découpe
                l’architecture logicielle d’une application en 4 couches :
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Couche interface utilisateur :</strong>
                    La partie de l’application qui permet d’afficher les rendus
                    visuels à l’utilisateur et lui permet d’interagir.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Couche application :</strong>
                    Une couche fine qui coordonne les interactions avec la
                    couche domaine. Elle peut par exemple vérifier les accès des
                    utilisateurs, sérialiser les données échangées et valider
                    leur format.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Couche domaine :</strong>
                    C’est le cœur de l’application qui représente le métier et
                    regroupe ses règles. C’est cette couche que nous allons
                    détailler dans la suite de l’article.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Couche infrastructure :</strong>
                    Cette couche sert principalement à fournir des outils pour
                    établir des liens entre les différentes couches.
                  </p>
                </li>
              </ul>
              <ul>
                <li>Conception pilotée par le domaine</li>
                <li>Domain Driven Design</li>
                <li>DDD Vite Fait</li>
                <li>
                  Domain Driven Design : des armes pour affronter la complexité
                </li>
                <li>DDD : la conception qui lie le fonctionnel et le code</li>
                <li>Domain Driven Design, DDD pour les intimes</li>
                <li>
                  Devoxx France 2016 : DDD, et si on reprenait tout depuis le
                  bon bout
                </li>
                <li>La philosophie du Domain Driven Design</li>
                <li>La conception pilotée par le domaine</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
