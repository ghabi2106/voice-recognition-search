import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Binding() {
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
                    href="#binding"
                  >
                    Binding
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#late-bound"
                  >
                    Late-bound
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#early-bound"
                  >
                    Early-bound
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#Late-early-bound"
                  >
                    Late-bound vs early-bound
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#entity"
                  >
                    Entity
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parameters"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/operators"
                  >
                    Operators
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Late-bound and early-bound</h3>
          <article id="binding">
            <h6>Binding</h6>
            <div>
              <p>
                When you work with the Organization service assemblies you have
                two programming styles you can use: <em>late-bound</em> and{" "}
                <em>early-bound</em>.
              </p>
              <p>
                The key difference between early and late binding involves type
                conversion. While early binding provides compile-time checking
                of all types so that no implicit casts occur, late binding
                checks types only when the object is created or an action is
                performed on the type. The Entity class requires types to be
                explicitly specified to prevent implicit casts.
              </p>
            </div>
          </article>
          <article id="late-bound">
            <h6>Late-bound</h6>
            <div>
              <p>
                Late binding allows you to work with custom tables (entities) or
                columns (attributes) that weren't available when your code was
                compiled.
              </p>
              <div class="row">
                <div class="col-sm-6">
                  <ul>
                    <li>
                      <i class="fa fa-fw fa-check" aria-hidden="true"></i> The
                      main advantage for late-bound programming is that you
                      don't need to generate the classes or include that
                      generated file within your projects. The generated file
                      can be quite large
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <ul>
                    <li>
                      <i class="fa fa-fw fa-times" aria-hidden="true"></i> You
                      don't get compile time validation on names of entities,
                      attributes, and relationships.
                    </li>
                    <li>
                      <i class="fa fa-fw fa-times" aria-hidden="true"></i> You
                      need to know the names of the attributes and relationships
                      in the metadata.
                    </li>
                  </ul>
                </div>
              </div>
              <Highlight language="csharp">
                {`//Use Entity class specifying the entity logical name
var account = new Entity("account");

// set attribute values
    // string primary name
    account["name"] = "Contoso";            
    // Boolean (Two option)
    account["creditonhold"] = false;
    // DateTime
    account["lastonholdtime"] = new DateTime(2017, 1, 1);
    // Double
    account["address1_latitude"] = 47.642311;
    account["address1_longitude"] = -122.136841;
    // Int
    account["numberofemployees"] = 500;
    // Money
    account["revenue"] = new Money(new decimal(5000000.00));
    // Picklist (Option set)
    account["accountcategorycode"] = new OptionSetValue(1); //Preferred customer
                
//Create the account
Guid accountid = svc.Create(account);`}
              </Highlight>
            </div>
          </article>
          <article id="early-bound">
            <h6>Early-bound</h6>
            <div>
              <Highlight language="csharp">
                {`var account = new Account();
// set attribute values
    // string primary name
    account.Name = "Contoso";
    // Boolean (Two option)
    account.CreditOnHold = false;
    // DateTime
    account.LastOnHoldTime = new DateTime(2017, 1, 1);
    // Double
    account.Address1_Latitude = 47.642311;
    account.Address1_Longitude = -122.136841;
    // Int
    account.NumberOfEmployees = 500;
    // Money
    account.Revenue = new Money(new decimal(5000000.00));
    // Picklist (Option set)
    account.AccountCategoryCode = new OptionSetValue(1); //Preferred customer

//Create the account
Guid accountid = svc.Create(account);`}
              </Highlight>
            </div>
          </article>
          <article id="Late-early-bound">
            <h6>Late-bound vs early-bound</h6>
            <table class="table table-bordered">
              <caption>Choose which style</caption>
              <thead>
                <tr>
                  <th>Early-bound</th>
                  <th>Late-bound</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    You can verify entity, attribute, and relationship names at
                    compile time
                  </td>
                  <td>
                    No compile time verification of entity, attribute, and
                    relationship names
                  </td>
                </tr>
                <tr>
                  <td>You must generate entity classes</td>
                  <td>You don't need to generate entity classes</td>
                </tr>
                <tr>
                  <td>Better IntelliSense support</td>
                  <td>Less IntelliSense support</td>
                </tr>
                <tr>
                  <td>Less, more readable code</td>
                  <td>More, less readable code</td>
                </tr>
                <tr>
                  <td>Very slightly less performant</td>
                  <td>Very slightly more performant</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="entity">
            <h6>Entity</h6>
            <p>
              <code>Entity</code> is the base class for all types of entities in
              Microsoft Dynamics 365. You use this class for both early and late
              bound programming.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
