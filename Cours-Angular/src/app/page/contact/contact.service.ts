import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Contact} from "./contact.class";

import {Observable, of, throwError} from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class ContactService {

  constructor(private http: HttpClient) {}


  private contactUrl = 'api/contact';

  editUrl(url:string) {
    this.contactUrl = url;
  }

  private log(log:string){
    console.log(log);
  }

  private handleError<T>(operation='operation', result?:T){
    return (error: any): Observable<T> => {
      console.log(error);
      console.log('${operation} failled: ${error.message}');
      return of(result as T);
    }
  }

  getContacts(): Observable<Contact[]> {

    return this.http.get<Contact[]>(this.contactUrl).pipe(
      tap(_ => this.log('contacts list')),
      catchError(this.handleError('getContacts',[]))
    );
  }

  getContact(id: number): Observable<Contact> {
    const url = this.contactUrl +'/'+ id;

    return this.http.get<Contact>(url).pipe(
      tap(_ => this.log('contact id='+id)),
      catchError(this.handleError<Contact>('getContact id='+id))
    );
  }

  addContact(contact: Contact): Observable<Contact> {
    contact.id = null;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.post<Contact>(this.contactUrl, contact, httpOptions).pipe(
      tap(contactPost => this.log('fetched contact id='+contactPost.id)),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    )
  }

  editContact(contact: Contact): Observable<any> {
    const url = this.contactUrl+'/'+contact.id;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.put(url, contact, httpOptions).pipe(
      tap(_ => this.log('updated contact id = '+contact.id)),
      catchError(this.handleError<any>('updatedContact'))
    );
  }

  deleteContact(contact: Contact): Observable<any> {
    const url = this.contactUrl+'/'+contact.id;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type':'application/json'})
    }

    return this.http.delete(url, httpOptions).pipe(
      tap(_ => this.log('deleted contact id = '+contact.id)),
      catchError(this.handleError<any>('deletedContact'))
    );
  }

  searchContactsWithName(name: string): Observable<Contact[]> {
    if(!name.trim()) {
      return of([]);
    }
    const url = this.contactUrl+'/?name='+name;

    return this.http.get<Contact[]>(url).pipe(
      tap(_ => this.log('found contact matching = '+name)),
      catchError(this.handleError<Contact[]>('searchContact',[]))
    );
  }
}
