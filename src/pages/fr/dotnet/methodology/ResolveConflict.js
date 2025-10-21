import React from "react";
import { Link } from "react-router-dom";

export default function ResolveConflict() {
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
                    href="#summary"
                  >
                    🧭 1. Summary Table
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#acknowledge-conflict"
                  >
                    ⚙️ 2. Acknowledge the Conflict Calmly
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#define-decision-criteria"
                  >
                    🧠 3. Define the Decision Criteria
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#technical-review"
                  >
                    🧪 4. Technical Review Together
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#decision-facilitation"
                  >
                    ⚖️ 5. Facilitate a Decision
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#communicate-respectfully"
                  >
                    💬 6. Communicate Respectfully
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#future-conflicts"
                  >
                    💡 7. Prevent Future Conflicts
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
          <h3>Resolve Conflict</h3>
          <article id="summary">
            <h6>🧭 Example (Summary Table)</h6>
            <div>
              <h6>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Action</th>
                      <th>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Acknowledge conflict neutrally</td>
                      <td>De-escalate tension</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Define evaluation criteria</td>
                      <td>Ensure fairness</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Review both solutions together</td>
                      <td>Gather facts</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Facilitate decision</td>
                      <td>Choose best technical fit</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Communicate respectfully</td>
                      <td>Maintain teamwork</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Add preventive practices</td>
                      <td>Avoid future conflicts</td>
                    </tr>
                  </tbody>
                </table>
              </h6>
            </div>
          </article>
          <article id="acknowledge-conflict">
            <h6>⚙️ Step 1: Acknowledge the Conflict Calmly</h6>
            <div>
              <h6>⚙️ Step 1: Acknowledge the Conflict Calmly</h6>
              <ul>
                <li>The first step is not to take sides immediately</li>
                <li>
                  As a team lead (or a teammate), you can say:
                  <br />
                  <blockquote>
                    <p>
                      “Both solutions seem valuable. Let’s review them
                      objectively and decide based on what’s best for the
                      project.”
                    </p>
                  </blockquote>
                </li>
              </ul>
              <p>
                This helps lower tension and re-focus the discussion on{" "}
                <strong>facts</strong>, not <strong>egos</strong>.
              </p>
            </div>
          </article>
          <article id="define-decision-criteria">
            <h6>🧠 Step 2: Define the Decision Criteria</h6>
            <div>
              <h6>🧠 Step 2: Define the Decision Criteria</h6>
              <p>
                Set <strong>objective criteria</strong> for comparison.
                Examples:
              </p>
              <ul>
                <li>
                  <p>
                    ✅ <strong>Code quality</strong> (readability,
                    maintainability, test coverage)
                  </p>
                </li>
                <li>
                  <p>
                    ⚡ <strong>Performance</strong>
                  </p>
                </li>
                <li>
                  <p>
                    🧩{" "}
                    <strong>
                      Consistency with architecture and coding standards
                    </strong>
                  </p>
                </li>
                <li>
                  <p>
                    🧰 <strong>Reusability or extensibility</strong>
                  </p>
                </li>
                <li>
                  <p>
                    📈 <strong>Scalability / long-term impact</strong>
                  </p>
                </li>
                <li>
                  <p>
                    📚 <strong>Ease of onboarding for new devs</strong>
                  </p>
                </li>
              </ul>
              <p>
                Make it clear that the <strong>better technical fit</strong>{" "}
                wins — not who wrote it.
              </p>
            </div>
          </article>
          <article id="technical-review">
            <h6>🧪 Step 3: Technical Review Together</h6>
            <div>
              <h6>🧪 Step 3: Technical Review Together</h6>
              <p>
                Organize a <strong>code review meeting</strong> (pair review):
              </p>
              <ul>
                <li>Each developer explains their approach briefly.</li>
                <li>
                  The team (or tech lead/architect) reviews both implementations{" "}
                  <strong>side by side</strong>.
                </li>
                <li>Evaluate using the criteria defined above.</li>
                <li>
                  Discuss trade-offs (e.g., one solution might be faster but
                  harder to maintain).
                </li>
              </ul>
              <p>
                If possible, <strong>benchmark</strong> or{" "}
                <strong>run both solutions</strong> to gather real data.
              </p>
            </div>
          </article>
          <article id="decision-facilitation">
            <h6>⚖️ Step 4: Facilitate a Decision</h6>
            <div>
              <h6>⚖️ Step 4: Facilitate a Decision</h6>
              <p>Depending on the team structure:</p>
              <ul>
                <li>
                  If you have a tech lead or architect, they can make the final
                  call.
                </li>
                <li>
                  If it’s a flat team, decide by team consensus after the
                  review.
                </li>
                <li>
                  You can also merge the best parts of both if they complement
                  each other.
                </li>
              </ul>
              <p>Example:</p>
              <blockquote>
                <p>
                  “Let’s use approach A’s data structure but keep B’s caching
                  logic — it’s more efficient.”
                </p>
              </blockquote>
            </div>
          </article>
          <article id="communicate-respectfully">
            <h6>💬 Step 5: Communicate Respectfully</h6>
            <div>
              <h6>💬 Step 5: Communicate Respectfully</h6>
              <p>Once a decision is made:</p>
              <ul>
                <li>
                  <p>Acknowledge both efforts:</p>
                  <blockquote>
                    <p>
                      “Both solutions had great ideas. Thanks for the effort —
                      this helped us choose the best long-term approach.”
                    </p>
                  </blockquote>
                </li>
                <li>
                  <p>
                    Emphasize that it’s{" "}
                    <strong>about the code, not the coder</strong>.
                  </p>
                </li>
              </ul>
              <p>This builds trust and prevents resentment.</p>
            </div>
          </article>
          <article id="future-conflicts">
            <h6>💡 Step 6: Prevent Future Conflicts</h6>
            <div>
              <h6>💡 Step 6: Prevent Future Conflicts</h6>
              <p>You can minimize similar conflicts by:</p>
              <ul>
                <li>
                  <p>Acknowledge both efforts:</p>
                  <blockquote>
                    <p>
                      “Both solutions had great ideas. Thanks for the effort —
                      this helped us choose the best long-term approach.”
                    </p>
                  </blockquote>
                </li>
                <li>
                  <p>
                    Emphasize that it’s{" "}
                    <strong>about the code, not the coder</strong>.
                  </p>
                </li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
