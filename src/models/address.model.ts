export class Address {
  street: string
  number: string
  zipCode: string
  city: string
  neighborhood: string
  state: string
  moreInfo?: string

  constructor(data?: Partial<Address>) {
    if (data) {
      Object.assign(this, data);
    }
  }
}