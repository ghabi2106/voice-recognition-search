import React from "react";
import { Link } from "react-router-dom";

export default function Cleancode() {
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
                    href="#clean-code"
                  >
                    clean code
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
          <h3>Clean code</h3>
          <article id="clean-code">
            <h6>Coding Standards and Principles</h6>
            <div>
              <p>
                "Le code propre semble avoir été écrit par quelqu'un qui s'en
                soucie.". Ie but du code propre est d'encourager les
                programmeurs à s'en soucier et à être fiers de leur travail.
                Rien ne vous fera travailler plus vite que de garder votre
                espace de travail propre.
              </p>
              <ul>
                <li>
                  Le besoin de normes, de principes et de méthodologies de
                  codage
                </li>
                <li>Conventions et méthodes de nommage</li>
                <li>Commentaires et mise en forme</li>
                <li>Modularité</li>
                <li>KISS "Keep It Simple, Stupid"</li>
                <li>YAGNI "You Aren't Gonna Need It"</li>
                <li>DRY "Don't repeat yourself"</li>
                <li>SOLID</li>
                <li>Separation of Concerns (SoC)</li>
                <li>Persistence Ignorance (PI)</li>
                <li>Occam's Razor</li>
                <li>Bounded Context</li>
                <li>Dépendances explicites</li>
                <li>Encapsulation</li>
              </ul>
              <dl>
                <dt>DRY :</dt>
                <dd>
                  Le principe DRY signifie "Don't repeat yourself" se traduit
                  par « Ne vous répétez pas » vise à éviter la redondance de
                  code au sein d’une application afin de faciliter la
                  maintenance, le test, le débogage et les évolutions de cette
                  dernière.
                </dd>
                <dt>KISS :</dt>
                <dd>
                  Le principe KISS signifie "Keep It Simple, Stupid" se traduite
                  par « garde ça simple, idiot » est de faire le code le plus
                  simple possible pour qu’il soit beaucoup plus facile à faire
                  évoluer et à maintenir.
                </dd>
                <dt>YAGNI :</dt>
                <dd>
                  Le principe YAGINI signifie "You Aren't Gonna Need It" qui
                  peut se traduite par « vous n'en aurez pas besoin » déclare
                  que les programmeurs ne devraient pas ajouter de
                  fonctionnalité à un logiciel tant que celle-ci n'est pas
                  absolument nécessaire..
                </dd>
                <dt>Occam's razor :</dt>
                <dd>
                  Le rasoir d'Occam énonce que "Entities should not be
                  multiplied without necessity". se traduit par « les entités ne
                  doivent pas être multipliées au - delà de la nécessité ». Ce
                  rasoir philosophique préconise que lorsqu'on est confronté à
                  des hypothèses concurrentes sur la même prédiction, il faut
                  sélectionner la solution avec le moins d'hypothèses, et que ce
                  n'est pas censé être une façon de choisir entre des hypothèses
                  qui font des prédictions différentes.
                </dd>
                <dt>Separation of Concerns principle (SoC) :</dt>
                <dd>
                  La séparation des responsabilités est un principe qui sert à
                  divisé l'application en fonction des types des tâches qu’il
                  effectue.
                  <br />
                  De manière architecturale, les applications peuvent être
                  créées logiquement pour respecter ce principe en séparant le
                  comportement métier principal de la logique d’infrastructure
                  et de l’interface utilisateur. Cette séparation permet de
                  garantir que le modèle d’entreprise est facile à tester et
                  peut évoluer sans être étroitement couplé à des détails
                  d’implémentation de bas niveau. La séparation des
                  responsabilités est un aspect fondamental de l’utilisation des
                  couches dans les architectures d’applications.
                </dd>
                <dt>Persistence Ignorance (PI) :</dt>
                <dd>
                  Le principe de Persistence Ignorance (PI) soutient que les
                  classes modélisant le domaine métier dans une application
                  logicielle ne devraient pas être affectées par la façon dont
                  elles pourraient être persistantes.
                  <br />
                  Il existe des degrés d'ignorance de la persistance, le degré
                  le plus élevé étant décrit comme des objets POCO (Plain Old
                  CLR) dans .NET
                </dd>
                <dt>Bounded Context :</dt>
                <dd>
                  Les contextes délimités sont un modèle essentiel dans la
                  conception pilotée par le domaine. Elles offrent un moyen de
                  maîtriser la complexité dans les applications ou les
                  organisations de grande ampleur en la fractionnant en modules
                  conceptuels distincts.
                  <br />
                  Chaque module conceptuel représente ensuite un contexte qui
                  est séparé des autres contextes (par conséquent, délimité) et
                  peut évoluer indépendamment.
                </dd>
                <dt>Modularity :</dt>
                <dd>
                  La modularité est le degré auquel les composants d' un système
                  peuvent être séparés et recombinés, souvent avec l'avantage de
                  la flexibilité et de la variété d'utilisation.
                </dd>
                <dt>Dépendances explicites</dt>
                <dd>
                  Les méthodes et les classes doivent demander explicitement
                  tous les objets de collaboration dont ils ont besoin pour
                  fonctionner correctement.
                  <br />
                  En suivant le principe des dépendances explicites, vos classes
                  et vos méthodes sont honnêtes avec leurs clients quant à ce
                  dont elles ont besoin pour fonctionner.
                </dd>
                <dt>Encapsulation</dt>
                <dd>
                  On doit utiliser l’encapsulation pour isoler les unes des
                  autres les différentes parties d’une application. Il décrit
                  l'idée de regrouper des données et des méthodes qui
                  fonctionnent sur ces données au sein d'une unité.
                </dd>
              </dl>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
