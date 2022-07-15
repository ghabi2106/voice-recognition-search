import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Monitor() {
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
                    href="#monitor"
                  >
                    lock | Monitor
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
          <h3>lock | Monitor</h3>
          <article id="monitor">
            <h6>lock | Monitor</h6>
            <div>
              <p>Provides a mechanism that synchronizes access to objects.</p>
              <p>
                The lock statement acquires the mutual-exclusion lock for a
                given object, executes a statement block, and then releases the
                lock.
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
          </article>
        </section>
      </div>
    </>
  );
}
