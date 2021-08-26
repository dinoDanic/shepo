import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../lib/firebase";

import Avatar from "../ui/avatar/avatar.component";

const User = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      {currentUser && (
        <Container onClick={() => signOut(auth)}>
          <Avatar imageURL={currentUser.photoURL} />
          <Name>{currentUser.username}</Name>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  padding: ${(props) => props.theme.space.padding.lg};
  background-color: ${(props) => props.theme.colors.body.gray};
  border-radius: ${(props) => props.theme.space.border.m};
  display: flex;
  align-items: center;
`;
const Name = styled.div`
  margin-left: ${(props) => props.theme.space.margin.m};
  font-size: ${(props) => props.theme.size.font.s};
`;

export default User;
