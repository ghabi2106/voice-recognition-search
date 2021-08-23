import React from "react";
import { Link } from "react-router-dom";

export default function Nugetpackages() {
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
                    href="#odata"
                  >
                    OData
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#fluent-validation"
                  >
                    Fluent Validation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#open-api"
                  >
                    Open API
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
          <h3>Nuget packages</h3>
          <article id="odata">
            <h6>OData</h6>
            <div>
              <p>
                OData est une technologie de protocole ouvert et open source qui
                offre la possibilité de développer des API Queryable.
              </p>
              <img src="/img/dotnet/odata.PNG" alt="OData" />
            </div>
          </article>
          <article id="fluent-validation">
            <h6>Fluent Validation</h6>
            <p>
              Au lieu de coder en dur les règles sur le modèle à l'aide de
              DataAnnotations, FluentValidation sépare les règles de validation
              encombrantes des modèles et les écrit dans une classe distincte
            </p>
          </article>
          <article id="open-api">
            <h6>Open API</h6>
            <p>
              open api
            </p>
          </article>
          </section>
      </div>
    </>
  );
}
