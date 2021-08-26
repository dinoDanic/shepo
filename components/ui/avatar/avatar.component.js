import React from "react";
import styled from "styled-components";

const Avatar = ({ imageURL }) => {
  return <Image src={imageURL} alt="profile image" />;
};

const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: ${(props) => props.theme.space.border.m};
`;

export default Avatar;
