import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { editProduct } from "../../../lib/firebase.fn";
import toast from "react-hot-toast";

import Title from "../../../components/typo/title.component";
import Input from "../../../components/ui/input/input.component";
import Button from "../../../components/ui/button/button.component";
import theme from "../../../infrastructure/theme";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  const postData = docSnap.data();
  return {
    props: { postData },
  };
}
var formatter = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "HRK",
});

const ProductDetails = ({ postData }) => {
  const { code, desc, id, name, price, weight } = postData;
  const [newName, setNewName] = useState(name);
  const [newDesc, setNewDesc] = useState(desc);
  const [newCode, setNewCode] = useState(code);
  const [newPrice, setNewPrice] = useState(price);
  const [newWeight, setNewWeight] = useState(weight);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (
      newName !== name ||
      newDesc !== desc ||
      newCode !== code ||
      newPrice !== price ||
      newWeight !== weight
    ) {
      setChange(true);
    } else {
      setChange(false);
    }
  }, [
    newName,
    newDesc,
    newCode,
    newPrice,
    newWeight,
    name,
    desc,
    code,
    price,
    weight,
  ]);

  const handleSaveChanges = () => {
    const newData = {
      code: newCode,
      desc: newDesc,
      name: newName,
      price: newPrice,
      weight: newWeight,
    };
    try {
      editProduct(newData, id);
    } catch (err) {
      console.log(err);
    } finally {
      toast(`post "${newName}" saved!`, {
        style: { background: "#33A744", color: "white" },
      });
      setChange(false);
    }
  };

  return (
    <>
      <Title>{newName}</Title>
      <Container>
        <Row>
          <InputName>Name:</InputName>
          <Input
            variant="edit"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </Row>
        <Row>
          <InputName>Code:</InputName>
          <Input
            variant="edit"
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
          />
        </Row>
        <Row>
          <InputName>Price:</InputName>
          <Input
            variant="edit"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
          />
        </Row>
        <Row>
          <InputName>Weight:</InputName>
          <Input
            variant="edit"
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
          />
        </Row>
        <Row>
          <InputName>ID:</InputName>
          <Id>{id}</Id>
        </Row>
        <Row>
          <InputName>Description:</InputName>
          <Input
            variant="edit"
            value={newDesc}
            onChange={(e) => setNewDesc(e.target.value)}
          />
        </Row>
        <ButtonContainer>
          {change ? (
            <Button onClick={handleSaveChanges}>Save Changes</Button>
          ) : (
            <Button color="forbidden">Save Changes</Button>
          )}
        </ButtonContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
const ButtonContainer = styled.div`
  position: absolute;
  bottom: ${(props) => props.theme.space.margin.xl};
`;
const InputName = styled.div`
  min-width: 150px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Id = styled.div`
  padding: ${(props) => props.theme.space.padding.m};
`;

export default ProductDetails;
