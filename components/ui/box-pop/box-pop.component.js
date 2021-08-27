import React from "react";
import styled from "styled-components";

const BoxPop = ({ children, setLayer }) => {
  return (
    <Container>
      <Content>{children} ksjfahhk j</Content>
      <Layer onClick={() => setLayer(false)} />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
`;
const Content = styled.div``;
const Layer = styled.div``;

export default BoxPop;
