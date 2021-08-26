import React from "react";
import styled from "styled-components";

import User from "../user/user.component";
import Spacer from "../spacer/spacer";

const Menu = () => {
  return (
    <Container>
      <Logo>Shepo</Logo>
      <UserContainer>
        <User />
      </UserContainer>
    </Container>
  );
};

const Container = styled.div`
  min-width: 270px;
  background-color: ${(props) => props.theme.colors.body.white};
  padding: ${(props) => props.theme.space.padding.lg};
  padding-right: 48px;
`;
const Logo = styled.h2`
  font-family: ${(props) => props.theme.fonts.logo};
  text-align: center;
  color: ${(props) => props.theme.colors.ui.primary};
`;
const UserContainer = styled.div`
  margin: ${(props) => props.theme.space.margin.lg} 0;
`;

export default Menu;
