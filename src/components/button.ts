import { Component, View, bootstrap} from "angular2/angular2";

@Component({
	selector : 'button-component'
})

	//
@View({
	templateUrl : './src/templates/button.tpl.html'
})

export  class ButtonComponent {
	
	constructor(){
		console.log('button component constructor');
		this.text = 'Insert text here';
	}
}