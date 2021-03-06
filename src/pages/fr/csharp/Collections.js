import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Collections() {
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
                    href="#dictionnary"
                  >
                    Dictionnary
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#stack"
                  >
                    Stack
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#queue"
                  >
                    Queue
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#array-list"
                  >
                    Array vs ArrayList vs List
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#hashtable"
                  >
                    Hashtable vs Dictionary
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
          <h3>Collections</h3>
          <article id="collections">
            <h6>Collections</h6>
            <div>
              <p>
                Il existe deux types de collections disponibles : les
                collections non g??n??riques et les collections g??n??riques.
              </p>
              <p>
                L'espace de noms <code>System.Collections</code> contient les
                types de collection non g??n??riques et l'espace de noms{" "}
                <code>System.Collections.Generic</code> inclut les types de
                collection g??n??riques.
              </p>
              <p>
                La principale diff??rence entre les collections g??n??riques et non
                g??n??riques est qu'une collection g??n??rique est fortement typ??e,
                tandis qu'une collection non g??n??rique n'est pas fortement
                typ??e.
              </p>
              <img
                src="/img/dotnet/Ilist ICollection IEnumerable IQueryable.PNG"
                alt="Ilist ICollection IEnumerable IQueryable"
              />
              <ul>
                <li>
                  <p>
                    <b>IEnumerable</b> est un ??num??rateur qui aide ?? parcourir
                    les ??l??ments. Un IEnumerable ne contient m??me pas le nombre
                    d'??l??ments de la liste, ?? la place, vous devez parcourir les
                    ??l??ments pour obtenir le nombre d'??l??ments.
                  </p>
                  <p>
                    Un IEnumerable prend en charge le filtrage des ??l??ments ??
                    l'aide de la clause where.
                  </p>
                </li>
                <li>
                  <p>
                    <b>ICollection</b> d??rive de IEnumerable et ??tend ses
                    fonctionnalit??s pour ajouter, supprimer, mettre ?? jour des
                    ??l??ments dans la liste. ICollection contient ??galement le
                    nombre d'??l??ments qu'il contient et nous n'avons pas besoin
                    de parcourir tous les ??l??ments pour obtenir le nombre total
                    d'??l??ments.
                  </p>
                </li>
                <li>
                  <p>
                    <b>IList</b> ??tend ICollection. Un IList peut effectuer
                    toutes les op??rations combin??es de IEnumerable et
                    ICollection, et quelques autres op??rations comme l'insertion
                    ou la suppression d'un ??l??ment par index.
                  </p>
                  <p>
                    On peut utiliser une boucle foreach ou une boucle for pour
                    parcourir les
                  </p>
                </li>
                <li>
                  <b>IQueryable</b> ??tend ICollection. Un IQueryable g??n??re une
                  expression LINQ to SQL qui est ex??cut??e sur la couche de base
                  de donn??es.
                </li>
              </ul>
            </div>
          </article>
          <article id="dictionnary">
            <h6>Dictionary</h6>
            <div>
              <p>
                Le Dictionary<code>&lt;TKey, TValue&gt;</code> est une
                collection g??n??rique qui stocke les paires cl??-valeur.
              </p>
              <Highlight language="csharp">
                {`//creating a dictionary using collection-initializer syntax
var cities = new Dictionary<string, string>(){
  {"UK","London"},
  {"USA","New York"},
  {"India","Mumbai,"}
};`}
              </Highlight>
            </div>
          </article>
          <article id="stack">
            <h6>Stack</h6>
            <div>
              <p>
                <code>Stack</code> est un type sp??cial de collection qui stocke
                des ??l??ments dans le style LIFO (Last In First Out).
              </p>
              <Highlight language="csharp">
                {`int[] arr = new int[]{ 1, 2, 3, 4};
Stack<int> myStack = new Stack<int>(arr);`}
              </Highlight>
            </div>
          </article>
          <article id="queue">
            <h6>Queue</h6>
            <p>
              <code>Queue</code> est un type sp??cial de collection qui stocke
              les ??l??ments dans le style FIFO (First In First Out).
            </p>
          </article>
          <article id="array-list">
            <h6>Array vs ArrayList vs List</h6>
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th>Array</th>
                  <th>ArrayList</th>
                  <th>List</th>
                </tr>
                <tr>
                  <td>
                    Le tableau stocke un nombre fixe d'??l??ments. La taille d'un
                    Array doit ??tre sp??cifi??e au moment de l'initialisation.
                  </td>
                  <td>
                    ArrayList grandit automatiquement et vous n'avez pas besoin
                    de sp??cifier la taille.
                  </td>
                  <td>
                    ArrayList grandit automatiquement et vous n'avez pas besoin
                    de sp??cifier la taille.
                  </td>
                </tr>
                <tr>
                  <td>
                    Le tableau est fortement typ??. Cela signifie qu'un tableau
                    ne peut stocker que des types sp??cifiques d'??l??ments.
                  </td>
                  <td>
                    ArrayList peut stocker n'importe quel type d'??l??ments.
                  </td>
                  <td>est fortement typ??</td>
                </tr>
                <tr>
                  <td>
                    Fonctionne plus rapidement que ArrayList car il est
                    fortement typ??.
                  </td>
                  <td>
                    Effectue des ralentissements ?? cause de la boxing et
                    unboxing .
                  </td>
                  <td>
                    Fonctionne plus rapidement que ArrayList car il est
                    fortement typ??.
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="hashtable">
            <h6>Hashtable vs dictionnary</h6>
            <table class="table table-bordered">
              <div>
                <p>
                  Un objet Hashtable est constitu?? de compartiments contenant
                  les ??l??ments de la collection. Un compartiment est un
                  sous-groupe virtuel d'??l??ments dans la Hashtable, ce qui rend
                  la recherche et la r??cup??ration plus facile et plus rapide que
                  dans la plupart des collections. Chaque compartiment est
                  associ?? ?? un code de hachage qui est g??n??r?? ?? l'aide d'une
                  fonction de hachage et qui est bas?? sur la cl?? de l'??l??ment.
                </p>
                <tbody>
                  <tr>
                    <th>Hashtable</th>
                    <th>Dictionary</th>
                  </tr>
                  <tr>
                    <td>
                      elle stocke des paires cl??-valeur de n'importe quel type
                      de donn??es.
                    </td>
                    <td>
                      Dictionary est une collection g??n??rique. Il peut donc
                      stocker des paires cl??-valeur de types de donn??es
                      sp??cifiques.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Hashtable renvoie null si nous essayons de trouver une cl??
                      qui n'existe pas.
                    </td>
                    <td>
                      Dictionary l??ve une exception si nous essayons de trouver
                      une cl?? qui n'existe pas.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      La r??cup??ration des donn??es est plus lente que le
                      dictionnaire en raison du boxing-unboxing.
                    </td>
                    <td>
                      La r??cup??ration des donn??es est plus rapide que Hashtable.
                    </td>
                  </tr>
                </tbody>
              </div>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
