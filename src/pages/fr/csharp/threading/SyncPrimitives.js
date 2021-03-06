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
                      Primitive de synchronisation qui peut ??galement ??tre
                      utilis??e pour la synchronisation entre processus.
                    </p>
                    <p>
                      Vous pouvez utiliser un objet Mutex pour octroyer un droit
                      d???acc??s exclusif ?? une ressource.
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
                      Monitor fournit un m??canisme qui synchronise l'acc??s aux
                      objets.{" "}
                    </p>
                    <p>
                      L???instruction lock obtient le verrou d???exclusion mutuelle
                      d???un objet donn??, ex??cute un bloc d???instructions, puis
                      lib??re le verrou.
                    </p>
                    <p>
                      Vous ne pouvez pas utiliser l???op??rateur await dans le
                      corps d???une instruction lock.
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
                      Fournit des op??rations atomiques pour des variables
                      partag??es par plusieurs threads.
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
                      Limite le nombre de threads qui peuvent acc??der
                      simultan??ment ?? une ressource ou ?? un pool de ressources.
                    </p>
                    <p>
                      S??maphore est visible par tous les threads de tous les
                      processus.
                    </p>
                    <p>
                      SemaphoreSlim repr??sente un s??maphore l??ger et rapide qui
                      peut ??tre utilis?? pour l'attente dans un processus unique
                      quand les temps d'attente sont cens??s ??tre tr??s courts.
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
                      Barrier est une primitive de synchronisation d??finie par
                      l???utilisateur qui permet ?? plusieurs threads (appel??s
                      participants) de travailler simultan??ment sur un
                      algorithme en plusieurs phases.
                    </p>
                    <p>
                      Lorsque la phase 1 est termin??e par tous les threads, ils
                      continueront vers d'autres phases. Tous les threads
                      doivent ??tre dans les m??mes phases ?? tout moment. Il n'y a
                      aucune chance que les threads fonctionnent dans
                      diff??rentes phases.
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
                      Fournit une primitive de verrou d'exclusion mutuelle o?? un
                      thread, qui tente d'acqu??rir le verrou, attend dans une
                      boucle en effectuant des v??rifications de mani??re r??p??t??e
                      jusqu'?? ce que le verrou devienne disponible.
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
                      d??bloque ses threads en attente apr??s avoir ??t?? signal??e
                      un certain nombre de fois.
                    </p>
                    <p>Il est signal??e lorsque son d??compte atteint z??ro.</p>
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
                      Repr??sente un ??v??nement de synchronisation de threads qui,
                      quand il est signal??, se r??initialise automatiquement
                      apr??s avoir lib??r?? un thread en attente.
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
                      Repr??sente un ??v??nement de synchronisation de thread qui,
                      quand il est signal??, doit ??tre r??initialis?? manuellement.
                    </p>
                    <p>
                      Vous pouvez utiliser cette classe pour de meilleures
                      performances que ManualResetEvent lorsque les temps
                      d???attente sont cens??s ??tre tr??s courts.
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
                      .SpinWait est un type de synchronisation l??ger que vous
                      pouvez utiliser dans des sc??narios de bas niveau pour
                      ??viter des changements de contexte on??reux et des
                      transitions de noyau requises pour les ??v??nements de
                      noyau.
                    </p>
                    <p>
                      SpinWait est con??u pour ??tre utilis?? conjointement avec
                      les types .NET qui encapsulent des ??v??nements de noyau
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
                      D??finit un verrou qui prend en charge les writers uniques
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
