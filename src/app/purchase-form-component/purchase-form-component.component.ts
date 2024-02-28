import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from "@angular/forms";
import {JsonPipe} from "@angular/common";

@Component({
  selector: 'app-purchase-form-component',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './purchase-form-component.component.html',
  styleUrl: './purchase-form-component.component.scss'
})
export class PurchaseFormComponentComponent {
  @ViewChild('form')  form? : NgForm;

  protected  formModel  = {
    firstName: '',
    familyName: '',
    age: 27,
    password: {
      password:'',
      confirmPassword: '',
    },
  }

  protected onSubmit() {
    console.log(this.formModel);
    console.log(this.form?.value);
  }
}
