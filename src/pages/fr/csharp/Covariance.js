import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/solarized-light.css";

export default function Covariance() {
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
                    href="#covariance"
                  >
                    Covariance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#contravariance"
                  >
                    Contravariance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#invariance"
                  >
                    Invariance
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-generic-interfaces"
                  >
                    In Generic Interfaces
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#in-delegates"
                  >
                    In Delegates
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
                    to="/stringbuilder"
                  >
                    String Builder
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/tuple"
                  >
                    Tuple
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/collections"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/enumindexer"
                  >
                    Enumeration, Indexer and Generics
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/parameters"
                  >
                    Ref, in and Out
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/covariance"
                  >
                    Covariance
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/delegate"
                  >
                    Delegate
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/string2int"
                  >
                    string to int
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/threads"
                  >
                    Task And Thread
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/operators"
                  >
                    Operators
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/datatype"
                  >
                    Dynamic, Nullables, Discards and Anonymous Types, Extension
                    methods
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
          <h3>Covariance and Contravariance</h3>
          <article id="introduction">
            <h6>Introduction</h6>
            <div>
              <p>
                La <strong>covariance</strong> et la{" "}
                <strong>contravariance</strong> décrivent la compatibilité des
                types dans le contexte de l'héritage et des types génériques.
              </p>
              <ul>
                <li>
                  <strong>Covariance</strong> : Permet à un type plus dérivé de
                  remplacer un type de base dans des contextes de lecture (par
                  exemple, <code>IEnumerable&lt;string&gt;</code> peut être
                  utilisé comme <code>IEnumerable&lt;object</code>).
                </li>
                <li>
                  <strong>Contravariance</strong> : Permet à un type de base de
                  remplacer un type dérivé dans des contextes d'écriture (par
                  exemple, <code>Action&lt;object&gt;</code> peut être utilisé
                  comme <code>Action&lt;string&gt;</code>).
                </li>
                <li>
                  <strong>Invariance</strong> : Les types génériques ne peuvent
                  pas être substitués entre eux, même si un type est un
                  sous-type d'un autre.
                </li>
              </ul>
            </div>
          </article>
          <article id="covariance">
            <h6>Covariance</h6>
            <div>
              <p>
                <strong>Définition</strong> : La covariance permet à un type de
                varier dans la même direction que ses sous-types.
                <br />
                Cela signifie que si A est un sous-type de B, alors{" "}
                <code>C&lt;A&gt;</code> est un sous-type de{" "}
                <code>C&lt;B&gt;</code>.
              </p>
              <p>
                <strong>Cas d'usage</strong> : La covariance est typiquement
                utilisée pour des données en sortie (lecture seule), telles que
                dans des fonctions ou des collections qui retournent des données
                mais ne les modifient pas.
              </p>
              <Highlight language="csharp">
                {`IEnumerable<string> strings = new List<string>();
IEnumerable<object> objects = strings; // Covariance : string → object`}
              </Highlight>
              <p>
                Ici, <code>IEnumerable&lt;string&gt;</code> peut être assigné à{" "}
                <code>IEnumerable&lt;object&gt;</code> parce que{" "}
                <code>string</code> est un sous-type de <code>object</code>.
              </p>
              <p>
                <strong>Comment ça fonctionne</strong> :<br />
                La covariance est sûre pour les opérations en lecture seule, car
                récupérer un élément d'un sous-type (<code>string</code>) est
                compatible avec l'attente du type de base (<code>object</code>).
              </p>
            </div>
          </article>
          <article id="contravariance">
            <h6>Contravariance</h6>
            <div>
              <p>
                <strong>Définition</strong> : La contravariance permet à un type
                de varier dans la direction opposée à celle de ses sous-types.
                <br />
                Cela signifie que si A est un sous-type de B, alors{" "}
                <code>C&lt;B&gt;</code> est un sous-type de{" "}
                <code>C&lt;A&gt;</code>.
              </p>
              <p>
                <strong>Cas d'usage</strong> : La contravariance est typiquement
                utilisée pour des données en entrée (écriture seule), telles que
                dans les paramètres de fonctions ou les délégués qui consomment
                des données.
              </p>
              <Highlight language="csharp">
                {`Action<object> actionObject = obj => Console.WriteLine(obj);
Action<string> actionString = actionObject; // Contravariance : object → string`}
              </Highlight>
              <p>
                Ici, <code>Action&lt;object&gt;</code> peut être assigné à{" "}
                <code>Action&lt;string&gt;</code> car un <code>string</code>{" "}
                peut être passé là où un <code>object</code> est attendu.
              </p>
              <p>
                <strong>Comment ça fonctionne</strong> :<br />
                La contravariance est sûre pour les opérations en écriture
                seule, car accepter un type de base (<code>object</code>) est
                compatible avec l'attente d'un sous-type (<code>string</code>).
              </p>
            </div>
          </article>
          <article id="invariance">
            <h6>Invariance</h6>
            <div>
              <p>
                <strong>Définition</strong> : L'invariance signifie qu'il n'y a
                pas de relation entre <code>C&lt;A&gt;</code> et{" "}
                <code>C&lt;B&gt;</code>, même si A est un sous-type de B. Ce
                sont des types complètement indépendants.
              </p>
              <Highlight language="csharp">
                {`List<string> strings = new List<string>();
// List<object> objects = strings; // Erreur : List<T> est invariant`}
              </Highlight>
              <p>
                Ici, <code>List&lt;string&gt;</code> ne peut pas être assigné à{" "}
                <code>List&lt;object&gt;</code>, ni l'inverse, même si{" "}
                <code>string</code> est un sous-type de <code>object</code>.
                Cela est dû au fait que modifier la liste pourrait entraîner des
                problèmes de sécurité de type.
              </p>
            </div>
          </article>
          <article id="in-generic-interfaces">
            <h6>in Generic Interfaces</h6>
            <div>
              <h6>
                Covariance et Contravariance dans les Interfaces Génériques
              </h6>
              <p>
                En C#, la covariance et la contravariance sont explicitement
                indiquées par les mots-clés <code>out</code> et <code>in</code>{" "}
                dans les définitions de types génériques :
              </p>
              <h6>
                Covariance (<code>out</code>) :
              </h6>
              <p>
                Permet à un paramètre de type générique d'être covariant.
                <strong>Exemple</strong> :
              </p>
              <Highlight language="csharp">
                {`interface ICovariant<out T> { T Get(); }
ICovariant<string> strings = null;
ICovariant<object> objects = strings; // Autorisé
`}
              </Highlight>
              <h6>
                Contravariance (<code>in</code>) :
              </h6>
              <p>
                Permet à un paramètre de type générique d'être contravariant.
                <strong>Exemple</strong> :
              </p>
              <Highlight language="csharp">
                {`interface IContravariant<in T> { void Set(T item); }
IContravariant<object> objects = null;
IContravariant<string> strings = objects; // Autorisé`}
              </Highlight>
            </div>
          </article>
          <article id="in-delegates">
            <h6>in Delegates</h6>
            <div>
              <h6>Covariance et Contravariance dans les Délégués</h6>
              <p>
                En C#, la covariance et la contravariance peuvent également être
                appliquées dans les délégués via les mots-clés <code>out</code>{" "}
                et <code>in</code>.
              </p>
              <h6>Covariance :</h6>
              <p>
                <strong>Définition</strong> : La covariance permet d'utiliser un
                type plus dérivé que celui initialement spécifié.
              </p>
              <Highlight language="csharp">
                {`// Délégué avec un type de retour Animal
delegate Animal AnimalDelegate();

// Hiérarchie de classes
class Animal { }
class Chien : Animal { }

// Méthode retournant un type plus dérivé
Chien GetChien() => new Chien();

// Covariance : affectation d'une méthode retournant un Chien à un délégué qui attend un Animal
AnimalDelegate animalDelegate = GetChien;
Animal result = animalDelegate();`}
              </Highlight>
              <p>
                Ici, <code>AnimalDelegate</code> attend une méthode qui retourne
                un <code>Animal</code>. La méthode <code>GetChien</code>{" "}
                retourne un type plus spécifique (<code>Chien</code>), ce qui
                est autorisé grâce à la covariance.
              </p>
              <h6>Contravariance :</h6>
              <p>
                <strong>Définition</strong> : La contravariance permet
                d'utiliser un type plus générique (moins dérivé) que celui
                initialement spécifié.
              </p>
              <Highlight language="csharp">
                {`// Délégué avec un paramètre de type Chien
delegate void ChienDelegate(Chien chien);

// Méthode acceptant un paramètre de type plus général
void ProcessAnimal(Animal animal) => Console.WriteLine(animal.GetType().Name);

// Contravariance : affectation d'une méthode acceptant un Animal à un délégué qui attend un Chien
ChienDelegate chienDelegate = ProcessAnimal;
chienDelegate(new Chien());`}
              </Highlight>
              <p>
                Ici, <code>ChienDelegate</code> attend une méthode qui prend un{" "}
                <code>Chien</code> comme paramètre. La méthode{" "}
                <code>ProcessAnimal</code> accepte un type plus général,{" "}
                <code>Animal</code>, ce qui est autorisé grâce à la
                contravariance.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
