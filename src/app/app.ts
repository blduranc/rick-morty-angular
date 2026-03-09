import { Component } from '@angular/core';
import { CharactersComponent } from './components/characters/characters.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersComponent],
  template: `<app-characters></app-characters>`
})
export class App {}