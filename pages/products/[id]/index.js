import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import Title from "../../../components/typo/title.component";
import styled from "styled-components";
import Input from "../../../components/ui/input/input.component";

export async function getServerSideProps({ query }) {
  const { id } = query;
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);
  const postData = docSnap.data();
  return {
    props: { postData },
  };
}

const ProductDetails = ({ postData }) => {
  const { code, desc, id, name, price, weight } = postData;
  return (
    <Container>
      <Title>{name}</Title>
      <Row>
        <Name>Name</Name>:<Input variant="edit" value={name} />
      </Row>
    </Container>
  );
};

const Container = styled.div``;
const Name = styled.div``;
const Row = styled.div`
  display: flex;
  align-items: center;
`;

export default ProductDetails;
