import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Csharp11() {
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
                    href="#csharp"
                  >
                    C#
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#generic-attributes"
                  >
                    Generic attributes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#nint"
                  >
                    nint &amp; nuint
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#interpolations"
                  >
                    Newlines in string interpolations
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#list-patterns"
                  >
                    List patterns
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#raw-string-literals"
                  >
                    Raw string literals
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#parameter-null-checking"
                  >
                    Parameter null-checking <code>!!</code>
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pattern-match-span"
                  >
                    Pattern match <code>Span&lt;char&gt;</code>
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
                    to="/hostedservice"
                  >
                    IHostedService, BackgroundService
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp9"
                  >
                    New features in C# 9
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp10"
                  >
                    New features in C# 10
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
          <h3>New features in C# 11 </h3>
          <article id="csharp">
            <h6>Qu'est-ce que C# ?</h6>
            <p>
              C# est un langage orienté objet, de type sécurisé et managé qui
              est compilé par le framework .Net pour générer le langage
              intermédiaire Microsoft.
            </p>
          </article>
          <article id="generic-attributes">
            <h6>Generic attributes</h6>
            <div>
              <p>
                Vous pouvez déclarer une classe générique dont la classe de base
                est <code>System.Attribute</code>. Cette fonctionnalité fournit
                une syntaxe plus pratique pour les attributs qui nécessitent un{" "}
                <code>System.Type</code>
                paramètre. Auparavant, il était nécessaire de créer un attribut
                qui prenait un <code>Type</code> comme paramètre de constructeur
                :
              </p>
              <Highlight language="csharp">
                {`// Before C# 11:
public class TypeAttribute : Attribute
{
   public TypeAttribute(Type t) => ParamType = t;

   public Type ParamType { get; }
}`}
              </Highlight>
              <p>
                Pour appliquer l’attribut, il fallait utiliser l’opérateur{" "}
                <code>typeof</code> :
              </p>
              <Highlight language="csharp">
                {`[TypeAttribute(typeof(string))]
public string Method() => default;`}
              </Highlight>
              <p>
                À l’aide de cette nouvelle fonctionnalité, vous pouvez créer
                plutôt un attribut générique :
              </p>
              <Highlight language="csharp">
                {`// C# 11 feature:
public class GenericAttribute<T> : Attribute { }`}
              </Highlight>
              <p>
                Ensuite, vous spécifiez le paramètre de type permettant
                d’utiliser l’attribut :
              </p>
              <Highlight language="csharp">
                {`[GenericAttribute<string>()]
public string Method() => default;`}
              </Highlight>
              <p>
                Ces types ne sont pas directement représentés dans les
                métadonnées. Ils incluent des annotations qui les décrivent.
                Dans tous les cas, vous pouvez utiliser le type sous-jacent à la
                place :
              </p>
              <ul>
                <li>
                  <code>object</code> plutôt que <code>dynamic</code>
                </li>
                <li>
                  <code>string</code> plutôt que <code>string?</code>.
                </li>
                <li>
                  <code>ValueTuple&lt;int, int&gt;</code> plutôt que{" "}
                  <code>(int X, int Y)</code>.
                </li>
              </ul>
            </div>
          </article>
          <article id="nint">
            <h6>
              Numeric <code>IntPtr</code> and <code>UIntPtr</code>
            </h6>
            <div>
              <p>
                The <code>nint</code> and <code>nuint</code> types now alias{" "}
                <code>System.IntPtr</code> and <code>System.UIntPtr</code>,
                respectively.
              </p>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>C# type/keyword</th>
                    <th>Range</th>
                    <th>Size</th>
                    <th>.NET type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>nint</code>
                    </td>
                    <td>Dépend de la plateforme</td>
                    <td>Entier signé 32 bits ou 64 bits</td>
                    <td>System.IntPtr</td>
                  </tr>
                  <tr>
                    <td>
                      <code>nuint</code>
                    </td>
                    <td>Dépend de la plateforme</td>
                    <td>Entier non signé 32 bits ou 64 bits</td>
                    <td>System.UIntPtr</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="interpolations">
            <h6>Newlines in string interpolations</h6>
            <div>
              <p>
                Le texte situé à l’intérieur des caractères <code>&#123;</code>{" "}
                et <code>&#125;</code> d’une interpolation de chaîne peut
                désormais s’étendre sur plusieurs lignes. Le texte qui se trouve
                entre les marqueurs <code>&#123;</code> et <code>&#125;</code>{" "}
                est analysé comme du code C#.
              </p>
              <Highlight language="csharp">
                {`string message = $"The usage policy for {safetyScore} is {
    safetyScore switch
    {
        > 90 => "Unlimited usage",
        > 80 => "General usage, with daily safety check",
        > 70 => "Issues must be addressed within 1 week",
        > 50 => "Issues must be addressed within 1 day",
        _ => "Issues must be addressed before continued use",
    }
    }";`}
              </Highlight>
            </div>
          </article>
          <article id="list-patterns">
            <h6>Modèles de liste</h6>
            <div>
              <p>
                Le nouveau modèle de liste vous permet de faire correspondre des
                listes et des tableaux.
              </p>
              <p>
                Le modèle correspond à tous les éléments suivants :[1, 2, ..,
                10]
              </p>
              <Highlight language="csharp">
                {`int[] arr1 = { 1, 2, 10 };
int[] arr1 = { 1, 2, 5, 10 };
int[] arr1 = { 1, 2, 5, 6, 7, 8, 9, 10 };`}
              </Highlight>
              <p>Pour explorer les modèles de liste, considérez :</p>
              <Highlight language="csharp">
                {`public static int CheckSwitch(int[] values)
=> values switch
{
    [1, 2, .., 10] => 1,
    [1, 2] => 2,
    [1, _] => 3,
    [1, ..] => 4,
    [..] => 50
};`}
              </Highlight>
              <p>
                Quand on lui passe les tableaux suivants, les résultats sont
                comme indiqué :
              </p>
              <Highlight language="csharp">
                {`WriteLine(CheckSwitch(new[] { 1, 2, 10 }));          // prints 1
WriteLine(CheckSwitch(new[] { 1, 2, 7, 3, 3, 10 })); // prints 1
WriteLine(CheckSwitch(new[] { 1, 2 }));              // prints 2
WriteLine(CheckSwitch(new[] { 1, 3 }));              // prints 3
WriteLine(CheckSwitch(new[] { 1, 3, 5 }));           // prints 4
WriteLine(CheckSwitch(new[] { 2, 5, 6, 7 }));        // prints 50`}
              </Highlight>
            </div>
          </article>
          <article id="raw-string-literals">
            <h6>Raw string literals</h6>
            <div>
              <p>
                Les littéraux de chaîne brutes peuvent contenir du texte
                arbitraire sans nécessiter de séquences d’échappement. Les
                littéraux de chaîne brute peuvent inclure des espaces blancs et
                de nouvelles lignes, des guillemets incorporés et d’autres
                caractères spéciaux.
              </p>
              <Highlight language="csharp">
                {`string longMessage = """
    This is a long message.
    It has several lines.
        Some are indented
                more than others.
    Some should start at the first column.
    Some have "quoted text" in them.
    """;`}
              </Highlight>
              <Highlight language="csharp">
                {`var location = $$"""
   You are at {{{Longitude}}, {{Latitude}}}
   """;`}
              </Highlight>
            </div>
          </article>
          <article id="parameter-null-checking">
            <h6>
              Parameter null-checking <code>!!</code>
            </h6>
            <div>
              <p>
                Il est assez courant de valider si les arguments de la méthode
                sont nuls avec des variations de code passe-partout comme :
              </p>
              <Highlight language="csharp">
                {`public static void M(string s)
{
    if (s is null)
    {
        throw new ArgumentNullException(nameof(s));
    }
    // Body of the method
}`}
              </Highlight>
              <p>
                Avec la vérification Paramètre nul, vous pouvez abréger votre
                intention en ajoutant <code>!!</code> au nom du paramètre :
              </p>
              <Highlight language="csharp">
                {`public static void M(string s!!)
{
    // Body of the method
}`}
              </Highlight>
            </div>
          </article>
          <article id="pattern-match-span">
            <h6>
              Pattern match <code>Span&lt;char&gt;</code> or{" "}
              <code>ReadOnlySpan&lt;char&gt;</code> on a constant{" "}
              <code>string</code>
            </h6>
            <div>
              <p>
                Vous avez pu tester si une <code>string</code> valeur constante
                spécifique avait une valeur constante spécifique à l’aide de la
                correspondance de modèle pour plusieurs versions. À présent,
                vous pouvez utiliser la même logique de correspondance de modèle
                avec des variables qui sont <code>Span&lt;char&gt;</code> ou{" "}
                <code>ReadOnlySpan&lt;char&gt;</code>.
              </p>
              <Highlight language="csharp">
                {`static bool IsABC(Span<char> s)
{
    return s switch { 
        "ABC" => true, 
        _ => false };
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
