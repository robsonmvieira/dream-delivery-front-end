import { Address } from "./address.model"

export class Supplier {
    id: string
    CNPJ: string
    name: string
    email: string
    code: string
    phone: string
    isActive: boolean
    isBlocked: boolean
    isDeleted: boolean
    address: Address

    constructor(data?: Partial<Supplier>) {
      if (data) {
        Object.assign(this, data);
      }
    }
}
