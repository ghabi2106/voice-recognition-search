import React from "react";
import { Link } from "react-router-dom";

export default function Delegate() {
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
                    href="#delegate"
                  >
                    Delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#func"
                  >
                    Func delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#action"
                  >
                    Action delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#predicate"
                  >
                    Predicate delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#events"
                  >
                    Events
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
          <h3>Délégués</h3>
          <article id="delegate">
            <h6>Delegate</h6>
            <div>
              <p>
                Les délégués sont similaires aux pointeurs vers des fonctions,
                en C ou C++. Un délégué est une variable de type référence qui
                contient la référence à une méthode. La référence peut être
                modifiée au moment de l'exécution.
              </p>
              <img src="/img/dotnet/delegate-init.PNG" alt="delegate init" />
              <img src="/img/dotnet/delegate-invoke.PNG" alt="delegate invoke" />
            </div>
          </article>
          <article id="func">
            <h6>Func Delegate</h6>
            <div>
              <p>
                <code>Func</code> est un délégué générique. Il a zéro ou
                plusieurs paramètres d'entrée et un paramètre de sortie.
              </p>
              <ul>
                <li>Le type délégué Func doit retourner une valeur.</li>
                <li>
                  Le type de délégué Func peut avoir de zéro à 16 paramètres
                  d'entrée.
                </li>
                <li>
                  Le délégué Func n'autorise pas les paramètres ref et out.
                </li>
              </ul>
              <img src="/img/dotnet/delegate-func.png" alt="delegate func" />
              <img
                src="/img/dotnet/delegate-func-program.PNG"
                alt="delegate func program"
              />
            </div>
          </article>
          <article id="action">
            <h6>Action Delegate</h6>
            <div>
              <p>
                Un délégué de type Action est le même que le délégué Func, sauf
                que le délégué Action ne renvoie pas de valeur. En d'autres
                termes, un délégué Action peut être utilisé avec une méthode qui
                a un type de retour void.
              </p>
              <img
                src="/img/dotnet/delegate-action-init.PNG"
                alt="delegate action init"
              />
            </div>
          </article>
          <article id="predicate">
            <h6>Predicate Delegate</h6>
            <div>
              <p>
                Le délégué de prédicat prend un paramètre d'entrée et un type de
                retour booléen.
              </p>
              <img src="/img/dotnet/delegate-predicate.PNG" alt="delegate predicate" />
            </div>
          </article>
          <article id="events">
            <h6>Events</h6>
            <div>
              <p>
                Un événement est une notification envoyée par un objet pour
                signaler l'occurrence d'une action. Les événements dans .NET
                suivent le modèle de conception d'observateur . La classe qui
                déclenche des événements est appelée Publisher et la classe qui
                reçoit la notification est appelée Subscriber . Il peut y avoir
                plusieurs abonnés à un même événement.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
