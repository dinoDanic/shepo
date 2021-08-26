import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Sidebar from "../../components/sidebar/sidebar.component";

const Layout = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      {currentUser && <Sidebar />}
      {children}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export default Layout;
