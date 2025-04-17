import { createReducer, on } from '@ngrx/store';
import * as actions from './filter.actions';

const initialState: actions.FilterType = <actions.FilterType>'all';

const _filter = createReducer(
  initialState,
  on(actions.filter, (state, { filter }) => filter)
);

export function filterReducer(state:any, action:any) {
  return _filter(state, action);
}
