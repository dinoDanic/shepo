import React from "react";
import styled from "styled-components";

const Label = ({ children }) => {
  return (
    <Container>
      <Text>{children}</Text>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.body.gray};
  padding: ${(props) => props.theme.space.padding.s}
    ${(props) => props.theme.space.padding.m};
  border-radius: ${(props) => props.theme.space.border.m};
  margin-right: ${(props) => props.theme.space.margin.s};
`;
const Text = styled.div`
  font-size: ${(props) => props.theme.size.font.xs};
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
`;

export default Label;
