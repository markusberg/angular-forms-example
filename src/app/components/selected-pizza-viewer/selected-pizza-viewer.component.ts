import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray } from '@angular/forms';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-selected-pizza-viewer',
  templateUrl: './selected-pizza-viewer.component.html',
  styleUrls: ['./selected-pizza-viewer.component.scss'],
})
export class SelectedPizzaViewerComponent implements OnInit {
  @Input() selectedPizzaGroup: AbstractControl;
  @Output() addPizza = new EventEmitter();

  faPlusCircle = faPlusCircle;

  get toppingsArray(): FormArray {
    if (!this.selectedPizzaGroup) return;

    return this.selectedPizzaGroup.get('toppings') as FormArray;
  }

  constructor() {}

  ngOnInit() {}
}
