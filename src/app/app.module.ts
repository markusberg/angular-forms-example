import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbButtonsModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PizzaFormContainerComponent } from './components/pizza-form-container/pizza-form-container.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaSizePickerComponent } from './components/pizza-size-picker/pizza-size-picker.component';
import { SelectedPizzaViewerComponent } from './components/selected-pizza-viewer/selected-pizza-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    NavbarComponent,
    PizzaFormContainerComponent,
    PizzaListComponent,
    PizzaSizePickerComponent,
    SelectedPizzaViewerComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    NgbButtonsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
