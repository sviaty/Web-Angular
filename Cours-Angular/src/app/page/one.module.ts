import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OneComponent} from "./one.component";
import {BorderCardDirective} from "./one.directive.border";
import {AppBackgroundColorPipe} from "./one.pipe.background";
import {PageRoutingModule} from "./page-routing.module";
import {TwoComponent} from "./two.component";

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [
    OneComponent,
    TwoComponent,
    BorderCardDirective,
    AppBackgroundColorPipe
  ],
  providers: []
})
export class OneModule { }
