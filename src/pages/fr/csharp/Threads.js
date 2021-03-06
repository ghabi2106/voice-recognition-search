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
                Une t??che est un objet qui repr??sente un travail qui doit ??tre
                fait. La t??che peut indiquer si le travail est termin?? et si
                l'op??ration renvoie un r??sultat, la t??che retourne le r??sultat.
              </p>
              <p>
                Une t??che peut ??tre consid??r??e comme un moyen pratique et facile
                d'ex??cuter des instructions de mani??re asynchrone et en
                parall??le. Dans d'autres langages et frameworks de
                programmation, cela peut ??tre connu comme une promesse - "Je
                promets que je reviendrai vers vous ?? un moment donn??". Une
                t??che utilisera par d??faut le Threadpool , ce qui ??conomise des
                ressources car la cr??ation de threads peut ??tre co??teuse.
              </p>
              <p>
                Un Threadpool est un pool de threads, qui sont pr??ts ?? ex??cuter
                des instructions.
              </p>
              <Highlight language="csharp">
                {`static void Main(string[] args) {  
    Task < string > obTask = Task.Run(() => (  
        return??? Hello???));  
    Console.WriteLine(obTask.result);  
} `}
              </Highlight>
            </div>
          </article>
          <article id="thread">
            <h6>What is Thread?</h6>
            <div>
              <p>
                Un Thread est un petit ensemble d'instructions ex??cutables. Les
                threads ne sont pas une construction .NET, ils sont int??gr??s ??
                votre syst??me d'exploitation . La classe de threads de .NET
                n'est qu'un moyen de cr??er et de g??rer des threads.
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
            <h6>Diff??rences entre les t??ches et les threads</h6>
            <ul>
              <li>
                La t??che est plus abstraite que les threads. Il est toujours
                conseill?? d'utiliser des t??ches au lieu de thread car il est
                cr???? sur le pool de threads qui a d??j?? cr???? des threads par le
                syst??me pour am??liorer les performances.
              </li>
              <li>
                La t??che peut renvoyer un r??sultat. Il n'y a pas de m??canisme
                direct pour renvoyer le r??sultat d'un thread.
              </li>
              <li>
                La t??che prend en charge l'annulation via l'utilisation de
                jetons d'annulation. Mais Thread ne le fait pas.
              </li>
              <li>
                Vous pouvez attacher une t??che ?? la t??che parent, ainsi vous
                pouvez d??cider si le parent ou l'enfant existera en premier.
              </li>
              <li>
                Lors de l'utilisation de thread si nous obtenons l'exception
                dans la m??thode de longue dur??e, il n'est pas possible
                d'intercepter l'exception dans la fonction parent, mais la m??me
                chose peut ??tre facilement intercept??e si nous utilisons des
                t??ches.
              </li>
              <li>
                Vous pouvez facilement cr??er des cha??nes de t??ches. Vous pouvez
                sp??cifier quand une t??che doit d??marrer apr??s la t??che
                pr??c??dente et vous pouvez sp??cifier s'il doit y avoir un
                changement de contexte de synchronisation. Cela vous donne la
                possibilit?? d'ex??cuter une t??che de longue dur??e en
                arri??re-plan, puis une t??che d'actualisation de l'interface
                utilisateur sur le thread de l'interface utilisateur.
              </li>
              <li>
                Une t??che est par d??faut une t??che en arri??re-plan. Vous ne
                pouvez pas avoir de t??che au premier plan. D'un autre c??t??, un
                fil peut ??tre en arri??re-plan ou au premier plan.
              </li>
              <li>
                Le TaskScheduler par d??faut utilisera le pool de threads, de
                sorte que certaines t??ches peuvent ne pas d??marrer tant que
                d'autres t??ches en attente ne sont pas termin??es. Si vous
                utilisez Thread directement, chaque utilisation d??marrera un
                nouveau Thread.
              </li>
            </ul>
          </article>
          <article id="deadlock">
            <h6>Deadlock</h6>
            <div>
              <p>
                Un blocage en C# est une situation dans laquelle deux threads ou
                plus sont gel??s (<strong>frozen</strong>) dans leur ex??cution
                car ils attendent que l'autre se termine. Par exemple, le thread
                A attend le <strong>lock_1</strong> d??tenu par le thread B. Le
                thread B ne peut pas terminer et lib??rer le{" "}
                <strong>lock_1</strong> car il attend le <strong>lock_2</strong>
                , qui est d??tenu par le thread A. Trop d??routant ? Je vais vous
                montrer un exemple dans un instant, maispremierparlons des{" "}
                <strong>Locks</strong>.
              </p>
              <h6>Explication du code :</h6>
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
                  Deux objets sont cr????s ?? des fins de{" "}
                  <strong>verrouillage</strong> . En C#, n'importe quel objet
                  peut ??tre utilis?? comme verrou.
                </li>
                <li>
                  <code>Task.Run</code> d??marre 2 t??ches, qui sont ex??cut??es par
                  2 threads sur le <strong>Thread-Pool</strong> .
                </li>
                <li>
                  Le premier Thread acquiert <strong>lock1</strong> et se met en{" "}
                  <strong>veille</strong> pendant 1 seconde. Le second acquiert{" "}
                  <strong>lock2</strong> et dort ??galement pendant une seconde.
                  Ensuite, le thread 1 attend que <strong>lock2</strong> soit
                  lib??r?? et le thread 2 attend que <strong>lock1</strong> soit
                  lib??r??. Donc, ils attendent tous les deux ind??finiment et
                  aboutissent ?? un <strong>Deadlock</strong> .
                </li>
                <li>
                  <code>Task.WaitAll(task1, task2)</code> attend sur le Thread
                  de la m??thode jusqu'?? ce que les deux Tasks soient termin??es,
                  ce qui n'arrive jamais. Cela en fait une impasse 3-Thread.
                  L'impression de la console est : <code>Starting???</code>
                </li>
              </ul>
              <h6>D??boguer un blocage</h6>
              <p>
                Vous pouvez facilement voir le blocage dans le d??bogueur, une
                fois que vous savez quoi rechercher. Coup sur le{" "}
                <strong>Debug | Break All</strong> (Ctrl + Alt + Break), puis
                allez dans <strong>Debug | Windows | Threads</strong>.
              </p>
              <img
                className="mw-900"
                src="/img/dotnet/nested_deadlock_breakall.png"
                alt="nested_deadlock_breakall"
              />
              <h6>R??soudre l'impasse(Deadlock) Nested-Lock</h6>
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
