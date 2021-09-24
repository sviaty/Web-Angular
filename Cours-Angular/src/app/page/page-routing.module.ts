import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OneComponent} from "./one/one.component";
import {TwoComponent} from "./two/two.component";

const pageRoutes: Routes = [{
  path: 'page',
  children: [
    {
      path: 'one',
      component: OneComponent
    },
    {
      path: 'two',
      component: TwoComponent
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(pageRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageRoutingModule { }
