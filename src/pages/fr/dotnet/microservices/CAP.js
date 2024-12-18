import React from "react";
import { Link } from "react-router-dom";

export default function CAP() {
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
                    href="#cap"
                  >
                    CAP Theorem
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#data-consistency"
                  >
                    Data Consistency
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
                    to="/docker"
                  >
                    Docker
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/server"
                  >
                    Web server implementations
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpsys"
                  >
                    HTTP.sys web server
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/iis"
                  >
                    IIS
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/kestrel"
                  >
                    Kestrel
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
          <h3>Théorème CAP</h3>
          <article id="cap">
            <h6>Théorème CAP</h6>
            <div>
              <p>
                Le terme <strong>Théorème CAP</strong> (ou théorème de Brewer)
                stipule que dans un système distribué, il est impossible de
                garantir simultanément les trois propriétés suivantes :
              </p>
              <ol>
                <li>
                  <strong>C</strong> (Consistency) : <strong>Cohérence</strong>{" "}
                  – Tous les nœuds du système voient les mêmes données au même
                  moment. Chaque lecture renvoie la même valeur, même après une
                  écriture.
                </li>
                <li>
                  <strong>A</strong> (Availability) :{" "}
                  <strong>Disponibilité</strong> – Chaque requête reçoit une
                  réponse, qu'elle soit réussie ou échouée (mais jamais en
                  timeout).
                </li>
                <li>
                  <strong>P</strong> (Partition Tolerance) :{" "}
                  <strong>Tolérance aux partitions</strong> – Le système
                  continue de fonctionner même en cas de panne de communication
                  entre certains nœuds (partition du réseau).
                </li>
              </ol>
              <h6>
                <strong>Considérations supplémentaires :</strong>
              </h6>
              <ul>
                <li>
                  <p>
                    <strong>Choisir entre CP, AP et CA</strong> dépend du cas
                    d'usage. Par exemple, dans des applications où la cohérence
                    des données est cruciale, un compromis CP pourrait être
                    préféré. Mais dans des systèmes nécessitant une
                    disponibilité élevée (comme des systèmes web massivement
                    scalables), AP pourrait être plus adapté.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Eventual consistency</strong> (consistance
                    éventuelle) : Certaines bases de données comme{" "}
                    <strong>Cassandra</strong> acceptent des incohérences
                    temporaires dans le but de maintenir une haute disponibilité
                    et tolérance aux partitions. Elles assurent que les données
                    deviendront cohérentes avec le temps, une approche connue
                    sous le nom de "consistance éventuelle".
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="data-consistency">
            <h6>Cohérence des données</h6>
            <p>
              <strong>Cohérence des données</strong> assure une vue uniforme des
              données à tout moment, tandis que la{" "}
              <strong>consistance éventuelle</strong> permet un compromis pour
              garantir la disponibilité et la performance, en acceptant des
              incohérences temporaires qui se résorberont au fil du temps.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
