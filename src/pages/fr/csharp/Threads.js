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
                Une tâche est un objet qui représente un travail qui doit être
                fait. La tâche peut indiquer si le travail est terminé et si
                l'opération renvoie un résultat, la tâche retourne le résultat.
              </p>
              <p>
                Une tâche peut être considérée comme un moyen pratique et facile
                d'exécuter des instructions de manière asynchrone et en
                parallèle. Dans d'autres langages et frameworks de
                programmation, cela peut être connu comme une promesse - "Je
                promets que je reviendrai vers vous à un moment donné". Une
                tâche utilisera par défaut le Threadpool , ce qui économise des
                ressources car la création de threads peut être coûteuse.
              </p>
              <p>
                Un Threadpool est un pool de threads, qui sont prêts à exécuter
                des instructions.
              </p>
              <img src="/img/dotnet/task-create.PNG" alt="task-create" />
            </div>
          </article>
          <article id="thread">
            <h6>What is Thread?</h6>
            <div>
              <p>
                Un Thread est un petit ensemble d'instructions exécutables. Les
                threads ne sont pas une construction .NET, ils sont intégrés à
                votre système d'exploitation . La classe de threads de .NET
                n'est qu'un moyen de créer et de gérer des threads.
              </p>
              <img src="/img/dotnet/thread-create.PNG" alt="thread-create" />
            </div>
          </article>
          <article id="task-thread">
            <h6>Différences entre les tâches et les threads</h6>
            <ul>
              <li>
                La tâche est plus abstraite que les threads. Il est toujours
                conseillé d'utiliser des tâches au lieu de thread car il est
                créé sur le pool de threads qui a déjà créé des threads par le
                système pour améliorer les performances.
              </li>
              <li>
                La tâche peut renvoyer un résultat. Il n'y a pas de mécanisme
                direct pour renvoyer le résultat d'un thread.
              </li>
              <li>
                La tâche prend en charge l'annulation via l'utilisation de
                jetons d'annulation. Mais Thread ne le fait pas.
              </li>
              <li>
                Vous pouvez attacher une tâche à la tâche parent, ainsi vous
                pouvez décider si le parent ou l'enfant existera en premier.
              </li>
              <li>
                Lors de l'utilisation de thread si nous obtenons l'exception
                dans la méthode de longue durée, il n'est pas possible
                d'intercepter l'exception dans la fonction parent, mais la même
                chose peut être facilement interceptée si nous utilisons des
                tâches.
              </li>
              <li>
                Vous pouvez facilement créer des chaînes de tâches. Vous pouvez
                spécifier quand une tâche doit démarrer après la tâche
                précédente et vous pouvez spécifier s'il doit y avoir un
                changement de contexte de synchronisation. Cela vous donne la
                possibilité d'exécuter une tâche de longue durée en
                arrière-plan, puis une tâche d'actualisation de l'interface
                utilisateur sur le thread de l'interface utilisateur.
              </li>
              <li>
                Une tâche est par défaut une tâche en arrière-plan. Vous ne
                pouvez pas avoir de tâche au premier plan. D'un autre côté, un
                fil peut être en arrière-plan ou au premier plan.
              </li>
              <li>
                Le TaskScheduler par défaut utilisera le pool de threads, de
                sorte que certaines tâches peuvent ne pas démarrer tant que
                d'autres tâches en attente ne sont pas terminées. Si vous
                utilisez Thread directement, chaque utilisation démarrera un
                nouveau Thread.
              </li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
