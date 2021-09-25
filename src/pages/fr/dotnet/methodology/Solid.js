import React from "react";
import { Link } from "react-router-dom";

export default function Solid() {
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
                    href="#solid"
                  >
                    SOLID principle
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#s"
                  >
                    Single-responsibility
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#o"
                  >
                    Open-closed
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#l"
                  >
                    Liskov substitution
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#i"
                  >
                    Interface segregation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#d"
                  >
                    Dependency inversion
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
          <h3>S.O.L.I.D. Principles</h3>
          <article id="solid">
            <h6>SOLID principles</h6>
            <div>
              <p>
                SOLID est un{" "}
                <strong>
                  dispositif mnémotechnique pour 5 principes de conception
                </strong>{" "}
                de programmes orientés objet (POO) qui se traduisent par un code
                lisible, adaptable et évolutif. SOLID peut être appliqué à
                n'importe quel programme de POO.
              </p>
              <p>Les 5 principes de SOLID sont :</p>
              <ul>
                <li>
                  <strong>S</strong>ingle-responsibility principle
                </li>
                <li>
                  <strong>O</strong>pen-closed principle
                </li>
                <li>
                  <strong>L</strong>iskov substitution principle
                </li>
                <li>
                  <strong>I</strong>nterface segregation principle
                </li>
                <li>
                  <strong>D</strong>ependency inversion principle
                </li>
              </ul>
            </div>
          </article>
          <article id="s">
            <h6>
              <strong>S</strong>: Single-responsibility principle
            </h6>
            <p class="answer">
              Dans la programmation orientée objet, la{" "}
              <strong>responsabilité unique (SRP)</strong> garantit que chaque
              module ou classe doit être responsable d'une fonctionnalité unique
              prise en charge par le système logiciel. En d'autres termes,
              chaque classe devrait avoir une seule et unique raison de la
              changer. <br />
              Par exemple, la classe dans ASP.NET MVC{" "}
              <code>HomeController</code> devrait être responsable de la
              fonctionnalité de la page d'accueil du système logiciel.
            </p>
          </article>
          <article id="o">
            <h6>
              <strong>O</strong>: Open-closed principle
            </h6>
            <p>
              <strong>Open Close Principle (OCP)</strong> stipule ou garantit
              qu'une classe, un composant ou une entité doit être ouvert pour
              extension mais fermé pour modification. En détail, nous pouvons
              étendre n'importe quelle classe via Interface, Héritage ou
              Composition chaque fois que cela est nécessaire au lieu d'ouvrir
              une classe et de modifier son code.
              <br />
              Par exemple, supposons que vous ayez implémenté une fonctionnalité
              pour calculer l'aire du rectangle et qu'après un certain temps,
              vous deviez calculer l'aire du carré, alors dans ce cas, vous ne
              devriez pas modifier votre code de classe d'origine pour ajouter
              du code supplémentaire pour le carré. Au lieu de cela, vous devez
              d'abord créer une classe de base et maintenant vous devez étendre
              cette classe de base par votre classe carrée.
            </p>
          </article>
          <article id="l">
            <h6>
              <strong>L</strong>: Liskov substitution principle
            </h6>
            <p>
              <strong>Liskov Substitution Principle (LSP)</strong> stipule que
              les objets d'un programme peuvent être remplacés par les instances
              de leurs sous-types sans modifier l'exactitude d'un programme.{" "}
              <br />
              En d'autres termes, si A est un sous-type de B, alors les
              instances de B peuvent être remplacées par les instances de A sans
              altérer l'exactitude du programme.
            </p>
          </article>
          <article id="i">
            <h6>
              <strong>I</strong>: Interface segregation principle
            </h6>
            <p>
              <strong>Interface Segregation Principle (ISP)</strong> indique
              qu'il utilise de nombreuses interfaces spécifiques au client au
              lieu d'une interface à usage général.
              <br />
              En d'autres termes, aucun client ne devrait être obligé
              d'implémenter d'autres méthodes dont il n'a pas besoin. Cela
              signifie qu'il est préférable de créer une interface distincte et
              de permettre à vos classes d'implémenter plusieurs interfaces.
            </p>
          </article>
          <article id="d">
            <h6>
              <strong>D</strong>: Dependency inversion principle
            </h6>
            <div>
              <p>
                Le <strong>principe d'inversion de dépendance</strong> (DIP)
                comporte deux parties :
              </p>
              <ol>
                <li>
                  Les modules de haut niveau ne doivent pas dépendre des modules
                  de bas niveau. Au lieu de cela, les deux devraient dépendre
                  d'abstractions (interfaces)
                </li>
                <li>
                  Les abstractions ne doivent pas dépendre des détails. Les
                  détails (comme les implémentations concrètes) devraient
                  dépendre des abstractions.
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
