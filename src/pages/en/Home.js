import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
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
                    href="#diginov"
                  >
                    Diginov
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#itgwana"
                  >
                    ITGWANA
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#taysir"
                  >
                    Taysir Solutions
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
                    to="/entityframework"
                  >
                    Entity Framework
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
          <h3>Presentation</h3>
          <article id="diginov">
            <h6>Diginov</h6>
            <div>
              <p>
                I am Assaad Ghabi, I was graduated as an engineer from
                university of Monastir Tunisia in 2017, with over 5 years of
                experience in .Net development managing all aspects of the
                development process for small to medium-sized companies.
              </p>
              <p>
                My last job was at Diginov, where I was in charge of the
                Economic ministry of United Arabic Emirates for 1.5 year. During
                this part i have successfully completed two projects with good
                results.
              </p>
              <p>
                We developed the national program portal for SME’s that give
                benefits for registered ones to participate to the government
                trainings, events and tenders. Entrepreneurs often face
                bureaucratic complexity and difficulty accessing important
                business information, which would help them to interact with the
                market more effectively.
              </p>
              <p>
                FGIC is a portal describe any data related to or containing
                information about a specific location on uae. In other words it
                represents the distribution of many sectors on the map and
                showing the data related to them with more details. Also, help
                to develop the natioanl spatial data infrastructure and sharing
                data across data government and society.
              </p>
            </div>
          </article>
          <article id="itgwana">
            <h6>ITGWANA</h6>
            <div>
              <p>
                Before my current position, I completed a one year with ITGWANA,
                where I was in charge with customer Nexans and I achieved a web
                application called <strong>« Carry Track »</strong> in the field
                industry 4.0 which helps for treacebility of industrial
                equipment, history of movements.
              </p>
            </div>
          </article>
          <article id="taysir">
            <h6>Taysir Solutions</h6>
            <div>
              <p>
                Auparavant j’ai notamment travaillé pour Taysir Solutions ≈ 2ans
                dans les secteurs médecines, facturation et agence des voyages.
                J’ai travaillé en plusieurs projets « ADD Invoice », « DMI » et
                « Ticketing ».
              </p>
              <p>
                Prior to this role, I was a junior software engineer with Taysir
                Solutions for two years. While working there, I committed to web
                application development, I've already contributed to over a four
                projects « ADD Invoice », « DMI » et « Ticketing », and assisted
                with managing one project for one of the firm's long-time
                clients.
              </p>
              <p>
                <strong>« ADD Invoice »</strong> Realization of a billing
                solution with the possibility to study invoices with follow-up
                for payments.
              </p>
              <p>
                <strong>« DMI »</strong> Realization of a solution allowing
                doctors to access the medical files of his patients.
              </p>
              <p>
                I've also had the opportunity to serve as the software engineer
                lead for thre last project <strong>« Ticketing »</strong> which
                is a realization of a solution to manage travel agencies.
              </p>
              <p>
                Currently i seeking for a opportunity to learn and grow, team
                oriented and a happy workplace.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
