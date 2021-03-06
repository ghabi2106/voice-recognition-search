import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Delegate() {
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
                    href="#delegate"
                  >
                    Delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#func"
                  >
                    Func delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#action"
                  >
                    Action delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#predicate"
                  >
                    Predicate delegate
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#events"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#event-delegate"
                  >
                    Event vs Delegate
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
          <h3>D??l??gu??s</h3>
          <article id="delegate">
            <h6>Delegate</h6>
            <div>
              <p>
                Les d??l??gu??s sont similaires aux pointeurs vers des fonctions,
                en C ou C++. Un d??l??gu?? est une variable de type r??f??rence qui
                contient la r??f??rence ?? une m??thode. La r??f??rence peut ??tre
                modifi??e au moment de l'ex??cution.
              </p>
              <Highlight language="csharp">
                {`public delegate void MyDelegate(string msg); // declare a delegate

// set target method
MyDelegate del = new MyDelegate(MethodA);
// or 
MyDelegate del = MethodA; 
// or set lambda expression 
MyDelegate del = (string msg) =>  Console.WriteLine(msg);

// target method
static void MethodA(string message)
{
    Console.WriteLine(message);
}`}
              </Highlight>
              <Highlight language="csharp">
                {`del.Invoke("Hello World!");
// or 
del("Hello World!");`}
              </Highlight>
            </div>
          </article>
          <article id="func">
            <h6>Func Delegate</h6>
            <div>
              <p>
                <code>Func</code> est un d??l??gu?? g??n??rique. Il a z??ro ou
                plusieurs param??tres d'entr??e et un param??tre de sortie.
              </p>
              <ul>
                <li>Le type d??l??gu?? Func doit retourner une valeur.</li>
                <li>
                  Le type de d??l??gu?? Func peut avoir de z??ro ?? 16 param??tres
                  d'entr??e.
                </li>
                <li>
                  Le d??l??gu?? Func n'autorise pas les param??tres ref et out.
                </li>
              </ul>
              <img src="/img/dotnet/delegate-func.png" alt="delegate func" />
              <Highlight language="csharp">
                {`class Program
{
    static int Sum(int x, int y)
    {
        return x + y;
    }

    static void Main(string[] args)
    {
        Func<int,int, int> add = Sum;

        int result = add(10, 10);

        Console.WriteLine(result); 
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="action">
            <h6>Action Delegate</h6>
            <div>
              <p>
                Un d??l??gu?? de type Action est le m??me que le d??l??gu?? Func, sauf
                que le d??l??gu?? Action ne renvoie pas de valeur. En d'autres
                termes, un d??l??gu?? Action peut ??tre utilis?? avec une m??thode qui
                a un type de retour void.
              </p>
              <Highlight language="csharp">
                {`Action<int> printActionDel = ConsolePrint;

//Or

Action<int> printActionDel = new Action<int>(ConsolePrint);`}
              </Highlight>
            </div>
          </article>
          <article id="predicate">
            <h6>Predicate Delegate</h6>
            <div>
              <p>
                Le d??l??gu?? de pr??dicat prend un param??tre d'entr??e et un type de
                retour bool??en.
              </p>
              <Highlight language="csharp">
                {`static bool IsUpperCase(string str)
{
    return str.Equals(str.ToUpper());
}

static void Main(string[] args)
{
    Predicate<string> isUpper = IsUpperCase;

    bool result = isUpper("hello world!!");

    Console.WriteLine(result);
}`}
              </Highlight>
            </div>
          </article>
          <article id="events">
            <h6>Events</h6>
            <div>
              <p>
                Un ??v??nement est une notification envoy??e par un objet pour
                signaler l'occurrence d'une action. Les ??v??nements dans .NET
                suivent le mod??le de conception d'observateur . La classe qui
                d??clenche des ??v??nements est appel??e Publisher et la classe qui
                re??oit la notification est appel??e Subscriber . Il peut y avoir
                plusieurs abonn??s ?? un m??me ??v??nement.
              </p>
            </div>
          </article>
          <article id="event-delegate">
            <h6>Event vs Delegate</h6>
            <div>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th>Delegate</th>
                    <th>Event</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Un d??l??gu?? est d??clar?? ?? l'aide du mot-cl?? delegate.
                    </td>
                    <td>Un ??v??nement est d??clar?? ?? l'aide du mot-cl?? event.</td>
                  </tr>
                  <tr>
                    <td>
                      Delegate est un pointeur de fonction. Il contient la
                      r??f??rence d'une ou plusieurs m??thodes ?? l'ex??cution
                      (runtime).
                    </td>
                    <td>
                      L'??v??nement est un m??canisme de notification qui d??pend
                      des d??l??gu??s
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Le d??l??gu?? est ind??pendant et ne d??pend pas des
                      ??v??nements.
                    </td>
                    <td>
                      An event is dependent on a delegate and cannot be created
                      without delegates. Event is a wrapper around delegate
                      instance to prevent users of the delegate from resetting
                      the delegate and its invocation list and only allows
                      adding or removing targets from the invocation list.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Delegate includes Combine() and Remove() methods to add
                      methods to the invocation list.
                    </td>
                    <td>
                      <a
                        href="https://docs.microsoft.com/en-us/dotnet/api/system.reflection.eventinfo?view=netframework-4.8"
                        target="_blank"
                      >
                        EventInfo
                      </a>{" "}
                      class inspect events and to hook up event handlers that
                      include methods AddEventHandler() and RemoveEventHandler()
                      methods to add and remove methods to invocation list,
                      respectively.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Un d??l??gu?? peut ??tre pass?? comme param??tre de m??thode.
                    </td>
                    <td>
                      Un ??v??nement est d??clench?? mais ne peut pas ??tre pass?? en
                      tant que param??tre de m??thode.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      L'op??rateur = est utilis?? pour affecter une seule m??thode
                      et l'op??rateur += est utilis?? pour affecter plusieurs
                      m??thodes ?? un d??l??gu??.
                    </td>
                    <td>
                      L'op??rateur = ne peut pas ??tre utilis?? avec des
                      ??v??nements, et seuls les op??rateurs += et -= peuvent ??tre
                      utilis??s avec un ??v??nement qui ajoute ou supprime un
                      gestionnaire d'??v??nements. Ces m??thodes appellent en
                      interne les m??thodes AddEventHandler et
                      RemoveEventHandler.
                    </td>
                  </tr>
                </tbody>
              </table>
              <Highlight language="csharp">
                {`public delegate void Notify();
public Notify MyDelegate;

MyDelegate = MyMethod;// valid
MyDelegate += MyMethod;// valid

public delegate void Notify();
public event Notify MyEvent;

MyEvent = MyEventHandler;// Error
MyEvent += MyEventHandler;// valid`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
