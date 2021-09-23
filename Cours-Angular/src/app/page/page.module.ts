import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OneComponent} from "./one/one.component";
import {BorderCardDirective} from "./one/one.directive.border";
import {AppBackgroundColorPipe} from "./one/one.pipe.background";
import {PageRoutingModule} from "./page-routing.module";
import {TwoComponent} from "./two/two.component";
import {FormsModule} from "@angular/forms";
import {ContactFormComponent} from "./contact/contact-form.component";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./in-memory-data.service";
import {ContactService} from "./contact/contact.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    PageRoutingModule
  ],
  declarations: [
    OneComponent,
    ContactFormComponent,
    TwoComponent,
    BorderCardDirective,
    AppBackgroundColorPipe
  ],
  providers: [
    ContactService
  ]
})
export class PageModule { }
