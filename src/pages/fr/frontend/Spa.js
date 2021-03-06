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
                Une application monopage ou SPA (?? Single-page application ?? en
                anglais) est une impl??mentation d'application web qui ne charge
                qu'un seul document web, puis met ?? jour le contenu du corps de
                ce document via des API JavaScript telles que XMLHttpRequest et
                Fetch lorsqu'un contenu diff??rent doit ??tre affich??.
              </p>
              <p>
                Cela permet donc aux utilisateurs d'utiliser des sites web sans
                charger de nouvelles pages enti??res ?? partir du serveur, ce qui
                peut entra??ner des gains de performances et une exp??rience plus
                dynamique, avec certains inconv??nients tels que le r??f??rencement
                (SEO), plus d'efforts n??cessaires pour maintenir l'??tat, mettre
                en ??uvre la navigation et mesurer les performances.
              </p>
              <p>Avantages d'une application d'une seule page :</p>
              <ul>
                <li>
                  <strong>Performances</strong> . Toutes les ressources sont
                  charg??es au cours d'une session, puis, lors de l'interaction
                  avec la page, seules les donn??es n??cessaires sont modifi??es.
                  Cette approche augmente consid??rablement les performances des
                  applications Web.
                </li>
                <li>
                  <strong>Exp??rience utilisateur am??lior??e</strong> . Ces
                  applications offrent aux utilisateurs une exp??rience lin??aire
                  plus compr??hensible. De plus, l'utilisation des frameworks
                  AJAX et JavaScript, ainsi que le fait qu'il n'y a qu'une seule
                  page web, permet de construire une interface plus flexible et
                  r??active.
                </li>
                <li>
                  <strong>Mise en cache des donn??es</strong> . Apr??s la premi??re
                  requ??te au serveur, toutes les donn??es locales n??cessaires
                  sont stock??es dans le cache, ce qui offre aux utilisateurs la
                  possibilit?? de travailler en mode hors ligne (par exemple, le
                  mode hors ligne GoogleDocs).
                </li>
                <li>
                  <strong>Vitesse de d??veloppement</strong> . Toutes choses
                  ??gales par ailleurs, vous devrez d??velopper et tester moins
                  d'??l??ments d'application et pourrez r??utiliser une partie du
                  code.
                </li>
                <li>
                  <strong>Facilit?? de d??bogage</strong> . Un SPA est le plus
                  souvent d??velopp?? sur la base de frameworks populaires (React,
                  Vue.js, AngularJS) qui proposent leurs propres outils de
                  d??bogage bas??s sur Google Chrome, par exemple, Vue.js
                  devtools.
                </li>
              </ul>
              <p>Inconv??nients d'une application d'une seule page :</p>
              <ul>
                <li>
                  <strong>Probl??mes de r??f??rencement</strong> . Toute
                  application Web s'ex??cute en JavaScript et les donn??es sont
                  charg??es sans recharger la page et uniquement ?? la demande des
                  utilisateurs. Cela signifie qu'il n'y a pas d'URL distinctes
                  optimis??es pour les moteurs de recherche et que les moteurs de
                  recherche ne voient pas le contenu. Le rendu exclusivement
                  c??t?? serveur peut r??soudre le probl??me.
                </li>
                <li>
                  <strong>Temps de t??l??chargement</strong> . Si la plate-forme
                  est complexe, volumineuse et mal optimis??e, les navigateurs
                  des utilisateurs mettront plus de temps ?? charger le contenu.
                </li>
                <li>
                  <strong>
                    La prise en charge de JavaScript est n??cessaire
                  </strong>{" "}
                  . Sans cette fonctionnalit??, vous ne pouvez pas utiliser
                  pleinement la fonctionnalit?? compl??te d'une certaine
                  application. Si les utilisateurs d??sactivent JS dans leur
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
              d'interagir avec des serveurs. On peut r??cup??rer des donn??es ??
              partir d'une URL sans avoir ?? rafra??chir compl??tement la page.
              Cela permet ?? une page web d'??tre mise ?? jour sans perturber les
              actions de l'utilisateur. <code>XMLHttpRequest</code> est beaucoup
              utilis?? par l'approche AJAX.
            </p>
          </article>
          <article id="ajax">
            <h6>Ajax</h6>
            <div>
              <p>
                Le JavaScript et XML asynchrone (AJAX) est une pratique de
                programmation qui consiste ?? construire des pages web plus
                complexes et plus dynamiques en utilisant une technologie connue
                sous le nom de XMLHttpRequest.
              </p>
              <p>
                AJAX vous permet de mettre ?? jour simplement des parties du DOM
                d'une page web HTML au lieu de devoir recharger la page enti??re.
                AJAX vous permet ??galement de travailler de mani??re asynchrone,
                c'est-??-dire que votre code continue ?? s'ex??cuter pendant que la
                partie de votre page web essaie de se recharger (par opposition
                ?? la m??thode synchrone qui bloque l'ex??cution de votre code
                jusqu'?? ce que la partie de votre page web ait fini de se
                recharger).
              </p>
              <p>
                Avec les sites web interactifs et les standards modernes du web,
                AJAX est progressivement remplac?? par des fonctions dans les
                cadres JavaScript et l'API standard officielle Fetch API.
              </p>
            </div>
          </article>
          <article id="mpa">
            <h6>Multi-page Application (MPA)</h6>
            <div>
              <p>
                Une application multipage est une application Web compos??e d'un
                grand nombre de pages enti??rement actualis??es ?? chaque fois que
                les donn??es y sont modifi??es. Tout changement de donn??es ou
                transfert de donn??es vers le serveur conduit ?? une nouvelle page
                affich??e dans le navigateur.
              </p>
              <p>Avantages d'une application multipage :</p>
              <ul>
                <li>
                  <strong>L'optimisation SEO est possible</strong> .
                  L'application comporte plusieurs pages, et chacune d'entre
                  elles peut ??tre optimis??e pour un groupe sp??cifique de
                  demandes afin d'obtenir du trafic organique gratuit de Google.
                </li>
                <li>
                  <strong>Facilit?? de mise ?? l'??chelle</strong> . Ce type
                  d'architecture permet de cr??er autant de nouvelles pages pour
                  chaque produit ou service que vous le souhaitez et d'y
                  apporter les modifications.
                </li>
                <li>
                  <strong>Solutions pr??tes ?? l'emploi disponibles</strong> . En
                  r??gle g??n??rale, le d??veloppement de MPA n??cessite une pile
                  technologique plus petite et, en outre, une large gamme de
                  solutions pr??tes ?? l'emploi (CMS) est disponible.
                </li>
                <li>
                  <strong>Capacit??s d'analyse</strong> . Les outils d'analyse
                  Web comme Google Analytics peuvent ??tre facilement int??gr??s
                  dans ce type de projet et permettent de suivre les
                  performances de chaque page commerciale.
                </li>
              </ul>
              <p>Inconv??nients de l'application multipage :</p>
              <ul>
                <li>
                  <strong>Probl??mes de performances possibles</strong> . En cas
                  de grand nombre de requ??tes et de n??cessit?? de recharger un
                  grand nombre de pages, les performances et la vitesse en
                  prendront forc??ment un coup. Cela est particuli??rement vrai
                  pour les projets avec un trafic de site Web ??lev??, un grand
                  nombre de pages et de multiples fonctions.
                </li>
                <li>
                  <strong>Int??gration ??troite front-end et back-end</strong> .
                  En r??gle g??n??rale, ces composants d'une application Web sont
                  profond??ment int??gr??s, et c'est pourquoi leur d??veloppement et
                  leur test peuvent prendre plus de temps.
                </li>
                <li>
                  <strong>Maintenance et mises ?? jour</strong> . Fournir un
                  support technique ?? des sites Web comportant de nombreuses
                  pages peut ??tre une t??che ardue. Cette question s'applique
                  ??galement aux questions de s??curit??.
                </li>
              </ul>
            </div>
          </article>
          <article id="spa-mpa">
            <h6>SPA vs MPA</h6>
            <p>
              SPA gagne en termes de vitesse et de r??utilisabilit?? du code, qui
              peut ??tre appliqu?? pour d??velopper votre application mobile, mais
              il pr??sente des lacunes en mati??re d' optimisation du
              r??f??rencement . L'utilisation d'un MPA vous aidera ?? vous classer
              plus haut dans Google et est plus ??volutif mais beaucoup plus lent
              que les SPA.
            </p>
          </article>
          <article id="seo">
            <h6>Search engine optimization (SEO)</h6>
            <p>
              L'optimisation des moteurs de recherche ( SEO ) est le processus
              d'am??lioration de la qualit?? et de la quantit?? de trafic vers un
              site Web ou une page Web provenant des moteurs de recherche.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
