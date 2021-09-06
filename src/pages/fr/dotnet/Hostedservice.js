import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Hostedservice() {
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
                    href="#ihostedservice"
                  >
                    IHostedService
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#backgroundservice"
                  >
                    BackgroundService
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
          <h3>IHostedService, BackgroundService</h3>
          <article id="ihostedservice">
            <h6>IHostedService</h6>
            <div>
              <p>
                Un <code>IHostedService</code>est un service qui permet
                d'exécuter du code <em>avant</em> le démarrage du reste de votre
                application ASP.NET Core.
              </p>
              <p>
                L'interface a deux méthodes, une <code>StartAsync</code>qui est
                exécutée au démarrage de l'application et <code>StopAsync</code>
                qui est exécutée à la sortie de l'application.
              </p>
              <p>
                Au démarrage de votre application, le framework{" "}
                <code>await</code>s la <code>StartAsync</code>méthode de chacun{" "}
                <code>IHostedService</code>dans l'ordre où ils sont configurés
                dans votre <code>Startup.cs</code>
                <br />
                La <code>StopAsync</code>méthode est appelée dans l'ordre
                inverse à l'arrêt de l'application.
              </p>
              <Highlight language="csharp">{`public class IHostedService1 : IHostedService
    {
        public Task StartAsync(CancellationToken cancellationToken)
        {
            Console.WriteLine("1");
            return Task.CompletedTask;
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            Console.WriteLine("exit 1");
            return Task.CompletedTask;
        }
    }`}</Highlight>
              <Highlight language="csharp">{`public void ConfigureServices(IServiceCollection services)
{
    services.AddHostedService<IHostedService1>();
}`}</Highlight>
            </div>
          </article>
          <article id="backgroundservice">
            <h6>BackgroundService</h6>
            <div>
              <p>
                BackgroundService est une classe de base pour l’implémentation
                d’une exécution longue IHostedService .
              </p>
              <p>
                Il a une méthode que vous pouvez implémenter{" "}
                <code>ExecuteAsync</code>- et cette méthode n'est{" "}
                <strong>pas</strong> attendue. <br />
                Cela signifie que le code fonctionne sans bloquer l'application.
              </p>
              <Highlight language="csharp">{`protected override async Task ExecuteAsync(CancellationToken stoppingToken)
{
    await Task.Delay(1000);
    throw new Exception("oh nooo");
}`}</Highlight>
              <p>
                Lors d'une exception, l'exception est silencieusement avalée et
                l'application continue sans même la courtoisie d'écrire un
                message d'erreur dans le terminal.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
