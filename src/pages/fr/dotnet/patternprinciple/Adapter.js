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
                L'<strong>adaptateur</strong> est un patron de conception structurel
                qui permet de faire collaborer des objets ayant des interfaces
                normalement incompatibles.
              </p>
              <Highlight language="csharp">
                {`public interface ILightningPhone
{
	void ConnectLightning();
	void Recharge();
}

public interface IUsbPhone
{
	void ConnectUsb();
	void Recharge();
}

public sealed class AndroidPhone : IUsbPhone
{
	private bool isConnected;
	
	public void ConnectUsb()
	{
		this.isConnected = true;
		Console.WriteLine("Android phone connected.");
	}

	public void Recharge()
	{
		if (this.isConnected)
		{
			Console.WriteLine("Android phone recharging.");
		}
		else
		{
			Console.WriteLine("Connect the USB cable first.");
		}
	}
}

public sealed class ApplePhone : ILightningPhone
{
	private bool isConnected;
	
	public void ConnectLightning()
	{
		this.isConnected = true;
		Console.WriteLine("Apple phone connected.");
	}

	public void Recharge()
	{
		if (this.isConnected)
		{
			Console.WriteLine("Apple phone recharging.");
		}
		else
		{
			Console.WriteLine("Connect the Lightning cable first.");
		}
	}
}

public sealed class LightningToUsbAdapter : IUsbPhone
{
	private readonly ILightningPhone lightningPhone;
	
	private bool isConnected;
	
	public LightningToUsbAdapter(ILightningPhone lightningPhone)
	{
		this.lightningPhone = lightningPhone;
		this.lightningPhone.ConnectLightning();
	}
	
	public void ConnectUsb()
	{
		this.isConnected = true;
		Console.WriteLine("Adapter cable connected.");
	}

	public void Recharge()
	{
		if (this.isConnected)
		{
			this.lightningPhone.Recharge();
		}
		else
		{
			Console.WriteLine("Connect the USB cable first.");
		}
	}
}

public void Main()
{
	ILightningPhone applePhone = new ApplePhone();
	IUsbPhone adapterCable = new LightningToUsbAdapter(applePhone);
	adapterCable.ConnectUsb();
	adapterCable.Recharge();
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
