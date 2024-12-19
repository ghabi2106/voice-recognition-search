import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Mediator() {
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
                    href="#mediator"
                  >
                    Mediator
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#example"
                  >
                    Example
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
          <h3>Mediator</h3>
          <article id="mediator">
            <h6>Mediator</h6>
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
                    Un objet qui centralise les communications entre plusieurs
                    objets, réduisant ainsi le couplage direct entre eux.
                  </td>
                  <td>
                    Permet à plusieurs classes d'interagir sans se connaître
                    directement. Chaque classe envoie des messages au médiateur,
                    qui transmet les informations aux autres classes.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>But</strong>
                  </td>
                  <td>
                    Découpler les objets, réduire le nombre de dépendances
                    directes et centraliser la logique de communication.
                  </td>
                  <td>
                    Simplifier la gestion des interactions entre objets, en
                    particulier dans les systèmes complexes où de nombreuses
                    entités doivent communiquer entre elles.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Structure</strong>
                  </td>
                  <td>
                    1. <strong>Médiateur</strong> : Centralise la logique de
                    communication.
                    <br />
                    2. <strong>Colleague</strong> : Les objets qui communiquent
                    via le médiateur.
                  </td>
                  <td>
                    Un <strong>mediator</strong> reçoit les messages de ses{" "}
                    <strong>colleagues</strong> (par exemple, des boutons ou des
                    fenêtres dans une interface graphique) et les redirige ou
                    les gère.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Avantages</strong>
                  </td>
                  <td>
                    - Réduit le couplage entre objets.
                    <br />- Simplifie la gestion des interactions.
                    <br />- Permet une gestion centralisée des communications.
                  </td>
                  <td>
                    - Si un composant est modifié, il n'affecte pas directement
                    les autres composants, car tout passe par le médiateur.
                    <br />- Le médiateur peut contenir des règles complexes de
                    gestion des messages.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Inconvénients</strong>
                  </td>
                  <td>
                    - Le médiateur peut devenir un point de complexité s'il gère
                    trop de logique.
                    <br />- Difficile à maintenir si le médiateur devient trop
                    complexe.
                  </td>
                  <td>
                    Si trop de classes sont envoyées au médiateur, ce dernier
                    peut devenir trop volumineux et difficile à maintenir.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Exemple d'application</strong>
                  </td>
                  <td>
                    - Interfaces utilisateur complexes avec de nombreux
                    composants.
                    <br />- Gestion des messages dans une application avec des
                    interactions complexes.
                  </td>
                  <td>
                    1. Dans une application de chat où chaque utilisateur
                    communique avec les autres via un médiateur.
                    <br />
                    2. Dans une interface graphique, le médiateur pourrait gérer
                    les événements entre des boutons, des champs de texte et des
                    menus.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="example">
            <h6>Example</h6>
            <div>
              <p>
                Un exemple réel d'utilisation du Mediator Pattern est le
                contrôle aérien dans un aéroport, où un tour de contrôle joue le
                rôle de médiateur pour coordonner les communications entre
                plusieurs avions (les collègues).
              </p>
              <h6>
                <strong>Explication :</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>Interface IAirTrafficControl</strong> :
                  </p>
                  <ul>
                    <li>
                      Définit les méthodes pour enregistrer des avions et
                      transmettre des messages.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Classe AirTrafficControl</strong> :
                  </p>
                  <ul>
                    <li>
                      Agit comme un médiateur, recevant les messages des avions
                      et transmettant les instructions aux autres avions.
                    </li>
                    <li>
                      Centralise la gestion des communications pour éviter les
                      collisions ou les interférences.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Classe Aircraft</strong> :
                  </p>
                  <ul>
                    <li>
                      Chaque avion est un collègue qui interagit uniquement avec
                      le médiateur (la tour de contrôle) et non directement avec
                      d'autres avions.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Exécution</strong> :
                  </p>
                  <ul>
                    <li>L'avion "A" envoie une demande d'atterrissage.</li>
                    <li>
                      La tour de contrôle transmet ce message aux autres avions,
                      qui reçoivent l'information.
                    </li>
                  </ul>
                </li>
              </ol>
              <Highlight language="csharp">
                {`// Interface du médiateur
public interface IAirTrafficControl
{
    void RegisterAircraft(Aircraft aircraft);
    void SendMessage(string message, Aircraft sender);
}

// Classe Mediator
public class AirTrafficControl : IAirTrafficControl
{
    private List<Aircraft> _aircrafts;

    public AirTrafficControl()
    {
        _aircrafts = new List<Aircraft>();
    }

    public void RegisterAircraft(Aircraft aircraft)
    {
        _aircrafts.Add(aircraft);
    }

    public void SendMessage(string message, Aircraft sender)
    {
        foreach (var aircraft in _aircrafts)
        {
            if (aircraft != sender)
            {
                aircraft.ReceiveMessage($"{sender.Name}: {message}");
            }
        }
    }
}

// Classe Colleague (Avion)
public class Aircraft
{
    private IAirTrafficControl _mediator;
    public string Name { get; }

    public Aircraft(IAirTrafficControl mediator, string name)
    {
        _mediator = mediator;
        Name = name;
    }

    public void SendMessage(string message)
    {
        Console.WriteLine($"{Name} envoie un message : {message}");
        _mediator.SendMessage(message, this);
    }

    public void ReceiveMessage(string message)
    {
        Console.WriteLine($"{Name} reçoit un message : {message}");
    }
}

// Programme principal
class Program
{
    static void Main()
    {
        // Création de la tour de contrôle (médiateur)
        IAirTrafficControl airTrafficControl = new AirTrafficControl();

        // Création des avions
        Aircraft aircraft1 = new Aircraft(airTrafficControl, "Avion A");
        Aircraft aircraft2 = new Aircraft(airTrafficControl, "Avion B");
        Aircraft aircraft3 = new Aircraft(airTrafficControl, "Avion C");

        // Enregistrement des avions dans la tour de contrôle
        airTrafficControl.RegisterAircraft(aircraft1);
        airTrafficControl.RegisterAircraft(aircraft2);
        airTrafficControl.RegisterAircraft(aircraft3);

        // Communication via la tour de contrôle
        aircraft1.SendMessage("Je demande la permission d'atterrir.");
        aircraft2.SendMessage("Je suis en approche.");
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
