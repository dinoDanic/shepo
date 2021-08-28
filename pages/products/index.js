import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence } from "framer-motion";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useSelector } from "react-redux";

import Title from "../../components/typo/title.component";
import Button from "../../components/ui/button/button.component";
import Product from "./product/product.component";
import Spacer from "../../components/spacer/spacer";
import BoxPop from "../../components/ui/box-pop/box-pop.component";
import NewProduct from "../../components/new-product/new-product.component";
import Bar from "../../components/bar/bar.component";

const Products = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState([]);

  function createProduct() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    onSnapshot(
      collection(db, `users/${currentUser.id}/products`),
      (products) => {
        let list = [];
        products.forEach((product) => {
          list.push(product.data());
        });
        setProducts(list);
      }
    );
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
        <Bar items={["product details", "code", "price", "category"]} />
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Container>
      <AnimatePresence>
        {isOpen && (
          <BoxPop layer={isOpen} setLayer={setIsOpen}>
            <NewProduct setIsOpen={setIsOpen} />
          </BoxPop>
        )}
      </AnimatePresence>
    </>
  );
};

const Container = styled.div``;

export default Products;
