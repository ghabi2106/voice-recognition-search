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
                    to="/hostedservice"
                  >
                    IHostedService, BackgroundService
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp-features"
                  >
                    New features in C# 9
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
                An <code>IHostedService</code> is a service that allows for
                running code <em>before</em> the rest of your ASP.NET Core
                application starts.
              </p>
              <p>
                The interface has two methods, a <code>StartAsync</code> that is
                run on application start and <code>StopAsync</code> that is run
                on application exit.
              </p>
              <p>
                When your application starts up, the framework{" "}
                <code>await</code>s the <code>StartAsync</code> method of each{" "}
                <code>IHostedService</code> in the order they are configured in
                your <code>Startup.cs</code>
                <br />
                The <code>StopAsync</code> method is called in the opposite
                order on application shutdown.
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
              <p>background services can be implemented as hosted services</p>
              <p>
                It has one method you can implement <code>ExecuteAsync</code> -
                and this method is <strong>not</strong> awaited. <br />
                This means the code works without blocking the application:
              </p>
              <Highlight language="csharp">{`protected override async Task ExecuteAsync(CancellationToken stoppingToken)
{
    await Task.Delay(1000);
    throw new Exception("oh nooo");
}`}</Highlight>
              <p>
                The exception is silently swallowed, and the application
                continues without so much as the courtesy of writing an error
                message in the terminal
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
