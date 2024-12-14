import React from "react";
import { Link } from "react-router-dom";

export default function Docker() {
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
                    href="#docker"
                  >
                    Docker
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#compose"
                  >
                    Compose
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#orchestrator"
                  >
                    Orchestrator
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#docker-hub"
                  >
                    Docker Hub
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#registry"
                  >
                    Registry
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cluster"
                  >
                    Cluster
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
          <h3>Docker</h3>
          <article id="docker">
            <h6>Docker</h6>
            <div>
              <p>
                <strong>Docker</strong> is an open-source platform designed to
                create, deploy, and manage applications in lightweight, portable
                containers. Containers package an application and its
                dependencies together, ensuring consistency across environments.
              </p>
              <h6>Key Concepts:</h6>
              <ul>
                <li>
                  <strong>Images</strong>: Read-only templates to create
                  containers.
                </li>
                <li>
                  <strong>Containers</strong>: Runtime instances of images.
                </li>
                <li>
                  <strong>Dockerfile</strong>: A script defining instructions to
                  build a Docker image.
                </li>
                <li>
                  <strong>Volumes</strong>: Persistent storage for containers.
                </li>
              </ul>
              <h6>Benefits:</h6>
              <ul>
                <li>Platform-independent applications.</li>
                <li>Streamlined deployment.</li>
                <li>Resource-efficient compared to virtual machines.</li>
              </ul>
              <h6>Use Cases:</h6>
              <ul>
                <li>Microservices.</li>
                <li>DevOps automation.</li>
                <li>Testing and continuous integration/deployment (CI/CD).</li>
              </ul>
            </div>
          </article>
          <article id="compose">
            <h6>Compose</h6>
            <div>
              <p>
                <strong>Docker Compose</strong> is a tool for defining and
                running multi-container Docker applications using a YAML file to
                configure services, networks, and volumes.
              </p>
              <p>
                <strong>Docker Compose</strong> is a tool used to define and
                manage multi-container Docker applications. <br />
                With Docker Compose, you can use a YAML file (
                <code>docker-compose.yml</code>) to configure your application’s
                services, networks, and volumes. <br />
                It simplifies the process of orchestrating and running multiple
                containers together.
              </p>
              <h6>Key Features:</h6>
              <ul>
                <li>
                  <strong>Multi-container applications</strong>: Define services
                  for databases, web servers, and more.
                </li>
                <li>
                  <strong>Isolation</strong>: Each service runs in its own
                  container.
                </li>
                <li>
                  <strong>Simplified Commands</strong>: Use{" "}
                  <code>docker-compose up</code> to start all services and{" "}
                  <code>docker-compose down</code> to stop them.
                </li>
              </ul>
              <h6>Use Case Example:</h6>
              <p>
                Run a web application with separate containers for the frontend,
                backend, and database.
              </p>
            </div>
          </article>
          <article id="orchestrator">
            <h6>Orchestrator</h6>
            <p>
              An orchestrator is a tool or system that automates the deployment,
              management, and scaling of containerized applications, ensuring
              optimal resource allocation and efficient operations across a
              cluster. Example Kubernetes.
            </p>
          </article>
          <article id="docker-hub">
            <h6>Docker Hub</h6>
            <p>
              Docker Hub is a cloud-based registry that allows users to store,
              share, and access Docker container images, enabling easy
              distribution of official and community-contributed images.
            </p>
          </article>
          <article id="registry">
            <h6>Registry</h6>
            <p>
              A Docker registry is a storage and distribution system for Docker
              images. It allows users to store, share, and manage Docker
              container images. Docker Hub is the default public registry, but
              private registries can also be set up.
            </p>
          </article>
          <article id="cluster">
            <h6>Cluster</h6>
            <p>
              Cluster is a group of Docker nodes (machines) that work together
              to run containers in a distributed manner, often managed by an
              orchestration tool like Kubernetes or Docker Swarm, ensuring
              scalability, availability, and fault tolerance across multiple
              systems.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
