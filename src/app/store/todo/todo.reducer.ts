import { createReducer, on } from '@ngrx/store';
import { Todo } from '../../shared/models/todo.model';
import * as actions from './todo.actions';

export const initialState:Todo[] = [
  new Todo('Aprender Angular'),
  new Todo('Aprender NgRx'),
  new Todo('Aprender TypeScript'),
  new Todo('Aprender JavaScript'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.create, (state,{texto}) => [...state, new Todo(texto)]),
  on(actions.toggle, (state,{id}) => {
    return state.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    })
  }),
  on(actions.edit, (state,{id,texto}) => {
      return state.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            texto: texto
          }
        } else {
          return todo;
        }
      }
  )}),
  on(actions.deleteTodo, (state,{id}) => {
    return state.filter(todo => todo.id !== id);
  }),
  on(actions.toggleAll, (state,{completado}) => {
    return state.map(todo => {
      return {
        ...todo,
        completado: completado
      }
    }
  )}),
  on(actions.deleteTodoCompleted, (state) => {
    return state.filter(todo => !todo.completado);
  }),
);

export const todoReducer = (state: any, action: any) => {
  return _todoReducer(state, action);
}
