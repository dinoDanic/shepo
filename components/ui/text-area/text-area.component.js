import React from "react";
import styled from "styled-components";

const TextArea = ({ text, ...otherProps }) => {
  return (
    <Container>
      <Text>{text}</Text>
      <TextAreaUi spellCheck="false" {...otherProps} />
    </Container>
  );
};
const Container = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.m};
`;
const TextAreaUi = styled.textarea`
  border-radius: ${(props) => props.theme.space.border.lg};
  padding: ${(props) => props.theme.space.padding.lg};
  border: 1px solid ${(props) => props.theme.colors.body.grayer};
  /* box-shadow: ${(props) => props.theme.shadow.s1}; */
  background-color: white;
  outline: none;
  max-width: 300px;
  min-width: 100%;
  min-height: 100px;
  &::placeholder {
    color: ${(props) => props.theme.colors.body.darkGray};
  }
`;
const Text = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.m};
`;
export default TextArea;
