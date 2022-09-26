import React from "react";
import { Link } from "react-router-dom";

export default function Navdotnet() {
  return (
    <>
      {
        //#region dotnet
      }
      {
        //#endregion
      }

      {
        //#region Architecture
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Architecture
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/clean">
              Clean
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/cqrs">
              CQRS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/mvc">
              MVC
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/ddd">
              DDD
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region C#
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Csharp
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/csharp9">
              C# 9
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/csharp10">
              C# 10
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/csharp11">
              C# 11
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/dotnetfeatures">
              new in .Net
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/algo">
              Algorithme
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/recursion">
              Recursion
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region Framework
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Framework
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/dotnetcomponents">
              .Net-Components
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/dotnet">
              .Net vs .Net Core
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/assembly">
              Assembly
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/clr">
              <mark>CLR</mark> <mark>MSIL</mark> <mark>JIT</mark>{" "}
              <mark>GAC</mark> <mark>CTS</mark> <mark>CAS</mark>{" "}
              <mark>CLS</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/codedom">
              CodeDom
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/dllexe">
              DLL-EXE
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/entityframework">
              EF
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/gc">
              GC
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/gcmethods">
              GC-Methods
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/linq">
              Linq
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/nugetpackages">
              Nuget-Packages
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region HTTPS
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          HTTPS
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/caching">
              Caching
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/controller">
              Controller <mark>Action Method</mark> <mark>Result</mark>{" "}
              <mark>Selector</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/controllervuedata">
              Controller-Vue-Data <mark>ViewBag</mark> <mark>ViewData</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/https">
              Https <mark>Http</mark> <mark>SSL</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/httpmethods">
              Https-Methods <mark>Get</mark> <mark>Post</mark> <mark>Put</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/jwt">
              JWT
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/middleware">
              Middleware
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/service">
              Service
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region methodology
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Methodology
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/cleancode">
              Clean-Code
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/cleancode1">
              Clean-Code1 <mark>DBUF</mark> <mark>MVP</mark> <mark>POC</mark>{" "}
              <mark>Waterfall</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/solid">
              Solid
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/tdd">
              TDD <mark>BDD</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/ideals">
              IDEALS
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region design pattern
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Design
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/adapter">
              Adapter
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/command">
              Command
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/designpattern">
              Design-Pattern
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/di">
              DI <mark>Singleton</mark> <mark>Transcient</mark>{" "}
              <mark>Scope</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/factory">
              Factory
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/mediator">
              Mediator
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/observer">
              Observer
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/singleton">
              Singleton
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region OOP
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          OOP
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/oop">
              OOP <mark>Inheritance</mark> <mark>Polymorphism</mark>{" "}
              <mark>Encapsulation</mark> <mark>overloading</mark>{" "}
              <mark>Diamond</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/oop2">
              OOP2 <mark>Association</mark> <mark>Aggregation</mark>{" "}
              <mark>Composition</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/oop3">
              OOP3 <mark>Delegation</mark> <mark>Coupling</mark>{" "}
              <mark>Cohesion</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/composition">
              Composition over inheritance
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/typesystem">
              Type-System <mark>Struct</mark> <mark>Class</mark>{" "}
              <mark>Record</mark> <mark>object</mark> <mark>constructor</mark>{" "}
              <mark>Serialization</mark>
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region host
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Host
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/docker">
              Docker
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/httpsys">
              Http.sys
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/iis">
              IIS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/kestrel">
              Kestrel
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/server">
              Server
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region Keywords
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Keywords
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/contextual">
              Contextual <mark>partial</mark> <mark>var</mark> <mark>when</mark>{" "}
              <mark>where</mark> <mark>yield</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/modifiers">
              Modifiers <mark>virtual</mark> <mark>override</mark>{" "}
              <mark>abstract-interface</mark> <mark>const-readonly</mark>{" "}
              <mark>sealed</mark> <mark>static</mark>{" "}
              <mark>static-singleton</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/operators">
              Operators <mark>typeof-GetType</mark> <mark>Type-Casting</mark>{" "}
              <mark>is</mark> <mark>as</mark> <mark>switch-with</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/parameters">
              Parameters <mark>params</mark> <mark>in</mark> <mark>ref</mark>{" "}
              <mark>out</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/statements">
              Statements <mark>using</mark> <mark>throw-try-catch-finally</mark>{" "}
              <mark>break-continue-goto-return</mark> <br />
              <mark>lock</mark> <mark>fixed</mark> <mark>checked</mark>
              <mark>unchecked</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/thisbase">
              This base
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region Threading
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Threading
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/autoresetevent">
              AutoResetEvent
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/barrier">
              Barrier
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/concurrentcollections">
              Concurrent Collections
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/countdownevent">
              CountdownEvent
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/deadlock">
              Deadlock
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/interlocked">
              Interlocked
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/manualresetevent">
              ManualResetEvent
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/monitor">
              Monitor
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/mutex">
              Mutex
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/parallelloops">
              Parallel Loops
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/process">
              Process
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/readerwriterlock">
              ReaderWriterLock
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/semaphore">
              Semaphore
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/spinlock">
              SpinLock
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/spinwait">
              SpinWait
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/syncprimitives">
              Synchronisation Primitives
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/task">
              Task
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/threadpool">
              ThreadPool
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/timers">
              Timers
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region Others
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Others
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/array">
              Array <mark>Multidimensional</mark> <mark>Jagged</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/boxing">
              Boxing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/collections">
              Collections <mark>Dictionnary</mark> <mark>Hashtable</mark>{" "}
              <mark>Array</mark> <mark>List</mark> <br />
              <mark>Stack</mark> <mark>Queue</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/datatype">
              Datatype <mark>Type-Safety</mark> <mark>Anonyme</mark>{" "}
              <mark>dynamic</mark> <mark>nullable</mark> <mark>Discards</mark>{" "}
              <br />
              <mark>Method-Extension</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/delegate">
              Delegate <mark>Func</mark> <mark>Action</mark>{" "}
              <mark>Predicate</mark> <mark>Event</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/enumindexer">
              Enum-indexer <mark>Generic</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/hashcode">
              GetHashCode
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/hostedservice">
              Hosted-Service Background-Service
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/string2int">
              String2Int <mark>Parse</mark> <mark>TryParse</mark>{" "}
              <mark>Convert</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/stringbuilder">
              String-Builder
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/threads">
              Threads <mark>Task</mark> <mark>Deadlock</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/tuple">
              Tuple
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }

      {
        //#region Others1
      }
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Others1
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <Link className="dropdown-item" to="/advanced">
              Advanced <mark>Marshaling</mark> <mark>P/Invoke</mark>{" "}
              <mark>SIMD</mark> <mark>Vetor-Matrix</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/binding">
              Binding <mark>Late-Bound</mark> <mark>Early-Bound</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/covariance">
              Covariance
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/memberwiseclone">
              Memberwiseclone <mark>Shallow-copy</mark> <mark>Deep-copy</mark>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/operatoroverloading">
              Operator overloading
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/nested">
              Nested
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/preprocessordirectives">
              Preprocessordirectives
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/userdefinedtype">
              Userdefinedtype
            </Link>
          </li>
          <li className="nav-item">
            <Link className="dropdown-item" to="/references">
              References
            </Link>
          </li>
        </ul>
      </li>
      {
        //#endregion
      }
    </>
  );
}
