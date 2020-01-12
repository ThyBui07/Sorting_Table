import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { SearchingPipe } from 'src/app/pipes/searching.pipe';
import { SortingPipe } from 'src/app/pipes/sort.pipe';

@Component({
  selector: 'data-table-component',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [SearchingPipe, SortingPipe]

})
export class DataTableComponent implements OnInit {
  languageList = [];
  //search function
  searchTerm: string;
  searchRes: any =[];
  //sort
  isReverse: boolean = false;
  //pagination
  totalItemsCount: number;
  config: any;
  public responsive: boolean = true;

  constructor(public languageService: LanguageService, public sortingPipe: SortingPipe) {}

  ngOnInit() {
    //subscribe search input from searchbar//language service
    this.languageService.searchTerm$.subscribe(term => {
      this.searchTerm= term;
      console.log(this.searchTerm);
    });
    // subscribe api response from language service
    this.languageService.getLangList().subscribe(res => {
      this.languageList = res;
      this.languageList = this.sortingPipe.transform(this.languageList, 'name', 'code');
      console.log(this.languageList);
    });

    //pagination
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.languageList.length
    };
  }

  //pagination
  pageChanged(event){
    this.config.currentPage = event;
  }

  sort(option: string) {
    const reverseOption = "-" + option;
    this.isReverse = !this.isReverse;
    if (this.isReverse) {
      this.languageList = this.sortingPipe.transform(this.languageList, reverseOption );
    }
    else {
      this.languageList = this.sortingPipe.transform(this.languageList, option );
    }
  }

}
