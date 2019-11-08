import { Component, Input } from '@angular/core';
import { IEntry } from '../entry.interface';
import { LIST_SIZE } from '../utils';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{
  @Input() list: IEntry;
  emptyArray = new Array(LIST_SIZE);
}
