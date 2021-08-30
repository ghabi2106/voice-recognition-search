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
                  >Stored Procedure</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#function"
                  >Function</a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#function-proc"
                  >Stored Procedure vs Function</a>
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
                A stored procedure is a prepared SQL code that you can save, so
                the code can be reused over and over again.
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
                A function is compiled and executed every time whenever it is
                called. A function must return a value and cannot modify the
                data received as parameters.
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
                Basic Differences between Stored Procedure and Function in SQL
                Server
              </p>
              <ul>
                <li>
                  The function must return a value but in Stored Procedure it is
                  optional. Even a procedure can return zero or n values.
                </li>
                <li>
                  Functions can have only input parameters for it whereas
                  Procedures can have input or output parameters.
                </li>
                <li>
                  Functions can be called from Procedure whereas Procedures
                  cannot be called from a Function.
                </li>
              </ul>
              <p>
                Advance Differences between Stored Procedure and Function in SQL
                Server
              </p>
              <ul>
                <li>
                  The procedure allows SELECT as well as
                  DML(INSERT/UPDATE/DELETE) statement in it whereas Function
                  allows only SELECT statement in it.
                </li>
                <li>
                  Procedures cannot be utilized in a SELECT statement whereas
                  Function can be embedded in a SELECT statement.
                </li>
                <li>
                  Stored Procedures cannot be used in the SQL statements
                  anywhere in the WHERE/HAVING/SELECT section whereas Function
                  can be.
                </li>
                <li>
                  Functions that return tables can be treated as another rowset.
                  This can be used in JOINs with other tables.
                </li>
                <li>
                  Inline Function can be though of as views that take parameters
                  and can be used in JOINs and other Rowset operations.
                </li>
                <li>
                  An exception can be handled by try-catch block in a Procedure
                  whereas try-catch block cannot be used in a Function.
                </li>
                <li>
                  We can use Transactions in Procedure whereas we can't use
                  Transactions in Function.
                </li>
              </ul>
            </div>
          </article>
       </section>
      </div>
    </>
  );
}
