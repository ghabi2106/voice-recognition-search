import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Datatype() {
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
                    href="#datatype"
                  >
                    Data Type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#safetype"
                  >
                    Type safety
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#anonyme"
                  >
                    Anonymous Type
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dynamic"
                  >
                    Dynamic Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#nullable"
                  >
                    Nullable Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#discard"
                  >
                    Discard Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#extension"
                  >
                    Extension Method
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
          <h3>Data Types</h3>
          <article id="datatype">
            <h6>Data Type</h6>
            <p>
              Datatype d??signe le type de donn??es qui peuvent ??tre stock??es dans
              une variable. Il identifie ??galement la fa??on dont la m??moire est
              allou??e ?? une variable ainsi que les op??rations qui peuvent ??tre
              effectu??es sur la m??me variable.
            </p>
          </article>
          <article id="safetype">
            <h6>Type safety</h6>
            <p>
              Type safety a ??t?? introduite pour emp??cher l'objet d'un type de
              jeter un coup d'??il dans la m??moire qui a ??t?? affect??e ?? d'autres
              objets. Un code s??curis?? est ??galement ??crit pour arr??ter de
              perdre des donn??es lors de la conversion d'un type ?? l'autre.
            </p>
          </article>
          <article id="anonymous">
            <h6>Type anonyme</h6>
            <div>
              <p>
                Un type anonyme est un type (classe) sans nom qui ne peut
                contenir que des propri??t??s publiques en lecture seule.
              </p>
              <Highlight language="csharp">
                {`var student = new { Id = 1, FirstName = "James", LastName = "Bond" };`}
              </Highlight>
            </div>
          </article>
          <article id="dynamic">
            <h6>Types dynamiques</h6>
            <div>
              <p>
                Un dynamictype ??chappe ?? la v??rification de type au moment de la
                compilation ; au lieu de cela, il r??sout le type au moment de
                l'ex??cution.
              </p>
              <ul>
                <li>
                  Les types dynamiques changent de type au moment de l'ex??cution
                  en fonction de la valeur attribu??e.
                </li>
                <li>
                  Les variables de type dynamique sont converties implicitement
                  en d'autres types.
                </li>
              </ul>
              <Highlight language="csharp">
                {`dynamic MyDynamicVar = 1;`}
              </Highlight>
            </div>
          </article>
          <article id="nullable">
            <h6>Types Nullables</h6>
            <div>
              <p>
                Comme on le sait, un type valeur ne peut pas se voir attribuer
                une valeur nulle. Par exemple, int i = null vous donnera une
                erreur de compilation.
              </p>
              <Highlight language="csharp">
                {`Nullable<int> i = null;`}
              </Highlight>
            </div>
          </article>
          <article id="discard">
            <h6>Discards</h6>
            <div>
              <p>
                Discards sont des variables d???espace r??serv?? qui sont
                intentionnellement inutilis??es dans le code de l???application.
                Les ??l??ments ignor??s sont ??quivalents aux variables non
                affect??es ; ils n???ont pas de valeur. Vous pouvez ignorer le
                r??sultat d???une expression, d???un ou de plusieurs membres d???une
                expression de tuple, ou de la cible d???une expression de crit??res
                sp??ciaux.
              </p>
              <u>
                <li>D??construction de tuple et d???objet</li>
                <li>Utilisation des crit??res sp??ciaux(matching) avec switch</li>
              </u>
            </div>
          </article>
          <article id="extension">
            <h6>M??thode d'extension</h6>
            <div>
              <p>
                Les m??thodes d'extension vous permettent d'injecter des m??thodes
                suppl??mentaires sans modifier, d??river ou recompiler la classe,
                la structure ou l'interface d'origine.
              </p>
              <p>
                Les m??thodes d'extension ont un symbole sp??cial dans
                l'intellisense du studio visuel, de sorte que vous pouvez
                facilement diff??rencier les m??thodes de classe et les m??thodes
                d'extension.
              </p>
              <img
                src="/img/dotnet/extension-method.png"
                alt="extension method"
              />
              <p>
                Une m??thode d'extension est en fait un type sp??cial de m??thode
                statique d??finie dans une classe statique.
              </p>
              <Highlight language="csharp">
                {`public static class IntExtensions
{
	public static bool IsGreaterThan(this int i, int value)
	{
		return i > value;
	}
}

public class Program
{
	public static void Main()
	{
		int i = 10;

        bool result = i.IsGreaterThan(100); 

		Console.WriteLine("Result: {0}",result);
	}
}`}
              </Highlight>
              <p>
                LINQ repose sur des m??thodes d'extension qui fonctionnent sur
                les types IEnumerable et IQeryable.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
