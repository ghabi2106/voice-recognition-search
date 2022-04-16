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
                A pipe takes in data as input and transforms it to a desired
                output.
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
                    src/app/exponential-strength.pipe.ts
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
                    src/app/power-booster.component.ts
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
                    {`import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
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
                    {`import { Component } from '@angular/core';

@Component({
  selector: 'app-power-booster',
  template: '
    <h2>Power Booster</h2>
    <p>Super power boost: {{2 | exponentialStrength: 10}}</p>
  '
})
export class PowerBoosterComponent { }`}
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
