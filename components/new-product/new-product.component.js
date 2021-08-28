import React, { useState } from "react";
import styled from "styled-components";
import { createNewProduct } from "../../lib/firebase.fn";

import Spacer from "../spacer/spacer";
import Title from "../typo/title.component";
import Input from "../ui/input/input.component";
import TextArea from "../ui/text-area/text-area.component";
import Category from "../category/category.component";
import Button from "../ui/button/button.component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const NewProduct = ({ imageURL, setIsOpen }) => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("undefined");
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
      category,
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
          <Input
            text="Price"
            placeholder="Without tax"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Row>
        <Spacer variant="right" size="lg" />
        <Row>
          <InputC text="Image" type="file" />
          <Category setCategory={setCategory} />
          <ButtonContainer>
            <Button size="medium" onClick={handeNewProduct}>
              CREATE
            </Button>
          </ButtonContainer>
        </Row>
      </Form>
    </>
  );
};

const Header = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.xl};
`;
const Form = styled.div`
  display: flex;
  flex-wrap: wrap;
  input {
    margin-bottom: ${(props) => props.theme.space.margin.m};
  }
`;
const InputC = styled(Input)`
  max-height: 47.5px;
`;
const Row = styled.div`
  flex: 1;
  min-width: 200px;
`;
const Image = styled.img`
  border-radius: ${(props) => props.theme.space.border.m};
  border: none;
  box-shadow: none;
  width: 100%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.body.gray};
`;
const NoImage = styled.div`
  border-radius: ${(props) => props.theme.space.border.m};
  border: none;
  box-shadow: none;
  width: 100%;
  height: 250px;
  background-color: ${(props) => props.theme.colors.body.gray};
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => props.theme.space.margin.lg};
  align-items: center;
  svg {
    color: ${(props) => props.theme.colors.body.darkGray};
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.space.margin.lg};
`;

export default NewProduct;
