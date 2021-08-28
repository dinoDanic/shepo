import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "../../components/sidebar/sidebar.component";

const Layout = ({ children }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const openUi = useSelector((state) => state.ui.openUi);
  const variant = {
    open: { scale: 0.95 },
    close: { scale: 1 },
  };
  return (
    <>
      {currentUser ? (
        <AnimatePresence>
          <Container
            initial={{ scale: 1, opacity: 1 }}
            variants={variant}
            animate={openUi ? "open" : "close"}
            transition={{ duration: 0.2 }}
          >
            <Sidebar />
            <Content>{children}</Content>
          </Container>
        </AnimatePresence>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
const Container = styled(motion.div)`
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
