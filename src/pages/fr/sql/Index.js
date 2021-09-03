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
                <code>CREATE INDEX</code> - Utilisé pour créer et récupérer des
                données de la base de données très rapidement.
              </p>
              <img
                src="img/sql/Explain-the-types-of-Indexes.png"
                alt="Explain-the-types-of-Indexes"
              />
              <dl>
                <dt>CREATE INDEX Syntax</dt>
                <dd>
                  Crée un index sur une table. Les valeurs en double sont
                  autorisées :
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE INDEX index_name
ON table_name (column1, column2, ...);`}
                  </Highlight>
                </dd>
                <dt>CREATE UNIQUE INDEX Syntax</dt>
                <dd>
                  Crée un index unique sur une table. Les valeurs en double ne
                  sont pas autorisées :
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
              Vous pouvez spécifier un index sur une colonne soit par l'utilisation du Data
                Annotations ou bien par Fluent API:
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
                Un index de cluster a déterminé l'ordre des données physiques de
                la table. Par conséquent, la table ne peut avoir qu'un seul
                index de cluster dans SQL.
              </p>
              <p>
                L'index de cluster sera automatiquement créé chaque fois que
                nous appliquons une contrainte de clé primaire sur la colonne de
                la table.
              </p>
              <p>
                <strong>Index de cluster personnalisé ou composite</strong>
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
                L'index non-Cluster ne trie pas les données physiques comme
                l'index Cluster. Cela signifie que la séquence de données ne
                sera pas modifiée et que les données reviendront dans la même
                séquence dans laquelle elles ont été insérées.
              </p>
              <p>
                Comme un livre, l'index Non-Cluster sera stocké à un endroit et
                les données seront stockées à un autre endroit. Cela permettra
                de créer plus d'un index non-cluster sur la table.
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
            <h6>les index clusterisés vs non clusterisés.</h6>
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
                  <td>Ne peut avoir qu'un seul index de cluster par table.</td>
                  <td>Peut avoir plusieurs index de non-cluster par table.</td>
                </tr>
                <tr>
                  <td>
                    Ne peut pas consommer de stockage sur disque supplémentaire
                    car cela ne fait que trier la ligne de données dans la table
                  </td>
                  <td>
                    Peut consommer plus d'espace de stockage sur disque car les
                    données et l'index seront stockés à des endroits différents.
                  </td>
                </tr>
                <tr>
                  <td>Il est plus rapide que l'index de non-cluster.</td>
                  <td>
                    Il est plus lent que l'index de cluster car il nécessite une
                    recherche supplémentaire pour rechercher un enregistrement.
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
