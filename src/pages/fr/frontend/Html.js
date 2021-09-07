import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Html() {
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
                    href="#new-features"
                  >
                    New features
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="element"
                  >
                    Elements
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="attribute"
                  >
                    Attributes
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="semantic-elements"
                  >
                    Semantic Elements
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="entity"
                  >
                    Entities
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="encoding"
                  >
                    Encoding
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
          <h3>HTML</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                HTML est le langage de balisage standard pour la création de
                pages Web.
              </p>
              <ul>
                <li>HTML signifie Hyper Text Markup Language</li>
                <li>
                  HTML est le langage de balisage standard pour la création de
                  pages Web
                </li>
                <li>HTML décrit la structure d'une page Web</li>
                <li>
                  Les éléments HTML indiquent au navigateur comment afficher le
                  contenu.
                </li>
              </ul>
            </div>
          </article>
          <article id="new-features">
            <h6>New features</h6>
            <ul>
              <li>
                <code>video</code>,<code>audio</code>,<code></code>
              </li>
              <li>
                Semantic Elements: <code>header</code>,<code>footer</code>
                <code>nav</code>,<code>section</code>,<code>article</code>
              </li>
              <li>
                <code>figure</code>,<code>progressbar</code>,<code>svg</code>
              </li>
            </ul>
          </article>
          <article id="element">
            <h6>HTML Elements</h6>
            <div>
              <p>
                Un élément HTML est défini par une balise de début, du contenu
                et une balise de fin.
              </p>
              <Highlight language="html">
                {`<tagname>Content goes here...</tagname>`}
              </Highlight>
            </div>
          </article>
          <article id="attribute">
            <h6>HTML Attributes</h6>
            <p>
              Les attributs HTML fournissent des informations supplémentaires
              sur les éléments HTML.
              <br />
              Les attributs se présentent généralement sous forme de paires
              nom/valeur telles que : nom="valeur"
              <br />
              La <code>&lt;a&gt;</code>balise définit un lien hypertexte. L'
              <code>href</code>attribut spécifie l'URL de la page vers laquelle
              le lien renvoie&nbsp;:
            </p>
          </article>
          <article id="semantic-elements">
            <h6>HTML Semantic Elements</h6>
            <div>
              <p>Éléments sémantiques = éléments ayant un sens.</p>
              <p>
                Un élément sémantique décrit clairement sa signification à la
                fois pour le navigateur et le développeur.
              </p>
              <p>
                Exemples d' éléments <strong>non sémantiques</strong> :{" "}
                <code>&lt;div&gt;</code>et <code>&lt;span&gt;</code>- Ne dit
                rien sur son contenu.
              </p>
              <p>
                Exemples d' éléments <strong>sémantiques</strong> :{" "}
                <code>&lt;form&gt;</code>, <code>&lt;table&gt;</code>, et{" "}
                <code>&lt;article&gt;</code>- Définit clairement son contenu.
              </p>
            </div>
          </article>
          <article id="entity">
            <h6>HTML Entities</h6>
            <div>
              <p>
                Les caractères réservés en HTML doivent être remplacés par des
                entités de caractères.
              </p>
              <p>
                Si vous utilisez les signes inférieur à (&lt;) ou supérieur à
                (&gt;) dans votre texte, le navigateur peut les mélanger avec
                des balises.
              </p>
              <Highlight language="html">
                {`&entity_name;
OR

&#entity_number;`}
              </Highlight>
              <p>
                Pour afficher un signe inférieur à (&lt;), nous devons écrire :{" "}
                <b>&lt; </b>ou <b>&lt;</b>
              </p>
            </div>
          </article>
          <article id="encoding">
            <h6>HTML Encoding (Character Sets)</h6>
            <div>
              <p>
                Pour afficher correctement une page HTML, un navigateur Web doit
                savoir quel jeu de caractères utiliser.
              </p>
              <Highlight language="html">{`<meta charset="UTF-8">`}</Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
