import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Button = ({ icon, size, children, ...otherProps }) => {
  return (
    <ButtonUi size={size} {...otherProps}>
      {icon && <Icon icon={icons[icon]} />}
      {children}
    </ButtonUi>
  );
};

const icons = {
  faGoogle: faGoogle,
};

const defaultStyle = (theme) => `
  border-radius: ${theme.space.border.lg};
  border: 1px solid ${theme.colors.body.grayer};
  background-color: ${theme.colors.ui.primary};
  box-shadow: ${theme.shadow.s1};
  padding: ${theme.space.padding.m};
  color: ${theme.colors.font.white};
  width: 100%;
  cursor: pointer;
  box-shadow: ${theme.shadow.s1};
  transition: 0.2s ease;
  &:hover {
    transform: scale(1.01);
  }
  &:focus {
    transform: scale(0.99);
  }
`;

const large = (theme) => `
  padding: ${theme.space.padding.lg} ${theme.space.padding.lg};
`;

const sizes = {
  large,
};

const ButtonUi = styled.button`
  ${({ theme }) => defaultStyle(theme)};
  ${({ theme, size }) => sizes[size](theme)};
`;
const Icon = styled(FontAwesomeIcon)`
  margin-right: ${(props) => props.theme.space.margin.m};
`;

Button.defaultProps = {
  size: "large",
};

export default Button;
