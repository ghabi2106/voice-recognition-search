import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Deadlock() {
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
                    href="#critical-section"
                  >
                    Critical Section
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#race-condition"
                  >
                    Race Condition
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deadlock"
                  >
                    deadlock
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#livelock"
                  >
                    livelock
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#starvation"
                  >
                    Starvation
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
          <h3>deadlock | livelock</h3>
          <article id="critical-section">
            <h6>Critical Section</h6>
            <div>
              <p>
                La section critique est tout morceau de code qui a la
                possibilité d'être exécuté simultanément par plus d'un thread de
                l'application et expose toutes les données ou ressources
                partagées utilisées par l'application pour l'accès.
              </p>
            </div>
          </article>
          <article id="race-condition">
            <h6>Race Condition</h6>
            <div>
              <p>
                Une condition de concurrence se produit lorsque deux threads
                accèdent simultanément à une variable partagée.
              </p>
              <Highlight language="csharp">
                {`using System;
using System.Threading;
namespace RaceCondition
    class Akshay
    {
        int result = 0;
        void Work1() { result = 1; }
        void Work2() { result = 2; }
        void Work3() { result = 3; }
        static void Main(string[] args)
        {
            Akshay a = new Akshay();
            Thread worker1 = new Thread(a.Work1);
            Thread worker2 = new Thread(a.Work2);
            Thread worker3 = new Thread(a.Work3);
            worker1.Start();
            worker2.Start();
            worker3.Start();
            Console.WriteLine(a.result);
            Console.Read();
        }
    }
}`}
              </Highlight>
            </div>
          </article>
          <article id="deadlock">
            <h6>deadlock</h6>
            <div>
              <p>
                A deadlock est une situation où deux threads ou plus sont gelés
                dans leur exécution car ils attendent que l'autre se termine.
                Par exemple, le thread A attend le verrou_1 qui est détenu par
                le thread B. Le thread B ne peut pas terminer et libérer le
                verrou_1 car il attend le verrou_2, qui est détenu par le thread
                A.
              </p>
              <h6>Explanation of the code:</h6>
              <Highlight language="csharp">
                {`public void Foo()
{
    object lock1 = new object();
    object lock2 = new object();
    Console.WriteLine("Starting...");
    var task1 = Task.Run(() =>
    {
        lock (lock1)
        {
            Thread.Sleep(1000);
            lock (lock2)
            {
                Console.WriteLine("Finished Thread 1");
            }
        }
    });
 
    var task2 = Task.Run(() =>
    {
        lock (lock2)
        {
            Thread.Sleep(1000);
            lock (lock1)
            {
                Console.WriteLine("Finished Thread 2");
            }
        }
    });
 
    Task.WaitAll(task1, task2);
    Console.WriteLine("Finished...");
}`}
              </Highlight>
              <ul>
                <li>
                  Two objects are created for <strong>lock</strong> purposes. In
                  C#, any object can be used as a lock.
                </li>
                <li>
                  <code>Task.Run</code> starts 2 Tasks, which are run by 2
                  Threads on the <strong>Thread-Pool</strong>.
                </li>
                <li>
                  The first Thread acquires <strong>lock1 </strong>and sleeps
                  for 1 second. The second acquires <strong>lock2</strong> and
                  also sleeps for a second. Afterward, thread 1 waits for{" "}
                  <strong>lock2</strong> to be released and thread 2 waits for{" "}
                  <strong>lock1</strong> to be released. So they both wait
                  indefinitely and result in a <strong>Deadlock</strong>.
                </li>
                <li>
                  <code>Task.WaitAll(task1, task2)</code> waits on the method’s
                  Thread until both Tasks are finished, which never happens.
                  This makes it a 3-Thread deadlock. The Console print is:{" "}
                  <code>Starting…</code>
                </li>
              </ul>
              <h6>Debugging a Deadlock</h6>
              <p>
                You can see the deadlock in the debugger easily, once you know
                what to look for. In the example above, running the code in
                Visual Studio results in a hang. Hit on the{" "}
                <strong>Debug | Break All</strong> (Ctrl + Alt + Break), then go
                to <strong>Debug | Windows | Threads</strong>. You’ll see the
                following:
              </p>
              <img
                className="mw-900"
                src="/img/dotnet/nested_deadlock_breakall.png"
                alt="nested_deadlock_breakall"
              />
              <h6>Solving the Nested-Lock Deadlock</h6>
              <Highlight language="csharp">
                {`// After (without deadlock, change only in "Transfer" method)
public class Account
{
    public uint Id { get; set; }
}
// ...
private Task Transfer(Account acc1, Account acc2, int sum)
{
    var lock1 = acc1.Id < acc2.Id ? acc1 : acc2;//smalled Id account
    var lock2 = acc1.Id < acc2.Id ? acc2 : acc1;//biggest Id account
    var task = Task.Run(() =>
    {
        lock (lock1)
        {
            Thread.Sleep(1000);
            lock (lock2)
            {
                Console.WriteLine($"Finished transferring sum {sum}");
            }
        }
    });
    return task;
}`}
              </Highlight>
            </div>
          </article>
          <article id="livelock">
            <h6>livelock</h6>
            <div>
              <p>
                Un livelock est similaire à un deadlock , sauf que les états des
                processus impliqués dans le livelock changent constamment les
                uns par rapport aux autres, aucun ne progressant.
              </p>
              <p>
                Un exemple dans une situation réelle est le problème « Deux
                personnes qui se gênent dans un couloir ».
              </p>
              <Highlight language="csharp">
                {`var l1 = .... // lock object like semaphore or mutex etc
var l2 = .... // lock object like semaphore or mutex etc
	
// Thread1
Thread.Start( ()=> {
			
	while (true) {
		
		if (!l1.Lock(1000)) {
			continue;
		}
		
		if (!l2.Lock(1000)) {
			continue;
		}
		
		/// do some work
});

// Thread2
Thread.Start( ()=> {
			
		while (true) {
			
			if (!l2.Lock(1000)) {
				continue;
			}
			
			if (!l1.Lock(1000)) {
				continue;
			}
			
			// do some work
});
`}
              </Highlight>
            </div>
          </article>
          <article id="starvation">
            <h6>Starvation</h6>
            <div>
              <p>
                Un processus qui nécessite d'accomplir une tâche qui ne peut pas
                obtenir un accès régulier aux ressources partagées.
              </p>
              <Highlight language="csharp">
                {`Queue q = .....

while (q.Count & gt; 0)
{
  var c = q.Dequeue();
  .........

  // Some method in different thread accidentally
  // puts c back in queue twice within same time frame
  q.Enqueue(c);
  q.Enqueue(c);

  // leading to growth of queue twice then it
  // can consume, thus starving of computing
}
`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
