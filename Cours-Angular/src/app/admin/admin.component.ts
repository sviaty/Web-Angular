import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {ContactService} from "../page/contact/contact.service";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'admin',
  templateUrl: './admin.template.html'
})
export class AdminComponent implements OnInit {

  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
  }
}
