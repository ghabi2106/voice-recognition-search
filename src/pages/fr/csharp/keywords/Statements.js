import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Statements() {
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
                    href="#lock"
                  >
                    lock
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#fixed"
                  >
                    fixed
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#checked"
                  >
                    checked
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#unchecked"
                  >
                    unchecked
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#jump"
                  >
                    jump statements
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
                    to="/modifiers"
                  >
                    Modifiers
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/oop"
                  >
                    OOP
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/statements"
                  >
                    Partial type, lock, yield
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/typesystem"
                  >
                    Struct, Record, Class, Object, Constructor, Serialization
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
          <h3>Mots clés d'instruction</h3>
          <article id="lock">
            <h6>lock</h6>
            <p>
              L’instruction <code>lock</code> obtient le verrou d’exclusion
              mutuelle d’un objet donné, exécute un bloc d’instructions, puis
              libère le verrou. Tant qu’un verrou est maintenu, le thread qui
              contient le verrou peut à nouveau obtenir et libérer le verrou.
              Tout autre thread se voit bloquer l’obtention du verrou et attend
              que ce dernier soit libéré.
            </p>
          </article>
          <article id="fixed">
            <h6>fixed</h6>
            <div>
              <p>
                <p>
                  L’instruction <code>fixed</code> empêche le récupérateur de
                  mémoire (GC) de déplacer une variable mobile. L’instruction{" "}
                  <code>fixed</code> est uniquement autorisée dans un contexte
                  unsafe. Vous pouvez également utiliser le mot clé{" "}
                  <code>fixed</code> pour créer des mémoires tampons de taille
                  fixe.
                </p>
              </p>
              <Highlight language="csharp">
                {`class Point
{
    public int x;
    public int y;
}

unsafe private static void ModifyFixedStorage()
{
    // Variable pt is a managed variable, subject to garbage collection.
    Point pt = new Point();

    // Using fixed allows the address of pt members to be taken,
    // and "pins" pt so that it is not relocated.

    fixed (int* p = &pt.x)
    {
        *p = 1;
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="checked">
            <h6>checked</h6>
            <div>
              <p>
                Le mot clé <code>checked</code> permet d’activer explicitement
                le contrôle de dépassement de capacité(overflow checking) pour
                les conversions et les opérations arithmétiques de type
                intégral.
              </p>
              <Highlight language="csharp">
                {`// If the previous sum is attempted in a checked environment, an
// OverflowException error is raised.

// Checked expression.
Console.WriteLine(checked(2147483647 + ten));

// Checked block.
checked
{
    int i3 = 2147483647 + ten;
    Console.WriteLine(i3);
}`}
              </Highlight>
            </div>
          </article>
          <article id="unchecked">
            <h6>unchecked</h6>
            <div>
              <p>
                Le mot clé <code>unchecked</code> permet de supprimer le
                contrôle de dépassement de capacité (verflow-checking) pour les
                conversions et les opérations arithmétiques de type intégral.
              </p>
              <Highlight language="csharp">
                {`unchecked
{
    int1 = 2147483647 + 10;
}
int1 = unchecked(ConstantMax + 10);`}
              </Highlight>
            </div>
          </article>
          <article id="jump">
            <h6>jump statements</h6>
            <table class="table table-bordered">
              <caption>jump statements</caption>
              <thead>
                <tr>
                  <th>keywords</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <code>break</code>
                  </td>
                  <td>
                    L'instruction <code>break</code> termine la boucle
                    englobante la plus proche ou l'instruction
                    <code>switch</code> dans laquelle elle apparaît. Le contrôle
                    est passé à l’instruction qui suit l’instruction terminée,
                    le cas échéant.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>continue</code>
                  </td>
                  <td>
                    L'instruction <code>continue</code> passe le contrôle à
                    l’itération suivante de l' instruction d’itération
                    englobante dans laquelle elle apparaît.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>goto</code>
                  </td>
                  <td>
                    L’instruction <code>goto</code> transfère le contrôle du
                    programme directement à une instruction étiquetée.
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>return</code>
                  </td>
                  <td>
                    <p>
                      L’instruction <code>return</code> met un terme à
                      l’exécution de la méthode dans laquelle elle apparaît et
                      retourne le contrôle à la méthode d’appel. Elle peut
                      également retourner une valeur facultative. Si la méthode
                      est un type <code>void</code>, l’instruction{" "}
                      <code>return</code> peut être omise.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
