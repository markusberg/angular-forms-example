import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { PizzaSizeEnum } from '@services/pizza-form.interface';

@Component({
  selector: 'app-pizza-size-picker',
  templateUrl: './pizza-size-picker.component.html',
  styleUrls: ['./pizza-size-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PizzaSizePickerComponent),
      multi: true,
    },
  ],
})
export class PizzaSizePickerComponent implements ControlValueAccessor {
  pizzaSize: PizzaSizeEnum = PizzaSizeEnum.MEDIUM;
  PizzaSizeEnum = PizzaSizeEnum;

  constructor() {}

  changeSize() {
    console.log(this.pizzaSize);
    this.propagateChange(this.pizzaSize);
  }

  propagateChange = (value: PizzaSizeEnum) => {};
  writeValue(value: PizzaSizeEnum) {
    this.pizzaSize = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}
}
