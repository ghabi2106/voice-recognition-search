import React from "react";
import { Link } from "react-router-dom";

export default function Plan() {
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
                    href="#plan"
                  >
                    Plan
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#business"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#project-management"
                  >
                    Project Management
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#technical"
                  >
                    Technical
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#architecture"
                  >
                    Architecture
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
                    to="/hostedservice"
                  >
                    IHostedService, BackgroundService
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/csharp9"
                  >
                    New features in C# 10
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
          <h3>Project Planning</h3>
          <article id="plan">
            <h6>Project Plan</h6>
            <div>
              <p>
                Before starting a web project, there are several important
                considerations to ensure success. These can be grouped into{" "}
                <strong>technical, business, and project management</strong>{" "}
                categories:
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>
                      <strong>Category</strong>
                    </th>
                    <th>
                      <strong>Considerations</strong>
                    </th>
                    <th>
                      <strong>Key Questions to Answer</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Purpose &amp; Scope</strong>
                    </td>
                    <td>Define objectives, target audience, and features.</td>
                    <td>
                      What problem are you solving? Who are your users? What
                      features are essential?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Technology Stack</strong>
                    </td>
                    <td>
                      Front-end (e.g., Angular, React), Back-end (e.g., .NET,
                      Node.js), Database (SQL/NoSQL), Hosting.
                    </td>
                    <td>
                      What tools and frameworks best suit your requirements and
                      expertise?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Architecture &amp; Design</strong>
                    </td>
                    <td>
                      Choose architecture (e.g., Clean, MVC, Microservices),
                      ensure scalability and security.
                    </td>
                    <td>
                      Is the architecture scalable and maintainable? How will
                      you ensure data security?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Team &amp; Resources</strong>
                    </td>
                    <td>
                      Identify team roles, assess skills, and allocate budget.
                    </td>
                    <td>
                      Do you have the right people and budget to execute the
                      project successfully?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Project Management</strong>
                    </td>
                    <td>
                      Use Agile, Scrum, or Kanban; set timelines and milestones;
                      use tools (e.g., Jira, Trello).
                    </td>
                    <td>
                      What methodology and tools will help manage tasks and
                      progress efficiently?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Legal &amp; Compliance</strong>
                    </td>
                    <td>
                      Comply with regulations (e.g., GDPR, CCPA); secure IP
                      rights and contracts.
                    </td>
                    <td>
                      Are you legally compliant and protecting your intellectual
                      property?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Monetization</strong>
                    </td>
                    <td>
                      Define revenue model (e.g., subscription, freemium),
                      analyze pricing strategy.
                    </td>
                    <td>How will the project generate revenue?</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Quality Assurance</strong>
                    </td>
                    <td>
                      Conduct testing (unit, integration, E2E), implement error
                      handling, and ensure reliability.
                    </td>
                    <td>
                      Have you planned for comprehensive testing and quality
                      control?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Performance Optimization</strong>
                    </td>
                    <td>
                      Optimize for speed, responsiveness, and scalability; use
                      caching and CDNs.
                    </td>
                    <td>
                      How will you ensure a fast and seamless user experience?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Marketing &amp; Launch</strong>
                    </td>
                    <td>
                      Plan a go-to-market strategy, define branding, and choose
                      marketing channels.
                    </td>
                    <td>How will you reach and engage your target audience?</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Monitoring &amp; Maintenance</strong>
                    </td>
                    <td>
                      Use tools for performance tracking (e.g., Google
                      Analytics, New Relic); schedule updates and fixes.
                    </td>
                    <td>
                      How will you handle post-launch performance monitoring and
                      feature updates?
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Risk Management</strong>
                    </td>
                    <td>
                      Identify risks (technical, market, financial) and
                      mitigation plans.
                    </td>
                    <td>
                      What are the major risks, and how will you address them if
                      they occur?
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>
          <article id="business">
            <h6>Business Considerations</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>Category</strong>
                  </th>
                  <th>
                    <strong>Considerations</strong>
                  </th>
                  <th>
                    <strong>Key Questions to Answer</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Purpose &amp; Scope</strong>
                  </td>
                  <td>Define objectives, target audience, and features.</td>
                  <td>
                    What problem are you solving? Who are your users? What
                    features are essential?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Monetization</strong>
                  </td>
                  <td>
                    Define revenue model (e.g., subscription, freemium), analyze
                    pricing strategy.
                  </td>
                  <td>How will the project generate revenue?</td>
                </tr>
                <tr>
                  <td>
                    <strong>Market Research</strong>
                  </td>
                  <td>
                    Analyze competitors, identify market gaps, and stay updated
                    on industry trends.
                  </td>
                  <td>
                    Who are your competitors? What unique value will you offer?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Branding &amp; Marketing</strong>
                  </td>
                  <td>
                    Develop branding (logo, messaging, design), select marketing
                    channels, and create a launch plan.
                  </td>
                  <td>How will you build brand identity and attract users?</td>
                </tr>
                <tr>
                  <td>
                    <strong>Legal &amp; Compliance</strong>
                  </td>
                  <td>
                    Ensure regulatory compliance (e.g., GDPR, HIPAA), secure IP
                    rights, and manage contracts.
                  </td>
                  <td>
                    Are you legally compliant and protecting your intellectual
                    property?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Financial Planning</strong>
                  </td>
                  <td>
                    Budget for development, marketing, and maintenance; forecast
                    ROI.
                  </td>
                  <td>
                    How will you fund and sustain the project financially?
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="project-management">
            <h6>Project Management Considerations</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>Category</strong>
                  </th>
                  <th>
                    <strong>Considerations</strong>
                  </th>
                  <th>
                    <strong>Key Questions to Answer</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Team &amp; Resources</strong>
                  </td>
                  <td>
                    Identify team roles, assess skills, and allocate budget.
                  </td>
                  <td>
                    Do you have the right people and budget to execute the
                    project successfully?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Project Workflow</strong>
                  </td>
                  <td>
                    Use Agile, Scrum, or Kanban; set clear milestones and
                    timelines; track progress with tools.
                  </td>
                  <td>
                    What methodology and tools will help manage tasks and
                    progress efficiently?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Risk Management</strong>
                  </td>
                  <td>
                    Identify risks (technical, market, financial) and mitigation
                    plans.
                  </td>
                  <td>
                    What are the major risks, and how will you address them if
                    they occur?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Communication</strong>
                  </td>
                  <td>
                    Set up regular meetings, define communication protocols, and
                    provide stakeholder updates.
                  </td>
                  <td>
                    How will you ensure smooth collaboration among team members
                    and stakeholders?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Quality Assurance</strong>
                  </td>
                  <td>
                    Plan for testing (unit, integration, E2E) and define quality
                    benchmarks.
                  </td>
                  <td>
                    Have you ensured sufficient testing to maintain project
                    quality?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Monitoring &amp; Maintenance</strong>
                  </td>
                  <td>
                    Plan for performance tracking, bug fixes, and feature
                    updates.
                  </td>
                  <td>
                    How will you handle post-launch maintenance and ensure
                    long-term project stability?
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="technical">
            <h6>Technical Considerations</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>Category</strong>
                  </th>
                  <th>
                    <strong>Considerations</strong>
                  </th>
                  <th>
                    <strong>Key Questions to Answer</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Technology Stack</strong>
                  </td>
                  <td>
                    Front-end (e.g., Angular, React), Back-end (e.g., .NET,
                    Node.js), Database (SQL/NoSQL), Hosting.
                  </td>
                  <td>
                    What tools and frameworks best suit your requirements and
                    expertise?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Architecture &amp; Design</strong>
                  </td>
                  <td>
                    Choose architecture (e.g., Clean, MVC, Microservices),
                    ensure scalability and security.
                  </td>
                  <td>
                    Is the architecture scalable and maintainable? How will you
                    ensure data security?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Development Tools</strong>
                  </td>
                  <td>
                    Use version control (Git), IDEs (VS Code), and task
                    automation tools (e.g., Webpack, npm scripts).
                  </td>
                  <td>
                    Are you equipped with the right tools for efficient
                    development?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Performance Optimization</strong>
                  </td>
                  <td>
                    Optimize for speed, responsiveness, and scalability; use
                    caching and CDNs.
                  </td>
                  <td>
                    How will you ensure a fast and seamless user experience?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Security</strong>
                  </td>
                  <td>
                    Plan for authentication (OAuth, JWT), data encryption
                    (SSL/TLS, AES), and vulnerability management.
                  </td>
                  <td>How will you protect user data and system integrity?</td>
                </tr>
                <tr>
                  <td>
                    <strong>DevOps &amp; CI/CD</strong>
                  </td>
                  <td>
                    Automate builds, testing, and deployments with tools like
                    Jenkins, GitHub Actions, or Azure DevOps.
                  </td>
                  <td>
                    Have you streamlined your development and deployment
                    processes?
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
          <article id="architecture">
            <h6>Architecture Considerations</h6>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>
                    <strong>Category</strong>
                  </th>
                  <th>
                    <strong>Considerations</strong>
                  </th>
                  <th>
                    <strong>Key Questions</strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Project Requirements</strong>
                  </td>
                  <td>
                    Functional (features) and non-functional (performance,
                    scalability, security, availability).
                  </td>
                  <td>
                    What features are required? What are the performance and
                    security needs?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Application Complexity</strong>
                  </td>
                  <td>
                    Simple projects: Monolithic; Complex projects:
                    Microservices, Event-Driven, or Modular.
                  </td>
                  <td>
                    Is the project simple or complex? How many modules or
                    components are needed?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Scalability Needs</strong>
                  </td>
                  <td>
                    Horizontal: Microservices, Cloud-Native; Vertical:
                    Monolithic.
                  </td>
                  <td>
                    How much growth is expected? Will scaling horizontally or
                    vertically suffice?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Team Expertise</strong>
                  </td>
                  <td>
                    Align architecture with the team’s technical skills and
                    size.
                  </td>
                  <td>
                    Does the team have experience with distributed systems or
                    advanced tooling?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Development Speed</strong>
                  </td>
                  <td>
                    Monolithic: Faster to develop initially; Microservices:
                    Slower setup but faster independent updates.
                  </td>
                  <td>
                    Is quick initial development or flexibility in future
                    updates more important?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Maintenance &amp; Upgrades</strong>
                  </td>
                  <td>
                    Modular architectures simplify testing and updates;
                    Microservices enable independent deployments.
                  </td>
                  <td>
                    How easy should it be to maintain and expand the system?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Budget &amp; Resources</strong>
                  </td>
                  <td>
                    Monolithic: Cost-effective; Microservices: Requires more
                    infrastructure and tooling (e.g., Kubernetes).
                  </td>
                  <td>
                    What is the available budget for development, hosting, and
                    scaling?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Integration Needs</strong>
                  </td>
                  <td>
                    Extensive API integrations: Service-Oriented or
                    Microservices; Complex data flows: Event-Driven.
                  </td>
                  <td>
                    Will the system need to integrate with many third-party
                    tools or handle complex workflows?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Security &amp; Compliance</strong>
                  </td>
                  <td>
                    Consider layered security and compliance requirements (e.g.,
                    GDPR, HIPAA).
                  </td>
                  <td>What are the data protection and compliance needs?</td>
                </tr>
                <tr>
                  <td>
                    <strong>Future Growth</strong>
                  </td>
                  <td>
                    Monolithic: Short-term needs; Microservices or Modular:
                    Long-term scalability and adaptability.
                  </td>
                  <td>
                    Is the focus on short-term delivery or long-term growth and
                    flexibility?
                  </td>
                </tr>
                <tr>
                  <td>
                    <strong>Example Architectures</strong>
                  </td>
                  <td>
                    Monolithic (simple apps), Microservices (large systems),
                    Event-Driven (real-time), Serverless (dynamic traffic).
                  </td>
                  <td>
                    Which architecture aligns with the project’s size,
                    complexity, and traffic patterns?
                  </td>
                </tr>
              </tbody>
            </table>
          </article>
        </section>
      </div>
    </>
  );
}
