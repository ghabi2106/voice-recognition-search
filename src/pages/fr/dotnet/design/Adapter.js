import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Adapter() {
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
                    href="#adapter"
                  >
                    Adapter
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
          <h3>Adapter</h3>
          <article id="adapter">
            <h6>Adapter</h6>
            <div>
              <p>
                L'<strong>adaptateur</strong> est un patron de conception
                structurel qui permet de faire collaborer des objets ayant des
                interfaces normalement incompatibles.
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
                      Transforme l'interface d'une classe existante pour qu'elle
                      soit compatible avec une autre interface attendue.
                    </td>
                    <td>
                      Un adaptateur pour connecter un chargeur européen à une
                      prise américaine.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Structure</strong>
                    </td>
                    <td>
                      - <strong>Client</strong> : Utilise l'interface cible.
                      <br />- <strong>Cible</strong> : Interface attendue par le
                      client.
                      <br />- <strong>Adaptateur</strong> : Relie l'interface
                      cible à une interface existante.
                      <br />- <strong>Adaptee</strong> : Classe à adapter.
                    </td>
                    <td>
                      Une application de messagerie qui adapte un service
                      existant pour fonctionner avec une nouvelle API.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Avantages</strong>
                    </td>
                    <td>
                      - Favorise la réutilisation de code existant.
                      <br />- Simplifie l'intégration avec des systèmes tiers.
                    </td>
                    <td>
                      Permet de connecter des systèmes hétérogènes sans modifier
                      leur code.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Inconvénients</strong>
                    </td>
                    <td>
                      - Peut ajouter une couche de complexité supplémentaire.
                      <br />- Nécessite parfois une duplication d'interface.
                    </td>
                    <td>
                      Peut alourdir le code si trop d'adaptateurs sont
                      nécessaires.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Cas d'utilisation</strong>
                    </td>
                    <td>
                      - Intégration avec une API ou une bibliothèque tierce.
                      <br />- Migration de code ou transition entre systèmes.
                    </td>
                    <td>
                      Adapter une ancienne bibliothèque pour fonctionner avec
                      une nouvelle application.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="example">
            <h6>Example</h6>
            <div>
              <h6>Exemple d'un Adaptateur VGA vers HDMI</h6>
              <h6>
                <strong>Explication :</strong>
              </h6>
              <ol>
                <li>
                  <p>
                    <strong>
                      Interface cible (<code>IHDMI</code>)
                    </strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>Définit l'interface pour les appareils HDMI.</li>
                    <li>
                      Le client (ordinateur) utilise cette interface pour
                      envoyer des vidéos.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Classe existante (<code>VGA</code>)
                    </strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>
                      Le moniteur VGA accepte uniquement des signaux via sa
                      méthode <code>DisplayVGA</code>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Adaptateur (<code>HDMIToVGAAdapter</code>)
                    </strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>
                      Implémente l'interface HDMI (<code>IHDMI</code>) et
                      utilise une instance de <code>VGA</code> pour rediriger
                      les signaux après conversion.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>
                      Client (<code>Computer</code>)
                    </strong>{" "}
                    :
                  </p>
                  <ul>
                    <li>
                      Le client (ordinateur) fonctionne uniquement avec{" "}
                      <code>IHDMI</code>. L'adaptateur permet au client de
                      communiquer avec le moniteur VGA.
                    </li>
                  </ul>
                </li>
              </ol>
              <Highlight language="csharp">
                {`// Interface cible (HDMI)
public interface IHDMI
{
    void DisplayHDMI(string video);
}

// Classe existante (VGA)
public class VGA
{
    public void DisplayVGA(string video)
    {
        Console.WriteLine($"Affichage via VGA : {video}");
    }
}

// Adaptateur : permet à une source HDMI d'utiliser un moniteur VGA
public class HDMIToVGAAdapter : IHDMI
{
    private readonly VGA _vgaDevice;

    public HDMIToVGAAdapter(VGA vgaDevice)
    {
        _vgaDevice = vgaDevice;
    }

    public void DisplayHDMI(string video)
    {
        // Conversion et affichage via VGA
        Console.WriteLine("Conversion du signal HDMI en VGA...");
        _vgaDevice.DisplayVGA(video);
    }
}

// Client
public class Computer
{
    private readonly IHDMI _hdmiOutput;

    public Computer(IHDMI hdmiOutput)
    {
        _hdmiOutput = hdmiOutput;
    }

    public void OutputVideo(string video)
    {
        _hdmiOutput.DisplayHDMI(video);
    }
}

// Programme principal
class Program
{
    static void Main()
    {
        // Moniteur VGA existant
        VGA vgaMonitor = new VGA();

        // Adaptateur HDMI vers VGA
        IHDMI hdmiToVgaAdapter = new HDMIToVGAAdapter(vgaMonitor);

        // Ordinateur avec sortie HDMI
        Computer computer = new Computer(hdmiToVgaAdapter);

        // Affichage de la vidéo
        computer.OutputVideo("Vidéo de présentation");
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
