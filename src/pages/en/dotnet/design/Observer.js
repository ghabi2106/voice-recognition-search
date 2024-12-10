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
                    Observer
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
            <p>
              <strong>Observer</strong> is a behavioral design pattern that lets
              you define a subscription mechanism to notify multiple
              objects(observers) about any events that happen to the
              object(subject) they’re observing.
            </p>
          </article>
          <article id="use">
            <h6>Common use</h6>
            <ul>
              <li>
                Use the Observer pattern when changes to the state of one object
                may require changing other objects, and the actual set of
                objects is unknown beforehand or changes dynamically.
              </li>
              <li>
                Use the pattern when some objects in your app must observe
                others, but only for a limited time or in specific cases.
              </li>
            </ul>
          </article>
          <article id="dis-advantages">
            <h6>Advantages and disadvantages</h6>
            <div class="row">
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i>{" "}
                    <em>Open/Closed Principle</em>. You can introduce new
                    subscriber classes without having to change the publisher’s
                    code (and vice versa if there’s a publisher interface).
                  </li>
                  <li>
                    <i class="fa fa-fw fa-check" aria-hidden="true"></i> You can
                    establish relations between objects at runtime.
                  </li>
                </ul>
              </div>
              <div class="col-sm-6">
                <ul>
                  <li>
                    <i class="fa fa-fw fa-times" aria-hidden="true"></i>{" "}
                    Subscribers are notified in random order.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article id="code">
            <h6>Structural code in C#</h6>
            <div>
              <ul>
                <li>
                  <code>WeatherStation</code>: The subject that holds a state
                  (temperature) and notifies observers when it changes.
                </li>
                <li>
                  <code>IObserver</code>: Interface for observers to implement
                  the <code>Update</code> method.
                </li>
                <li>
                  <code>PhoneDisplay/DesktopDisplay</code>: Observers that react
                  to state changes in the subject.
                </li>
              </ul>
              <Highlight language="csharp">
                {`using System;
using System.Collections.Generic;

// Subject
public class WeatherStation
{
    private List<IObserver> observers = new List<IObserver>();
    private int temperature;

    public void AddObserver(IObserver observer) => observers.Add(observer);
    public void RemoveObserver(IObserver observer) => observers.Remove(observer);

    public int Temperature
    {
        get => temperature;
        set
        {
            temperature = value;
            NotifyObservers();
        }
    }

    private void NotifyObservers()
    {
        foreach (var observer in observers)
        {
            observer.Update(temperature);
        }
    }
}

// Observer Interface
public interface IObserver
{
    void Update(int temperature);
}

// Concrete Observer
public class PhoneDisplay : IObserver
{
    public void Update(int temperature)
    {
        Console.WriteLine($"Phone Display: Temperature updated to {temperature}°C");
    }
}

// Another Concrete Observer
public class DesktopDisplay : IObserver
{
    public void Update(int temperature)
    {
        Console.WriteLine($"Desktop Display: Temperature updated to {temperature}°C");
    }
}

// Example Usage
class Program
{
    static void Main()
    {
        var weatherStation = new WeatherStation();

        var phoneDisplay = new PhoneDisplay();
        var desktopDisplay = new DesktopDisplay();

        weatherStation.AddObserver(phoneDisplay);
        weatherStation.AddObserver(desktopDisplay);

        weatherStation.Temperature = 25; // Notify all observers
        weatherStation.Temperature = 30; // Notify all observers
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
