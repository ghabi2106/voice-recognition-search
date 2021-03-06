import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Typesystem() {
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
                    href="#struct"
                  >
                    Struct
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#record"
                  >
                    Record
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#object"
                  >
                    Object
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#class"
                  >
                    Class
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#class-object"
                  >
                    class vs object
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#contructor-type"
                  >
                    Constructor types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#serialization"
                  >
                    Serialization
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
          <h3>Diff??rence entre Struct et Class en C#</h3>
          <article id="struct">
            <h6>Struct</h6>
            <div>
              <p>
                Les structs sont des versions all??g??es des classes. Ils sont des
                types valeur partagent de nombreuses fonctionnalit??s avec les
                classes, mais avec les limitations comme:
              </p>
              <ul>
                <li>
                  Struct ne peut pas avoir de constructeur par d??faut ou de
                  destructeur.
                </li>
                <li>
                  Les structures sont des types de valeur et sont copi??es lors
                  de l'affectation.
                </li>
                <li>
                  Une structure ne peut pas h??riter d'une autre structure ou
                  classe, et elle ne peut pas ??tre la base d'une classe
                </li>
                <li>
                  Les Struct ne peuvent pas ??tre abstruct, il sont implicitement
                  sealed
                </li>
                <li>
                  Les membres de fonction dans une structure ne peuvent pas ??tre
                  abstraits ou virtuels, et le modificateur{" "}
                  <code>override</code> n'est autoris?? que pour les m??thodes
                  override h??rit??es de System.ValueType.
                </li>
                <li>Une structure peut impl??menter des interfaces.</li>
              </ul>
              <p>
                Il est logique d'utiliser des structures dans les sc??narios
                suivants combin??s :
              </p>
              <ul>
                <li>quand les donn??es sont simples</li>
                <li>
                  peut avoir toutes les valeurs attribu??es lors de sa cr??ation
                </li>
                <li>lorsque la performance est critique pour le syst??me</li>
                <li>les objets sont de courte dur??e</li>
              </ul>
            </div>
          </article>
          <article id="records">
            <h6>Record</h6>
            <div>
              <p>
                Record d??finit un reference-type immutable et se comporte comme
                un value-type.
              </p>
              <p>
                Les records prennent en charge l'h??ritage. On ??vite seulement le
                quatri??me ??tage d'h??ritage, on put le rendre <code>sealed</code>
                .
              </p>
              <img src="/img/dotnet/record1.png" alt="record" />
              <img src="/img/dotnet/record2.png" alt="record" />
            </div>
          </article>
          <article id="object">
            <h6>Qu'est-ce qu'un objet ?</h6>
            <p>
              Un objet est une instance d'une classe ?? travers laquelle nous
              acc??dons aux m??thodes de cette classe. Le mot-cl?? "new" est
              utilis?? pour cr??er un objet. Une classe qui cr??e un objet en
              m??moire contiendra les informations sur les m??thodes, les
              variables et le comportement de cette classe.
            </p>
          </article>
          <article id="class">
            <h6>Qu'est-ce que la classe ?</h6>
            <p>
              Les classes sont un plan ou un ensemble d'instructions pour
              construire un type d'objet sp??cifique. C'est un concept de base de
              la programmation orient??e objet qui tourne autour des entit??s de
              la vie r??elle. La classe en C# d??termine le comportement d'un
              objet et ce que l'objet contiendra.
            </p>
          </article>
          <article id="class-object">
            <h6>Class vs object</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Classer</strong>
                  </td>
                  <td>
                    <strong>Objet</strong>
                  </td>
                </tr>
                <tr>
                  <td>La classe est la d??finition d'un objet</td>
                  <td>Un objet est une instance d'une classe.</td>
                </tr>
                <tr>
                  <td>C'est un mod??le de l'objet</td>
                  <td>
                    Une classe ne devient un objet que si elle est instanci??e
                  </td>
                </tr>
                <tr>
                  <td>Il d??crit toutes les m??thodes, propri??t??s, etc.</td>
                  <td>
                    Un objet est utilis?? pour acc??der ?? toutes ces propri??t??s de
                    la classe.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="constructor-type">
            <h6>Quels sont les diff??rents types de constructeurs en c# ?</h6>
            <ul>
              <li>Constructeur par d??faut</li>
              <li>Constructeur param??tr??</li>
              <li>Copier le constructeur</li>
              <li>Constructeur statique</li>
              <li>Constructeur priv??</li>
            </ul>
          </article>
          <article id="serialization">
            <h6>Qu'est-ce que la s??rialisation ?</h6>
            <div>
              <p>
                La s??rialisation en C# est le processus de conversion d'un objet
                en un flux d'octets pour stocker l'objet en m??moire , une base
                de donn??es ou un fichier. Son objectif principal est de
                sauvegarder l'??tat d'un objet afin de pouvoir le recr??er en cas
                de besoin. Le processus inverse est appel?? d??s??rialisation.
              </p>
              <img src="/img/dotnet/serialization.jpg" alt="serialization" />
              <Highlight language="csharp">
                {`using System;  
using System.IO;  
using System.Runtime.Serialization;  
using System.Runtime.Serialization.Formatters.Binary;  
public class SerialTest {  
    public void SerializeNow() {  
        ClassToSerialize c = new ClassToSerialize();  
        File f = new File("temp.dat");  
        Stream s = f.Open(FileMode.Create);  
        BinaryFormatter b = new BinaryFormatter();  
        b.Serialize(s, c);  
        s.Close();  
    }  
    public void DeSerializeNow() {  
        ClassToSerialize c = new ClassToSerialize();  
        File f = new File("temp.dat");  
        Stream s = f.Open(FileMode.Open);  
        BinaryFormatter b = new BinaryFormatter();  
        c = (ClassToSerialize) b.Deserialize(s);  
        Console.WriteLine(c.name);  
        s.Close();  
    }  
    public static void Main(string[] s) {  
        SerialTest st = new SerialTest();  
        st.SerializeNow();  
        st.DeSerializeNow();  
    }  
}  
public class ClassToSerialize {  
    public int age = 100;  
    public string name = "bipin";  
}  `}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
