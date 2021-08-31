import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Funcproc() {
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
                    href="#stored-procedure"
                  >
                    Stored Procedure
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#function"
                  >
                    Function
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#function-proc"
                  >
                    Stored Procedure vs Function
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
          <h3>Stored Procedure Functions</h3>
          <article id="stored-procedure">
            <h6>Stored Procedure</h6>
            <div>
              <p>
                Une procédure stockée est un code SQL préparé que vous pouvez
                enregistrer afin que le code puisse être réutilisé maintes et
                maintes fois.
              </p>
              <dl>
                <dt>Stored Procedure Syntax</dt>
                <dd>
                  <Highlight language="sql">{`CREATE PROCEDURE procedure_name
AS
sql_statement
GO;`}</Highlight>
                </dd>
                <dt>Execute a Stored Procedure</dt>
                <dd>
                  <Highlight language="sql">{`EXEC procedure_name;`}</Highlight>
                </dd>
                <dt>Stored Procedure With Multiple Parameters</dt>
                <dd>
                  <Highlight language="sql">{`CREATE PROCEDURE SelectAllCustomers @City nvarchar(30), @PostalCode nvarchar(10)
AS
SELECT * FROM Customers WHERE City = @City AND PostalCode = @PostalCode
GO;`}</Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">{`EXEC SelectAllCustomers @City = 'London', @PostalCode = 'WA1 1DP';`}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="function">
            <h6>Functions</h6>
            <div>
              <p>
                Une fonction est compilée et exécutée à chaque fois qu'elle est
                appelée. Une fonction doit retourner une valeur et ne peut pas
                modifier les données reçues en paramètre.
              </p>
              <dl>
                <dt>Functions</dt>
                <dd>
                  <Highlight language="sql">{`Create function Fun_EmployeeInformation()      
returns table       
as      
return(select * from Employee  ) `}</Highlight>
                </dd>
                <dd>
                  <Highlight language="sql">{`create function fun_JoinEmpColumnInfo  
(  
   @EmpContact nchar(15),  
   @EmpEmail nvarchar(50),  
   @EmpCity varchar(30)  
)  
returns nvarchar(100)  
as  
begin return(select @EmpContact+ ' ' +@EmpEmail + ' ' + @EmpCity)  
end `}</Highlight>
                </dd>
              </dl>
            </div>
          </article>
          <article id="function-proc">
            <h6>Stored Procedure vs Function</h6>
            <div>
              <p>
                Différences de base entre la procédure stockée et la fonction
                dans SQL Server.
              </p>
              <ul>
                <li>
                  La fonction doit renvoyer une valeur mais dans la procédure
                  stockée, elle est facultative. Même une procédure peut
                  renvoyer zéro ou n valeurs.
                </li>
                <li>
                  Les fonctions peuvent être appelées à partir d'une procédure
                  alors que les procédures ne peuvent pas être appelées à partir
                  d'une fonction.
                </li>
              </ul>
              <p>
                Différences avancées entre la procédure stockée et la fonction
                dans SQL Server
              </p>
              <ul>
                <li>
                  La procédure autorise l'instruction SELECT ainsi que
                  l'instruction DML (INSERT/UPDATE/DELETE) alors que la fonction
                  n'y autorise que l'instruction SELECT.
                </li>
                <li>
                  Les procédures ne peuvent pas être utilisées dans une
                  instruction SELECT alors que Function peut être incorporée
                  dans une instruction SELECT.
                </li>
                <li>
                  Les procédures stockées ne peuvent pas être utilisées dans les
                  instructions SQL n'importe où dans la section
                  WHERE/HAVING/SELECT alors que Function peut l'être.
                </li>
                <li>
                  Les fonctions qui renvoient des tables peuvent être traitées
                  comme un autre ensemble de lignes. Cela peut être utilisé dans
                  les JOINTURE avec d'autres tables.
                </li>
                <li>
                  La fonction en ligne peut être considérée comme une vue qui
                  prend des paramètres et peut être utilisée dans les JOIN et
                  autres opérations d'ensemble de lignes.
                </li>
                <li>
                  Une exception peut être gérée par le bloc try-catch dans une
                  procédure alors que le bloc try-catch ne peut pas être utilisé
                  dans une fonction.
                </li>
                <li>
                  Nous pouvons utiliser Transactions in Procedure alors que nous
                  ne pouvons pas utiliser Transactions in Function.
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
