import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import {Router} from "@angular/router";
import {ContactService} from "../contact/contact.service";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";

@Component({
  selector: 'two',
  templateUrl: './two.template.html'
})
export class TwoComponent implements OnInit {

  constructor(private router: Router,
              private http: HttpClient) { }

  ngOnInit(): void {
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
