import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Task() {
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
                    href="#task"
                  >
                    Task
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#task-thread"
                  >
                    Task | Thread
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
          <h3>Task | Thread</h3>
          <article id="task-thread">
            <h6>Task vs Thread</h6>
            <div>
              <p>Repr??sente une op??ration asynchrone.</p>
              <ul>
                <li>
                  Une t??che peut renvoyer un r??sultat, mais il n'existe aucun
                  moyen appropri?? de renvoyer un r??sultat ?? partir de Thread.
                </li>
                <li>
                  Nous pouvons appliquer le cha??nage sur plusieurs t??ches mais
                  nous ne le pouvons pas dans les threads.
                </li>
                <li>
                  Nous pouvons attendre les t??ches sans utiliser la
                  signalisation. Mais dans Threads, nous devons utiliser des
                  signaux d'??v??nement comme AutoResetEvent et ManualResetEvent.
                </li>
                <li>
                  Nous pouvons appliquer la relation parent/enfant dans les
                  t??ches. Une t??che devient ?? la fois parent de plusieurs
                  t??ches. La t??che parent ne se termine pas tant que ses t??ches
                  enfants ne sont pas termin??es. Nous n'avons pas de m??canisme
                  de ce type dans la classe Thread.
                </li>
                <li>
                  Les t??ches enfants peuvent propager leurs exceptions ?? la
                  t??che parent et toutes les exceptions enfants sont disponibles
                  dans la classe AggregateException.
                </li>
                <li>
                  Les t??ches ont un m??canisme d'annulation int??gr?? ?? l'aide de
                  la classe CancellationToken.
                </li>
              </ul>
              <Highlight language="csharp">
                {`static void Main(string[] args) {  
    Task <string> obTask = Task.Run(() => (  
        return??? Hello???));  
    Console.WriteLine(obTask.result);  
} `}
              </Highlight>
              <Highlight language="csharp">
                {`static void Main(string[] args) {  
    Thread thread = new Thread(new ThreadStart(getMyName));  
    thread.Start();  
}  
public void getMyName() {} `}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
