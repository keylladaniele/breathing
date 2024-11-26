import { Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BreathingExerciseComponent } from '../breathing-exercise/breathing-exercise.component';

export const routes: Routes = [
  { path: '', component: HomeComponent,  pathMatch: 'full' },
  { path: 'breathing-exercise', component: BreathingExerciseComponent }
];
