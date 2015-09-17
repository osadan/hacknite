//a simple service
import {Injectable} from 'angular2/angular2'

@Injectable()
export class MediatorService {
	  
  constructor() {
  	this.properties = {
  		"border-radius"  : "50%",
  		"text" : "insert text here",
  		"background"  : '#FFFFFF'
  	}
  }
  
  setProperty = function(name,value){
  	properties[name] = value;
  }
}