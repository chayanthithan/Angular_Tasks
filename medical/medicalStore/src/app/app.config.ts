import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MarksService } from './services/marks.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),MarksService]
};
