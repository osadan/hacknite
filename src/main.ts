/// <reference src="typings/tsd.d.ts">

import {CORE_DIRECTIVES, Component, View, bootstrap} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet} from "angular2/router";
import {bind, Injectable} from "angular2/di";


import Home from "./home";
import RepoList from "./repo-list";
import Generator from "./generator";

@RouteConfig([
    {path: '/', as: "home", component:Home},
    {path: '/repo-list', as: "repo-list", component:RepoList},
    {path: '/generator' as: 'generator' , component:Generator}
])
@Component({
    selector: "app"
})
@View({
    directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink],
    template: `
        <nav class='main-nev'>
            <a [router-link]="['/home']">Home</a>
            <a [router-link]="['/repo-list']">Repo List</a>
            <a [router-link]="['/generator']">Generator</a>
            
        </nav>
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
class App {}

bootstrap(App, [
    HTTP_BINDINGS,
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log(`Bootstrap success`),
        error => console.log(error)
);
