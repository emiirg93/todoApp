import { createAction, props } from '@ngrx/store';

export type FilterType = 'all' | 'completed' | 'pending';

export const filter = createAction(
  '[filter action] set filter',
  props<{ filter: FilterType }>()
);
