/// <reference src="typings/tsd.d.ts">
import { Component, View, bootstrap,CORE_DIRECTIVES} from "angular2/angular2";
import {Http} from "angular2/http";
import {ButtonComponent} from "./components/button";
import {PropertiesComponent} from "./components/properties"


@Component({
    selector: "generator"
})
//
@View({
    directives : [ButtonComponent,PropertiesComponent],
    template   : `  <div class='generator-wrapper center'>
                        <div class='generator-part-container'>
                            <button-component />
                        </div>
                        <div class='generator-part-container'>
                            <properties-component />
                        </div>
                    </div>`
})

export default class Generator {
    constructor() {
        console.log('generator constructor');
        this.value = 'hello world value';
        
        
    }
}
