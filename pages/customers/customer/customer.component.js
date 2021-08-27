import React from "react";
import styled from "styled-components";

const Customer = ({ customer }) => {
  const { address, name, number, notes } = customer;
  console.log(customer);

  return (
    <Container>
      <Item>{name}</Item>
      <Item>
        {address.street}, {address.city}
      </Item>
      <Item>{number}</Item>
      <Item>{notes}</Item>
    </Container>
  );
};

const Container = styled.div`
  padding: ${(props) => props.theme.space.padding.lg};
  background-color: ${(props) => props.theme.colors.body.white};
  border-radius: ${(props) => props.theme.space.border.m};
  margin-bottom: ${(props) => props.theme.space.margin.m};
  display: flex;
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;
export default Customer;
