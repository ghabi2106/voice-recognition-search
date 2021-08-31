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
          <h3>Difference Between Struct And Class</h3>
          <article id="struct">
            <h6>Struct</h6>
            <div>
              <p>
                Structs are light versions of classes. Structs are value types
                and can be used to create objects that behave like built-in
                types.
              </p>
              <ul>
                <li>Struct cannot have a default constructor.</li>
                <li>Structs are value types and are copied on assignment</li>
                <li>
                  A struct cannot inherit from another struct or class, and it
                  cannot be the base of a class.
                </li>
                <li>
                  Struct cannot be a base class. So, Struct types cannot
                  abstract and are always implicitly sealed.
                </li>
                <li>
                  Function members in a struct cannot be abstract or virtual,
                  and the override modifier is allowed only to the override
                  methods inherited from System.ValueType.
                </li>
                <li>A struct can implement interfaces.</li>
              </ul>
              <p>
                It makes sense to use structs in the following scenarios
                combined:
              </p>
              <ul>
                <li>when the data is simple</li>
                <li>can have all the values assigned on its creation</li>
                <li>when the performance is critical for the system</li>
                <li>the objects are short-lived</li>
              </ul>
            </div>
          </article>
          <article id="records">
            <h6>Record</h6>
            <div>
              <p>
                A record type is a refernce type and immutable data type that
                has read-only properties only. Because a record type is
                immutable, it is thread-safe and cannot mutate or change after
                it has been created. You can initialize a record type only
                inside a constructor.
              </p>
              <p>Support for inheritance hierarchies.</p>
              <img src="/img/dotnet/record1.png" alt="record" />
              <img src="/img/dotnet/record2.png" alt="record" />
            </div>
          </article>
          <article id="object">
            <h6>What is an object?</h6>
            <p>
              An object is an instance of a class through which we access the
              methods of that class. “New” keyword is used to create an object.
              A class that creates an object in memory will contain the
              information about the methods, variables, and behavior of that
              class.
            </p>
          </article>
          <article id="class">
            <h6>What is Class?</h6>
            <p>
              Class are a blueprint or a set of instructions to build a specific
              type of object. It is a basic concept of Object-Oriented
              Programming which revolve around the real-life entities. Class in
              C# determines how an object will behave and what the object will
              contain.
            </p>
          </article>
          <article id="class-object">
            <h6>Class vs object</h6>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Class</strong>
                  </td>
                  <td>
                    <strong>Object</strong>
                  </td>
                </tr>
                <tr>
                  <td>Class is the definition of an object</td>
                  <td>An object is an instance of a class.</td>
                </tr>
                <tr>
                  <td>It is a template of the object</td>
                  <td>A class does not become an object unless instantiated</td>
                </tr>
                <tr>
                  <td>It describes all the methods, properties, etc</td>
                  <td>
                    An object is used to access all those properties from the
                    class.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="constructor-type">
            <h6>What are the different types of constructors in c#?</h6>
            <div>
              <p>
                A constructor is a member function in a class that has the same
                name as its class. The constructor is automatically invoked
                whenever an object class is created. It constructs the values of
                data members while initializing the class.
              </p>
              <ul>
                <li>Default Constructor</li>
                <li>Parameterized constructor</li>
                <li>Copy Constructor</li>
                <li>Static Constructor</li>
                <li>Private Constructor</li>
              </ul>
            </div>
          </article>
          <article id="serialization">
            <h6>What is serialization?</h6>
            <div>
              <p>
                Serialization in C# is the process of converting an object into
                a stream of bytes to store the object to memory, a database, or
                a file. Its main purpose is to save the state of an object in
                order to be able to recreate it when needed. The reverse process
                is called deserialization.
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
