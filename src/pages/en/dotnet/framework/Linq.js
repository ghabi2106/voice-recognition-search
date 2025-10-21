import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Linq() {
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
                    href="#linq"
                  >
                    Linq
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#operators"
                  >
                    Standard Query Operators
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#let"
                  >
                    let
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#into"
                  >
                    into
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deferred-immediate"
                  >
                    Deferred Execution vs Immediate
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
          <h3>Linq</h3>
          <article id="linq">
            <h6>🧠 1️⃣ What is LINQ</h6>
            <div>
              <p>
                LINQ (Language Integrated Query) is uniform query syntax to
                retrieve data from different sources and formats such as
                collections, generics, XML documents, ADO.NET Datasets, SQL,
                etc.
              </p>
              <img
                src="/img/dotnet/linq-query-syntax.png"
                alt="linq-query-syntax"
              />
              <img
                src="/img/dotnet/linq-method-syntax.png"
                alt="linq-method-syntax"
              />
            </div>
          </article>
          <article id="deferred-execution">
            <h6>⏳ 2️⃣ Deferred Execution Explained</h6>
            <div>
              <h6>⏳ 2️⃣ Deferred Execution Explained</h6>
              <p>
                LINQ uses <strong>lazy (deferred) execution</strong> to improve
                performance and flexibility.
              </p>
              <p>
                The query executes <strong>only when you iterate</strong> over
                it:
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Method</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Materialization</strong>
                    </td>
                    <td>
                      <code>.ToList()</code>, <code>.ToArray()</code>,{" "}
                      <code>.ToDictionary()</code>
                    </td>
                    <td>Executes and materializes results</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Aggregation</strong>
                    </td>
                    <td>
                      <code>.Count()</code>, <code>.Sum()</code>,{" "}
                      <code>.Average()</code>, <code>.Any()</code>
                    </td>
                    <td>Executes to compute a scalar</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Single Result</strong>
                    </td>
                    <td>
                      <code>.First()</code>, <code>.Single()</code>,{" "}
                      <code>.FirstOrDefault()</code>
                    </td>
                    <td>Executes query for one element</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Iteration</strong>
                    </td>
                    <td>
                      <code>foreach</code>, <code>.ForEach()</code>
                    </td>
                    <td>Enumerates results</td>
                  </tr>
                </tbody>
              </table>
              <h6>🧩 Internally Triggered Methods (Simplified View)</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Layer</th>
                    <th>Method</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>User Code</strong>
                    </td>
                    <td>
                      <code>.ToList()</code>
                    </td>
                    <td>Triggers query execution</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>LINQ Provider</strong>
                    </td>
                    <td>
                      <code>IQueryProvider.Execute()</code>
                    </td>
                    <td>Entry point for query execution</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>EF Core Internal</strong>
                    </td>
                    <td>
                      <code>QueryCompiler.Execute()</code>
                    </td>
                    <td>Compiles expression tree to SQL</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Database Layer</strong>
                    </td>
                    <td>
                      <code>RelationalCommand.ExecuteReader()</code>
                    </td>
                    <td>Executes SQL via ADO.NET</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>ADO.NET</strong>
                    </td>
                    <td>
                      <code>DbCommand.ExecuteReader()</code>
                    </td>
                    <td>Sends SQL to database</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Result Materialization</strong>
                    </td>
                    <td>EF maps rows to entities</td>
                    <td>Builds C# objects</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="compiled-query">
            <h6>🧩 What Is a Compiled Query?</h6>
            <div>
              <p>
                A <strong>compiled query</strong> is a LINQ query that is{" "}
                <strong>parsed, analyzed, and translated to SQL once</strong>,
                and then <strong>cached for reuse</strong>.
              </p>
              <p>
                So instead of EF Core rebuilding and recompiling the SQL each
                time you run the same query, it{" "}
                <strong>reuses a precompiled delegate</strong>, skipping the
                expensive translation process.
              </p>
              <blockquote>
                <ul>
                  <li>
                    <p>
                      Normal LINQ query = compiling code every time you run it.
                    </p>
                  </li>
                  <li>
                    <p>
                      Compiled query = compiling once, then just running the
                      binary repeatedly.
                    </p>
                  </li>
                </ul>
              </blockquote>
              <p>
                Since <strong>EF Core 5</strong>,{" "}
                <strong>EF automatically caches query plans</strong> for{" "}
                <em>repeated query shapes</em>.<br />
                So for most normal use cases, you{" "}
                <strong>don’t need manual compiled queries</strong> anymore.
              </p>
              <Highlight language="csharp">{`using Microsoft.EntityFrameworkCore;

static readonly Func<MyDbContext, bool, List<User>> _compiledQuery =
    EF.CompileQuery((MyDbContext context, bool isActive) =>
        context.Users.Where(u => u.IsActive == isActive).ToList()
    );

// Usage:
using var db = new MyDbContext();
var activeUsers = _compiledQuery(db, true);
`}</Highlight>
            </div>
          </article>
          <article id="expression-trees-delegates">
            <h6>⚙️ 2️⃣ Expression Trees vs Delegates</h6>
            <div>
              <p>
                When you write a LINQ query, the compiler can translate it into:
              </p>
              <ul>
                <li>
                  <p>
                    A <strong>delegate</strong> (normal C# function pointer) →
                    used in <strong>LINQ to Objects</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    An <strong>expression tree</strong> (
                    <code>Expression&lt;Func&lt;T, bool&gt;&gt;</code>) → used
                    in <strong>LINQ to Entities</strong>.
                  </p>
                </li>
              </ul>
              <Highlight language="csharp">{`// LINQ to Objects
Func<User, bool> predicate = u => u.IsActive;

// LINQ to Entities
Expression<Func<User, bool>> predicate = u => u.IsActive;
`}</Highlight>
              <p>
                🧩 EF Core inspects the <strong>expression tree</strong> to
                translate it into SQL.
                <br />
                LINQ to Objects simply runs the delegate in memory.
              </p>
            </div>
          </article>
          <article id="iqueryable-ienumerable">
            <h6>⚡ 3️⃣ IQueryable vs IEnumerable</h6>
            <div>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Meaning</th>
                    <th>Execution</th>
                    <th>Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>IEnumerable&lt;T&gt;</code>
                    </td>
                    <td>In-memory objects</td>
                    <td>.NET runtime</td>
                    <td>LINQ to Objects</td>
                  </tr>
                  <tr>
                    <td>
                      <code>IQueryable&lt;T&gt;</code>
                    </td>
                    <td>Remote data source</td>
                    <td>Provider (e.g., EF Core → SQL)</td>
                    <td>LINQ to Entities</td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">{`// This runs in SQL
db.Users.Where(u => u.Age > 18).ToList();

// This part runs in memory (dangerous for large sets)
db.Users.ToList().Where(u => u.Age > 18);
`}</Highlight>
            </div>
          </article>
          <article id="custom-linq">
            <h6>🧩 4️⃣ Custom LINQ Operators (Extension Methods)</h6>
            <div>
              <p>
                You can build <strong>custom LINQ operators</strong> to
                encapsulate reusable logic:
              </p>
              <Highlight language="csharp">{`public static class LinqExtensions
{
    public static IQueryable<User> Active(this IQueryable<User> query)
        => query.Where(u => u.IsActive);
}`}</Highlight>
              <p>Now</p>
              <Highlight language="csharp">{`var activeUsers = db.Users.Active().ToList();`}</Highlight>
            </div>
          </article>
          <article id="expression-tree-manipulation">
            <h6>🚀 5️⃣ Expression Tree Manipulation</h6>
            <div>
              <p>
                You can dynamically{" "}
                <strong>build or modify LINQ queries</strong> at runtime using{" "}
                <code>Expression</code> API.
              </p>
              <Highlight language="csharp">{`Expression<Func<User, bool>> predicate = u => u.Age > 18;
var users = db.Users.Where(predicate);`}</Highlight>
              <p>
                You can combine expressions dynamically with libraries like{" "}
                <strong>LinqKit</strong>:
              </p>
              <Highlight language="csharp">{`var filter = PredicateBuilder.New<User>();
filter = filter.And(u => u.IsActive);
filter = filter.And(u => u.Country == "FR");

var users = db.Users.AsExpandable().Where(filter);`}</Highlight>
            </div>
          </article>
          <article id="query-interception">
            <h6>🧩 8️⃣ Query Interception (EF Core)</h6>
            <div>
              <p>
                You can intercept LINQ queries before they are executed — useful
                for logging, rewriting, or security filters.
              </p>
              <Highlight language="csharp">{`public class QueryInterceptor : IQueryInterceptor
{
    public Expression QueryCompiled(Expression query) {
        // Inspect or modify the expression tree here
    }
}`}</Highlight>
              <p>
                Or use EF Core’s ToQueryString() to inspect the generated SQL:
              </p>
              <Highlight language="csharp">{`var sql = db.Users.Where(u => u.IsActive).ToQueryString();`}</Highlight>
            </div>
          </article>
          <article id="operators">
            <h6>Standard Query Operators</h6>
            <div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Classification</th>
                    <th>Standard Query Operators</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Filtering</td>
                    <td>Where, OfType</td>
                  </tr>
                  <tr>
                    <td>Sorting</td>
                    <td>
                      OrderBy, OrderByDescending, ThenBy, ThenByDescending,
                      Reverse
                    </td>
                  </tr>
                  <tr>
                    <td>Grouping</td>
                    <td>GroupBy, ToLookup</td>
                  </tr>
                  <tr>
                    <td>Join</td>
                    <td>GroupJoin, Join</td>
                  </tr>
                  <tr>
                    <td>Projection</td>
                    <td>Select, SelectMany</td>
                  </tr>
                  <tr>
                    <td>Aggregation</td>
                    <td>Aggregate, Average, Count, LongCount, Max, Min, Sum</td>
                  </tr>
                  <tr>
                    <td>Quantifiers</td>
                    <td>All, Any, Contains</td>
                  </tr>
                  <tr>
                    <td>Elements</td>
                    <td>
                      ElementAt, ElementAtOrDefault, First, FirstOrDefault,
                      Last, LastOrDefault, Single, SingleOrDefault
                    </td>
                  </tr>
                  <tr>
                    <td>Set</td>
                    <td>Distinct, Except, Intersect, Union</td>
                  </tr>
                  <tr>
                    <td>Partitioning</td>
                    <td>Skip, SkipWhile, Take, TakeWhile</td>
                  </tr>
                  <tr>
                    <td>Concatenation</td>
                    <td>Concat</td>
                  </tr>
                  <tr>
                    <td>Equality</td>
                    <td>SequenceEqual</td>
                  </tr>
                  <tr>
                    <td>Generation</td>
                    <td>DefaultEmpty, Empty, Range, Repeat</td>
                  </tr>
                  <tr>
                    <td>Conversion</td>
                    <td>
                      AsEnumerable, AsQueryable, Cast, ToArray, ToDictionary,
                      ToList
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul>
                <li>
                  Join
                  <img
                    src="/img/dotnet/linq-join-operator.png"
                    alt="linq-join-operator"
                  />
                </li>
                <li>
                  GroupJoin
                  <img
                    src="/img/dotnet/linq-groupjoin.png"
                    alt="linq-groupjoin.png"
                  />
                </li>
                <li>
                  Aggregate
                  <img
                    src="/img/dotnet/linq-aggregate-1.png"
                    alt="linq-aggregate"
                  />
                </li>
                <li>
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>Operator</th>
                        <th>Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>All</td>
                        <td>
                          Checks if all the elements in a sequence satisfies the
                          specified condition
                        </td>
                      </tr>
                      <tr>
                        <td>Any</td>
                        <td>
                          Checks if any of the elements in a sequence satisfies
                          the specified condition
                        </td>
                      </tr>
                      <tr>
                        <td>Contains</td>
                        <td>
                          Checks if the sequence contains a specific element
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </li>
              </ul>
            </div>
          </article>
          <article id="let">
            <h6>let keyword</h6>
            <div>
              <p>
                <code>let</code> projects a new range variable, allows re-use of
                the expression and makes the query more readable.
              </p>
              <img src="/img/dotnet/linq-let.PNG" alt="linq-let" />
            </div>
          </article>
          <article id="into">
            <h6>into keyword</h6>
            <div>
              <p>
                Use <code>into</code> keyword in LINQ query to form a group or
                to continue a query after a <code>select</code> clause.
              </p>
              <Highlight language="csharp">
                {`var teenAgerStudents = from s in studentList
    where s.age > 12 && s.age < 20
    select s
        into teenStudents
        where teenStudents.StudentName.StartsWith("B")
        select teenStudents;`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
