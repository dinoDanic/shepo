import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleUi } from "../../infrastructure/redux/ui/ui.actions";

import { createNewCustomer } from "../../lib/firebase.fn";

import Title from "../typo/title.component";
import Button from "../ui/button/button.component";
import Input from "../ui/input/input.component";
import TextArea from "../ui/text-area/text-area.component";

const NewCustomer = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState(null);
  const [street, setStreet] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [notes, setNotes] = useState("");

  const handleNewCustomer = () => {
    if (name === "") {
      alert("Name is required");
      return;
    }
    const customerData = {
      name,
      number,
      address: {
        street,
        zip,
        city,
      },
      notes,
    };
    try {
      createNewCustomer(customerData);
      setIsOpen(false);
      dispatch(toggleUi(false));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header>
        <Title>New Customer</Title>
      </Header>
      <Form>
        <Row>
          <Input
            text="Name"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            text="Contact Number"
            placeholder="Contact Number"
            onChange={(e) => setNumber(e.target.value)}
          />
          <Input
            text="Street"
            placeholder="Street"
            onChange={(e) => setStreet(e.target.value)}
          />
          <Input
            text="Zip"
            placeholder="Zip"
            onChange={(e) => setZip(e.target.value)}
          />
          <Input
            text="City"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
          />
        </Row>
        <Row>
          <TextArea text="Notes" onChange={(e) => setNotes(e.target.value)} />
        </Row>
      </Form>
      <ButtonContainer>
        <Button size="medium" onClick={handleNewCustomer}>
          CREATE
        </Button>
      </ButtonContainer>
    </>
  );
};
const Header = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.xl};
`;
const Form = styled.div`
  display: flex;
  input {
    margin-bottom: ${(props) => props.theme.space.margin.m};
  }
`;
const Row = styled.div`
  flex: 1;
  &:first-child {
    margin-right: ${(props) => props.theme.space.margin.lg};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default NewCustomer;
