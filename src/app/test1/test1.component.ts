import { Component } from '@angular/core';
import { IEntry} from './entry.interface';
import { CommonPaginated } from './paginated/common/common-paginated';
import { FilterService } from './filter.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  providers: [FilterService],
})
export class Test1Component {
  listPaginated$: Observable<CommonPaginated<IEntry>>;

  constructor(private filterService:FilterService) {
    this.listPaginated$ = this.filterService.paginated$;
  }

  updateFilter(filter: string) {
    this.filterService.updateFilter(filter);
  }
}
