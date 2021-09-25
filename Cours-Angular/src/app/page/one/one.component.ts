import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {AppContants} from "../../app.contants";

@Component({
  selector: 'one',
  templateUrl: './one.template.html',
  styleUrls: ['./one.style.css']
})
export class OneComponent implements OnInit {

  constructor(private router: Router,
              private titleService: Title) { }



  // liaison sur une propriété d'élément
  someImageUrl = './assets/angular-logo.png';
  // liaison sur une propriété de la classe
  isSpecial = true;

  // condition *ngIf
  title = 'ngIf';

  people: any[] = [
    {
      "name": "Sviatoslav",
      "age": 30,
      "country": 'Ukraine'
    },
    {
      "name": "Béa",
      "age": 35,
      "country": 'France'
    }
  ];

  ngOnInit(): void {
    this.titleService.setTitle(AppContants.titlePageOne);
  }

  OnClick(){
    console.log('test click');
  }

  GoOther(): void {
    let link = ['/page/two'];
    this.router.navigate(link);
  }

  GoLogin(): void {
    let link = ['/login'];
    this.router.navigate(link);
  }


}
