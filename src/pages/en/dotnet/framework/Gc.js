import React from "react";
import { Link } from "react-router-dom";

export default function Gc() {
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
                    href="#gc"
                  >
                    Garbage Collector
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#benefits"
                  >
                    Benefits
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#memory-allocation"
                  >
                    Memory allocation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#memory-release"
                  >
                    Memory release
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#managed-heap"
                  >
                    The managed heap
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#generations"
                  >
                    Generations
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#survival-promotions"
                  >
                    Survival and promotions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#phases"
                  >
                    Garbage collection phases
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#umanaged"
                  >
                    Unmanaged resources
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#managed-unmanaged"
                  >
                    Managed vs Unmanaged code
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#stack-heap"
                  >
                    stack vs heap
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
                    to="/clr"
                  >
                    CLR
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
          <h3>Garbage Collector</h3>
          <article id="gc">
            <h6>What is garbage collector?</h6>
            <p>
              The garbage collector (GC) as a part of CLR serves as an automatic
              memory manager. The garbage collector manages the allocation and
              release of memory for an application. For developers working with
              managed code, this means that you don't have to write code to
              perform memory management tasks. Automatic memory management can
              eliminate common problems, such as forgetting to free an object
              and causing a memory leak or attempting to access memory for an
              object that's already been freed.
            </p>
          </article>
          <article id="benefits">
            <h6>Benefits</h6>
            <ul>
              <li>Frees developers from having to manually release memory.</li>
              <li>Allocates objects on the managed heap efficiently.</li>
              <li>
                Reclaims objects that are no longer being used, clears their
                memory, and keeps the memory available for future allocations.
              </li>
              <li>
                Provides memory safety by making sure that an object cannot use
                for itself the memory allocated for another object.
              </li>
            </ul>
          </article>
          <article id="memory-allocation">
            <h6>Memory allocation</h6>
            <p>
              Allocating memory from the managed heap is faster than unmanaged
              memory allocation. Because the runtime allocates memory for an
              object by adding a value to a pointer, it's almost as fast as
              allocating memory from the stack. In addition, because new objects
              that are allocated consecutively are stored contiguously in the
              managed heap, an application can access the objects quickly.
            </p>
          </article>
          <article id="memory-release">
            <h6>Memory release</h6>
            <p>
              When the garbage collector performs a collection, it releases the
              memory for objects that are no longer being used by the
              application.
            </p>
          </article>
          <article id="managed-heap">
            <h6>The managed heap</h6>
            <p>
              The managed heap is a segment of memory allocated by GC to store
              and manage objects.
            </p>
          </article>
          <article id="generations">
            <h6>Generations</h6>
            <div>
              <p>
                The memory heap is divided into three generations. Generation 0,
                Generation 1 and Generation 2 to perform a collection.
              </p>
              <ul>
                <li>
                  <strong>Generation 0</strong> – This is used to store
                  short-lived objects. Garbage Collection happens frequently in
                  this Generation.
                </li>
                <li>
                  <strong>Generation 1</strong> – This is for medium-lived
                  objects. Usually, the objects that get moved from generation 0
                  are stored in this.
                </li>
                <li>
                  <strong>Generation 2</strong> – This is for long-lived
                  objects.
                </li>
              </ul>
            </div>
          </article>
          <article id="survival-promotions">
            <h6>Survival and promotions</h6>
            <div>
              <p>
                Objects that are not reclaimed in a garbage collection are known
                as survivors and are promoted to the next generation:
              </p>
              <ul>
                <li>
                  Objects that survive a generation 0 garbage collection are
                  promoted to generation 1.
                </li>
                <li>
                  Objects that survive a generation 1 garbage collection are
                  promoted to generation 2.
                </li>
                <li>
                  Objects that survive a generation 2 garbage collection remain
                  in generation 2.
                </li>
              </ul>
            </div>
          </article>
          <article id="phases">
            <h6>Garbage collection phases</h6>
            <div>
              <p>A garbage collection has the following phases:</p>
              <ul>
                <li>
                  <p>
                    A marking phase that finds and creates a list of all live
                    objects.
                  </p>
                </li>
                <li>
                  <p>
                    A relocating phase that updates the references to the
                    objects that will be compacted.
                  </p>
                </li>
                <li>
                  <p>
                    A compacting phase that reclaims the space occupied by the
                    dead objects and compacts the surviving objects. The
                    compacting phase moves objects that have survived a garbage
                    collection toward the older end of the segment.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="umanaged">
            <h6>Unmanaged resources</h6>
            <div>
              <p>
                The most common type of unmanaged resource is an object that
                wraps an operating system resource, such as a file handle,
                window handle, or network connection.
              </p>
              <p>
                Although the garbage collector is able to track the lifetime of
                a managed object that encapsulates an unmanaged resource, it
                doesn't have specific knowledge about how to clean up the
                resource.
              </p>
              <p>
                It's recommended that you provide the necessary code to clean up
                the unmanaged resource in a public <code>Dispose</code> method.
              </p>
            </div>
          </article>
          <article id="managed-unmanaged">
            <h6>What is the difference between managed and unmanaged code?</h6>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th>Managed Code</th>
                  <th>Unmanaged Code</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>It is managed by CLR.</td>
                  <td>It is not managed by CLR.</td>
                </tr>
                <tr>
                  <td>.NET framework is a must for execution.</td>
                  <td>Does not require a .NET framework for the execution.</td>
                </tr>
                <tr>
                  <td>Memory management is done through garbage collection.</td>
                  <td>Runtime environment takes care of memory management.</td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="stack-heap">
            <h6>What is the difference between a stack and a heap?</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <strong>Stack</strong>
                  </td>
                  <td>
                    <strong>Heap</strong>
                  </td>
                </tr>
                <tr>
                  <td>Stored value type</td>
                  <td>Stored reference type</td>
                </tr>
                <tr>
                  <td>
                    A stack is responsible for keeping track of each executing
                    thread and its location.
                  </td>
                  <td>
                    The heap is responsible for keeping track of the more
                    precise objects or data.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
