import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

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
                    href="#container-image"
                  >
                    Container image
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dockerfile"
                  >
                    Dockerfile
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#build"
                  >
                    Build
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#container"
                  >
                    Container
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#volumes"
                  >
                    Volumes
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
                    href="#compose"
                  >
                    Compose
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
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#orchestrator"
                  >
                    Orchestrator
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
            <p>
              Docker is an open-source project for automating the deployment of
              applications as portable, self-sufficient containers that can run
              on the cloud or on-premises.
            </p>
          </article>
          <article id="container-image">
            <h6>Container image</h6>
            <p>
              A package with all the dependencies and information needed to
              create a container. An image includes all the dependencies (such
              as frameworks) plus deployment and execution configuration to be
              used by a container runtime. An image is immutable once it has
              been created.
            </p>
          </article>
          <article id="dockerfile">
            <h6>Dockerfile</h6>
            <p>
              A text file that contains instructions for building a Docker
              image. It's like a batch script, the first line states the base
              image to begin with and then follow the instructions to install
              required programs, copy files, and so on, until you get the
              working environment you need.
            </p>
          </article>
          <article id="build">
            <h6>Build</h6>
            <div>
              <p>
                The action of building a container image based on the
                information and context provided by its Dockerfile, plus
                additional files in the folder where the image is built.
              </p>
              <Highlight language="bash">{`docker build`}</Highlight>
            </div>
          </article>
          <article id="container">
            <h6>Container</h6>
            <p>
              An instance of a Docker image. A container represents the
              execution of a single application, process, or service. It
              consists of the contents of a Docker image, an execution
              environment, and a standard set of instructions. When scaling a
              service, you create multiple instances of a container from the
              same image.
            </p>
          </article>
          <article id="volumes">
            <h6>Volumes</h6>
            <p>
              Offer a writable filesystem that the container can use. Since
              images are read-only but most programs need to write to the
              filesystem, volumes add a writable layer, on top of the container
              image, so the programs have access to a writable filesystem. The
              program doesn't know it's accessing a layered filesystem, it's
              just the filesystem as usual. Volumes live in the host system and
              are managed by Docker.
            </p>
          </article>
          <article id="docker-hub">
            <h6>Docker Hub</h6>
            <p>
              A public registry to upload images and work with them. Docker Hub
              provides Docker image hosting, public or private registries, build
              triggers and web hooks, and integration with GitHub and Bitbucket.
            </p>
          </article>
          <article id="compose">
            <h6>Compose</h6>
            <p>
              A command-line tool and YAML file format with metadata for
              defining and running multi-container applications. You define a
              single application based on multiple images with one or more .yml
              files that can override values depending on the environment. After
              you've created the definitions, you can deploy the whole
              multi-container application with a single command (docker-compose
              up) that creates a container per image on the Docker host.
            </p>
          </article>
          <article id="registry">
            <h6>Registry</h6>
            <p>
              A service that provides access to repositories. The default
              registry for most public images is Docker Hub (owned by Docker as
              an organization). A registry usually contains repositories from
              multiple teams. Companies often have private registries to store
              and manage images they've created.
            </p>
          </article>
          <article id="cluster">
            <h6>Cluster</h6>
            <p>
              A collection of Docker hosts exposed as if it were a single
              virtual Docker host, so that the application can scale to multiple
              instances of the services spread across multiple hosts within the
              cluster. Docker clusters can be created with Kubernetes, Azure
              Service Fabric, Docker Swarm and Mesosphere DC/OS.
            </p>
          </article>
          <article id="orchestrator">
            <h6>Orchestrator</h6>
            <p>
              A tool that simplifies management of clusters and Docker hosts.
              Orchestrators enable you to manage their images, containers, and
              hosts through a command-line interface (CLI) or a graphical UI.
              You can manage container networking, configurations, load
              balancing, service discovery, high availability, Docker host
              configuration, and more. An orchestrator is responsible for
              running, distributing, scaling, and healing workloads across a
              collection of nodes. Typically, orchestrator products are the same
              products that provide cluster infrastructure, like Kubernetes and
              Azure Service Fabric, among other offerings in the market.A tool
              that simplifies management of clusters and Docker hosts.
              Orchestrators enable you to manage their images, containers, and
              hosts through a command-line interface (CLI) or a graphical UI.
              You can manage container networking, configurations, load
              balancing, service discovery, high availability, Docker host
              configuration, and more. An orchestrator is responsible for
              running, distributing, scaling, and healing workloads across a
              collection of nodes. Typically, orchestrator products are the same
              products that provide cluster infrastructure, like Kubernetes and
              Azure Service Fabric, among other offerings in the market.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
