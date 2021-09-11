import React from "react";
import { Link } from "react-router-dom";

export default function Oop() {
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
                    href="#inheritance"
                  >
                    Inheritance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#abstraction"
                  >
                    Abstraction
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#polymorphism"
                  >
                    Polymorphism
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#encapsulation"
                  >
                    encapsulation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#overloading"
                  >
                    overloading
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#diamond"
                  >
                    Diamond problem
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
                    to="/modifiers"
                  >
                    Modifiers
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/oop"
                  >
                    OOP
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/statements"
                  >
                    Partial type, lock, yield
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/typesystem"
                  >
                    Struct, Record, Class, Object, Constructor, Serialization
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
          <h3>Object-Oriented Programming</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                La programmation procédurale consiste à écrire des procédures ou
                des méthodes qui effectuent des opérations sur les données,
                tandis que la programmation orientée objet consiste à créer des
                objets qui contiennent à la fois des données et des méthodes.
              </p>
              <ul>
                <li>La POO est plus rapide et plus facile à exécuter</li>
                <li>La POO fournit une structure claire pour les programmes</li>
                <li>
                  La POO facilite la maintenance, la modification et le débogage
                  du code
                </li>
                <li>
                  La POO permet de créer des applications entièrement
                  réutilisables avec moins de code et un temps de développement
                  plus court
                </li>
              </ul>
            </div>
          </article>
          <article id="inheritance">
            <h6>Héritage</h6>
            <p>L'héritage est utile pour la réutilisabilité du code.</p>
          </article>
          <article id="abstraction">
            <h6>L'abstraction</h6>
            <p>
              Pour assurer la sécurité, masquez certains détails et n'affichez
              que les détails importants d'un objet.L'abstraction peut être
              réalisée avec des classes abstraites ou des interfaces.
            </p>
          </article>
          <article id="polymorphism">
            <h6>Polymorphisme</h6>
            <p>
              Le polymorphisme signifie "plusieurs formes", et il se produit
              lorsque nous avons de nombreuses classes qui sont liées les unes
              aux autres par héritage. Il est utile pour la réutilisabilité du
              code.
            </p>
          </article>
          <article id="encapsulation">
            <h6>Properties and Encapsulation</h6>
            <div>
              <p>
                Le sens de l'
                <strong>Encapsulation</strong>, est de s'assurer que les données
                "sensibles" sont cachées aux utilisateurs. Pour y parvenir, vous
                devez :
              </p>
              <ul>
                <li>
                  déclarer les champs/variables comme <code>private</code>
                </li>
                <li>
                  fournir <code>public</code> <code>get</code> et des{" "}
                  <code>set</code> méthodes, via des <strong>propriétés</strong>
                  , pour accéder et mettre à jour la valeur d'un{" "}
                  <code>private</code> champ.
                </li>
              </ul>
            </div>
          </article>
          <article id="overloading">
            <h6>Qu'est-ce que la surcharge de méthode ?</h6>
            <p>
              La surcharge de méthode crée plusieurs méthodes avec le même nom
              avec des signatures uniques dans la même classe. Lorsque nous
              compilons, le compilateur utilise la résolution de surcharge pour
              déterminer la méthode spécifique à appeler.
            </p>
          </article>
          <article id="diamond">
            <h6>Le problème du diamant</h6>
            <div>
              <p>Pourquoi c# ne prend-il pas en charge l'héritage multiple ?</p>
              <img src="img/dotnet/csharp-diamond.png" alt="csharp-diamond" />
              <p>
                Le <strong>«problème du diamant»</strong> (parfois appelé le
                «diamant mortel de la mort») est une ambiguïté qui survient
                lorsque deux classes B et C héritent de A, et la classe D hérite
                à la fois de B et de C. S'il y a un procédé A que B et C ont de
                substitution , et D ne prévaut pas, alors que la version de la
                méthode ne hérite D: celui de B, ou de C?
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
