import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function DbContet() {
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
                    href="#definition"
                  >
                    🧠 1. What is DbContext?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#core-responsabilities"
                  >
                    🧩 2. Core Responsibilities of DbContext
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#common-methods"
                  >
                    🧩 3. Common Methods in DbContext
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#summary"
                  >
                    💬 4. Summary
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#syntax"
                  >
                    💡 5. Syntax
                  </a>
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
          <h3>DbContext</h3>
          <article id="definition">
            <h6>🧠 1. What is DbContext?</h6>
            <div>
              <h6>🧠 1. What is DbContext?</h6>
              <p>
                <code>DbContext</code> is the{" "}
                <strong>main class in Entity Framework (EF Core)</strong> that
                manages{" "}
                <strong>
                  database connections, entity tracking, and CRUD operations
                </strong>
                .
              </p>
              <p>
                Think of it as a <strong>bridge</strong> between your{" "}
                <strong>C# classes (entities)</strong> and your{" "}
                <strong>database tables</strong>.
              </p>
              <h6>💬 Simple Definition:</h6>
              <blockquote>
                <p>
                  <code>DbContext</code> represents a <strong>session</strong>{" "}
                  with the database and allows you to{" "}
                  <strong>query and save data</strong>.
                </p>
              </blockquote>
            </div>
          </article>
          <article id="core-responsabilities">
            <h6>🧩 2. Core Responsibilities of DbContext</h6>
            <div>
              <h6>🧩 2. Core Responsibilities of DbContext</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Responsibility</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Connection Management</strong>
                    </td>
                    <td>Opens/closes connection to the database</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Change Tracking</strong>
                    </td>
                    <td>
                      Tracks changes to entities (Added, Modified, Deleted)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Querying Data</strong>
                    </td>
                    <td>Uses LINQ to retrieve data</td>
                  </tr>
                  <td>
                    <td>
                      <strong>Saving Data</strong>
                    </td>
                    <td>
                      Converts C# changes into SQL commands (
                      <code>SaveChanges()</code>)
                    </td>
                  </td>
                  <tr>
                    <td>
                      <strong>Model Building</strong>
                    </td>
                    <td>Defines how C# classes map to database tables</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Transactions</strong>
                    </td>
                    <td>
                      Supports atomic operations using{" "}
                      <code>Database.BeginTransaction()</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="common-methods">
            <h6>🧩 3. Common Methods in DbContext</h6>
            <div>
              <h6>🧩 3. Common Methods in DbContext</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Method</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>Add()</code> / <code>AddRange()</code>
                    </td>
                    <td>Add entities</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Update()</code> / <code>UpdateRange()</code>
                    </td>
                    <td>Mark as modified</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Remove()</code> / <code>RemoveRange()</code>
                    </td>
                    <td>Mark for deletion</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Find()</code>
                    </td>
                    <td>Find by primary key</td>
                  </tr>
                  <tr>
                    <td>
                      <code>SaveChanges()</code>
                    </td>
                    <td>Commit changes to DB</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Database.BeginTransaction()</code>
                    </td>
                    <td>Start a transaction</td>
                  </tr>
                  <tr>
                    <td>
                      <code>Entry(entity)</code>
                    </td>
                    <td>Access entity’s tracking info</td>
                  </tr>
                  <tr>
                    <td>
                      <code>ChangeTracker</code>
                    </td>
                    <td>View/change tracking settings</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="summary">
            <h6>💬 4. Summary</h6>
            <div>
              <h6>💬 4. Summary</h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Concept</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Definition</strong>
                    </td>
                    <td>A session with the database in EF Core</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Purpose</strong>
                    </td>
                    <td>Manage entities, tracking, and database operations</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Maps</strong>
                    </td>
                    <td>Entities → Tables, Properties → Columns</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Registered In</strong>
                    </td>
                    <td>
                      Dependency Injection (<code>AddDbContext</code>)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Lifetime</strong>
                    </td>
                    <td>Scoped per request</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>SaveChanges()</strong>
                    </td>
                    <td>Commits changes to the database</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>OnModelCreating</strong>
                    </td>
                    <td>Configures entities using Fluent API</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Change Tracking</strong>
                    </td>
                    <td>Detects changes automatically for update/delete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="syntax">
            <h6>💡 5. Syntax</h6>
            <div>
              <h6>💡 5. Syntax</h6>
              <Highlight language="csharp">{`using Microsoft.EntityFrameworkCore;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    // DbSet represents a table in the database
    public DbSet<User> Users { get; set; }
}
`}</Highlight>
              <Highlight language="csharp">{`public class UserService
{
    private readonly AppDbContext _context;

    public UserService(AppDbContext context)
    {
        _context = context;
    }

    public async Task AddUserAsync(User user)
    {
        _context.Users.Add(user);   // Stage for insert
        await _context.SaveChangesAsync(); // Executes SQL
    }

    public async Task<List<User>> GetAllUsersAsync()
    {
        return await _context.Users.ToListAsync();
    }
}
`}</Highlight>
              <Highlight language="csharp">{`builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
