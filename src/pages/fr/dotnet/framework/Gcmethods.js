import React from "react";
import { Link } from "react-router-dom";

export default function Gcmethods() {
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
                    href="#dispose-finalize"
                  >
                    dispose() vs finalize()
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#metods"
                  >
                    GC Methods and properties
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
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
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
          <h3>GC Methods</h3>
          <article id="dispose-finalize">
            <h6>dispose() vs finalize()</h6>
            <div>
              <p>
                Les méthodes dispose() et finalize() sont les méthodes de C# qui
                sont invoquées pour libérer les ressources non managées détenues
                par un objet. La méthode dispose() est définie dans l'interface
                IDisposable alors que la méthode finalize() est définie dans
                l'objet de classe. La principale différence entre dispose() et
                finalize() est que la méthode dispose () doit être explicitement
                invoquée par l'utilisateur alors que la méthode finalize() est
                invoquée par le ramasse-miettes, juste avant que l'objet ne soit
                détruit.
              </p>
              <ol>
                <li>
                  La méthode dispose() est définie dans une interface{" "}
                  <strong>IDisposable</strong> . Par contre, la méthode
                  finalize() est définie dans la classe <strong>object</strong>{" "}
                  .
                </li>
                <li>
                  La méthode dispose() doit être invoquée manuellement dans le
                  code par un programmeur, tandis que la méthode finalize est
                  automatiquement invoquée par le ramasse-miettes avant qu'il ne
                  détruise l'objet.
                </li>
                <li>
                  La méthode dispose peut être invoquée à tout moment, tandis
                  que la méthode finalize est invoquée par le ramasse-miettes
                  lorsqu'il constate que cet objet n'a pas été référencé depuis
                  longtemps.
                </li>
                <li>
                  La méthode dispose() est implémentée dans une classe après
                  avoir implémenté l'interface IDisposable. La méthode
                  finalize() doit être implémentée uniquement pour les{" "}
                  <strong>ressources non managées</strong> car les ressources
                  managées sont automatiquement libérées par le ramasse-miettes.
                </li>
                <li>
                  Le spécificateur d'accès de la méthode dispose() est public
                  tel qu'il est défini dans l'interface IDisposable et il serait
                  implémenté par la classe qui implémente cette interface, il
                  devrait donc être public. D'un autre côté, la méthode
                  finalize() a un spécificateur d'accès protégé afin qu'elle ne
                  soit accessible à aucun membre en dehors de la classe.
                </li>
                <li>
                  La méthode dispose() est rapide et libère l'objet
                  instantanément, elle n'affecte donc pas le coût des
                  performances. La méthode finalize() est plus lente et ne
                  libère pas instantanément les ressources détenues par l'objet.
                </li>
              </ol>
            </div>
          </article>
          <article id="metods">
            <h6>GC Methods and properties</h6>
            <div>
              <table className="table table-bordered">
                <caption>Propriétés</caption>
                <tbody>
                  <tr>
                    <td>
                      <code>MaxGeneration</code>
                    </td>
                    <td>
                      Obtient le nombre maximal de générations actuellement pris
                      en charge par le système.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <caption>Méthodes</caption>
                <tbody>
                  <tr>
                    <td>
                      <code>GetGeneration(Object)</code>
                    </td>
                    <td>
                      Retourne le numéro de la génération actuelle de l'objet
                      spécifié.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>GetTotalMemory(Boolean)</code>
                    </td>
                    <td>
                      Récupère le nombre d'octets qu'il est actuellement prévu
                      d'allouer. Un paramètre indique si cette méthode peut
                      attendre une courte période de temps avant de retourner
                      une réponse, pour permettre au système d'effectuer un
                      garbage collection et de finaliser les objets.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>CollectionCount(Int32)</code>
                    </td>
                    <td>
                      Retourne le nombre de fois que le garbage collection s’est
                      produit pour la génération d’objets spécifiée.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Collect()</code>
                    </td>
                    <td>
                      Force un garbage collection immédiat sur toutes les
                      générations.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Collect(Int32)</code>
                    </td>
                    <td>
                      Force un garbage collection immédiat de la génération 0
                      jusqu'à une génération spécifiée.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>SuppressFinalize(Object)</code>
                    </td>
                    <td>
                      Demande que le Common Language Runtime n'appelle pas le
                      finaliseur pour l'objet spécifié.
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
