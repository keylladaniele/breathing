import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
import { BreathingExerciseComponent } from '../breathing-exercise/breathing-exercise.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [FormsModule, NgIf, NgClass, BreathingExerciseComponent],
})
export class HomeComponent {
  name: string = '';
  message: string = '';
  isNicollas: boolean = false;
  showBreathingExercise: boolean = false;  // Variável para controlar a exibição do exercício

  showMessage() {
    const normalizedInput = this.name.trim().toLowerCase();

    // Variações para identificar "Nicollas"
    const isNicollasVariations = [
      'nicollas',
      'nico',
      'nicollas linhares',
      'nico linhares',
    ];

    this.isNicollas = isNicollasVariations.includes(normalizedInput);

    if (this.isNicollas) {
      this.message =
        'Oi Nico, aqui é sua amiga Keylla. Essa é uma forma de mostrar que mesmo de longe, estou com você. Até mesmo em momentos difíceis.';
    } else {
      this.message = `Olá ${this.name.trim()}, se você está passando por um momento difícil, não se preocupe, logo vai passar. Estou aqui pra te ajudar.`;
    }
  }
}
