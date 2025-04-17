
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as actions from '../../../store/todo/todo.actions';
import * as c from '../index';
@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [
    c.TodoAddComponent,
    c.TodoListComponent,
    c.TodoItemsComponent,
    c.TodoFooterComponent,
    ReactiveFormsModule
  ],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss'
})
export class TodoPageComponent {
  store = inject(Store<AppState>);
  inputCheckbox = new FormControl(false, { nonNullable: true });

  toggleAll() {
    this.store.dispatch(actions.toggleAll({ completado: !this.inputCheckbox.value }));
  }
}
