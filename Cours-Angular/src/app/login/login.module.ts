import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";
import {LoginGuardsService} from "./login-guards.service";
import {CommonModule} from "@angular/common";
import {LoginComponent} from "./login.component";
import {LoginFormComponent} from "./login-form.component";
import {LoginService} from "./login.service";
import {LogingRoutingModule} from "./login-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LogingRoutingModule
  ],
  declarations: [
    LoginComponent,
    LoginFormComponent
  ],
  providers: [
    LoginGuardsService,
    LoginService,
  ],
  bootstrap: [AppComponent]
})
export class LoginModule { }
