import { IMapper } from "../models/imapper";
import { Supplier } from "../models/supplier.model";

export class SupplierMapper implements IMapper<Supplier> {
  map(item: any): Supplier {
    return new Supplier(item)
  }
  unmap(item: Supplier): object {
    return {
      ...item
    }
  }

}