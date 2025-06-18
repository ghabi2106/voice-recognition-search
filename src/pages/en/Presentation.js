import React from "react";
import { Link } from "react-router-dom";

export default function Presentation() {
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
          <article id="bio">
            <h6>👋 Presentation</h6>
            <div>
              <p>
                My name is Assaad Ghabi, and I’m a Full Stack .NET and Angular Developer with 8 years of experience. I graduated from the National Engineering School of Monastir in 2017.
              </p>
            </div>
          </article>
          <article id="taysir">
            <h6>🏢 Taysir Solutions</h6>
            <div>
              <p>
                I began my career at Taysir Solutions, a company specialized in developing IT solutions across various sectors including healthcare, finance, and services.
              </p>
              <p>
                I had the opportunity to work on three major projects:
                <ul>
                  <li>
                    <strong>AddInvoice</strong> : a billing system for the finance sector.
                  </li>
                  <li>
                    <strong>DMI</strong> : a medical records management application.
                  </li>
                  <li>
                    <strong>Ticketing</strong> : a service-oriented ticket management platform built from scratch.
                  </li>
                </ul>
              </p>
              <p>
                The Ticketing project was particularly significant for me, as I took on a managerial role in addition to development.<br/>
I supervised a team of 6 developers, handled internal training, contributed to team skill development, and was actively involved in weekly Agile Scrum sprints.
              </p>
            </div>
          </article>
          <article id="diginov">
            <h6>🏢 Diginov</h6>
            <div>
              <p>
                Later, I joined Diginov, where I worked on two platforms developed from scratch for the Ministry of Economy of the United Arab Emirates:
              </p>
              <ul>
                <li>
                  <strong>UAE SME</strong> : a portal giving SMEs access to government programs, business advisory services, and funding opportunities.
                </li>
                <li>
                  <strong>FGIC</strong> : a GIS-based system used to visualize nationwide economic data via interactive maps.
                </li>
              </ul>
              <p>
                In this role, I was involved in business analysis, requirements documentation, and full-stack development using ASP.NET Core and SQL Server, within one-week Agile sprints.
              </p>
            </div>
          </article>
          <article id="capgemini">
            <h6>🏢 Capgemini</h6>
            <div>
              <p>
                Since 2021, I’ve been part of Capgemini Engineering, contributing to the development of digital tools for Volkswagen, specifically on projects like {" "}
                <strong>AskMe</strong>, <strong>TV</strong> et{" "}
                <strong>PPRobEE</strong>.
              </p>
              <p>
These tools are used by car service workshops to manage :
                <br />
                estimates, scheduling, operations, inspections, and more.
              </p>
              <p>
                My role covers both back-end (.NET Core, Worker Services) and front-end (Angular) development. I’m also involved in : Supporting team members, Onboarding new joiners, Writing unit tests, Conducting code reviews
              </p>
              <p>
                We follow the Agile Scrum methodology rigorously, with 2-week sprints and all standard ceremonies (daily stand-ups, sprint planning, reviews, and retrospectives) in a fully English-speaking, international environment.
              </p>
              <p>
                Since April 2025, I have also taken on the role of Functional Owner for SEAT (Volkswagen Group), where I’m responsible for : Business analysis, Writing and refining user stories, Backlog prioritization with the Product Owner, Functional validation of deliverables.
              </p>
              <p>This position allows me to combine technical expertise with a strong functional and product-oriented dimension.</p>
            </div>
          </article>
          <article id="conclusion">
            <h6>Conclusion</h6>
            <div>
              <p>
                That’s a quick overview of my background.<br/>
                I hope my presentation was clear, and I’d be happy to answer any questions you might have.
              </p>
            </div>
          </article>
          <article id="leave">
            <h6>Why do you want to leave Capgemini ?</h6>
            <div>
              <p>
                I'm grateful for everything I've learned at Capgemini <br/> the projects were enriching and allowed me to grow both technically and functionally.
              </p>
              <p>
                However, in recent months, the workload has become quite heavy, leaving little room for continuous learning or technical improvement.
              </p>
              <p>
                I’m now looking for an environment that’s better structured and more balanced <br/> one that values both productivity and long-term growth.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
