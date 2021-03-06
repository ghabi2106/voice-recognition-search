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
                le Scrum Master aide ?? animer la m??l??e (Scrum) pour l'??quipe
                dans son ensemble en s'assurant que le framework Scrum est
                respect??. Il s'engage ?? respecter les valeurs et les pratiques
                Scrum, mais doit ??galement rester flexible et ouvert aux
                possibilit??s d'am??lioration du workflow de l'??quipe.
              </p>
              <ol>
                <li>
                  <strong>Stand-ups</strong> : animer les stand-ups quotidiens
                  (ou Daily Scrums), si n??cessaire.
                </li>
                <li>
                  <strong>
                    R??unions de planification d'it??ration/de sprint
                  </strong>
                  : prot??ger l'??quipe contre les engagements excessifs et la
                  d??rive des objectifs. Aider ?? l'estimation et ?? la cr??ation de
                  sous-t??ches.
                </li>
                <li>
                  <strong>Revues de sprint</strong> : participer ?? la r??union et
                  recueillir le feedback.
                </li>
                <li>
                  <strong>R??trospectives</strong> : noter les domaines
                  d'am??lioration et les ??l??ments d'action ?? adopter pour les
                  futurs sprints.
                </li>
                <li>
                  <strong>Administration des tableaux</strong> : travailler en
                  tant qu'administrateur de tableau Scrum . S'assurer que les
                  cartes sont ?? jour et que l'outil Scrum, Jira Software ou
                  autre, fonctionne bien.
                </li>
                <li>
                  <strong>R??unions individuelles</strong> : rencontrer
                  individuellement les membres de l'??quipe et les parties
                  prenantes selon les besoins. R??gler les d??saccords au sein de
                  l'??quipe concernant le processus et les styles de travail.
                  Bien que de nombreux experts Scrum soient oppos??s ?? cette
                  m??thode, car ils pensent que ces communications doivent avoir
                  lieu pendant les stand-ups, certaines ??quipes, en particulier
                  les nouvelles, pr??f??rent avoir ces interactions r??guli??res en
                  face ?? face avec des membres sp??cifiques de l'??quipe. Le Scrum
                  Master peut d??cider que ces interactions individuelles sont
                  cruciales pour le d??veloppement de l'??quipe et pour apprendre
                  ?? se conna??tre.
                </li>
                <li>
                  <strong>Services de conseil internes</strong> : les Scrum
                  Masters doivent ??tre pr??ts ?? consulter les membres de l'??quipe
                  et les parties prenantes internes sur la meilleure fa??on de
                  travailler avec l'??quipe Scrum.
                </li>
                <li>
                  <strong>Rapports</strong> : analyse r??guli??re des graphiques
                  Burndown et d'autres outils de planification de portefeuille
                  pour comprendre ce qui est d??velopp?? et ?? quelle cadence.
                </li>
                <li>
                  <strong>Bloqueurs</strong> : le Scrum Master aide l'??quipe en
                  ??liminant les bloqueurs externes et en g??rant les obstacles
                  internes par l'am??lioration des processus ou des workflows.
                </li>
                <li>
                  <strong>Travail prenant</strong> : si l'??quipe Scrum ne
                  ronronne pas, c'est le probl??me du Scrum Master. Cela signifie
                  peut-??tre qu'il faut r??parer les ordinateurs cass??s, d??placer
                  les bureaux ou m??me r??gler le thermostat. Les Scrum Masters
                  devraient ??tre ?? l'aise pour faire ?? peu pr??s n'importe quoi
                  pour aider leur ??quipe, et ne devraient pas rechigner ?? aller
                  chercher des caf??s ou des en-cas si c'est ce dont l'??quipe a
                  vraiment besoin.
                </li>
              </ol>
            </div>
          </article>
          <article id="project-owner">
            <h6>Project Owner</h6>
            <p>
              Le Product Owner ou PO est le responsable de la d??finition et de
              la conception d???un produit. Il fait le lien entre la partie m??tier
              (bonne vision business) et la partie technique du projet. Il doit
              porter la vision du produit. Il est l???interface entre le client,
              le Scrum Master et les ??quipes charg??es du d??veloppement.
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
