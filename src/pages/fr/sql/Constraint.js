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
                Les contraintes SQL sont utilis??es pour sp??cifier des r??gles
                pour les donn??es d'une table.
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
                  colonne sont diff??rentes.
                </li>
                <li>
                  <code>PRIMARY KEY</code> - Une combinaison de
                  <code>NOT NULL</code> et <code>UNIQUE</code>. Identifie de
                  mani??re unique chaque ligne d'un tableau
                </li>
                <li>
                  <code>FOREIGN KEY</code>- Emp??che les actions qui d??truiraient
                  les liens entre les tables.
                </li>
                <li>
                  <code>CHECK</code> - Assure que les valeurs d'une colonne
                  satisfont ?? une condition sp??cifique.
                </li>
                <li>
                  <code>DEFAULT</code> - D??finit une valeur par d??faut pour une
                  colonne si aucune valeur n'est sp??cifi??e.
                </li>
                <li>
                  <code>CREATE INDEX</code> - Utilis?? pour cr??er et r??cup??rer
                  des donn??es de la base de donn??es tr??s rapidement.
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
                mani??re unique chaque ligne d'un tableau
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
                <code>FOREIGN KEY</code>- Emp??che les actions qui d??truiraient
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
                colonne sont diff??rentes.
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
                <code>DEFAULT</code> - D??finit une valeur par d??faut pour une
                colonne si aucune valeur n'est sp??cifi??e.
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
                satisfont ?? une condition sp??cifique.
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
              La cl?? primaire et la cl?? unique portent toutes deux des valeurs
              uniques, mais la cl?? primaire ne peut pas avoir une valeur nulle
              l?? o?? la cl?? unique peut l'avoir. Et dans une table, il ne peut
              pas y avoir plus qu'une cl?? primaire mais les cl??s uniques peuvent
              ??tre multiples.
            </p>
          </article>
          <article id="auto-increment">
            <h6>SQL AUTO INCREMENT Field</h6>
            <div>
              <p>
                L'auto-incr??mentation permet de g??n??rer automatiquement un
                num??ro unique lorsqu'un nouvel enregistrement est ins??r?? dans
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
                  Le serveur MS SQL utilise le mot-cl??<code>IDENTITY</code> pour
                  ex??cuter une fonction d'auto-incr??mentation.
                </dd>
              </dl>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
