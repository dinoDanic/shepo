import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faBoxOpen,
  faUserPlus,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import Spacer from "../../spacer/spacer";

const Button = ({ icon, size, children, ...otherProps }) => {
  return (
    <ButtonUi size={size} {...otherProps}>
      {icon && <Icon icon={icons[icon]} />}
      {icon && children && <Spacer variant="right" size="s" />}
      {children}
    </ButtonUi>
  );
};

const icons = {
  faGoogle,
  faBoxOpen,
  faEllipsisH,
  faUserPlus,
};

const defaultStyle = (theme) => `
  display:flex;  
  align-items: center;
  border-radius: ${theme.space.border.lg};
  border: 1px solid ${theme.colors.body.grayer};
  box-shadow: ${theme.shadow.s1};
  padding: ${theme.space.padding.m};
  color: ${theme.colors.font.white};
  cursor: pointer;
  box-shadow: ${theme.shadow.s1};
  transition: 0.2s ease;
  height: fit-content;
  width: fit-content;
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
const small = (theme) => `
  padding: ${theme.space.padding.s} ${theme.space.padding.m};
  height: fit-content;
`;
const medium = (theme) => `
  padding: ${theme.space.padding.m} ${theme.space.padding.lg};
  font-size: ${theme.size.font.xs};
  border-radius: ${theme.space.border.m};
`;
const primary = (theme) => `  background-color: ${theme.colors.ui.primary};`;

const gray = (theme) => `
  background-color: ${theme.colors.body.grayer}; 
  color: rgba(0,0,0,0.5);
  &:hover {
    background-color: ${theme.colors.ui.primary};
    color: white;
  }
`;

const sizes = {
  large,
  medium,
  small,
};
const colors = {
  primary,
  gray,
};
const ButtonUi = styled.button`
  ${({ theme }) => defaultStyle(theme)};
  ${({ theme, size }) => sizes[size](theme)};
  ${({ theme, color }) => colors[color](theme)};
`;
const Icon = styled(FontAwesomeIcon)``;

Button.defaultProps = {
  size: "large",
  color: "primary",
};

export default Button;
