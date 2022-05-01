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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dry"
                  >
                    DRY
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#kiss"
                  >
                    KISS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#yagni"
                  >
                    YAGNI
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#occam-razor"
                  >
                    Occam's razor
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#boyscout"
                  >
                    Boyscout rule
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#consistency"
                  >
                    Focus on consistency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#soc"
                  >
                    Separation of Concerns
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lod"
                  >
                    Law of Demeter
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pi"
                  >
                    Persistence Ignorance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#bounded-context"
                  >
                    Bounded Context
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#modularity"
                  >
                    Modularity
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#explicit-dependencies"
                  >
                    Explicit Dependencies
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#coi"
                  >
                    Composition over Inheritance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#encapsulation"
                  >
                    Encapsulation
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
                <li>Separation of Concerns principle (SoC)</li>
                <li>Persistence Ignorance (PI)</li>
                <li>Occam's Razor</li>
                <li>Boyscout rule</li>
                <li>Focus on consistency</li>
                <li>Bounded Context</li>
                <li>Modularity</li>
                <li>Explicit Dependencies</li>
                <li>Composition over Inheritance (COI)</li>
                <li>Encapsulation</li>
              </ul>
            </div>
          </article>
          <article id="dry">
            <h6>DRY : Don't repeat yourself</h6>
            <p>
              Le principe DRY signifie "Don't repeat yourself" se traduit par «
              Ne vous répétez pas » vise à éviter la redondance de code au sein
              d’une application afin de faciliter la maintenance, le test, le
              débogage et les évolutions de cette dernière.
            </p>
          </article>
          <article id="kiss">
            <h6>KISS : Keep It Simple, Stupid</h6>
            <p>
              Le principe KISS signifie "Keep It Simple, Stupid" se traduite par
              « garde ça simple, idiot » est de faire le code le plus simple
              possible pour qu’il soit beaucoup plus facile à faire évoluer et à
              maintenir.
            </p>
          </article>
          <article id="yagni">
            <h6>YAGNI : You Aren't Gonna Need It</h6>
            <p>
              Le principe YAGINI signifie "You Aren't Gonna Need It" qui peut se
              traduite par « vous n'en aurez pas besoin » déclare que les
              programmeurs ne devraient pas ajouter de fonctionnalité à un
              logiciel tant que celle-ci n'est pas absolument nécessaire.
            </p>
          </article>
          <article id="occam-razor">
            <h6>Occam's razor :</h6>
            <p>
              Le rasoir d'Occam énonce que "Entities should not be multiplied
              without necessity". se traduit par « les entités ne doivent pas
              être multipliées au - delà de la nécessité ». Ce rasoir
              philosophique préconise que lorsqu'on est confronté à des
              hypothèses concurrentes sur la même prédiction, il faut
              sélectionner la solution avec le moins d'hypothèses, et que ce
              n'est pas censé être une façon de choisir entre des hypothèses qui
              font des prédictions différentes.
            </p>
          </article>
          <article id="boyscout">
            <h6>Boyscout rule :</h6>
            <p>
              La règle du boyscout: 'Always leave the code better than you found
              it.' : « Laissez toujours le code mieux que vous ne l'avez trouvé
              ». Si seulement tous les ingénieurs logiciels se comportaient
              comme bons citoyens, notre logiciel ne se détériorerait pas aussi
              implacablement.
            </p>
          </article>
          <article id="consistency">
            <h6>Mettre l'accent sur la cohérence :</h6>
            <p>
              Ce principe ne vous dit pas vraiment comment coder, il vous dit
              plutôt de vous en tenir à la façon dont vous le faites déjà. La
              cohérence signifie pratiquer les mêmes techniques et méthodes à
              travers le code. Cela permet d'identifier facilement les problèmes
              potentiels.
            </p>
          </article>
          <article id="soc">
            <h6>SoC : Separation of Concerns principle</h6>
            <p>
              La séparation des responsabilités est un principe qui sert à
              divisé l'application en fonction des types des tâches qu’il
              effectue.
              <br />
              De manière architecturale, les applications peuvent être créées
              logiquement pour respecter ce principe en séparant le comportement
              métier principal de la logique d’infrastructure et de l’interface
              utilisateur. Cette séparation permet de garantir que le modèle
              d’entreprise est facile à tester et peut évoluer sans être
              étroitement couplé à des détails d’implémentation de bas niveau.
              La séparation des responsabilités est un aspect fondamental de
              l’utilisation des couches dans les architectures d’applications.
            </p>
          </article>
          <article id="lod">
            <h6>LoD : Law of Demeter</h6>
            <div>
              <p>
                La <strong>loi de Déméter (LoD)</strong> ou le{" "}
                <strong>principe de moindre connaissance</strong> est une
                directive de conception pour le développement d'applications
                logicielles.
                <br />
                Le principe de la loi de Demeter réduit les dépendances et aide
                à créer des composants à couplage lâche pour la réutilisation du
                code, une maintenance plus facile et la testabilité
              </p>
              <ul>
                <li>
                  Chaque unité ne devrait avoir qu'une connaissance limitée des
                  autres unités : uniquement des unités « étroitement » liées à
                  l'unité actuelle.
                </li>
                <li>
                  Chaque unité ne doit parler qu'à ses amis ; ne parle pas aux
                  étrangers.
                </li>
                <li>Ne parlez qu'à vos amis immédiats.</li>
              </ul>
            </div>
          </article>
          <article id="pi">
            <h6>PI : Persistence Ignorance</h6>
            <p>
              Le principe de Persistence Ignorance (PI) soutient que les classes
              modélisant le domaine métier dans une application logicielle ne
              devraient pas être affectées par la façon dont elles pourraient
              être persistantes.
              <br />
              Il existe des degrés d'ignorance de la persistance, le degré le
              plus élevé étant décrit comme des objets POCO (Plain Old CLR) dans
              .NET
            </p>
          </article>
          <article id="bounded-context">
            <h6>Bounded Context :</h6>
            <p>
              Les contextes délimités sont un modèle essentiel dans la
              conception pilotée par le domaine. Elles offrent un moyen de
              maîtriser la complexité dans les applications ou les organisations
              de grande ampleur en la fractionnant en modules conceptuels
              distincts.
              <br />
              Chaque module conceptuel représente ensuite un contexte qui est
              séparé des autres contextes (par conséquent, délimité) et peut
              évoluer indépendamment.
            </p>
          </article>
          <article id="modularity">
            <h6>Modularity :</h6>
            <p>
              La modularité est le degré auquel les composants d' un système
              peuvent être séparés et recombinés, souvent avec l'avantage de la
              flexibilité et de la variété d'utilisation.
            </p>
          </article>
          <article id="explicit-dependencies">
            <h6>Explicit Dependencies</h6>
            <p>
              Les méthodes et les classes doivent demander explicitement tous
              les objets de collaboration dont ils ont besoin pour fonctionner
              correctement.
              <br />
              En suivant le principe des dépendances explicites, vos classes et
              vos méthodes sont honnêtes avec leurs clients quant à ce dont
              elles ont besoin pour fonctionner.
            </p>
          </article>
          <article id="coi">
            <h6>COI : Composition over Inheritance</h6>
            <p>
              La composition sur l'héritage (ou principe de réutilisation
              composite ) dans la programmation orientée objet (OOP) est le
              principe selon lequel les classes doivent obtenir un comportement
              polymorphe et une réutilisation du code par leur composition (en
              contenant des instances d'autres classes qui implémentent la
              fonctionnalité souhaitée) plutôt que l' héritage d'un classe de
              base ou parent.
            </p>
          </article>
          <article id="encapsulation">
            <h6>Encapsulation</h6>
            <p>
              On doit utiliser l’encapsulation pour isoler les unes des autres
              les différentes parties d’une application. Il décrit l'idée de
              regrouper des données et des méthodes qui fonctionnent sur ces
              données au sein d'une unité.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
