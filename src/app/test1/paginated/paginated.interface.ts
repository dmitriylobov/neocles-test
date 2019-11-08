import { Observable } from 'rxjs';

export interface Paginated<T> {
  list$: Observable<T[]>;
  isLast$: Observable<boolean>;
  isFirst$: Observable<boolean>;
  pages$: Observable<number>;
  currentPage$: Observable<number>;
  next(): void;
  previous(): void;
}
