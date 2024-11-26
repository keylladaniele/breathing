import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { HomeComponent } from './home/home.component';

bootstrapApplication(HomeComponent, {
  providers: [
    provideRouter(routes)
  ]
});
