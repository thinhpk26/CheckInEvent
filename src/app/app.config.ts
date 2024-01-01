import { ApplicationConfig, ErrorHandler, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { httpInterceptorProviders } from '../service/interceptor/http-interceptor';
import { HttpClientModule } from '@angular/common/http';
import { GlobalErrorHandlerService } from '../service/global-error-handler/global-error-handler.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    httpInterceptorProviders,
    importProvidersFrom(HttpClientModule),
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
  ],
};
