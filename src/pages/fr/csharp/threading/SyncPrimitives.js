import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function SyncPrimitives() {
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
                    href="#sync"
                  >
                    Synchronization primitives
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
          <h3>Synchronization primitives</h3>
          <article id="sync">
            <h6>Synchronization primitives</h6>
            <div>
              <p>
                Multiple .NET synchronization primitives derive from the{" "}
                <code>System.Threading.WaitHandle</code> class, which
                encapsulates a native operating system synchronization handle
                and uses a signaling mechanism for thread interaction. Those
                classes include:
              </p>
              <ul>
                <li>
                  <Link to="/mutex">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#mutex"
                    role="button"
                    aria-expanded="false"
                    aria-controls="mutex"
                  >
                    Mutex
                  </a>
                  <div class="collapse" id="mutex">
                    <p>
                      Primitive de synchronisation qui peut également être
                      utilisée pour la synchronisation entre processus.
                    </p>
                    <p>
                      Vous pouvez utiliser un objet Mutex pour octroyer un droit
                      d’accès exclusif à une ressource.
                    </p>
                    <Highlight language="csharp">
                      {`private static void UseResource()  
{  
    mutex.WaitOne();   // Wait until it is safe to enter.
    // Your code...
    mutex.ReleaseMutex();    // Release the Mutex.  
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/lock">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#lock"
                    role="button"
                    aria-expanded="false"
                    aria-controls="lock"
                  >
                    lock | Monitor
                  </a>
                  <div class="collapse" id="lock">
                    <p>
                      Monitor fournit un mécanisme qui synchronise l'accès aux
                      objets.{" "}
                    </p>
                    <p>
                      L’instruction lock obtient le verrou d’exclusion mutuelle
                      d’un objet donné, exécute un bloc d’instructions, puis
                      libère le verrou.
                    </p>
                    <p>
                      Vous ne pouvez pas utiliser l’opérateur await dans le
                      corps d’une instruction lock.
                    </p>
                    <Highlight language="csharp">
                      {`lock (x)
{
    // Your code...
}`}
                    </Highlight>
                    <p>It's precisely equivalent to</p>
                    <Highlight language="csharp">
                      {`object __lockObj = x;
bool __lockWasTaken = false;
try
{
    System.Threading.Monitor.Enter(__lockObj, ref __lockWasTaken);
    // Your code...
}
finally
{
    if (__lockWasTaken) System.Threading.Monitor.Exit(__lockObj);
}`}
                    </Highlight>
                    <p>
                      <b>Example</b>
                    </p>
                    <Highlight language="csharp">
                      {`private static object _padLock = new object();
  
static void UseResource()  
{   
    lock (_padLock)  
    {  
      // Your code...  
    }  
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/interlocked">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#interlocked"
                    role="button"
                    aria-expanded="false"
                    aria-controls="interlocked"
                  >
                    Interlocked
                  </a>
                  <div class="collapse" id="interlocked">
                    <p>
                      Fournit des opérations atomiques pour des variables
                      partagées par plusieurs threads.
                    </p>
                    <Highlight language="csharp">
                      {`private static int usingResource = 0;
static bool UseResource()
{
    Interlocked.Exchange(ref usingResource, 0);
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/semaphore">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#semaphore"
                    role="button"
                    aria-expanded="false"
                    aria-controls="semaphore"
                  >
                    Semaphore | SemaphoreSlim
                  </a>
                  <div class="collapse" id="semaphore">
                    <p>
                      Limite le nombre de threads qui peuvent accéder
                      simultanément à une ressource ou à un pool de ressources.
                    </p>
                    <p>
                      Sémaphore est visible par tous les threads de tous les
                      processus.
                    </p>
                    <p>
                      SemaphoreSlim représente un sémaphore léger et rapide qui
                      peut être utilisé pour l'attente dans un processus unique
                      quand les temps d'attente sont censés être très courts.
                    </p>
                    <Highlight language="csharp">
                      {`private static Semaphore semaphoreObject = new Semaphore(initialCount: 3, maximumCount: 3, name: "PrinterApp");
static void UseResource()
{
    semaphoreObject.WaitOne();
    // Your code...
    semaphoreObject.Release();
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/barrier">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#barrier"
                    role="button"
                    aria-expanded="false"
                    aria-controls="barrier"
                  >
                    Barrier
                  </a>
                  <div class="collapse" id="barrier">
                    <p>
                      Barrier est une primitive de synchronisation définie par
                      l’utilisateur qui permet à plusieurs threads (appelés
                      participants) de travailler simultanément sur un
                      algorithme en plusieurs phases.
                    </p>
                    <p>
                      Lorsque la phase 1 est terminée par tous les threads, ils
                      continueront vers d'autres phases. Tous les threads
                      doivent être dans les mêmes phases à tout moment. Il n'y a
                      aucune chance que les threads fonctionnent dans
                      différentes phases.
                    </p>
                    <Highlight language="csharp">
                      {`using System;
using System.Threading;
using System.Threading.Tasks;

namespace TaskCoordination
{
  class BarrierDemo
  {
    static Barrier barrier = new Barrier(2, b =>
    {
      Console.WriteLine($"Phase {b.CurrentPhaseNumber} is finished.");
      //b.ParticipantCount
      //b.ParticipantsRemaining

      // add/remove participants
    });

    public static void Water()
    {
      Console.WriteLine("Putting the kettle on (takes a bit longer).");
      Thread.Sleep(2000);
      barrier.SignalAndWait(); // signaling and waiting fused
      Console.WriteLine("Putting water into cup.");
      barrier.SignalAndWait();
      Console.WriteLine("Putting the kettle away.");

    }

    public static void Cup()
    {
      Console.WriteLine("Finding the nicest tea cup (only takes a second).");
      barrier.SignalAndWait();
      Console.WriteLine("Adding tea.");
      barrier.SignalAndWait();
      Console.WriteLine("Adding sugar");
    }

    static void Main(string[] args)
    {
      var water = Task.Factory.StartNew(Water);
      var cup = Task.Factory.StartNew(Cup);

      var tea = Task.Factory.ContinueWhenAll(new[] {water, cup}, tasks =>
      {
        Console.WriteLine("Enjoy your cup of tea.");
      });

      tea.Wait();
    }
  }
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/spinlock">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#spinlock"
                    role="button"
                    aria-expanded="false"
                    aria-controls="spinlock"
                  >
                    SpinLock
                  </a>
                  <div class="collapse" id="spinlock">
                    <p>
                      Fournit une primitive de verrou d'exclusion mutuelle où un
                      thread, qui tente d'acquérir le verrou, attend dans une
                      boucle en effectuant des vérifications de manière répétée
                      jusqu'à ce que le verrou devienne disponible.
                    </p>
                    <Highlight language="csharp">
                      {`public static void SpinLockDemo()
{
  var tasks = new List<Task>();
  var ba = new BankAccount();

  // spinning avoid overhead of resheduling
  // useful if you expect the wait time to be very short


  SpinLock sl = new SpinLock();

  // owner tracking keeps a record of which thread acquired it to improve debugging

  for (int i = 0; i < 10; ++i)
  {
    tasks.Add(Task.Factory.StartNew(() =>
    {
      for (int j = 0; j < 1000; ++j)
      {
        bool lockTaken = false;
        try
        {
          // sl.IsHeld
          // sl.IsHeldByCurrentThread
          sl.Enter(ref lockTaken);
          ba.Deposit(100);
        }
        finally
        {
          if (lockTaken) sl.Exit();
        }
      }
    }));
    tasks.Add(Task.Factory.StartNew(() =>
    {
      for (int j = 0; j < 1000; ++j)
      {
        bool lockTaken = false;
        try
        {
          sl.Enter(ref lockTaken);
          ba.Withdraw(100);
        }
        finally
        {
          if (lockTaken) sl.Exit();
        }
      }
    }));
  }

  Task.WaitAll(tasks.ToArray());

  Console.WriteLine($"Final balance is {ba.Balance}.");
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/countdownevent">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#count-down-event"
                    role="button"
                    aria-expanded="false"
                    aria-controls="count-down-event"
                  >
                    CountdownEvent
                  </a>
                  <div class="collapse" id="count-down-event">
                    <p>
                      CountdownEvent est une primitive de synchronisation qui
                      débloque ses threads en attente après avoir été signalée
                      un certain nombre de fois.
                    </p>
                    <p>Il est signalée lorsque son décompte atteint zéro.</p>
                    <Highlight language="csharp">
                      {`CountdownEvent countObject = new CountdownEvent(10);
int[] result = new int[10];


for (int i = 0; i < 10; ++i)
{
    int j = i;
    Task.Factory.StartNew(() =>
        {

            Thread.Sleep(TimeSpan.FromSeconds(3));
            result[j] = j * 10;

            countObject.Signal();
        });
}

countObject.Wait();`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/autoresetevent">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#auto-reset-event"
                    role="button"
                    aria-expanded="false"
                    aria-controls="auto-reset-event"
                  >
                    AutoResetEvent
                  </a>
                  <div class="collapse" id="auto-reset-event">
                    <p>
                      Représente un événement de synchronisation de threads qui,
                      quand il est signalé, se réinitialise automatiquement
                      après avoir libéré un thread en attente.
                    </p>
                    <Highlight language="csharp">
                      {`class Program
{
    static AutoResetEvent autoResetEvent = new AutoResetEvent(false);
    static string dataFromServer = "";

    static void Main(string[] args)
    {
        Task task = Task.Factory.StartNew(() =>
        {
          UseResource();
        });

        //Put the current thread into waiting state until it receives the signal
        autoResetEvent.WaitOne();

        //Thread got the signal
    }

    static void UseResource()
    {
        // Your code...
        //send the signal to the waiting thread
        autoResetEvent.Set();
    }
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/manualresetevent">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#manual-reset-event"
                    role="button"
                    aria-expanded="false"
                    aria-controls="manual-reset-event"
                  >
                    ManualResetEvent | ManualResetEventSlim
                  </a>
                  <div class="collapse" id="manual-reset-event">
                    <p>
                      Représente un événement de synchronisation de thread qui,
                      quand il est signalé, doit être réinitialisé manuellement.
                    </p>
                    <p>
                      Vous pouvez utiliser cette classe pour de meilleures
                      performances que ManualResetEvent lorsque les temps
                      d’attente sont censés être très courts.
                    </p>
                    <Highlight language="csharp">
                      {`class Program
{
    static ManualResetEvent manualResetEvent = new ManualResetEvent(false);
    static string dataFromServer = "";

    static void Main(string[] args)
    {
        Task task = Task.Factory.StartNew(() =>
        {
          UseResource();
        });

        //Put the current thread into waiting state until it receives the signal
        manualResetEvent.WaitOne();

        //Thread got the signal
    }

    static void UseResource()
    {
        // Your code...
        //send the signal to the waiting thread
        manualResetEvent.Set();
        manualResetEvent.Reset();
    }
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/spinwait">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#s"
                    role="button"
                    aria-expanded="false"
                    aria-controls="spinwait"
                  >
                    SpinWait
                  </a>
                  <div class="collapse" id="spinwait">
                    <p>
                      .SpinWait est un type de synchronisation léger que vous
                      pouvez utiliser dans des scénarios de bas niveau pour
                      éviter des changements de contexte onéreux et des
                      transitions de noyau requises pour les événements de
                      noyau.
                    </p>
                    <p>
                      SpinWait est conçu pour être utilisé conjointement avec
                      les types .NET qui encapsulent des événements de noyau
                      tels que ManualResetEvent.
                    </p>
                    <Highlight language="csharp">
                      {`public class LockFreeStack<T>
{
    private volatile Node m_head;

    private class Node { public Node Next; public T Value; }

    public void Push(T item)
    {
        var spin = new SpinWait();
        Node node = new Node { Value = item }, head;
        while (true)
        {
            head = m_head;
            node.Next = head;
            if (Interlocked.CompareExchange(ref m_head, node, head) == head) break;
            spin.SpinOnce();
        }
    }

    public bool TryPop(out T result)
    {
        result = default(T);
        var spin = new SpinWait();

        Node head;
        while (true)
        {
            head = m_head;
            if (head == null) return false;
            if (Interlocked.CompareExchange(ref m_head, head.Next, head) == head)
            {
                result = head.Value;
                return true;
            }
            spin.SpinOnce();
        }
    }
}`}
                    </Highlight>
                  </div>
                </li>
                <li>
                  <Link to="/readerwriterlock">
                    <i className="fa-solid fa-link"></i>
                  </Link>
                  <a
                    data-bs-toggle="collapse"
                    href="#reader-writer-lock"
                    role="button"
                    aria-expanded="false"
                    aria-controls="reader-writer-lock"
                  >
                    ReaderWriterLock | ReaderWriterLockSlim
                  </a>
                  <div class="collapse" id="reader-writer-lock">
                    <p>
                      Définit un verrou qui prend en charge les writers uniques
                      et les lecteurs multiples.
                    </p>
                    <Highlight language="csharp">
                      {`public class SynchronizedCache 
{
    private ReaderWriterLockSlim cacheLock = new ReaderWriterLockSlim();
    private Dictionary<int, string> innerCache = new Dictionary<int, string>();

    public int Count
    { get { return innerCache.Count; } }

    public string Read(int key)
    {
        cacheLock.EnterReadLock();
        try
        {
            return innerCache[key];
        }
        finally
        {
            cacheLock.ExitReadLock();
        }
    }

    public void Add(int key, string value)
    {
        cacheLock.EnterWriteLock();
        try
        {
            innerCache.Add(key, value);
        }
        finally
        {
            cacheLock.ExitWriteLock();
        }
    }

    public bool AddWithTimeout(int key, string value, int timeout)
    {
        if (cacheLock.TryEnterWriteLock(timeout))
        {
            try
            {
                innerCache.Add(key, value);
            }
            finally
            {
                cacheLock.ExitWriteLock();
            }
            return true;
        }
        else
        {
            return false;
        }
    }

    public AddOrUpdateStatus AddOrUpdate(int key, string value)
    {
        cacheLock.EnterUpgradeableReadLock();
        try
        {
            string result = null;
            if (innerCache.TryGetValue(key, out result))
            {
                if (result == value)
                {
                    return AddOrUpdateStatus.Unchanged;
                }
                else
                {
                    cacheLock.EnterWriteLock();
                    try
                    {
                        innerCache[key] = value;
                    }
                    finally
                    {
                        cacheLock.ExitWriteLock();
                    }
                    return AddOrUpdateStatus.Updated;
                }
            }
            else
            {
                cacheLock.EnterWriteLock();
                try
                {
                    innerCache.Add(key, value);
                }
                finally
                {
                    cacheLock.ExitWriteLock();
                }
                return AddOrUpdateStatus.Added;
            }
        }
        finally
        {
            cacheLock.ExitUpgradeableReadLock();
        }
    }

    public void Delete(int key)
    {
        cacheLock.EnterWriteLock();
        try
        {
            innerCache.Remove(key);
        }
        finally
        {
            cacheLock.ExitWriteLock();
        }
    }

    public enum AddOrUpdateStatus
    {
        Added,
        Updated,
        Unchanged
    };

    ~SynchronizedCache()
    {
       if (cacheLock != null) cacheLock.Dispose();
    }
}`}
                    </Highlight>
                  </div>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
