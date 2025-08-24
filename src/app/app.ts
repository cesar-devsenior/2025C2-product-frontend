import { Component } from '@angular/core';
import { ProductoListComponent } from './components';

@Component({
  selector: 'app-root',
  imports: [ProductoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
