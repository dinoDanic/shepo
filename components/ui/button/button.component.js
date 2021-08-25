import React from "react";
import styled from "styled-components";

const Button = ({ size, children, ...otherProps }) => {
  return (
    <ButtonUi size={size} {...otherProps}>
      {children}
    </ButtonUi>
  );
};

const defaultStyle = (theme) => `
  border-radius: ${theme.space.border.l};
  border: 1px solid ${theme.colors.body.grayer};
  background-color: ${theme.colors.ui.primary};
  box-shadow: ${theme.shadow.s1};
  padding: ${theme.space.padding.m};
  color: ${theme.colors.font.white};
`;

const large = (theme) => `
  color: blue,
  font-size: 200px,
`;

const sizes = {
  large,
};

const ButtonUi = styled.button`
  ${({ theme }) => defaultStyle(theme)};
  ${({ theme, size }) => sizes[size](theme)};
`;

export default Button;
