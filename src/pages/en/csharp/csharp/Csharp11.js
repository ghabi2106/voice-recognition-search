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
            <h6>What is C#?</h6>
            <p>
              C# is an object-oriented, type-safe, and managed language that is
              compiled by .Net framework to generate Microsoft Intermediate
              Language.
            </p>
          </article>
          <article id="generic-attributes">
            <h6>Generic attributes</h6>
            <div>
              <p>
                You can declare a generic class whose base class is
                System.Attribute. This feature provides a more convenient syntax
                for attributes that require a System.Type parameter. Previously,
                you'd need to create an attribute that takes a Type as its
                constructor parameter:
              </p>
              <Highlight language="csharp">
                {`// Before C# 11:
public class TypeAttribute : Attribute
{
   public TypeAttribute(Type t) => ParamType = t;

   public Type ParamType { get; }
}`}
              </Highlight>
              <p>And to apply the attribute, you use the typeof operator:</p>
              <Highlight language="csharp">
                {`[TypeAttribute(typeof(string))]
public string Method() => default;`}
              </Highlight>
              <p>
                Using this new feature, you can create a generic attribute
                instead:
              </p>
              <Highlight language="csharp">
                {`// C# 11 feature:
public class GenericAttribute<T> : Attribute { }`}
              </Highlight>
              <p>Then, specify the type parameter to use the attribute:</p>
              <Highlight language="csharp">
                {`[GenericAttribute<string>()]
public string Method() => default;`}
              </Highlight>
              <p>
                These types aren't directly represented in metadata. They
                include annotations that describe the type. In all cases, you
                can use the underlying type instead:
              </p>
              <ul>
                <li>
                  <code>object</code> for <code>dynamic</code>.
                </li>
                <li>
                  <code>string</code> instead of <code>string?</code>.
                </li>
                <li>
                  <code>ValueTuple&lt;int, int&gt;</code> instead of{" "}
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
                    <td>Depends on platform</td>
                    <td>Signed 32-bit or 64-bit integer</td>
                    <td>System.IntPtr</td>
                  </tr>
                  <tr>
                    <td>
                      <code>nuint</code>
                    </td>
                    <td>Depends on platform</td>
                    <td>Unsigned 32-bit or 64-bit integer</td>
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
                The text inside the <code>&#123;</code> and <code>&#125;</code>{" "}
                characters for a string interpolation can now span multiple
                lines. The text between the <code>&#123;</code> and{" "}
                <code>&#125;</code> markers is parsed as C#.
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
            <h6>List patterns</h6>
            <div>
              <p>
                The new list pattern allows you to match against lists and
                arrays.
              </p>
              <p>The pattern [1, 2, .., 10] matches all of the following:</p>
              <Highlight language="csharp">
                {`int[] arr1 = { 1, 2, 10 };
int[] arr1 = { 1, 2, 5, 10 };
int[] arr1 = { 1, 2, 5, 6, 7, 8, 9, 10 };`}
              </Highlight>
              <p>To explore list patterns consider:</p>
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
                When it is passed the following arrays, the results are as
                indicated:
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
                Raw string literals are a new format for string literals. Raw
                string literals can contain arbitrary text, including
                whitespace, new lines, embedded quotes, and other special
                characters without requiring escape sequences.
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
                It is quite common to validate whether method arguments are null
                with variations of boilerplate code like:
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
                With Parameter null checking, you can abbreviate your intent by
                adding <code>!!</code> to the parameter name:
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
                You've been able to test if a <code>string</code> had a specific
                constant value using pattern matching for several releases. Now,
                you can use the same pattern matching logic with variables that
                are <code>Span&lt;char&gt;</code> or{" "}
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
