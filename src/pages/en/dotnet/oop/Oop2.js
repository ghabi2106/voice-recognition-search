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
                Association is a semantically weak relationship (a semantic
                dependency) between otherwise unrelated objects. An association
                is a “using” relationship between two or more objects in which
                the objects have their own lifetime and there is no owner.
              </p>
              <p>
                As an example, imagine the relationship between a doctor and a
                patient. A doctor can be associated with multiple patients. At
                the same time, one patient can visit multiple doctors for
                treatment or consultation. Each of these objects has its own
                life cycle and there is no “owner” or parent. The objects that
                are part of the association relationship can be created and
                destroyed independently.
              </p>
              <p>
                Association is relation between two separate classes which
                establishes through their Objects. Association can be
                one-to-one, one-to-many, many-to-one, many-to-many.{" "}
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
                <strong>Aggregation</strong> is a process in which one class
                defines another class as any entity reference. It is another way
                to reuse the class. It is a form of association that represents
                HAS-A relationship.
              </p>
              <p>It is a special form of Association where :</p>
              <ul>
                <li>
                  It represents <strong>Has-A</strong> relationship.
                </li>
                <li>
                  It is a <strong>unidirectional association</strong> i.e. a one
                  way relationship. For example, department can have students
                  but vice versa is not possible and thus unidirectional in
                  nature.
                </li>
                <li>
                  In Aggregation,{" "}
                  <strong> both the entries can survive individually</strong>{" "}
                  which means ending one entity will not effect the other entity
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
                <Link
                  className="d-inline-flex align-items-center rounded"
                  to="/composition"
                >
                  Composition
                </Link>{" "}
                is a restricted form of Aggregation in which two entities are
                highly dependent on each other.{" "}
              </p>
              <ul>
                <li>
                  It represents <strong>part-of</strong> relationship.
                </li>
                <li>
                  In composition, both entities are dependent on each other.
                </li>
                <li>
                  When there is a composition between two entities, the composed
                  object <strong>cannot exist</strong> without the other entity.
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
                <strong>Dependency:</strong> Aggregation implies a relationship
                where the child <strong>can exist independently</strong> of the
                parent. For example, Bank and Employee, delete the Bank and the
                Employee still exist. whereas Composition implies a relationship
                where the child <strong>cannot exist independent</strong> of the
                parent. Example: Human and heart, heart don’t exist separate to
                a Human
              </li>
              <li>
                <strong>Type of Relationship:</strong> Aggregation relation is{" "}
                <strong>“has-a”</strong> and composition is{" "}
                <strong>“part-of”</strong> relation.
              </li>
              <li>
                <strong>Type of association: </strong>Composition is a{" "}
                <strong>strong</strong> Association whereas Aggregation is a{" "}
                <strong>weak</strong> Association.
              </li>
            </ol>
          </article>
        </section>
      </div>
    </>
  );
}
