import React from "react";
import styled from "styled-components";

const variants = {
  top: "margin-top",
  bottom: "margin-bottom",
  left: "margin-left",
  right: "margin-right",
};

const getMargin = (size, variant, theme) => `
    ${variants[variant]}: ${theme.space.margin[size]};
`;

const Spacer = ({ variant, size }) => {
  return <Space variant={variant} size={size}></Space>;
};

const Space = styled.div`
  ${({ size, variant, theme }) => getMargin(size, variant, theme)}
`;

export default Spacer;
