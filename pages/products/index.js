import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
import { toggleUi } from "../../infrastructure/redux/ui/ui.actions";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";

import Title from "../../components/typo/title.component";
import Button from "../../components/ui/button/button.component";
import Product from "./product/product.component";
import Spacer from "../../components/spacer/spacer";
import BoxPop from "../../components/ui/box-pop/box-pop.component";
import NewProduct from "../../components/new-product/new-product.component";

const Products = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  function createProduct() {
    dispatch(toggleUi(!isOpen));
    setIsOpen(!isOpen);
  }
  useEffect(() => {
    if (isOpen) {
      dispatch(toggleUi(true));
    } else {
      dispatch(toggleUi(false));
    }
  }, [isOpen]);

  useEffect(() => {
    onSnapshot(collection(db, "products"), (products) => {
      let list = [];
      products.forEach((product) => {
        list.push(product.data());
      });
      setProducts(list);
    });
  }, []);

  return (
    <>
      <Container>
        <Title>Products</Title>
        <Spacer variant="bottom" size="lg" />
        <Button icon="faBoxOpen" size="medium" onClick={() => createProduct()}>
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
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
      <AnimatePresence>
        {isOpen && (
          <BoxPop setLayer={setIsOpen}>
            <NewProduct setIsOpen={setIsOpen} />
          </BoxPop>
        )}
      </AnimatePresence>
    </>
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
