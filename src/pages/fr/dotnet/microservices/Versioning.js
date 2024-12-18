import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Versioning() {
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
                    href="#versioning"
                  >
                    Versioning
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#strategy"
                  >
                    Strategy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    Example
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>API Versioning</h3>
          <article id="versioning">
            <h6>Versioning</h6>
            <div>
              <h6>
                <strong>Versioning (Gestion des versions)</strong>
              </h6>
              <p>
                Le <strong>versioning</strong> est une stratégie permettant de
                gérer les évolutions d'une API ou d'un service tout en
                maintenant la compatibilité avec les versions précédentes.
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Détails</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Objectif</strong>
                    </td>
                    <td>
                      Gérer les changements sans perturber les utilisateurs
                      existants.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Techniques courantes</strong>
                    </td>
                    <td>
                      URL, Header, Query String, Media Type, Assembly
                      Versioning.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Utilisation en .NET</strong>
                    </td>
                    <td>
                      <code>Microsoft.AspNetCore.Mvc.Versioning</code> pour
                      gérer facilement les versions dans les API ASP.NET Core.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Bonnes pratiques</strong>
                    </td>
                    <td>
                      Maintenir la compatibilité, documenter les versions,
                      planifier la migration.
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>Pourquoi utiliser le versioning ?</strong>
              </h6>
              <ol>
                <li>
                  <strong>Maintenir la compatibilité</strong> :
                  <ul>
                    <li>
                      Garantit que les clients existants continuent de
                      fonctionner avec les anciennes versions d'une API ou d'un
                      service.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Gérer les changements</strong> :
                  <ul>
                    <li>
                      Facilite l'introduction de nouvelles fonctionnalités ou
                      corrections sans perturber les utilisateurs actuels.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Assurer une transition en douceur</strong> :
                  <ul>
                    <li>
                      Permet aux utilisateurs de migrer progressivement vers une
                      nouvelle version.
                    </li>
                  </ul>
                </li>
              </ol>
              <h6>
                <strong>Techniques de versioning</strong>
              </h6>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Technique</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>URL Versioning</strong>
                    </td>
                    <td>
                      Ajout d'un numéro de version dans l'URL (ex.{" "}
                      <code>/v1/resource</code>).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Header Versioning</strong>
                    </td>
                    <td>
                      Utilisation d'en-têtes HTTP pour spécifier la version (ex.{" "}
                      <code>API-Version: v1</code>).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Query String Versioning</strong>
                    </td>
                    <td>
                      Ajout d'un paramètre de version dans la requête (ex.{" "}
                      <code>?version=1</code>).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Media Type Versioning</strong>
                    </td>
                    <td>
                      Version dans le type de contenu (ex.{" "}
                      <code>application/vnd.myapp.v1+json</code>).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Assembly Versioning</strong>
                    </td>
                    <td>
                      Utilisation de numéros de version dans les bibliothèques
                      .NET (ex. <code>1.0.0</code>).
                    </td>
                  </tr>
                </tbody>
              </table>
              <h6>
                <strong>Versioning en .NET API</strong>
              </h6>
              <h6>
                1. <strong>URL Versioning</strong>
              </h6>
              <p>Exemple avec ASP.NET Core :</p>
              <Highlight language="csharp">
                {`app.MapControllerRoute(
    name: "default",
    pattern: "api/v{version:apiVersion}/[controller]");`}
              </Highlight>
              <h6>
                2.{" "}
                <strong>
                  Configuration avec{" "}
                  <code>Microsoft.AspNetCore.Mvc.Versioning</code>
                </strong>
              </h6>
              <p>Ajoutez le package NuGet :</p>
              <Highlight language="bash">
                {`dotnet add package Microsoft.AspNetCore.Mvc.Versioning`}
              </Highlight>
              <p>
                Configurez le versioning dans <code>Program.cs</code> :
              </p>
              <Highlight language="csharp">
                {`builder.Services.AddApiVersioning(options =>
{
    options.DefaultApiVersion = new ApiVersion(1, 0);
    options.AssumeDefaultVersionWhenUnspecified = true;
    options.ReportApiVersions = true;
});`}
              </Highlight>
              <h6>
                3. <strong>Controller avec version</strong>
              </h6>
              <p>Ajoutez un attribut pour spécifier la version :</p>
              <Highlight language="csharp">
                {`[ApiVersion("1.0")]
[Route("api/v{version:apiVersion}/[controller]")]
[ApiController]
public class MyController : ControllerBase
{
    [HttpGet]
    public IActionResult GetV1()
    {
        return Ok("Version 1.0");
    }
}

[ApiVersion("2.0")]
[Route("api/v{version:apiVersion}/[controller]")]
[ApiController]
public class MyControllerV2 : ControllerBase
{
    [HttpGet]
    public IActionResult GetV2()
    {
        return Ok("Version 2.0");
    }
}`}
              </Highlight>
              <h6>
                <strong>Bonnes pratiques</strong>
              </h6>
              <ol>
                <li>
                  <strong>Planifier la version initiale</strong> :
                  <ul>
                    <li>
                      Adoptez une stratégie de versioning dès le début du
                      projet.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Évitez de casser la compatibilité</strong> :
                  <ul>
                    <li>
                      Maintenez les anciennes versions jusqu'à ce que tous les
                      clients soient migrés.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Documentez les versions</strong> :
                  <ul>
                    <li>
                      Indiquez les fonctionnalités disponibles dans chaque
                      version.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Mettez en place une politique de fin de vie (EOL)
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Définissez une période où une version sera prise en charge
                      avant d'être supprimée.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
