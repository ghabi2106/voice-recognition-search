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
              Docker est un projet open source permettant d???automatiser le
              d??ploiement d???applications en tant que conteneurs portables et
              autonomes ex??cutables sur le cloud ou localement.
            </p>
          </article>
          <article id="container-image">
            <h6>Container image</h6>
            <p>
              package de toutes les d??pendances et informations n??cessaires pour
              cr??er un conteneur. Une image inclut toutes les d??pendances
              (notamment les frameworks) ainsi que la configuration de
              d??ploiement et d???ex??cution ?? utiliser par le runtime du conteneur.
              Une image est immuable une fois qu???elle a ??t?? cr????e.
            </p>
          </article>
          <article id="dockerfile">
            <h6>Dockerfile</h6>
            <p>
              fichier texte qui contient des instructions pour la g??n??ration
              d???une image de l???ancrage. C???est comme un script de commandes, la
              premi??re ligne indique l???image de base avec laquelle commencer,
              puis suivent les instructions pour installer les programmes
              requis, copier les fichiers, etc. jusqu????? obtenir l???environnement
              de travail dont vous avez besoin.
            </p>
          </article>
          <article id="build">
            <h6>Build</h6>
            <div>
              <p>
                action de cr??er une image conteneur sur la base des informations
                et du contexte fournis par le fichier Dockerfile associ??, plus
                des fichiers suppl??mentaires dans le dossier o?? l???image est
                cr????e.
              </p>
              <Highlight language="bash">{`docker build`}</Highlight>
            </div>
          </article>
          <article id="container">
            <h6>Container</h6>
            <p>
              instance d???une image Docker. Un conteneur repr??sente l???ex??cution
              d???une application, d???un processus ou d???un service. Il renferme une
              image Docker, un environnement d???ex??cution et un ensemble standard
              d???instructions. Pour mettre un service ?? l?????chelle, vous cr??ez
              plusieurs instances d???un conteneur ?? partir de la m??me image.
            </p>
          </article>
          <article id="volumes">
            <h6>Volumes</h6>
            <p>
              offre un syst??me de fichiers accessible en ??criture que le
              conteneur peut utiliser. Dans la mesure o?? les images sont en
              lecture seule, mais que la plupart des programmes ont besoin
              d?????crire dans le syst??me de fichiers, les volumes ajoutent une
              couche accessible en ??criture, par-dessus l???image de conteneur,
              afin que les programmes aient acc??s ?? un syst??me de fichiers
              accessible en ??criture. Le programme ne sait pas qu???il acc??de ?? un
              syst??me de fichiers en couches, il s???agit simplement du syst??me de
              fichiers normal. Les volumes r??sident dans le syst??me h??te et sont
              g??r??s par Docker.
            </p>
          </article>
          <article id="docker-hub">
            <h6>Docker Hub</h6>
            <p>
              registre public dans lequel vous pouvez charger et manipuler des
              images. Docker Hub fournit un h??bergement d???images Docker, des
              registres publics ou priv??s, des d??clencheurs de build et des
              webhooks, et l???int??gration avec GitHub et Bitbucket.
            </p>
          </article>
          <article id="compose">
            <h6>Compose</h6>
            <p>
              outil en ligne de commande et format de fichier YAML fournissant
              des m??tadonn??es pour la d??finition et l???ex??cution d???applications
              multiconteneurs. Vous d??finissez une application bas??e sur
              plusieurs images avec un ou plusieurs fichiers .yml qui peuvent
              remplacer les valeurs en fonction de l???environnement. Apr??s avoir
              cr???? les d??finitions, vous d??ployez l???application multiconteneur
              enti??re ?? l???aide d???une seule commande (docker-compose up) qui cr??e
              un conteneur par image sur l???h??te Docker.
            </p>
          </article>
          <article id="registry">
            <h6>Registry</h6>
            <p>
              service qui fournit l???acc??s aux d??p??ts. Le registre par d??faut
              utilis?? pour la plupart des images publiques est Docker Hub
              (propri??t?? de l???organisation Docker). Un registre contient
              g??n??ralement des d??p??ts de plusieurs ??quipes. Les entreprises
              utilisent souvent des registres priv??s pour stocker et g??rer les
              images qu???elles ont cr????es.
            </p>
          </article>
          <article id="cluster">
            <h6>Cluster</h6>
            <p>
              collection d???h??tes Docker expos??s en tant qu???h??te Docker virtuel
              unique, ce qui permet la mise ?? l?????chelle de l???application en
              fonction du nombre d???instances des services r??partis entre les
              diff??rents h??tes au sein du cluster. Vous pouvez cr??er des
              clusters Docker avec Kubernetes, Azure Service Fabric, Docker
              Swarm et Mesosphere DC/OS.
            </p>
          </article>
          <article id="orchestrator">
            <h6>Orchestrator</h6>
            <p>
              outil qui simplifie la gestion des clusters et des h??tes Docker.
              Les orchestrateurs vous permettent de g??rer les images, les
              conteneurs et les h??tes ?? l???aide d???une interface de ligne de
              commande (CLI) ou d???une interface graphique utilisateur. Vous
              pouvez g??rer la mise en r??seau des conteneurs, les configurations,
              l?????quilibrage de charge, la d??couverte des services, la haute
              disponibilit??, la configuration des h??tes Docker, et bien plus
              encore. Un orchestrateur g??re l???ex??cution, la distribution, la
              mise ?? l?????chelle et la r??paration des charges de travail dans une
              collection de n??uds. En r??gle g??n??rale, les produits Orchestrator
              sont les m??mes produits qui fournissent l???infrastructure de
              cluster, comme Kubernetes et Azure Service Fabric, entre autres
              offres sur le march??.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
