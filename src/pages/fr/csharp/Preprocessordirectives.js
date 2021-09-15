import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Preprocessordirectives() {
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
                    href="#preprocessor-directives"
                  >
                    Preprocessor Directives
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
          <h3>Preprocessor Directives</h3>
          <article id="preprocessor-directives">
            <h6>Preprocessor Directives</h6>
            <div>
              <p>
                Les directives de préprocesseur en C# indiquent au compilateur
                de traiter les informations données avant que la compilation
                réelle du programme ne commence. Il commence par un symbole de
                hashtag (#) et comme ces préprocesseurs ne sont pas des
                instructions, aucun point-virgule n'est ajouté à la fin. Le
                compilateur C# n'a pas de préprocesseur séparé, mais les
                directives sont traitées comme s'il y en avait un. Il ne peut y
                avoir rien d'autre dans une ligne que la directive du
                préprocesseur.
              </p>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Préprocesseur</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#define</td>
                    <td>Pour définir un symbole</td>
                  </tr>
                  <tr>
                    <td>#undef</td>
                    <td>Supprime toute définition d'un symbole</td>
                  </tr>
                  <tr>
                    <td>#if</td>
                    <td>Vérifie si le symbole est évalué à vrai</td>
                  </tr>
                  <tr>
                    <td>#endif</td>
                    <td>
                      Termine la directive conditionnelle qui a commencé par #if
                    </td>
                  </tr>
                  <tr>
                    <td>#else</td>
                    <td>
                      Si la valeur symbolique de #if est fausse, les
                      instructions de la directive #else sont exécutées
                    </td>
                  </tr>
                  <tr>
                    <td>#elif</td>
                    <td>
                      Crée une directive conditionnelle composée qui est
                      exécutée si la valeur symbolique est vraie
                    </td>
                  </tr>
                  <tr>
                    <td>#error</td>
                    <td>Crée une erreur définie par l'utilisateur</td>
                  </tr>
                  <tr>
                    <td>#warning</td>
                    <td>Crée un avertissement défini par l'utilisateur</td>
                  </tr>
                  <tr>
                    <td>#line</td>
                    <td>
                      Modifie la numérotation des lignes par défaut du
                      compilateur
                    </td>
                  </tr>
                  <tr>
                    <td>#region</td>
                    <td>
                      Spécifie un bloc de code qui peut être développé ou réduit
                    </td>
                  </tr>
                  <tr>
                    <td>#endregion</td>
                    <td>Spécifie la fin d'une région</td>
                  </tr>
                  <tr>
                    <td>#pragma</td>
                    <td>
                      Donne au compilateur des informations pour la compilation
                      du fichier
                    </td>
                  </tr>
                  <tr>
                    <td>#pragma warning</td>
                    <td>
                      Utilisé pour activer ou désactiver les avertissements
                    </td>
                  </tr>
                  <tr>
                    <td>#pragma checksum</td>
                    <td>
                      Crée des sommes de contrôle pour les fichiers source
                    </td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">
                {`// C# Program to show the use of
// preprocessor directives

// Defining a symbol shape
#define shape

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace Preprocessor {

class Program {

	static void Main(string[] args)
	{
		// Checking if symbol shape exists or not
		#if (shape)
		Console.WriteLine("Shape Exists");
		#else
		Console.WriteLine("Shape does not Exist");

	// Ending the if directive
	#endif
	}
}
}
`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
