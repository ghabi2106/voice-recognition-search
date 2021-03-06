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
                d???ex??cution faisant partie du framework .NET de Microsoft. CLR
                g??re l???ex??cution des programmes ??crits dans diff??rentes langages
                prises en charge.
              </p>
              <p>
                CLR transforme le code source en une forme de code secondaire
                appel??e CIL (Common Intermediate Language). Au moment de
                l???ex??cution, CLR g??re l???ex??cution du code CIL.
              </p>
              <p>
                Le CLR (Common Language Runtime) est responsable du
                garbage-collector(ramasse-miettes), s??curit?? d???acc??s et
                v??rification du code
              </p>
            </div>
          </article>
          <article id="msil">
            <h6>MSIL</h6>
            <div>
              <p>
                Le code manag?? est un code dont l???ex??cution est g??r??e par Common
                Language Runtime. Il r??cup??re le code manag?? et le compile en
                code machine.
              </p>
              <p>
                Le code manag?? -MSIL- b??n??ficie de fonctionnalit??s telles que
                l???int??gration interlangage, la gestion des exceptions
                inter-langages, la s??curit?? am??lior??e, la prise en charge du
                contr??le de version et du d??ploiement, un mod??le simplifi?? pour
                l???interaction des composants, ainsi que des services de
                d??bogage.
              </p>
            </div>
          </article>
          <article id="jit">
            <h6>JIT</h6>
            <p>
              Le compilateur JIT compile le MSIL en code machine au moment de
              l???ex??cution. Le code compil?? par le compilateur JIT s???ex??cute sous
              CLR.
            </p>
          </article>
          <article id="gac">
            <h6>Global Assembly Cache (GAC)</h6>
            <div>
              <p>
                Le Global Assembly Cache (GAC) est un dossier du r??pertoire
                Windows (\windows\assembly) dans lequel sont stock??s les ??
                assembly ?? .NET sp??cifiquement d??sign??s pour ??tre partag??s par
                toutes les applications ex??cut??es sur un syst??me.
              </p>
              <p>
                Le concept de GAC est le r??sultat de l???architecture .NET dont la
                conception r??pond au probl??me de ?? DLL ?? qui existait dans COM
                (Component Object Model).
              </p>
            </div>
          </article>
          <article id="cts">
            <h6>Common Type System (CTS)</h6>
            <p>
              Common Type System (CTS) est une norme qui sp??cifie comment les
              d??finitions et les valeurs sp??cifiques d???un type sont repr??sent??es
              dans la m??moire de l???ordinateur. Il est destin?? ?? permettre aux
              programmes ??crits dans diff??rents langages de programmation de
              partager facilement des informations.
            </p>
          </article>
          <article id="cas">
            <h6>Code Access Security (CAS)</h6>
            <p>
              CAS est la solution pour emp??cher le code non approuv?? d???effectuer
              des actions privil??gi??es. Il emp??che l???acc??s non autoris?? aux
              ressources et aux op??rations et limite le code pour l???ex??cution de
              t??ches particuli??res.
            </p>
          </article>
          <article id="cls">
            <h6>Common Language Specification (CLS)</h6>
            <p>
              CLS signifie Common Language Specification . Avec les r??gles
              mentionn??es sous CLS, les d??veloppeurs sont oblig??s d'utiliser les
              composants compatibles entre les langues. Ils sont r??utilisables
              dans toutes les langues compatibles .Net.
            </p>
          </article>
          <article id="metadata">
            <h6>Metadata</h6>
            <div>
              <p>
                Les m??tadonn??es d??crivent tous les types et membres d??finis dans
                votre code sous une forme ind??pendante du langage
              </p>
              <ul>
                <li>
                  <p>Description de l'assembly.</p>
                  <ul>
                    <li>
                      <p>Identit?? (nom, version, culture, cl?? publique).</p>
                    </li>
                    <li>
                      <p>Les types export??s.</p>
                    </li>
                    <li>
                      <p>Les autres assemblys dont d??pend cet assembly.</p>
                    </li>
                    <li>
                      <p>
                        Les autorisations de s??curit?? n??cessaires ?? l'ex??cution.
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Description des types.</p>
                  <ul>
                    <li>
                      <p>
                        Nom, visibilit??, classe de base et interfaces
                        impl??ment??es.
                      </p>
                    </li>
                    <li>
                      <p>
                        Membres (m??thodes, champs, propri??t??s, ??v??nements, types
                        imbriqu??s).
                      </p>
                    </li>
                  </ul>
                </li>
                <li>
                  <p>Attributs.</p>
                  <ul>
                    <li>
                      ??l??ments descriptifs suppl??mentaires qui modifient les
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
