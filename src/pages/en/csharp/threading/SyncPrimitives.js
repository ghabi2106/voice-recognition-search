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
                      A synchronization primitive that can also be used for
                      interprocess synchronization.
                    </p>
                    <p>
                      You can use a Mutex object to provide exclusive access to
                      a resource.
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
                      Provides a mechanism that synchronizes access to objects.
                    </p>
                    <p>
                      The lock statement acquires the mutual-exclusion lock for
                      a given object, executes a statement block, and then
                      releases the lock.
                    </p>
                    <p>
                      You can't use the await operator in the body of a lock
                      statement.
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
                      Provides atomic operations for variables that are shared
                      by multiple threads.
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
                      Limits the number of threads that can access a resource or
                      pool of resources concurrently.
                    </p>
                    <p>
                      Semaphores are visible throughout the operating system,
                      and can be used to synchronize the activities of
                      processes.
                    </p>
                    <p>
                      The SemaphoreSlim class represents a lightweight, fast
                      semaphore that can be used for waiting within a single
                      process
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
                      Barrier is a synchronization primitive that enables
                      multiple threads (known as participants) to work
                      concurrently on an algorithm in phases.
                    </p>
                    <p>
                      When phase 1 is completed by all threads then they will
                      continue to further phases. All the threads must be in
                      same phases in all time. There is no chance of threads to
                      work in different phases.
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
                      Provides a mutual exclusion lock primitive where a thread
                      trying to acquire the lock waits in a loop repeatedly
                      checking until the lock becomes available.
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
                      CountdownEvent is a synchronization primitive that
                      unblocks its waiting threads after it has been signaled a
                      certain number of times.
                    </p>
                    <p>It is signaled when its count reaches zero.</p>
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
                      Represents a thread synchronization event that, when
                      signaled, resets automatically after releasing a single
                      waiting thread.
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
                      Represents a thread synchronization event that, when
                      signaled, must be reset manually.
                    </p>
                    <p>
                      You can use ManualResetEventSlim class for better
                      performance than ManualResetEvent when wait times are
                      expected to be very short
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
                      SpinWait is a lightweight synchronization type that you
                      can use in low-level scenarios to avoid the expensive
                      context switches and kernel transitions that are required
                      for kernel events.
                    </p>
                    <p>
                      SpinWait is designed to be used in conjunction with the
                      .NET types that wrap kernel events such as
                      ManualResetEvent.
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
                      Defines a lock that supports single writers and multiple
                      readers.
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
