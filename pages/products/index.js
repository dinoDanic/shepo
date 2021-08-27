import React from "react";
import styled from "styled-components";

import Title from "../../components/typo/title.component";
import Button from "../../components/ui/button/button.component";
import Product from "./product/product.component";
import Spacer from "../../components/spacer/spacer";

const Products = () => {
  const createProduct = () => {
    console.log("hi");
  };
  return (
    <Container>
      <Title>Products</Title>
      <Spacer variant="bottom" size="lg" />
      <Button icon="faBoxOpen" size="medium" onClick={createProduct}>
        NEW PRODUCT
      </Button>
      <Spacer variant="bottom" size="lg" />
      <ProductBar>
        <Item>Product Details</Item>
        <Item>Code</Item>
        <Item>Price</Item>
        <Item>Category</Item>
        <Item></Item>
      </ProductBar>
      <Product />
    </Container>
  );
};

const Container = styled.div``;
const ProductBar = styled.div`
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

export default Products;
