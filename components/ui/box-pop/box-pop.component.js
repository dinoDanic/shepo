import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { toggleUi } from "../../../infrastructure/redux/ui/ui.actions";

const BoxPop = ({ children, setLayer, layer, variant }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (layer) {
      dispatch(toggleUi(true));
    } else {
      dispatch(toggleUi(false));
    }
  }, [layer, dispatch, setLayer]);

  const handleLayer = () => {
    setLayer(false);
    dispatch(toggleUi(false));
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <Content variant={variant}>{children}</Content>
      <Layer onClick={() => handleLayer()} />
    </Container>
  );
};

const defaultStyleContent = (theme) => `
  background-color: ${theme.colors.body.white};
  border-radius: ${theme.space.border.m};
  padding: ${theme.space.padding.xl};
  border: 1px solid ${theme.colors.body.grayer};
  margin-top: ${theme.space.margin.xl};
  box-shadow: ${theme.shadow.s4};
  width: 80%;
  position: absolute;
  z-index: 150;
`;

const alert = (theme) => `
  width: fit-content;
`;

const variants = {
  alert,
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
  ${({ theme }) => defaultStyleContent(theme)}
  ${({ theme, variant }) => variant && variants[variant](theme)}
`;
const Layer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  z-index: 100;
`;

export default BoxPop;
