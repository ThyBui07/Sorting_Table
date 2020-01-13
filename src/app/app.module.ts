//module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

//component
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { DataTableComponent } from './components/data-table/data-table.component';

//pipes
import { SearchingPipe } from './pipes/searching.pipe';
import { SortingPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchBoxComponent,
    DataTableComponent,
    SearchingPipe,
    SortingPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    AppComponent,
    NavBarComponent,
    SearchBoxComponent,
    DataTableComponent,
  ],
  providers: [SearchingPipe, SortingPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
