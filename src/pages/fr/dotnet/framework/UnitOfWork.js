import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function UnitOfWork() {
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
                    🧠 1. What is the Unit of Work Pattern?
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#summary"
                  >
                    🧾 12. Summary
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#syntax"
                  >
                    🧩 4. Implementation
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
          <h3>Unit of Work</h3>
          <article id="definition">
            <h6>🧠 1. What is the Unit of Work Pattern?</h6>
            <div>
              <h6>🧠 1. What is the Unit of Work Pattern?</h6>
              <p>
                The <strong>Unit of Work</strong> pattern is a{" "}
                <strong>design pattern</strong> that ensures that when you
                perform multiple operations (involving multiple repositories or
                entities),{" "}
                <strong>
                  all database actions are treated as a single transaction
                </strong>
                .
              </p>
              <p>
                If something fails → everything rolls back.
                <br />
                If everything succeeds → the data is saved together.
              </p>
              <hr />
              <h6>💬 In simple terms:</h6>
              <blockquote>
                <p>
                  <strong>
                    Unit of Work = a single "transactional scope" for multiple
                    operations
                  </strong>
                  .
                </p>
              </blockquote>
              <p>
                It tracks changes, coordinates repositories, and commits them
                all together in one <code>SaveChanges()</code> call.
              </p>
            </div>
          </article>
          <article id="summary">
            <h6>🧾 2. Summary</h6>
            <div>
              <h6>🧾 2. Summary</h6>
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
                      A pattern that groups database operations into a single
                      transaction
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Works With</strong>
                    </td>
                    <td>Repository pattern</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Main Method</strong>
                    </td>
                    <td>
                      <code>Complete()</code> or <code>SaveChanges()</code>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Benefits</strong>
                    </td>
                    <td>Atomic transactions, cleaner design, easier testing</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Implements</strong>
                    </td>
                    <td>
                      One <code>DbContext</code> shared across repositories
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>EF Core Relation</strong>
                    </td>
                    <td>
                      <code>DbContext</code> already behaves as a UoW internally
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Lifetime</strong>
                    </td>
                    <td>Scoped (one per web request)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="syntax">
            <h6>🧩 3. Implementation</h6>
            <div>
              <h6>🧩 3. Implementation</h6>
              <Highlight language="csharp">{`public class UserService
{
    private readonly IUnitOfWork _unitOfWork;

    public UserService(IUnitOfWork unitOfWork)
    {
        _unitOfWork = unitOfWork;
    }

    public async Task CreateUserWithOrderAsync()
    {
        var user = new User { Name = "Assaad" };
        await _unitOfWork.Users.AddAsync(user);

        var order = new Order { Product = "Laptop", UserId = user.Id };
        await _unitOfWork.Orders.AddAsync(order);

        await _unitOfWork.CompleteAsync(); // ✅ Both saved together
    }
}
`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
