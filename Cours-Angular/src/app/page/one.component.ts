import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'page',
  templateUrl: './one.template.html',
  styleUrls: ['./one.style.css']
})
export class OneComponent implements OnInit {

  constructor(private router: Router) { }

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
  }

  OnClick(){
    console.log('test click');
  }

  GoOther(): void {
    let link = ['/page/two'];
    this.router.navigate(link);
  }
}
