import React from "react";
import { Link } from "react-router-dom";

export default function Qualities() {
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
                    href="#describe"
                  >
                    Describe yourself :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#leave"
                  >
                    Why you leave :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#hire"
                  >
                    Why should we hire you? :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#strength"
                  >
                    What are your strengths :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#accomplish"
                  >
                    What do you hope to accomplish here :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#best-candidate"
                  >
                    Why are you the best candidate for the job :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#want"
                  >
                    Why do you want this job :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#salary"
                  >
                    What are your salary expectations :
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#after-5-years"
                  >
                    Where do you see yourself in five years :
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
          <article id="describe">
            <h6>Describe yourself :</h6>
            <div>
              <p>
                I'd really describe myself as a person with a versatile
                skill-set, a lot of integrity and a willingness to go the extra
                mile to satisfy a customer.
              </p>
            </div>
          </article>
          <article id="leave">
            <h6>Why you leave?</h6>
            <div>
              <p>
                I'm looking for a bigger challenge and to grow my career so I
                found myself bored with the work and looking for more
                challenges. I'm an excellent employee and I didn't want my
                unhappiness to have an impact on the job I was doing for my
                employer.
              </p>
            </div>
          </article>
          <article id="hire">
            <h6>Why should we hire you?</h6>
            <div>
              <p>
                I know that your company is currently working to expand its
                international market. Having worked in I, I am sure that I can
                help this company achieve its goals.
              </p>
              <p>
                I'd love this position as Senior .Net developer because I know I
                have the skills to manage complicated projects and I'd like to
                do that for your company.
              </p>
            </div>
          </article>
          <article id="strengths">
            <h6>What are your strengths?</h6>
            <div>
              <ul>
                <li>
                  <p>
                    My <strong>people skills</strong> are my greatest strength.
                    I find it easy to connect with almost anyone, and I often
                    know how to empathize with others in an appropriate way.
                  </p>
                </li>
                <li>
                  <p>
                    I am very <strong>honest</strong>. When I feel that my
                    workload is too large to accept another task, or if I don't
                    understand something, I always let my supervisor know.
                  </p>
                </li>
                <li>
                  <p>
                    I consider my <strong>leadership skills</strong> to be one
                    of my greatest strengths.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="weakness">
            <h6>What are your weakness?</h6>
            <div>
              <ul>
                <li>
                  <p>
                    I struggle with <strong>negative criticism</strong> and can
                    become obsessed with perfecting my work after receiving
                    notes from a supervisor. While I appreciate the guidance, I
                    think I can learn to be less harsh on myself.
                  </p>
                </li>
                <li>
                  <p>
                    I find <strong>public speaking</strong> intimidating and
                    have often struggled with presentations. As a result, I am
                    currently taking a public speaking course at a community
                    college to become more confident and learn to structure a
                    speech more effectively.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Shyness</strong> is something that I struggle with
                    in large groups. I find it intimidating to ask questions or
                    raise points, so I have often remained quiet in the past. I
                    have been trying to be more vocal in smaller groups to
                    become more confident.
                  </p>
                </li>
              </ul>
            </div>
          </article>
          <article id="accomplish">
            <h6>What do you hope to accomplish here?</h6>
            <div>
              <p>
                I am a list person, so I like to write down objectives for
                learning to stay on track. Which is the field I will work on
                such as automotive, aeronautics or Finance, so I would include
                the goal of mastering that field during the first two weeks at
                the top of my list.
              </p>
            </div>
          </article>
          <article id="best-candidate">
            <h6>Why are you the best candidate for the job?</h6>
            <div>
              <p>
                I am a self-motivated person who is willing to go above and
                beyond on any project, and to learn valuable skills on my own
                time. For example, I developed a web application with react and
                node, simply out of a passion to learn how to code. I know you
                are looking for a self-motivated software engineer with both
                skills and passion, and I am that person.
              </p>
            </div>
          </article>
          <article id="contribute">
            <h6>What can you contribute to this company?</h6>
            <div>
              <p>
                My previous work experience includes innovation in many areas,
                including strategies for more effective teamwork. At my previous
                company, I devised strategies for improving teamwork and
                communication among members of team projects. I can bring to
                your organization not only my ideas from my previous job, but my
                general passion for innovation too.
              </p>
            </div>
          </article>
          <article id="want">
            <h6>Why do you want this job?</h6>
            <div>
              <p>
                This job is a good fit for what I've been doing and enjoying
                throughout my career. It offers a mix of short-term projects and
                long-term goals. My organizational skills allow me to
                successfully multitask and complete both kinds of projects.
              </p>
            </div>
          </article>
          <article id="salary">
            <h6>What are your salary expectations?</h6>
            <div>
              <p>
                I'm open to discussing what you believe to be a fair salary for
                the position. However, based on my understanding of this
                geographic area, I'd expect a salary in the general range of
                $2500 to $3000. Again, I'm open to discussing these numbers with
                you.
              </p>
            </div>
          </article>
          <article id="after-5-years">
            <h6>Where do you see yourself in five years?</h6>
            <div>
              <p>
                Within five years, I would like to be recognized as an expert in
                .Net technologies and a project manager.
              </p>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
