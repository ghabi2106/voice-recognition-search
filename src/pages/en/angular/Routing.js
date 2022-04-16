import React from "react";
import { Link } from "react-router-dom";
import Highlight from "react-highlight";
import "react-highlight/node_modules/highlight.js/styles/stackoverflow-light.css";

export default function Routing() {
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
                    href="#routing"
                  >
                    Routing
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#lazy-loading"
                  >
                    Lazy Loading
                  </a>
                </li>
                <li>
                  <a
                    className="d-inline-flex align-items-center rounded"
                    href="#route-guards"
                  >
                    Route Guards
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
          <h3>Routing</h3>
          <article id="routing">
            <h6>Routing</h6>
            <div>
              <p>
                Angular fournit nativement un module de "Routing" pour répondre
                à ce besoin.
              </p>
              <ul>
                <li>Mise en Place du Routing</li>
                <li>Lazy Loading</li>
                <li>Route Guards</li>
              </ul>
              <b>Configuration</b>
              <Highlight language="ts">
                {`export const appRouteList: Routes = [
    ...,
    {
        path: 'books/:bookId',
        component: BookDetailViewComponent
    },
    ...
];`}
              </Highlight>
              <b>&lt;router-outlet&gt;</b>
              <Highlight language="html">
                {`<header>
...
</header>
<router-outlet></router-outlet>
<footer>
...
</footer>`}
              </Highlight>
              <b>Création de liens</b>
              <Highlight language="html">
                {`<a [routerLink]="['/books', book.id]">{{ routeName }}</a>`}
              </Highlight>
            </div>
          </article>
          <article id="lazy-loading">
            <h6>Lazy Loading</h6>
            <div>
              <p>
                Le module de "Routing" AppRoutingModule peut déléguer la gestion
                du "Routing" d'une partie de l'application à un autre module. Ce
                module "Lazy Loaded" sera donc chargé de façon asynchrone à la
                visite des "routes" dont il est en charge.
              </p>
              <Highlight language="ts">
                {`RouterModule.forRoot(appRouteList, {
    preloadingStrategy: PreloadAllModules
})`}
              </Highlight>
            </div>
          </article>
          <article id="route-guards">
            <h6>Route Guards</h6>
            <div>
              <p>
                Les "Guards" permettent de contrôler l'accès à une "route" (e.g.
                autorisation) ou le départ depuis une "route" (e.g.
                enregistrement ou publication obligatoire avant départ).
              </p>
              <b>Configuration</b>
              <p>Les "Guards" sont ajoutés au niveau de la configuration du "Routing" :</p>
              <Highlight language="ts">
                {`export const appRouteList = [
    {
        path: 'cart',
        loadChildren: './views/cart/cart-routing.module#CartRoutingModule',
        canActivate: [
            IsSignedInGuard
        ]
    },
    {
        path: 'signin',
        component: SigninViewComponent,
        canActivate: [
            IsNotSignedInGuard
        ]
    },
    {
        path: 'profile',
        component: ProfileViewComponent,
        canDeactivate: [
            IsNotDirtyGuard
        ]
    }
]`}
              </Highlight>
              <b>CanActivate</b>
              <p>Une "Guard" d'activation est un service qui implémente l'interface CanActivate.</p>
              <Highlight language="ts">
                {`@Injectable({
    providedIn: 'root'
})
export class IsSignedInGuard implements CanActivate {

    constructor(private _session: Session) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this._session.isSignedIn();
    }

}`}
              </Highlight>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}
