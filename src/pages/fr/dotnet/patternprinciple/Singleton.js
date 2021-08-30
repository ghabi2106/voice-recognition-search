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
                    to="/designpattern"
                  >
                    Design Pattern
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
              Singleton est un patron de conception de création qui garantit que
              l’instance d’une classe n’existe qu’en un seul exemplaire, tout en
              fournissant un point d’accès global à cette instance.
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
              <li>Constructeur unique privé et sans paramètre</li>
              <li>Sealed class.</li>
              <li>
                Variable statique pour contenir une référence à l'instance
                unique créée
              </li>
              <li>
                Une propriété public et statique d'obtenir la référence à l'instance
                créée.
              </li>
            </ul>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <ul>
              <li>
                <strong>Facades:</strong> On peut également créer des connexions
                de base de données en tant que Singleton, ce qui peut améliorer
                les performances de l'application.
              </li>
              <li>
                <strong>Logs:</strong> dans une application, effectuer
                l'opération d'E/S sur un fichier est une opération coûteuse. Si
                vous créez votre Logger en tant que Singleton, cela améliorera
                les performances de l'opération d'E/S.
              </li>
              <li>
                <strong>Data sharing:</strong> si vous avez des valeurs
                constantes ou des valeurs de configuration, vous pouvez
                conserver ces valeurs dans Singleton afin qu'elles puissent être
                lues par d'autres composants de l'application.
              </li>
              <li>
                <strong>Caching:</strong> comme nous le savons, récupérer les
                données d'une base de données est un processus qui prend du
                temps. Dans une application, On peut mettre en cache le
                maître et la configuration en mémoire ce qui évitera les appels
                de DB. Dans de telles situations, la classe Singleton peut être
                utilisée pour gérer la mise en cache avec la synchronisation des
                threads de manière efficace, ce qui améliore considérablement
                les performances de l'application.
              </li>
            </ul>
          </article>
          <article id="advantages">
            <h6>Avantages</h6>
            <ul>
              <li>S'assurer qu'une classe n'a qu'une seule instance</li>
              <li>Accéder facilement à l'instance unique d'une classe</li>
              <li>Contrôler son instanciation</li>
              <li>Restreindre le nombre d'instances</li>
              <li>Accéder à une variable globale</li>
            </ul>
          </article>
          <article id="disadvantages">
            <h6>Disavantages</h6>
            <ul>
              <li>
                Les tests unitaires sont un peu difficiles car ils introduisent
                un état global dans une application
              </li>
              <li>
                Réduit le potentiel de parallélisme au sein d'un programme en se
                verrouillant.
              </li>
            </ul>
          </article>
          <article id="not-thread-safe">
            <h6>not thread-safe</h6>
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
          </article>
          <article id="simple-thread-safety">
            <h6>simple thread-safety</h6>
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
