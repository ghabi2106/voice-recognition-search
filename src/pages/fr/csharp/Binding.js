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
                Lorsque vous utilisez les assemblys du service Organisation,
                deux styles sont à votre disposition : <em>liaison tardive</em>{" "}
                et <em>liaison anticipée</em>.
              </p>
              <p>
                La différence essentielle entre la liaison anticipée et la
                liaison tardive implique la conversion de type. Alors que la
                liaison anticipée fournit le contrôle à la compilation de tous
                les types afin qu’aucun cast implicite ne se produise, la
                liaison tardive ne contrôle les types que lorsque l’objet est
                créé ou qu’une action est exécutée sur le type. La classe Entity
                nécessite que les types soient explicitement spécifiés pour
                empêcher les casts implicites.
              </p>
            </div>
          </article>
          <article id="late-bound">
            <h6>Late-bound</h6>
            <div>
              <p>
                La liaison tardive vous permet d'utiliser les tables (entités)
                personnalisées ou les colonnes (attributs) non disponibles au
                moment de la compilation de votre code.
              </p>
              <div class="row">
                <div class="col-sm-6">
                  <ul>
                    <li>
                      <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                      L'avantage principale pour la programmation avec liaison
                      tardive n'est autre que vous n'avez pas besoin de générer
                      les classes ou d'inclure le fichier généré dans vos
                      projets. Le fichier généré peut être relativement
                      volumineux.
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6">
                  <ul>
                    <li>
                      <i class="fa fa-fw fa-times" aria-hidden="true"></i> Vous
                      n'obtenez pas la validation de la compilation des noms des
                      entités, attributs et relations.
                    </li>
                    <li>
                      <i class="fa fa-fw fa-times" aria-hidden="true"></i> Vous
                      devez connaître les noms des attributs et des relations
                      dans les métadonnées.
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
              <p>Liaison anticipée</p>
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
              <caption>
                Sélectionnez votre style
              </caption>
              <thead>
                <tr>
                  <th>Liaison anticipée</th>
                  <th>Liaison tardive</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Vous pouvez vérifier les noms d'entité, d'attribut et de
                    relation lors de la compilation
                  </td>
                  <td>
                    Pas de vérification des noms d'entité, d'attribut et de
                    relation lors de la compilation
                  </td>
                </tr>
                <tr>
                  <td>Vous devez générer des classes d'entité</td>
                  <td>Vous ne devez pas générer de classes d'entité</td>
                </tr>
                <tr>
                  <td>Meilleur support IntelliSence</td>
                  <td>Moins de support IntelliSence</td>
                </tr>
                <tr>
                  <td>Code plus/moins lisible</td>
                  <td>Code plus/moins lisible</td>
                </tr>
                <tr>
                  <td>Très légèrement moins performant</td>
                  <td>Très légèrement plus performant</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="entity">
            <h6>Entity</h6>
            <p>
              <code>Entity</code> est la classe de base pour tous les types
              d'entités dans Microsoft Dynamics 365. Vous utilisez cette classe
              pour la programmation avec liaison tardive et anticipée.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
