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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#bdd"
                  >
                    TDD vs BDD
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
                <strong>Test-Driven Development (TDD)</strong> est une
                méthodologie de développement logiciel qui consiste à écrire
                d'abord des tests automatisés avant d'implémenter le code. Cette
                approche favorise la qualité, la maintenabilité et la robustesse
                du logiciel.
              </p>
              <div className="d-flex">
                <div>
                  <p>
                    La démarche à suivre pour mettre en place cette l’approche
                    TDD est décomposée en trois phases appelé <b>RGR</b>
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
                      <b>R (Refractor) </b>: remaniement du code afin d'en
                      améliorer la qualité
                    </li>
                  </ul>
                </div>
                <img
                  style={{ height: "160px" }}
                  src="/img/agile/RGR.png"
                  alt="RGR"
                />
              </div>
              <div className="d-flex">
                <div>
                  <h6>Étapes du TDD :</h6>
                  <ol>
                    <li>
                      <p>
                        <strong>Écrire un test</strong> :
                        <ul>
                          <li>
                            Définissez un test unitaire pour une fonctionnalité
                            ou un comportement attendu.
                          </li>
                          <li>
                            Ce test échoue initialement car le code n'est pas
                            encore implémenté.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Écrire le code minimal</strong> :
                        <ul>
                          <li>
                            Implémentez juste assez de code pour que le test
                            réussisse.
                          </li>
                          <li>
                            L'objectif est de respecter la spécification du
                            test.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Refactoriser le code</strong> :
                        <ul>
                          <li>
                            Améliorez la structure ou l'efficacité du code tout
                            en maintenant le succès des tests.
                          </li>
                          <li>
                            Assurez-vous que le code reste propre et
                            maintenable.
                          </li>
                        </ul>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Répéter</strong> :
                        <ul>
                          <li>
                            Ajoutez de nouveaux tests, implémentez les
                            fonctionnalités correspondantes, et refactorisez.
                          </li>
                        </ul>
                      </p>
                    </li>
                  </ol>
                </div>
                <img
                  src="/img/agile/tdd.png"
                  style={{ height: "250px" }}
                  alt="tdd"
                />
              </div>
            </div>
          </article>
          <article id="bdd">
            <h6>BDD</h6>
            <div>
              <p>
                <strong>Behavior-Driven Development (BDD)</strong> est une
                méthodologie de développement logiciel qui se concentre sur la
                collaboration entre développeurs, testeurs et parties prenantes
                non techniques pour définir le comportement attendu d'une
                application à travers des scénarios lisibles et compréhensibles
                par tous.
              </p>
              <h6>
                <strong>Principes clés :</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Focus sur le comportement</strong> :
                  </p>
                  <ul>
                    <li>
                      Le développement est guidé par la manière dont le logiciel
                      doit se comporter du point de vue de l'utilisateur.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Langage commun</strong> :
                  </p>
                  <ul>
                    <li>
                      Utilisation de formats lisibles comme Gherkin pour décrire
                      les fonctionnalités en langage naturel.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Collaboration accrue</strong> :
                  </p>
                  <ul>
                    <li>
                      Implique toutes les parties prenantes (développeurs,
                      testeurs, clients) dans la définition des exigences.
                    </li>
                  </ul>
                </li>
              </ol>
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
          <article id="tdd-bdd">
            <h6>TDD vs BDD</h6>
            <div>
              <ul>
                <li>
                  <strong>TDD</strong> se concentre sur la qualité du code en
                  écrivant des tests unitaires techniques avant le
                  développement.
                </li>
                <li>
                  <strong>BDD</strong> se concentre sur le comportement attendu
                  du logiciel en utilisant un langage lisible par tous pour
                  décrire les fonctionnalités métier.
                </li>
              </ul>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>TDD (Test-Driven Development)</strong>
                    </th>
                    <th>
                      <strong>BDD (Behavior-Driven Development)</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Objectif principal</strong>
                    </td>
                    <td>
                      Vérifier que le code fonctionne correctement en écrivant
                      des tests avant le développement.
                    </td>
                    <td>
                      Définir et vérifier le comportement attendu du logiciel du
                      point de vue de l'utilisateur.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cible</strong>
                    </td>
                    <td>
                      Orienté vers les développeurs pour garantir la qualité du
                      code.
                    </td>
                    <td>
                      Inclut les parties prenantes (métier, testeurs,
                      développeurs) pour aligner les exigences.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Langage utilisé</strong>
                    </td>
                    <td>
                      Langage technique (exemple : frameworks de tests unitaires
                      comme xUnit, NUnit).
                    </td>
                    <td>
                      Langage lisible par tous (exemple : Gherkin, utilisant
                      Given-When-Then).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Type de test</strong>
                    </td>
                    <td>Principalement des tests unitaires.</td>
                    <td>
                      Tests d'acceptation fonctionnelle décrivant des scénarios
                      utilisateur.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Processus</strong>
                    </td>
                    <td>
                      - Écrire un test. <br /> - Écrire le code pour faire
                      passer le test. <br /> - Refactoriser.
                    </td>
                    <td>
                      - Définir des scénarios décrivant les comportements
                      métier. <br /> - Implémenter et valider les comportements.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Outils courants</strong>
                    </td>
                    <td>xUnit, NUnit, MSTest (en .NET).</td>
                    <td>SpecFlow, Cucumber, Behave.</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Exemple d'écriture</strong>
                    </td>
                    <td>
                      Code pur dans le test unitaire (Assert, Act, Arrange).
                    </td>
                    <td>
                      Scénarios en langage naturel utilisant Given-When-Then.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Collaboration</strong>
                    </td>
                    <td>
                      Moins de collaboration avec les parties prenantes non
                      techniques.
                    </td>
                    <td>
                      Favorise la collaboration avec toutes les parties
                      prenantes, y compris non techniques.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Focus</strong>
                    </td>
                    <td>Centré sur les implémentations techniques.</td>
                    <td>
                      Centré sur le comportement attendu et les besoins métier.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
