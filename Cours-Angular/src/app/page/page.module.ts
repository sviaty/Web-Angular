import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OneComponent} from "./one.component";
import {BorderCardDirective} from "./one.directive.border";
import {AppBackgroundColorPipe} from "./one.pipe.background";
import {PageRoutingModule} from "./page-routing.module";
import {TwoComponent} from "./two.component";
import {FormsModule} from "@angular/forms";
import {ContactFormComponent} from "./contact-form.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageRoutingModule
  ],
  declarations: [
    OneComponent,
    ContactFormComponent,
    TwoComponent,
    BorderCardDirective,
    AppBackgroundColorPipe
  ],
  providers: []
})
export class PageModule { }
