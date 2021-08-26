import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  return (
    <Container>
      <Link href="/">
        <Item>
          <Icon icon={faCompass} />
          <Text>Dashboard</Text>
        </Item>
      </Link>
    </Container>
  );
};

const Container = styled.div``;
const Item = styled.div`
  padding: ${(props) => props.theme.space.padding.lg};
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.theme.space.border.m};
  transition: 0.2s ease;
  cursor: pointer;
  font-size: ${(props) => props.theme.size.font.s};
  svg {
    color: ${(props) => props.theme.colors.body.darkGray};
    margin-right: ${(props) => props.theme.space.margin.m};
  }
  &:hover {
    background-color: ${(props) => props.theme.colors.grayer};
    background-color: ${(props) => props.theme.colors.body.gray};
    transform: scale(1.02);
  }
`;
const Icon = styled(FontAwesomeIcon)``;
const Text = styled.div``;

export default Menu;
