import React from "react";
import styled from "styled-components";

import Spacer from "../../../components/spacer/spacer";
import Button from "../../../components/ui/button/button.component";
import Hr from "../../../components/ui/hr/hr.components";
import Input from "../../../components/ui/input/input.component";

const Login = () => {
  return (
    <Form>
      <Input text="email" placeholder="email" />
      <Spacer variant="top" size="l" />
      <Input text="password" placeholder="password" type="password" />
      <Spacer variant="top" size="l" />
      <Button size="large">Login</Button>
      <Hr />
      <Button icon="faGoogle">Login with Google</Button>
    </Form>
  );
};
const Form = styled.form`
  background: white;
`;
export default Login;
