import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Singleton() {
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
                    href="#sigleton"
                  >
                    Singleton
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#types"
                  >
                    Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#implementation"
                  >
                    iImplementation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Common Use
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#advantages"
                  >
                    Advantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#disadvantages"
                  >
                    Disadvantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#not-thread-safe"
                  >
                    not thread-safe
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#simple-thread-safety"
                  >
                    simple thread-safety
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#thread-safety-double-check"
                  >
                    attempted thread-safety using double-check locking
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#thread-safe-without-lock"
                  >
                    not quite as lazy, but thread-safe without using locks
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#fully-lazy-instantiation"
                  >
                    fully lazy instantiation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lazy"
                  >
                    using .NET 4's Lazy&lt;T&gt; type
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cleancode"
                  >
                    Clean code
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/command"
                  >
                    Command
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/designpattern"
                  >
                    Design Principle &amp; Pattern
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/di"
                  >
                    Dependency injection
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/factory"
                  >
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mediator"
                  >
                    Mediator
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/observer"
                  >
                    Observer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/singleton"
                  >
                    Singleton
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/solid"
                  >
                    S.O.L.I.D. Principles
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
          <h3>Singleton</h3>
          <article id="singleton">
            <h6>Singleton</h6>
            <p>
              Singleton est un patron de conception de cr??ation qui garantit que
              l???instance d???une classe n???existe qu???en un seul exemplaire, tout en
              fournissant un point d???acc??s global ?? cette instance.
            </p>
          </article>
          <article id="types">
            <h6>Types</h6>
            <ol>
              <li>No Thread Safe Singleton.</li>
              <li>Thread-Safety Singleton.</li>
              <li>Thread-Safety Singleton using Double-Check Locking.</li>
              <li>Thread-safe without a lock.</li>
              <li>Using .NET 4's Lazy&lt;T&gt; type.</li>
            </ol>
          </article>
          <article id="implementation">
            <h6>Implementation</h6>
            <ul>
              <li>Constructeur unique priv?? et sans param??tre</li>
              <li>Sealed class.</li>
              <li>
                Variable statique pour contenir une r??f??rence ?? l'instance
                unique cr????e
              </li>
              <li>
                Une propri??t?? public et statique d'obtenir la r??f??rence ??
                l'instance cr????e.
              </li>
            </ul>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <ul>
              <li>
                <strong>Facades:</strong> On peut ??galement cr??er des connexions
                de base de donn??es en tant que Singleton, ce qui peut am??liorer
                les performances de l'application.
              </li>
              <li>
                <strong>Logs:</strong> dans une application, effectuer
                l'op??ration d'E/S sur un fichier est une op??ration co??teuse. Si
                vous cr??ez votre Logger en tant que Singleton, cela am??liorera
                les performances de l'op??ration d'E/S.
              </li>
              <li>
                <strong>Data sharing:</strong> si vous avez des valeurs
                constantes ou des valeurs de configuration, vous pouvez
                conserver ces valeurs dans Singleton afin qu'elles puissent ??tre
                lues par d'autres composants de l'application.
              </li>
              <li>
                <strong>Caching:</strong> comme nous le savons, r??cup??rer les
                donn??es d'une base de donn??es est un processus qui prend du
                temps. Dans une application, On peut mettre en cache le ma??tre
                et la configuration en m??moire ce qui ??vitera les appels de DB.
                Dans de telles situations, la classe Singleton peut ??tre
                utilis??e pour g??rer la mise en cache avec la synchronisation des
                threads de mani??re efficace, ce qui am??liore consid??rablement
                les performances de l'application.
              </li>
            </ul>
          </article>
          <article id="advantages">
            <h6>Avantages</h6>
            <ul>
              <li>S'assurer qu'une classe n'a qu'une seule instance</li>
              <li>Acc??der facilement ?? l'instance unique d'une classe</li>
              <li>Contr??ler son instanciation</li>
              <li>Restreindre le nombre d'instances</li>
              <li>Acc??der ?? une variable globale</li>
            </ul>
          </article>
          <article id="disadvantages">
            <h6>Disavantages</h6>
            <ul>
              <li>
                Les tests unitaires sont un peu difficiles car ils introduisent
                un ??tat global dans une application
              </li>
              <li>
                R??duit le potentiel de parall??lisme au sein d'un programme en se
                verrouillant.
              </li>
            </ul>
          </article>
          <article id="not-thread-safe">
            <h6>not thread-safe</h6>
            <div>
              <p>
                Deux threads diff??rents auraient tous deux pu ??valuer le test{" "}
                <code>if (instance==null)</code> et le trouver vrai, puis tous
                deux cr??eraient des instances, ce qui viole le mod??le singleton.
                Notez qu'en fait, l'instance peut d??j?? avoir ??t?? cr????e avant que
                l'expression ne soit ??valu??e, mais le mod??le de m??moire ne
                garantit pas que la nouvelle valeur d'instance sera vue par
                d'autres threads ?? moins que des barri??res m??moire appropri??es
                n'aient ??t?? pass??es.
              </p>
              <Highlight language="csharp">
                {`// Bad code! Do not use!
public sealed class Singleton
{
    private static Singleton instance = null;

    private Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new Singleton();
            }
            return instance;
        }
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="simple-thread-safety">
            <h6>simple thread-safety</h6>
            <div>
              <p>
                Le thread prend un verrou sur un objet partag??, puis v??rifie si
                l'instance a ??t?? cr????e ou non avant de cr??er l'instance. Cela
                r??sout le probl??me de la barri??re m??moire (car le verrouillage
                garantit que toutes les lectures se produisent logiquement apr??s
                l'acquisition du verrou, et le d??verrouillage garantit que
                toutes les ??critures se produisent logiquement avant la
                lib??ration du verrou) et garantit qu'un seul thread cr??era une
                instance (comme seul un thread peut ??tre dans cette partie du
                code ?? la fois - au moment o?? le deuxi??me thread y entre, le
                premier thread aura cr???? l'instance, donc l'expression sera
                ??valu??e ?? false). Malheureusement, les performances en p??tissent
                car un verrou est acquis chaque fois que l'instance est
                demand??e.
              </p>
              <Highlight language="csharp">
                {`public sealed class Singleton
{
    private static Singleton instance = null;
    private static readonly object padlock = new object();

    Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            lock (padlock)
            {
                if (instance == null)
                {
                    instance = new Singleton();
                }
                return instance;
            }
        }
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="thread-safety-double-check">
            <h6>attempted thread-safety using double-check locking</h6>
            <Highlight language="csharp">
              {`// Bad code! Do not use!
public sealed class Singleton
{
    private static Singleton instance = null;
    private static readonly object padlock = new object();

    Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            if (instance == null)
            {
                lock (padlock)
                {
                    if (instance == null)
                    {
                        instance = new Singleton();
                    }
                }
            }
            return instance;
        }
    }
}`}
            </Highlight>
          </article>
          <article id="thread-safe-without-lock">
            <h6>not quite as lazy, but thread-safe without using locks</h6>
            <Highlight language="csharp">
              {`public sealed class Singleton
{
    private static readonly Singleton instance = new Singleton();

    // Explicit static constructor to tell C# compiler
    // not to mark type as beforefieldinit
    static Singleton()
    {
    }

    private Singleton()
    {
    }

    public static Singleton Instance
    {
        get
        {
            return instance;
        }
    }
}`}
            </Highlight>
          </article>
          <article id="fully-lazy-instantiation">
            <h6>fully lazy instantiation</h6>
            <Highlight language="csharp">
              {`public sealed class Singleton
{
    private Singleton()
    {
    }

    public static Singleton Instance { get { return Nested.instance; } }

    private class Nested
    {
        // Explicit static constructor to tell C# compiler
        // not to mark type as beforefieldinit
        static Nested()
        {
        }

        internal static readonly Singleton instance = new Singleton();
    }
}`}
            </Highlight>
          </article>
          <article id="lazy">
            <h6>using .NET 4's Lazy&lt;T&gt; type</h6>
            <Highlight language="csharp">
              {`public sealed class Singleton
{
    private static readonly Lazy<Singleton> lazy =
        new Lazy<Singleton>(() => new Singleton());

    public static Singleton Instance { get { return lazy.Value; } }

    private Singleton()
    {
    }
}`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
