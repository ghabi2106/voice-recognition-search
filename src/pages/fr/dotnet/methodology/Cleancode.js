import React from "react";
import { Link } from "react-router-dom";

export default function Cleancode() {
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
                    href="#clean-code"
                  >
                    clean code
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dry"
                  >
                    DRY
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#kiss"
                  >
                    KISS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#yagni"
                  >
                    YAGNI
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#occam-razor"
                  >
                    Occam's razor
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#boyscout"
                  >
                    Boyscout rule
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#consistency"
                  >
                    Focus on consistency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#soc"
                  >
                    Separation of Concerns
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lod"
                  >
                    Law of Demeter
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pi"
                  >
                    Persistence Ignorance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#bounded-context"
                  >
                    Bounded Context
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#modularity"
                  >
                    Modularity
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#explicit-dependencies"
                  >
                    Explicit Dependencies
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#coi"
                  >
                    Composition over Inheritance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#encapsulation"
                  >
                    Encapsulation
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
                    to="/cleancode"
                  >
                    Clean code
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/command"
                  >
                    Command
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/designpattern"
                  >
                    Design Principle &amp; Pattern
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/di"
                  >
                    Dependency injection
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/factory"
                  >
                    Factory Method
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/mediator"
                  >
                    Mediator
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/observer"
                  >
                    Observer
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/singleton"
                  >
                    Singleton
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/solid"
                  >
                    S.O.L.I.D. Principles
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
          <h3>Clean code</h3>
          <article id="clean-code">
            <h6>Coding Standards and Principles</h6>
            <div>
              <p>
                "Le code propre semble avoir ??t?? ??crit par quelqu'un qui s'en
                soucie.". Ie but du code propre est d'encourager les
                programmeurs ?? s'en soucier et ?? ??tre fiers de leur travail.
                Rien ne vous fera travailler plus vite que de garder votre
                espace de travail propre.
              </p>
              <ul>
                <li>
                  Le besoin de normes, de principes et de m??thodologies de
                  codage
                </li>
                <li>Conventions et m??thodes de nommage</li>
                <li>Commentaires et mise en forme</li>
                <li>Modularit??</li>
                <li>KISS "Keep It Simple, Stupid"</li>
                <li>YAGNI "You Aren't Gonna Need It"</li>
                <li>DRY "Don't repeat yourself"</li>
                <li>SOLID</li>
                <li>Separation of Concerns principle (SoC)</li>
                <li>Persistence Ignorance (PI)</li>
                <li>Occam's Razor</li>
                <li>Boyscout rule</li>
                <li>Focus on consistency</li>
                <li>Bounded Context</li>
                <li>Modularity</li>
                <li>Explicit Dependencies</li>
                <li>Composition over Inheritance (COI)</li>
                <li>Encapsulation</li>
              </ul>
            </div>
          </article>
          <article id="dry">
            <h6>DRY : Don't repeat yourself</h6>
            <p>
              Le principe DRY signifie "Don't repeat yourself" se traduit par ??
              Ne vous r??p??tez pas ?? vise ?? ??viter la redondance de code au sein
              d???une application afin de faciliter la maintenance, le test, le
              d??bogage et les ??volutions de cette derni??re.
            </p>
          </article>
          <article id="kiss">
            <h6>KISS : Keep It Simple, Stupid</h6>
            <p>
              Le principe KISS signifie "Keep It Simple, Stupid" se traduite par
              ?? garde ??a simple, idiot ?? est de faire le code le plus simple
              possible pour qu???il soit beaucoup plus facile ?? faire ??voluer et ??
              maintenir.
            </p>
          </article>
          <article id="yagni">
            <h6>YAGNI : You Aren't Gonna Need It</h6>
            <p>
              Le principe YAGINI signifie "You Aren't Gonna Need It" qui peut se
              traduite par ?? vous n'en aurez pas besoin ?? d??clare que les
              programmeurs ne devraient pas ajouter de fonctionnalit?? ?? un
              logiciel tant que celle-ci n'est pas absolument n??cessaire.
            </p>
          </article>
          <article id="occam-razor">
            <h6>Occam's razor :</h6>
            <p>
              Le rasoir d'Occam ??nonce que "Entities should not be multiplied
              without necessity". se traduit par ?? les entit??s ne doivent pas
              ??tre multipli??es au - del?? de la n??cessit?? ??. Ce rasoir
              philosophique pr??conise que lorsqu'on est confront?? ?? des
              hypoth??ses concurrentes sur la m??me pr??diction, il faut
              s??lectionner la solution avec le moins d'hypoth??ses, et que ce
              n'est pas cens?? ??tre une fa??on de choisir entre des hypoth??ses qui
              font des pr??dictions diff??rentes.
            </p>
          </article>
          <article id="boyscout">
            <h6>Boyscout rule :</h6>
            <p>
              La r??gle du boyscout: 'Always leave the code better than you found
              it.' : ?? Laissez toujours le code mieux que vous ne l'avez trouv??
              ??. Si seulement tous les ing??nieurs logiciels se comportaient
              comme bons citoyens, notre logiciel ne se d??t??riorerait pas aussi
              implacablement.
            </p>
          </article>
          <article id="consistency">
            <h6>Mettre l'accent sur la coh??rence :</h6>
            <p>
              Ce principe ne vous dit pas vraiment comment coder, il vous dit
              plut??t de vous en tenir ?? la fa??on dont vous le faites d??j??. La
              coh??rence signifie pratiquer les m??mes techniques et m??thodes ??
              travers le code. Cela permet d'identifier facilement les probl??mes
              potentiels.
            </p>
          </article>
          <article id="soc">
            <h6>SoC : Separation of Concerns principle</h6>
            <p>
              La s??paration des responsabilit??s est un principe qui sert ??
              divis?? l'application en fonction des types des t??ches qu???il
              effectue.
              <br />
              De mani??re architecturale, les applications peuvent ??tre cr????es
              logiquement pour respecter ce principe en s??parant le comportement
              m??tier principal de la logique d???infrastructure et de l???interface
              utilisateur. Cette s??paration permet de garantir que le mod??le
              d???entreprise est facile ?? tester et peut ??voluer sans ??tre
              ??troitement coupl?? ?? des d??tails d???impl??mentation de bas niveau.
              La s??paration des responsabilit??s est un aspect fondamental de
              l???utilisation des couches dans les architectures d???applications.
            </p>
          </article>
          <article id="lod">
            <h6>LoD : Law of Demeter</h6>
            <div>
              <p>
                La <strong>loi de D??m??ter (LoD)</strong> ou le{" "}
                <strong>principe de moindre connaissance</strong> est une
                directive de conception pour le d??veloppement d'applications
                logicielles.
                <br />
                Le principe de la loi de Demeter r??duit les d??pendances et aide
                ?? cr??er des composants ?? couplage l??che pour la r??utilisation du
                code, une maintenance plus facile et la testabilit??
              </p>
              <ul>
                <li>
                  Chaque unit?? ne devrait avoir qu'une connaissance limit??e des
                  autres unit??s : uniquement des unit??s ?? ??troitement ?? li??es ??
                  l'unit?? actuelle.
                </li>
                <li>
                  Chaque unit?? ne doit parler qu'?? ses amis ; ne parle pas aux
                  ??trangers.
                </li>
                <li>Ne parlez qu'?? vos amis imm??diats.</li>
              </ul>
            </div>
          </article>
          <article id="pi">
            <h6>PI : Persistence Ignorance</h6>
            <p>
              Le principe de Persistence Ignorance (PI) soutient que les classes
              mod??lisant le domaine m??tier dans une application logicielle ne
              devraient pas ??tre affect??es par la fa??on dont elles pourraient
              ??tre persistantes.
              <br />
              Il existe des degr??s d'ignorance de la persistance, le degr?? le
              plus ??lev?? ??tant d??crit comme des objets POCO (Plain Old CLR) dans
              .NET
            </p>
          </article>
          <article id="bounded-context">
            <h6>Bounded Context :</h6>
            <p>
              Les contextes d??limit??s sont un mod??le essentiel dans la
              conception pilot??e par le domaine. Elles offrent un moyen de
              ma??triser la complexit?? dans les applications ou les organisations
              de grande ampleur en la fractionnant en modules conceptuels
              distincts.
              <br />
              Chaque module conceptuel repr??sente ensuite un contexte qui est
              s??par?? des autres contextes (par cons??quent, d??limit??) et peut
              ??voluer ind??pendamment.
            </p>
          </article>
          <article id="modularity">
            <h6>Modularity :</h6>
            <p>
              La modularit?? est le degr?? auquel les composants d' un syst??me
              peuvent ??tre s??par??s et recombin??s, souvent avec l'avantage de la
              flexibilit?? et de la vari??t?? d'utilisation.
            </p>
          </article>
          <article id="explicit-dependencies">
            <h6>Explicit Dependencies</h6>
            <p>
              Les m??thodes et les classes doivent demander explicitement tous
              les objets de collaboration dont ils ont besoin pour fonctionner
              correctement.
              <br />
              En suivant le principe des d??pendances explicites, vos classes et
              vos m??thodes sont honn??tes avec leurs clients quant ?? ce dont
              elles ont besoin pour fonctionner.
            </p>
          </article>
          <article id="coi">
            <h6>COI : Composition over Inheritance</h6>
            <p>
              La composition sur l'h??ritage (ou principe de r??utilisation
              composite ) dans la programmation orient??e objet (OOP) est le
              principe selon lequel les classes doivent obtenir un comportement
              polymorphe et une r??utilisation du code par leur composition (en
              contenant des instances d'autres classes qui impl??mentent la
              fonctionnalit?? souhait??e) plut??t que l' h??ritage d'un classe de
              base ou parent.
            </p>
          </article>
          <article id="encapsulation">
            <h6>Encapsulation</h6>
            <p>
              On doit utiliser l???encapsulation pour isoler les unes des autres
              les diff??rentes parties d???une application. Il d??crit l'id??e de
              regrouper des donn??es et des m??thodes qui fonctionnent sur ces
              donn??es au sein d'une unit??.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
