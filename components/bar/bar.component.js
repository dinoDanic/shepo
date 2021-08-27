import React from "react";
import styled from "styled-components";

const Bar = ({ items }) => {
  return (
    <BarUi>
      {items?.map((item) => (
        <Item key={item}>{item}</Item>
      ))}
    </BarUi>
  );
};

const BarUi = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${(props) => props.theme.space.padding.lg};
  padding-bottom: ${(props) => props.theme.space.padding.m};
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.size.font.xs};
  color: rgba(0, 0, 0, 0.5);
  font-weight: 500;
  text-transform: uppercase;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;

export default Bar;
