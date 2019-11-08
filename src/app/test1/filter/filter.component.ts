import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { Subscription } from 'rxjs/internal/Subscription';
import { DEBOUNCE_TIME } from '../utils';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
})
export class FilterComponent implements OnInit, OnDestroy {
  @Input() debounce = DEBOUNCE_TIME;
  @Input() value = null;

  @Output() updateFilter = new EventEmitter<string>();

  filterForm: FormGroup;

  private changesSubcsription: Subscription;

  ngOnInit(){
    this.filterForm = new FormGroup({ filter: new FormControl(this.value)});

    this.changesSubcsription = this.filterForm.controls['filter'].valueChanges
      .pipe(
        debounceTime(this.debounce),
      ).subscribe( filter => this.updateFilter.next(filter));
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  private unsubscribe(){
    this.changesSubcsription && this.changesSubcsription.unsubscribe();
  }

}
