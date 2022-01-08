import { Address } from "../models/address.model";
import { IMapper } from "../models/imapper";
import { Supplier } from "../models/supplier.model";

export class SupplierMapper implements IMapper<Supplier> {
  map(item: any): Supplier {
    const supplier = new Supplier(item)
    return supplier
  }
  unmap(item: Supplier): object {
    return {
      ...item
    }
  }

  addressMapper(data: any): Address {
    return {
    street: data.logradouro,
    number: '',
    zipCode: data.cep,
    city: data.localidade,
    neighborhood: data.bairro,
    state: data.uf,
    moreInfo: data.complemento
  }
}

}