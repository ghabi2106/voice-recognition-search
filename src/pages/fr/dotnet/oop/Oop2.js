import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Oop2() {
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
                    href="association"
                  >
                    Association
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#aggregation"
                  >
                    Aggregation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#composition"
                  >
                    Composition
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#aggregation-composition"
                  >
                    Aggregation vs Composition
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
          <h3>OOP 2</h3>
          <article id="association">
            <h6>Association</h6>
            <div>
              <p>
                L'association est une relation sémantiquement faible (une
                dépendance sémantique) entre des objets par ailleurs sans
                rapport. Une association est une relation «d'utilisation» entre
                deux objets ou plus dans laquelle les objets ont leur propre
                durée de vie et il n'y a pas de propriétaire.
              </p>
              <p>
                À titre d'exemple, imaginez la relation entre un médecin et un
                patient. Un médecin peut être associé à plusieurs patients. Dans
                le même temps, un patient peut consulter plusieurs médecins pour
                un traitement ou une consultation. Chacun de ces objets a son
                propre cycle de vie et il n'y a pas de «propriétaire» ou de
                parent. Les objets qui font partie de la relation d'association
                peuvent être créés et détruits indépendamment.
              </p>
              <p>
                L'association est une relation entre deux classes distinctes qui
                s'établit à travers leurs objets. L'association peut être
                un-à-un, un-à-plusieurs, plusieurs-à-un, plusieurs-à-plusieurs.
              </p>
              <img
                src="/img/dotnet/association-aggregation-composition.png"
                alt="association-aggregation-composition"
              />
            </div>
          </article>
          <article id="aggregation">
            <h6>Aggregation (HAS-A Relationship)</h6>
            <div>
              <p>
                <strong>L'agrégation</strong> est un processus dans lequel une
                classe définit une autre classe en tant que référence d'entité.
                C'est une autre façon de réutiliser la classe. C'est une forme
                d'association qui représente la relation HAS-A.
              </p>
              <p>C'est une forme particulière d'Association où :</p>
              <ul>
                <li>
                  Il représente la relation <strong>Has-A</strong> .
                </li>
                <li>
                  C'est une <strong>association unidirectionnelle,</strong>{" "}
                  c'est-à-dire une relation à sens unique. Par exemple, un
                  département peut avoir des étudiants mais l'inverse n'est pas
                  possible et donc de nature unidirectionnelle.
                </li>
                <li>
                  Dans l'agrégation, les{" "}
                  <strong>
                    deux entrées peuvent survivre individuellement,
                  </strong>{" "}
                  ce qui signifie que la fin d'une entité n'affectera pas
                  l'autre entité
                </li>
              </ul>
              <img
                src="/img/dotnet/Aggregation-300x227.jpeg"
                alt="Aggregation-300x227"
              />
              <Highlight language="csharp">
                {`using System;  
public class Address  
{  
    public string addressLine, city, state;  
    public Address(string addressLine, string city, string state)  
    {  
        this.addressLine = addressLine;  
        this.city = city;  
        this.state = state;  
    }  
}  
   public class Employee  
    {  
       public int id;  
       public string name;  
       public Address address;//Employee HAS-A Address  
       public Employee(int id, string name, Address address)  
       {  
           this.id = id;  
           this.name = name;  
           this.address = address;  
       }  
       public void display()  
       {  
           Console.WriteLine(id + " " + name + " " +   
             address.addressLine + " " + address.city + " " + address.state);  
       }  
   }  
   public class TestAggregation  
   {  
        public static void Main(string[] args)  
        {  
            Address a1=new Address("G-13, Sec-3","Noida","UP");  
            Employee e1 = new Employee(1,"Sonoo",a1);  
            e1.display();  
        }  
    }  `}
              </Highlight>
            </div>
          </article>
          <article id="composition">
            <h6>
              <Link
                className="d-inline-flex align-items-center rounded"
                to="/composition"
              >
                Composition
              </Link>
            </h6>
            <div>
              <p>
                La{" "}
                <Link
                  className="d-inline-flex align-items-center rounded"
                  to="/composition"
                >
                  composition
                </Link>{" "}
                est une forme restreinte d'agrégation dans laquelle deux entités
                sont fortement dépendantes l'une de l'autre.
              </p>
              <ul>
                <li>
                  Il représente une <strong>partie de la</strong> relation.
                </li>
                <li>
                  Dans la composition, les deux entités sont dépendantes l'une
                  de l'autre.
                </li>
                <li>
                  Lorsqu'il y a une composition entre deux entités, l'objet
                  composé <strong>ne peut exister</strong> sans l'autre entité.
                </li>
              </ul>
            </div>
          </article>
          <article id="aggregation-composition">
            <h6>
              Aggregation vs{" "}
              <Link
                className="d-inline-flex align-items-center rounded"
                to="/composition"
              >
                Composition
              </Link>
            </h6>
            <ol>
              <li>
                <strong>Dépendance : l'</strong> agrégation implique une
                relation dans laquelle l'enfant{" "}
                <strong>peut exister indépendamment</strong> du parent. Par
                exemple, Banque et Employé, supprimez la Banque et l'Employé
                existe toujours. alors que la composition implique une relation
                où l'enfant <strong>ne peut pas exister indépendamment</strong>{" "}
                du parent. Exemple : Humain et cœur, le cœur n'existe pas
                séparément d'un Humain
              </li>
              <li>
                <strong>Type de relation : la</strong> relation
                d'agrégation est <strong>«has-a»</strong> et la
                composition est <strong>une</strong> relation{" "}
                <strong>«part-of»</strong> .
              </li>
              <li>
                <strong>Type d'association : La</strong> composition est une
                association <strong>forte</strong> alors que l'agrégation est
                une association <strong>faible</strong> .
              </li>
            </ol>
          </article>
        </section>
      </div>
    </>
  );
}
