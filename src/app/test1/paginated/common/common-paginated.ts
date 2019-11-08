import { combineLatest, Observable, ReplaySubject } from 'rxjs';
import { filter, first, map, withLatestFrom } from 'rxjs/operators';
import { Paginated } from '../paginated.interface';

export class CommonPaginated<T> implements Paginated<T> {
  protected listSubject = new ReplaySubject<T[]>(1);
  protected indexSubject = new ReplaySubject<number>(1);
  private limitSubject = new ReplaySubject<number>(1);

  isFirst$ = this.indexSubject.pipe(
    map(index => index === 0),
  );

  isLast$ = combineLatest(this.listSubject, this.indexSubject, this.limitSubject).pipe(
    map(([list, index, limit]: [T[], number, number]) => list.length <= index + limit),
  );

  list$: Observable<T[]> = combineLatest(this.listSubject, this.indexSubject, this.limitSubject)
    .pipe(
      map(([list, index, limit]: [T[], number, number]) => list.slice(index, index + limit)),
  );

  pages$: Observable<number> =  combineLatest(this.listSubject, this.limitSubject).pipe(
    map(([list,limit]:[T[],number])=> Math.floor(list.length / limit))
  );

  currentPage$: Observable<number> = combineLatest(this.indexSubject, this.limitSubject).pipe(
    map(([index,limit]:[number,number])=>( index / limit ) + 1)
  );

  constructor(
    list: T[],
    private limit: number,) {
    this.listSubject.next(list);
    this.limitSubject.next(limit);
    this.indexSubject.next(0);
  }

  next(): void {
    this.isLast$.pipe(
      first(),
      filter(isLast => !isLast),
      withLatestFrom(this.listSubject, this.indexSubject, this.limitSubject),
      map(([, list, index, limit]) => Math.min(limit + index, list.length - limit)),
    ).subscribe(index => this.indexSubject.next(index));
  }

  previous(): void {
    this.isFirst$.pipe(
      first(),
      filter(isFirst => !isFirst),
      withLatestFrom(this.indexSubject, this.limitSubject),
      map(([, index, limit]) => index - limit),
      map(index => index > 0 ? index : 0),
    ).subscribe(index => this.indexSubject.next(index));
  }

}
