import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms'; // Model driven form 


@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  todaydate;
  newcomponentproperty;
  formdata;
  emailid;
  newcomponent = "Entered in new component created";
  constructor(private myservice : MyserviceService) { }

   /* ngOnInit is called by default when the class is executed. */

   ngOnInit() {
    this.todaydate = this.myservice.showTodayDate();
    this.newcomponentproperty = this.myservice.serviceproperty;
    /* for model driven form */
   /*  this.formdata = new FormGroup({
      emailid: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
   }); */

      this.formdata = new FormGroup({
        emailid: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
        ])),
        passwd: new FormControl("",this.passwordvalidation)
    });
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length <5) 
       return {"passwd" : true}
    
 }
  onClickSubmit(data) {
    console.log("data-->>",data)
    this.emailid = data.emailid;
    alert("Entered Email id : " + data.emailid);
  }

}
