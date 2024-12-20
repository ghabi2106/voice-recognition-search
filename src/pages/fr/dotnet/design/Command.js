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
                    Commande
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    Exemple
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/cleancode"
                  >
                    Clean code
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/command"
                  >
                    Command
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/designpattern"
                  >
                    Design Principle &amp; Pattern
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/di"
                  >
                    Dependency injection
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/factory"
                  >
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mediator"
                  >
                    Mediator
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/observer"
                  >
                    Observer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/singleton"
                  >
                    Singleton
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/solid"
                  >
                    S.O.L.I.D. Principles
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
            <div>
              <p>
                Le <strong>Command Pattern</strong> (ou{" "}
                <strong>Patron Commande</strong>) est un patron de conception
                comportemental qui transforme une demande ou une action en un
                objet indépendant. Cela permet de paramétrer des requêtes, de
                les mettre en file, de les annuler ou de les rejouer.
              </p>
              <table>
                <thead>
                  <tr>
                    <th>
                      <strong>Aspect</strong>
                    </th>
                    <th>
                      <strong>Description</strong>
                    </th>
                    <th>
                      <strong>Exemple</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Définition</strong>
                    </td>
                    <td>
                      Encapsule une requête dans un objet, permettant de la
                      gérer de manière flexible et indépendante de l'appelant.
                    </td>
                    <td>
                      Une application de gestion de tâches où les actions (comme
                      "Annuler", "Rétablir") sont gérées via des commandes.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Structure</strong>
                    </td>
                    <td>
                      - <strong>Commande</strong> : Encapsule l'action.
                      <br />- <strong>Receveur</strong> : Exécute la commande.
                      <br />- <strong>Invocateur</strong> : Demande l'exécution.
                      <br />- <strong>Client</strong> : Configure la commande.
                    </td>
                    <td>
                      Une télécommande (invocateur) envoie des commandes pour
                      allumer ou éteindre la lumière (receveur).
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Avantages</strong>
                    </td>
                    <td>
                      - Séparation des responsabilités entre l'appelant et
                      l'exécutant.
                      <br />- Historique des commandes.
                      <br />- Support d'annulation/rétablissement.
                    </td>
                    <td>
                      Implémentation d'une fonctionnalité d'annulation dans un
                      éditeur de texte.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Inconvénients</strong>
                    </td>
                    <td>
                      - Complexité accrue avec de nombreuses commandes.
                      <br />- Augmente le nombre de classes.
                    </td>
                    <td>
                      Un système complexe peut devenir difficile à maintenir.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cas d'utilisation</strong>
                    </td>
                    <td>
                      - Gestion des actions annuler/rétablir.
                      <br />- Systèmes de mise en file d'attente.
                      <br />- Paramétrage ou journalisation des actions.
                    </td>
                    <td>
                      Commandes dans un éditeur graphique (dessiner, effacer),
                      automatisation de tâches répétitives.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="example">
            <h6>Structural code in C#</h6>
            <div>
              <h6>Exemple : Télécommande pour allumer/éteindre une lumière</h6>
              <h6>
                <strong>Explication :</strong>
              </h6>
              <ol>
                <li>
                  <strong>
                    Commande (<code>ICommand</code>)
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Définit une interface avec les méthodes{" "}
                      <code>Execute</code> et <code>Undo</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Receveur (<code>Light</code>)
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Contient la logique réelle pour allumer ou éteindre la
                      lumière.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Commandes concrètes (<code>TurnOnLightCommand</code>,{" "}
                    <code>TurnOffLightCommand</code>)
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Implémentent <code>ICommand</code> et encapsulent l'action
                      sur le receveur.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Invocateur (<code>RemoteControl</code>)
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Déclenche les commandes en appelant <code>Execute</code>{" "}
                      ou <code>Undo</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Client</strong> :
                  <ul>
                    <li>
                      Configure le système en associant des commandes concrètes
                      au receveur et en les affectant à l'invocateur.
                    </li>
                  </ul>
                </li>
              </ol>
              <Highlight language="csharp">
                {`// Interface Commande
public interface ICommand
{
    void Execute();
    void Undo();
}

// Classe Receveur
public class Light
{
    public void TurnOn() => Console.WriteLine("Lumière allumée.");
    public void TurnOff() => Console.WriteLine("Lumière éteinte.");
}

// Commande pour allumer la lumière
public class TurnOnLightCommand : ICommand
{
    private readonly Light _light;

    public TurnOnLightCommand(Light light) => _light = light;

    public void Execute() => _light.TurnOn();
    public void Undo() => _light.TurnOff();
}

// Commande pour éteindre la lumière
public class TurnOffLightCommand : ICommand
{
    private readonly Light _light;

    public TurnOffLightCommand(Light light) => _light = light;

    public void Execute() => _light.TurnOff();
    public void Undo() => _light.TurnOn();
}

// Invocateur
public class RemoteControl
{
    private ICommand _command;

    public void SetCommand(ICommand command) => _command = command;
    public void PressButton() => _command.Execute();
    public void PressUndo() => _command.Undo();
}

// Programme principal
class Program
{
    static void Main()
    {
        Light livingRoomLight = new Light();

        ICommand turnOnCommand = new TurnOnLightCommand(livingRoomLight);
        ICommand turnOffCommand = new TurnOffLightCommand(livingRoomLight);

        RemoteControl remote = new RemoteControl();

        // Allumer la lumière
        remote.SetCommand(turnOnCommand);
        remote.PressButton();

        // Éteindre la lumière
        remote.SetCommand(turnOffCommand);
        remote.PressButton();

        // Annuler la dernière action
        remote.PressUndo();
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
