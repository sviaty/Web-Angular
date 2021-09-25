import {Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import {LoginService} from "./login.service";
import {AppContants} from "../app.contants";
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'login',
  templateUrl:'./login.template.html'
})
export class LoginComponent implements OnInit {
  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(AppContants.titleLogin);
  }
}
