import { Injectable } from '@angular/core';
import { CommonPaginated } from "./paginated/common/common-paginated";
import { IEntry } from './entry.interface';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import * as randomWords from 'random-words';
import { DEFAULT_WORDS, LIST_SIZE, PAGE_SIZE, TOTAL_WORDS } from './utils';

@Injectable()
export class FilterService {
  filterSubject = new ReplaySubject<string>(1);

  paginated$: Observable<CommonPaginated<IEntry>> = this.filterSubject.pipe(
    map(filter => filter.split(' ')),
    map(this.entriesFilter),
    map( filter => this.sourceList.filter(filter)),
    map(filteredList => new CommonPaginated(filteredList,this.pageSize))
  );

  private pageSize = PAGE_SIZE;

  constructor() {
    this.updateFilter('');
  }

  updateFilter(filter: string) {
    this.filterSubject.next(filter);
  }

  private entriesFilter(filters: string[]){
    return (e:IEntry) => filters.some( filter=>
      e.name.indexOf(filter) !== -1 || e.description.indexOf(filter) !== -1 || e.status.indexOf(filter) !== -1);
  }

  private sourceList:IEntry[] = new Array(LIST_SIZE).fill(null).map(()=> <IEntry>({
        name: randomWords({exactly: DEFAULT_WORDS, join: ' '}),
        description: randomWords({exactly: TOTAL_WORDS, join: ' '}),
        status: ['new', 'submitted', 'failed'][Math.floor(Math.random() * 3)]
  }));
}
