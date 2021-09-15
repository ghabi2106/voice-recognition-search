import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Operators() {
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
                    href="#is-as"
                  >
                    is &amp; as operator
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#size-name-stackalloc"
                  >
                    sizeof - nameof - stackalloc
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#typeof-gettype"
                  >
                    typeof vs GetType()
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#type-casting"
                  >
                    Type Casting
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#implicit-casting"
                  >
                    Implicit Casting
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#explicit-casting"
                  >
                    Explicit Casting
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parameters"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/operators"
                  >
                    Operators
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Operators</h3>
          <article id="typeof-gettype">
            <h6>typeof vs GetType()</h6>
            <div>
              <p>
                L'opérateur <code>typeof</code> peut être utilisé avec le type
                ou le type générique connu au moment de la compilation. Le
                typeof(obj) donnera une erreur de compilation car{" "}
                <code>obj</code>c'est une variable, pas un type. Vous pouvez
                utiliser le type <code>typeof</code> avec, par exemple,{" "}
                <code>typeof(int)</code>. Le <code>GetType()</code> est appelé
                sur un objet au moment de l'exécution. Dans les deux cas, le
                type de retour sera un objet du<code>System.Type</code>
                <code>.</code>
              </p>
              <img
                src="/img/dotnet/rules-typeof-gettype.PNG"
                alt="rules-typeof-gettype"
              />
            </div>
          </article>
          <article id="type-casting">
            <h6>Type Casting</h6>
            <div>
              <p>
                La conversion de type consiste à affecter une valeur d'un type
                de données à un autre type.
              </p>
              <p>Il existe deux types de casting :</p>
              <ul>
                <li>
                  <strong>Casting implicite</strong> (automatiquement) -
                  conversion d'un type plus petit en un type plus grand
                  <code>char</code>-&gt; <code>int</code>-&gt; <code>long</code>
                  -&gt; <code>float</code>-&gt; -&gt;<code>double</code>
                </li>
                <li>
                  <strong>Casting explicite</strong> (manuellement) - conversion
                  d'un type plus grand en un type plus petit
                  <code>double</code>-&gt; <code>float</code>-&gt;{" "}
                  <code>long</code>-&gt; <code>int</code>-&gt;<code>char</code>
                </li>
              </ul>
            </div>
          </article>
          <article id="implicit-casting">
            <h6>Implicit Casting</h6>
            <div>
              <p>
                Le casting implicite est effectué automatiquement lors du
                passage d'un type de taille plus petite à un type de taille plus
                grande :
              </p>
              <Highlight language="csharp">
                {`int myInt = 9;
double myDouble = myInt;       // Automatic casting: int to double`}
              </Highlight>
            </div>
          </article>
          <article id="explicit-casting">
            <h6>Explicit Casting</h6>
            <div>
              <p>
                Le casting explicite doit être effectué manuellement en plaçant
                le type entre parenthèses devant la valeur :
              </p>
              <Highlight language="csharp">
                {`double myDouble = 9.78;
int myInt = (int) myDouble;    // Manual casting: double to int`}
              </Highlight>
              <p>
                Il est également possible de convertir des types de données
                explicitement en utilisant des méthodes intégrées, telles que{" "}
                <code>Convert.ToBoolean</code>, <code>Convert.ToDouble</code>,{" "}
                <code>Convert.ToString</code>, <code>Convert.ToInt32</code>({" "}
                <code>int</code>) et <code>Convert.ToInt64</code>({" "}
                <code>long</code>) :
              </p>
              <Highlight language="csharp">
                {`int myInt = 10;
double myDouble = 5.25;
bool myBool = true;

Console.WriteLine(Convert.ToString(myInt));    // convert int to string
Console.WriteLine(Convert.ToDouble(myInt));    // convert int to double
Console.WriteLine(Convert.ToInt32(myDouble));  // convert double to int
Console.WriteLine(Convert.ToString(myBool));   // convert bool to string`}
              </Highlight>
            </div>
          </article>
          <article id="is-as">
            <h6>is et as opérateurs</h6>
            <div>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Operator</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>is</code>
                    </td>
                    <td>
                      pour vérifier si le type au moment de l’exécution d’une
                      expression est compatible avec un type donné
                      <br />
                      <code>E is T</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>as</code>
                    </td>
                    <td>
                      pour convertir explicitement une expression en un type
                      donné si son type au moment de l’exécution est compatible
                      avec ce type
                      <br />
                      <code>E as T</code> avec le même résultat que{" "}
                      <code>E is T ? (T)(E) : (T)null</code>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                où <code>E</code> est une expression qui retourne une valeur et{" "}
                <code>T</code> est le nom d’un type ou un d’un paramètre de
                type. <code>E</code> ne peut pas être une méthode anonyme ou une
                expression lambda.
              </p>
            </div>
          </article>
          <article id="with-switch">
            <h6>switch &amp; with expression</h6>
            <div>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>opérateur</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>switch</code>
                    </td>
                    <td>
                      pour évaluer une expression unique à partir d’une liste
                      d’expressions candidates en fonction d’une correspondance
                      de modèle avec une expression d’entrée
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>with</code>
                    </td>
                    <td>
                      génère une copie de son opérande Record avec les
                      propriétés et les champs spécifiés modifiés
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>with expression</h6>
              <Highlight language="csharp">
                {`using System;

public class InheritanceExample
{
    public record Point(int X, int Y);
    public record NamedPoint(string Name, int X, int Y) : Point(X, Y);

    public static void Main()
    {
        Point p1 = new NamedPoint("A", 0, 0);
        Point p2 = p1 with { X = 5, Y = 3 };
        Console.WriteLine(p2 is NamedPoint);  // output: True
        Console.WriteLine(p2);  // output: NamedPoint { X = 5, Y = 3, Name = A }
        
    }
}`}
              </Highlight>
              <h6>switch expression</h6>
              <Highlight language="csharp">
                {`public static class SwitchExample
{
    public enum Direction
    {
        Up,
        Down,
        Right,
        Left
    }

    public enum Orientation
    {
        North,
        South,
        East,
        West
    }

    public static Orientation ToOrientation(Direction direction) => direction switch
    {
        Direction.Up    => Orientation.North,
        Direction.Right => Orientation.East,
        Direction.Down  => Orientation.South,
        Direction.Left  => Orientation.West,
        _ => throw new ArgumentOutOfRangeException(nameof(direction), $"Not expected direction value: {direction}"),
    };

    public static void Main()
    {
        var direction = Direction.Right;
        Console.WriteLine($"Map view direction is {direction}");
        Console.WriteLine($"Cardinal orientation is {ToOrientation(direction)}");
        // Output:
        // Map view direction is Right
        // Cardinal orientation is East
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="size-name-stackalloc">
            <h6>sizeof, nameof and stackalloc opérateurs</h6>
            <div>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>opérateur</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>sizeof</code>
                    </td>
                    <td>
                      L’opérateur <code>sizeof</code> retourne le nombre
                      d’octets occupés par une variable d’un type donné.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nameof</code>
                    </td>
                    <td>
                      Une expression <code>nameof</code> produit le nom d’une
                      variable, d’un type ou d’un membre en tant que constante
                      de chaîne.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>stackalloc</code>
                    </td>
                    <td>
                      Une <code>stackalloc</code> expression alloue un bloc de
                      mémoire sur la pile. Un bloc de mémoire alloué dans la
                      pile pendant l’exécution de la méthode est automatiquement
                      supprimé lorsque cette méthode retourne un résultat.
                      <br />
                      <code>stackalloc byte[length]</code>
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
