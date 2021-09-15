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
                    href="#with-switch"
                  >
                    with - switch
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
                The <code>typeof</code> operator can be used with the type or
                generic type known at compile-time. The typeof(obj) will give a
                compile-time error because <code>obj</code> is a variable, not a
                type. You can use the <code>typeof</code> with type, e.g.,{" "}
                <code>typeof(int)</code>. The <code>GetType()</code> is called
                on an object at runtime. In both cases, the return type will be
                an object of the <code>System.Type</code>.
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
                Type casting is when you assign a value of one data type to
                another type.
              </p>
              <p>There are two types of casting:</p>
              <ul>
                <li>
                  <strong>Implicit Casting</strong> (automatically) - converting
                  a smaller type to a larger type size
                  <code>char</code> -&gt; <code>int</code> -&gt;{" "}
                  <code>long</code> -&gt; <code>float</code> -&gt;{" "}
                  <code>double</code>
                </li>
                <li>
                  <strong>Explicit Casting</strong> (manually) - converting a
                  larger type to a smaller size type
                  <code>double</code> -&gt; <code>float</code> -&gt;{" "}
                  <code>long</code> -&gt; <code>int</code> -&gt;{" "}
                  <code>char</code>
                </li>
              </ul>
            </div>
          </article>
          <article id="implicit-casting">
            <h6>Implicit Casting</h6>
            <div>
              <p>
                Implicit casting is done automatically when passing a smaller
                size type to a larger size type:
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
                Explicit casting must be done manually by placing the type in
                parentheses in front of the value:
              </p>
              <Highlight language="csharp">
                {`double myDouble = 9.78;
int myInt = (int) myDouble;    // Manual casting: double to int`}
              </Highlight>
              <p>
                It is also possible to convert data types explicitly by using
                built-in methods, such as <code>Convert.ToBoolean</code>,{" "}
                <code>Convert.ToDouble</code>, <code>Convert.ToString</code>,{" "}
                <code>Convert.ToInt32</code> (<code>int</code>) and{" "}
                <code>Convert.ToInt64</code> (<code>long</code>):
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
            <h6>is and as operators</h6>
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
                      to check if the run-time type of an expression is
                      compatible with a given type
                      <br />
                      <code>E is T</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>as</code>
                    </td>
                    <td>
                      to explicitly convert an expression to a given type if its
                      run-time type is compatible with that type
                      <br />
                      <code>E as T</code> gives the same result as{" "}
                      <code>E is T ? (T)(E) : (T)null</code>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p>
                where <code>E</code> is an expression that returns a value and{" "}
                <code>T</code> is the name of a type or a type parameter.{" "}
                <code>E</code> cannot be an anonymous method or a lambda
                expression.
              </p>
            </div>
          </article>
          <article id="with-switch">
            <h6>switch &amp; with expression</h6>
            <div>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Operator</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>switch</code>
                    </td>
                    <td>
                      to evaluate a single expression from a list of candidate
                      expressions based on a pattern match with an input
                      expression.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>with</code>
                    </td>
                    <td>
                      produces a copy of its record operand with the specified
                      properties and fields modified:
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
            <h6>sizeof, nameof and stackalloc operators</h6>
            <div>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Operator</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>sizeof</code>
                    </td>
                    <td>
                      The <code>sizeof</code> operator returns the number of
                      bytes occupied by a variable of a given type.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>nameof</code>
                    </td>
                    <td>
                      A <code>nameof</code> expression produces the name of a
                      variable, type, or member as the string constant.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>stackalloc</code>
                    </td>
                    <td>
                      A <code>stackalloc</code> expression allocates a block of
                      memory on the stack. A stack allocated memory block
                      created during the method execution is automatically
                      discarded when that method returns.
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
