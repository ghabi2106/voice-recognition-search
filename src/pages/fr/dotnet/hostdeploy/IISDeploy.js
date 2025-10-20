import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function IISDeploy() {
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
                    href="#iis-deploy-1"
                  >
                    1️⃣ Prepare the Application for Deployment
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-2"
                  >
                    2️⃣ Prepare the IIS Environment on the Windows VM
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-3"
                  >
                    3️⃣ Configure IIS Website
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-4"
                  >
                    4️⃣ Configure Application Pool
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#iis-deploy-5"
                  >
                    5️⃣ Test and Troubleshoot
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>Internet Information Services (IIS) deployments</h3>
          <article id="iis-deploy-1">
            <h6>1️⃣ Prepare the Application for Deployment</h6>
            <div>
              <h6>
                <strong>1️⃣ Prepare the Application for Deployment</strong>
              </h6>
              <blockquote>
                <p>
                  “First, I publish the application to generate a self-contained
                  or framework-dependent build.”
                </p>
              </blockquote>
              <p>In Visual Studio or CLI:</p>
              <h6>
                ✅ <strong>Using Visual Studio:</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    Right-click the project → <strong>Publish</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Choose <strong>Folder</strong> as target
                  </p>
                </li>
                <li>
                  <p>
                    Select configuration: <strong>Release</strong>
                  </p>
                </li>
                <li>
                  <p>
                    Publish to a folder, e.g.
                    <br />
                    <code>bin\Release\net8.0\publish</code>
                  </p>
                </li>
              </ul>
              <h6>
                ✅ <strong>Using Command Line:</strong>
              </h6>
              <Highlight language="bash">
                {`dotnet publish -c Release -o ./publish`}
              </Highlight>
              <p>
                👉 This produces all files needed to run the app (DLLs,
                web.config, static files, etc.).
              </p>
            </div>
          </article>
          <article id="iis-deploy-2">
            <h6>2️⃣ Prepare the IIS Environment on the Windows VM</h6>
            <div>
              <h6>
                <strong>
                  2️⃣ Prepare the IIS Environment on the Windows VM
                </strong>
              </h6>
              <blockquote>
                <p>
                  “Then I make sure IIS is installed and configured for ASP.NET
                  Core hosting.”
                </p>
              </blockquote>
              <h6>Steps:</h6>
              <ol>
                <li>
                  <p>
                    <strong>Install IIS:</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        Open <em>Server Manager</em> →{" "}
                        <em>Add Roles and Features</em>
                      </p>
                    </li>
                    <li>
                      <p>
                        Enable <strong>Web Server (IIS)</strong> role and
                        features (especially <code>Management Tools</code>)
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Install the .NET Hosting Bundle</strong>
                  </p>
                  <ul>
                    <li>
                      <p>
                        Download and install the{" "}
                        <strong>.NET Hosting Bundle</strong> from Microsoft:
                      </p>
                    </li>
                    <li>
                      <p>This installs:</p>
                      <ul>
                        <li>
                          <p>
                            The <strong>.NET Runtime</strong>
                          </p>
                        </li>
                        <li>
                          <p>
                            The <strong>ASP.NET Core Module (ANCM)</strong> that
                            connects IIS → Kestrel
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Restart the server</strong> after installation.
                  </p>
                </li>
              </ol>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-3">
            <h6>3️⃣ Configure IIS Website</h6>
            <div>
              <h6>
                <strong>3️⃣ Configure IIS Website</strong>
              </h6>
              <blockquote>
                <p>
                  “Next, I create and configure a new site in IIS for my
                  application.”
                </p>
              </blockquote>
              <h6>Steps:</h6>
              <ol>
                <li>
                  <p>
                    Open <strong>IIS Manager</strong> (<code>inetmgr</code>)
                  </p>
                </li>
                <li>
                  <p>
                    Right-click <strong>Sites → Add Website</strong>
                  </p>
                </li>
                <li>
                  <p>Configure:</p>
                  <ul>
                    <li>
                      <p>
                        <strong>Site name</strong>: e.g. <code>MyApp</code>
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Physical path</strong>: folder containing your
                        published files
                        <br />
                        (e.g. <code>C:\inetpub\MyApp</code>)
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Port</strong>: e.g. <code>80</code> (or any
                        available)
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    Click <strong>OK</strong>
                  </p>
                </li>
              </ol>
              <h6>Optional:</h6>
              <ul>
                <li>
                  <p>
                    If you’re hosting multiple apps, use{" "}
                    <strong>different ports</strong> or{" "}
                    <strong>hostnames</strong>.
                  </p>
                </li>
                <li>
                  <p>
                    For HTTPS, bind a <strong>certificate</strong> under{" "}
                    <em>Bindings…</em>
                  </p>
                </li>
              </ul>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-4">
            <h6>4️⃣ Configure Application Pool</h6>
            <div>
              <h6>
                <strong>4️⃣ Configure Application Pool</strong>
              </h6>
              <blockquote>
                <p>
                  “Then I ensure the application pool runs correctly for .NET
                  Core.”
                </p>
              </blockquote>
              <h6>Steps:</h6>
              <ol>
                <li>
                  <p>
                    In IIS Manager → <strong>Application Pools</strong>
                  </p>
                </li>
                <li>
                  <p>Find your app pool (same name as your site)</p>
                </li>
                <li>
                  <p>
                    Open <strong>Advanced Settings</strong>:
                  </p>
                  <ul>
                    <li>
                      <p>
                        <strong>.NET CLR version:</strong> →{" "}
                        <em>No Managed Code</em>
                        <br />
                        (ASP.NET Core runs via Kestrel, not the old .NET
                        Framework runtime)
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Start Mode:</strong> → <em>AlwaysRunning</em>{" "}
                        (optional for production)
                      </p>
                    </li>
                    <li>
                      <p>
                        <strong>Identity:</strong> →{" "}
                        <code>ApplicationPoolIdentity</code> (default is fine)
                      </p>
                    </li>
                  </ul>
                </li>
              </ol>
              <hr />
            </div>
          </article>
          <article id="iis-deploy-5">
            <h6>5️⃣</h6>
            <div>
              <h6>
                <strong>5️⃣ Test and Troubleshoot</strong>
              </h6>
              <blockquote>
                <p>
                  “Finally, I browse to the site and verify that it runs
                  correctly.”
                </p>
              </blockquote>
              <h6>Steps:</h6>
              <ol>
                <li>
                  <p>
                    Open browser → <code>http://&lt;server-ip&gt;</code> or{" "}
                    <code>http://localhost</code>
                  </p>
                </li>
                <li>
                  <p>Check if the app starts.</p>
                </li>
              </ol>
              <p>If not:</p>
              <ul>
                <li>
                  <p>
                    Check{" "}
                    <strong>Event Viewer → Windows Logs → Application</strong>{" "}
                    for errors.
                  </p>
                </li>
                <li>
                  <p>
                    Check <strong>logs</strong> under:
                  </p>
                  <Highlight language="makefile">{`C:\\inetpub\\logs\\LogFiles`}</Highlight>
                </li>
                <li>
                  <p>
                    Verify <strong>web.config</strong> (ASP.NET Core creates
                    this automatically during publish).
                  </p>
                </li>
              </ul>
              <hr />
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
