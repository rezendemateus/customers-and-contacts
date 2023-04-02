import Header from "@/components/Header";
import api from "@/services/api";
import { ICustomer } from "@/types";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import styled from "styled-components";

interface IProps {
  customers: ICustomer[];
}

const Customers: NextPage<IProps> = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  useEffect(() => {
    async function loadCustomers() {
      try {
        const response = await api.get("/clients");
        setCustomers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }, [customers]);

  return (
    <StyledCustomers>
      <Header>
        <h1>Customers</h1>
      </Header>
      <ul className="customers_list">
        {customers.map((customer, index) => {
          return (
            <li className="customer_card" key={index}>
              <a href={`/customers/${customer.id}`}>
                <h2>{customer.name}</h2>
                <h3>{customer.cpf}</h3>
              </a>
            </li>
          );
        })}
      </ul>
    </StyledCustomers>
  );
};

const StyledCustomers = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  min-width: 360px;
  gap: 30px;

  .customers_list {
    width: 80%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;

    .customer_card {
      width: 100%;
      height: 80px;
      border: 1px solid var(--blue);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;

      :hover {
        transform: scale(1.2);
      }

      a {
        width: 90%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        h2 {
          color: var(--black-1);
        }
        h3 {
          color: var(--black-2);
        }
      }
    }
  }
`;

export default Customers;

export const getServerSideProps: GetServerSideProps<IProps> = async () => {
  const response = await api.get("/clients");
  const customers: ICustomer[] = response.data;
  console.log(customers);
  return { props: { customers } };
};
