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
                La programmation proc??durale consiste ?? ??crire des proc??dures ou
                des m??thodes qui effectuent des op??rations sur les donn??es,
                tandis que la programmation orient??e objet consiste ?? cr??er des
                objets qui contiennent ?? la fois des donn??es et des m??thodes.
              </p>
              <ul>
                <li>La POO est plus rapide et plus facile ?? ex??cuter</li>
                <li>La POO fournit une structure claire pour les programmes</li>
                <li>
                  La POO facilite la maintenance, la modification et le d??bogage
                  du code
                </li>
                <li>
                  La POO permet de cr??er des applications enti??rement
                  r??utilisables avec moins de code et un temps de d??veloppement
                  plus court
                </li>
              </ul>
            </div>
          </article>
          <article id="inheritance">
            <h6>H??ritage</h6>
            <p>L'h??ritage est utile pour la r??utilisabilit?? du code.</p>
          </article>
          <article id="abstraction">
            <h6>L'abstraction</h6>
            <p>
              Pour assurer la s??curit??, masquez certains d??tails et n'affichez
              que les d??tails importants d'un objet.L'abstraction peut ??tre
              r??alis??e avec des classes abstraites ou des interfaces.
            </p>
          </article>
          <article id="polymorphism">
            <h6>Polymorphisme</h6>
            <p>
              Le polymorphisme signifie "plusieurs formes", et il se produit
              lorsque nous avons de nombreuses classes qui sont li??es les unes
              aux autres par h??ritage. Il est utile pour la r??utilisabilit?? du
              code.
            </p>
          </article>
          <article id="encapsulation">
            <h6>Properties and Encapsulation</h6>
            <div>
              <p>
                Le sens de l'
                <strong>Encapsulation</strong>, est de s'assurer que les donn??es
                "sensibles" sont cach??es aux utilisateurs. Pour y parvenir, vous
                devez :
              </p>
              <ul>
                <li>
                  d??clarer les champs/variables comme <code>private</code>
                </li>
                <li>
                  fournir <code>public</code> <code>get</code> et des{" "}
                  <code>set</code> m??thodes, via des <strong>propri??t??s</strong>
                  , pour acc??der et mettre ?? jour la valeur d'un{" "}
                  <code>private</code> champ.
                </li>
              </ul>
            </div>
          </article>
          <article id="overloading">
            <h6>Qu'est-ce que la surcharge de m??thode ?</h6>
            <p>
              La surcharge de m??thode cr??e plusieurs m??thodes avec le m??me nom
              avec des signatures uniques dans la m??me classe. Lorsque nous
              compilons, le compilateur utilise la r??solution de surcharge pour
              d??terminer la m??thode sp??cifique ?? appeler.
            </p>
          </article>
          <article id="diamond">
            <h6>Le probl??me du diamant</h6>
            <div>
              <p>Pourquoi c# ne prend-il pas en charge l'h??ritage multiple ?</p>
              <img src="img/dotnet/csharp-diamond.png" alt="csharp-diamond" />
              <p>
                Le <strong>??probl??me du diamant??</strong> (parfois appel?? le
                ??diamant mortel de la mort??) est une ambigu??t?? qui survient
                lorsque deux classes B et C h??ritent de A, et la classe D h??rite
                ?? la fois de B et de C. S'il y a un proc??d?? A que B et C ont de
                substitution , et D ne pr??vaut pas, alors que la version de la
                m??thode ne h??rite D: celui de B, ou de C?
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
