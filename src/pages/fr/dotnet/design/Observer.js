import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Observer() {
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
                    href="#observer"
                  >
                    Observateur
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
          <h3>Observer</h3>
          <article id="observer">
            <h6>Observer</h6>
            <div>
              <p>
                L’Observateur est un patron de conception comportemental qui
                permet de mettre en place un mécanisme de souscription pour
                envoyer des notifications à plusieurs objets, au sujet
                d’événements concernant les objets qu’ils observent.
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
                      Permet de notifier plusieurs objets lorsque l'état d'un
                      objet change, tout en maintenant un faible couplage.
                    </td>
                    <td>
                      Un système de messagerie : chaque utilisateur
                      (observateur) reçoit une alerte d'un nouvel événement.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Structure</strong>
                    </td>
                    <td>
                      - <strong>Sujet (Subject)</strong> : Gère la liste des
                      observateurs et les notifie des changements.
                      <br />- <strong>Observateurs (Observers)</strong> :
                      S'abonnent au sujet pour recevoir les notifications.
                    </td>
                    <td>
                      Une classe <code>WeatherStation</code> (sujet) informe
                      plusieurs <code>DisplayDevices</code> (observateurs) des
                      changements météo.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Avantages</strong>
                    </td>
                    <td>
                      - Faible couplage entre le sujet et ses observateurs.
                      <br />- Extensible : de nouveaux observateurs peuvent être
                      ajoutés sans modifier le sujet.
                    </td>
                    <td>
                      Plusieurs modules reçoivent les mises à jour sans changer
                      la logique du sujet principal.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Inconvénients</strong>
                    </td>
                    <td>
                      - Risque de surcharge si trop d'observateurs sont
                      enregistrés.
                      <br />- Complexité accrue dans les systèmes avec beaucoup
                      d'observateurs.
                    </td>
                    <td>
                      Une boucle infinie peut survenir si des notifications
                      mutuelles sont mal gérées.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cas d'utilisation</strong>
                    </td>
                    <td>
                      - Interfaces utilisateur dynamiques.
                      <br />- Mises à jour d'état en temps réel.
                      <br />- Systèmes de publication/souscription.
                    </td>
                    <td>
                      Notifications push, systèmes météo, observateurs de
                      fichiers ou journaux.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="example">
            <h6>Exemple : Système météo</h6>
            <div>
              <h3>
                <strong>Explication :</strong>
              </h3>
              <ol>
                <li>
                  <p>
                    <strong>Sujet (WeatherStation)</strong> :
                  </p>
                  <ul>
                    <li>
                      Gère la liste des observateurs via{" "}
                      <code>RegisterObserver</code>, <code>RemoveObserver</code>
                      , et notifie les observateurs avec{" "}
                      <code>NotifyObservers</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Observateurs (DisplayDevice)</strong> :
                  </p>
                  <ul>
                    <li>
                      Implémentent l'interface <code>IObserver</code> et mettent
                      à jour leur état à chaque notification.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Interaction</strong> :
                  </p>
                  <ul>
                    <li>
                      Le sujet (station météo) informe tous les afficheurs des
                      nouvelles mesures, et chaque afficheur met à jour ses
                      données.
                    </li>
                  </ul>
                </li>
              </ol>
              <Highlight language="csharp">
                {`// Interface Observateur
public interface IObserver
{
    void Update(float temperature, float humidity);
}

// Interface Sujet
public interface ISubject
{
    void RegisterObserver(IObserver observer);
    void RemoveObserver(IObserver observer);
    void NotifyObservers();
}

// Classe Sujet (WeatherStation)
public class WeatherStation : ISubject
{
    private readonly List<IObserver> _observers;
    private float _temperature;
    private float _humidity;

    public WeatherStation()
    {
        _observers = new List<IObserver>();
    }

    public void RegisterObserver(IObserver observer) => _observers.Add(observer);
    public void RemoveObserver(IObserver observer) => _observers.Remove(observer);

    public void NotifyObservers()
    {
        foreach (var observer in _observers)
        {
            observer.Update(_temperature, _humidity);
        }
    }

    public void SetMeasurements(float temperature, float humidity)
    {
        _temperature = temperature;
        _humidity = humidity;
        NotifyObservers();
    }
}

// Classe Observateur (Afficheur)
public class DisplayDevice : IObserver
{
    private readonly string _name;

    public DisplayDevice(string name)
    {
        _name = name;
    }

    public void Update(float temperature, float humidity)
    {
        Console.WriteLine($"{_name} : Température = {temperature}°C, Humidité = {humidity}%");
    }
}

// Programme principal
class Program
{
    static void Main()
    {
        // Création du sujet
        WeatherStation weatherStation = new WeatherStation();

        // Création des observateurs
        IObserver display1 = new DisplayDevice("Afficheur 1");
        IObserver display2 = new DisplayDevice("Afficheur 2");

        // Enregistrement des observateurs
        weatherStation.RegisterObserver(display1);
        weatherStation.RegisterObserver(display2);

        // Mise à jour des mesures
        weatherStation.SetMeasurements(25.5f, 65);
        weatherStation.SetMeasurements(22.3f, 70);

        // Suppression d'un observateur
        weatherStation.RemoveObserver(display1);
        weatherStation.SetMeasurements(20.0f, 60);
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
