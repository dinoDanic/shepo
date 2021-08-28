import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { onSnapshot, collection } from "@firebase/firestore";
import { db } from "../../lib/firebase";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

import Title from "../../components/typo/title.component";
import Spacer from "../../components/spacer/spacer";
import Button from "../../components/ui/button/button.component";
import BoxPop from "../../components/ui/box-pop/box-pop.component";
import Bar from "../../components/bar/bar.component";
import NewCustomer from "../../components/new-customer/new-cusomter.component";
import Customer from "./customer/customer.component";

const Customers = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const [customers, setCustomers] = useState([]);

  function createUser() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    onSnapshot(
      collection(db, `users/${currentUser.id}/customers`),
      (customers) => {
        let list = [];
        customers.forEach((customer) => {
          list.push(customer.data());
        });
        setCustomers(list);
      }
    );
  }, []);

  return (
    <>
      <Container>
        <Title>Customers</Title>
        <Spacer variant="bottom" size="lg" />
        <Button icon="faUserPlus" size="medium" onClick={() => createUser()}>
          NEW CUSTOMER
        </Button>
        <Spacer variant="bottom" size="lg" />
        <Bar items={["name", "adress", "contact", "notes"]} />
        {customers?.map((customer) => (
          <Customer key={customer.id} customer={customer} />
        ))}
      </Container>
      <AnimatePresence>
        {isOpen && (
          <BoxPop layer={isOpen} setLayer={setIsOpen}>
            <NewCustomer setIsOpen={setIsOpen} />
          </BoxPop>
        )}
      </AnimatePresence>
    </>
  );
};

const Container = styled.div``;

const Item = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.size.font.xs};
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  text-transform: uppercase;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

export default Customers;
