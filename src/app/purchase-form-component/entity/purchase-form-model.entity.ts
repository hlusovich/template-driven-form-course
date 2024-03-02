import {AddressFormModelEntity} from "../../adress-form-component/model/address-form-model.entity";

export interface PurchaseFormModelEntity {
  firstName?: String,
  familyName?: String,
  age?: number,
  password?: {
    password?: String,
    confirmPassword?: String,
  },
  gender?: String,
  productId?: number,
  address?: AddressFormModelEntity,
}
