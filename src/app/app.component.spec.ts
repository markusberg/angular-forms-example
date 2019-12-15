import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { NavbarComponent } from './components/navbar/navbar.component';
import { PizzaFormContainerComponent } from './components/pizza-form-container/pizza-form-container.component';
import { PizzaListComponent } from './components/pizza-list/pizza-list.component';
import { PizzaSizePickerComponent } from './components/pizza-size-picker/pizza-size-picker.component';
import { PizzaEditorComponent } from './components/pizza-editor/pizza-editor.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CustomerDetailsComponent,
        FaIconComponent,
        NavbarComponent,
        PizzaEditorComponent,
        PizzaFormContainerComponent,
        PizzaListComponent,
        PizzaSizePickerComponent,
      ],
      imports: [FormsModule, NgbModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Angular Reactive Forms Example'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Reactive Forms Example');
  }));

  /*  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to angular-forms-example!');
  }));*/
});
