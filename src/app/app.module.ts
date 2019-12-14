import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import {
  APP_MODULE_DECLARATIONS,
  APP_MODULE_IMPORTS,
} from './app.module.dependencies';

@NgModule({
  declarations: [...APP_MODULE_DECLARATIONS],
  imports: [FontAwesomeModule, NgbButtonsModule, ...APP_MODULE_IMPORTS],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
