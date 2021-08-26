import React from "react";
import styled from "styled-components";

import Spacer from "../../../components/spacer/spacer";
import Button from "../../../components/ui/button/button.component";
import Hr from "../../../components/ui/hr/hr.components";
import Input from "../../../components/ui/input/input.component";

const Register = () => {
  return (
    <Form>
      <Input text="email" placeholder="email" />
      <Spacer variant="top" size="l" />
      <Input text="user name" placeholder="user name" />
      <Spacer variant="top" size="l" />
      <Input text="password" placeholder="password" type="password" />
      <Spacer variant="top" size="l" />
      <Input
        text="repeat password"
        placeholder="repeat password"
        type="password"
      />
      <Spacer variant="top" size="l" />
      <Button size="large">Register</Button>
      <Hr />
      <Button icon="faGoogle">Register with Google</Button>
    </Form>
  );
};

const Form = styled.form`
  background: white;
`;

export default Register;
