import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Csharp10() {
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
                    href="#global-usings"
                  >
                    Global using directives
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#file-scoped-namespace"
                  >
                    File-scoped namespace declaration
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#extended-property-patterns"
                  >
                    Extended property patterns
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#constant-interpolated-strings"
                  >
                    Constant interpolated strings
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#record-seal-tostring"
                  >
                    Record types can seal ToString
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deconstruction"
                  >
                    Assignment and declaration in same deconstruction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#null-parameter-checking"
                  >
                    Null parameter checking
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#required"
                  >
                    Required propertie
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#field"
                  >
                    The field keyword
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
          <h3>New features in C# 10 </h3>
          <article id="csharp">
            <h6>What is C#?</h6>
            <p>
              C# is an object-oriented, type-safe, and managed language that is
              compiled by .Net framework to generate Microsoft Intermediate
              Language.
            </p>
          </article>
          <article id="global-usings">
            <h6>Global using directives</h6>
            <div>
              <p>
                C# 10 introduces a new pattern that lets you define namespace
                imports across an entire project using the <code>global</code>{" "}
                keyword. It’s recommended that you place your global imports in
                a separate file (one for each project), possibly named usings.cs
                or imports.cs.
              </p>
              <Highlight language="csharp">
                {`global using Microsoft.AspNetCore.Builder;
global using Microsoft.AspNetCore.Hosting;
global using Microsoft.AspNetCore.HttpsPolicy;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.Identity.UI;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.Extensions.Configuration;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Hosting;
global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;`}
              </Highlight>
            </div>
          </article>
          <article id="file-scoped-namespace">
            <h6>File-scoped namespace declaration</h6>
            <div>
              <p>
                Another way to streamline your code in C# 10 is to declare a
                file-scoped namespace for your code. The file-scoped namespace
                applies automatically to your entire file, with no need to
                indent anything.
              </p>
              <Highlight language="csharp">
                {`namespace MyNamespace;`}
              </Highlight>
            </div>
          </article>
          <article id="extended-property-patterns">
            <h6>Extended property patterns</h6>
            <div>
              <p>
                Beginning with C# 10.0, you can reference nested properties or
                fields within a property pattern. For example, a pattern of the
                form
              </p>
              <Highlight language="csharp">
                {`{ Prop1.Prop2: pattern }`}
              </Highlight>
              <p>is valid in C# 10.0 and later and equivalent to</p>
              <Highlight language="csharp">
                {`{ Prop1: { Prop2: pattern } }`}
              </Highlight>
            </div>
          </article>
          <article id="constant-interpolated-strings">
            <h6>Constant interpolated strings</h6>
            <div>
              <p>
                In C# 10.0, <code>const</code> strings may be initialized using
                string interpolation if all the placeholders are themselves
                constant strings.
              </p>
              <Highlight language="csharp">
                {`string name = "Mark";
var date = DateTime.Now;

// Composite formatting:
Console.WriteLine("Hello, {0}! Today is {1}, it's {2:HH:mm} now.", name, date.DayOfWeek, date);`}
              </Highlight>
            </div>
          </article>
          <article id="record-seal-tostring">
            <h6>Record types can seal ToString</h6>
            <div>
              <p>
                In C# 10.0, you can add the <code>sealed</code> modifier when
                you override <code>ToString</code> in a record type. Sealing the{" "}
                <code>ToString</code> method prevents the compiler from
                synthesizing a <code>ToString</code> method for any derived
                record types.
              </p>
            </div>
          </article>
          <article id="deconstruction">
            <h6>Assignment and declaration in same deconstruction</h6>
            <div>
              <p>
                This change removes a restriction from earlier versions of C#.
                Previously, a deconstruction could assign all values to existing
                variables, or initialize newly declared variables:
              </p>
              <Highlight language="csharp">
                {`// Initialization:
(int x, int y) = point;

// assignment:
int x1 = 0;
int y1 = 0;
(x1, y1) = point;`}
              </Highlight>
              <p>C# 10.0 removes this restriction:</p>
              <Highlight language="csharp">
                {`int x = 0;
(x, int y) = point;`}
              </Highlight>
            </div>
          </article>
          <article id="null-parameter-checking">
            <h6>Null parameter checking</h6>
            <div>
              <p>
                In the same spirit of reducing boilerplate, C# has a very nice
                new feature called <code>null</code> parameter checking. No
                doubt you’ve written a method that’s had to reject null values
                before.
              </p>
              <Highlight language="csharp">
                {`public UpdateAddress(int personId, Address newAddress)
{
    if (newAddress == null)
    {
        throw new ArgumentNullException("newAddress");
    }    ...
}`}
              </Highlight>
              <Highlight language="csharp">
                {`public UpdateAddress(int personId, Address newAddress!!)
{
    ...
}`}
              </Highlight>
              <p>
                Now if you pass a null value in the place of an Address object,
                the ArgumentNullException is thrown automatically.
              </p>
            </div>
          </article>
          <article id="required">
            <h6>Required properties</h6>
            <div>
              <p>
                Now the compiler won’t allow you write code that creates an
                <code>Employee</code> but doesn’t set the <code>Name</code>{" "}
                property.
              </p>
              <Highlight language="csharp">
                {`public record Employee
{
    public required string Name { get; init; }
    public decimal YearlySalary { get; init; }
    public DateTime HiredDate{ get; init; }
}`}
              </Highlight>
            </div>
          </article>
          <article id="field">
            <h6>The field keyword</h6>
            <div>
              <Highlight language="csharp">
                {`private string _firstName;public string FirstName
{
    get
    {
        return _firstName;
    }
    set
    {
        if (value.Trim() == "")
            throw new ArgumentException("No blank strings");        _firstName = value;
    }
}`}
              </Highlight>
              <p>Now you can use an autoimplemented property and field:</p>
              <Highlight language="csharp">
                {`public string FirstName {get;
    set
    {
        if (value.Trim() == "")
            throw new ArgumentException("No blank strings");        field = value;
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
