import { Component } from '@angular/core';
import { FooterComponent } from './core/footer/footer.component';
import * as c from './shared/components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FooterComponent,
    c.TodoPageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todoapp';
}
