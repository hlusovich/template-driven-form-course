import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AddressFormModelEntity} from "./model/address-form-model.entity";
import {ControlContainer, FormsModule, NgForm} from "@angular/forms";

@Component({
  selector: 'app-address-form-component',
  standalone: true,
  imports: [
    FormsModule
  ],
  viewProviders: [[{provide: ControlContainer, useExisting: NgForm}]],

  templateUrl: './address-form-component.component.html',
  styleUrl: './address-form-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressFormComponentComponent {
  @Input({required: true}) form?: AddressFormModelEntity | null;
}

