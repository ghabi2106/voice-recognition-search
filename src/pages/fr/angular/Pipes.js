import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Pipes() {
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
                    href="#pipes"
                  >
                    pipes
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
                    to="/angular"
                  >
                    Angular
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
          <h3>Pipes</h3>
          <article id="pipes">
            <h6>pipes</h6>
            <div>
              <p>
              Les Pipes sont des filtres utilisables directement depuis la vue afin de transformer les valeurs lors du "binding".
              </p>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Pipes</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <code>DatePipe</code>
                    </td>
                    <td>Formats a date value according to locale rules.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>UpperCasePipe</code>
                    </td>
                    <td>Transforms text to all upper case.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>LowerCasePipe</code>
                    </td>
                    <td>Transforms text to all lower case.</td>
                  </tr>
                  <tr>
                    <td>
                      <code>CurrencyPipe</code>
                    </td>
                    <td>
                      Transforms a number to a currency string, formatted
                      according to locale rules.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>DecimalPipe</code>
                    </td>
                    <td>
                      Transforms a number into a string with a decimal point,
                      formatted according to locale rules.
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <code>PercentPipe</code>
                    </td>
                    <td>
                      Transforms a number to a percentage string, formatted
                      according to locale rules.
                    </td>
                  </tr>
                </tbody>
              </table>
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                  >
                    src/app/app.component.html
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  <Highlight language="html">
                    {`<p>The hero's birthday is {{ birthday | date:"MM/dd/yy" }} </p>`}
                  </Highlight>
                </div>
              </div>
              <ul class="nav nav-pills mb-3" id="pills-tab-1" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-home-1"
                    aria-selected="true"
                  >
                    price.pipe.ts
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-1"
                    aria-selected="false"
                  >
                    price.module.ts
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-features-tab-1"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-features-1"
                    type="button"
                    role="tab"
                    aria-controls="pills-features-1"
                    aria-selected="false"
                  >
                    price.ts
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent-1">
                <div
                  class="tab-pane fade show active"
                  id="pills-home-1"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab-1"
                >
                  <Highlight language="ts">
                    {`@Pipe({
    name: 'price'
})
export class PricePipe implements PipeTransform {

    transform(price: Price): string {

        if (price == null) {
            return null;
        }

        const amount = price.coefficient * Math.pow(10, price.exponent);

        return '$//{amount} $//{price.currency}';

    }

}`}
                  </Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-1"
                >
                  <Highlight language="ts">
                    {`@NgModule({
    declarations: [
        PricePipe
    ],
    exports: [
        PricePipe
    ]
})
export class PriceModule {
}`}
                  </Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-features-1"
                  role="tabpanel"
                  aria-labelledby="pills-features-tab-1"
                >
                  <Highlight language="ts">
                    {`export class Price {

coefficient?: number;
exponent?: number;
currency?: string;

constructor(args: Price = {}) {
    this.coefficient = args.coefficient;
    this.exponent = args.exponent;
    this.currency = args.currency;
}

}`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
