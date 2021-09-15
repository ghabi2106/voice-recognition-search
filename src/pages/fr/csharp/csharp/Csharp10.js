import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Csharp10() {
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
                    href="#csharp"
                  >
                    C#
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#global-usings"
                  >
                    Global using directives
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#file-scoped-namespace"
                  >
                    File-scoped namespace declaration
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#extended-property-patterns"
                  >
                    Extended property patterns
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#constant-interpolated-strings"
                  >
                    Constant interpolated strings
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#record-seal-tostring"
                  >
                    Record types can seal ToString
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deconstruction"
                  >
                    Assignment and declaration in same deconstruction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#null-parameter-checking"
                  >
                    Null parameter checking
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#required"
                  >
                    Required propertie
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#field"
                  >
                    The field keyword
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
                    to="/hostedservice"
                  >
                    IHostedService, BackgroundService
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp9"
                  >
                    New features in C# 10
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
          <h3>New features in C# 10 </h3>
          <article id="csharp">
            <h6>Qu'est-ce que C# ?</h6>
            <p>
              C# est un langage orienté objet, de type sécurisé et managé qui
              est compilé par le framework .Net pour générer le langage
              intermédiaire Microsoft.
            </p>
          </article>
          <article id="global-usings">
            <h6>global using adoptées</h6>
            <div>
              <p>
                C# 10 introduit un nouveau modèle qui vous permet de définir des
                importations d'espaces de noms sur l'ensemble d'un projet à
                l'aide du mot-clé <code>global</code>. Il est recommandé de
                placer vos importations globales dans un fichier séparé (un pour
                chaque projet), éventuellement nommé <code>usings.cs</code> ou{" "}
                <code>imports.cs</code>.
              </p>
              <Highlight language="csharp">
                {`global using Microsoft.AspNetCore.Builder;
global using Microsoft.AspNetCore.Hosting;
global using Microsoft.AspNetCore.HttpsPolicy;
global using Microsoft.AspNetCore.Identity;
global using Microsoft.AspNetCore.Identity.UI;
global using Microsoft.EntityFrameworkCore;
global using Microsoft.Extensions.Configuration;
global using Microsoft.Extensions.DependencyInjection;
global using Microsoft.Extensions.Hosting;
global using System;
global using System.Collections.Generic;
global using System.Linq;
global using System.Threading.Tasks;`}
              </Highlight>
            </div>
          </article>
          <article id="file-scoped-namespace">
            <h6>Déclaration d’espace de noms de portée de fichier</h6>
            <div>
              <p>
                Vous pouvez utiliser une nouvelle forme de la namespace
                déclaration pour déclarer que toutes les déclarations.
              </p>
              <Highlight language="csharp">
                {`namespace MyNamespace;`}
              </Highlight>
            </div>
          </article>
          <article id="extended-property-patterns">
            <h6>Modèles de propriété étendus</h6>
            <div>
              <p>
                À compter de C# 10,0, on peut référencer des propriétés ou des
                champs imbriqués dans un modèle de propriété.
              </p>
              <Highlight language="csharp">
                {`{ Prop1.Prop2: pattern }`}
              </Highlight>
              <p>is valid in C# 10.0 and later and equivalent to</p>
              <Highlight language="csharp">
                {`{ Prop1: { Prop2: pattern } }`}
              </Highlight>
            </div>
          </article>
          <article id="constant-interpolated-strings">
            <h6>Autoriser les const chaînes interpolées</h6>
            <div>
              <p>
                En C# 10,0, <code>const</code> les chaînes peuvent être
                initialisées à l’aide de l' interpolation de chaîne si tous les
                espaces réservés sont eux-mêmes des chaînes constantes.
              </p>
              <Highlight language="csharp">
                {`string name = "Mark";
var date = DateTime.Now;

// Composite formatting:
Console.WriteLine("Hello, {0}! Today is {1}, it's {2:HH:mm} now.", name, date.DayOfWeek, date);`}
              </Highlight>
            </div>
          </article>
          <article id="record-seal-tostring">
            <h6>Les types d’enregistrements peuvent sceller ToString</h6>
            <div>
              <p>
                En C# 10,0, on peut ajouter le <code>sealed</code> modificateur
                lorsqu'on remplace <code>ToString</code> dans un type
                d’enregistrement. La fermeture de la <code>ToString</code>{" "}
                méthode empêche le compilateur de synthétiser une{" "}
                <code>ToString</code> méthode pour tous les types
                d’enregistrements dérivés.
              </p>
            </div>
          </article>
          <article id="deconstruction">
            <h6>
              Autoriser l’assignation et la déclaration dans la même
              déconstruction
            </h6>
            <div>
              <p>
                Cette modification supprime une restriction des versions
                antérieures de C#. Auparavant, une déconstruction pouvait
                affecter toutes les valeurs aux variables existantes ou
                initialiser les variables nouvellement déclarées :
              </p>
              <Highlight language="csharp">
                {`// Initialization:
(int x, int y) = point;

// assignment:
int x1 = 0;
int y1 = 0;
(x1, y1) = point;`}
              </Highlight>
              <p>C# 10.0 removes this restriction:</p>
              <Highlight language="csharp">
                {`int x = 0;
(x, int y) = point;`}
              </Highlight>
            </div>
          </article>
          <article id="null-parameter-checking">
            <h6>Vérification des paramètres nuls</h6>
            <div>
              <p>
                Dans le même esprit de réduction du passe-partout, C# a une
                nouvelle fonctionnalité très intéressante appelée vérification
                des paramètres nuls. Vous avez sans aucun doute écrit une
                méthode qui a déjà dû rejeter les valeurs nulles.
              </p>
              <Highlight language="csharp">
                {`public UpdateAddress(int personId, Address newAddress)
{
    if (newAddress == null)
    {
        throw new ArgumentNullException("newAddress");
    }    ...
}`}
              </Highlight>
              <Highlight language="csharp">
                {`public UpdateAddress(int personId, Address newAddress!!)
{
    ...
}`}
              </Highlight>
              <p>
                Maintenant, si on passe une valeur nulle à la place d'un{" "}
                <code>Address</code> objet, le{" "}
                <code>ArgumentNullException</code> est automatiquement levé.
              </p>
            </div>
          </article>
          <article id="required">
            <h6>Propriétés requises</h6>
            <div>
              <p>
                Maintenant, le compilateur ne vous permettra pas d'écrire du
                code qui crée un <code>Employee</code> mais ne définit pas la
                propriété <code>Name</code> property.
              </p>
              <Highlight language="csharp">
                {`public record Employee
{
    public required string Name { get; init; }
    public decimal YearlySalary { get; init; }
    public DateTime HiredDate{ get; init; }
}`}
              </Highlight>
            </div>
          </article>
          <article id="field">
            <h6>Le mot-clé field</h6>
            <div>
              <Highlight language="csharp">
                {`private string _firstName;public string FirstName
{
    get
    {
        return _firstName;
    }
    set
    {
        if (value.Trim() == "")
            throw new ArgumentException("No blank strings");        _firstName = value;
    }
}`}
              </Highlight>
              <p>
                On peut maintenant utiliser une propriété auto-implémentée et
              </p>
              <Highlight language="csharp">
                {`public string FirstName {get;
    set
    {
        if (value.Trim() == "")
            throw new ArgumentException("No blank strings");        field = value;
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
