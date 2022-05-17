import React from "react";
import { Link } from "react-router-dom";

export default function Roles() {
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
                    href="#roles"
                  >
                    Roles
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#scrum-master"
                  >
                    Scrum Master
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#project-owner"
                  >
                    Project Owner
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#customer"
                  >
                    Requestor/Customer
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#team-member"
                  >
                    Team Member
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
                    to="/agile"
                  >
                    Agile
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="agile">
          <h2 className="sticky-xl-top fw-bold p-0 m-0">Contents</h2>
          <h3>SCRUM ROLES</h3>
          <article id="roles">
            <h6>Roles</h6>
            <figure>
              <img
                src="/img/agile/agile rules.PNG"
                alt="img rules"
                style={{ maxWidth: "500px" }}
              />
              <figcaption>Scrum Roles</figcaption>
            </figure>
          </article>
          <article id="scrum-master">
            <h6>Scrum Master</h6>
            <div>
              <p>
                le Scrum Master aide à animer la mêlée (Scrum) pour l'équipe
                dans son ensemble en s'assurant que le framework Scrum est
                respecté. Il s'engage à respecter les valeurs et les pratiques
                Scrum, mais doit également rester flexible et ouvert aux
                possibilités d'amélioration du workflow de l'équipe.
              </p>
              <ol>
                <li>
                  <strong>Stand-ups</strong> : animer les stand-ups quotidiens
                  (ou Daily Scrums), si nécessaire.
                </li>
                <li>
                  <strong>
                    Réunions de planification d'itération/de sprint
                  </strong>
                  : protéger l'équipe contre les engagements excessifs et la
                  dérive des objectifs. Aider à l'estimation et à la création de
                  sous-tâches.
                </li>
                <li>
                  <strong>Revues de sprint</strong> : participer à la réunion et
                  recueillir le feedback.
                </li>
                <li>
                  <strong>Rétrospectives</strong> : noter les domaines
                  d'amélioration et les éléments d'action à adopter pour les
                  futurs sprints.
                </li>
                <li>
                  <strong>Administration des tableaux</strong> : travailler en
                  tant qu'administrateur de tableau Scrum . S'assurer que les
                  cartes sont à jour et que l'outil Scrum, Jira Software ou
                  autre, fonctionne bien.
                </li>
                <li>
                  <strong>Réunions individuelles</strong> : rencontrer
                  individuellement les membres de l'équipe et les parties
                  prenantes selon les besoins. Régler les désaccords au sein de
                  l'équipe concernant le processus et les styles de travail.
                  Bien que de nombreux experts Scrum soient opposés à cette
                  méthode, car ils pensent que ces communications doivent avoir
                  lieu pendant les stand-ups, certaines équipes, en particulier
                  les nouvelles, préfèrent avoir ces interactions régulières en
                  face à face avec des membres spécifiques de l'équipe. Le Scrum
                  Master peut décider que ces interactions individuelles sont
                  cruciales pour le développement de l'équipe et pour apprendre
                  à se connaître.
                </li>
                <li>
                  <strong>Services de conseil internes</strong> : les Scrum
                  Masters doivent être prêts à consulter les membres de l'équipe
                  et les parties prenantes internes sur la meilleure façon de
                  travailler avec l'équipe Scrum.
                </li>
                <li>
                  <strong>Rapports</strong> : analyse régulière des graphiques
                  Burndown et d'autres outils de planification de portefeuille
                  pour comprendre ce qui est développé et à quelle cadence.
                </li>
                <li>
                  <strong>Bloqueurs</strong> : le Scrum Master aide l'équipe en
                  éliminant les bloqueurs externes et en gérant les obstacles
                  internes par l'amélioration des processus ou des workflows.
                </li>
                <li>
                  <strong>Travail prenant</strong> : si l'équipe Scrum ne
                  ronronne pas, c'est le problème du Scrum Master. Cela signifie
                  peut-être qu'il faut réparer les ordinateurs cassés, déplacer
                  les bureaux ou même régler le thermostat. Les Scrum Masters
                  devraient être à l'aise pour faire à peu près n'importe quoi
                  pour aider leur équipe, et ne devraient pas rechigner à aller
                  chercher des cafés ou des en-cas si c'est ce dont l'équipe a
                  vraiment besoin.
                </li>
              </ol>
            </div>
          </article>
          <article id="project-owner">
            <h6>Project Owner</h6>
            <p>
              Le Product Owner ou PO est le responsable de la définition et de
              la conception d’un produit. Il fait le lien entre la partie métier
              (bonne vision business) et la partie technique du projet. Il doit
              porter la vision du produit. Il est l’interface entre le client,
              le Scrum Master et les équipes chargées du développement.
            </p>
          </article>
          <article id="customer">
            <h6>Requestor/Customer</h6>
            <p>
              Also referred to as clients, a requestor is anyone requesting work
              from an Agile team. A requestor could be internal or external, an
              individual or a group. These people are stakeholders in the
              project requested of the Agile team.
            </p>
          </article>
          <article id="team-member">
            <h6>Team Member</h6>
            <p>
              A team member is any individual contributor to the Agile team;
              this includes the Scrum Master. One person can be a team member on
              multiple Agile teams.. Requestor/Customer Project Owner AGILE TEAM
              Scrum Master Team Member Team Member Team Member Team
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
