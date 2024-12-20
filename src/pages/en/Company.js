import React from "react";
import { Link } from "react-router-dom";

export default function Company() {
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
                    href="#describe"
                  >
                    ATUM
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#atum-questions"
                  >
                    ATUM Questions
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#diagram"
                  >
                    Diagram
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#diagram-questions"
                  >
                    Diagram Questions
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
          <h3>ATUM Project</h3>
          <article id="describe">
            <h6>ATUM</h6>
            <div>
              <h6>
                <strong>1. Introduction to ATUM</strong>
              </h6>
              <p>
                ATUM aims to optimize software management by using a blend of
                in-house and industry-standard solutions. Key components
                include:
              </p>
              <ul>
                <li>
                  <strong>Software items:</strong> Bootloader, platform,
                  application, configuration, graphical assets, etc.
                </li>
                <li>
                  <strong>Key principles:</strong>
                  <ul>
                    <li>
                      Leverage standard solutions where possible, develop only
                      necessary custom plugins.
                    </li>
                    <li>
                      Ensure modularity with minimal interdependencies across
                      teams.
                    </li>
                    <li>Standardize tools and solutions (UEA, DX, E-PD).</li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>2. Architecture</strong>
              </h6>
              <p>The ATUM application architecture features:</p>
              <ul>
                <li>
                  <strong>Backend Service:</strong> Developed in C#, ASP.Net
                  Core with REST and WebSocket communication.
                </li>
                <li>
                  <strong>Frontend:</strong> Web-based (Vue.js and Vuetify) and
                  compatible with multiple OS environments.
                </li>
                <li>
                  <strong>Cloud-Hosted:</strong> Operates on Microsoft Azure
                  with portability options for other providers.
                </li>
                <li>
                  <strong>Integration:</strong> Supports external APIs (Active
                  Directory, CBS, TeamCenter) and tools for GUI and touch
                  builder.
                </li>
              </ul>
            </div>
          </article>
          <article id="atum-questions">
            <h6>ATUM Questions</h6>
            <div>
              <h6>
                <strong>Questions for Clarification</strong>
              </h6>
              <ol>
                <li>
                  <strong>Integration Details:</strong> How are third-party
                  tools (e.g., GUIX, EmWin) integrated into the system? Are
                  there compatibility challenges?
                </li>
                <li>
                  <strong>Microservices Transition:</strong> What are the
                  biggest technical or organizational hurdles for migrating
                  existing components to microservices?
                </li>
                <li>
                  <strong>Scalability Plan:</strong> Does the architecture
                  account for increased user load or additional features in the
                  future? If so, how?
                </li>
                <li>
                  <strong>Cybersecurity:</strong> What measures are implemented
                  to align with the mentioned cybersecurity standards?
                </li>
                <li>
                  <strong>Documentation:</strong> What kind of documentation or
                  tool access is currently available to team members?
                </li>
              </ol>
            </div>
          </article>
          <article id="diagram">
            <h6>ATUM Diagram</h6>
            <div>
              <p>
                This diagram outlines the architecture of{" "}
                <strong>ATUM's microservices-based system</strong>, breaking it
                into several components and their relationships. Here’s a
                detailed explanation of each section:
              </p>
              <h6>
                <strong>1. Desktop Application (Left Section)</strong>
              </h6>
              <p>
                This part focuses on the <strong>C# .NET Core</strong> desktop
                services. It includes:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Event Services (C#):</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Electronic Simulation:</strong> A{" "}
                      <strong>DLL Loader</strong> interacts with the{" "}
                      <strong>Instance Manager</strong>.
                    </li>
                    <li>
                      <strong>App Updater</strong> and{" "}
                      <strong>Data Acquisition</strong>: Responsible for
                      updating and gathering data.
                    </li>
                    <li>
                      <strong>Electronic Programming:</strong> Likely handles
                      tasks related to hardware or firmware programming.
                    </li>
                    <li>
                      <strong>Appliance Communication:</strong> Facilitates
                      communication with external devices.
                    </li>
                    <li>
                      <strong>Automation Execution:</strong>
                      <ul>
                        <li>
                          Uses a <strong>JS Execution Engine (V8)</strong> for
                          JavaScript execution.
                        </li>
                        <li>
                          Relies on a <strong>Common JS Library</strong> (shared
                          functionality).
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Binary Generation:</strong> Generates binary files
                    for deployment or execution.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Logging/Reporting/Documentation:</strong> Tools for
                    generating reports, logs, and documentation.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Shared Bundlers:</strong> Manages shared
                    functionalities.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Additional Services:</strong> Optional
                    functionalities like Vision systems, Robots, or database
                    queries.
                  </p>
                </li>
              </ul>
              <h6>
                <strong>
                  2. Launcher Frame and View Selection (Middle Section)
                </strong>
              </h6>
              <p>
                This part focuses on <strong>UI services</strong> for desktop
                and web-based applications:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>WebView2 (Vue.js, Vuetify):</strong>
                  </p>
                  <ul>
                    <li>
                      Provides <strong>Shared Web UI Views</strong>, which
                      ensures a consistent user interface.
                    </li>
                    <li>
                      Includes:
                      <ul>
                        <li>
                          <strong>UI Simulation:</strong> Simulates user
                          interfaces.
                        </li>
                        <li>
                          <strong>Test Automation Designer:</strong> Designs
                          automated tests.
                        </li>
                        <li>
                          <strong>Appliance Connection and Diagnostics:</strong>{" "}
                          Tools for connecting and diagnosing appliances.
                        </li>
                        <li>
                          <strong>Additional Views.</strong>
                        </li>
                      </ul>
                    </li>
                    <li>
                      Uses a <strong>Common JS Library</strong> for shared
                      JavaScript functionality.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>XAML UI (Material Design):</strong>
                  </p>
                  <ul>
                    <li>
                      Used for <strong>Data Acquisition</strong> and{" "}
                      <strong>Electronics Programming</strong>.
                    </li>
                    <li>
                      Includes <strong>Additional XAML Views</strong>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Unicast JSON Event Bus:</strong> Facilitates
                    communication by passing JSON payloads across different
                    services.
                  </p>
                </li>
              </ul>
              <h6>
                <strong>3. Shared Web UI (Right Section)</strong>
              </h6>
              <p>
                The Shared Web UI ensures consistent web-based functionality
                across services:
              </p>
              <ul>
                <li>
                  <p>
                    <strong>Views:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>Authentication (Login):</strong> Handles user
                      authentication.
                    </li>
                    <li>
                      <strong>Permissions Manager:</strong> Manages user roles
                      and permissions.
                    </li>
                    <li>
                      <strong>Configuration Management:</strong> Manages system
                      configurations.
                    </li>
                    <li>
                      <strong>Configuration Designer:</strong> A tool for
                      designing configurations.
                    </li>
                    <li>
                      <strong>Additional Views.</strong>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Local Configuration Files:</strong> Stored in an
                    indexed database (IndexedDB).
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Web Service (C# .NET Core):</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>REST API (JSON payloads):</strong>
                      <ul>
                        <li>
                          Handles <strong>Authentication</strong> and{" "}
                          <strong>Authorization</strong>.
                        </li>
                        <li>
                          Provides <strong>Configuration Management</strong>{" "}
                          services.
                        </li>
                        <li>
                          Manages <strong>History and Logging</strong>.
                        </li>
                        <li>
                          Supports <strong>Additional REST services</strong>.
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Shared Web UI Host</strong> provides access to{" "}
                      <strong>Shared Web UI Views</strong>.
                    </li>
                  </ul>
                </li>
                <li>
                  <p>
                    <strong>Database (SQL):</strong>
                  </p>
                  <ul>
                    <li>
                      Stores configuration files, permission tables, and
                      additional data.
                    </li>
                    <li>
                      LDAP/AD (Active Directory) integrates for user management.
                    </li>
                  </ul>
                </li>
              </ul>
              <h6>
                <strong>4. Common Libraries</strong>
              </h6>
              <p>
                At the bottom, <strong>Common C# Library (.NET Core)</strong>:
              </p>
              <ul>
                <li>
                  Implements{" "}
                  <strong>interface-independent functionalities</strong> shared
                  across services.
                </li>
                <li>Ensures reusability of critical backend components.</li>
              </ul>
              <h6>
                <strong>Key Points to Highlight</strong>
              </h6>
              <ol>
                <li>
                  <strong>Separation of Concerns:</strong>
                  <ul>
                    <li>
                      Clear separation between desktop services, UI layers, and
                      backend services.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Shared Libraries:</strong>
                  <ul>
                    <li>
                      Both <strong>Common JS Library</strong> and{" "}
                      <strong>Common C# Library</strong> promote code reuse and
                      modularity.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Web and Desktop Integration:</strong>
                  <ul>
                    <li>
                      Web-based (Vue.js) and desktop-based (XAML) UIs are
                      integrated seamlessly.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>JSON Event Bus:</strong>
                  <ul>
                    <li>
                      Acts as the communication medium between components,
                      ensuring lightweight and structured messaging.
                    </li>
                  </ul>
                </li>
              </ol>
            </div>
          </article>
          <article id="diagram-questions">
            <h6>Diagram questions</h6>
            <div>
              <h6>
                <strong>Potential Questions</strong>
              </h6>
              <ol>
                <li>
                  <strong>Event Bus:</strong> How does the unicast JSON Event
                  Bus scale for multiple simultaneous communications?
                </li>
                <li>
                  <strong>Configuration Designer:</strong> What are the main
                  capabilities of the configuration designer?
                </li>
                <li>
                  <strong>WebView2 vs XAML UI:</strong> Why are two different UI
                  frameworks used? Are they for different target platforms?
                </li>
                <li>
                  <strong>Authentication and Authorization:</strong> Is there a
                  centralized service managing authentication for both web and
                  desktop?
                </li>
              </ol>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
