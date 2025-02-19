import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Forms() {
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
                    href="#template-driven-forms"
                  >
                    Template-driven Forms
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#reactive-forms"
                  >
                    Reactive Forms
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
          <h3>Forms</h3>
          <article id="template-driven-forms">
            <h6>Template-driven Forms 🤢</h6>
            <div>
              <p>
                Template-Driven Forms places most of the form handling logic
                within that form's template
              </p>
              <b>ngModel</b>
              <p>
                La Directive ngModel est au coeur des "Template-driven Forms".
              </p>
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
                    book-form.component.html
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
                    book-form.component.ts
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
                  <Highlight language="html">
                    {`<form (ngSubmit)="submitBook()">
​
    <input
            name="title"
            type="text"
            [(ngModel)]="bookTitle">

    <button type="submit">SUBMIT</button>
​
</form>`}
                  </Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-1"
                >
                  <Highlight language="ts">
                    {`export class BookFormComponent {

bookTitle: string;

submitBook() {
    console.log(this.bookTitle);
    /* Reset book's title. */
    this.bookTitle = null;
}

}`}
                  </Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="reactive-forms">
            <h6>Reactive Forms 👍</h6>
            <div>
              <ul>
                <li>
                  Reactive Forms places form handling logic within a component's
                  class properties and provides interaction through observables
                </li>
              </ul>
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
                    book-form.component.ts
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                  >
                    book-form.component.html
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
                  <Highlight language="ts">
                    {`export class BookFormComponent {

bookForm = new FormGroup({
    title: new FormControl(null, [
        Validators.required
    ]),
    description: new FormControl()
});

submitBook() {
    console.log(this.bookForm.value);
}

}`}
                  </Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Highlight language="html">
                    {`<input
    type="text"
    [formControl]="bookTitleControl">

<textarea [formControl]="bookDescriptionControl"></textarea>

<button
    type="submit"
    (click)="submitBook()">SUBMIT</button>`}
                  </Highlight>
                </div>
              </div>
              <Highlight language="ts">
                {`//How do you dynamically add form fields using FormArray?
this.form = this.fb.group({
  users: this.fb.array([])
});

addUser() {
  this.users.push(this.fb.control(''));
}
}`}
              </Highlight>
            </div>
          </article>
          <article id="validation">
            <h6>Validation css</h6>
            <div>
              <p>
                Afin de faciliter la personnalisation du CSS en fonction de la
                validité des éléments du formulaire, Angular ajoute
                automatiquement les classes CSS suivantes en fonction de l'état
                du "control" :
              </p>
              <ul>
                <li>.ng-valid</li>
                <li>.ng-invalid</li>
                <li>.ng-pending</li>
                <li>.ng-pristine</li>
                <li>.ng-dirty</li>
                <li>.ng-untouched</li>
                <li>.ng-touched</li>
              </ul>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
