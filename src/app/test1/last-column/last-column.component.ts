import { Component } from '@angular/core';
import { EMPTY_LIST_SIZE } from '../utils';

@Component({
  selector: 'app-last-column',
  templateUrl: './last-column.component.html',
})
export class LastColumnComponent {
  emptyArray = new Array(EMPTY_LIST_SIZE);
}
