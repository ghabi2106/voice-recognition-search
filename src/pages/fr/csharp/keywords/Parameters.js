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
          <h3>Param??tres de m??thode</h3>
          <article id="introduction">
            <h6>Param??tres de m??thode</h6>
            <div>
              <ul>
                <li>
                  <code>params</code> sp??cifie que ce param??tre peut prendre un
                  nombre variable d???arguments.
                </li>
                <li>
                  <code>in</code> est utilis?? pour indiquer que le param??tre
                  pass?? <b>ne peut pas</b> ??tre modifi?? par la m??thode
                </li>
                <li>
                  <code>ref</code> est utilis?? pour indiquer que le param??tre
                  pass?? <b>peut</b> ??tre modifi?? par la m??thode.
                </li>
                <li>
                  <code>out</code> est utilis?? pour indiquer que le param??tre
                  pass?? <b>doit</b> ??tre modifi?? par la m??thode.
                </li>
              </ul>
              <p>
                Les deux <code>ref</code> et <code>in</code> n??cessitent que le
                param??tre ait ??t?? initialis?? avant d'??tre pass?? ?? une m??thode.
                Le <code>out</code> modificateur ne l'exige pas et n'est
                g??n??ralement pas initialis?? avant d'??tre utilis?? dans une
                m??thode.
              </p>
            </div>
          </article>
          <article id="params">
            <h6>params</h6>
            <div>
              <p>
                Avec le mot cl?? <code>params</code>, vous pouvez sp??cifier un
                param??tre de m??thode qui prend un nombre variable d???arguments.
                Le type de param??tre doit ??tre un tableau unidimensionnel.
              </p>
              <p>
                Lorsque vous appelez une m??thode avec un <code>params</code>{" "}
                param??tre, vous pouvez passer&nbsp;:
              </p>
              <ul>
                <li>
                  Liste s??par??e par des virgules des arguments du type des
                  ??l??ments du tableau.
                </li>
                <li>Tableau d???arguments du type sp??cifi??.</li>
                <li>
                  Aucun argument. Si vous n???envoyez aucun argument, la longueur
                  de la liste <code>params</code> est ??gale ?? z??ro.
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
              Le <code>out</code> est utilis?? pour passer les arguments aux
              m??thodes en tant que type de r??f??rence. Il est g??n??ralement
              utilis?? lorsqu'une m??thode renvoie plusieurs valeurs.
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
                    Il faut que les param??tres s'initialisent avant de passer ??
                    ref.
                  </td>
                  <td>
                    Il n'est pas n??cessaire d'initialiser les param??tres avant
                    qu'il ne soit transmis.
                  </td>
                </tr>
                <tr>
                  <td>
                    Il n'est pas n??cessaire d'initialiser la valeur d'un
                    param??tre avant de revenir ?? la m??thode appelante.
                  </td>
                  <td>
                    Il est n??cessaire d'initialiser la valeur d'un param??tre
                    avant de revenir ?? la m??thode appelante.
                  </td>
                </tr>
                <tr>
                  <td>
                    Le passage de la valeur via le param??tre ref est utile
                    lorsque la m??thode appel??e doit ??galement modifier la valeur
                    du param??tre pass??.
                  </td>
                  <td>
                    La d??claration du param??tre via le param??tre out est utile
                    lorsqu'une m??thode renvoie plusieurs valeurs.
                  </td>
                </tr>
                <tr>
                  <td>
                    Lorsque le mot-cl?? ref est utilis??, les donn??es peuvent
                    passer dans les deux sens.
                  </td>
                  <td>
                    Lorsque le mot-cl?? out est utilis??, les donn??es ne sont
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
                <code>in</code> est ?? utiliser avec une structure pour am??liorer
                les performances en d??clarant que la valeur ne sera pas
                modifi??e. Lors de l'utilisation avec des types de r??f??rence,
                cela vous emp??che uniquement d'attribuer une nouvelle r??f??rence.
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
                et <code>ref</code> ne peuvent pas ??tre utilis??s dans les
                m??thodes avec le <code>async</code> modificateur. Vous pouvez
                cependant les utiliser dans des m??thodes synchrones qui
                renvoient une t??che.
              </li>
              <li>
                On ne peut pas les utiliser dans les m??thodes d'it??rateur qui
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
