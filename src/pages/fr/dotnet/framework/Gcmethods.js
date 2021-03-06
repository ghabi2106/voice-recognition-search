import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

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
                    href="#dispose"
                  >
                    dispose()
                  </a>
                </li>
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
          <article id="dispose">
            <h6>Dispose</h6>
            <div>
              <p>
                La m??thode <code>Dispose()</code> lib??re les resources non
                manag??es. Elle est d??finie dans une interface IDisposable
              </p>
              <Highlight language="csharp">
                {`//preceeding code
using (con = new Connection()) {
    con.Open()
    //do whatever
}
//following code`}
              </Highlight>
              <p>
                <code>using</code> statement est ??quivalete ??:
              </p>
              <Highlight language="csharp">
                {`var con = new Connection();
try {
    con.Open()
    //do whatever
} finally {
    if (con != null) con.Dispose();
}`}
              </Highlight>
            </div>
          </article>
          <article id="dispose-finalize">
            <h6>dispose() vs finalize()</h6>
            <div>
              <p>
                Les m??thodes dispose() et finalize() sont les m??thodes de C# qui
                sont invoqu??es pour lib??rer les ressources non manag??es d??tenues
                par un objet. La m??thode dispose() est d??finie dans l'interface
                IDisposable alors que la m??thode finalize() est d??finie dans
                l'objet de classe. La principale diff??rence entre dispose() et
                finalize() est que la m??thode dispose () doit ??tre explicitement
                invoqu??e par l'utilisateur alors que la m??thode finalize() est
                invoqu??e par le ramasse-miettes, juste avant que l'objet ne soit
                d??truit.
              </p>
              <ol>
                <li>
                  La m??thode dispose() est d??finie dans une interface{" "}
                  <strong>IDisposable</strong> . Par contre, la m??thode
                  finalize() est d??finie dans la classe <strong>object</strong>{" "}
                  .
                </li>
                <li>
                  La m??thode dispose() doit ??tre invoqu??e manuellement dans le
                  code par un programmeur, tandis que la m??thode finalize est
                  automatiquement invoqu??e par le ramasse-miettes avant qu'il ne
                  d??truise l'objet.
                </li>
                <li>
                  La m??thode dispose peut ??tre invoqu??e ?? tout moment, tandis
                  que la m??thode finalize est invoqu??e par le ramasse-miettes
                  lorsqu'il constate que cet objet n'a pas ??t?? r??f??renc?? depuis
                  longtemps.
                </li>
                <li>
                  La m??thode dispose() est impl??ment??e dans une classe apr??s
                  avoir impl??ment?? l'interface IDisposable. La m??thode
                  finalize() doit ??tre impl??ment??e uniquement pour les{" "}
                  <strong>ressources non manag??es</strong> car les ressources
                  manag??es sont automatiquement lib??r??es par le ramasse-miettes.
                </li>
                <li>
                  Le sp??cificateur d'acc??s de la m??thode dispose() est public
                  tel qu'il est d??fini dans l'interface IDisposable et il serait
                  impl??ment?? par la classe qui impl??mente cette interface, il
                  devrait donc ??tre public. D'un autre c??t??, la m??thode
                  finalize() a un sp??cificateur d'acc??s prot??g?? afin qu'elle ne
                  soit accessible ?? aucun membre en dehors de la classe.
                </li>
                <li>
                  La m??thode dispose() est rapide et lib??re l'objet
                  instantan??ment, elle n'affecte donc pas le co??t des
                  performances. La m??thode finalize() est plus lente et ne
                  lib??re pas instantan??ment les ressources d??tenues par l'objet.
                </li>
              </ol>
            </div>
          </article>
          <article id="metods">
            <h6>GC Methods and properties</h6>
            <div>
              <table className="table table-bordered">
                <caption>Propri??t??s</caption>
                <tbody>
                  <tr>
                    <td>
                      <code>MaxGeneration</code>
                    </td>
                    <td>
                      Obtient le nombre maximal de g??n??rations actuellement pris
                      en charge par le syst??me.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table className="table table-bordered">
                <caption>M??thodes</caption>
                <tbody>
                  <tr>
                    <td>
                      <code>GetGeneration(Object)</code>
                    </td>
                    <td>
                      Retourne le num??ro de la g??n??ration actuelle de l'objet
                      sp??cifi??.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>GetTotalMemory(Boolean)</code>
                    </td>
                    <td>
                      R??cup??re le nombre d'octets qu'il est actuellement pr??vu
                      d'allouer. Un param??tre indique si cette m??thode peut
                      attendre une courte p??riode de temps avant de retourner
                      une r??ponse, pour permettre au syst??me d'effectuer un
                      garbage collection et de finaliser les objets.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>CollectionCount(Int32)</code>
                    </td>
                    <td>
                      Retourne le nombre de fois que le garbage collection s???est
                      produit pour la g??n??ration d???objets sp??cifi??e.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Collect()</code>
                    </td>
                    <td>
                      Force un garbage collection imm??diat sur toutes les
                      g??n??rations.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>Collect(Int32)</code>
                    </td>
                    <td>
                      Force un garbage collection imm??diat de la g??n??ration 0
                      jusqu'?? une g??n??ration sp??cifi??e.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>SuppressFinalize(Object)</code>
                    </td>
                    <td>
                      Demande que le Common Language Runtime n'appelle pas le
                      finaliseur pour l'objet sp??cifi??.
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
