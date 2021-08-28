import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import { editProduct } from "../../../lib/firebase.fn";
import toast from "react-hot-toast";

import Title from "../../../components/typo/title.component";
import Input from "../../../components/ui/input/input.component";
import Button from "../../../components/ui/button/button.component";
import Category from "../../../components/category/category.component";
import Spacer from "../../../components/spacer/spacer";
import BoxPop from "../../../components/ui/box-pop/box-pop.component";
import Delete from "../../../components/ui/delete/delete.component";

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
  const { code, desc, id, name, price, weight, category } = postData;
  const [isDelete, setIsDelete] = useState(false);
  const [editCategory, setEditCategory] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newDesc, setNewDesc] = useState(desc);
  const [newCode, setNewCode] = useState(code);
  const [newPrice, setNewPrice] = useState(price);
  const [newWeight, setNewWeight] = useState(weight);
  const [newCategory, setNewCategory] = useState(category);
  const [change, setChange] = useState(false);

  useEffect(() => {
    if (
      newName !== name ||
      newDesc !== desc ||
      newCode !== code ||
      newPrice !== price ||
      newWeight !== weight ||
      newCategory !== category
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
    newCategory,
    category,
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
      category: newCategory,
    };
    try {
      editProduct(newData, id);
    } catch (err) {
      console.log(err);
    } finally {
      toast(`post "${newName}" saved!`, {
        style: { background: "#05ce91", color: "white" },
      });
      setChange(false);
      setEditCategory(false);
    }
  };

  const handleDelete = () => {
    setIsDelete(true);
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
        <Row>
          <InputName>Category</InputName>
          <CatagoryContainer>
            {editCategory ? (
              <Category simple setCategory={setNewCategory} />
            ) : (
              <CatOption onClick={() => setEditCategory(true)}>
                {newCategory ? newCategory : "No category"}
              </CatOption>
            )}
          </CatagoryContainer>
        </Row>
      </Container>
      <ButtonContainer>
        <Button color="danger" icon="faTrashAlt" onClick={handleDelete} />
        <Spacer variant="right" size="s" />
        {change ? (
          <Button icon="faCheck" onClick={handleSaveChanges} />
        ) : (
          <Button icon="faCheck" color="forbidden" />
        )}
      </ButtonContainer>
      {isDelete && (
        <BoxPop variant="alert" layer={isDelete} setLayer={setIsDelete}>
          <Delete
            setLayer={setIsDelete}
            text={name}
            extra={id}
            fn="deleteProduct"
          />
        </BoxPop>
      )}
    </>
  );
};

const Container = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;
const CatOption = styled.div`
  cursor: pointer;
  padding: ${(props) => props.theme.space.padding.m};
`;
const ButtonContainer = styled.div`
  bottom: ${(props) => props.theme.space.margin.xl};
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.theme.space.margin.lg};
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
const CatagoryContainer = styled.div``;

export default ProductDetails;
