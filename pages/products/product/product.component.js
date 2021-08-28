import React from "react";
import Link from "next/link";

import styled, { css } from "styled-components";
import Button from "../../../components/ui/button/button.component";

import Label from "../../../components/ui/label/label.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const { code, desc, name, price, imageURL, category, id } = product;
  return (
    <Link href={`/products/${id}`}>
      <Items>
        <Item>
          <Details>
            {imageURL ? (
              <Image alt="product image" src={imageURL} />
            ) : (
              <Icon icon={faImage} size="2x" />
            )}
            <Info>
              <Name>{name}</Name>
              <Desc>{desc}</Desc>
            </Info>
          </Details>
        </Item>
        <Item>
          <Code>{code}</Code>
        </Item>
        <Item>
          <Price>{price}</Price>
        </Item>
        <Item>
          <Category>
            <Label>{category}</Label>
          </Category>
        </Item>
      </Items>
    </Link>
  );
};
const middle = css`
  display: flex;
  align-items: center;
`;
const Settings = styled.div`
  ${middle}
`;
const Price = styled.div`
  font-size: ${(props) => props.theme.size.font.s};
  ${middle}
`;
const Category = styled.div`
  ${middle}
`;
const Code = styled.div`
  font-size: ${(props) => props.theme.size.font.s};
  ${middle}
`;
const Item = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
`;
const Items = styled.div`
  padding: ${(props) => props.theme.space.padding.lg};
  background-color: ${(props) => props.theme.colors.body.white};
  border-radius: ${(props) => props.theme.space.border.m};
  margin-bottom: ${(props) => props.theme.space.margin.m};
  display: flex;
  cursor: pointer;
  transition: 0.2s ease-out;
  box-shadow: ${(props) => props.theme.shadow.s1};
  &:hover {
    transform: scale(1.01);
    box-shadow: ${(props) => props.theme.shadow.s2};
  }
`;
const Details = styled.div`
  ${middle}
`;
const Image = styled.img`
  object-fit: cover;
  border-radius: ${(props) => props.theme.space.border.m};
  margin-right: ${(props) => props.theme.space.margin.lg};
`;
const Info = styled.div``;
const Name = styled.div`
  font-weight: bold;
`;
const Desc = styled.div`
  font-size: ${(props) => props.theme.size.font.xs};
  margin-top: ${(props) => props.theme.space.margin.xs};
  color: rgba(0, 0, 0, 0.5);
`;
const Icon = styled(FontAwesomeIcon)`
  width: 40px;
  height: 40px;
  color: ${(props) => props.theme.colors.body.darkGray};
  margin-right: ${(props) => props.theme.space.margin.lg};
`;

export default Product;
