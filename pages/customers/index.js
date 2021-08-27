import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { onSnapshot, collection } from "@firebase/firestore";
import { db } from "../../lib/firebase";
import { useDispatch } from "react-redux";
import { toggleUi } from "../../infrastructure/redux/ui/ui.actions";
import { AnimatePresence } from "framer-motion";

import Title from "../../components/typo/title.component";
import Spacer from "../../components/spacer/spacer";
import Button from "../../components/ui/button/button.component";
import BoxPop from "../../components/ui/box-pop/box-pop.component";
import Bar from "../../components/bar/bar.component";
import NewCustomer from "../../components/new-customer/new-cusomter.component";

const Customers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();

  function createUser() {
    dispatch(toggleUi(!isOpen));
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (isOpen) {
      dispatch(toggleUi(true));
    } else {
      dispatch(toggleUi(false));
    }
  }, [isOpen]);

  useEffect(() => {
    onSnapshot(collection(db, "customers"), (customers) => {
      let list = [];
      customers.forEach((customer) => {
        list.push(customer.data());
      });
      setCustomers(list);
    });
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
        <Bar items={["name", "adress", "contact"]} />
      </Container>
      <AnimatePresence>
        {isOpen && (
          <BoxPop setLayer={setIsOpen}>
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
