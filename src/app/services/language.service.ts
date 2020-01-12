import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  searchTerm$ = new Subject<string>();

  constructor(private http: HttpClient) {}

  getLangList(): Observable<any> {
    return this.http.get<{response:any}>('https://demo.transfluent.com/languages.json')
        .pipe(map(data => data.response.map(lang => {
          const firstKey = Object.keys(lang)[0];
        return lang[firstKey];
        })))
  }

  //receive data from search bar and pass to table
  receiveAndSend(term: string) {
    this.searchTerm$.next(term);
    return this.searchTerm$.asObservable();
  }

}
