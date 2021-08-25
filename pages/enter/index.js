import React from "react";
import styled from "styled-components";

import Spacer from "../../components/spacer/spacer";
import Button from "../../components/ui/button/button.component";
import Input from "../../components/ui/input/input.component";

const Enter = () => {
  return (
    <Container>
      <Logo>shepo</Logo>
      <Welcome>Welcome text</Welcome>
      <FormContainer>
        <Form>
          <Input text="email" placeholder="email" />
          <Spacer variant="top" size="l" />
          <Input text="password" placeholder="password" type="password" />
          <Button size="large">Login</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 60px;
`;
const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: 30px;
  margin-bottom: ${(props) => props.theme.space.margin.xxl};
`;
const Welcome = styled.h1`
  font-size: 60px;
  font-weight: 400;
`;
const FormContainer = styled.div`
  max-width: 300px;
`;
const Form = styled.form`
  margin-top: ${(props) => props.theme.space.margin.xxl};
`;

export default Enter;
