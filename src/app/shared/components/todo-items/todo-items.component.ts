import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Input, OnInit, PLATFORM_ID, ViewChild, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/app.state';
import * as actions from '../../../store/todo/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-items',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo-items.component.html',
  styleUrl: './todo-items.component.scss'
})
export class TodoItemsComponent implements OnInit {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  @Input() todo!: Todo;
  store = inject(Store<AppState>);
  platformId:Object = inject(PLATFORM_ID);
  completed!:FormControl;
  txtInput!:FormControl;
  editing = false;

  ngOnInit(): void {
    this.completed = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);

    this.completed.valueChanges.subscribe((value) => {
      this.store.dispatch(actions.toggle({ id: this.todo.id }));
    });
  }

  editar() {
    this.editing = true;
    this.txtInput.setValue(this.todo.texto);
    setTimeout(() => {
      if(isPlatformBrowser(this.platformId)) {
        this.input.nativeElement.select();
      }
    }, 1);
  }

  terminarEdicion() {
    this.editing = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.texto) return;
    this.store.dispatch(actions.edit({
      id: this.todo.id,
      texto: this.txtInput.value
    }));
  }

  delete(){
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
