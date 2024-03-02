import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {AddressFormComponentComponent} from "../adress-form-component/address-form-component.component";

@Component({
  selector: 'app-purchase-form-component',
  standalone: true,
  imports: [FormsModule, JsonPipe, AddressFormComponentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './purchase-form-component.component.html',
  styleUrl: './purchase-form-component.component.scss'
})
export class PurchaseFormComponentComponent {
  @ViewChild('form') form?: NgForm;

  protected formModel = {
    firstName: '',
    familyName: '',
    age: 27,
    password: {
      password: '',
      confirmPassword: '',
    },
    gender: '',
    productId: null,
    address: {
      street: '',
      city: '',
      country: '',
      zipCode: '',
    },
  }

  protected products = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'orange'},
    {id: 3, name: 'coca-cola'},
    ];

  protected onSubmit() {
    console.log(this.formModel);
    console.log(this.form?.value);
  }
}
