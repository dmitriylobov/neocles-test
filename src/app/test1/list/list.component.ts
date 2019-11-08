import { Component, Input } from '@angular/core';
import { IEntry } from '../entry.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent{
  @Input() list: IEntry;
}
