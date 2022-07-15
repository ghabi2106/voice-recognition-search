import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Barrier() {
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
                    href="#barrier"
                  >
                    Barrier
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
          <h3>Barrier</h3>
          <article id="barrier">
            <h6>Barrier</h6>
            <div>
              <p>
                Barrier is a synchronization primitive that enables multiple
                threads (known as participants) to work concurrently on an
                algorithm in phases.
              </p>
              <p>
                When phase 1 is completed by all threads then they will continue
                to further phases. All the threads must be in same phases in all
                time. There is no chance of threads to work in different phases.
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
          </article>
        </section>
      </div>
    </>
  );
}
