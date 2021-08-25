import Head from "next/head";
import styled from "styled-components";
const Home = () => {
  return <Test>hi</Test>;
};

const Test = styled.div`
  background-color: ${(props) => props.theme.colors.font.default};
`;

export default Home;
