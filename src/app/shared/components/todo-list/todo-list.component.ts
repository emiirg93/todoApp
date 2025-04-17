import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as actions from '../../../store/filter/filter.actions';
import { Todo } from '../../models/todo.model';
import { FilterPipe } from '../../pipes/filter.pipe';
import * as c from '../index';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    c.TodoItemsComponent,
    FilterPipe
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {
  todos:Todo[] = [];
  store = inject(Store<AppState>);
  filterCurrent:actions.FilterType = 'all';

  ngOnInit() {
    this.store.subscribe(({todos,filter}) => {
      this.todos = todos;
      this.filterCurrent = filter;
    });
  }
}
