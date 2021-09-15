import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Parameters() {
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
                    href="#introduction"
                  >
                    Method Parameters
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#params"
                  >
                    params
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#out"
                  >
                    out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ref-out"
                  >
                    ref vs out
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in"
                  >
                    in
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#limit"
                  >
                    Limit
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
          <h3>Paramètres de méthode</h3>
          <article id="introduction">
            <h6>Paramètres de méthode</h6>
            <div>
              <ul>
                <li>
                  <code>params</code> spécifie que ce paramètre peut prendre un
                  nombre variable d’arguments.
                </li>
                <li>
                  <code>in</code> est utilisé pour indiquer que le paramètre
                  passé <b>ne peut pas</b> être modifié par la méthode
                </li>
                <li>
                  <code>ref</code> est utilisé pour indiquer que le paramètre
                  passé <b>peut</b> être modifié par la méthode.
                </li>
                <li>
                  <code>out</code> est utilisé pour indiquer que le paramètre
                  passé <b>doit</b> être modifié par la méthode.
                </li>
              </ul>
              <p>
                Les deux <code>ref</code> et <code>in</code> nécessitent que le
                paramètre ait été initialisé avant d'être passé à une méthode.
                Le <code>out</code> modificateur ne l'exige pas et n'est
                généralement pas initialisé avant d'être utilisé dans une
                méthode.
              </p>
            </div>
          </article>
          <article id="params">
            <h6>params</h6>
            <div>
              <p>
                Avec le mot clé <code>params</code>, vous pouvez spécifier un
                paramètre de méthode qui prend un nombre variable d’arguments.
                Le type de paramètre doit être un tableau unidimensionnel.
              </p>
              <p>
                Lorsque vous appelez une méthode avec un <code>params</code>{" "}
                paramètre, vous pouvez passer&nbsp;:
              </p>
              <ul>
                <li>
                  Liste séparée par des virgules des arguments du type des
                  éléments du tableau.
                </li>
                <li>Tableau d’arguments du type spécifié.</li>
                <li>
                  Aucun argument. Si vous n’envoyez aucun argument, la longueur
                  de la liste <code>params</code> est égale à zéro.
                </li>
              </ul>
              <Highlight language="csharp">
                {`public class MyClass
{
    public static void UseParams(params int[] list)
    {
        for (int i = 0; i < list.Length; i++)
        {
            Console.Write(list[i] + " ");
        }
        Console.WriteLine();
    }

    public static void UseParams2(params object[] list)
    {
        for (int i = 0; i < list.Length; i++)
        {
            Console.Write(list[i] + " ");
        }
        Console.WriteLine();
    }

    static void Main()
    {
        // You can send a comma-separated list of arguments of the
        // specified type.
        UseParams(1, 2, 3, 4);
        UseParams2(1, 'a', "test");

        // A params parameter accepts zero or more arguments.
        // The following calling statement displays only a blank line.
        UseParams2();

        // An array argument can be passed, as long as the array
        // type matches the parameter type of the method being called.
        int[] myIntArray = { 5, 6, 7, 8, 9 };
        UseParams(myIntArray);

        object[] myObjArray = { 2, 'b', "test", "again" };
        UseParams2(myObjArray);

        // The following call causes a compiler error because the object
        // array cannot be converted into an integer array.
        //UseParams(myObjArray);

        // The following call does not cause an error, but the entire
        // integer array becomes the first element of the params array.
        UseParams2(myIntArray);
    }
}
/*
Output:
    1 2 3 4
    1 a test

    5 6 7 8 9
    2 b test again
    System.Int32[]
*/`}
              </Highlight>
            </div>
          </article>
          <article id="out">
            <h6>out</h6>
            <p>
              Le <code>out</code> est utilisé pour passer les arguments aux
              méthodes en tant que type de référence. Il est généralement
              utilisé lorsqu'une méthode renvoie plusieurs valeurs.
            </p>
          </article>
          <article id="ref-out">
            <h6>ref vs out</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>ref</th>
                  <th>out</th>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>
                    Il faut que les paramètres s'initialisent avant de passer à
                    ref.
                  </td>
                  <td>
                    Il n'est pas nécessaire d'initialiser les paramètres avant
                    qu'il ne soit transmis.
                  </td>
                </tr>
                <tr>
                  <td>
                    Il n'est pas nécessaire d'initialiser la valeur d'un
                    paramètre avant de revenir à la méthode appelante.
                  </td>
                  <td>
                    Il est nécessaire d'initialiser la valeur d'un paramètre
                    avant de revenir à la méthode appelante.
                  </td>
                </tr>
                <tr>
                  <td>
                    Le passage de la valeur via le paramètre ref est utile
                    lorsque la méthode appelée doit également modifier la valeur
                    du paramètre passé.
                  </td>
                  <td>
                    La déclaration du paramètre via le paramètre out est utile
                    lorsqu'une méthode renvoie plusieurs valeurs.
                  </td>
                </tr>
                <tr>
                  <td>
                    Lorsque le mot-clé ref est utilisé, les données peuvent
                    passer dans les deux sens.
                  </td>
                  <td>
                    Lorsque le mot-clé out est utilisé, les données ne sont
                    transmises qu'en unidirectionnel.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="in">
            <h6>in</h6>
            <div>
              <p>
                <code>in</code> est à utiliser avec une structure pour améliorer
                les performances en déclarant que la valeur ne sera pas
                modifiée. Lors de l'utilisation avec des types de référence,
                cela vous empêche uniquement d'attribuer une nouvelle référence.
              </p>
              <Highlight language="csharp">
                {`static void Enroll(in Student student)
{
  // With in assigning a new object would throw an error
  // student = new Student();

  // We can still do this with reference types though
  student.Enrolled = true;
}`}
              </Highlight>
            </div>
          </article>
          <article id="limit">
            <h6>Limitations</h6>
            <ul>
              <li>
                Il est important de noter que <code>in</code>, <code>out</code>,
                et <code>ref</code> ne peuvent pas être utilisés dans les
                méthodes avec le <code>async</code> modificateur. Vous pouvez
                cependant les utiliser dans des méthodes synchrones qui
                renvoient une tâche.
              </li>
              <li>
                On ne peut pas les utiliser dans les méthodes d'itérateur qui
                ont un <code>yield return</code> ou l'un ou l'
                <code>yield break</code> autre.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
