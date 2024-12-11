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
                className="list-unstyled ps-3 collapse"
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
                className="list-unstyled ps-3 collapse"
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
                I am a full-stack developer with over 8 years of experience
                specializing in .NET and Angular. <br />I graduated as an
                engineer from the University of Monastir, Tunisia, in 2017.{" "}
                <br />
                My expertise spans diverse sectors, including automotive,
                healthcare, GIS, and entrepreneurship. <br />
                Currently, I am working at Capgemini. <br />I have extensive
                experience in software architecture, design, development,
                testing, and deployment, with a strong background in Agile
                methodology.
              </p>
              <p>
                I currently work at Capgemini with Volkswagen as the client,
                where I have been for three years. <br />I contribute to
                multiple projects, including TV, AskMe, and PPRobEE. <br />
                These automotive management solutions help small to mid-sized
                auto shops with tasks such as estimating, scheduling,
                inspections, job tracking, and reporting. <br />I worked on the
                full lifecycle of these applications, covering requirements
                analysis, design, development, testing, deployment, and
                maintenance. <br />
                The team, using Agile methodology, developed the apps with .NET
                Core 5, Angular 13, and SQL Server.
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
                  <div class="card-body text-dark collapse" id="tv">
                    <h6 class="card-title">Description</h6>
                    <p>
                      TV is a automotive management solution designed to help
                      small to midsize auto shops manage estimates, scheduling,
                      operations, inspections, and more.
                    </p>
                    <p>
                      TV’s key features include work wizard review, automated
                      reminders, calendar integration, real-time job tracking,
                      current progress status, activity flags, and electronic
                      records. The inspection module allows users to digitally
                      inspect all vehicles and upload document findings directly
                      to work orders. TV also enables users to maintain repair
                      recommendations and deferred work lists for future
                      references.
                    </p>
                    <p>
                      TV offers a customizable report manager and dashboard,
                      allowing shop owners to track revenue performance with
                      real-time analytics and key metrics.
                    </p>
                    <h6 class="card-title">Features</h6>
                    <ul>
                      <li>Manage accounts</li>
                      <li>Generate automated reports</li>
                      <li>Activity History</li>
                      <li>Scheduling Features</li>
                    </ul>
                    <h6 class="card-title">Intervention level : </h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#requirements-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="requirements-tv"
                        >
                          Requirements analysis and specification
                        </a>
                        <div class="collapse" id="requirements-tv">
                          <ul>
                            <li>
                              <strong>Gathering requirements</strong> to
                              understand and document what is required by users
                              and other stakeholders.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#design-development-tv"
                          role="button"
                          aria-expanded="false"
                          aria-controls="design-development-tv"
                        >
                          Design and development
                        </a>
                        <div class="collapse" id="design-development-tv">
                          <ul>
                            <li>
                              <strong>Developing a design</strong> around
                              solutions to the problems presented by
                              requirements, often involving process models and
                              storyboards.
                            </li>
                            <li>
                              <strong>Building a model</strong> with a modeling
                              tool that uses a modeling language like SysML or
                              UML to conduct early validation, prototyping and
                              simulation of the design.
                            </li>
                            <li>
                              <strong>Constructing code </strong>in the
                              appropriate programming language. Involves peer
                              and team review to eliminate problems early and
                              produce quality software faster.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>Testing</li>
                      <li>Deployment</li>
                      <li>Maintenance and support</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="diginov">
            <h6>Diginov</h6>
            <div>
              <p>
                I worked at Diginov for 2 years as a full-stack developer,
                primarily contributing to projects in the geospatial (FGIC) and
                entrepreneurship (UAE SME) sectors. <br />
                FGIC is a GIS application for geographic data analysis, while
                UAE SME is a portal designed to support small businesses with
                government programs. <br />I was involved in the full
                development lifecycle, including design, deployment, and
                maintenance. <br />
                As part of a four-person Agile team, I contributed to developing
                both applications using .NET Core 3.1, ASP.NET Core, SQL Server,
                and Orchard CMS for the admin interface
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
                  <div class="card-body text-dark collapse" id="uaesme">
                    <h6 class="card-title">Description</h6>
                    <p>
                      The <strong>« UAE SME »</strong> portal supports small and
                      medium enterprises by providing access to government
                      programs, financial schemes, and business support
                      services. <br />
                      It helps SMEs find funding, market their products, and
                      access advisory services, fostering business growth and
                      sustainability. <br />
                      The platform also includes a directory for SMEs to
                      advertise and gain visibility
                    </p>
                    <h6 class="card-title">Intervention level : </h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#requirements-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="requirements-uaesme"
                        >
                          Requirements analysis and specification
                        </a>
                        <div class="collapse" id="requirements-uaesme">
                          <ul>
                            <li>
                              <strong>Gathering requirements</strong> to
                              understand and document what is required by users
                              and other stakeholders.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Choosing or building an architecture</strong> as
                        the underlying structure within which the software will
                        operate.
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#design-development-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="design-development-uaesme"
                        >
                          Design and development
                        </a>
                        <div class="collapse" id="design-development-uaesme">
                          <ul>
                            <li>
                              <strong>Developing a design </strong>around
                              solutions to the problems presented by
                              requirements, often involving process models and
                              storyboards.
                            </li>
                            <li>
                              <strong>Building a model</strong> with a modeling
                              tool that uses a modeling language like SysML or
                              UML to conduct early validation, prototyping and
                              simulation of the design.
                            </li>
                            <li>
                              <strong>Constructing code </strong>in the
                              appropriate programming language. Involves peer
                              and team review to eliminate problems early and
                              produce quality software faster.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Migrating data</strong> to the new or updated
                        software from existing applications or data sources if
                        necessary.
                      </li>
                      <li>Testing</li>
                      <li>Deployment</li>
                      <li>Maintenance and support</li>
                    </ol>
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
                  <div class="card-body text-dark collapse" id="fgic">
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      <strong>« FGIC »</strong> is dedicated to organizations in
                      sectors like manufacturing, real estate, government,
                      healthcare, and public safety. <br />
                      It helps professionals such as GIS specialists, city
                      planners, environmental scientists, and law enforcement
                      teams analyze and visualize geographic data for informed
                      decision-making and efficient asset management
                    </p>
                    <h6 class="card-title">
                      GIS can help solve problems related to:
                    </h6>
                    <ul>
                      <li>
                        <p>
                          <strong>Urban Planning:</strong> Identifying optimal
                          locations for new infrastructure or development.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Disaster Management:</strong> Mapping flood
                          zones, fire hazards, or disaster-affected areas for
                          effective response.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Environmental Protection:</strong> Monitoring
                          land use, deforestation, and conservation efforts.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Transportation:</strong> Optimizing routes for
                          traffic flow and logistics.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Healthcare:</strong> Identifying regions with
                          health risks or planning the placement of healthcare
                          facilities.
                        </p>
                      </li>
                      <li>
                        <p>
                          <strong>Agriculture:</strong> Mapping soil health and
                          crop conditions for precision farming.
                        </p>
                      </li>
                    </ul>
                    <h6 class="card-title">Intervention level : </h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#requirements-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="requirements-uaesme"
                        >
                          Requirements analysis and specification
                        </a>
                        <div class="collapse" id="requirements-uaesme">
                          <ul>
                            <li>
                              <strong>Gathering requirements</strong> to
                              understand and document what is required by users
                              and other stakeholders.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Choosing or building an architecture</strong> as
                        the underlying structure within which the software will
                        operate.
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#design-development-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="design-development-uaesme"
                        >
                          Design and development
                        </a>
                        <div class="collapse" id="design-development-uaesme">
                          <ul>
                            <li>
                              <strong>Developing a design </strong>around
                              solutions to the problems presented by
                              requirements, often involving process models and
                              storyboards.
                            </li>
                            <li>
                              <strong>Building a model</strong> with a modeling
                              tool that uses a modeling language like SysML or
                              UML to conduct early validation, prototyping and
                              simulation of the design.
                            </li>
                            <li>
                              <strong>Constructing code </strong>in the
                              appropriate programming language. Involves peer
                              and team review to eliminate problems early and
                              produce quality software faster.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Migrating data</strong> to the new or updated
                        software from existing applications or data sources if
                        necessary.
                      </li>
                      <li>Testing</li>
                      <li>Deployment</li>
                      <li>Maintenance and support</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <article id="itgwana">
            <h6>ITGWANA</h6>
            <div>
              <p>
                Prior to joining Diginov, I worked as a full-stack .NET
                developer at ITGWANA for half year, where I contributed to the
                Carry Track project for Nexans. <br />
                <strong>Carry Track</strong> is a Warehouse Management System
                (WMS) designed to optimize warehouse operations such as
                inventory, order management, and shipping. <br />I was involved
                in the full development lifecycle, including design, deployment,
                and maintenance, using .NET Framework 4.6 and SQL Server
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
                    class="card-body text-dark collapse"
                    id="carrytrack"
                  >
                    <h6 class="card-title">Description</h6>
                    <p>
                      <strong>« Carry Track »</strong> is a tool that allows
                      organizations to control the movement and storage of goods
                      within warehouses. It helps in managing operations such as
                      inventory tracking, warehouse designing, picking and
                      packaging goods, shipping, managing yards and docks, and
                      staffing.
                    </p>
                    <h6 class="card-title">Features</h6>
                    <ul>
                      <li>
                        <strong>BARCODING/RFID :</strong> Identify and track
                        items using barcodes or RFID tags.
                      </li>
                      <li>
                        <strong>INVENTORY MANAGEMENT :</strong> Manage inventory
                        traffic to ensure optimal stock volume and a proper
                        outbound supply.
                      </li>
                      <li>
                        <strong>SHIPPING MANAGEMENT :</strong> Organize and
                        track order shipping processes.
                      </li>
                      <li>
                        <strong>KITTING :</strong> Consolidate individually
                        picked materials into one kit for processing a work
                        order or shipment.
                      </li>
                      <li>
                        <strong>ORDER MANAGEMENT :</strong> Organize, track, and
                        monitor customer orders as they move through the supply
                        chain.
                      </li>
                      <li>
                        <strong>QUALITY MANAGEMENT :</strong> Review and manage
                        product quality against defined standards.
                      </li>
                    </ul>
                    <h6 class="card-title">Benefits</h6>
                    <p>
                      <strong>« Carry Track »</strong> assists in handling
                      inbound and outbound operations by streamlining most
                      manual operations and increasing overall efficiency. There
                      are many benefits of using warehouse management software,
                      including
                    </p>
                    <ul>
                      <li>
                        <strong>
                          INVENTORY OPTIMIZATION : « Carry Track »
                        </strong>{" "}
                        allows users to monitor the movement of goods along
                        their supply chain. This further helps them monitor and
                        control stock levels.
                      </li>
                      <li>
                        <strong>ENHANCED INVENTORY VISIBILITY :</strong>{" "}
                        Radio-frequency identification (RFID) devices and
                        barcode scanners act as tangible extensions of{" "}
                        <strong>« Carry Track »</strong> in warehouses. Barcode
                        scanning and RFID tagging of goods along different
                        checkpoints in the supply chain gives users clear
                        visibility into the movement of their shipments.
                      </li>
                      <li>
                        <strong>REDUCED OPERATIONAL COSTS :</strong> Leveraging
                        data such as expected inbound and outbound shipments and
                        space availability, <strong>« Carry Track »</strong>{" "}
                        solutions facilitate optimum warehouse space
                        utilization. Some solutions also offer simulators that
                        allow users to create virtual floor plans - including
                        placement of pallets, shelves, and loading docks - to
                        identify ways to make the best use of available space.
                      </li>
                    </ul>
                    <h6 class="card-title">Intervention level : </h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#requirements-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="requirements-carrytrack"
                        >
                          Requirements analysis and specification
                        </a>
                        <div class="collapse" id="requirements-carrytrack">
                          <ul>
                            <li>
                              <strong>Gathering requirements</strong> to
                              understand and document what is required by users
                              and other stakeholders.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#design-development-carrytrack"
                          role="button"
                          aria-expanded="false"
                          aria-controls="design-development-carrytrack"
                        >
                          Design and development
                        </a>
                        <div
                          class="collapse"
                          id="design-development-carrytrack"
                        >
                          <ul>
                            <li>
                              <strong>Developing a design </strong>around
                              solutions to the problems presented by
                              requirements, often involving process models and
                              storyboards.
                            </li>
                            <li>
                              <strong>Building a model</strong> with a modeling
                              tool that uses a modeling language like SysML or
                              UML to conduct early validation, prototyping and
                              simulation of the design.
                            </li>
                            <li>
                              <strong>Constructing code </strong>in the
                              appropriate programming language. Involves peer
                              and team review to eliminate problems early and
                              produce quality software faster.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>Testing</li>
                      <li>Deployment</li>
                      <li>Maintenance and support</li>
                    </ol>
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
                At Taysir Solutions, I started my career as a .NET and React
                developer. <br />
                My work included developing applications for various sectors
                like healthcare and invoicing. <br />I was involved in all
                aspects of the software development lifecycle, from requirements
                analysis to deployment. <br />I collaborated with a team to
                create efficient, scalable solutions while gaining hands-on
                experience with .NET and React. <br />
                This role helped me build a strong foundation in full-stack
                development
              </p>
              <p>
                <strong>AddInvoice</strong> is a billing and invoicing software
                that automates invoice creation, payment tracking, and account
                management. <br />
                It streamlines financial operations with features like
                customizable invoices, recurring billing, online payments, and
                automated reporting
              </p>
              <p>
                <strong>DMI</strong> is an Electronic Medical Records (EMR)
                software designed to digitize and centralize patient records.{" "}
                <br />
                It automates documentation, scheduling, prescriptions, and lab
                result management, streamlining healthcare operations for
                improved accuracy and efficiency.
              </p>
              <p>
                <strong>Ticketing</strong> is a B2B travel agency management
                solution that automates key operations, including itinerary
                creation, package management, and payment tracking. <br />
                It integrates with Global Distribution Systems (GDS) like
                Amadeus and Sabre to streamline reservations and enhance agency
                workflows
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
                    class="card-body text-dark collapse"
                    id="addinvoice"
                  >
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      <strong>« AddInvoice »</strong> is a Billing and Invoicing
                      software that automates the process of producing and
                      sending invoices and receiving payments. These
                      applications enable the efficient processing of complex
                      accounts across multiple customers and product lines,
                      incorporating contract data and customer relationship
                      management tools. Billing and Invoicing solutions are
                      designed to work with accounting applications and provide
                      a variety of business reporting tools.
                    </p>
                    <p class="card-text">
                      <strong>« AddInvoice »</strong> automates payment
                      invoicing, receiving, and processing. These systems
                      efficiently process complex accounts across multiple
                      customers and product lines by incorporating contract data
                      and customer relationship management (CRM) tools. Billing
                      and invoicing solutions work in tandem with accounting
                      applications and provide a variety of revenue reporting
                      and compliance tools.
                    </p>
                    <h6 class="card-title">Features</h6>
                    <ul>
                      <li>
                        <strong>Invoice history:</strong> Maintain a
                        client-by-client archive of every invoice for simple and
                        accurate reporting, risk management, client relations,
                        and sales data mining.
                      </li>
                      <li>
                        <strong>Time and expense tracking:</strong> Keep a log
                        of accumulated billable time and expenses. Automatically
                        add this data to invoices for faster billing with fewer
                        opportunities for error.{" "}
                      </li>
                      <li>
                        <strong>Contact database:</strong> Build a client
                        contact information database within the billing and
                        invoicing system to avoid the redundant expense of a
                        dedicated CRM tool.{" "}
                      </li>
                      <li>
                        <strong>Customizable invoices:</strong> Design invoice
                        layouts, content, and branding to tell the best possible
                        story. Develop customer trust by delivering content
                        consistent with existing brand materials.
                      </li>
                      <li>
                        <strong>Online invoices:</strong> Deliver and display
                        invoices online for simplicity and global accessibility
                        in any currency. Receive payments immediately through
                        online invoice interface.
                      </li>
                    </ul>
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
                    <h6 class="card-title">Intervention level : </h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#requirements-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="requirements-uaesme"
                        >
                          Requirements analysis and specification
                        </a>
                        <div class="collapse" id="requirements-uaesme">
                          <ul>
                            <li>
                              <strong>Gathering requirements</strong> to
                              understand and document what is required by users
                              and other stakeholders.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Choosing or building an architecture</strong> as
                        the underlying structure within which the software will
                        operate.
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#design-development-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="design-development-uaesme"
                        >
                          Design and development
                        </a>
                        <div class="collapse" id="design-development-uaesme">
                          <ul>
                            <li>
                              <strong>Developing a design </strong>around
                              solutions to the problems presented by
                              requirements, often involving process models and
                              storyboards.
                            </li>
                            <li>
                              <strong>Building a model</strong> with a modeling
                              tool that uses a modeling language like SysML or
                              UML to conduct early validation, prototyping and
                              simulation of the design.
                            </li>
                            <li>
                              <strong>Constructing code </strong>in the
                              appropriate programming language. Involves peer
                              and team review to eliminate problems early and
                              produce quality software faster.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Migrating data</strong> to the new or updated
                        software from existing applications or data sources if
                        necessary.
                      </li>
                      <li>Testing</li>
                      <li>Deployment</li>
                      <li>Maintenance and support</li>
                    </ol>
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
                  <div class="card-body text-dark collapse" id="dmi">
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      <strong>« DMI »</strong> EMR (Electronic Medical Records
                      software) is a digital version of the traditional
                      paper-based medical records, that is normally found in a
                      paper chart. it stores patient’s medical history,
                      medications, immunization dates, doctors notes, etc. Also,
                      it helps centralize patient records.
                    </p>
                    <p class="card-text">
                      <strong>« DMI »</strong> automates the documentation,
                      storage and retrieval of patient records. EMR software
                      streamlines data entry, automates diagnosis and CPT code
                      selection, minimizes required paper records, reduces
                      transcription costs, provides up-to-date patient histories
                      and reduces the turnaround time for patient visits and
                      retrieving lab results. Using Electronic Medical Records
                      solutions, doctors, offices and healthcare organizations
                      save time, reduce medical errors, perform less paperwork
                      and provide more accurate diagnoses for their patients.{" "}
                      <strong>« DMI »</strong> is related to Healthcare
                      Management software, Medical Billing software, Medical
                      Practice Management software, Medical Scheduling software
                      and Medical Transcription software.
                    </p>
                    <h6 class="card-title">Features</h6>
                    <ul>
                      <li>
                        <strong>Charting:</strong> Prepares a comprehensive
                        record of the patient's clinical data and medical
                        history such as demographics, vital signs, medications,
                        treatments, and laboratory notes.{" "}
                      </li>
                      <li>
                        <strong>Code and charge entry:</strong> Assigns an
                        appropriate cost to treatment codes, allowing you to
                        bill patients according to the codes listed on their
                        prescriptions or checkout bills.
                      </li>
                      <li>
                        <strong>Decision support:</strong> Provides doctors the
                        relevant information to support their decisions about
                        patient care. This information is the analysis of
                        historical data and records.
                      </li>
                      <li>
                        <strong>Order entry:</strong> Enters and sends
                        medication orders and treatment instructions
                        electronically from within the application.
                      </li>
                      <li>
                        <strong>Appointment scheduling:</strong> Books patient
                        appointments, displays bookings on a calendar, manages
                        no-shows, waitlists, and reschedules requests.
                      </li>
                      <li>
                        <strong>Compliance tracking:</strong> Tracks core
                        practice operations to ensure that they are performed in
                        accordance with the medical industry standards and
                        regulations.
                      </li>
                      <li>
                        <strong>Self-service portal:</strong> Offers a dedicated
                        portal for patients where they can book appointments,
                        communicate with their doctor, receive test results and
                        prescriptions, as well as make payments.
                      </li>
                    </ul>
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
                    <h6 class="card-title">Intervention level : </h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#requirements-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="requirements-uaesme"
                        >
                          Requirements analysis and specification
                        </a>
                        <div class="collapse" id="requirements-uaesme">
                          <ul>
                            <li>
                              <strong>Gathering requirements</strong> to
                              understand and document what is required by users
                              and other stakeholders.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Choosing or building an architecture</strong> as
                        the underlying structure within which the software will
                        operate.
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#design-development-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="design-development-uaesme"
                        >
                          Design and development
                        </a>
                        <div class="collapse" id="design-development-uaesme">
                          <ul>
                            <li>
                              <strong>Developing a design </strong>around
                              solutions to the problems presented by
                              requirements, often involving process models and
                              storyboards.
                            </li>
                            <li>
                              <strong>Building a model</strong> with a modeling
                              tool that uses a modeling language like SysML or
                              UML to conduct early validation, prototyping and
                              simulation of the design.
                            </li>
                            <li>
                              <strong>Constructing code </strong>in the
                              appropriate programming language. Involves peer
                              and team review to eliminate problems early and
                              produce quality software faster.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Migrating data</strong> to the new or updated
                        software from existing applications or data sources if
                        necessary.
                      </li>
                      <li>Testing</li>
                      <li>Deployment</li>
                      <li>Maintenance and support</li>
                    </ol>
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
                  <div class="card-body text-dark collapse" id="ticketing">
                    <p>
                      I've also had the opportunity to serve as the software
                      engineer lead for the last project{" "}
                      <strong>« Ticketing »</strong> which is a realization of a
                      solution to manage travel agencies.
                    </p>
                    <h6 class="card-title">Description</h6>
                    <p class="card-text">
                      <strong>« Ticketing »</strong> is a Travel Agency software
                      automates the front and back office activities of travel
                      agencies, vacation packagers, destination marketers and
                      transit companies. These applications assist in generating
                      price quotes, developing itineraries and managing
                      reservations for tour customers as well as providing easy
                      integration into third party reservation systems. Travel
                      Agency solutions assist agencies in automating their
                      business processes, such as accounting, invoicing,
                      marketing and business reporting.
                    </p>
                    <p class="card-text">
                      <strong>« Ticketing »</strong> manages packages,
                      customers, ticketing, and itineraries for tour operators,
                      vacation package companies, destination marketers, and
                      transit companies.
                    </p>
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
                    <p class="card-text">
                      Integrated with GDS (Global Distribution System) (Sabre,
                      Amadeus, Travelport).
                    </p>
                    <h6 class="card-title">Best For</h6>
                    <p class="card-text">
                      Dedicated to Travel agencies and tour-operators interested
                      in increasing productivity, generating additional revenues
                      &amp; improving customer satisfaction through a complete
                      system including online booking (B2B/B2C)
                    </p>
                    <h6 class="card-title">Intervention level : </h6>
                    <ol>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#requirements-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="requirements-uaesme"
                        >
                          Requirements analysis and specification
                        </a>
                        <div class="collapse" id="requirements-uaesme">
                          <ul>
                            <li>
                              <strong>Gathering requirements</strong> to
                              understand and document what is required by users
                              and other stakeholders.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Choosing or building an architecture</strong> as
                        the underlying structure within which the software will
                        operate.
                      </li>
                      <li>
                        <a
                          data-bs-toggle="collapse"
                          href="#design-development-uaesme"
                          role="button"
                          aria-expanded="false"
                          aria-controls="design-development-uaesme"
                        >
                          Design and development
                        </a>
                        <div class="collapse" id="design-development-uaesme">
                          <ul>
                            <li>
                              <strong>Developing a design </strong>around
                              solutions to the problems presented by
                              requirements, often involving process models and
                              storyboards.
                            </li>
                            <li>
                              <strong>Building a model</strong> with a modeling
                              tool that uses a modeling language like SysML or
                              UML to conduct early validation, prototyping and
                              simulation of the design.
                            </li>
                            <li>
                              <strong>Constructing code </strong>in the
                              appropriate programming language. Involves peer
                              and team review to eliminate problems early and
                              produce quality software faster.
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <strong>Migrating data</strong> to the new or updated
                        software from existing applications or data sources if
                        necessary.
                      </li>
                      <li>Testing</li>
                      <li>Deployment</li>
                      <li>Maintenance and support</li>
                    </ol>
                    <h6 class="card-title">Outils</h6>
                    <p class="card-text">
                      .Net Core 2.1, Clean Architecture, Restful Api, React.
                    </p>
                  </div>
                </div>
              </div>
              <p>
                Throughout my career, I’ve focused on building scalable and
                efficient software solutions, collaborating with
                cross-functional teams, and continuously learning new
                technologies to enhance my skills. <br />I thrive in
                environments where I can contribute to the overall success of a
                project while ensuring timely delivery. <br />I am also
                passionate about maintaining high-quality code and fostering
                effective communication within teams to meet project goals
                efficiently.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
