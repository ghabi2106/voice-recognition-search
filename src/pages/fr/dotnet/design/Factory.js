import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Factory() {
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
                    href="#factory"
                  >
                    Factory Pattern
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
          <h3>Factory Method</h3>
          <article id="factory">
            <h6>Factory Method</h6>
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
                    Un patron de conception qui fournit une interface pour créer
                    des objets dans une classe spécialisée, sans spécifier leur
                    classe concrète.
                  </td>
                  <td>
                    Une fabrique d'objets pour créer des voitures électriques,
                    essence ou hybrides selon un type demandé.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>But</strong>
                  </td>
                  <td>
                    Découpler la logique de création d'objets du reste de
                    l'application.
                  </td>
                  <td>
                    Simplifier l'ajout de nouvelles sous-classes sans modifier
                    le code existant.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Structure</strong>
                  </td>
                  <td>
                    1. <strong>Factory</strong> : Classe ou méthode responsable
                    de la création.
                    <br />
                    2. <strong>Produit</strong> : Objet créé.
                    <br />
                    3. <strong>Client</strong> : Code qui utilise les objets
                    créés par la factory.
                  </td>
                  <td>
                    Une classe <code>VehicleFactory</code> retourne des
                    instances de <code>Car</code>, <code>Truck</code>, ou{" "}
                    <code>Motorcycle</code> selon un paramètre.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Avantages</strong>
                  </td>
                  <td>
                    - Simplifie le code client.
                    <br />- Réduit le couplage entre le client et les classes
                    concrètes.
                    <br />- Favorise l'extensibilité.
                  </td>
                  <td>
                    L'ajout de nouvelles classes dérivées n'affecte pas le code
                    client, car tout passe par la factory.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Inconvénients</strong>
                  </td>
                  <td>
                    - Peut introduire de la complexité supplémentaire.
                    <br />- Risque de surutilisation dans des cas simples.
                  </td>
                  <td>
                    Nécessite une gestion de maintenance si le nombre de
                    produits ou de types devient très élevé.
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Cas d'utilisation</strong>
                  </td>
                  <td>
                    - Lorsque la logique de création est complexe.
                    <br />- Lorsque les types exacts des objets à créer sont
                    inconnus au moment de la compilation.
                  </td>
                  <td>
                    Génération d'objets dans des jeux vidéo (ennemis, bonus) ou
                    pour des systèmes comme des connecteurs de base de données.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="example">
            <h6>Example</h6>
            <div>
              <h3>
                <strong>Explication :</strong>
              </h3>
              <ol>
                <li>
                  <strong>
                    Interface <code>IVehicle</code>
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Définit un contrat commun pour tous les types de
                      véhicules.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Classes concrètes (<code>Car</code>, <code>Truck</code>,{" "}
                    <code>Motorcycle</code>)
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Implémentent l'interface <code>IVehicle</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>
                    Classe <code>VehicleFactory</code>
                  </strong>{" "}
                  :
                  <ul>
                    <li>
                      Une fabrique statique qui décide quel type d'objet créer
                      en fonction du paramètre d'entrée (<code>type</code>).
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Code client</strong> :
                  <ul>
                    <li>
                      Le client demande un type de véhicule sans se soucier de
                      sa classe concrète. Par exemple, un objet <code>Car</code>{" "}
                      est obtenu en passant "car" à la fabrique.
                    </li>
                  </ul>
                </li>
              </ol>
              <Highlight language="csharp">
                {`// Interface produit
public interface IVehicle
{
    void Drive();
}

// Classes concrètes (produits)
public class Car : IVehicle
{
    public void Drive() => Console.WriteLine("Driving a car.");
}

public class Truck : IVehicle
{
    public void Drive() => Console.WriteLine("Driving a truck.");
}

public class Motorcycle : IVehicle
{
    public void Drive() => Console.WriteLine("Riding a motorcycle.");
}

// Classe Factory
public static class VehicleFactory
{
    public static IVehicle CreateVehicle(string type)
    {
        return type.ToLower() switch
        {
            "car" => new Car(),
            "truck" => new Truck(),
            "motorcycle" => new Motorcycle(),
            _ => throw new ArgumentException("Invalid vehicle type")
        };
    }
}

// Utilisation du Factory Pattern
class Program
{
    static void Main()
    {
        IVehicle car = VehicleFactory.CreateVehicle("car");
        car.Drive();

        IVehicle truck = VehicleFactory.CreateVehicle("truck");
        truck.Drive();

        IVehicle motorcycle = VehicleFactory.CreateVehicle("motorcycle");
        motorcycle.Drive();
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
