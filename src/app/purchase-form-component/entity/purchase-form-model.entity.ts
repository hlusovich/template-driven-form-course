import {AddressFormModelEntity} from "../../adress-form-component/model/address-form-model.entity";

export interface PurchaseFormModelEntity {
  firstName?: string,
  familyName?: string,
  age?: number,
  password?: {
    password?: string,
    confirmPassword?: string,
  },
  customGender?:string,
  gender?: string,
  productId?: number,
  address?: AddressFormModelEntity,
}
