import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {NgModule} from "@angular/core";
import {LoginGuardsService} from "../login/login-guards.service";

const adminRoutes: Routes = [
  {
    path: 'admin',
    canActivate: [LoginGuardsService],
    component: AdminComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
