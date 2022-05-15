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
                    href="#capgemini"
                  >
                    Capgemini
                  </a>
                </li>
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
          <article id="capgemini">
            <h6>Capgemini</h6>
            <div>
              <p>
                I am Assaad Ghabi, I was graduated as an engineer from
                university of Monastir Tunisia in 2017, with over 5 years of
                experience in .Net development managing all aspects of the
                development process for small to medium-sized companies.
              </p>
              <p>
                My last job was at Capgemini, where I was in charge with
                customer VolksWagen for less than 1 year until now. I am already
                working on 2 projects TV and AskMe.
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#tv"
                  >
                    <b>AskMe &amp; TV</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="tv">
                    <h6 class="card-title">Description</h6>

                    <p>
                      The goal principal from the two projects is to manage all
                      the production process for emdded systems projects by
                      gathering the necessary data from various group to ensure
                      the progress of projects and generating reports for
                      analysis.
                    </p>
                    <h6 class="card-title">Features</h6>
                    <ul>
                      <li>Manage accounts</li>
                      <li>Generate automated reports</li>
                      <li>Activity History</li>
                      <li>Scheduling Features</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="diginov">
            <h6>Diginov</h6>
            <div>
              <p>
                Before my current position, I had worked at Diginov, where I was
                in charge of the Economic ministry of United Arabic Emirates for
                1.5 year. During this part i have successfully completed two
                projects with good results.
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#uaesme"
                  >
                    <b>UAE SME</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="uaesme">
                    <h6 class="card-title">Description</h6>
                    <p>
                      The UAE SME Portal provides SMEs with convenient access to
                      detail information on all Government programmes for SME
                      development , including the various financing schemes and
                      business support services, offered to SMEs.
                    </p>
                    <p>
                      The Portal also offers information for SMEs on where and
                      how to obtain financing, advisory services, training
                      programmes, product and technology development, and
                      marketing information.
                    </p>
                    <p>
                      Through the SME Directory, SMEs can advertise their
                      companies and products to large potential customers by
                      providing information about their companies, description
                      on the products and services being offered, and contact
                      details.
                    </p>
                  </div>
                </div>
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#fgic"
                  >
                    <b>FGIC</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="fgic">
                    <h6 class="card-title">Description</h6>
                    <p>
                      The FGIC provides access to a map library of over 100 high
                      resolution vector and raster layers in the Geospatial Data
                      Warehouse.
                    </p>
                    <p>
                      It allows a user to choose an area of interest, browse and
                      select data, customize the format, then download or have
                      it shipped on media.
                    </p>
                    <p>
                      The map layers include data on: Public Land Survey System
                      (PLSS), Census data, demographic statistics,
                      precipitation, temperature, disaster events, conservation
                      easements, elevation, geographic names, geology,
                      government units, hydrography, hydrologic units, land use
                      and land cover, map indexes, ortho imagery, soils,
                      topographic images, and streets and roads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="itgwana">
            <h6>ITGWANA</h6>
            <div>
              <p>
                Prior to this role, I completed a one year with ITGWANA, where I
                was in charge with customer Nexans and I achieved a web
                application called <strong>« Carry Track »</strong> in the field
                industry 4.0 which helps for treacebility of industrial
                equipment, history of movements.
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#carrytrack"
                  >
                    <b>Carry Track</b>
                  </div>
                  <div
                    class="card-body text-dark collapse show"
                    id="carrytrack"
                  >
                    <h6 class="card-title">Description</h6>
                    <p>
                      est un system degestion informatisé permet de suivre et de
                      gérer tout les matériel de manutention et de stockage qui
                      circule en circuit fermé dans un supply chain pour
                      optimiser sa disponibilité et l’ensemble de la logistique.
                    </p>
                    <ul>
                      <li>
                        RFID gates for automatic entry/exit control of an area
                      </li>
                      <li>Maintenance management</li>
                      <li>Movement history</li>
                      <li>Dashboards and reports</li>
                      <li>Analysis of average retention times per customer</li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Framework 4, Architecture Multi layer, MVC.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="taysir">
            <h6>Taysir Solutions</h6>
            <div>
              <p>
                Prior to this role, I was a junior software engineer with Taysir
                Solutions for two years. While working there, I committed to web
                application development, I've already contributed to over a four
                projects « ADD Invoice », « DMI » et « Ticketing », and assisted
                with managing one project for one of the firm's long-time
                clients.
              </p>
              <div class="mt-3">
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#addinvoice"
                  >
                    <b>AddInvoice</b>
                  </div>
                  <div
                    class="card-body text-dark collapse show"
                    id="addinvoice"
                  >
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">is an invoicing app allows to:</p>
                    <ul>
                      <li>Customize Invoice designs</li>
                      <li>Issue payment receipts and reminders</li>
                      <li>GST Compatibility</li>
                      <li>Process online payments</li>
                      <li>Create quotes and delivery notes</li>
                      <li>Manage accounts</li>
                      <li>Set up recurring invoices</li>
                      <li>Invoice customers in their language</li>
                      <li>Generate automated reports</li>
                      <li>Activity History</li>
                      <li>Credit Note Management</li>
                      <li>Client Management</li>
                      <li>Task Management</li>
                      <li>
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/pulse/14-must-have-features-online-invoicing-software-ash-grover/"
                        >
                          more details
                        </a>
                      </li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Framework 4, Architecture Multi layer, MVC.
                    </p>
                  </div>
                </div>
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#dmi"
                  >
                    <b>EMR</b>(Electronic Medical Records)
                  </div>
                  <div class="card-body text-dark collapse show" id="dmi">
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      Realization of a solution allowing doctors to access the
                      medical records of his patients.
                    </p>
                    <p>
                      EMR is a digital version of the traditional paper-based
                      medical records, that is normally found in a paper chart.
                      it stores patient’s medical history, medications,
                      immunization dates, doctors notes, etc. Also, it helps
                      centralize patient records.
                    </p>
                    <h6 class="card-title">Features</h6>
                    <ul>
                      <li>Customizable Templates</li>
                      <li>
                        Provider-to-provider Communications :
                        <ul>
                          <li>
                            Be able to share information between physicians
                          </li>
                          <li>
                            Every physician has an updated and accurate account
                            of the patient’s history
                          </li>
                        </ul>
                      </li>
                      <li>
                        Scheduling Features :
                        <ul>
                          <li>Easily keep track of appointments</li>
                          <li>
                            The ability to notify your patients immediately
                          </li>
                          <li>
                            Centralizing a lot of admin processes and organizing
                            calendar and notification system.
                          </li>
                        </ul>
                      </li>
                      <li>
                        E-Prescriptions
                        <ul>
                          <li>
                            Be able to communicate directly with pharmacies
                          </li>
                          <li>
                            The ability to notify you if any of their
                            medications might interact with other medications
                            they’re taking, or with any allergies they may have
                          </li>
                        </ul>
                      </li>
                      <li>
                        Patient Portals
                        <ul>
                          <li>
                            Educational materials (like care-instructions).
                          </li>
                          <li>Lab results</li>
                          <li>Information from their last visit.</li>
                          <li>
                            A list of their allergies, immunizations, and
                            medications.
                          </li>
                          <li>
                            Recent doctor visits &amp; discharge summaries.
                          </li>
                          <li>Appointment scheduling.</li>
                          <li>Contact Information.</li>
                        </ul>
                      </li>
                      <li>
                        Lab Integration :{" "}
                        <ul>
                          <li>
                            which saves you time by not having to manually enter
                            each lab/image result.
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Core 2.0, Clean Architecture, MVC.
                    </p>
                  </div>
                </div>
                <div class="card border-warning mb-3">
                  <div
                    class="card-header"
                    data-bs-toggle="collapse"
                    data-bs-target="#ticketing"
                  >
                    <b>Ticketing</b>
                  </div>
                  <div class="card-body text-dark collapse show" id="ticketing">
                    <p>
                      I've also had the opportunity to serve as the software
                      engineer lead for the last project{" "}
                      <strong>« Ticketing »</strong> which is a realization of a
                      solution to manage travel agencies.
                    </p>
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      <strong>« Ticketing »</strong> is back-office system
                      tailored to the travel industry: Tour creation, Voucher
                      creation, Multi-currency management, Real time inventory,
                      Online booking (B2B &amp; B2C), Automated payment
                      follow-up, Commission management. API available. -
                      Maximize tour inventory and tour management - Generate
                      additional revenues online - Automate operational
                      processes
                    </p>
                    <p>
                      Integrated with GDS (Global Distribution System) (Sabre,
                      Amadeus, Travelport).
                    </p>
                    <h6 class="card-title">Best For</h6>
                    <p>
                      Dedicated to Travel agencies and tour-operators interested
                      in increasing productivity, generating additional revenues
                      &amp; improving customer satisfaction through a complete
                      system including online booking (B2B/B2C)
                    </p>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Core 2.1, Clean Architecture, Restful Api, React.
                    </p>
                  </div>
                </div>
              </div>
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
