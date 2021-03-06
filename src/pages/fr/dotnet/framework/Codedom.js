import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Codedom() {
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
                    Dynamic programming
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reflection"
                  >
                    Reflection
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reflection-emit"
                  >
                    Reflection.Emit
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dlr"
                  >
                    DLR
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#code-dom"
                  >
                    CodeDom
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#code"
                  >
                    Create Class
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
          <h3>Dynamic Programming</h3>
          <article id="introduction">
            <h6>Common Runtime Language (CLR)</h6>
            <div>
              <p>
                La programmation dynamique permet aux applications d'??tre
                ??tendues avec du code qui n'est pas compil?? dans l'application.
                Elle repose sur de nombreuses fonctionnalit??s :
              </p>
              <ul>
                <li>
                  <b>Reflection</b> :{" "}
                </li>
                <li>
                  <b>??mission d'assemblys et de m??thodes dynamiques</b> :
                </li>
                <li>
                  <b>DLR (Dynamic Language Runtime)</b> :
                </li>
                <li>
                  <b>G??n??ration et compilation de code source dynamique</b> :
                </li>
              </ul>
            </div>
          </article>
          <article id="reflection">
            <h6>Reflection</h6>
            <div>
              <p>
                Les classes de l' System.Reflection espace de noms, ainsi
                System.Type que, vous permettent d???obtenir des informations sur
                les System.Reflection charg??s et les types d??finis dans ceux-ci,
                tels que les System.Type, les interfaceset les types valeur
                (autrement dit, les structures et les ??num??rations). Vous pouvez
                ??galement utiliser la r??flexion pour cr??er des instances de
                types au moment de l'ex??cution, et pour les appeler et y
                acc??der.
              </p>
              <p>
                Les utilisations courantes de la r??flexion sont les suivantes :
              </p>
              <ul>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.assembly"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Assembly
                    </a>{" "}
                    pour d??finir et charger des assemblys, charger les modules
                    r??pertori??s dans le manifeste d'assembly, et pour localiser
                    un type de cet assembly et cr??er une instance de celui-ci.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.module"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Module
                    </a>{" "}
                    pour d??couvrir des informations comme l'assembly qui
                    contient le module et les classes de ce module. Vous pouvez
                    ??galement r??cup??rer toutes les m??thodes globales ou d???autres
                    m??thodes sp??cifiques non globales d??finies sur le module.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.constructorinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      ConstructorInfo
                    </a>{" "}
                    pour d??couvrir des informations comme le nom, les
                    param??tres, les modificateurs d'acc??s (comme{" "}
                    <code>public</code> ou <code>private</code>) et les d??tails
                    d'impl??mentation (comme <code>abstract</code> ou{" "}
                    <code>virtual</code>) d'un constructeur. Utilisez la m??thode{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getconstructors"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetConstructors
                    </a>{" "}
                    ou{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getconstructor"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetConstructor
                    </a>{" "}
                    d'un type{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Type
                    </a>{" "}
                    pour appeler un constructeur sp??cifique.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.methodinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      MethodInfo
                    </a>{" "}
                    pour d??couvrir des informations comme le nom, le type de
                    retour, les param??tres, les modificateurs d'acc??s (comme{" "}
                    <code>public</code> ou <code>private</code>) et les d??tails
                    d'impl??mentation (comme <code>abstract</code> ou{" "}
                    <code>virtual</code>) d'une m??thode. Utilisez la m??thode{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getmethods"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetMethods
                    </a>{" "}
                    ou{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type.getmethod"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      GetMethod
                    </a>{" "}
                    d'un type{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.type"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      Type
                    </a>{" "}
                    pour appeler une m??thode sp??cifique.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.fieldinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      FieldInfo
                    </a>{" "}
                    pour d??couvrir des informations comme le nom, les
                    modificateurs d'acc??s (comme <code>public</code> ou{" "}
                    <code>private</code>) et les d??tails d'impl??mentation (comme{" "}
                    <code>static</code>) d'un champ, et pour obtenir ou d??finir
                    les valeurs du champ.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.eventinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      EventInfo
                    </a>{" "}
                    pour d??couvrir des informations comme le nom, le type de
                    donn??es du gestionnaire d'??v??nements, les attributs
                    personnalis??s, le type d??clarant et le type r??fl??chi d'un
                    ??v??nement, et pour ajouter ou supprimer des gestionnaires
                    d'??v??nements.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.propertyinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      PropertyInfo
                    </a>{" "}
                    pour d??couvrir des informations comme le nom, le type de
                    donn??es, le type d??clarant, le type r??fl??chi, et l'??tat en
                    lecture seule ou en ??criture d'une propri??t??, et pour
                    obtenir ou d??finir les valeurs de la propri??t??.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.parameterinfo"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      ParameterInfo
                    </a>{" "}
                    pour d??couvrir des informations comme le nom d'un param??tre,
                    son type de donn??es, si un param??tre est un param??tre
                    d'entr??e ou de sortie, et la position du param??tre dans la
                    signature d'une m??thode.
                  </p>
                </li>
                <li>
                  <p>
                    Utilisez{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.customattributedata"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      CustomAttributeData
                    </a>{" "}
                    pour d??couvrir des informations sur les attributs
                    personnalis??s quand vous travaillez dans le contexte de
                    r??flexion uniquement d'un domaine d'application.{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.customattributedata"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      CustomAttributeData
                    </a>{" "}
                    vous permet d'examiner des attributs sans cr??er des
                    instances de ceux-ci. Les classes de l'espace de noms{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.emit"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      System.Reflection.Emit
                    </a>{" "}
                    fournissent une forme de r??flexion sp??cialis??e qui vous
                    permet de cr??er des types au moment de l'ex??cution.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="reflection-emit">
            <h6>Emitting Dynamic Methods and Assemblies</h6>
            <div>
              <p>
                Cette section d??crit un ensemble de types manag??s dans l'espace
                de noms{" "}
                <a
                  href="/fr-fr/dotnet/api/system.reflection.emit"
                  class="no-loc"
                  data-linktype="absolute-path"
                >
                  System.Reflection.Emit
                </a>
                , qui permettent ?? un compilateur ou ?? un outil d'??mettre des
                m??tadonn??es et du langage MSIL (Microsoft Intermediate Language)
                au moment de l'ex??cution et de g??n??rer ??ventuellement un fichier
                ex??cutable portable sur le disque. Les moteurs de script et les
                compilateurs sont les principaux utilisateurs de cet espace de
                noms. Dans cette section, la fonctionnalit?? fournies par
                l'espace de noms{" "}
                <a
                  href="/fr-fr/dotnet/api/system.reflection.emit"
                  class="no-loc"
                  data-linktype="absolute-path"
                >
                  System.Reflection.Emit
                </a>{" "}
                est appel??e ??mission de r??flexion.
              </p>
              <p>L'??mission de r??flexion offre les possibilit??s suivantes :</p>
              <ul>
                <li>
                  <p>
                    D??finir des m??thodes globales l??g??res au moment de
                    l'ex??cution ?? l'aide de la classe{" "}
                    <a
                      href="/fr-fr/dotnet/api/system.reflection.emit.dynamicmethod"
                      class="no-loc"
                      data-linktype="absolute-path"
                    >
                      DynamicMethod
                    </a>
                    , et les ex??cuter ?? l'aide de d??l??gu??s.
                  </p>
                </li>
                <li>
                  <p>
                    D??finir des assemblys au moment de l'ex??cution, puis les
                    ex??cuter et/ou les enregistrer sur disque.
                  </p>
                </li>
                <li>
                  <p>
                    D??finir des assemblys au moment de l'ex??cution, les
                    ex??cuter, puis les d??charger et autoriser le garbage
                    collection ?? lib??rer leurs ressources.
                  </p>
                </li>
                <li>
                  <p>
                    D??finir des modules dans de nouveaux assemblys au moment de
                    l'ex??cution, puis les ex??cuter et/ou les enregistrer sur
                    disque.
                  </p>
                </li>
                <li>
                  <p>
                    D??finir des types dans des modules au moment de l'ex??cution,
                    cr??er des instances de ces types et appeler leurs m??thodes.
                  </p>
                </li>
                <li>
                  <p>
                    D??finir des informations symboliques pour des modules
                    d??finis, qui peut ??tre utilis??es par des outils comme des
                    d??bogueurs et des profileurs de code.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="dlr">
            <h6>DLR</h6>
            <p>
              Le <em>Dynamic Language Runtime</em> (DLR) est un environnement
              d???ex??cution ajoutant au Common Language Runtime (CLR) un ensemble
              de services pour les langages dynamiques. Le DLR simplifie le
              d??veloppement de langages dynamiques ?? ex??cuter sur le .NET
              Framework et l???ajout de fonctionnalit??s dynamiques aux langages
              typ??s statiquement.
            </p>
          </article>
          <article id="code-dom">
            <h6>G??n??ration et compilation de code source dynamique</h6>
            <div>
              <p>
                Le .NET Framework inclut un m??canisme appel?? CodeDOM (Code
                Document Object Model) qui permet aux d??veloppeurs d?????mettre du
                code source pour g??n??rer du code source dans plusieurs langages
                de programmation au moment de l???ex??cution, en fonction d???un
                mod??le unique qui repr??sente le code ?? restituer.
              </p>
              <p>
                L???espace de noms System.CodeDom d??finit les types qui peuvent
                repr??senter la structure logique du code source, ind??pendamment
                d???un langage de programmation sp??cifique. L???espace de noms
                System.CodeDom.Compiler d??finit les types pour la g??n??ration du
                code source ?? partir des graphiques CodeDOM et la gestion de la
                compilation du code source dans les langages pris en charge. Les
                fournisseurs de compilateurs ou les d??veloppeurs peuvent ??tendre
                l???ensemble des langages pris en charge.
              </p>
              <p>
                Le .NET Framework inclut des g??n??rateurs et des compilateurs de
                code pour CSharpCodeProvider, JScriptCodeProvider et
                VBCodeProvider.
              </p>
              <dl>
                <dt>System.CodeDom</dt>
                <dd>
                  <p>
                    Contient des classes qui peuvent ??tre utilis??es pour
                    repr??senter les ??l??ments et la structure d???un document de
                    code source. Les classes de cet espace de noms peuvent ??tre
                    utilis??es pour cr??er la structure d'un document de code
                    source qui peut s'afficher comme code source dans un langage
                    pris en charge ?? l'aide de la fonctionnalit?? fournie par
                    l'espace de noms{" "}
                    <a
                      class="no-loc"
                      href="https://docs.microsoft.com/fr-fr/dotnet/api/system.codedom.compiler?view=dotnet-plat-ext-6.0"
                      data-linktype="relative-path"
                    >
                      System.CodeDom.Compiler
                    </a>
                    .
                  </p>
                </dd>
                <dt>System.CodeDom.Compiler</dt>
                <dd>
                  <p>
                    Contient des types permettant de g??rer la g??n??ration et la
                    compilation de code source dans les langages de
                    programmation pris en charge. Chaque g??n??rateur de code peut
                    produire du code source dans un langage de programmation
                    sp??cifique, bas?? sur la structure des mod??les de code source
                    CodeDOM (Code Document Object Model) qui contiennent des
                    ??l??ments fournis par l'espace de noms{" "}
                    <a
                      class="no-loc"
                      href="https://docs.microsoft.com/fr-fr/dotnet/api/system.codedom?view=net-6.0"
                      data-linktype="relative-path"
                    >
                      System.CodeDom
                    </a>
                    .
                  </p>
                </dd>
              </dl>
            </div>
          </article>
          <article id="code">
            <h6>Create class</h6>
            <Highlight language="csharp">
              {`CodeCompileUnit compileUnit = new CodeCompileUnit();
CodeNamespace myNamespace = new CodeNamespace("SkillValue");
myNamespace.Imports.Add(new CodeNamespaceImport("System"));
CodeTypeDeclaration logClass = new CodeTypeDeclaration("LoggerOutput");
CodeMemberMethod start = new CodeMemberMethod()
{
    ReturnType = new CodeTypeReference(typeof(void)),
    Name = "LogHello"
};
CodeMethodInvokeExpression methodInvoke = new CodeMethodInvokeExpression(
    new CodeTypeReferenceExpression("Console"),
    "WriteLine",
    new CodePrimitiveExpression("Hello World!"));
compileUnit.Namespaces.Add(myNamespace);
myNamespace.Types.Add(logClass);
logClass.Members.Add(start);
start.Statements.Add(methodInvoke);`}
            </Highlight>
          </article>
        </section>
      </div>
    </>
  );
}
