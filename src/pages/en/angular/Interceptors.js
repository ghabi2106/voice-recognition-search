import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Interceptors() {
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
                    href="#http-interceptors"
                  >
                    Http Interceptors
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#header-interceptor"
                  >
                    Header Interceptor
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#format-interceptor"
                  >
                    Format json
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#error-interceptor"
                  >
                    Error interceptor
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
          <h3>Http Interceptors</h3>
          <article id="http-interceptors">
            <h6>Http Interceptors</h6>
            <div>
              <p>
                Often we want to enforce or apply behavior when receiving or
                sending HTTP requests within our application. Interceptors are a
                unique type of Angular Service that we can implement.
                Interceptors allow us to intercept incoming or outgoing HTTP
                requests using the <code>HttpClient</code>. By intercepting the
                HTTP request, we can modify or change the value of the request.
              </p>
              <ul>
                <li>Handling HTTP Headers</li>
                <li>HTTP Response Formatting</li>
                <li>HTTP Error Handling</li>
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
                    my-interceptor.ts
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
                    app.module.ts
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
                  <Highlight language="ts">{`import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest);
  }
}`}</Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  <Highlight language="ts">{`import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { MyInterceptor } from './my.interceptor';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true }
  ]
})
export class AppModule { }`}</Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="header-interceptor">
            <h6>HTTP Header Interceptor</h6>
            <div>
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
                    header-interceptor.ts
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
                    header-component.ts
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
                  <Highlight language="ts">{`import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = '123456';
    return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
  }
}`}</Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile-1"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-1"
                >
                  <Highlight language="ts">{`import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  template: '
    <h2>Header Example</h2>
    <pre>{{ data | json }}</pre>
  '
})
export class HeaderComponent implements OnInit {
  data: {};
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/header.json').subscribe(data => this.data = data);
  }
}`}</Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="format-interceptor">
            <h6>Formatting JSON Responses</h6>
            <div>
              <ul class="nav nav-pills mb-3" id="pills-tab-2" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab-2"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-home-2"
                    aria-selected="true"
                  >
                    format-interceptor
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab-2"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-2"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-2"
                    aria-selected="false"
                  >
                    format-component
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent-2">
                <div
                  class="tab-pane fade show active"
                  id="pills-home-2"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab-2"
                >
                  <Highlight language="ts">{`import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class FormatInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(
      filter(event => event instanceof HttpResponse && httpRequest.url.includes('format')),
      map((event: HttpResponse<any>) => event.clone({ body: event.body.data.users.list }))
    );
  }
}`}</Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile-2"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-2"
                >
                  <Highlight language="ts">{`import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-format',
  template: '
    <h2>Formated JSON</h2>
    <pre>{{ data | json }}</pre>
  '
})
export class FormatComponent implements OnInit {
  data: {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('/assets/format.json').subscribe(data => this.data = data);
  }
}`}</Highlight>
                </div>
              </div>
            </div>
          </article>
          <article id="error-interceptor">
            <h6>Error Handling</h6>
            <div>
              <ul class="nav nav-pills mb-3" id="pills-tab-3" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab-3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home-3"
                    type="button"
                    role="tab"
                    aria-controls="pills-home-3"
                    aria-selected="true"
                  >
                    retry-interceptor.ts
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab-3"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile-3"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile-3"
                    aria-selected="false"
                  >
                    retry-component.ts
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent-3">
                <div
                  class="tab-pane fade show active"
                  id="pills-home-3"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab-3"
                >
                  <Highlight language="ts">{`import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(httpRequest).pipe(retry(2));
  }
}`}</Highlight>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile-3"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab-3"
                >
                  <Highlight language="ts">{`import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  template: '<pre>{{ data | json }}</pre>'
})
export class RetryComponent implements OnInit {
  data: {};

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://example.com/404').pipe(
      catchError(err => of('there was an error')) // return a Observable with a error message to display
    ).subscribe(data => this.data = data);
  }
}`}</Highlight>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
