import { Component, Input } from '@angular/core';
import { CommonPaginated } from '../paginated/common/common-paginated';
import { IEntry } from '../entry.interface';

@Component({
  selector: 'app-paginated-list',
  templateUrl: './paginated-list.component.html',
})
export class PaginatedListComponent {
  @Input() paginated: CommonPaginated<IEntry>;
}
