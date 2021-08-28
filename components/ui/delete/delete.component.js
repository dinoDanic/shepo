import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../../lib/firebase.fn";
import { toggleUi } from "../../../infrastructure/redux/ui/ui.actions";
import { useRouter } from "next/router";

import Title from "../../typo/title.component";
import Button from "../button/button.component";

const Delete = ({ text, fn, extra, setLayer }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleFn = () => {
    fns[fn](extra, currentUser.id);
    router.push("/products");
    dispatch(toggleUi(false));
  };
  const handleCancel = () => {
    setLayer(false);
    dispatch(toggleUi(false));
  };
  return (
    <Container>
      <Title>Sure you want to delete product {text} ?</Title>
      <Buttons>
        <Button color="gray" onClick={handleCancel}>
          Cancel
        </Button>
        <Button color="danger" onClick={handleFn}>
          Yes
        </Button>
      </Buttons>
    </Container>
  );
};

const fns = {
  deleteProduct,
};

const Container = styled.div``;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  button {
    min-width: 100px;
    display: flex;
    justify-content: center;
    &:first-child {
      margin-right: ${(props) => props.theme.space.margin.lg};
    }
  }
`;

export default Delete;
