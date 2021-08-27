import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <TitleUi>{children}</TitleUi>;
};

const TitleUi = styled.h2`
  font-weight: 400;
  margin-bottom: ${(props) => props.theme.space.margin.lg};
`;

export default Title;
