import React from "react";
import { Link } from "react-router-dom";

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
                    to="/entityframework"
                  >
                    Entity Framework
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
              <img src="/img/dotnet/task-create.PNG" alt="task-create" />
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
              <img src="/img/dotnet/thread-create.PNG" alt="thread-create" />
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
        </section>
      </div>
    </>
  );
}
