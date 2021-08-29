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
      <Input text="user name" placeholder="user name" />
      <Input text="password" placeholder="password" type="password" />
      <Input
        text="repeat password"
        placeholder="repeat password"
        type="password"
      />
      <Button long size="large">
        Register
      </Button>
      <Hr />
      <Button long icon="faGoogle">
        Register with Google
      </Button>
    </Form>
  );
};

const Form = styled.form`
  input {
    margin-bottom: ${(props) => props.theme.space.margin.lg};
  }
`;

export default Register;
