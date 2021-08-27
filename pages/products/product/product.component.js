import React from "react";
import styled, { css } from "styled-components";
import Button from "../../../components/ui/button/button.component";

import Label from "../../../components/ui/label/label.component";

const Product = () => {
  const mock = {
    imageURL:
      "data:image/png;base64,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",
    name: "Wood Chair",
    desc: "Wood CHari made of wood lol",
    code: "557CP",
    category: "Pecenjare",
    price: 3000,
  };
  return (
    <Items>
      <Item>
        <Details>
          <Image alt="product image" src={mock.imageURL} />
          <Info>
            <Name>{mock.name}</Name>
            <Desc>{mock.desc}</Desc>
          </Info>
        </Details>
      </Item>
      <Item>
        <Code>{mock.code}</Code>
      </Item>
      <Item>
        <Price>{mock.price}</Price>
      </Item>
      <Item>
        <Category>
          <Label>{mock.category}</Label>
        </Category>
      </Item>
      <Item>
        <Settings>
          <Button icon="faEllipsisH" size="small" color="gray" />
        </Settings>
      </Item>
    </Items>
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
  display: flex;
`;
const Details = styled.div`
  ${middle}
`;
const Image = styled.img`
  width: 40px;
  height: 40px;
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

export default Product;
