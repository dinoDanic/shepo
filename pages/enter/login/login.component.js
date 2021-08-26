import React from "react";
import styled from "styled-components";

import Spacer from "../../../components/spacer/spacer";
import Button from "../../../components/ui/button/button.component";
import Hr from "../../../components/ui/hr/hr.components";
import Input from "../../../components/ui/input/input.component";
import { singInWithGoogle } from "../../../lib/firebase";

const Login = () => {
  return (
    <Container>
      <Form>
        <Input text="email" placeholder="email" />
        <Spacer variant="top" size="l" />
        <Input text="password" placeholder="password" type="password" />
        <Spacer variant="top" size="l" />
        <Button size="large">Login</Button>
      </Form>
      <Hr />
      <Button icon="faGoogle" onClick={() => singInWithGoogle()}>
        Login with Google
      </Button>
    </Container>
  );
};
const Container = styled.div`
  background: white;
`;
const Form = styled.form``;

export default Login;
