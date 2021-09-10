import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "../components/component.login";
import { AuthService } from "../services/service.auth";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: 'login', component: LoginComponent }
        ])
    ],
    exports: [
        RouterModule
    ],
    providers: [
        AuthService
    ]
})
export class LoginRoutingModule {}