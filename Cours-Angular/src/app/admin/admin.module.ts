import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AdminComponent} from "./admin.component";
import {AppComponent} from "../app.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {LoaderComponent} from "../loader/loader.component";

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    LoaderComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent]
})
export class AdminModule { }
