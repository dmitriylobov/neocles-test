import { Component } from '@angular/core';
import { LIST_SIZE } from '../utils';

@Component({
  selector: 'app-last-column',
  templateUrl: './last-column.component.html',
})
export class LastColumnComponent {
  emptyArray = new Array(LIST_SIZE);
}
