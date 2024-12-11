import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Csharp12() {
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
                    href="#async-streams"
                  >
                    Async Streams
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#array-init"
                  >
                    Array Init
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lambda-expression"
                  >
                    Lambda Expressions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#primary-constructors"
                  >
                    Primary Constructors
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
          <h3>New features in C# 12 </h3>
          <article id="csharp">
            <h6>What is C#?</h6>
            <p>
              C# is an object-oriented, type-safe, and managed language that is
              compiled by .Net framework to generate Microsoft Intermediate
              Language.
            </p>
          </article>
          <article id="async-streams">
            <h6>Async Streams</h6>
            <div>
              <p>
                <strong>Async Streams</strong> allow asynchronous iteration over
                data sources using the <code>await foreach</code> loop, making
                it easier to process data asynchronously as it becomes
                available, without blocking the main thread​.
              </p>
              <h6>Use Cases:</h6>
              <ul>
                <li>
                  <strong>Reading from a File Asynchronously</strong>: Instead
                  of reading the entire file into memory,{" "}
                  <code>await foreach</code> lets you read each line
                  asynchronously, processing it as soon as it becomes available.
                </li>
                <li>
                  <strong>Processing Streams of Data</strong>: In real-time
                  applications, such as receiving data from a network stream or
                  sensor, <code>await foreach</code> processes data as it
                  arrives without blocking.
                </li>
              </ul>
              <Highlight language="csharp">
                {`async Task ProcessItemsAsync()
{
    await foreach (var item in GetItemsAsync())
    {
        Console.WriteLine(item);
    }
}

// Method returning async stream
IAsyncEnumerable<int> GetItemsAsync()
{
    yield return 1;
    await Task.Delay(100);  // Simulate async work
    yield return 2;
}`}
              </Highlight>
            </div>
          </article>
          <article id="array-init">
            <h6>Array & Span Init</h6>
            <div>
              <h6>New Syntax for Array & Span Initialization</h6>
              <Highlight language="csharp">
                {`// Array initialization
var array = [1, 2, 3, 4, 5];

// Span initialization
Span<int> span = [1, 2, 3];`}
              </Highlight>
            </div>
          </article>
          <article id="lambda-expression">
            <h6>Lambda Expressions</h6>
            <div>
              <h6>
                Enhanced lambda expressions with default parameter values.
              </h6>
              <Highlight language="csharp">
                {`// Traditional Lambda (without default values)
Func<int, int, int> add = (a, b) => a + b;

New Syntax with Default Parameter Values
Func<int, int, int> add = (a, b = 5) => a + b;`}
              </Highlight>
            </div>
          </article>
          <article id="primary-constructors">
            <h6>Primary Constructors</h6>
            <div>
              <h6>Simplified Syntax with Primary Constructors</h6>
              <Highlight language="csharp">
                {`// Traditional Syntax
public class Person
{
    public string Name { get; }
    public int Age { get; }

    public Person(string name, int age)
    {
        Name = name;
        Age = age;
    }
}

// Simplified Syntax with Primary Constructors
public class Person(string Name, int Age);`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
