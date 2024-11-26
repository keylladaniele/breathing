import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-breathing-exercise',
  standalone: true,
  templateUrl: './breathing-exercise.component.html',
  styleUrls: ['./breathing-exercise.component.css']
})
export class BreathingExerciseComponent {

  @Output() onGoBack = new EventEmitter<void>();

  goBack() {
    this.onGoBack.emit();
  }
}
