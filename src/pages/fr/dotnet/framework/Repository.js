import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Repository() {
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
                    🧠 1. What is the Repository Pattern?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#summary"
                  >
                    💬 2. Summary
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    🧩 3. Example
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
          <h3>Repository pattern</h3>
          <article id="definition">
            <h6>🧠 1. What is the Repository Pattern?</h6>
            <div>
              <h6>🧠 1. What is the Repository Pattern?</h6>
              <p>
                The <strong>Repository Pattern</strong> is a{" "}
                <strong>design pattern</strong> used to{" "}
                <strong>separate business logic</strong> from{" "}
                <strong>data access logic</strong>.
              </p>
              <p>
                It acts as an <strong>abstraction layer</strong> between your
                application and the database —
                <br />
                so your code talks to <em>repositories</em> instead of directly
                dealing with Entity Framework or SQL.
              </p>
              <hr />
              <h6>💬 Simple definition:</h6>
              <blockquote>
                <p>
                  A <strong>Repository</strong> is a class responsible for{" "}
                  <strong>querying, adding, updating, and deleting data</strong>{" "}
                  from a data source (usually a database).
                </p>
              </blockquote>
            </div>
          </article>
          <article id="summary">
            <h6>💬 2. Summary</h6>
            <div>
              <h6>💬 2. Summary</h6>
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
                    <td>
                      A design pattern that isolates data access logic from
                      business logic
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Purpose</strong>
                    </td>
                    <td>
                      Create an abstraction layer between the database and
                      application code to support maintainability and
                      testability
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Implementation</strong>
                    </td>
                    <td>Generic interface + concrete class</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Relation with UoW</strong>
                    </td>
                    <td>
                      UoW manages transaction across multiple repositories
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Used With</strong>
                    </td>
                    <td>EF Core or any ORM</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Key Benefit</strong>
                    </td>
                    <td>Decoupled, testable, and maintainable code</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Typical Methods</strong>
                    </td>
                    <td>Add, Update, Delete, GetAll, GetById</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="example">
            <h6>🧩 3. Example</h6>
            <div>
              <h6>🧩 3. Example</h6>
              <Highlight language="csharp">{`public interface IUserRepository : IRepository<User>
{
    Task<User?> GetUserByNameAsync(string name);
}

public class UserRepository : Repository<User>, IUserRepository
{
    public UserRepository(AppDbContext context) : base(context) { }

    public async Task<User?> GetUserByNameAsync(string name)
    {
        return await _context.Users.FirstOrDefaultAsync(u => u.Name == name);
    }
}
`}</Highlight>
              <Highlight language="csharp">{`public class Repository<T> : IRepository<T> where T : class
{
    protected readonly AppDbContext _context;
    private readonly DbSet<T> _dbSet;

    public Repository(AppDbContext context)
    {
        _context = context;
        _dbSet = _context.Set<T>();
    }

    public async Task<IEnumerable<T>> GetAllAsync() => await _dbSet.ToListAsync();

    public async Task<T?> GetByIdAsync(int id) => await _dbSet.FindAsync(id);

    public async Task AddAsync(T entity) => await _dbSet.AddAsync(entity);

    public void Update(T entity) => _dbSet.Update(entity);

    public void Delete(T entity) => _dbSet.Remove(entity);
}
`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
