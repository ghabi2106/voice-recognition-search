import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function ConcurrentCollections() {
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
                    href="#concurrent-dictionary"
                  >
                    ConcurrentDictionary
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#concurrent-queue"
                  >
                    ConcurrentQueue
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#concurrent-stack"
                  >
                    ConcurrentStack
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#concurrent-bag"
                  >
                    ConcurrentBag
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#blocking-collection"
                  >
                    BlockingCollection
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
                    to="/autoresetevent"
                  >
                    AutoResetEvent
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/barrier"
                  >
                    Barrier
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/concurrentcollections"
                  >
                    ConcurrentCollections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/countdownevent"
                  >
                    CountdownEvent
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/deadlock"
                  >
                    deadlock | livelock
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/interlocked"
                  >
                    Interlocked
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/manualresetevent"
                  >
                    ManualResetEvent
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/monitor"
                  >
                    Monitor
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mutex"
                  >
                    Mutex
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parallelloops"
                  >
                    Parallel Loops
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/process"
                  >
                    Process
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/readerwriterlock"
                  >
                    ReaderWriterLock
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/semaphore"
                  >
                    Semaphore
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/spinlock"
                  >
                    SpinLock
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/spinwait"
                  >
                    SpinWait
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/syncprimitives"
                  >
                    Synchronization Primitives
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/task"
                  >
                    Task
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threadpool"
                  >
                    TreadPool
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/timers"
                  >
                    Timers
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
          <h3>Concurrent Collections</h3>
          <article id="concurrent-dictionary">
            <h6>ConcurrentDictionary</h6>
            <div>
              <p>
                Représente une collection thread-safe de paires clé/valeur
                accessibles par plusieurs threads simultanément.
              </p>
              <Highlight language="csharp">
                {`static void Main(string[] args)
{
    ConcurrentDictionary<string, string> dict = new ConcurrentDictionary<string, string>();
    bool firstItem = dict.TryAdd("1", "First");  //returns true
    string itemValue1;
    bool isItemExists1 = dict.TryGetValue("1", out itemValue1);  //returns true
    bool returnTrue = dictionary.TryUpdate("1", "New Value", "First"); //Returns true
    bool result = dictionary.TryRemove("2", out removedItem); //Returns false
    bool firstItemFound = dictionary.ContainsKey("1"); //Returns true
}`}
              </Highlight>
            </div>
          </article>
          <article id="concurrent-queue">
            <h6>ConcurrentQueue</h6>
            <div>
              <p>
                Représente une collection thread-safe de type premier entré,
                premier sorti (FIFO, First-In-First-Out).
              </p>
              <Highlight language="csharp">
                {`int item;
ConcurrentQueue<int> coll = new ConcurrentQueue<int>();
coll.Enqueue(1);
coll.TryPeek(out item);
coll.TryDequeue(out item); 
int count = coll.Count(); 
`}
              </Highlight>
            </div>
          </article>
          <article id="concurrent-stack">
            <h6>ConcurrentStack</h6>
            <div>
              <p>
                Représente une collection thread-safe de type dernier entré,
                premier sorti (LIFO, Last-In-First-Out).
              </p>
              <Highlight language="csharp">
                {`int[] ints = { 1, 2, 3 };
ConcurrentStack<int> stack = new ConcurrentStack<int>();
stack.PushRange(ints);
stack.Push(4);
stack.TryPeek(out item);
stack.TryPop(out item);`}
              </Highlight>
            </div>
          </article>
          <article id="concurrent-bag">
            <h6>ConcurrentBag</h6>
            <div>
              <p>
                Représente une collection d'objets thread-safe, non ordonnée.
              </p>
              <p>les sacs -Bags- prennent en charge les doublons.</p>
              <Highlight language="csharp">
                {`int[] ints = { 1, 2, 3 };
ConcurrentBag<int> bag = new ConcurrentBag<int>(ints);
bag.Add(4);
int item;
bag.TryPeek(out item);
bag.TryTake(out item);
`}
              </Highlight>
            </div>
          </article>
          <article id="blocking-collection">
            <h6>BlockingCollection</h6>
            <div>
              <p>
                Fournit des fonctions bloquantes et englobantes{" "}
                <a
                  data-bs-toggle="collapse"
                  href="#blocking-bounding"
                  role="button"
                  aria-expanded="false"
                  aria-controls="blocking-bounding"
                >
                  - blocking and bounding -
                </a>{" "}
                pour les collections thread-safe qui implémentent
                IProducerConsumerCollection.
              </p>
              <div class="collapse" id="blocking-bounding">
                <p>
                  La délimitation -Bounding- signifie que nous pouvons définir le nombre
                  maximum d'objets que nous pouvons stocker dans la collection.
                  Lorsqu'un thread producteur atteint la limite maximale de
                  BlockingCollection, il est bloqué pour ajouter de nouveaux
                  objets. Dans l'étape bloquée, le thread passe en mode veille.
                  Il se débloquera lorsque le thread consommateur supprimera
                  l'élément de la collection.
                </p>
              </div>
              <p>
                Il implémente le modèle <code>producteur-consommateur</code> .
                Dans ce modèle, il y a deux threads, l'un appelé producteur et
                l'autre consommateur. Les deux threads partagent une classe de
                collection commune pour échanger des données entre eux.
              </p>
              <Highlight language="csharp">
                {`using System;
using System.Collections.Concurrent;
using System.Security.Cryptography;
using System.Threading;
using System.Threading.Tasks;

namespace ConcurrentCollections
{
  class BlockingCollectionDemo
  {
    static BlockingCollection<int> messages = new BlockingCollection<int>(
      new ConcurrentBag<int>(), 10 /* bounded */
    );

    static CancellationTokenSource cts = new CancellationTokenSource();

    public static void ProduceAndConsume()
    {
      var producer = Task.Factory.StartNew(RunProducer);
      var consumer = Task.Factory.StartNew(RunConsumer);

      try
      {
        Task.WaitAll(new[] {producer, consumer}, cts.Token);
      }
      catch (AggregateException ae)
      {
        ae.Handle(e => true);
      }
    }

    private static Random random = new Random();

    private static void RunConsumer()
    {
      foreach (var item in messages.GetConsumingEnumerable())
      {
        cts.Token.ThrowIfCancellationRequested();
        Console.WriteLine($"-{item}");
        Thread.Sleep(random.Next(1000));
      }
    }

    private static void RunProducer()
    {

      while (true)
      {
        cts.Token.ThrowIfCancellationRequested();
        int i = random.Next(100);
        messages.Add(i);
        Console.WriteLine($"+{i}\t");
        Thread.Sleep(random.Next(1000));
      }
    }

    static void Main(string[] args)
    {
      Task.Factory.StartNew(ProduceAndConsume, cts.Token);

      Console.ReadKey();
      cts.Cancel();
    }
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
