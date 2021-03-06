import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Advanced() {
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
                    href="#marshaling"
                  >
                    Type marshaling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#platform-invoke"
                  >
                    Platform Invoke (P/Invoke)
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#simd"
                  >
                    Use SIMD-accelerated numeric types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#simd-accelerated-types"
                  >
                    .NET SIMD-accelerated types
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
          <h3>Advanced Topics</h3>
          <article id="marshaling">
            <h6>Type marshaling</h6>
            <div>
              <p>
                Le <strong>marshaling</strong> est le processus qui consiste ??
                transformer les types quand ils doivent naviguer entre du code
                manag?? et du code natif.
              </p>
              <p>
                La raison pour laquelle le marshaling est n??cessaire est que les
                types diff??rent entre le code manag?? et le code non manag??. Dans
                le code manag??, par exemple, vous avez un <code>String</code> ,
                tandis que dans les cha??nes universelles non manag??es peuvent
                ??tre Unicode (?? larges ??), non-Unicode, null-terminated, ASCII,
                etc.
              </p>
              <Highlight language="csharp">
                {`[DllImport("somenativelibrary.dll")]
static extern int MethodA([MarshalAs(UnmanagedType.LPStr)] string parameter);`}
              </Highlight>
            </div>
          </article>
          <article id="platform-invoke">
            <h6>Appel de code non manag?? (P/Invoke)</h6>
            <div>
              <p>
                P/Invoke est une technologie qui vous permet d???acc??der aux
                structures, aux rappels et aux fonctions des biblioth??ques non
                manag??es ?? partir de votre code manag??. Une grande partie de
                l???API P/Invoke est contenue dans deux espaces de noms :{" "}
                <code>System</code> et{" "}
                <code>System.Runtime.InteropServices</code>. Utiliser ces deux
                espaces de noms vous donne les outils pour d??crire la fa??on dont
                vous voulez communiquer avec le composant natif.
              </p>
              <Highlight language="csharp">{`using System;
using System.Runtime.InteropServices;

public class Program
{
    // Import user32.dll (containing the function we need) and define
    // the method corresponding to the native function.
    [DllImport("user32.dll", CharSet = CharSet.Unicode, SetLastError = true)]
    private static extern int MessageBox(IntPtr hWnd, string lpText, string lpCaption, uint uType);

    public static void Main(string[] args)
    {
        // Invoke the function as a regular managed method.
        MessageBox(IntPtr.Zero, "Command-line message box", "Attention!", 0);
    }
}`}</Highlight>
            </div>
          </article>
          <article id="simd">
            <h6>Types num??riques SIMD acc??l??r??s</h6>
            <div>
              <p>
                SIMD (instruction unique, plusieurs donn??es) fournit une prise
                en charge mat??rielle pour effectuer une op??ration sur plusieurs
                ??l??ments de donn??es, en parall??le, ?? l???aide d???une seule
                instruction. Dans .NET, il existe un ensemble de types acc??l??r??s
                SIMD sous l' System.Numerics espace de noms. Les op??rations SIMD
                peuvent ??tre parall??les au niveau du mat??riel. Cela augmente le
                d??bit des calculs vectoris??s, couramment utilis??s dans les
                applications math??matiques, scientifiques et graphiques.
              </p>
            </div>
          </article>
          <article id="simd-accelerated-types">
            <h6>.NET SIMD-accelerated types</h6>
            <div>
              <p>
                Les types acc??l??r??s par le .NET SIMD incluent les types suivants
                :
              </p>
              <ul>
                <li>
                  Les types <code>Vector2</code>, <code>Vector3</code> et{" "}
                  <code>Vector4</code>, qui repr??sentent des vecteurs ?? 2, 3 et
                  4 valeurs Single.
                </li>
                <li>
                  Deux types de matrices, <code>Matrix3x2</code> , qui
                  repr??sente une matrice matrice, et <code>Matrix4x4</code> ,
                  qui repr??sente une matrice 4x4 de Single valeurs.
                </li>
                <li>
                  <code>Plane</code> type, qui repr??sente un plan dans l???espace
                  tridimensionnel ?? l???aide de Single valeurs.
                </li>
                <li>
                  <code>Quaternion</code> qui repr??sente un vecteur utilis?? pour
                  encoder des rotations physiques en trois dimensions ?? l???aide
                  de Single valeurs.
                </li>
                <li>
                  Le type <code>Vector&lt;T&gt;</code>, qui repr??sente un
                  vecteur d???un type num??rique sp??cifi?? et fournit un large
                  ??ventail d???op??rateurs b??n??ficiant d???un support SIMD. Le nombre
                  d???une <code>Vector&lt;T&gt;</code> instance est fixe pour la
                  dur??e de vie d???une application, mais sa valeur{" "}
                  <code>Vector&lt;T&gt;.Count</code> d??pend de l???UC de
                  l???ordinateur qui ex??cute le code.
                </li>
              </ul>
              <p>
                Le <code>Vector&lt;T&gt;</code> type n???est pas inclus dans le
                .NET Framework. Vous devez installer le package NuGet
                System.Numerics.Vectors pour acc??der ?? ce type.
              </p>
              <Highlight language="csharp">
                {`var m1 = new Matrix4x4(
            1.1f, 1.2f, 1.3f, 1.4f,
            2.1f, 2.2f, 3.3f, 4.4f,
            3.1f, 3.2f, 3.3f, 3.4f,
            4.1f, 4.2f, 4.3f, 4.4f);

var m2 = Matrix4x4.Transpose(m1);
var mResult = Matrix4x4.Multiply(m1, m2);`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
