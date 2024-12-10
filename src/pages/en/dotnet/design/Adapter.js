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
                The Adapter Pattern is a structural design pattern used to allow
                two incompatible interfaces to work together. <br />
                It acts as a bridge by converting the interface of a class into
                another interface that a client expects.
              </p>
              <ul>
                <li>
                  <strong>VGADevice</strong> is the existing device using VGA.
                </li>
                <li>
                  <strong>HDMIAdapter</strong> allows the VGA device to be used
                  via an HDMI interface.
                </li>
                <li>
                  The client can now use the device with an HDMI connection.
                </li>
              </ul>
              <Highlight language="csharp">
                {`// Target interface
public interface IDisplayDevice
{
    void Display();
}

// Adaptee (existing incompatible class)
public class VGADevice
{
    public void DisplayWithVGA()
    {
        Console.WriteLine("Displaying through VGA connection.");
    }
}

// Adapter
public class HDMIAdapter : IDisplayDevice
{
    private VGADevice _vgaDevice;

    public HDMIAdapter(VGADevice vgaDevice)
    {
        _vgaDevice = vgaDevice;
    }

    public void Display()
    {
        Console.WriteLine("Using HDMI adapter...");
        _vgaDevice.DisplayWithVGA();
    }
}

// Client code
public class Program
{
    public static void Main()
    {
        VGADevice vgaDevice = new VGADevice();
        IDisplayDevice hdmiAdapter = new HDMIAdapter(vgaDevice);
        hdmiAdapter.Display(); // Displays using HDMI adapter
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
