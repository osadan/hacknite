//a simple service
import {Injectable} from 'angular2/angular2'

@Injectable()
export class PropertiesService {
	  
  constructor() {
  	this.properties = {
  		"border-radius"  : "50%",
  		"text" : "text here",
  		"background"  : '#FFFFFF'
  	}
  }
  
  setProperty = function(name,value){
  	console.log(name,value);
  	this.properties[name] = value;
  }

  getProperty = function(name){
  	return this.properties[name];
  }
}