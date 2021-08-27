import React from "react";
import styled from "styled-components";

const Input = ({ text, variant, ...otherProps }) => {
  // TO DO stal si na variant
  return (
    <Container>
      <Text>{text}</Text>
      <InputUi spellCheck="false" {...otherProps} />
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.lg};
`;
const InputUi = styled.input`
  border-radius: ${(props) => props.theme.space.border.lg};
  padding: ${(props) => props.theme.space.padding.lg};
  border: 1px solid ${(props) => props.theme.colors.body.grayer};
  /* box-shadow: ${(props) => props.theme.shadow.s1}; */
  background-color: white;
  width: 100%;
  outline: none;
  transition: 0.2s ease;
  &::placeholder {
    color: ${(props) => props.theme.colors.body.darkGray};
  }
  &:focus {
    transform: scale(1.01);
    border: 1px solid ${(props) => props.theme.colors.body.darkGray};
  }
`;
const Text = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.m};
`;
export default Input;
