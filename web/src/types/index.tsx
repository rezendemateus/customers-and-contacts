interface ICustomer {
  id: string;
  name: string;
  cpf: string;
  email: string;
  telephone: string;
  createdAt: Date;
  updatedAt: Date;
  contacts: IContact[];
}

interface ICustomerRequest {
  name: string;
  cpf: string;
  email: string;
  telephone: string;
  password: string;
}

interface IContact {
  id: string;
  name: string;
  telephone: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  client?: ICustomer;
}

export { type IContact, type ICustomer, type ICustomerRequest };
