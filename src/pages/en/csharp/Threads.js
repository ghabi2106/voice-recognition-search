import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Threads() {
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
                    href="#thread"
                  >
                    Thread
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#task-thread"
                  >
                    Task vs Thread
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deadlock"
                  >
                    Deadlock
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parameters"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/operators"
                  >
                    Operators
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Task And Thread In C#</h3>
          <article id="task">
            <h6>What is Task?</h6>
            <div>
              <p>
                A task is an object that represents some work that should be
                done. The task can tell you if the work is completed and if the
                operation returns a result, the task gives you the result.
              </p>
              <p>
                A Task can be seen as a convenient and easy way to execute
                something asynchronously and in parallel. In other programming
                languages and frameworks this may be known as a promise - "I
                promise I will return to you at some point". A task will by
                default use the Threadpool, which saves resources as creating
                threads can be expensive.
              </p>
              <p>
                A threadpool is a pool of threads, which are ready to carry out
              </p>
              <Highlight language="csharp">
                {`static void Main(string[] args) {  
    Task < string > obTask = Task.Run(() => (  
        return“ Hello”));  
    Console.WriteLine(obTask.result);  
} `}
              </Highlight>
            </div>
          </article>
          <article id="thread">
            <h6>What is Thread?</h6>
            <div>
              <p>
                A Thread is a small set of executable instructions. Threads are
                not a .NET construct, they are built into your operating system.
                The thread class System.Threading from .NET is just a way to
                create and manage threads.
              </p>
              <Highlight language="csharp">
                {`static void Main(string[] args) {  
    Thread thread = new Thread(new ThreadStart(getMyName));  
    thread.Start();  
}  
public void getMyName() {} `}
              </Highlight>
            </div>
          </article>
          <article id="task-thread">
            <h6>Differences Between Task And Thread</h6>
            <ul>
              <li>
                Task is more abstract then threads. It is always advised to use
                tasks instead of thread as it is created on the thread pool
                which has already system created threads to improve the
                performance.
              </li>
              <li>
                The task can return a result. There is no direct mechanism to
                return the result from a thread.
              </li>
              <li>
                Task supports cancellation through the use of cancellation
                tokens. But Thread doesn't.
              </li>
              <li>
                You can attach task to the parent task, thus you can decide
                whether the parent or the child will exist first.
              </li>
              <li>
                While using thread if we get the exception in the long running
                method it is not possible to catch the exception in the parent
                function but the same can be easily caught if we are using
                tasks.
              </li>
              <li>
                You can easily build chains of tasks. You can specify when a
                task should start after the previous task and you can specify if
                there should be a synchronization context switch. That gives you
                the great opportunity to run a long running task in background
                and after that a UI refreshing task on the UI thread.
              </li>
              <li>
                A task is by default a background task. You cannot have a
                foreground task. On the other hand a thread can be background or
                foreground.
              </li>
              <li>
                The default TaskScheduler will use thread pooling, so some Tasks
                may not start until other pending Tasks have completed. If you
                use Thread directly, every use will start a new Thread.
              </li>
            </ul>
          </article>
          <article id="deadlock">
            <h6>Deadlock</h6>
            <div>
              <p>
                A deadlock is a situation where two or more threads are{" "}
                <strong>frozen</strong> in their execution because they are
                waiting for each other to finish. For example, thread A is
                waiting on <strong>lock_1</strong> that is held by thread B.
                Thread B can’t finish and release <strong>lock_1</strong>{" "}
                because it waits on <strong>lock_2</strong>, which is held by
                thread A. Too confusing? I’ll show you an example in a moment,
                but first let’s talk about <strong>Locks</strong>.
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
        </section>
      </div>
    </>
  );
}
