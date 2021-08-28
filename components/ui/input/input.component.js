import React from "react";
import styled from "styled-components";

const Input = ({ text, variant, ...otherProps }) => {
  return (
    <Container>
      {text && <Text>{text}</Text>}
      <InputUi variant={variant} spellCheck="false" {...otherProps} />
    </Container>
  );
};

const defaultStyle = (theme) => `
border-radius: ${theme.space.border.lg};
padding: ${theme.space.padding.lg};
border: 1px solid ${theme.colors.body.grayer};
background-color: white;
width: 100%;
outline: none;
transition: 0.2s ease;
&::placeholder {
  color: ${theme.colors.body.darkGray};
}
&:focus {
  transform: scale(1.01);
  border: 1px solid ${theme.colors.body.darkGray};
}
`;

const edit = (theme) => `
  background-color: transparent;
  border: 1px solid transparent;
  font-size: ${theme.size.font.m};
  font-weight: 400;
  padding: ${theme.space.padding.m};
  &:hover {
    border: 1px dotted ${theme.colors.body.darkGray};
  }
  &:focus {
    transform: scale(1);
    border: 1px dotted ${theme.colors.body.darkGray};
  }
`;

const variants = {
  edit,
};

const Container = styled.div``;
const InputUi = styled.input`
  ${({ theme }) => defaultStyle(theme)}
  ${({ theme, variant }) => variant && variants[variant](theme)}
`;
const Text = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.m};
`;
export default Input;
