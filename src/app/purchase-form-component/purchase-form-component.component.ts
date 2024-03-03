import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  signal,
  ViewChild
} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {AddressFormComponentComponent} from "../adress-form-component/address-form-component.component";
import {PurchaseFormModelEntity} from "./entity/purchase-form-model.entity";
import {FormDirective} from "../directives/form/form.directive";

@Component({
  selector: 'app-purchase-form-component',
  standalone: true,
  imports: [FormsModule, JsonPipe, AddressFormComponentComponent, FormDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './purchase-form-component.component.html',
  styleUrl: './purchase-form-component.component.scss'
})
export class PurchaseFormComponentComponent {
  protected formValue  = signal<PurchaseFormModelEntity>({});
  protected viewModel = computed(() => {
    return {
      formModel: this.formValue(),
      isGenderDisabled: (this.formValue().age ?? 0) < 18,
      isUnknownGender: this.formValue().gender === 'unknown',
    }
  })

  protected get vm()  {
    return this.viewModel();
  }

  protected products = [
    {id: 1, name: 'apple'},
    {id: 2, name: 'orange'},
    {id: 3, name: 'coca-cola'},
  ];

  protected onFormValueChange( formValue : PurchaseFormModelEntity) {
    console.log('formValue');
    this.formValue.set(formValue);
  }

  protected onSubmit() {
    console.log(this.formValue);
  }
}
