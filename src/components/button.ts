import { Component, View, bootstrap} from "angular2/angular2";
import {PropertiesService} from "/src/services/properties";

@Component({
	selector : 'button-component',
	bindings : [PropertiesService]
})

	//
@View({
	templateUrl : './src/templates/button.tpl.html'
})

export class ButtonComponent {
	
	constructor(t:PropertiesService){
		console.log('button component constructor');
		this.text = t.getProperty('text');
	}
}