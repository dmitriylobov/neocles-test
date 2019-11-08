import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { FilterComponent } from './test1/filter/filter.component';
import { ListComponent } from './test1/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatedListComponent } from './test1/paginated-list/paginated-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    FilterComponent,
    ListComponent,
    PaginatedListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
