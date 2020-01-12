import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'search-box-component',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  public filterTypes = [
    {value: '' , display: 'Both Writing Direction'},
    {value:'ltr', display:'Left to Right'},
    {value:'rtl', display:'Right to Left'},
   ];

  constructor(public languageService: LanguageService) {}

  ngOnInit() {
  }

  onKey(event: any) {
    this.languageService.receiveAndSend(event.target.value);
  }

  onChange(selectedValue: string){
    this.languageService.receiveAndSend(selectedValue);
 }

}
