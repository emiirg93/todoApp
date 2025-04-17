import { Pipe, PipeTransform } from '@angular/core';
import * as actions from '../../store/filter/filter.actions';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filterTodo',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: Todo[], filter: actions.FilterType): Todo[] {
    return value.filter((todo: Todo) => {
      switch (filter) {
        case 'completed':
          return todo.completado;
        case 'pending':
          return todo.completado === false;
        default:
          return true;
      }
    });
  }

}
