import React from "react";
import { Link } from "react-router-dom";

export default function Clr() {
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
                    href="#introduction"
                  >
                    Introduction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#metadata"
                  >
                    Metadata
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
          <h3>Common Runtime Language</h3>
          <article className="" id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                La compilation traduit code source en langage MSIL (Microsoft
                Intermediate Language) et génère les métadonnées requises.
              </p>
              <p>
                Au moment de l'exécution, un compilateur juste-à-temps (JIT)
                transforme le MSIL en code natif.
              </p>
              <p>
                Le code managé -MSIL- bénéficie de fonctionnalités telles que
                l’intégration interlangage, la gestion des exceptions
                inter-langages, la sécurité améliorée, la prise en charge du
                contrôle de version et du déploiement, un modèle simplifié pour
                l’interaction des composants, ainsi que des services de
                débogage.
              </p>
            </div>
          </article>
          <article className="" id="metadata">
            <h6>Metadata</h6>
            <div>
              <p>
                Les métadonnées décrivent tous les types et membres définis dans
                votre code sous une forme indépendante du langage
              </p>
              <ul>
                <li>
                  <p>Description de l'assembly.</p>
                  <ul>
                    <li>
                      <p>Identité (nom, version, culture, clé publique).</p>
                    </li>
                    <li>
                      <p>Les types exportés.</p>
                    </li>
                    <li>
                      <p>Les autres assemblys dont dépend cet assembly.</p>
                    </li>
                    <li>
                      <p>
                        Les autorisations de sécurité nécessaires à l'exécution.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Description des types.</p>
                  <ul>
                    <li>
                      <p>
                        Nom, visibilité, classe de base et interfaces
                        implémentées.
                      </p>
                    </li>
                    <li>
                      <p>
                        Membres (méthodes, champs, propriétés, événements, types
                        imbriqués).
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Attributs.</p>
                  <ul>
                    <li>
                      Éléments descriptifs supplémentaires qui modifient les
                      types et les membres.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
