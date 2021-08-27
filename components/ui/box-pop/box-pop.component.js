import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const BoxPop = ({ children, setLayer }) => {
  return (
    <Container
      initial={{ scale: 1.02, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 1.02, opacity: 0 }}
      transition={{ duration: 0.15 }}
    >
      <Content>{children}</Content>
      <Layer onClick={() => setLayer(false)} />
    </Container>
  );
};

const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
const Content = styled.div`
  background-color: ${(props) => props.theme.colors.body.white};
  border-radius: ${(props) => props.theme.space.border.m};
  padding: ${(props) => props.theme.space.padding.xl};
  border: 1px solid ${(props) => props.theme.colors.body.grayer};
  margin-top: ${(props) => props.theme.space.margin.xl};
  width: 60%;
  position: absolute;
  z-index: 150;
`;
const Layer = styled.div`
  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(3px);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export default BoxPop;
