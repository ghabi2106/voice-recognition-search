import React from "react";
import { Link } from "react-router-dom";

export default function Ideals() {
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
                    href="#ideals"
                  >
                    IDEALS
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#interface-segregation"
                  >
                    Interface Segregation
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#deployability"
                  >
                    Deployability
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#event-driven"
                  >
                    Event-driven
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#availability-over-consistency"
                  >
                    Availability over Consistency
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#loose-coupling"
                  >
                    Loose-coupling
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#single-responsibility"
                  >
                    Single Responsibility
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
                    to="/caching"
                  >
                    Caching
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controller"
                  >
                    Action Method, Result, Selectors
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/controllervuedata"
                  >
                    ViewBag, ViewData and TempData
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/https"
                  >
                    HTTPS, HTTP and SSL
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/httpmethods"
                  >
                    HTTP Request Methods
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/jwt"
                  >
                    JWT
                  </Link>
                </li>
                <li>
                  <Link
                    className="d-inline-flex align-items-center rounded"
                    to="/"
                  >
                    Services, Microservices, Web API, Web API vs WCF
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
          <h3>IDEALS</h3>
          <article id="ideals">
            <h6>IDEALS</h6>
            <div>
              <p>
                The <strong>Ideals</strong> principles don’t cover the whole
                spectrum of design decisions for microservices-based solutions,
                but they touch the key concerns and success factors for creating
                modern service-based systems.
              </p>
              <ul>
                <li>
                  <strong>I</strong>nterface segregation
                </li>
                <li>
                  <strong>D</strong>eployability (is on you)
                </li>
                <li>
                  <strong>E</strong>vent-driven
                </li>
                <li>
                  <strong>A</strong>vailability over consistency
                </li>
                <li>
                  <strong>L</strong>oose coupling
                </li>
                <li>
                  <strong>S</strong>ingle responsibility
                </li>
              </ul>
            </div>
          </article>
          <article id="interface-segregation">
            <h6>Interface Segregation</h6>
            <div>
              <p>
                Interface segregation tells us that different types of clients
                (e.g., mobile apps, web apps, CLI programs) should be able to
                interact with services through the contract that best suits
                their needs.
              </p>
              <dl>
                <dt>Explain more :</dt>
                <dd>
                  The goal of interface segregation for microservices is that
                  each type of frontend sees the service contract that best
                  suits its needs. For example: a mobile native app wants to
                  call endpoints that respond with a short JSON representation
                  of the data; the same system has a web application that uses
                  the full JSON representation; there’s also an old desktop
                  application that calls the same service and requires a full
                  representation but in XML. Different clients may also use
                  different protocols. For example, external clients want to use
                  HTTP to call a gRPC service.
                </dd>
                <dd>
                  Instead of trying to impose the same service contract (using
                  canonical models) on all types of service clients, we
                  "segregate the interface" so that each type of client sees the
                  service interface that it needs.
                </dd>
                <dd>
                  A prominent alternative is to use an API gateway. It can do
                  message format transformation, message structure
                  transformation, protocol bridging, message routing, and much
                  more. A popular alternative is the Backend for Frontends (BFF)
                  pattern. In this case, we have an API gateway for each type of
                  client.
                </dd>
              </dl>
            </div>
          </article>
          <article id="deployability">
            <h6>Deployability</h6>
            <div>
              <p>
                Deployability (is on you) acknowledges that in the microservice
                era, which is also the DevOps era, there are critical design
                decisions and technology choices developers need to make
                regarding packaging, deploying and running microservices.
              </p>
              <dl>
                <dt>Explain more :</dt>
                <dd>
                  There are a list of strategies and technologies that
                  developers should consider in any microservice-based solution
                  to improve deployability:
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>
                        Containerization and container orchestration
                      </strong>
                      : a containerized microservice is much easier to replicate
                      and deploy across platforms and cloud providers, and an
                      orchestration platform provides shared resources and
                      mechanisms for routing, scaling, replication,
                      load-balancing, and more. Docker and Kubernetes are
                      today’s de facto standards for containerization and
                      container orchestration.
                    </li>
                    <li>
                      <strong>Service mesh</strong>: this kind of tool can be
                      used for traffic monitoring, policy enforcement,
                      authentication, RBAC, routing, circuit breaker, message
                      transformation, among other things to help with the
                      communication in a container orchestration platform.
                      Popular service meshes include Istio, Linkerd, and Consul
                      Connect.
                    </li>
                    <li>
                      <strong>API gateway</strong>: by intercepting calls to
                      microservices, an API gateway product provides a rich set
                      of features, including message transformation and protocol
                      bridging, traffic monitoring, security controls, routing,
                      cache, request throttling and API quota, and circuit
                      breaking. Prominent players in this space include
                      Ambassador, Kong, Apiman, WSO2 API Manager, Apigee, and
                      Amazon API Gateway.
                    </li>
                    <li>
                      <strong>Serverless architecture</strong>: you can avoid
                      much of the complexity and operational cost of container
                      orchestration by deploying your services to a serverless
                      platform, which follows the FaaS paradigm. AWS Lambda,
                      Azure Functions, and Google Cloud Functions are examples
                      of serverless platforms.
                    </li>
                    <li>
                      <strong>Monitoring tools</strong>: with microservices
                      spread across your on-premises and cloud infrastructure,
                      being able to predict, detect, and notify issues related
                      to the health of the system is critical. There are several
                      monitoring tools available, such as New Relic, CloudWatch,
                      Datadog, Prometheus, and Grafana.
                    </li>
                    <li>
                      <strong>Log consolidation tools</strong>: microservices
                      can easily increase the number of deployment units by an
                      order of magnitude. We need tools to consolidate the log
                      output from these components, with the ability to search,
                      analyze, and generate alerts. Popular tools in this space
                      are Fluentd, Graylog, Splunk, and ELK (Elasticsearch,
                      Logstash, Kibana).
                    </li>
                    <li>
                      <strong>Tracing tools</strong>: these tools can be used to
                      instrument your microservices, and then produce, collect,
                      and visualize runtime tracing data that shows the calls
                      across services. They help you to spot performance issues
                      (and sometimes even help you to understand the
                      architecture). Examples of tracing tools are Zipkin,
                      Jaeger, and AWS X-Ray.
                    </li>
                    <li>
                      <strong>DevOps</strong>: microservices work better when
                      devs and ops teams communicate and collaborate more
                      closely, from infrastructure configuration to incident
                      handling.
                    </li>
                    <li>
                      <strong>
                        Blue-green deployment and canary releasing
                      </strong>
                      : these deployment strategies allow zero or near-zero
                      downtime when releasing a new version of a microservice,
                      with a quick switchback in case of problems.
                    </li>
                    <li>
                      <strong>Infrastructure as Code (IaC)</strong>: this
                      practice enables minimal human interaction in the
                      build-deploy cycle, which becomes faster, less
                      error-prone, and more auditable.
                    </li>
                    <li>
                      <strong>Continuous delivery</strong>: this is a required
                      practice to shorten the commit-to-deploy interval yet
                      keeping the quality of the solutions. Traditional CI/CD
                      tools include Jenkins, GitLab CI/CD, Bamboo, GoCD,
                      CircleCI, and Spinnaker. More recently, GitOps tools such
                      as Weaveworks and Flux have been added to the landscape,
                      combining CD and IaC.
                    </li>
                    <li>
                      <strong>Externalized configuration</strong>: this
                      mechanism allows configuration properties to be stored
                      outside the microservice deployment unit and easily
                      managed.
                    </li>
                  </ul>
                </dd>
                <dd></dd>
                <dd></dd>
              </dl>
            </div>
          </article>
          <article id="event-driven">
            <h6>Event-driven</h6>
            <p>
              Event-driven suggests that whenever possible we should model our
              services to be activated by an asynchronous message or event
              instead of a synchronous call. Availability over consistency
              reminds us that more often end users value the availability of the
              system over strong data consistency, and they’re okay with
              eventual consistency.
            </p>
          </article>
          <article id="availability-over-consistency">
            <h6>Availability over Consistency</h6>
            <div>
              <p>
                The CAP theorem essentially gives you two options: availability
                XOR consistency.
              </p>
              <dl>
                <dt>Explanation</dt>
                <dt>CAP specifically refers to:</dt>
                <dd>
                  <ul>
                    <li>
                      <strong>Consistency</strong> means that all clients see
                      the same data at the same time, no matter the path of
                      their request. This is critical for applications that do
                      frequent updates.
                    </li>
                    <li>
                      <strong>Availability</strong> means that all functioning
                      application components will return a valid response, even
                      if they are down. This is particularly important if an
                      application's user population has a low tolerance for
                      outages (such as a retail portal).
                    </li>
                    <li>
                      <strong>Partition</strong> <strong>tolerance</strong>{" "}
                      means that the application will operate even during a
                      network failure that results in lost or delayed messages
                      between services. This comes into play for applications
                      that integrate with a large number of distributed,
                      independent components.
                    </li>
                  </ul>
                </dd>
                <dt>Availability with eventual consistency</dt>
                <dd>
                  For microservices, the main strategy that enables the
                  availability choice is data replication. Different design
                  patterns can be employed, sometimes combined:
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>Service Data Replication pattern</strong>: this
                      basic pattern is used when a microservice needs to access
                      data that belongs to other applications (and API calls are
                      not suitable to get the data). We create a replica of that
                      data and make it readily available to the microservice.
                      The solution also requires a data synchronization
                      mechanism (e.g., ETL tool/program, publish-subscribe
                      messaging, materialized views), which will periodically or
                      trigger-based make the replica and master data consistent.
                    </li>
                    <li>
                      <strong>
                        Command Query Responsibility Segregation (CQRS) pattern
                      </strong>
                      : here we separate the design and implementation of
                      operations that change data (commands) from the ones that
                      only read data (queries). CQRS typically builds on Service
                      Data Replication for the queries for improved performance
                      and autonomy.
                    </li>
                    <li>
                      <strong>Event Sourcing pattern</strong>: instead of
                      storing the current state of an object in the database, we
                      store the sequence of append-only, immutable events that
                      affected that object. Current state is obtained by
                      replaying events, and we do so to provide a "query view"
                      of the data. Thus, Event Sourcing typically builds upon a
                      CQRS design.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </article>
          <article id="loose-coupling">
            <h6>Loose-coupling</h6>
            <div>
              <p>
                Loose-coupling remains an important design concern in the case
                of microservices, with respect to afferent (incoming) and
                efferent (outgoing) coupling. Single responsibility is the idea
                that enables modeling microservices that are not too large or
                too slim because they contain the right amount of cohesive
                functionality.
              </p>
              <dl>
                <dt>Loose coupling strategies for services</dt>
                <dd>
                  Several strategies can be used and combined to promote
                  (afferent and efferent) loose coupling. Examples of such
                  strategies include:
                </dd>
                <dd>
                  <ul>
                    <li>
                      <strong>Point-to-point and publish-subscribe</strong>:
                      these building block messaging patterns and their
                      variations promote loose coupling because senders and
                      receivers are not aware of each other; the contract of a
                      reactive microservice (e.g., a Kafka consumer) becomes the
                      name of the message queue and the structure of the
                      message.
                    </li>
                    <li>
                      <strong>API gateway and BFF</strong>: these solutions
                      prescribe an intermediary component that deals with any
                      discrepancies between the contract of the service and the
                      message format and protocol that the client wants to see,
                      hence helping to uncouple them.
                    </li>
                    <li>
                      <strong>Contract-first design</strong>: by designing the
                      contract independently of any existing code we avoid
                      creating APIs that are tightly coupled to technology and
                      implementation.
                    </li>
                    <li>
                      <strong>Hypermedia</strong>: for REST services, hypermedia
                      helps frontends to be more independent of service
                      endpoints.
                    </li>
                    <li>
                      <strong>Façade and Adapter/Wrapper patterns</strong>:
                      variations of these GoF patterns in microservice
                      architectures can prescribe internal components or even
                      services that can prevent undesirable coupling to spread
                      across a microservice implementation.
                    </li>
                    <li>
                      <strong>Database per Microservice pattern</strong>: with
                      this pattern, microservices not only gain in autonomy but
                      also avoid direct coupling to shared databases.
                    </li>
                  </ul>
                </dd>
              </dl>
            </div>
          </article>
          <article id="single-responsibility">
            <h6>Single Responsibility</h6>
            <div>
              <p>
                A microservice, should have one and only one responsibility.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
