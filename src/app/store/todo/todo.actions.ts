import { createAction, props } from "@ngrx/store";

export const create = createAction(
  '[TODO] Create Todo',
  props<{ texto: string }>()
)

export const toggle = createAction(
  '[TODO] Toggle Todo',
  props<{ id: number }>()
)

export const edit  = createAction(
  '[TODO] Edit Todo',
  props<{ id: number, texto: string }>()
)

export const deleteTodo = createAction(
  '[TODO] Delete Todo',
  props<{ id: number }>()
)

export const toggleAll = createAction(
  '[TODO] Toggle All Todo',
  props<{ completado: boolean }>()
)

export const deleteTodoCompleted = createAction(
  '[TODO] Delete Todo Completed'
)
