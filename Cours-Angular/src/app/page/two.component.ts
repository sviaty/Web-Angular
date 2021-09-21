import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'other',
  templateUrl: './two.template.html'
})
export class TwoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  GoBack() {
    let link = ['/page/one'];
    this.router.navigate(link);
  }
}
