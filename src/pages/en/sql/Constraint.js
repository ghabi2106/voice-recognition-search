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
                SQL constraints are used to specify rules for the data in a
                table.
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
                  <code>NOT NULL</code> - Ensures that a column cannot have a
                  NULL value
                </li>
                <li>
                  <code>UNIQUE</code> - Ensures that all values in a column are
                  different
                </li>
                <li>
                  <code>PRIMARY KEY</code> - A combination of a
                  <code>NOT NULL</code> and <code>UNIQUE</code>. Uniquely
                  identifies each row in a table
                </li>
                <li>
                  <code>FOREIGN KEY</code>- Prevents actions that would destroy
                  links between tables
                </li>
                <li>
                  <code>CHECK</code> - Ensures that the values in a column
                  satisfies a specific condition
                </li>
                <li>
                  <code>DEFAULT</code> - Sets a default value for a column if no
                  value is specified
                </li>
                <li>
                  <code>CREATE INDEX</code> - Used to create and retrieve data
                  from the database very quickly
                </li>
              </ul>
            </div>
          </article>
          <article id="primary-key">
            <h6>PRIMARY KEY Constraint</h6>
            <div>
              <p>
                <code>PRIMARY KEY</code> - A combination of a
                <code>NOT NULL</code> and <code>UNIQUE</code>. Uniquely
                identifies each row in a table
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
                <code>FOREIGN KEY</code>- Prevents actions that would destroy
                links between tables
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
                <code>UNIQUE</code> - Ensures that all values in a column are
                different
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
                <code>NOT NULL</code> - Ensures that a column cannot have a NULL
                value
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
                <code>DEFAULT</code> - Sets a default value for a column if no
                value is specified
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
                <code>CHECK</code> - Ensures that the values in a column
                satisfies a specific condition
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
              Both Primary and Unique key carry unique values but the primary
              key can not have a null value where the Unique key can. And in a
              table, there cannot be more than one Primary key but unique keys
              can be multiple.
            </p>
          </article>
          <article id="auto-increment">
            <h6>SQL AUTO INCREMENT Field</h6>
            <div>
              <p>
                Auto-increment allows a unique number to be generated
                automatically when a new record is inserted into a table.
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
                  The MS SQL Server uses the <code>IDENTITY</code> keyword to
                  perform an auto-increment feature.
                </dd>
              </dl>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
