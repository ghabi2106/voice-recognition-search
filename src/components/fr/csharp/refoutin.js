import React from "react";
import { Link } from "react-router-dom";

export default function Refoutin() {
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
                    href="#introduction"
                  >
                    Les modificateurs in, ref et out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#out"
                  >
                    out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ref-out"
                  >
                    ref vs out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in"
                  >
                    in
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#limit"
                  >
                    Limit
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
          <h3>Ref et Out</h3>
          <article id="introduction">
            <h6>Les modificateurs in, ref et out</h6>
            <div>
              <ul>
                <li>
                  <code>ref</code> est utilisé pour indiquer que le paramètre
                  passé <b>peut</b> être modifié par la méthode.
                </li>
                <li>
                  <code>in</code> est utilisé pour indiquer que le paramètre
                  passé <b>ne peut pas</b> être modifié par la méthode
                </li>
                <li>
                  <code>out</code> est utilisé pour indiquer que le paramètre
                  passé <b>doit</b> être modifié par la méthode.
                </li>
              </ul>
              <p>
                Les deux <code>ref</code> et <code>in</code> nécessitent que le
                paramètre ait été initialisé avant d'être passé à une méthode.
                Le <code>out</code> modificateur ne l'exige pas et n'est
                généralement pas initialisé avant d'être utilisé dans une
                méthode.
              </p>
            </div>
          </article>
          <article id="out">
            <h6>out</h6>
            <p>
              Le <code>out</code> est utilisé pour passer les arguments aux
              méthodes en tant que type de référence. Il est généralement
              utilisé lorsqu'une méthode renvoie plusieurs valeurs.
            </p>
          </article>
          <article id="ref-out">
            <h6>ref vs out</h6>
            <table>
              <tbody>
                <tr>
                  <th>ref</th>
                  <th>out</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    Il faut que les paramètres s'initialisent avant de passer à
                    ref.
                  </td>
                  <td>
                    Il n'est pas nécessaire d'initialiser les paramètres avant
                    qu'il ne soit transmis.
                  </td>
                </tr>
                <tr>
                  <td>
                    Il n'est pas nécessaire d'initialiser la valeur d'un
                    paramètre avant de revenir à la méthode appelante.
                  </td>
                  <td>
                    Il est nécessaire d'initialiser la valeur d'un paramètre
                    avant de revenir à la méthode appelante.
                  </td>
                </tr>
                <tr>
                  <td>
                    Le passage de la valeur via le paramètre ref est utile
                    lorsque la méthode appelée doit également modifier la valeur
                    du paramètre passé.
                  </td>
                  <td>
                    La déclaration du paramètre via le paramètre out est utile
                    lorsqu'une méthode renvoie plusieurs valeurs.
                  </td>
                </tr>
                <tr>
                  <td>
                    Lorsque le mot-clé ref est utilisé, les données peuvent
                    passer dans les deux sens.
                  </td>
                  <td>
                    Lorsque le mot-clé out est utilisé, les données ne sont
                    transmises qu'en unidirectionnel.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="in">
            <h6>in</h6>
            <div>
              <p>
                <code>in</code> est à utiliser avec une structure pour améliorer
                les performances en déclarant que la valeur ne sera pas
                modifiée. Lors de l'utilisation avec des types de référence,
                cela vous empêche uniquement d'attribuer une nouvelle référence.
              </p>
              <img src="/img/modifier-in.PNG" alt="modifier in" />
            </div>
          </article>
          <article id="limit">
            <h6>Limitations</h6>
            <ul>
              <li>
                Il est important de noter que <code>in</code>, <code>out</code>,
                et <code>ref</code> ne peuvent pas être utilisés dans les
                méthodes avec le <code>async</code> modificateur. Vous pouvez
                cependant les utiliser dans des méthodes synchrones qui
                renvoient une tâche.
              </li>
              <li>
                On ne peut pas les utiliser dans les méthodes d'itérateur qui
                ont un <code>yield return</code> ou l'un ou l'
                <code>yield break</code> autre.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
