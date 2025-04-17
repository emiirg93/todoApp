import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as actions from '../../../store/todo/todo.actions';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.scss'
})
export class TodoAddComponent {
  store = inject(Store<AppState>);
  txtInput:FormControl = new FormControl(null,Validators.required);


  agregar() {
    if (this.txtInput.invalid) return;
    this.store.dispatch(actions.create({ texto: this.txtInput.value }));
    this.txtInput.reset();
  }
}
