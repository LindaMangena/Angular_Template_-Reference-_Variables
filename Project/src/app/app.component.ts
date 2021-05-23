import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template_Reference_variables';


constructor(){}

ngOnInit(){}

logMessage(value){
  console.log(value);
}


}
