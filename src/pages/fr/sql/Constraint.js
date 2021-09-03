import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Constraint() {
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
                    href="#constraints"
                  >
                    Constraints
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#primary-key"
                  >
                    Primary key
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#foreign-key"
                  >
                    Foreign key
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#unique"
                  >
                    Unique
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#not-null"
                  >
                    Not Null
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#default"
                  >
                    Default
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#check"
                  >
                    Check
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#primary-unique"
                  >
                    Primary key vs Unique Key
                  </a>
                </li>
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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#auto-incremen"
                  >
                    AUTO INCREMENT
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
          <h3>Constraints</h3>
          <article id="constraints">
            <h6>SQL Constraints</h6>
            <div>
              <p>
                Les contraintes SQL sont utilisées pour spécifier des règles
                pour les données d'une table.
              </p>
              <Highlight language="sql">
                {`CREATE TABLE table_name (
    column1 datatype constraint,
    column2 datatype constraint,
    column3 datatype constraint,
    ....
);`}
              </Highlight>
              <ul>
                <li>
                  <code>NOT NULL</code> - Assure qu'une colonne ne peut pas
                  avoir une valeur NULL.
                </li>
                <li>
                  <code>UNIQUE</code> - Assure que toutes les valeurs d'une
                  colonne sont différentes.
                </li>
                <li>
                  <code>PRIMARY KEY</code> - Une combinaison de
                  <code>NOT NULL</code> et <code>UNIQUE</code>. Identifie de
                  manière unique chaque ligne d'un tableau
                </li>
                <li>
                  <code>FOREIGN KEY</code>- Empêche les actions qui détruiraient
                  les liens entre les tables.
                </li>
                <li>
                  <code>CHECK</code> - Assure que les valeurs d'une colonne
                  satisfont à une condition spécifique.
                </li>
                <li>
                  <code>DEFAULT</code> - Définit une valeur par défaut pour une
                  colonne si aucune valeur n'est spécifiée.
                </li>
                <li>
                  <code>CREATE INDEX</code> - Utilisé pour créer et récupérer
                  des données de la base de données très rapidement.
                </li>
              </ul>
            </div>
          </article>
          <article id="primary-key">
            <h6>PRIMARY KEY Constraint</h6>
            <div>
              <p>
                <code>PRIMARY KEY</code> - Une combinaison de
                <code>NOT NULL</code> et <code>UNIQUE</code>. Identifie de
                manière unique chaque ligne d'un tableau
              </p>
              <dl>
                <dt>SQL PRIMARY KEY on CREATE TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT PK_Person PRIMARY KEY (ID,LastName)
);`}
                  </Highlight>
                </dd>
                <dt>SQL PRIMARY KEY on ALTER TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ADD PRIMARY KEY (ID);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ADD CONSTRAINT PK_Person PRIMARY KEY (ID,LastName);`}
                  </Highlight>
                </dd>
                <dt>DROP a PRIMARY KEY Constraint</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
DROP CONSTRAINT PK_Person;`}
                  </Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="foreign-key">
            <h6>FOREIGN KEY Constraint</h6>
            <div>
              <p>
                <code>FOREIGN KEY</code>- Empêche les actions qui détruiraient
                les liens entre les tables.
              </p>
              <dl>
                <dt>SQL FOREIGN KEY on CREATE TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
);`}
                  </Highlight>
                </dd>
                <dt>SQL FOREIGN KEY on ALTER TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Orders
ADD FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Orders
ADD CONSTRAINT FK_PersonOrder
FOREIGN KEY (PersonID) REFERENCES Persons(PersonID);`}
                  </Highlight>
                </dd>
                <dt>DROP a FOREIGN KEY Constraint</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Orders
DROP CONSTRAINT FK_PersonOrder;`}
                  </Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="unique">
            <h6>SQL UNIQUE Constraint</h6>
            <div>
              <p>
                <code>UNIQUE</code> - Assure que toutes les valeurs d'une
                colonne sont différentes.
              </p>
              <dl>
                <dt>SQL UNIQUE Constraint on CREATE TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL UNIQUE,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    CONSTRAINT UC_Person UNIQUE (ID,LastName)
);`}
                  </Highlight>
                </dd>
                <dt>SQL UNIQUE Constraint on ALTER TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ADD UNIQUE (ID);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ADD CONSTRAINT UC_Person UNIQUE (ID,LastName);`}
                  </Highlight>
                </dd>
                <dt>DROP a UNIQUE Constraint</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
DROP CONSTRAINT UC_Person;`}
                  </Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="not-null">
            <h6>SQL NOT NULL Constraint</h6>
            <div>
              <p>
                <code>NOT NULL</code> - Assure qu'une colonne ne peut pas avoir
                une valeur NULL.
              </p>
              <dl>
                <dt>SQL NOT NULL on CREATE TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255) NOT NULL,
    Age int
);`}
                  </Highlight>
                </dd>
                <dt>SQL NOT NULL on ALTER TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
MODIFY Age int NOT NULL;`}
                  </Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="default">
            <h6>SQL DEFAULT Constraint</h6>
            <div>
              <p>
                <code>DEFAULT</code> - Définit une valeur par défaut pour une
                colonne si aucune valeur n'est spécifiée.
              </p>
              <dl>
                <dt>SQL DEFAULT on CREATE TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255) DEFAULT 'Sandnes'
);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Orders (
    ID int NOT NULL,
    OrderNumber int NOT NULL,
    OrderDate date DEFAULT GETDATE()
);`}
                  </Highlight>
                </dd>
                <dt>SQL DEFAULT on ALTER TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ADD CONSTRAINT df_City
DEFAULT 'Sandnes' FOR City;`}
                  </Highlight>
                </dd>
                <dt>DROP a DEFAULT Constraint</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ALTER COLUMN City DROP DEFAULT;`}
                  </Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="check">
            <h6>SQL CHECK Constraint</h6>
            <div>
              <p>
                <code>CHECK</code> - Assure que les valeurs d'une colonne
                satisfont à une condition spécifique.
              </p>
              <dl>
                <dt>SQL CHECK on CREATE TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int CHECK (Age>=18)
);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`CREATE TABLE Persons (
    ID int NOT NULL,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int,
    City varchar(255),
    CONSTRAINT CHK_Person CHECK (Age>=18 AND City='Sandnes')
);`}
                  </Highlight>
                </dd>
                <dt>SQL CHECK on ALTER TABLE</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ADD CHECK (Age>=18);`}
                  </Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
ADD CONSTRAINT CHK_PersonAge CHECK (Age>=18 AND City='Sandnes');`}
                  </Highlight>
                </dd>
                <dt>DROP a CHECK Constraint</dt>
                <dd>
                  <Highlight language="sql">
                    {`ALTER TABLE Persons
DROP CONSTRAINT CHK_PersonAge;`}
                  </Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="primary-unique">
            <h6>Primary key vs Unique Key</h6>
            <p>
              La clé primaire et la clé unique portent toutes deux des valeurs
              uniques, mais la clé primaire ne peut pas avoir une valeur nulle
              là où la clé unique peut l'avoir. Et dans une table, il ne peut
              pas y avoir plus qu'une clé primaire mais les clés uniques peuvent
              être multiples.
            </p>
          </article>
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
          <article id="auto-increment">
            <h6>SQL AUTO INCREMENT Field</h6>
            <div>
              <p>
                L'auto-incrémentation permet de générer automatiquement un
                numéro unique lorsqu'un nouvel enregistrement est inséré dans
                une table.
              </p>
              <dl>
                <dt></dt>
                <dd>
                  <Highlight language="sql">{`CREATE TABLE Persons (
    Personid int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);`}</Highlight>
                </dd>
                <dd>
                  Le serveur MS SQL utilise le mot-clé<code>IDENTITY</code> pour
                  exécuter une fonction d'auto-incrémentation.
                </dd>
              </dl>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
