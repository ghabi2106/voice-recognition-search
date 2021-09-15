import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Thisbase() {
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
                    href="#this"
                  >
                    this
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#base"
                  >
                    base
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
          <h3>base &amp; this</h3>
          <article id="this">
            <h6>this keyword</h6>
            <div>
              <p>
                Le mot clé <code>this</code> fait référence à l’instance
                actuelle de la classe et est également utilisé comme
                modificateur du premier paramètre d’une méthode d’extension.
              </p>
              <p>
                Voici quelques utilisations courantes de <code>this</code>
                &nbsp;:
              </p>
              <ul>
                <li>
                  <p>
                    Pour qualifier des membres masqués par des noms similaires :
                  </p>
                  <Highlight language="csharp">
                    {`public class Employee
{
    private string alias;
    private string name;

    public Employee(string name, string alias)
    {
        // Use this to qualify the members of the class
        // instead of the constructor parameters.
        this.name = name;
        this.alias = alias;
    }
}`}
                  </Highlight>
                </li>
                <li>
                  <p>
                    Pour passer un objet comme paramètre à d’autres méthodes :
                  </p>
                  <Highlight language="csharp">{`CalcTax(this);`}</Highlight>
                </li>
                <li>
                  <p>Pour déclarer des indexeurs :</p>
                  <Highlight language="csharp">
                    {`public int this[int param]
{
    get { return array[param]; }
    set { array[param] = value; }
}`}
                  </Highlight>
                </li>
              </ul>
            </div>
          </article>
          <article id="base">
            <h6>base keyword</h6>
            <div>
              <p>
                Le mot clé <code>base</code> sert à accéder aux membres de la
                classe de base à partir d’une classe dérivée&nbsp;:
              </p>
              <ul>
                <li>
                  <p>
                    Il appelle une méthode de la classe de base qui a été
                    substituée par une autre méthode.
                  </p>
                </li>
                <li>
                  <p>
                    Il spécifie quel constructeur de classe de base doit être
                    appelé lors de la création d’instances de la classe dérivée.
                  </p>
                </li>
              </ul>
              <Highlight language="csharp">
                {`class Employee : Person
{
    public string id = "ABC567EFG";
    public override void GetInfo()
    {
        // Calling the base class GetInfo method:
        base.GetInfo();
        Console.WriteLine("Employee ID: {0}", id);
    }
}`}
              </Highlight>
              <Highlight language="csharp">
                {`public class DerivedClass : BaseClass
{
    // This constructor will call BaseClass.BaseClass()
    public DerivedClass() : base()
    {
    }

    // This constructor will call BaseClass.BaseClass(int i)
    public DerivedClass(int i) : base(i)
    {
    }

    static void Main()
    {
        DerivedClass md = new DerivedClass();
        DerivedClass md1 = new DerivedClass(1);
    }
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
