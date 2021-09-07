import React from "react";
import { Link } from "react-router-dom";

export default function Spa() {
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
                    href="#spa"
                  >
                    SPA
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#xmlhttprequest"
                  >
                    XMLHttpRequest
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#ajax"
                  >
                    Ajax
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#mpa"
                  >
                    MPA
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#spa-mpa"
                  >
                    SPA vs MPA
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#seo"
                  >
                    SEO
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
                  to="/css"
                >
                  CSS
                </Link>
              </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/html"
                  >
                    HTML
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/javascript"
                  >
                    Javascript
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/webstorage"
                  >
                    Web Storage API
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/sass"
                  >
                    Sass
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/spa"
                  >
                    MPA SPA XMLHttpRequest Ajax
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
          <h3>MPA SPA XMLHttpRequest Ajax</h3>
          <article id="spa">
            <h6>SPA (Single-page application)</h6>
            <div>
              <p>
                Une application monopage ou SPA (« Single-page application » en
                anglais) est une implémentation d'application web qui ne charge
                qu'un seul document web, puis met à jour le contenu du corps de
                ce document via des API JavaScript telles que XMLHttpRequest et
                Fetch lorsqu'un contenu différent doit être affiché.
              </p>
              <p>
                Cela permet donc aux utilisateurs d'utiliser des sites web sans
                charger de nouvelles pages entières à partir du serveur, ce qui
                peut entraîner des gains de performances et une expérience plus
                dynamique, avec certains inconvénients tels que le référencement
                (SEO), plus d'efforts nécessaires pour maintenir l'état, mettre
                en œuvre la navigation et mesurer les performances.
              </p>
              <p>Avantages d'une application d'une seule page :</p>
              <ul>
                <li>
                  <strong>Performances</strong> . Toutes les ressources sont
                  chargées au cours d'une session, puis, lors de l'interaction
                  avec la page, seules les données nécessaires sont modifiées.
                  Cette approche augmente considérablement les performances des
                  applications Web.
                </li>
                <li>
                  <strong>Expérience utilisateur améliorée</strong> . Ces
                  applications offrent aux utilisateurs une expérience linéaire
                  plus compréhensible. De plus, l'utilisation des frameworks
                  AJAX et JavaScript, ainsi que le fait qu'il n'y a qu'une seule
                  page web, permet de construire une interface plus flexible et
                  réactive.
                </li>
                <li>
                  <strong>Mise en cache des données</strong> . Après la première
                  requête au serveur, toutes les données locales nécessaires
                  sont stockées dans le cache, ce qui offre aux utilisateurs la
                  possibilité de travailler en mode hors ligne (par exemple, le
                  mode hors ligne GoogleDocs).
                </li>
                <li>
                  <strong>Vitesse de développement</strong> . Toutes choses
                  égales par ailleurs, vous devrez développer et tester moins
                  d'éléments d'application et pourrez réutiliser une partie du
                  code.
                </li>
                <li>
                  <strong>Facilité de débogage</strong> . Un SPA est le plus
                  souvent développé sur la base de frameworks populaires (React,
                  Vue.js, AngularJS) qui proposent leurs propres outils de
                  débogage basés sur Google Chrome, par exemple, Vue.js
                  devtools.
                </li>
              </ul>
              <p>Inconvénients d'une application d'une seule page :</p>
              <ul>
                <li>
                  <strong>Problèmes de référencement</strong> . Toute
                  application Web s'exécute en JavaScript et les données sont
                  chargées sans recharger la page et uniquement à la demande des
                  utilisateurs. Cela signifie qu'il n'y a pas d'URL distinctes
                  optimisées pour les moteurs de recherche et que les moteurs de
                  recherche ne voient pas le contenu. Le rendu exclusivement
                  côté serveur peut résoudre le problème.
                </li>
                <li>
                  <strong>Temps de téléchargement</strong> . Si la plate-forme
                  est complexe, volumineuse et mal optimisée, les navigateurs
                  des utilisateurs mettront plus de temps à charger le contenu.
                </li>
                <li>
                  <strong>
                    La prise en charge de JavaScript est nécessaire
                  </strong>{" "}
                  . Sans cette fonctionnalité, vous ne pouvez pas utiliser
                  pleinement la fonctionnalité complète d'une certaine
                  application. Si les utilisateurs désactivent JS dans leur
                  navigateur, ils ne pourront pas utiliser l'application au
                  maximum.
                </li>
              </ul>
            </div>
          </article>
          <article id="xmlhttprequest">
            <h6>XMLHttpRequest</h6>
            <p>
              Les objets <code>XMLHttpRequest</code> (XHR) permettent
              d'interagir avec des serveurs. On peut récupérer des données à
              partir d'une URL sans avoir à rafraîchir complètement la page.
              Cela permet à une page web d'être mise à jour sans perturber les
              actions de l'utilisateur. <code>XMLHttpRequest</code> est beaucoup
              utilisé par l'approche AJAX.
            </p>
          </article>
          <article id="ajax">
            <h6>Ajax</h6>
            <div>
              <p>
                Le JavaScript et XML asynchrone (AJAX) est une pratique de
                programmation qui consiste à construire des pages web plus
                complexes et plus dynamiques en utilisant une technologie connue
                sous le nom de XMLHttpRequest.
              </p>
              <p>
                AJAX vous permet de mettre à jour simplement des parties du DOM
                d'une page web HTML au lieu de devoir recharger la page entière.
                AJAX vous permet également de travailler de manière asynchrone,
                c'est-à-dire que votre code continue à s'exécuter pendant que la
                partie de votre page web essaie de se recharger (par opposition
                à la méthode synchrone qui bloque l'exécution de votre code
                jusqu'à ce que la partie de votre page web ait fini de se
                recharger).
              </p>
              <p>
                Avec les sites web interactifs et les standards modernes du web,
                AJAX est progressivement remplacé par des fonctions dans les
                cadres JavaScript et l'API standard officielle Fetch API.
              </p>
            </div>
          </article>
          <article id="mpa">
            <h6>Multi-page Application (MPA)</h6>
            <div>
              <p>
                Une application multipage est une application Web composée d'un
                grand nombre de pages entièrement actualisées à chaque fois que
                les données y sont modifiées. Tout changement de données ou
                transfert de données vers le serveur conduit à une nouvelle page
                affichée dans le navigateur.
              </p>
              <p>Avantages d'une application multipage :</p>
              <ul>
                <li>
                  <strong>L'optimisation SEO est possible</strong> .
                  L'application comporte plusieurs pages, et chacune d'entre
                  elles peut être optimisée pour un groupe spécifique de
                  demandes afin d'obtenir du trafic organique gratuit de Google.
                </li>
                <li>
                  <strong>Facilité de mise à l'échelle</strong> . Ce type
                  d'architecture permet de créer autant de nouvelles pages pour
                  chaque produit ou service que vous le souhaitez et d'y
                  apporter les modifications.
                </li>
                <li>
                  <strong>Solutions prêtes à l'emploi disponibles</strong> . En
                  règle générale, le développement de MPA nécessite une pile
                  technologique plus petite et, en outre, une large gamme de
                  solutions prêtes à l'emploi (CMS) est disponible.
                </li>
                <li>
                  <strong>Capacités d'analyse</strong> . Les outils d'analyse
                  Web comme Google Analytics peuvent être facilement intégrés
                  dans ce type de projet et permettent de suivre les
                  performances de chaque page commerciale.
                </li>
              </ul>
              <p>Inconvénients de l'application multipage :</p>
              <ul>
                <li>
                  <strong>Problèmes de performances possibles</strong> . En cas
                  de grand nombre de requêtes et de nécessité de recharger un
                  grand nombre de pages, les performances et la vitesse en
                  prendront forcément un coup. Cela est particulièrement vrai
                  pour les projets avec un trafic de site Web élevé, un grand
                  nombre de pages et de multiples fonctions.
                </li>
                <li>
                  <strong>Intégration étroite front-end et back-end</strong> .
                  En règle générale, ces composants d'une application Web sont
                  profondément intégrés, et c'est pourquoi leur développement et
                  leur test peuvent prendre plus de temps.
                </li>
                <li>
                  <strong>Maintenance et mises à jour</strong> . Fournir un
                  support technique à des sites Web comportant de nombreuses
                  pages peut être une tâche ardue. Cette question s'applique
                  également aux questions de sécurité.
                </li>
              </ul>
            </div>
          </article>
          <article id="spa-mpa">
            <h6>SPA vs MPA</h6>
            <p>
              SPA gagne en termes de vitesse et de réutilisabilité du code, qui
              peut être appliqué pour développer votre application mobile, mais
              il présente des lacunes en matière d' optimisation du
              référencement . L'utilisation d'un MPA vous aidera à vous classer
              plus haut dans Google et est plus évolutif mais beaucoup plus lent
              que les SPA.
            </p>
          </article>
          <article id="seo">
            <h6>Search engine optimization (SEO)</h6>
            <p>
              L'optimisation des moteurs de recherche ( SEO ) est le processus
              d'amélioration de la qualité et de la quantité de trafic vers un
              site Web ou une page Web provenant des moteurs de recherche.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
