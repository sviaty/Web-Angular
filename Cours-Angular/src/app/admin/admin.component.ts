import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { AppContants } from "../app.contants";
import { Title } from "@angular/platform-browser";
import { delay } from 'rxjs/internal/operators';
import { of } from "rxjs";

@Component({
  selector: 'admin',
  templateUrl: './admin.template.html'
})
export class AdminComponent implements OnInit {

  constructor(private titleService: Title) { }

  data: any = null;

  ngOnInit(): void {
    this.titleService.setTitle(AppContants.titleAdmin);

    this.delayFunction(2000);
  }

  delayFunction(timeDelay: number){
    of(this.data)
      .pipe(
        delay(timeDelay)
      )
      .subscribe(
        val => this.data = 1,
        e => console.log(e),
        () => console.log("delay finish")
      );
  }


}
