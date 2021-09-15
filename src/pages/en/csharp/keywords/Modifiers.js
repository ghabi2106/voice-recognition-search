import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Struct() {
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
                    href="#access-modifiers"
                  >
                    Access Modifiers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#non-access-modifiers"
                  >
                    Non-Access Modifiers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#const-readonly"
                  >
                    const vs readonly
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#abstruct-interface"
                  >
                    abstruct vs interface
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#new"
                  >
                    new
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
          <h3>Modifiers</h3>
          <article id="access-modifiers">
            <h6>Access Modifiers</h6>
            <div>
              <p>Access Modifiers - controls the access level</p>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Modifier</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>public</code>
                    </td>
                    <td>The class is accessible by any other class</td>
                  </tr>
                  <tr>
                    <td>
                      <code>private</code>
                    </td>
                    <td>
                      The code is only accessible within the declared class
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>protected</code>
                    </td>
                    <td>
                      The code is accessible in the same package and subclasses.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>internal</code>
                    </td>
                    <td>
                      The code is only accessible within its own assembly.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>protected internal</code>
                    </td>
                    <td>
                      The code can be accessed by any code in the assembly in
                      which it's declared, or from within a derived class in
                      another assembly.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>private protected</code>
                    </td>
                    <td>
                      The code can be accessed only within its declaring
                      assembly, by code in the same class or in a type that is
                      derived from that class.
                    </td>
                  </tr>
                </tbody>
              </table>
              <table class="table table-bordered">
                <caption>Table 1</caption>
                <thead>
                  <tr>
                    <th>Caller's location</th>
                    <th>
                      <code>public</code>
                    </th>
                    <th>
                      <code>protected internal</code>
                    </th>
                    <th>
                      <code>protected</code>
                    </th>
                    <th>
                      <code>internal</code>
                    </th>
                    <th>
                      <code>private protected</code>
                    </th>
                    <th>
                      <code>private</code>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <em>
                        <strong>Within the assembly</strong>
                      </em>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Within the class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Derived class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>Non-derived class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>
                      <em>
                        <strong>In an external assembly</strong>
                      </em>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>Derived class</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                  </tr>
                  <tr>
                    <td>Non-derived class</td>
                    <td>✔</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                    <td>❌</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="non-access-modifiers">
            <h6>Non-Access Modifiers</h6>
            <div>
              <p>
                Non-Access Modifiers - do not control access level, but provides
                other functionality.
              </p>
              <table class="table table-bordered">
                <tbody>
                  <tr>
                    <th>Modifier</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>
                      <code>sealed</code>
                    </td>
                    <td>sealed class cannot be inherited.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>abstract</code>
                    </td>
                    <td>
                      Abstract class is a restricted class that cannot be used
                      to create objects (to access it, it must be inherited from
                      another class).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>static</code>
                    </td>
                    <td>
                      A static means something which cannot be instantiated. You
                      cannot create an object of a static class and cannot
                      access static members using an object.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>virtual</code>
                    </td>
                    <td>
                      The virtual method is a method that can be redefined in
                      derived classes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>override</code>
                    </td>
                    <td>
                      An override method provides a new implementation of the
                      method inherited from a base class.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>readonly</code>
                    </td>
                    <td>
                      <code>readonly</code> indicates that assignment to the
                      field can only occur as part of the declaration or in a
                      constructor in the same class. A readonly field can be
                      assigned and reassigned multiple times within the field
                      declaration and constructor.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>const</code>
                    </td>
                    <td>
                      <p>
                        The <code>readonly</code> keyword differs from the{" "}
                        <code>const</code> keyword. A <code>const</code> field
                        can only be initialized at the declaration of the field.
                        A <code>readonly</code> field can be initialized either
                        at the declaration or in a constructor. Therefore,{" "}
                        <code>readonly</code> fields can have different values
                        depending on the constructor used. Also, although a{" "}
                        <code>const</code> field is a compile-time constant, the{" "}
                        <code>readonly</code> field can be used for run-time
                        constants.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>volatile</code>
                    </td>
                    <td>
                      The <code>volatile</code> keyword indicates that a field
                      might be modified by multiple threads that are executing
                      at the same time
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>unsafe</code>
                    </td>
                    <td>
                      The <code>unsafe</code> keyword denotes an unsafe context,
                      which is required for any operation involving pointers.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>extern</code>
                    </td>
                    <td>
                      <p>
                        The <code>extern</code> modifier is used to declare a
                        method that is implemented externally. A common use of
                        the <code>extern</code> modifier is with the{" "}
                        <code>DllImport</code> attribute when you are using
                        Interop services to call into unmanaged code. In this
                        case, the method must also be declared as{" "}
                        <code>static</code>
                      </p>
                      <Highlight language="csharp">
                        {`[DllImport("avifil32.dll")]
private static extern void AVIFileInit();`}
                      </Highlight>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="const-readonly">
            <h6>const vs readonly</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Constants</strong>
                  </td>
                  <td>
                    <strong>Read-only Variables</strong>
                  </td>
                </tr>
                <tr>
                  <td>Evaluated at compile time</td>
                  <td>Evaluated at run-time</td>
                </tr>
                <tr>
                  <td>Support only value type variables</td>
                  <td>They can hold the reference type variables</td>
                </tr>
                <tr>
                  <td>
                    They are used when the value is not changing at compile time
                  </td>
                  <td>
                    Used when the actual value is unknown before the run-time
                  </td>
                </tr>
                <tr>
                  <td>
                    Cannot be initialized at the time of declaration or in a
                    constructor
                  </td>
                  <td>
                    Can be initialized at the time of declaration or in a
                    constructor
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="abstruct-interface">
            <h6>class abstruct vs interface</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Interface</strong>
                  </td>
                  <td>
                    <strong>Abstract Class</strong>
                  </td>
                </tr>
                <tr>
                  <td>
                    An interface merely declares a contract or behavior that
                    implementing classes should have.
                  </td>
                  <td>
                    An abstract class provides a partial implementation for a
                    functionality that must be implemented by the inheriting
                    entities.
                  </td>
                </tr>
                <tr>
                  <td>
                    An interface may declare only properties, methods and events
                    with no access modifier.
                  </td>
                  <td>An abstract class declares fields too.</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="new">
            <h6>new (Method hiding)</h6>
            <div>
              <p>
                When used as a declaration modifier, the <code>new</code>{" "}
                keyword explicitly hides a member that is inherited from a base
                class. When you hide an inherited member, the derived version of
                the member replaces the base class version.
              </p>
              <Highlight language="csharp">
                {`public class BaseC
{
    public static int x = 55;
    public static int y = 22;
}

public class DerivedC : BaseC
{
    // Hide field 'x'.
    new public static int x = 100;

    static void Main()
    {
        // Display the new value of x:
        Console.WriteLine(x);

        // Display the hidden value of x:
        Console.WriteLine(BaseC.x);

        // Display the unhidden member y:
        Console.WriteLine(y);
    }
}
/*
Output:
100
55
22
*/`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
