import React from "react";
import { Link } from "react-router-dom";

export default function Entityframework() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#modeling"
                  >
                    Modeling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="# querying"
                  >
                    Querying
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tracking"
                  >
                    Change Tracking
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#saving"
                  >
                    Saving
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#concurrency"
                  >
                    Concurrency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#transactions"
                  >
                    Transactions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#caching"
                  >
                    Caching
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#concurrency"
                  >
                    Concurrency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#conventions"
                  >
                    Built-in Conventions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#configurations"
                  >
                    Configurations
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#migrations"
                  >
                    Migrations
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
          <h3>Entity Framework</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                Entity Framework is an object-relational mapper (O/RM) that
                enables .NET developers to work with a database using .NET
                objects.
              </p>
              <p>Entity Framework Features :</p>
              <ul>
                <li>Modeling</li>
                <li>Querying</li>
                <li>Change Tracking</li>
                <li>Saving</li>
                <li>Transactions</li>
                <li>Caching</li>
                <li>Built-in Conventions</li>
                <li>Configurations</li>
                <li>Migrations</li>
              </ul>
            </div>
          </article>
          <article id="modeling">
            <h6>Modelling</h6>
            <p>
              EF (Entity Framework) creates an EDM (Entity Data Model) based on
              POCO (Plain Old CLR Object) entities with get/set properties of
              different data types.
            </p>
          </article>
          <article id="querying">
            <h6>Querying</h6>
            <p>
              EF allows us to use LINQ queries to retrieve data from the
              underlying database.
            </p>
          </article>
          <article id="tracking">
            <h6>Change Tracking</h6>
            <p>
              EF keeps track of changes occurred to instances of your entities
              (Property values) which need to be submitted to the database.
            </p>
          </article>
          <article id="saving">
            <h6>Saving</h6>
            <p>
              EF executes INSERT, UPDATE, and DELETE commands to the database
              based on the changes occurred to your entities when you call the
              <code>SaveChanges()</code>.
            </p>
          </article>
          <article id="concurrency">
            <h6>Concurrency</h6>
            <p>
              EF uses Optimistic Concurrency by default to protect overwriting
              changes made by another user since data was fetched from the
              database.
            </p>
          </article>
          <article id="transactions">
            <h6>Transactions</h6>
            <p>EF performs automatic transaction management.</p>
          </article>
          <article id="caching">
            <h6>Caching</h6>
            <p>
              EF includes first level of caching out of the box. So, repeated
              querying will return data from the cache instead of hitting the
              database.
            </p>
          </article>
          <article id="conventions">
            <h6>Built-in Conventions:</h6>
            <p>
              EF follows conventions over the configuration programming pattern,
              and includes a set of default rules which automatically configure
              the EF model.
            </p>
          </article>
          <article id="configurations">
            <h6>Configurations</h6>
            <p>
              EF allows us to configure the EF model by using data annotation
              attributes or Fluent API to override default conventions.
            </p>
          </article>
          <article id="migrations">
            <h6>Migrations</h6>
            <p>
              EF provides a set of migration commands that can be executed on
              the NuGet Package Manager Console or the Command Line Interface to
              create or manage underlying database Schema.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
