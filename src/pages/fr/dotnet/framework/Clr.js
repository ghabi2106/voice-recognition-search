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
                    Common Language Runtime
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#msil"
                  >
                    MSIL
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#jit"
                  >
                    JIT
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#gac"
                  >
                    Global Assembly Cache
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cts"
                  >
                    Common Type System
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cls"
                  >
                    Common Language Specification
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#cas"
                  >
                    Code Access Security
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
                    to="/dotnetcomponents"
                  >
                    .Net Components
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dotnet"
                  >
                    Difference Between .NET and .NET Core
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/assembly"
                  >
                    Assembly
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/dllexe"
                  >
                    DLL vs EXE
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/entityframework"
                  >
                    Entity Framework
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gc"
                  >
                    Garbage Collector &amp; stack vs heap
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/gcmethods"
                  >
                    GC Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/linq"
                  >
                    Linq
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/nugetpackages"
                  >
                    Nuget packages
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
          <article id="introduction">
            <h6>CLR</h6>
            <div>
              <p>
                Le CLR (Common Language Runtime) est un environnement
                d’exécution faisant partie du framework .NET de Microsoft. CLR
                gère l’exécution des programmes écrits dans différentes langages
                prises en charge.
              </p>
              <p>
                CLR transforme le code source en une forme de code secondaire
                appelée CIL (Common Intermediate Language). Au moment de
                l’exécution, CLR gère l’exécution du code CIL.
              </p>
              <p>
                Le CLR (Common Language Runtime) est responsable du
                garbage-collector(ramasse-miettes), sécurité d’accès et
                vérification du code
              </p>
            </div>
          </article>
          <article id="msil">
            <h6>MSIL</h6>
            <div>
              <p>
                Le code managé est un code dont l’exécution est gérée par Common
                Language Runtime. Il récupère le code managé et le compile en
                code machine.
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
          <article id="jit">
            <h6>JIT</h6>
            <p>
              Le compilateur JIT compile le MSIL en code machine au moment de
              l’exécution. Le code compilé par le compilateur JIT s’exécute sous
              CLR.
            </p>
          </article>
          <article id="gac">
            <h6>Global Assembly Cache (GAC)</h6>
            <div>
              <p>
                Le Global Assembly Cache (GAC) est un dossier du répertoire
                Windows (\windows\assembly) dans lequel sont stockés les «
                assembly » .NET spécifiquement désignés pour être partagés par
                toutes les applications exécutées sur un système.
              </p>
              <p>
                Le concept de GAC est le résultat de l’architecture .NET dont la
                conception répond au problème de « DLL » qui existait dans COM
                (Component Object Model).
              </p>
            </div>
          </article>
          <article id="cts">
            <h6>Common Type System (CTS)</h6>
            <p>
              Common Type System (CTS) est une norme qui spécifie comment les
              définitions et les valeurs spécifiques d’un type sont représentées
              dans la mémoire de l’ordinateur. Il est destiné à permettre aux
              programmes écrits dans différents langages de programmation de
              partager facilement des informations.
            </p>
          </article>
          <article id="cas">
            <h6>Code Access Security (CAS)</h6>
            <p>
              CAS est la solution pour empêcher le code non approuvé d’effectuer
              des actions privilégiées. Il empêche l’accès non autorisé aux
              ressources et aux opérations et limite le code pour l’exécution de
              tâches particulières.
            </p>
          </article>
          <article id="cls">
            <h6>Common Language Specification (CLS)</h6>
            <p>
              CLS signifie Common Language Specification . Avec les règles
              mentionnées sous CLS, les développeurs sont obligés d'utiliser les
              composants compatibles entre les langues. Ils sont réutilisables
              dans toutes les langues compatibles .Net.
            </p>
          </article>
          <article id="metadata">
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
