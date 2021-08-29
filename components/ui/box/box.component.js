import React from "react";
import styled from "styled-components";

const Box = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  max-width: 300px;
  transition: 0.2s ease;
  width: 100%;
  margin-top: ${(props) => props.theme.space.margin.xxl};
  background-color: ${(props) => props.theme.colors.body.white};
  border: 1px solid ${(props) => props.theme.colors.body.grayer};
  box-shadow: ${(props) => props.theme.shadow.s7};
  padding: ${(props) => props.theme.space.padding.lg};
  border-radius: ${(props) => props.theme.space.border.lg};
`;

export default Box;
