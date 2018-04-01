import { Component } from '@angular/core';
import { MyserviceService } from './services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4 Project!';
   // declared array of months.
  months = ["January", "Feburary", "March", "April", "May", 
            "June", "July", "August", "September",
            "October", "November", "December"];
  isavailable = true;   //variable is set to true

// for pipe define some data
todaydate = new Date();
   jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}};
   monthsShort = ["Jan", "Feb", "Mar", "April", "May", "Jun",
             "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

/* define function */
  myClickFunction(event) { 
    //just added console.log which will display the event details in browser on click of the button.
    
    alert("Button is clicked");
    this.isavailable = false;
    console.log(event);
 }
 changemonths(event) {
  alert("Changed month from the Dropdown");
   console.log("Changed month from the Dropdown");
   console.log(event);
 }
/* for using services----- */
componentproperty;
serviceproperty;
httpdata;
constructor(private myservice: MyserviceService) {}
ngOnInit() {
  this.todaydate = this.myservice.showTodayDate();
  console.log('this.myservice.serviceproperty==>>', this.myservice.serviceproperty);
  this.serviceproperty =  this.myservice.serviceproperty;
  this.myservice.serviceproperty = "Component created"; // value is changed.
  this.componentproperty = this.myservice.serviceproperty;
  this.myservice.get('/testGetApi',{id:2}).subscribe(data =>this.displaydata(data),
   err => console.log(err))
}
// method to assing httpData
displaydata(data){
  console.log("data-->>", JSON.stringify(data));
  this.httpdata = data
}
}
