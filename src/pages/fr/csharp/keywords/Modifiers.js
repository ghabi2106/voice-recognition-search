import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

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
                    Modificateurs d'accès
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#non-access-modifiers"
                  >
                    Modificateurs de non-accès
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
                    href="#new"
                  >
                    new
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
                    to="/modifiers"
                  >
                    Modifiers
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/oop"
                  >
                    OOP
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/statements"
                  >
                    Partial type, lock, yield
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/typesystem"
                  >
                    Struct, Record, Class, Object, Constructor, Serialization
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
                  <tr>
                    <td>
                      <code>extern</code>
                    </td>
                    <td>
                      <p>
                        Le modificateur <code>extern</code> permet de déclarer
                        une méthode qui est implémentée en externe. Le
                        modificateur <code>extern</code> est souvent utilisé
                        avec l'attribut <code>DllImport</code> lors de
                        l'utilisation de services Interop à appeler dans du code
                        non managé. Dans ce cas, la méthode doit également être
                        déclarée comme <code>static</code>.
                      </p>
                      <Highlight language="csharp">
                        {`[DllImport("avifil32.dll")]
private static extern void AVIFileInit();`}
                      </Highlight>
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
                    L'héritage multiple n'est pas réalisé par la classe
                    abstraite.
                  </td>
                  <td>On peut implémenter pusieurs interfaces.</td>
                </tr>
                <tr>
                  <td>La classe hérite d'une autre classe</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>Contient constructeur</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>Peut contenir des membres statiques</td>
                  <td>Non</td>
                </tr>
                <tr>
                  <td>Il peut contenir différents types de modificateurs d'accès tels que public, privé, protégé, etc.</td>
                  <td>Il ne contient que le modificateur d'accès public car tout dans l'interface est public.</td>
                </tr>
                <tr>
                  <td>La classe abstraite peut contenir des méthodes, des champs, des constantes, etc.</td>
                  <td>L'interface ne peut contenir que des méthodes, des propriétés, des indexeurs et des événements.</td>
                </tr>
                <tr>
                  <td>Il peut être entièrement, partiellement ou non implémenté.</td>
                  <td>Il doit être entièrement implémenté</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="new">
            <h6>new (modificateur de membre)</h6>
            <div>
              <p>
                En cas d'utilisation comme un modificateur de déclaration, le
                mot clé <code>new</code> masque explicitement un membre qui est
                hérité d'une classe de base. Lorsque vous masquez un membre
                hérité, la version dérivée du membre remplace la version de
                classe de base.
              </p>
              <Highlight language="csharp">
                {`public class BaseC
{
    public static int x = 55;
    public static int y = 22;
}

public class DerivedC : BaseC
{
    // Hide field 'x'.
    new public static int x = 100;

    static void Main()
    {
        // Display the new value of x:
        Console.WriteLine(x);

        // Display the hidden value of x:
        Console.WriteLine(BaseC.x);

        // Display the unhidden member y:
        Console.WriteLine(y);
    }
}
/*
Output:
100
55
22
*/`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
