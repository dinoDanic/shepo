import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Link from "next/link";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return <Container>index</Container>;
};

const Container = styled.div`
  padding: ${(props) => props.theme.space.padding.xl};
  margin-left: -${(props) => props.theme.space.margin.xl};
  width: 100%;
  border-radius: 20px 0 0 0;
  background-color: ${(props) => props.theme.colors.body.gray};
`;

export default Dashboard;
