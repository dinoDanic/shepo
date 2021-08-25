import styled from "styled-components";
import { useSelector } from "react-redux";

import Dashboard from "./dashboard";
import Enter from "./enter";

const Home = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  return <Container>{currentUser ? <Dashboard /> : <Enter />}</Container>;
};

const Container = styled.div``;

export default Home;
