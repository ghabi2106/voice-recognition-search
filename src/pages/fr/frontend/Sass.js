import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Sass() {
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
                    Sass
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#variable"
                  >
                    Variable
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#data-types"
                  >
                    Data Types
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#control"
                  >
                    Control Directives
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#import"
                  >
                    Importing Files and Partials
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#mixin-include"
                  >
                    Sass @mixin and @include
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#extend"
                  >
                    Sass @extend and Inheritance
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
          <h3>Sass</h3>
          <article id="introduction">
            <h6>Sass</h6>
            <div>
              <p>
                Sass (signifie Syntactically Awesome Style Sheets) est un
                langage de script déclaratif, une extension de CSS, pas un
                langage de programmation procédural comme JavaScript.
              </p>
              <p>
                Saas comprend diverses fonctionnalités telles que des variables,
                des règles imbriquées, des mixins, des importations en ligne,
                des fonctions intégrées pour manipuler la couleur et d'autres
                valeurs.
              </p>
              <p>
                On ne peut pas envoyer de code Sass directement au navigateur;
                Au lieu de cela, On doit utiliser le préprocesseur Sass pour
                traduire le code Sass en CSS standard, un processus appelé
                transpiling .
              </p>
            </div>
          </article>
          <article id="variable">
            <h6>Variable</h6>
            <Highlight language="scss">{`$variablename: value;`}</Highlight>
          </article>
          <article id="data-types">
            <h6>Sass - Data Types</h6>
            <div>
              <p>
                SassScript inclut sept types de données différents : nombres,
                chaînes, couleurs, booléens, null, listes et maps.
              </p>
              <ul>
                <li>
                  <b>Number</b>
                </li>
                <li>
                  <b>String</b>
                  <Highlight language="scss">{`$default-font: 'Lucida';`}</Highlight>
                </li>
                <li>
                  <b>List</b>: Une liste SassScript est une série de valeurs
                  séparées par des espaces ou des virgules.
                  <Highlight language="scss">
                    {`$body-font: Helvetica, Arial, sans-serif; 
$body-margin: 0 0 10px 15px; `}
                  </Highlight>
                </li>
                <li>
                  <b>maps</b> sont des paires clé-valeur.
                  <Highlight language="scss">
                    {`map-get() 
$red-map: (light: #e57373, medium: #f44336, dark: #b71c1c); 
p { 
  color: map-get($red-map, light); 
} `}
                  </Highlight>
                </li>
              </ul>
            </div>
          </article>
          <article id="control">
            <h6>Sass - Control Directives</h6>
            <ul>
              <li>
                <b>Conditional Execution - @if</b>
                <Highlight language="scss">
                  {`@if <Boolean expression> { 
  <statements> 
} `}
                </Highlight>
              </li>
              <li>
                <b>Conditional Looping - @while</b>
                <Highlight language="scss">
                  {`@while <boolean expression> { 
  <statements> 
} `}
                </Highlight>
              </li>
              <li>
                <b>Unconditional Looping - @for</b>
                <Highlight language="scss">
                  {`@for <var> from <start> through <end> { 
  <statements> 
} `}
                </Highlight>
              </li>
              <li>
                <b>@each</b>
                <Highlight language="scss">
                  {`@each <vars> in <list or map> { 
  <statements> 
} `}
                </Highlight>
              </li>
            </ul>
          </article>
          <article id="import">
            <h6>Sass - Importing Files and Partials</h6>
            <div>
              <ul>
                <li>
                  Tout comme CSS, Sass prend également en charge{" "}
                  <code>@import</code>
                  directive.
                </li>
                <li>
                  <code>@import</code> directive permet d'inclure le contenu
                  d'un fichier dans un autre.
                </li>
              </ul>
              <Highlight language="scss">{`@import filename;`}</Highlight>
              <Highlight language="scss">
                {`@import "colors.css"; //the .css extension is specified 
@import http://test.com/colors.css; //the http:// prefix is used 
@import "colors" screen; //the import statement includes a media query 
@import url(colors); //the url() function is used 
`}
              </Highlight>
              <Highlight language="scss">
                {`@import "colors"; //by convention, omit the underscore
@import "_colors"; //but this works, too `}
              </Highlight>
            </div>
          </article>
          <article id="mixin-include">
            <h6>Sass @mixin and @include</h6>
            <div>
              <p>
                <code>@mixin</code> directive permet de créer du code CSS qui
                doit être réutilisé sur tout le site Web.
              </p>
              <p>
                <code>@include</code> directive est créée pour vous permettre
                d'utiliser (inclure) le mixin.
              </p>
              <Highlight language="scss">
                {`@mixin name {
  property: value;
  property: value;
  ...
}`}
              </Highlight>
              <Highlight language="scss">
                {`selector {
  @include mixin-name;
}`}
              </Highlight>
            </div>
          </article>
          <article id="extend">
            <h6>Sass @extend and Inheritance</h6>
            <div>
              <p>
                Contrairement aux mixins, vous n'avez pas besoin de déclarer
                explicitement une extension. Vous pouvez étendre n'importe
                quelle règle de classe avec les règles d'autres classes en
                incluant simplement la directive @extend où vous voulez que les
                classes soient incluses
              </p>
              <p>
                <code>@extend</code> directive permet de partager un ensemble de
                propriétés CSS d'un sélecteur à un autre.
              </p>
              <p>
                <code>@extend</code> directive est utile si on a des éléments de
                style presque identique qui ne diffèrent que par quelques petits
                détails.
              </p>
              <Highlight language="scss">
                {`.button-basic  {
  border: none;
  padding: 15px 30px;
}

.button-report  {
  @extend .button-basic;
  background-color: red;
}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
