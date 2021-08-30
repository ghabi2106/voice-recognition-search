import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Command() {
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
                    href="#command"
                  >
                    Command
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#use"
                  >
                    Common use
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dis-advantages"
                  >
                    Advantages and disadvantages
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#code"
                  >
                    Structural code in C#
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
                    to="/designpattern"
                  >
                    Design Pattern
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
          <h3>Command</h3>
          <article id="command">
            <h6>Commande</h6>
            <p>
              <strong>Commande</strong> est un patron de conception
              comportemental qui prend une action à effectuer et la transforme
              en un objet autonome qui contient tous les détails de cette
              action. Cette transformation permet de paramétrer des méthodes
              avec différentes actions, planifier leur exécution, les mettre
              dans une file d’attente ou d’annuler des opérations effectuées.
            </p>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <ul>
              <li>
                Utilisez le patron de conception commande lorsque vous voulez
                paramétrer des objets avec des traitements.
              </li>
              <li>
                Utilisez ce patron si vous voulez mettre des traitements dans
                une file d’attente, programmer leur déclenchement, ou les
                exécuter à distance.
              </li>
              <li>
                Utilisez le patron de conception commande quand vous voulez
                implémenter des opérations réversibles.
              </li>
            </ul>
          </article>
          <article id="dis-advantages">
            <h6>Avantages and disavantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Principe de responsabilité unique</em>. Vous pouvez
                    découpler les classes qui appellent des traitements, de
                    celles qui les exécutent.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Principe ouvert/fermé</em>. Vous pouvez ajouter de
                    nouvelles commandes dans le programme sans endommager le
                    code client existant.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> Vous
                    pouvez mettre en place une fonctionnalité annuler-rétablir.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> Vous
                    pouvez différer l’exécution de vos traitements.
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> Vous
                    pouvez assembler plusieurs commandes simples en une seule
                    plus complexe.
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i> Le code
                    peut devenir plus compliqué, car vous créez une nouvelle
                    couche entre les demandeurs et les récepteurs.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article id="code">
            <h6>Structural code in C#</h6>
            <Highlight language="csharp">
              {`using System;

namespace Command.Structural
{
    /// <summary>
    /// Command Design Pattern
    /// </summary>

    public class Program
    {
        public static void Main(string[] args)
        {
            // Create receiver, command, and invoker

            Receiver receiver = new Receiver();
            Command command = new ConcreteCommand(receiver);
            Invoker invoker = new Invoker();

            // Set and execute command

            invoker.SetCommand(command);
            invoker.ExecuteCommand();

            // Wait for user

            Console.ReadKey();
        }
    }

    /// <summary>
    /// The 'Command' abstract class
    /// </summary>

    public abstract class Command
    {
        protected Receiver receiver;

        // Constructor

        public Command(Receiver receiver)
        {
            this.receiver = receiver;
        }

        public abstract void Execute();
    }

    /// <summary>
    /// The 'ConcreteCommand' class
    /// </summary>

    public class ConcreteCommand : Command
    {
        // Constructor

        public ConcreteCommand(Receiver receiver) :
            base(receiver)
        {
        }

        public override void Execute()
        {
            receiver.Action();
        }
    }

    /// <summary>
    /// The 'Receiver' class
    /// </summary>

    public class Receiver
    {
        public void Action()
        {
            Console.WriteLine("Called Receiver.Action()");
        }
    }

    /// <summary>
    /// The 'Invoker' class
    /// </summary>

    public class Invoker
    {
        Command command;

        public void SetCommand(Command command)
        {
            this.command = command;
        }

        public void ExecuteCommand()
        {
            command.Execute();
        }
    }
}
`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
