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
          <h3>Différence entre Struct et Class en C#</h3>
          <article id="struct">
            <h6>Struct</h6>
            <div>
              <p>
                Les structs sont des versions allégées des classes. Ils sont des
                types valeur partagent de nombreuses fonctionnalités avec les
                classes, mais avec les limitations comme:
              </p>
              <ul>
                <li>
                  Struct ne peut pas avoir de constructeur par défaut ou de
                  destructeur.
                </li>
                <li>
                  Les structures sont des types de valeur et sont copiées lors
                  de l'affectation.
                </li>
                <li>
                  Une structure ne peut pas hériter d'une autre structure ou
                  classe, et elle ne peut pas être la base d'une classe
                </li>
                <li>
                  Les Struct ne peuvent pas être abstruct, il sont implicitement
                  sealed
                </li>
                <li>
                  Les membres de fonction dans une structure ne peuvent pas être
                  abstraits ou virtuels, et le modificateur{" "}
                  <code>override</code> n'est autorisé que pour les méthodes
                  override héritées de System.ValueType.
                </li>
                <li>Une structure peut implémenter des interfaces.</li>
              </ul>
              <p>
                Il est logique d'utiliser des structures dans les scénarios
                suivants combinés :
              </p>
              <ul>
                <li>quand les données sont simples</li>
                <li>
                  peut avoir toutes les valeurs attribuées lors de sa création
                </li>
                <li>lorsque la performance est critique pour le système</li>
                <li>les objets sont de courte durée</li>
              </ul>
            </div>
          </article>
          <article id="records">
            <h6>Record</h6>
            <div>
              <p>
                Record définit un reference-type immutable et se comporte comme
                un value-type.
              </p>
              <p>
                Les records prennent en charge l'héritage. On èvite seulement le
                quatrième étage d'héritage, on put le rendre <code>sealed</code>
                .
              </p>
              <img src="/img/dotnet/record1.png" alt="record" />
              <img src="/img/dotnet/record2.png" alt="record" />
            </div>
          </article>
          <article id="object">
            <h6>Qu'est-ce qu'un objet ?</h6>
            <p>
              Un objet est une instance d'une classe à travers laquelle nous
              accédons aux méthodes de cette classe. Le mot-clé "new" est
              utilisé pour créer un objet. Une classe qui crée un objet en
              mémoire contiendra les informations sur les méthodes, les
              variables et le comportement de cette classe.
            </p>
          </article>
          <article id="class">
            <h6>Qu'est-ce que la classe ?</h6>
            <p>
              Les classes sont un plan ou un ensemble d'instructions pour
              construire un type d'objet spécifique. C'est un concept de base de
              la programmation orientée objet qui tourne autour des entités de
              la vie réelle. La classe en C# détermine le comportement d'un
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
                  <td>La classe est la définition d'un objet</td>
                  <td>Un objet est une instance d'une classe.</td>
                </tr>
                <tr>
                  <td>C'est un modèle de l'objet</td>
                  <td>
                    Une classe ne devient un objet que si elle est instanciée
                  </td>
                </tr>
                <tr>
                  <td>Il décrit toutes les méthodes, propriétés, etc.</td>
                  <td>
                    Un objet est utilisé pour accéder à toutes ces propriétés de
                    la classe.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="constructor-type">
            <h6>Quels sont les différents types de constructeurs en c# ?</h6>
            <ul>
              <li>Constructeur par défaut</li>
              <li>Constructeur paramétré</li>
              <li>Copier le constructeur</li>
              <li>Constructeur statique</li>
              <li>Constructeur privé</li>
            </ul>
          </article>
          <article id="serialization">
            <h6>Qu'est-ce que la sérialisation ?</h6>
            <div>
              <p>
                La sérialisation en C# est le processus de conversion d'un objet
                en un flux d'octets pour stocker l'objet en mémoire , une base
                de données ou un fichier. Son objectif principal est de
                sauvegarder l'état d'un objet afin de pouvoir le recréer en cas
                de besoin. Le processus inverse est appelé désérialisation.
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
