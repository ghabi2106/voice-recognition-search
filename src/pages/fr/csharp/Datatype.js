import React from "react";
import { Link } from "react-router-dom";

export default function Datatype() {
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
                    href="#anonyme"
                  >
                    Anonymous Type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dynamic"
                  >
                    Dynamic Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#nullable"
                  >
                    Nullable Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#discard"
                  >
                    Discard Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#extension"
                  >
                    Extension Method
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
          <h3>Data Types</h3>
          <article id="anonymous">
            <h6>Type anonyme</h6>
            <div>
              <p>
                Un type anonyme est un type (classe) sans nom qui ne peut
                contenir que des propriétés publiques en lecture seule.
              </p>
              <img src="/img/dotnet/type-anonymous.PNG" alt="type anonymous" />
            </div>
          </article>
          <article id="dynamic">
            <h6>Types dynamiques</h6>
            <div>
              <p>
                Un dynamictype échappe à la vérification de type au moment de la
                compilation ; au lieu de cela, il résout le type au moment de
                l'exécution.
              </p>
              <ul>
                <li>
                  Les types dynamiques changent de type au moment de l'exécution
                  en fonction de la valeur attribuée.
                </li>
                <li>
                  Les variables de type dynamique sont converties implicitement
                  en d'autres types.
                </li>
              </ul>
              <img src="/img/dotnet/type-dynamic.PNG" alt="type dynamic" />
            </div>
          </article>
          <article id="nullable">
            <h6>Types Nullables</h6>
            <div>
              <p>
                Comme on le sait, un type valeur ne peut pas se voir attribuer
                une valeur nulle. Par exemple, int i = null vous donnera une
                erreur de compilation.
              </p>
              <img src="/img/dotnet/type-nullable.PNG" alt="type nullable" />
            </div>
          </article>
          <article id="discard">
            <h6>Discards</h6>
            <div>
              <p>
                Discards sont des variables d’espace réservé qui sont
                intentionnellement inutilisées dans le code de l’application.
                Les éléments ignorés sont équivalents aux variables non
                affectées ; ils n’ont pas de valeur. Vous pouvez ignorer le
                résultat d’une expression, d’un ou de plusieurs membres d’une
                expression de tuple, ou de la cible d’une expression de critères
                spéciaux.
              </p>
              <u>
                <li>Déconstruction de tuple et d’objet</li>
                <li>Utilisation des critères spéciaux(matching) avec switch</li>
              </u>
            </div>
          </article>
          <article id="extension">
            <h6>Méthode d'extension</h6>
            <div>
              <p>
                Les méthodes d'extension vous permettent d'injecter des méthodes
                supplémentaires sans modifier, dériver ou recompiler la classe,
                la structure ou l'interface d'origine.
              </p>
              <p>
                Les méthodes d'extension ont un symbole spécial dans
                l'intellisense du studio visuel, de sorte que vous pouvez
                facilement différencier les méthodes de classe et les méthodes
                d'extension.
              </p>
              <img src="/img/dotnet/extension-method.png" alt="extension method" />
              <p>
                Une méthode d'extension est en fait un type spécial de méthode
                statique définie dans une classe statique.
              </p>
              <img
                src="/img/dotnet/extension-method-definition.PNG"
                alt="extension method definition"
              />
              <p>
                LINQ repose sur des méthodes d'extension qui fonctionnent sur
                les types IEnumerable et IQeryable.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
