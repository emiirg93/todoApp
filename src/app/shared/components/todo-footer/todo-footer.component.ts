import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as filterActions from '../../../store/filter/filter.actions';
import * as todoActions from '../../../store/todo/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-footer',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.scss'
})
export class TodoFooterComponent implements OnInit {
  store = inject(Store<AppState>);
  filterCurrent:filterActions.FilterType = 'all';
  filters:filterActions.FilterType[] = ['all', 'completed', 'pending'];
  todoPendings = 0;

  ngOnInit(): void {
    this.store.subscribe(({ todos, filter }) => {
      this.filterCurrent = filter
      this.todoPendings = (todos.filter((todo:Todo) => !todo.completado)).length;
    });
  }

  selectedFilter(filter:filterActions.FilterType) {
    this.store.dispatch(filterActions.filter({ filter }));
  }

  deleteCompleted() {
    this.store.dispatch(todoActions.deleteTodoCompleted());
  }
}
