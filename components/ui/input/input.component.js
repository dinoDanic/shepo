import React from "react";
import styled from "styled-components";

const Input = ({ text, ...otherProps }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <InputUi {...otherProps} />
    </Container>
  );
};
const Container = styled.div``;
const InputUi = styled.input`
  border-radius: ${(props) => props.theme.space.border.lg};
  padding: ${(props) => props.theme.space.padding.lg};
  border: 1px solid ${(props) => props.theme.colors.body.grayer};
  color: ${(props) => props.theme.colors.ui.primary};
  box-shadow: ${(props) => props.theme.shadow.s1};
  background-color: white;
  width: 100%;
  outline: none;
  transition: 0.2s ease;
  &::placeholder {
    color: ${(props) => props.theme.colors.body.darkGray};
  }
  &:focus {
    transform: scale(1.01);
  }
`;
const Text = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.m};
`;
export default Input;
