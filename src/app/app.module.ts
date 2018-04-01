import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // for animations
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
//import { FormsModule } from '@angular/forms'; //  template driven form
import { ReactiveFormsModule } from '@angular/forms'; //  model driven form



import { MyserviceService } from './services/myservice.service';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ChangeTextDirective } from './directives/change-text.directive';
import { SqrtPipe } from './pipes/sqrt.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    ChangeTextDirective,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    //FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
         path: 'new-cmp',
         component: NewCmpComponent
      }
   ])
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
