import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, Subject, merge, BehaviorSubject } from 'rxjs';
import { SearchingPipe } from '../pipes/searching.pipe'

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  BASE_URL = 'https://demo.transfluent.com/languages.json'
  searchTerm$ = new Subject<string>();
  private languageList = [];
  private filteredList = [];
  public languageList$ = new BehaviorSubject<any>(this.filteredList);

  constructor(private http: HttpClient, public searchingPipe: SearchingPipe) {}

  getLangList(): Observable<any> {
    return this.http.get<{response:any}>(this.BASE_URL)
      .pipe(map(data => data.response.map(lang => {
        const firstKey = Object.keys(lang)[0];
        this.languageList.push(lang[firstKey]);
        return lang[firstKey];
      })));
  }

  //receive data and transform data
  receiveAndSend(value: string) {
    this.searchTerm$.next(value);
  }

  filterOptions(value: string) {
    const filtered = this.searchingPipe.transform(this.languageList,value);
    this.filteredList = filtered;
    this.languageList$.next(this.filteredList);
  }

}
