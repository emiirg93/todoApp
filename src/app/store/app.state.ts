import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "../shared/models/todo.model";
import { FilterType } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { todoReducer } from "./todo/todo.reducer";

export interface AppState {
  todos: Todo[];
  filter: FilterType;
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filter: filterReducer
};
