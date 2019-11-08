import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Test1Component } from './test1/test1.component';
import { FilterComponent } from './test1/filter/filter.component';
import { ListComponent } from './test1/list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginatedListComponent } from './test1/paginated-list/paginated-list.component';
import { LastColumnComponent } from './test1/last-column/last-column.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    FilterComponent,
    ListComponent,
    PaginatedListComponent,
    LastColumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [LastColumnComponent],
})
export class AppModule { }
