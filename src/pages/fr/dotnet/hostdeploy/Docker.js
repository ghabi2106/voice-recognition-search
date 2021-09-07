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
              Docker est un projet open source permettant d’automatiser le
              déploiement d’applications en tant que conteneurs portables et
              autonomes exécutables sur le cloud ou localement.
            </p>
          </article>
          <article id="container-image">
            <h6>Container image</h6>
            <p>
              package de toutes les dépendances et informations nécessaires pour
              créer un conteneur. Une image inclut toutes les dépendances
              (notamment les frameworks) ainsi que la configuration de
              déploiement et d’exécution à utiliser par le runtime du conteneur.
              Une image est immuable une fois qu’elle a été créée.
            </p>
          </article>
          <article id="dockerfile">
            <h6>Dockerfile</h6>
            <p>
              fichier texte qui contient des instructions pour la génération
              d’une image de l’ancrage. C’est comme un script de commandes, la
              première ligne indique l’image de base avec laquelle commencer,
              puis suivent les instructions pour installer les programmes
              requis, copier les fichiers, etc. jusqu’à obtenir l’environnement
              de travail dont vous avez besoin.
            </p>
          </article>
          <article id="build">
            <h6>Build</h6>
            <div>
              <p>
                action de créer une image conteneur sur la base des informations
                et du contexte fournis par le fichier Dockerfile associé, plus
                des fichiers supplémentaires dans le dossier où l’image est
                créée.
              </p>
              <Highlight language="bash">{`docker build`}</Highlight>
            </div>
          </article>
          <article id="container">
            <h6>Container</h6>
            <p>
              instance d’une image Docker. Un conteneur représente l’exécution
              d’une application, d’un processus ou d’un service. Il renferme une
              image Docker, un environnement d’exécution et un ensemble standard
              d’instructions. Pour mettre un service à l’échelle, vous créez
              plusieurs instances d’un conteneur à partir de la même image.
            </p>
          </article>
          <article id="volumes">
            <h6>Volumes</h6>
            <p>
              offre un système de fichiers accessible en écriture que le
              conteneur peut utiliser. Dans la mesure où les images sont en
              lecture seule, mais que la plupart des programmes ont besoin
              d’écrire dans le système de fichiers, les volumes ajoutent une
              couche accessible en écriture, par-dessus l’image de conteneur,
              afin que les programmes aient accès à un système de fichiers
              accessible en écriture. Le programme ne sait pas qu’il accède à un
              système de fichiers en couches, il s’agit simplement du système de
              fichiers normal. Les volumes résident dans le système hôte et sont
              gérés par Docker.
            </p>
          </article>
          <article id="docker-hub">
            <h6>Docker Hub</h6>
            <p>
              registre public dans lequel vous pouvez charger et manipuler des
              images. Docker Hub fournit un hébergement d’images Docker, des
              registres publics ou privés, des déclencheurs de build et des
              webhooks, et l’intégration avec GitHub et Bitbucket.
            </p>
          </article>
          <article id="compose">
            <h6>Compose</h6>
            <p>
              outil en ligne de commande et format de fichier YAML fournissant
              des métadonnées pour la définition et l’exécution d’applications
              multiconteneurs. Vous définissez une application basée sur
              plusieurs images avec un ou plusieurs fichiers .yml qui peuvent
              remplacer les valeurs en fonction de l’environnement. Après avoir
              créé les définitions, vous déployez l’application multiconteneur
              entière à l’aide d’une seule commande (docker-compose up) qui crée
              un conteneur par image sur l’hôte Docker.
            </p>
          </article>
          <article id="registry">
            <h6>Registry</h6>
            <p>
              service qui fournit l’accès aux dépôts. Le registre par défaut
              utilisé pour la plupart des images publiques est Docker Hub
              (propriété de l’organisation Docker). Un registre contient
              généralement des dépôts de plusieurs équipes. Les entreprises
              utilisent souvent des registres privés pour stocker et gérer les
              images qu’elles ont créées.
            </p>
          </article>
          <article id="cluster">
            <h6>Cluster</h6>
            <p>
              collection d’hôtes Docker exposés en tant qu’hôte Docker virtuel
              unique, ce qui permet la mise à l’échelle de l’application en
              fonction du nombre d’instances des services répartis entre les
              différents hôtes au sein du cluster. Vous pouvez créer des
              clusters Docker avec Kubernetes, Azure Service Fabric, Docker
              Swarm et Mesosphere DC/OS.
            </p>
          </article>
          <article id="orchestrator">
            <h6>Orchestrator</h6>
            <p>
              outil qui simplifie la gestion des clusters et des hôtes Docker.
              Les orchestrateurs vous permettent de gérer les images, les
              conteneurs et les hôtes à l’aide d’une interface de ligne de
              commande (CLI) ou d’une interface graphique utilisateur. Vous
              pouvez gérer la mise en réseau des conteneurs, les configurations,
              l’équilibrage de charge, la découverte des services, la haute
              disponibilité, la configuration des hôtes Docker, et bien plus
              encore. Un orchestrateur gère l’exécution, la distribution, la
              mise à l’échelle et la réparation des charges de travail dans une
              collection de nœuds. En règle générale, les produits Orchestrator
              sont les mêmes produits qui fournissent l’infrastructure de
              cluster, comme Kubernetes et Azure Service Fabric, entre autres
              offres sur le marché.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
