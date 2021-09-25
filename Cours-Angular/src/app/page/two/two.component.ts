import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {ContactService} from "../contact/contact.service";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {AppContants} from "../../app.contants";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'two',
  templateUrl: './two.template.html'
})
export class TwoComponent implements OnInit {

  constructor(private router: Router,
              private http: HttpClient,
              private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(AppContants.titlePageTwo,);
  }

  private handleError<T>(operation='operation', result?:T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failled: ${error.message}');
      return of(result as T);
    }
  }

  goBack() {
    let link = ['/page/one'];
    this.router.navigate(link);
  }

  getAngularDatas(): void{
      /*
      this.http.get<any>('https://api.npms.io/v2/search?q=scope:angular')
      .pipe(
        tap(_ => console.log('succes')),
        catchError(this.handleError('fail',[]))
      )
      .subscribe(data => {console.log(data);}
      )*/
  }


}
