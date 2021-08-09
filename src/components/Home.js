import React from "react";

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
                    href="#typography"
                  >
                    Typography
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded active"
                    href="#images"
                  >
                    Images
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tables"
                  >
                    Tables
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#figures"
                  >
                    Figures
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#forms-collapse"
                aria-controls="forms-collapse"
              >
                Forms
              </button>
              <ul className="list-unstyled ps-3 collapse" id="forms-collapse">
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#overview"
                  >
                    Overview
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#disabled-forms"
                  >
                    Disabled forms
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#sizing"
                  >
                    Sizing
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#input-group"
                  >
                    Input group
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#floating-labels"
                  >
                    Floating labels
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#validation"
                  >
                    Validation
                  </a>
                </li>
              </ul>
            </li>
            <li className="my-2">
              <button
                className="btn d-inline-flex align-items-center collapsed"
                data-bs-toggle="collapse"
                aria-expanded="false"
                data-bs-target="#components-collapse"
                aria-controls="components-collapse"
              >
                Components
              </button>
              <ul className="list-unstyled ps-3 collapse" id="components-collapse">
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#accordion"
                  >
                    Accordion
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#alerts"
                  >
                    Alerts
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#badge"
                  >
                    Badge
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#breadcrumb"
                  >
                    Breadcrumb
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#buttons"
                  >
                    Buttons
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#button-group"
                  >
                    Button group
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#card"
                  >
                    Card
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#carousel"
                  >
                    Carousel
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#dropdowns"
                  >
                    Dropdowns
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#list-group"
                  >
                    List group
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#modal"
                  >
                    Modal
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#navs"
                  >
                    Navs
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#navbar"
                  >
                    Navbar
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#pagination"
                  >
                    Pagination
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#popovers"
                  >
                    Popovers
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#progress"
                  >
                    Progress
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#scrollspy"
                  >
                    Scrollspy
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#spinners"
                  >
                    Spinners
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#toasts"
                  >
                    Toasts
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#tooltips"
                  >
                    Tooltips
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bd-cheatsheet container-fluid bg-body">
        <section id="content">
          <h2 className="sticky-xl-top fw-bold pt-3 pt-xl-5 pb-2 pb-xl-3">
            Contents
          </h2>

          <article className="my-3" id="typography">
            <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
              <h3>Typography</h3>
              <a
                className="d-flex align-items-center"
                href="/docs/5.0/content/typography/"
              >
                Documentation
              </a>
            </div>

            <div>
              <div className="bd-example">
                <p className="display-1">Display 1</p>
                <p className="display-2">Display 2</p>
                <p className="display-3">Display 3</p>
                <p className="display-4">Display 4</p>
                <p className="display-5">Display 5</p>
                <p className="display-6">Display 6</p>
              </div>

              <div className="bd-example">
                <p className="h1">Heading 1</p>
                <p className="h2">Heading 2</p>
                <p className="h3">Heading 3</p>
                <p className="h4">Heading 4</p>
                <p className="h5">Heading 5</p>
                <p className="h6">Heading 6</p>
              </div>

              <div className="bd-example">
                <p className="lead">
                  This is a lead paragraph. It stands out from regular
                  paragraphs.
                </p>
              </div>

              <div className="bd-example">
                <p>
                  You can use the mark tag to <mark>highlight</mark> text.
                </p>
                <p>
                  <del>
                    This line of text is meant to be treated as deleted text.
                  </del>
                </p>
                <p>
                  <s>
                    This line of text is meant to be treated as no longer
                    accurate.
                  </s>
                </p>
                <p>
                  <ins>
                    This line of text is meant to be treated as an addition to
                    the document.
                  </ins>
                </p>
                <p>
                  <u>This line of text will render as underlined.</u>
                </p>
                <p>
                  <small>
                    This line of text is meant to be treated as fine print.
                  </small>
                </p>
                <p>
                  <strong>This line rendered as bold text.</strong>
                </p>
                <p>
                  <em>This line rendered as italicized text.</em>
                </p>
              </div>

              <div className="bd-example">
                <blockquote className="blockquote">
                  <p>A well-known quote, contained in a blockquote element.</p>
                  <footer className="blockquote-footer">
                    Someone famous in{" "}
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
              </div>

              <div className="bd-example">
                <ul className="list-unstyled">
                  <li>This is a list.</li>
                  <li>It appears completely unstyled.</li>
                  <li>Structurally, it's still a list.</li>
                  <li>
                    However, this style only applies to immediate child
                    elements.
                  </li>
                  <li>
                    Nested lists:
                    <ul>
                      <li>are unaffected by this style</li>
                      <li>will still show a bullet</li>
                      <li>and have appropriate left margin</li>
                    </ul>
                  </li>
                  <li>This may still come in handy in some situations.</li>
                </ul>
              </div>

              <div className="bd-example">
                <ul className="list-inline">
                  <li className="list-inline-item">This is a list item.</li>
                  <li className="list-inline-item">And another one.</li>
                  <li className="list-inline-item">
                    But they're displayed inline.
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="my-3" id="images">
            <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
              <h3>Images</h3>
              <a
                className="d-flex align-items-center"
                href="/docs/5.0/content/images/"
              >
                Documentation
              </a>
            </div>

            <div>
              <div className="bd-example">
                <svg
                  className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
                  width="100%"
                  height="250"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Responsive image"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                    Responsive image
                  </text>
                </svg>
              </div>

              <div className="bd-example">
                <svg
                  className="bd-placeholder-img img-thumbnail"
                  width="200"
                  height="200"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="A generic square placeholder image with a white border around it, making it resemble a photograph taken with an old instant camera: 200x200"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>
                    A generic square placeholder image with a white border
                    around it, making it resemble a photograph taken with an old
                    instant camera
                  </title>
                  <rect width="100%" height="100%" fill="#868e96"></rect>
                  <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                    200x200
                  </text>
                </svg>
              </div>
            </div>
          </article>
          <article className="my-3" id="tables">
            <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
              <h3>Tables</h3>
              <a
                className="d-flex align-items-center"
                href="/docs/5.0/content/tables/"
              >
                Documentation
              </a>
            </div>

            <div>
              <div className="bd-example">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bd-example">
                <table className="table table-dark table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bd-example">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">className</th>
                      <th scope="col">Heading</th>
                      <th scope="col">Heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">Default</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>

                    <tr className="table-primary">
                      <th scope="row">Primary</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr className="table-secondary">
                      <th scope="row">Secondary</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr className="table-success">
                      <th scope="row">Success</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr className="table-danger">
                      <th scope="row">Danger</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr className="table-warning">
                      <th scope="row">Warning</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr className="table-info">
                      <th scope="row">Info</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr className="table-light">
                      <th scope="row">Light</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                    <tr className="table-dark">
                      <th scope="row">Dark</th>
                      <td>Cell</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bd-example">
                <table className="table table-sm table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">First</th>
                      <th scope="col">Last</th>
                      <th scope="col">Handle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td colSpan="2">Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
          <article className="my-3" id="figures">
            <div className="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
              <h3>Figures</h3>
              <a
                className="d-flex align-items-center"
                href="/docs/5.0/content/figures/"
              >
                Documentation
              </a>
            </div>

            <div>
              <div className="bd-example">
                <figure className="figure">
                  <svg
                    className="bd-placeholder-img figure-img img-fluid rounded"
                    width="400"
                    height="300"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-label="Placeholder: 400x300"
                    preserveAspectRatio="xMidYMid slice"
                    focusable="false"
                  >
                    <title>Placeholder</title>
                    <rect width="100%" height="100%" fill="#868e96"></rect>
                    <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
                      400x300
                    </text>
                  </svg>

                  <figcaption className="figure-caption">
                    A caption for the above image.
                  </figcaption>
                </figure>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
