import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LanguageService } from 'src/app/services/language.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'search-box-component',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public filterTypes = [
    {value: '' , display: ''},
    {value:'ltr', display:'Left to Right'},
   {value:'rtl', display:'Right to Left'},
   ];

  constructor(public languageService: LanguageService) {
  }

  ngOnInit() {
  }

  onKey(event: any) { // without type info
    console.log(event.target.value);
    this.languageService.receiveAndSend(event.target.value);
  }

  filterChanged(selectedValue:string){
    console.log(selectedValue);
    this.languageService.receiveAndSend(selectedValue);
 }

}
