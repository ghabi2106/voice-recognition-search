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
          <h3>Délégués</h3>
          <article id="delegate">
            <h6>Delegate</h6>
            <div>
              <p>
                Les délégués sont similaires aux pointeurs vers des fonctions,
                en C ou C++. Un délégué est une variable de type référence qui
                contient la référence à une méthode. La référence peut être
                modifiée au moment de l'exécution.
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
                <code>Func</code> est un délégué générique. Il a zéro ou
                plusieurs paramètres d'entrée et un paramètre de sortie.
              </p>
              <ul>
                <li>Le type délégué Func doit retourner une valeur.</li>
                <li>
                  Le type de délégué Func peut avoir de zéro à 16 paramètres
                  d'entrée.
                </li>
                <li>
                  Le délégué Func n'autorise pas les paramètres ref et out.
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
                Un délégué de type Action est le même que le délégué Func, sauf
                que le délégué Action ne renvoie pas de valeur. En d'autres
                termes, un délégué Action peut être utilisé avec une méthode qui
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
                Le délégué de prédicat prend un paramètre d'entrée et un type de
                retour booléen.
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
                Un événement est une notification envoyée par un objet pour
                signaler l'occurrence d'une action. Les événements dans .NET
                suivent le modèle de conception d'observateur . La classe qui
                déclenche des événements est appelée Publisher et la classe qui
                reçoit la notification est appelée Subscriber . Il peut y avoir
                plusieurs abonnés à un même événement.
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
                      Un délégué est déclaré à l'aide du mot-clé delegate.
                    </td>
                    <td>Un événement est déclaré à l'aide du mot-clé event.</td>
                  </tr>
                  <tr>
                    <td>
                      Delegate est un pointeur de fonction. Il contient la
                      référence d'une ou plusieurs méthodes à l'exécution
                      (runtime).
                    </td>
                    <td>
                      L'événement est un mécanisme de notification qui dépend
                      des délégués
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Le délégué est indépendant et ne dépend pas des
                      événements.
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
                      Un délégué peut être passé comme paramètre de méthode.
                    </td>
                    <td>
                      Un événement est déclenché mais ne peut pas être passé en
                      tant que paramètre de méthode.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      L'opérateur = est utilisé pour affecter une seule méthode
                      et l'opérateur += est utilisé pour affecter plusieurs
                      méthodes à un délégué.
                    </td>
                    <td>
                      L'opérateur = ne peut pas être utilisé avec des
                      événements, et seuls les opérateurs += et -= peuvent être
                      utilisés avec un événement qui ajoute ou supprime un
                      gestionnaire d'événements. Ces méthodes appellent en
                      interne les méthodes AddEventHandler et
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
