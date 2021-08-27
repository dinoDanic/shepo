import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Sidebar from "../../components/sidebar/sidebar.component";

const Layout = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <>
      {currentUser ? (
        <Container>
          <Sidebar />
          <Content>{children}</Content>
        </Container>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
const Container = styled.div`
  display: flex;
  height: 100vh;
`;
const Content = styled.div`
  padding: ${(props) => props.theme.space.padding.xl};
  margin-left: -${(props) => props.theme.space.margin.xl};
  width: 100%;
  border-radius: 20px 0 0 0;
  background-color: ${(props) => props.theme.colors.body.gray};
`;
export default Layout;
