import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

import Login from "./login/login.component";
import Register from "./register/register.component";

const Enter = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const variants = {
    open: { scale: 1, opacity: 1 },
    closed: { scale: 0.9, opacity: 0 },
  };

  const regVariants = {
    open: { scale: 1, opacity: 1 },
    closed: { scale: 1.1, opacity: 0 },
  };

  const toggleIs = () => {
    setIsLogin(!isLogin);
    setIsRegister(!isRegister);
  };

  return (
    <>
      {!currentUser && (
        <Container>
          <Logo>shepo</Logo>
          <Holder>
            <FormContainer
              variants={variants}
              animate={isLogin ? "open" : "closed"}
              style={{ zIndex: isLogin ? "100" : "0" }}
              transition={{ delay: isLogin && 0.1 }}
            >
              <Login />
              <Question onClick={() => toggleIs()}>
                No Accout? Register!
              </Question>
            </FormContainer>
            <FormContainer
              variants={regVariants}
              animate={isRegister ? "open" : "closed"}
              initial={{ opacity: 0 }}
              style={{ zIndex: isRegister ? "100" : "0" }}
              transition={{ delay: isRegister && 0.1 }}
            >
              <Register />
              <Question onClick={() => toggleIs()}>
                Allready a member? Login!
              </Question>
            </FormContainer>
          </Holder>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  padding: 60px;
  overflow: hidden;
  height: 100vh;
  width: 100%;
`;
const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.logo};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: 30px;
`;
const Welcome = styled.h1`
  font-size: 60px;
  font-weight: 400;
`;
const Holder = styled.div`
  background: blue;
  position: relative;
`;
const FormContainer = styled(motion.div)`
  max-width: 300px;
  transition: 0.2s ease;
  position: absolute;
  width: 100%;
  margin-top: ${(props) => props.theme.space.margin.xxl};
  top: 0;
  height: 100vh;
`;
const Question = styled(motion.div)`
  text-align: center;
  margin-top: ${(props) => props.theme.space.margin.l};
  cursor: pointer;
  &:hover {
  }
`;

export default Enter;
