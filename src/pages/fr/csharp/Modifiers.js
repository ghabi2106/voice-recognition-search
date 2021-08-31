import React from "react";
import { Link } from "react-router-dom";

export default function Struct() {
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
                    href="#access-modifiers"
                  >
                    Struct
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#non-access-modifiers"
                  >
                    Record
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#const-readonly"
                  >
                    const vs readonly
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#abstruct-interface"
                  >
                    abstruct vs interface
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#this"
                  >
                    this
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
          <h3>Modificateurs</h3>
          <article id="access-modifiers">
            <h6>Modificateurs d'accès</h6>
            <div>
              <p>Modificateurs d'accès - contrôle le niveau d'accès</p>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Modifier</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>public</code>
                    </td>
                    <td>Le code est accessible pour toutes les classes</td>
                  </tr>
                  <tr>
                    <td>
                      <code>private</code>
                    </td>
                    <td>
                      Le code n'est accessible qu'au sein d'une même classe
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>protected</code>
                    </td>
                    <td>
                      Le code est accessible au sein de la même classe, ou dans
                      un classe héritée de cette classe.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>internal</code>
                    </td>
                    <td>
                      Le code n'est accessible qu'au sein de son propre
                      assembly.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>protected internal</code>
                    </td>
                    <td>
                      Le code n'est accessible qu'au sein de son propre
                      assembly, ou à partir d’un dérivé class dans un autre
                      assembly.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>private protected</code>
                    </td>
                    <td>
                      le type ou le membre est accessible uniquement dans son
                      assembly déclarant, par le code dans le même class ou dans
                      un type dérivé de celui-ci.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-bordered">
                <caption>Table 1</caption>
                <thead>
                  <tr>
                    <th>Caller's location</th>
                    <th>
                      <code>public</code>
                    </th>
                    <th>
                      <code>protected internal</code>
                    </th>
                    <th>
                      <code>protected</code>
                    </th>
                    <th>
                      <code>internal</code>
                    </th>
                    <th>
                      <code>private protected</code>
                    </th>
                    <th>
                      <code>private</code>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <em>
                        <strong>Within the assembly</strong>
                      </em>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Within the class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Derived class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>Non-derived class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>
                      <em>
                        <strong>In an external assembly</strong>
                      </em>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Derived class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>Non-derived class</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="non-access-modifiers">
            <h6>Modificateurs de non-accès</h6>
            <div>
              <p>
                Modificateurs de non-accès - ne contrôlent pas le niveau
                d'accès, mais fournissent d'autres fonctionnalités
              </p>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Modifier</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>sealed</code>
                    </td>
                    <td>
                      La classe ne peut pas être héritée par d'autres classes
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>abstract</code>
                    </td>
                    <td>
                      La classe ne peut pas être utilisée pour créer des objets.
                      Pour accéder à une classe abstraite, elle doit être
                      héritée d'une autre classe.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>static</code>
                    </td>
                    <td>
                      Les attributs et les méthodes appartiennent à la classe,
                      plutôt qu'à un objet.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>abstract</code>
                    </td>
                    <td>
                      La classe ne peut pas être utilisée pour créer des objets.
                      Pour accéder à une classe abstraite, elle doit être
                      héritée d'une autre classe.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>virtual</code>
                    </td>
                    <td>
                      La méthode virtuelle est une méthode qui peut être
                      redéfinie dans des classes dérivées.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>override</code>
                    </td>
                    <td>
                      Une override méthode fournit une nouvelle implémentation
                      de la méthode héritée d’une classe de base.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>readonly</code>
                    </td>
                    <td>
                      Un champ <code>readonly</code> ne peut pas être assigné
                      (sauf s’il s’agit d’un constructeur ou d’un initialiseur
                      de variable).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>const</code>
                    </td>
                    <td>
                      Le mot clé <code>readonly</code> est différent du mot clé{" "}
                      <code>const</code>. Un champ <code>const</code> ne peut
                      être initialisé qu'au moment de la déclaration du champ.
                      Un champ <code>readonly</code> peut être initialisé dans
                      la déclaration ou dans un constructeur.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>volatile</code>
                    </td>
                    <td>
                      Le mot clé <code>volatile</code> indique qu’un champ peut
                      être modifié par plusieurs threads qui s’exécutent
                      simultanément
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>unsafe</code>
                    </td>
                    <td>
                      Le mot clé <code>unsafe</code> désigne un contexte non
                      sécurisé, qui est requis pour toute opération impliquant
                      des pointeurs.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="const-readonly">
            <h6>const vs readonly</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Constants</strong>
                  </td>
                  <td>
                    <strong>Read-only Variables</strong>
                  </td>
                </tr>
                <tr>
                  <td>Constantes Variables en lecture seule</td>
                  <td>Évalué au moment de la compilation</td>
                </tr>
                <tr>
                  <td>
                    Prend en charge uniquement les variables de type valeur
                  </td>
                  <td>Ils peuvent contenir les variables de type référence</td>
                </tr>
                <tr>
                  <td>
                    Ils sont utilisés lorsque la valeur ne change pas au moment
                    de la compilation
                  </td>
                  <td>
                    Utilisé lorsque la valeur réelle est inconnue avant
                    l'exécution
                  </td>
                </tr>
                <tr>
                  <td>
                    Ne peut pas être initialisé au moment de la déclaration ou
                    dans un constructeur
                  </td>
                  <td>
                    Peut être initialisé au moment de la déclaration ou dans un
                    constructeur
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="abstruct-interface">
            <h6>class abstruct vs interface</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Interface</strong>
                  </td>
                  <td>
                    <strong>Abstract Class</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    Une interface déclare simplement un contrat ou un
                    comportement que les classes d'implémentation devraient
                    avoir.
                  </td>
                  <td>
                    Une classe abstraite fournit une implémentation partielle
                    d'une fonctionnalité qui doit être implémentée par les
                    entités qui héritent.
                  </td>
                </tr>
                <tr>
                  <td>
                    Une interface ne peut déclarer que des propriétés, des
                    méthodes et des événements sans modificateur d'accès.
                  </td>
                  <td>Une classe abstraite déclare également des champs.</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="this">
            <h6>
              Pouvons-nous utiliser la commande « this » dans une méthode
              statique ?
            </h6>
            <p>
              Nous ne pouvons pas utiliser « this » dans une méthode statique
              car nous ne pouvons utiliser que des variables/méthodes statiques
              dans une méthode statique.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
