import React from "react";
import styled from "styled-components";

import Button from "../../../components/ui/button/button.component";
import Hr from "../../../components/ui/hr/hr.components";
import Input from "../../../components/ui/input/input.component";
import { singInWithGoogle } from "../../../lib/firebase";

const Login = () => {
  return (
    <Container>
      <Form>
        <Input text="email" placeholder="email" />
        <Input text="password" placeholder="password" type="password" />
        <Button long size="large">
          Login
        </Button>
      </Form>
      <Hr />
      <Button icon="faGoogle" long onClick={() => singInWithGoogle()}>
        Login with Google
      </Button>
    </Container>
  );
};
const Container = styled.div``;
const Form = styled.form`
  input {
    margin-bottom: ${(props) => props.theme.space.margin.lg};
  }
`;

export default Login;
