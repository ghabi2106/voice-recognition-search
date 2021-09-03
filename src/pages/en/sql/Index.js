import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Index() {
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
                    href="#index"
                  >
                    Index
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ef-index"
                  >
                    EF Index
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#clustered-index"
                  >
                    clustered indexes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#non-clustered-index"
                  >
                    non-clustered indexes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#clustered-index-non-clustered"
                  >
                    clustered vs non-clustered indexes
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>Indexes</h3>
          <article id="index">
            <h6>SQL CREATE INDEX Statement</h6>
            <div>
              <p>
                <code>CREATE INDEX</code> - Used to create and retrieve data
                from the database very quickly
              </p>
              <img
                src="img/sql/Explain-the-types-of-Indexes.png"
                alt="Explain-the-types-of-Indexes"
              />
              <dl>
                <dt>CREATE INDEX Syntax</dt>
                <dd>
                  Creates an index on a table. Duplicate values are allowed:
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE INDEX index_name
ON table_name (column1, column2, ...);`}
                  </Highlight>
                </dd>
                <dt>CREATE UNIQUE INDEX Syntax</dt>
                <dd>
                  Creates a unique index on a table. Duplicate values are not
                  allowed:
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE UNIQUE INDEX index_name
ON table_name (column1, column2, ...);`}
                  </Highlight>
                </dd>
                <dt>CREATE INDEX Example</dt>
                <dd>
                  <Highlight language="sql">
                    {`CREATE INDEX idx_lastname
ON Persons (LastName);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE INDEX idx_pname
ON Persons (LastName, FirstName);`}
                  </Highlight>
                </dd>
                <dt>DROP INDEX Statement</dt>
                <dd>
                  <Highlight language="sql">
                    {`DROP INDEX table_name.index_name;`}
                  </Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="ef-index">
            <h6>EF indexes</h6>
            <div>
              <p>
                You can specify an index over a column either by using Data
                Annotations or by Fluent API:
              </p>
              <p>
                <strong>Composite index</strong>
              </p>
              <Highlight language="csharp">
                {`[Index(nameof(FirstName), nameof(LastName))]
public class Person
{
    public int PersonId { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
}`}
              </Highlight>
              <Highlight language="csharp">
                {`protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Person>()
        .HasIndex(p => new { p.FirstName, p.LastName });
}`}
              </Highlight>
              <p>
                <strong>Non-Clustered Index</strong>
              </p>
              <Highlight language="csharp">
                {`protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Post>()
        .HasIndex(p => p.Url)
        .IncludeProperties(
            p => new { p.Title, p.PublishedOn });
}`}
              </Highlight>
            </div>
          </article>
          <article id="clustered-index">
            <h6>clustered indexes</h6>
            <div>
              <p>
                A Cluster Index determined the order of physical data of table,
                hence table can have only one cluster index in SQL.
              </p>
              <p>
                Cluster Index will be automatically created whenever we apply
                primary key constrain on the table column.
              </p>
              <p>
                <strong>Custom or Composite Cluster index syntax</strong>
              </p>
              <Highlight language="sql">
                {`CREATE CLUSTERED INDEX IX_tblMember_Gender_FirstName  
ON member(gender ASC, firstName DESC) `}
              </Highlight>
            </div>
          </article>
          <article id="non-clustered-index">
            <h6>Non-clustered indexes</h6>
            <div>
              <p>
                The non-Cluster index doesn’t sort physical data like the
                Cluster index. It means that the sequence of data will not be
                change and data will be returning on the same sequence in which
                its inserted.
              </p>
              <p>
                Like Book, Non-Cluster index will be store in one place and data
                will be store in another place. This will allow creating more
                than one Non-cluster index on the table.
              </p>
              <p>
                <strong>Non-Cluster index syntax</strong>
              </p>
              <Highlight language="sql">
                {`CREATE NONCLUSTERED INDEX IX_tblmumbai_Name  
ON member(firstname ASC)`}
              </Highlight>
            </div>
          </article>
          <article id="clustered-index-non-clustered">
            <h6>clustered vs non-clustered indexes.</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <td>
                    <strong>Clustered Index</strong>
                  </td>
                  <td>
                    <strong>Non-clustered Index</strong>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Can have only one Cluster Index per table.</td>
                  <td>Can have more than one Non-Cluster Index per table.</td>
                </tr>
                <tr>
                  <td>
                    Cannot consume extra disk storage as that only sort data row
                    in the table
                  </td>
                  <td>
                    Can consume more disk storage space as data and index will
                    be store in different places.
                  </td>
                </tr>
                <tr>
                  <td>It is faster than Non-Cluster Index.</td>
                  <td>
                    It is slower than Cluster index as it needs extra look up to
                    search record.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
