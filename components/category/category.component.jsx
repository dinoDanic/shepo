import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

import { createNewCategory } from "../../lib/firebase.fn";

import Button from "../ui/button/button.component";
import Input from "../ui/input/input.component";

const Category = ({ setCategory, simple }) => {
  const [categorys, setCategorys] = useState([]);
  const [isNewCat, setIsNewCat] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  useEffect(() => {
    onSnapshot(doc(db, "categorys", "categorys"), (doc) => {
      if (doc.exists) {
        if (doc.data() !== undefined) {
          setCategorys(doc.data().categorys);
        }
      }
    });
  }, []);

  const submitForm = async (e) => {
    e.preventDefault();
    categorys.push(newCategory);
    await createNewCategory(categorys);
    setIsNewCat(false);
  };

  return (
    <>
      {!simple && <Text>Category</Text>}
      <Select
        name="cars"
        id="cars"
        onChange={(e) => setCategory(e.target.value)}
      >
        {categorys?.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
      {!simple && (
        <>
          {isNewCat ? (
            <Form onSubmit={submitForm}>
              <Input
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
            </Form>
          ) : (
            <Button
              size="medium"
              icon="faPlusSquare"
              onClick={() => setIsNewCat(!isNewCat)}
            >
              Category
            </Button>
          )}
        </>
      )}
    </>
  );
};

const Header = styled.div`
  display: flex;
`;
const Select = styled.select`
  border-radius: ${(props) => props.theme.space.border.lg};
  padding: ${(props) => props.theme.space.padding.lg};
  border: 1px solid ${(props) => props.theme.colors.body.grayer};
  margin-bottom: ${(props) => props.theme.space.margin.m};
  background-color: white;
  width: 100%;
`;
const Option = styled.option``;
const Text = styled.div`
  margin-bottom: ${(props) => props.theme.space.margin.m};
  margin-right: ${(props) => props.theme.space.margin.m};
`;
const ButtonC = styled(Button)`
  border-radius: ${(props) => props.theme.space.border.s};
`;
const Form = styled.form``;

export default Category;
