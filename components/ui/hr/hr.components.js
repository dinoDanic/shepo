import React from "react";
import styled from "styled-components";

const Hr = () => {
  return <HrUi />;
};

const HrUi = styled.hr`
  margin-top: ${(props) => props.theme.space.margin.m};
  margin-bottom: ${(props) => props.theme.space.margin.m};
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.colors.body.grayer};
`;

export default Hr;
