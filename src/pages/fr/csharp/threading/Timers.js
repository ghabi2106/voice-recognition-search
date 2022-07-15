import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Timers() {
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
                    href="#timers"
                  >
                    Timers
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
                    to="/readwriterlock"
                  >
                    ReadWriterLock
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
          <h3>Timers</h3>
          <article id="timers">
            <h6>Timers</h6>
            <div>
              <p>
                .NET provides two timers to use in a multithreaded environment:
              </p>
              <ul>
                <li>
                  System.Threading.Timer, which executes a single callback
                  method on a ThreadPool thread at regular intervals.
                </li>
                <li>
                  System.Timers.Timer, which by default raises an event on a
                  ThreadPool thread at regular intervals.
                </li>
              </ul>
              <Highlight language="csharp">
                {`using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    private static Timer timer;

    static void Main(string[] args)
    {
        var timerState = new TimerState { Counter = 0 };

        timer = new Timer(
            callback: new TimerCallback(TimerTask),
            state: timerState,
            dueTime: 1000,
            period: 2000);

        while (timerState.Counter <= 10)
        {
            Task.Delay(1000).Wait();
        }

        timer.Dispose();
        Console.WriteLine($"{DateTime.Now:HH:mm:ss.fff}: done.");
    }

    private static void TimerTask(object timerState)
    {
        Console.WriteLine($"{DateTime.Now:HH:mm:ss.fff}: starting a new callback.");
        var state = timerState as TimerState;
        Interlocked.Increment(ref state.Counter);
    }

    class TimerState
    {
        public int Counter;
    }
}`}
              </Highlight>
              <Highlight language="csharp">
                {`using System;
using System.Timers;

public class Example
{
   private static System.Timers.Timer aTimer;
   
   public static void Main()
   {
      SetTimer();

      Console.WriteLine("\nPress the Enter key to exit the application...\n");
      Console.WriteLine("The application started at {0:HH:mm:ss.fff}", DateTime.Now);
      Console.ReadLine();
      aTimer.Stop();
      aTimer.Dispose();
      
      Console.WriteLine("Terminating the application...");
   }

   private static void SetTimer()
   {
        // Create a timer with a two second interval.
        aTimer = new System.Timers.Timer(2000);
        // Hook up the Elapsed event for the timer. 
        aTimer.Elapsed += OnTimedEvent;
        aTimer.AutoReset = true;
        aTimer.Enabled = true;
    }

    private static void OnTimedEvent(Object source, ElapsedEventArgs e)
    {
        Console.WriteLine("The Elapsed event was raised at {0:HH:mm:ss.fff}",
                          e.SignalTime);
    }
}
// The example displays output like the following:
//       Press the Enter key to exit the application...
//
//       The application started at 09:40:29.068
//       The Elapsed event was raised at 09:40:31.084
//       The Elapsed event was raised at 09:40:33.100
//       The Elapsed event was raised at 09:40:35.100
//       The Elapsed event was raised at 09:40:37.116
//       The Elapsed event was raised at 09:40:39.116
//       The Elapsed event was raised at 09:40:41.117
//       The Elapsed event was raised at 09:40:43.132
//       The Elapsed event was raised at 09:40:45.133
//       The Elapsed event was raised at 09:40:47.148
//
//       Terminating the application...`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
