import { Component, View, bootstrap} from "angular2/angular2";
import {FORM_DIRECTIVES} from 'angular2/forms'
import {PropertiesService} from "/src/services/properties";

@Component({
  selector : 'properties-component',
  bindings : [PropertiesService]
})

  //
@View({
  directives:[FORM_DIRECTIVES],
  templateUrl : './src/templates/properties.tpl.html'
})

export class PropertiesComponent {
  
  constructor(propService:PropertiesService){
    console.log('properties component constructor');
  }
  inputTextKeyUp = function(value){
    console.log(value);
    propService.setProperty('text', value);
  }
}