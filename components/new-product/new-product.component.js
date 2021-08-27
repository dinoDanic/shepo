import React, { useState } from "react";
import styled from "styled-components";

import Title from "../typo/title.component";
import Input from "../ui/input/input.component";
import Spacer from "../spacer/spacer";
import TextArea from "../ui/text-area/text-area.component";
import { createNewProduct } from "../../lib/firebase.fn";

import Button from "../ui/button/button.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const NewProduct = ({ imageURL, setIsOpen }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [weight, setWeight] = useState(null);
  const [price, setPrice] = useState(null);

  const handeNewProduct = () => {
    if (name === "") {
      alert("Name is required");
      return;
    }
    const productData = {
      name,
      code,
      desc,
      weight,
      price,
    };
    try {
      createNewProduct(productData);
      setIsOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header>
        <Title>New Product</Title>
      </Header>
      <Form>
        <Left>
          <Row>
            <Input
              text="Name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              text="Code"
              placeholder="Code"
              onChange={(e) => setCode(e.target.value)}
            />
            <TextArea
              text="Description"
              placeholder="Description"
              onChange={(e) => setDesc(e.target.value)}
            />
          </Row>
          <Spacer variant="right" size="lg" />
          <Row>
            <Input
              text="Weight"
              placeholder="kg"
              onChange={(e) => setWeight(e.target.value)}
            />
            <Input
              text="Price"
              placeholder="Without tax"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Row>
        </Left>
        <Right>
          {imageURL ? (
            <Image alt="product image" src={imageURL} />
          ) : (
            <>
              <NoImage>
                <FontAwesomeIcon size="3x" icon={faImage} />
              </NoImage>
            </>
          )}

          <Button size="medium" onClick={handeNewProduct}>
            CREATE
          </Button>
        </Right>
      </Form>
    </>
  );
};

const Header = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.xl};
`;
const Form = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 0.7;
  display: flex;
`;
const Right = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
`;
const Row = styled.div`
  flex: 1;
`;
const Image = styled.img`
  border-radius: ${(props) => props.theme.space.border.m};
  border: none;
  box-shadow: none;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.colors.body.gray};
`;
const NoImage = styled.div`
  border-radius: ${(props) => props.theme.space.border.m};
  border: none;
  box-shadow: none;
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.theme.colors.body.gray};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${(props) => props.theme.colors.body.darkGray};
  }
`;

export default NewProduct;
